export type RegistrationPayload = {
  firstName: string;
  email: string;
  location?: string;
  healthAcknowledged: boolean;
  marketingConsent: boolean;
};

export type RegistrationResult =
  | { ok: true; mode: "live" }
  | { ok: true; mode: "preview" }
  | { ok: false; message: string };

const endpoint = import.meta.env.VITE_REGISTRATION_ENDPOINT as string | undefined;

export const registrationAdapter = {
  async submit(payload: RegistrationPayload): Promise<RegistrationResult> {
    if (!endpoint) {
      return { ok: true, mode: "preview" };
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) return { ok: false, message: "Registration could not be submitted." };
      return { ok: true, mode: "live" };
    } catch {
      return { ok: false, message: "Registration could not be submitted." };
    }
  },
};

export const paymentAdapter = {
  checkoutUrl: (import.meta.env.VITE_CHECKOUT_URL as string | undefined) ?? null,
};
