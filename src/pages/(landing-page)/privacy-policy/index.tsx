export default function PrivacyPolicy(){
    return(
    <main className={"flex flex-col bg-white dark:bg-bg-dark px-[5%] md:px-[15%] mb-12"}>
        <h1 className={"flex justify-center h-fit w-full items-center mt-8 mb-4 font-bold text-3xl text-[#071a37]"}>Privacy Policy</h1>
        <h4 className="text-md font-medium">Effective Date: 05/02/25</h4>
        <div>
            <h2 className="font-semibold text-xl mb-2 mt-4">Introduction</h2>
            <p>
                At Ashdeck, a product of Ashdeck Analytics Limited, your privacy is a top priority. We are
                committed to protecting the personal information you share with us using our Ashdeck
                Chrome Extension, website blocker, and Pomodoro timer features. This Privacy Policy
                outlines how we collect, use, and safeguard data. <br />
                By using Ashdeck (including our free website blocker and Pomodoro timer features), you
                consent to collecting and using information by this policy. If you do not agree with the terms
                outlined in this Privacy Policy, please refrain from using our Service.
            </p>
        </div>

        <ol className="list-decimal mx-4 flex flex-col gap-6 mt-8 font-semibold text-[1.1rem]">
            <li className="">
                <h2 className="font-semibold">Information we collect</h2>
                <div className="font-normal text-base">
                    <p>We collect the following type of information:</p>

                    <ul className="list-disc mx-8 mt-4 flex flex-col gap-4">
                        <li><p><span className="font-semibold">Personal information:</span> When you sign up for an account or use the <span className="font-semibold"> website blocker </span>
                        and <span className="font-semibold">Pomodoro timer</span> features, we collect personal details such as your name, email
                        address, and payment information if applicable.</p></li>

                        <li><p><span className="font-semibold">Usage Data:</span> Ashdeck automatically collects usage data when you interact with the 
                        <span className="font-semibold"> website blocker</span> or use the <span className="font-semibold">Pomodoro timer</span>. This includes how often you use these
                        features and the websites you block. This helps us improve our service and tailor our
                        <span className="font-semibold"> website blocker</span> features to better meet your needs.</p></li>

                        <li><p><span className="font-semibold">Cookies and Tracking Technologies:</span> We use cookies and similar tracking
                        technologies to enhance your experience with Ashdeck. Cookies help us remember
                        your preferences, like which websites you block and how often you use the
                        <span className="font-semibold"> Pomodoro timer</span>. You can control cookie settings through your browser.</p></li>
                    </ul>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">How We Use Your Information</h2>
                <div className="font-normal text-base">
                    <p>We use the information we collect for the following purposes::</p>

                    <ul className="list-disc mx-8 mt-4 flex flex-col gap-4">
                        <li><p><span className="font-semibold">To Provide and Improve Our Service:</span> We use your data to deliver the <span className="font-semibold"> website blocker </span> and <span className="font-semibold">Pomodoro timer</span>  functionalities, ensuring they work as intended. This
                        includes understanding your usage patterns to enhance features and make them
                        more efficient.</p></li>

                        <li><p><span className="font-semibold">To Communicate with You:</span> We may send you notifications regarding updates to our
                        <span className="font-semibold"> free website blocker </span> or <span className="font-semibold">Pomodoro timer</span>, service-related news, and promotional
                        offers, but only if you've opted in.</p></li>

                        <li><p><span className="font-semibold">For Customer Support:</span> If you need assistance with the <span className="font-semibold"> website blocker</span>,
                        <span className="font-semibold"> Pomodoro timer</span>, or any other aspect of Ashdeck, we use your contact information
                        to respond to your inquiries and provide support.</p></li>
                    </ul>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Data Security</h2>
                <div className="font-normal text-base">
                    <p>We take your data security seriously. We employ industry-standard security measures to
                    protect your data when you use Ashdeck’s <span className="font-semibold">website blocker</span> and <span className="font-semibold">Pomodoro timer</span> tools.
                    However, please note that no method of electronic storage or transmission is 100% secure.
                    While we strive to use commercially acceptable means to protect your data, we cannot
                    guarantee its absolute security.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Data Retention</h2>
                <div className="font-normal text-base">
                    <p>We retain your personal information as long as necessary to provide our Service and fulfill
                    the purposes outlined in this Privacy Policy. This includes retaining data related to your
                    <span className="font-semibold"> website blocker</span> and <span className="font-semibold">Pomodoro timer</span> usage for analytical purposes or to respond to your
                    requests. If you delete your account or stop using Ashdeck, we will retain your data for a
                    period required by law, after which it will be securely deleted.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Your Rights</h2>
                <div className="font-normal text-base">
                    <p>As a user of Ashdeck, you have the following rights regarding your personal information:</p>

                    <ul className="list-disc mx-8 my-4 flex flex-col gap-4">
                        <li><p><span className="font-semibold">Access Your Data:</span> You can request a copy of the personal data we hold about you.</p></li>

                        <li><p><span className="font-semibold">Correct or Update Your Information:</span> You can update your details if they are
                        inaccurate or incomplete.</p></li>

                        <li><p><span className="font-semibold">Delete Your Account:</span> You can delete your account at any time. If you do so, we will
                        remove your data from our system, except where we are legally required to retain it.</p></li>
                    </ul>
                    <p>For any of these requests, please contact us at promise@ashdeck.com</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Sharing of Data</h2>
                <div className="font-normal text-base">
                    <p>Ashdeck does not sell, trade, or rent your personal information to third parties. However, we
                    may share your data in the following cases:</p>

                    <ul className="list-disc mx-8 my-4 flex flex-col gap-4">
                        <li><p><span className="font-semibold">With Service Providers:</span> We may share your data with third-party companies that
                        help us provide and maintain the <span className="font-semibold">website blocker</span> and <span className="font-semibold">Pomodoro timer</span> features,
                        such as payment processors or technical support teams.</p></li>

                        <li><p><span className="font-semibold">For Legal Compliance:</span> If required by law, we may disclose your information to
                        comply with legal obligations or to protect the rights and safety of Ashdeck and its
                        users.</p></li>
                    </ul>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Data Transfer</h2>
                <div className="font-normal text-base">
                    <p>Ashdeck is based in Italy, and your personal information may be transferred to
                    and stored in countries outside your own. By using the <span className="font-semibold">website blocker</span>, <span className="font-semibold">Pomodoro timer</span>,
                    or any other Ashdeck service, you consent to the transfer of your data to these locations,
                    where data protection laws may differ from those in your country.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Children's Privacy</h2>
                <div className="font-normal text-base">
                    <p>Ashdeck does not knowingly collect personal information from children under the age of 13.
                    If we learn that a child under 13 has provided us with personal information, we will promptly
                    delete such data.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Changes to This Privacy Policy</h2>
                <div className="font-normal text-base">
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices,
                    technology, or legal requirements. Any updates will be posted on this page with a new
                    effective date. We encourage you to review this policy periodically to stay informed about
                    how we are protecting your data.</p>
                </div>
            </li>

            <li className="">
                <h2 className="font-semibold">Contact Us</h2>
                <div className="font-normal text-base">
                    <p>If you have any questions about this Privacy Policy, or if you would like to exercise your
                    rights regarding your personal information, please contact us at promise@ashdeck.com</p>
                </div>
            </li>
        </ol>
    </main>)
}