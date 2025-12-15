import { useState } from "react";

type BillingCycle = "monthly" | "annual" | "lifetime";

interface SubscribePayload {
  package: BillingCycle;
  discount_code?: string | null;
  email?: string | null;
  name?: string | null;
}

interface SubscribeResponse {
  checkout_url?: string;
}

/* -------------------- Inline subscribe helper -------------------- */
const subscribe = async (
  data: SubscribePayload
): Promise<SubscribeResponse> => {
  const res = await fetch("https://api.ashdeck.com/subscriptions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Subscription request failed");
  }

  return res.json();
};

/* -------------------- Component -------------------- */

export default function Pricing() {
  const [discountCode] = useState<string>("ASHDECK35");
  const [loading, setLoading] = useState<BillingCycle | null>(null);

  const handleSubscribe = async (
    pkg: BillingCycle,
    discount_code: string | null = null
  ): Promise<void> => {
    if (pkg !== "monthly") {
      discount_code = discountCode;
    }

    const email = localStorage.getItem("user_email");
    const name = localStorage.getItem("user_name");

    try {
      setLoading(pkg);

      const res = await subscribe({
        package: pkg,
        discount_code,
        email,
        name,
      });

      if (res?.checkout_url) {
        window.location.href = res.checkout_url;
      } else {
        throw new Error("Missing checkout URL");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to start checkout. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="max-w-[90%] sm:max-w-[70%] mx-auto flex flex-col gap-16 xl:max-w-[70%] py-20">
      
      {/* -------------------- Header -------------------- */}
      <div>
        <h1 className="text-left md:text-center font-semibold lg:font-bold text-2xl lg:text-3xl xl:text-4xl mb-4">
          Ashdeck Premium Pricing 💳
        </h1>
        <p className="text-left md:text-center text-black/70 max-w-2xl mx-auto">
          Pick the plan that fits your workflow. Upgrade anytime. No hidden fees.
        </p>
      </div>

      {/* -------------------- Features -------------------- */}
      <div>
        <h2 className="font-semibold mb-4 text-2xl md:text-3xl">
          Everything included
        </h2>
        <ul className="grid md:grid-cols-2 gap-4">
          <li>✔︎ Unlimited site blocking</li>
          <li>✔︎ Unlimited focus sessions</li>
          <li>✔︎ Unlimited tasks & reminders</li>
          <li>✔︎ App integrations</li>
          <li>✔︎ Daily weather & inspiration</li>
          <li>✔︎ Custom quotes & mantras</li>
          <li>✔︎ Calendar tracking</li>
          <li>✔︎ Changeable wallpapers</li>
          <li>✔︎ Premium focus sound</li>
        </ul>
      </div>

      {/* -------------------- Plans -------------------- */}
      <div>
        <h2 className="font-semibold mb-8 text-2xl md:text-3xl">
          Choose your plan
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          
          {/* Monthly */}
          <div className="border rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Monthly
              </h3>
              <p className="text-3xl font-bold mb-1">$6</p>
              <p className="text-black/60">Billed monthly</p>
            </div>

            <button
              disabled={loading === "monthly"}
              onClick={() => handleSubscribe("monthly")}
              className="mt-8 py-2 rounded-md border border-primary hover:text-white hover:bg-primary transition disabled:opacity-50"
            >
              {loading === "monthly" ? "Loading" : "Subscribe"}
            </button>
          </div>

          {/* Annual */}
          <div className="border border-primary rounded-xl p-6 flex flex-col justify-between relative">
            <span className="absolute -top-3 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
              Save 50%
            </span>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Annual
              </h3>
              <p className="text-3xl font-bold mb-1">$3</p>
              <p className="text-black/60">Per month, billed yearly</p>
            </div>

            <button
              disabled={loading === "annual"}
              onClick={() => handleSubscribe("annual")}
              className="mt-8 py-2 rounded-md bg-primary text-white hover:opacity-90 transition disabled:opacity-50"
            >
              {loading === "annual" ? "Loading" : "Go Annual"}
            </button>
          </div>

          {/* Lifetime */}
          <div className="border rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Lifetime
              </h3>
              <p className="text-3xl font-bold mb-1">$150</p>
              <p className="text-black/60">
                One-time payment. No renewals.
              </p>
            </div>

            <button
              disabled={loading === "lifetime"}
              onClick={() => handleSubscribe("lifetime")}
              className="mt-8 py-2 rounded-md border border-primary hover:bg-primary hover:text-white transition disabled:opacity-50"
            >
              {loading === "lifetime" ? "Loading" : "Get Lifetime Access"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
