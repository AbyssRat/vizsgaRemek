import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const Legal: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl mb-8 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          Legal Documents
        </h1>

        <Tabs defaultValue="terms" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
          </TabsList>

          <TabsContent value="terms">
            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'var(--font-serif)' }}>Terms of Service</CardTitle>
                <p className="text-sm text-muted-foreground">Last updated: March 16, 2026</p>
              </CardHeader>
              <CardContent className="prose max-w-none space-y-6 text-muted-foreground">
                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">1. Acceptance of Terms</h3>
                  <p className="text-sm leading-relaxed">
                    By accessing and using Bibliothèque's services, you agree to be bound by these Terms of
                    Service and all applicable laws and regulations. If you do not agree with any of these
                    terms, you are prohibited from using this service.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">2. Rental Agreement</h3>
                  <p className="text-sm leading-relaxed">
                    Books rented through our platform are licensed for the specified rental period only. You
                    agree not to reproduce, distribute, or share the digital content with others. Access to
                    rented books will expire at the end of the rental period.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">3. User Accounts</h3>
                  <p className="text-sm leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account credentials and
                    for all activities that occur under your account. You agree to notify us immediately of
                    any unauthorized use of your account.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">4. Payment and Refunds</h3>
                  <p className="text-sm leading-relaxed">
                    All rental fees are charged at the time of checkout. Refunds may be issued within 24
                    hours of rental if the book has not been accessed. After this period, all sales are
                    final.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">5. Prohibited Uses</h3>
                  <p className="text-sm leading-relaxed">
                    You may not use our service to engage in any illegal activities, violate copyright laws,
                    or attempt to circumvent our digital rights management systems. Violation of these terms
                    may result in immediate termination of your account.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">6. Limitation of Liability</h3>
                  <p className="text-sm leading-relaxed">
                    Bibliothèque shall not be liable for any indirect, incidental, special, or consequential
                    damages arising from your use of our service. Our total liability shall not exceed the
                    amount paid by you for the specific rental in question.
                  </p>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'var(--font-serif)' }}>Privacy Policy</CardTitle>
                <p className="text-sm text-muted-foreground">Last updated: March 16, 2026</p>
              </CardHeader>
              <CardContent className="prose max-w-none space-y-6 text-muted-foreground">
                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">1. Information We Collect</h3>
                  <p className="text-sm leading-relaxed">
                    We collect information you provide directly to us, including your name, email address,
                    payment information, and reading preferences. We also collect information about your use
                    of our service, including books rented, reading progress, and device information.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">2. How We Use Your Information</h3>
                  <p className="text-sm leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services, process
                    your transactions, send you technical notices and support messages, and respond to your
                    comments and questions. We may also use your information to personalize your experience
                    and provide book recommendations.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">3. Information Sharing</h3>
                  <p className="text-sm leading-relaxed">
                    We do not sell your personal information to third parties. We may share your information
                    with service providers who perform services on our behalf, such as payment processing and
                    customer support. We may also share information when required by law or to protect our
                    rights.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">4. Data Security</h3>
                  <p className="text-sm leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However,
                    no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">5. Your Rights</h3>
                  <p className="text-sm leading-relaxed">
                    You have the right to access, update, or delete your personal information at any time.
                    You may also opt out of receiving promotional communications from us. To exercise these
                    rights, please contact us at privacy@bibliotheque.com.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">6. Cookies and Tracking</h3>
                  <p className="text-sm leading-relaxed">
                    We use cookies and similar tracking technologies to collect information about your
                    browsing activities and to remember your preferences. You can control cookies through
                    your browser settings, though some features may not function properly if cookies are
                    disabled.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-foreground mb-2">7. Contact Us</h3>
                  <p className="text-sm leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at
                    privacy@bibliotheque.com or write to us at Bibliothèque Privacy Department, 123 Library
                    Lane, New York, NY 10001.
                  </p>
                </section>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
