import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LegalPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white pt-[112px] pb-20 px-4 sm:px-8 lg:px-[2cm] font-sans">
      <div className="max-w-[1000px] mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-intense-indigo/60 hover:text-intense-indigo transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <h1 className="font-sans text-4xl md:text-5xl font-bold text-intense-indigo mb-12 tracking-tight">
          Legal & Privacy
        </h1>

        <div className="space-y-12 text-intense-indigo/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-intense-indigo mb-4 flex items-center">
              <span className="mr-3 text-sm bg-intense-indigo/5 px-2 py-1 rounded">1.</span>
              About our Terms
            </h2>
            <div className="space-y-4 pl-10">
              <p>
                1.1. We are Sierra Research Fund ("we", "us", or "our"), a research and education platform dedicated to financial analysis and market strategies. Our mission is to bridge the gap between financial theory and practical application.
              </p>
              <p>
                1.2. These Terms and Conditions apply whenever you use our website, mobile applications, and online digital services (together "Sierra Services") and access the content available on them.
              </p>
              <p>
                1.3. You should read these Terms and Conditions carefully before using Sierra Services. By accessing, using or subscribing to any of the above, you agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-intense-indigo mb-4 flex items-center">
              <span className="mr-3 text-sm bg-intense-indigo/5 px-2 py-1 rounded">2.</span>
              Your Subscription to Sierra Services
            </h2>
            <div className="space-y-4 pl-10">
              <p>
                2.1. We offer a range of subscriptions to our digital platform, including trial periods and full memberships. Each subscription is for a single user only.
              </p>
              <p>
                2.2. You may purchase a subscription by submitting an order and providing the sign-up details on our platform. We will only accept your order when we have successfully verified your email address and processed your payment details.
              </p>
              <p>
                2.3. You agree to pay the subscription fees at the rates and in the currency displayed during the process. Prices may vary from time to time and by country.
              </p>
              <p>
                2.4. We may suspend or terminate your subscription if you share your access rights with any third parties, or attempt to allow third parties to avoid our control of access to the platform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-intense-indigo mb-4 flex items-center">
              <span className="mr-3 text-sm bg-intense-indigo/5 px-2 py-1 rounded">3.</span>
              Using Sierra Content
            </h2>
            <div className="space-y-4 pl-10">
              <p>
                3.1. All intellectual property rights in Sierra Services and content are owned by us or our licensors. You are permitted to use the content only as set out in our policies.
              </p>
              <p>
                3.2. We expressly prohibit any use of our content or data in any manner for any machine learning and/or artificial intelligence purposes, including without limitation for the purposes of training or development of artificial intelligence technologies.
              </p>
              <p>
                3.3. It is your responsibility to keep your ID and password confidential. All information received by us from your use of Sierra Content will be used in accordance with our Privacy Policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-intense-indigo mb-4 flex items-center">
              <span className="mr-3 text-sm bg-intense-indigo/5 px-2 py-1 rounded">4.</span>
              Your Privacy and Personal Information
            </h2>
            <div className="space-y-4 pl-10">
              <p>
                4.1. Your privacy and personal information are important to us. Any personal information that you provide to us will be dealt with in line with our Privacy Policy, which explains what personal information we collect from you, how and why we collect, store, use and share such information.
              </p>
            </div>
          </section>

          <section id="billing-terms">
            <h2 className="text-xl font-bold text-intense-indigo mb-4 flex items-center">
              <span className="mr-3 text-sm bg-intense-indigo/5 px-2 py-1 rounded">5.</span>
              Billing and Payment Terms
            </h2>
            <div className="space-y-4 pl-10">
              <p>
                5.1. Membership fees are billed in advance at the start of each subscription period (monthly or annually). All payments are non-refundable unless otherwise required by law.
              </p>
              <p>
                5.2. By providing a payment method, you authorize us to charge the applicable fees via that method. You are responsible for maintaining valid and current payment information.
              </p>
              <p>
                5.3. Subscriptions automatically renew at the end of the period unless cancelled through your account dashboard or via email support 48 hours prior to the renewal date.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-intense-indigo mb-4 flex items-center">
              <span className="mr-3 text-sm bg-intense-indigo/5 px-2 py-1 rounded">6.</span>
              Limitation on our Liability
            </h2>
            <div className="space-y-4 pl-10">
              <p>
                6.1. Sierra makes no warranty, express or implied, regarding your subscription or services, which are provided 'as is'. We expressly disclaim all warranties to the extent permitted by law.
              </p>
              <p>
                6.2. Our total liability to you shall not exceed the total sums paid by you for your current subscription. We shall not be liable for any indirect or consequential loss.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-intense-indigo mb-4 flex items-center">
              <span className="mr-3 text-sm bg-intense-indigo/5 px-2 py-1 rounded">7.</span>
              Help and Support
            </h2>
            <div className="space-y-4 pl-10">
              <p>
                7.1. For any questions regarding your membership, billing, or access, please contact our support team at <a href="mailto:sierraresearchfund@gmail.com" className="text-intense-indigo underline">sierraresearchfund@gmail.com</a>.
              </p>
              <p>
                7.2. We aim to respond to all support requests within 24-48 business hours.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100 text-sm text-intense-indigo/40">
          Last updated: March 26, 2026
        </div>
      </div>
    </main>
  );
}
