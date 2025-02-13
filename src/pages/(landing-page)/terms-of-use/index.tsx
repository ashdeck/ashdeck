export default function TermsOfUse(){
    return(
    <main className={"flex flex-col bg-white dark:bg-bg-dark px-[5%] md:px-[15%] mb-12"}>
        <h1 className={"flex justify-center h-fit w-full items-center mt-8 mb-4 font-bold text-3xl text-[#071a37]"}>Terns and Conditions for Asdeck</h1>
        <h4 className="text-md font-medium">Effective Date: 05/02/25</h4>
        <div>
            <p className="mt-4">
                Welcome to Ashdeck, a service provided by <span className="font-semibold">Ashdeck Analytics Limited</span>. These Terms and
                Conditions ("Terms") govern your use of the <span className="font-semibold">Ashdeck website</span> and <span className="font-semibold">Ashdeck Chrome Extension </span>
                (collectively, the “Service”). By accessing or using the Service, you agree to be
                bound by these Terms. If you do not agree to these Terms, you must not use the Service.
            </p>
        </div>

        <ol className="list-decimal mx-4 flex flex-col gap-6 mt-8 font-semibold text-[1.1rem]">
            <li className="">
                <h2 className="font-semibold">Acceptance of Terms</h2>
                <div className="font-normal text-base">
                    <p>By accessing or using the Service, you affirm that you are at least 18 years of age and have
                    the legal authority to enter into these Terms. If you do not agree to these Terms, you should
                    immediately discontinue use of the Service.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Change to Terms</h2>
                <div className="font-normal text-base">
                    Ashdeck Analytics Limited reserves the right to modify or update these Terms at any time
                    without prior notice. Any changes to these Terms will be posted on this page with the
                    updated date. It is your responsibility to review these Terms periodically. Your continued use
                    of the Service after such modifications will constitute your acceptance of the updated Terms.
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Account Registration</h2>
                <div className="font-normal text-base">
                    <p>To use certain features of Ashdeck, including premium features like the Pomodoro timer
                    and advanced website blocker tools, you may be required to create an account. You agree
                    to provide accurate, current, and complete information during registration and to update such
                    information as necessary.</p>
                    <ul className="list-disc mx-8 mt-4 flex flex-col gap-4">
                        <li><p><span className="font-semibold">Account Security:</span> You are responsible for maintaining the confidentiality of your
                        account credentials and for all activities that occur under your account. You agree to
                        notify us immediately if you believe your account has been compromised.</p></li>
                    </ul>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">License Grant</h2>
                <div className="font-normal text-base">
                    <p>Ashdeck grants you a non-exclusive, non-transferable, and revocable license to use the
                    Service on your device, solely for personal, non-commercial use by these Terms. You may
                    not copy, modify, distribute, sell, or lease any part of the Service, including the website
                    blocker and Pomodoro timer features.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Prohibited Use</h2>
                <div className="font-normal text-base">
                    <p>You agree not to use the Service for any unlawful or prohibited purposes, including but not
                    limited to:</p>

                    <ul className="list-disc mx-8 mt-4 flex flex-col gap-4">
                        <li>Engaging in activities that interfere with or disrupt the operation of the Service.</li>

                        <li>Using Ashdeck’s website blocker to block websites or content that violates the rights
                        of others or is illegal.</li>

                        <li>Attempting to reverse-engineer, decompile, or extract the source code from the
                        Service.</li>
                    </ul>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Subscription and Payment</h2>
                <div className="font-normal text-base">
                    <p>Ashdeck offers both free and premium subscriptions for access to additional features such
                    as advanced website blocker settings and the Pomodoro timer. By subscribing to the
                    Service, you agree to pay the subscription fee as outlined at the time of purchase.</p>

                    <ul className="list-disc mx-8 mt-4 flex flex-col gap-4">
                        <li><p><span className="font-semibold">Payment Terms:</span> All payments will be processed through a secure payment gateway.
                        You agree to provide accurate payment information and are responsible for any
                        charges incurred through your account.</p></li>

                        <li><p><span className="font-semibold">Cancellations and Refunds:</span> You may cancel your subscription at any time through
                        your account settings. If you have a subscription-based plan, you may be eligible for
                        a refund as per the terms outlined during your purchase.</p></li>
                    </ul>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Privacy Policy</h2>
                <div className="font-normal text-base">
                    <p>Your use of the Service is also governed by our Privacy Policy, which explains how we
                    collect, use, and protect your personal information. By using Ashdeck, you consent to the
                    data practices outlined in the Privacy Policy.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Termination</h2>
                <div className="font-normal text-base">
                    <p>We reserve the right to suspend or terminate your access to the Service if we believe you
                    have violated these Terms. Upon termination, your right to use the Service will immediately
                    cease. You may also deactivate your account at any time through your account settings.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Data Security</h2>
                <div className="font-normal text-base">
                    <p>We take reasonable steps to protect your personal information and ensure the security of the
                    Service. However, no method of transmission over the Internet or method of electronic
                    storage is 100% secure, and we cannot guarantee absolute security. We use encryption and
                    other security measures to protect your data when using features like the website blocker
                    and Pomodoro timer.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Disclaimers of Liability</h2>
                <div className="font-normal text-base">
                    <ul className="list-disc mx-8 mt-4 flex flex-col gap-4">
                        <li><p><span className="font-semibold">No Warranty:</span> Ashdeck is provided "as is" without any warranties or guarantees. We
                        do not warrant that the Service, including the website blocker and Pomodoro
                        timer, will be uninterrupted, secure, or free from errors.</p></li>

                        <li><p><span className="font-semibold">Limitation of Liability:</span> Ashdeck Analytics Limited is not liable for any indirect,
                        incidental, or consequential damages arising from your use of the Service. In no
                        event shall our liability exceed the amount paid by you for the Service during the
                        twelve months preceding the claim.</p></li>
                    </ul>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Indemnification</h2>
                <div className="font-normal text-base">
                    <p>These Terms shall be governed by and construed by the laws of [Insert Jurisdiction], without
                    regard to its conflict of law principles. Any disputes arising out of or relating to these Terms
                    shall be resolved in the courts of Italy.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Severability</h2>
                <div className="font-normal text-base">
                    <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining
                    provisions shall remain in full force and effect.</p>
                </div>
            </li>

            <li>
                <h2 className="font-semibold">Entire Agreement</h2>
                <div className="font-normal text-base">
                    <p>These Terms, together with the Privacy Policy, constitute the entire agreement between you
                    and Ashdeck Analytics Limited regarding the use of the Service. Any previous agreements,
                    oral or written, are superseded by these Terms.</p>
                </div>
            </li>

            <li>
                <h2 className="font-semibold">Contact Us</h2>
                <div className="font-normal text-base">
                    <p>If you have any questions or concerns about these Terms, please contact us at:
                    Promise@ashdeck.com</p>
                </div>
            </li>
        </ol>
    </main>)
}