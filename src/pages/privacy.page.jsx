const PrivacyPage = () => {
  return (
    <main className="w-[80%] py-8 mx-auto">
      <p className="text-lg font-bold mt-[120px]">
        Privacy Policy for Medic Sewa Pvt. Ltd.
      </p>
      <p className="text-sm">
        Last updated: 24<sup>th</sup> October, 2024
      </p>

      <p className="mt-8">
        At <strong>Medic Sewa Pvt. Ltd.</strong>, we value your privacy and are
        committed to protecting your personal data. This Privacy Policy outlines
        how we collect, use, and safeguard your information when using our app,
        which integrates WhatsApp for advertising and business reminders. By
        using our app, you agree to the collection and use of information in
        accordance with this policy.
      </p>

      <div className="flex flex-col space-y-4 mt-8">
        <section>
          <h2 className="font-semibold">1. Information We Collect</h2>
          <p>
            We may collect the following types of information when you use our
            app:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and other contact details.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with our app, such as message history, clicks on ads, and other
              in-app activity.
            </li>
            <li>
              <strong>Device Information:</strong> IP address, browser type,
              device type, operating system, and other technical data.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold">2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>
              <strong>To Provide and Maintain the Service:</strong> To send
              messages, advertisements, and business reminders via WhatsApp.
            </li>
            <li>
              <strong>To Improve the App:</strong> To analyze usage patterns and
              improve the performance and functionality of the app.
            </li>
            <li>
              <strong>To Communicate with You:</strong> To respond to your
              inquiries, provide updates, and offer customer support.
            </li>
            <li>
              <strong>To Comply with Legal Requirements:</strong> To meet any
              legal obligations or government requests.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold">
            3. Data Sharing and Third-Party Services
          </h2>
          <p>
            We may share your data with third parties only under the following
            circumstances:
          </p>
          <ul>
            <li>
              <strong>WhatsApp:</strong> As the app integrates with WhatsApp,
              your contact information and messages will be shared with WhatsApp
              to facilitate communications.
            </li>
            <li>
              <strong>Service Providers:</strong> We may use third-party
              services (e.g., hosting providers, analytics services) that
              process your data to support our operations.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required to do so by law or in response to valid
              requests by public authorities.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold">4. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy. Afterward, we
            will securely delete or anonymize your data in accordance with
            applicable laws.
          </p>
        </section>
        <section>
          <h2 className="font-semibold">5. Security of Your Information</h2>
          <p>
            We take the security of your personal data seriously and implement
            appropriate measures to protect it from unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the Internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>
        <section>
          <h2 className="font-semibold">6. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li>
              <strong>Access and Correction:</strong> You have the right to
              access the personal data
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;
