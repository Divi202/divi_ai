import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col bg-custom-white ">
      <Navbar></Navbar>
      <div className=" flex-1 max-w-5xl mx-auto py-5 px-5 md:py-10 md:px-10">
        <Card className="bg-custom-black opacity-98 text-custom-white rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading font-bold text-2xl md:text-3xl">
              Privacy Policy
            </CardTitle>
            <p className="text-sm font-light text-custom-white">
              Last updated: July 20, 2025
            </p>
          </CardHeader>
          <CardContent className="font-light space-y-4 text-sm leading-6 text-custom-white ">
            <p>
              We at <strong>Divi AI </strong> (“we”, “our”, “us”) respect your
              privacy and are committed to protecting it. This Privacy Policy
              explains how we collect, use, and safeguard your information when
              you visit our website and sign up for our waitlist.
            </p>
            <p>
              By submitting your email address on our site, you agree to this
              Privacy Policy.
            </p>

            <h3 className="font-semibold text-base text-custom-white mt-6">
              1. Information We Collect
            </h3>
            <p>We only collect:</p>
            <ul className="list-disc pl-6 text-custom-white">
              <li>Your email address when you sign up for our waitlist.</li>
            </ul>
            <p>
              We do not collect any sensitive personal data or payment
              information at this stage.
            </p>

            <h3 className="font-semibold text-base text-custom-white mt-6">
              2. How We Use Your Information
            </h3>
            <p>We use your email address:</p>
            <ul className="list-disc pl-6">
              <li>To notify you about the launch of our service.</li>
              <li>To occasionally share updates about our progress.</li>
            </ul>
            <p>
              We will not sell, rent, or share your information with third
              parties for marketing purposes.
            </p>

            <h3 className="font-semibold text-base text-custom-white mt-6">
              3. Data Security
            </h3>
            <p>
              We implement reasonable security measures to protect your
              information against unauthorized access, disclosure, or misuse as
              per the Information Technology (Reasonable Security Practices and
              Procedures and Sensitive Personal Data or Information) Rules,
              2011.
            </p>

            <h3 className="font-semibold text-base text-custom-white mt-6">
              4. Your Rights
            </h3>
            <p>You may:</p>
            <ul className="list-disc pl-6">
              <li>Request to know what data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Opt-out of receiving future emails from us.</li>
            </ul>
            <p>
              You can contact us at the email below to exercise these rights.
            </p>

            <h3 className="font-semibold text-base text-custom-white mt-6">
              5. Contact Us
            </h3>
            <p>
              If you have any questions about this Privacy Policy or how your
              information is used, please contact us at:
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-blue-600 hover:underline"
              >
                your-email@example.com
              </a>
            </p>

            <h3 className="font-semibold text-base text-custom-white mt-6">
              6. Changes to This Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time. Please check
              this page periodically for changes.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default PrivacyPolicy;
