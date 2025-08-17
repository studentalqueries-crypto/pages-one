import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, FileText, Mail, Calendar } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-xl font-serif font-bold">Privacy Policy</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Last updated: August 2024
            </div>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  StuDental ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you visit our website and use our
                  educational services for BDS students.
                </p>
                <p>
                  By accessing or using our services, you agree to the collection and use of information in accordance
                  with this policy. If you do not agree with our policies and practices, do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Full name and contact information (email, phone number)</li>
                    <li>Educational details (university, college, year of study)</li>
                    <li>Payment information (transaction details, UPI ID, bank details)</li>
                    <li>Course preferences and subject selections</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>IP address, browser type, and operating system</li>
                    <li>Pages visited, time spent on pages, and navigation patterns</li>
                    <li>Device information and screen resolution</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide and maintain our educational services</li>
                  <li>Process course enrollments and payments</li>
                  <li>Send course materials, updates, and important notifications</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services based on usage analytics</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Send promotional materials (with your consent)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">We may share your information with:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Service providers (payment processors, email services, analytics)</li>
                    <li>Educational partners and affiliated institutions</li>
                    <li>Legal authorities when required by law</li>
                    <li>Business successors in case of merger or acquisition</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    We do NOT sell or rent your personal information to third parties.
                  </h4>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure servers with regular security updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Data backup and recovery procedures</li>
                  <li>Employee training on data protection</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">We use cookies for:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Essential website functionality</li>
                    <li>User authentication and session management</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Personalized content and recommendations</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  You can control cookies through your browser settings, but disabling them may affect website
                  functionality.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Access:</strong> Request copies of your personal data
                  </li>
                  <li>
                    <strong>Rectification:</strong> Request correction of inaccurate data
                  </li>
                  <li>
                    <strong>Erasure:</strong> Request deletion of your personal data
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your data
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of data processing
                  </li>
                  <li>
                    <strong>Withdrawal:</strong> Withdraw consent at any time
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Personal data: Retained for the duration of your enrollment plus 3 years</li>
                  <li>Payment data: Retained for 7 years for tax and legal compliance</li>
                  <li>Analytics data: Retained for 2 years in anonymized form</li>
                  <li>Marketing data: Retained until you unsubscribe</li>
                  <li>Legal data: Retained as required by applicable laws</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">We use the following third-party services:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Google Sheets for data management</li>
                    <li>Payment gateways for transaction processing</li>
                    <li>Email service providers for communications</li>
                    <li>Analytics tools for website performance</li>
                    <li>Cloud storage for secure data backup</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  These services have their own privacy policies, and we encourage you to review them.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our services are intended for students aged 18 and above. We do not knowingly collect personal
                  information from children under 18. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card>
              <CardHeader>
                <CardTitle>International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place to protect your data in accordance with this privacy policy and
                  applicable data protection laws.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the "Last updated" date. You are advised to review this policy
                  periodically for any changes.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>studental.queries@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    <span>StuDental - BDS Course Hub</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Basis */}
            <Card>
              <CardHeader>
                <CardTitle>Legal Basis for Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Contract:</strong> Processing necessary for course enrollment and service delivery
                  </li>
                  <li>
                    <strong>Consent:</strong> Marketing communications and optional features
                  </li>
                  <li>
                    <strong>Legitimate Interest:</strong> Website analytics and service improvement
                  </li>
                  <li>
                    <strong>Legal Obligation:</strong> Tax records and regulatory compliance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
