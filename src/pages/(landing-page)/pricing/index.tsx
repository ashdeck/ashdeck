import { useState } from "react";

type BillingCycle = "monthly" | "annual" | "lifetime";
import FAQSection from "../home/_components/FAQ";
import SecuritySection from "../home/_components/SecuritySection";

interface SubscribePayload {
  package: BillingCycle;
  discount_code?: string | null;
  email?: string | null;
  name?: string | null;
}

interface SubscribeResponse {
  checkout_url?: string;
}

type FAQItem = {
  question: string;
  answer: string | JSX.Element;
};

const pricingFaqItems: FAQItem[] = [
  {
    question: "What is Ashdeck and how does it work?",
    answer:
      "Ashdeck is a productivity website blocker and focus tool built for freelancers, startup founders, tech professionals, students, remote workers, and anyone who struggles with distractions or ADHD. It works directly in your browser, helping you block distracting websites, run Pomodoro focus sessions, manage tasks, and stay productive without switching apps."
  },
  {
    question: "What’s included in Ashdeck Premium?",
    answer:
      "Ashdeck Premium includes unlimited website blocking, Pomodoro focus timers, scheduled blocking, task management, personalized dashboards, focus sounds, wallpapers, weather widgets, and priority support — all designed to help you stay focused and productive."
  },
  {
    question: "Do you offer annual and lifetime plans?",
    answer:
      "Yes. Ashdeck offers flexible pricing with both annual subscriptions and a one-time Lifetime (Forever) plan, so you can choose what works best for your long-term productivity needs."
  },
  {
    question: "Will my subscription auto-renew?",
    answer: (
      <div className="flex flex-col gap-2">
        <p>• Annual subscriptions auto-renew unless canceled.</p>
        <p>• Lifetime plans are a one-time payment and never auto-renew.</p>
        <p>You can manage or cancel auto-renew at any time from your account settings.</p>
      </div>
    )
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Ashdeck does not generally offer refunds. However, users in the EU or UK may request a refund within 14 days of their first purchase, in accordance with consumer protection laws. To request a refund, contact promise@ashdeck.com."
  },
  {
    question: "Do you offer discounts on Ashdeck Premium?",
    answer:
      "Discounts or promotional offers may be available from time to time. Availability and eligibility are determined at Ashdeck’s discretion."
  },
  {
    question: "How do I upgrade to Ashdeck Premium?",
    answer: (
      <div>
        <p className="mb-2">To upgrade:</p>
        <ol className="list-decimal ml-6 flex flex-col gap-2">
          <li>Open the Ashdeck extension</li>
          <li>Open the menu</li>
          <li>Click <strong>Subscribe</strong></li>
          <li>Choose your plan and complete checkout</li>
        </ol>
      </div>
    )
  },
  {
    question: "How is my payment information handled?",
    answer:
      "Payments are processed securely through DodoPayments. Ashdeck does not store or have access to your credit card information."
  },
  {
    question: "Can I schedule website blocking?",
    answer:
      "Yes. Ashdeck allows you to schedule website blocking for specific times and days, making it ideal for work hours, study sessions, or Pomodoro focus blocks."
  },
  {
    question: "Does Ashdeck work in Incognito Mode?",
    answer:
      "Yes, but it must be enabled manually. Go to Chrome Extensions → Ashdeck → Details → Enable 'Allow in Incognito'."
  },
  {
    question: "Does Ashdeck track my browsing data?",
    answer:
      "No. Ashdeck is privacy-first and does not track, collect, or store personal browsing data. Everything stays on your device."
  },
  {
    question: "Is Ashdeck suitable for ADHD and focus challenges?",
    answer:
      "Yes. Ashdeck is designed to support users with ADHD, procrastination, or focus challenges by providing structure through website blocking, Pomodoro sessions, and personalized productivity dashboards."
  },
  {
    question: "Why is Ashdeck a paid product?",
    answer:
      "Premium subscriptions support ongoing development, infrastructure costs, and new features. This allows Ashdeck to remain ad-free, privacy-focused, and reliable for long-term use."
  }
];

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
    <div>
    <div className="max-w-[90%] mx-auto flex flex-col gap-12 xl:max-w-[70%] py-20">
      
      {/* -------------------- Header -------------------- */}
      <div>
        <h1 className="text-left md:text-center font-semibold lg:font-bold text-2xl lg:text-3xl xl:text-4xl mb-4">
          Ashdeck Premium Pricing 💳
        </h1>
        <p className="text-left md:text-center text-black/70 max-w-2xl mx-auto">
          Pick the plan that fits your workflow. Upgrade anytime. No hidden fees.
        </p>
      </div>

      {/* -------------------- Plans -------------------- */}
      <div>
        <h2 className="font-semibold mb-8 text-2xl md:text-3xl">
          Choose your plan
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          
          {/* Monthly */}
          <div className="border rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Monthly
              </h3>
              <p className="text-3xl font-semibold mb-1">$6</p>
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
              <p className="text-3xl font-semibold mb-1">$3</p>
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
              <p className="text-3xl font-semibold mb-1">$150</p>
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

        {/* -------------------- Features -------------------- */}
      <div className="mt-16">
        <h2 className="font-semibold mb-4 mt-12 text-2xl md:text-3xl">
          Everything included
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 md:gap-8">
          <li>🌐 Unlimited website blocking – Block social media, news, and distracting sites
</li>
          <li>🕒 Unlimited focus sessions & Pomodoro timers – Structure deep work hours

</li>
          <li>🗓 Schedule website blocking – Automatically block sites during work, study, or focus hours
</li>
          <li>📝 Unlimited tasks & lists with reminders – Organize your day efficiently
</li>
          <li>🔗 App integrations – Connect with your workflow tools seamlessly
</li>
          <li>💬 Custom quotes & mantras – Stay motivated while working

</li>
          <li>🌤 Daily weather & inspiration – Personalize your workspace
</li>
          <li>🖼 Changeable wallpapers – Create a focus-friendly environment
</li>
          <li>🎧 Premium focus sounds – Concentrate better during deep work sessions</li>
          <li>
🔒 Privacy-first design – Ashdeck does not track or store your browsing data
</li>
          <li>💬 Priority support – Get help when you need i</li>
        </ul>
      </div>

      </div>
    </div>
    <div className="">
      <SecuritySection />
      </div>
      <FAQSection faqItems={pricingFaqItems} />
    </div>
  );
}
