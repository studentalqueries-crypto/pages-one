"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, FileText, Mail, Phone, TrendingUp, BookOpen, University, Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Sample data for previous year papers
const PREVIOUS_PAPERS = {
  NTRUHS: {
    "1st": [
      { subject: "Anatomy", year: "2023", url: "#", size: "2.3 MB" },
      { subject: "Physiology", year: "2023", url: "#", size: "1.8 MB" },
      { subject: "Biochemistry", year: "2023", url: "#", size: "2.1 MB" },
      { subject: "Dental Anatomy", year: "2023", url: "#", size: "3.2 MB" },
      { subject: "Anatomy", year: "2022", url: "#", size: "2.1 MB" },
      { subject: "Physiology", year: "2022", url: "#", size: "1.9 MB" },
    ],
    "2nd": [
      { subject: "Pharmacology", year: "2023", url: "#", size: "2.5 MB" },
      { subject: "Pathology and Microbiology", year: "2023", url: "#", size: "3.1 MB" },
      { subject: "Dental Materials", year: "2023", url: "#", size: "2.8 MB" },
      { subject: "Pharmacology", year: "2022", url: "#", size: "2.3 MB" },
    ],
    "3rd": [
      { subject: "General Medicine", year: "2023", url: "#", size: "2.9 MB" },
      { subject: "General Surgery", year: "2023", url: "#", size: "3.4 MB" },
      { subject: "Oral Pathology", year: "2023", url: "#", size: "2.7 MB" },
    ],
    "4th": [
      { subject: "Oral Medicine and Radiology", year: "2023", url: "#", size: "3.2 MB" },
      { subject: "Oral and Maxillofacial Surgery", year: "2023", url: "#", size: "3.8 MB" },
      { subject: "Periodontics", year: "2023", url: "#", size: "2.9 MB" },
      { subject: "Prosthodontics", year: "2023", url: "#", size: "3.5 MB" },
    ],
  },
  KNRUHS: {
    "1st": [
      { subject: "Anatomy", year: "2023", url: "#", size: "2.4 MB" },
      { subject: "Physiology", year: "2023", url: "#", size: "1.9 MB" },
      { subject: "Biochemistry", year: "2023", url: "#", size: "2.2 MB" },
      { subject: "Dental Anatomy", year: "2023", url: "#", size: "3.1 MB" },
    ],
    "2nd": [
      { subject: "Pharmacology", year: "2023", url: "#", size: "2.6 MB" },
      { subject: "Pathology and Microbiology", year: "2023", url: "#", size: "3.0 MB" },
      { subject: "Dental Materials", year: "2023", url: "#", size: "2.9 MB" },
    ],
    "3rd": [
      { subject: "General Medicine", year: "2023", url: "#", size: "3.0 MB" },
      { subject: "General Surgery", year: "2023", url: "#", size: "3.3 MB" },
      { subject: "Oral Pathology", year: "2023", url: "#", size: "2.8 MB" },
    ],
    "4th": [
      { subject: "Oral Medicine and Radiology", year: "2023", url: "#", size: "3.1 MB" },
      { subject: "Oral and Maxillofacial Surgery", year: "2023", url: "#", size: "3.7 MB" },
      { subject: "Periodontics", year: "2023", url: "#", size: "3.0 MB" },
      { subject: "Prosthodontics", year: "2023", url: "#", size: "3.4 MB" },
    ],
  },
}

// Sample data for probable questions
const PROBABLE_QUESTIONS = {
  NTRUHS: {
    "1st": [
      { topic: "Cell Biology and Histology", percentage: 85, subject: "Anatomy" },
      { topic: "Cardiovascular System", percentage: 78, subject: "Physiology" },
      { topic: "Protein Structure and Function", percentage: 82, subject: "Biochemistry" },
      { topic: "Tooth Morphology", percentage: 90, subject: "Dental Anatomy" },
      { topic: "Musculoskeletal System", percentage: 75, subject: "Anatomy" },
      { topic: "Respiratory Physiology", percentage: 70, subject: "Physiology" },
    ],
    "2nd": [
      { topic: "Antimicrobial Agents", percentage: 88, subject: "Pharmacology" },
      { topic: "Inflammation and Repair", percentage: 85, subject: "Pathology" },
      { topic: "Dental Composites", percentage: 80, subject: "Dental Materials" },
      { topic: "CNS Pharmacology", percentage: 75, subject: "Pharmacology" },
    ],
    "3rd": [
      { topic: "Cardiovascular Diseases", percentage: 85, subject: "General Medicine" },
      { topic: "Surgical Procedures", percentage: 80, subject: "General Surgery" },
      { topic: "Oral Cancer", percentage: 90, subject: "Oral Pathology" },
    ],
    "4th": [
      { topic: "Radiographic Interpretation", percentage: 92, subject: "Oral Medicine and Radiology" },
      { topic: "Impacted Teeth", percentage: 88, subject: "Oral and Maxillofacial Surgery" },
      { topic: "Periodontal Therapy", percentage: 85, subject: "Periodontics" },
      { topic: "Complete Dentures", percentage: 87, subject: "Prosthodontics" },
    ],
  },
  KNRUHS: {
    "1st": [
      { topic: "Embryology", percentage: 83, subject: "Anatomy" },
      { topic: "Endocrine System", percentage: 79, subject: "Physiology" },
      { topic: "Carbohydrate Metabolism", percentage: 81, subject: "Biochemistry" },
      { topic: "Primary Teeth", percentage: 88, subject: "Dental Anatomy" },
    ],
    "2nd": [
      { topic: "Analgesics and Anti-inflammatory", percentage: 86, subject: "Pharmacology" },
      { topic: "Neoplasia", percentage: 84, subject: "Pathology" },
      { topic: "Impression Materials", percentage: 82, subject: "Dental Materials" },
    ],
    "3rd": [
      { topic: "Diabetes Mellitus", percentage: 87, subject: "General Medicine" },
      { topic: "Trauma Management", percentage: 83, subject: "General Surgery" },
      { topic: "Precancerous Lesions", percentage: 89, subject: "Oral Pathology" },
    ],
    "4th": [
      { topic: "Oral Medicine Diagnosis", percentage: 91, subject: "Oral Medicine and Radiology" },
      { topic: "Oral Surgery Complications", percentage: 86, subject: "Oral and Maxillofacial Surgery" },
      { topic: "Gingival Diseases", percentage: 84, subject: "Periodontics" },
      { topic: "Fixed Partial Dentures", percentage: 88, subject: "Prosthodontics" },
    ],
  },
}

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export default function DownloadsPage() {
  const { toast } = useToast()
  const [selectedUniversity, setSelectedUniversity] = useState<"NTRUHS" | "KNRUHS">("NTRUHS")
  const [selectedYear, setSelectedYear] = useState<"1st" | "2nd" | "3rd" | "4th">("1st")
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      })

      if (!response.ok) {
        throw new Error("Failed to submit contact form")
      }

      const result = await response.json()

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      })

      setContactForm({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="text-xl font-serif font-bold">Downloads & Resources</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="downloads" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="downloads" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Question Papers
              </TabsTrigger>
              <TabsTrigger value="probable" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Probable Questions
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Us
              </TabsTrigger>
            </TabsList>

            {/* Downloads Tab */}
            <TabsContent value="downloads" className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Previous Year Question Papers</h1>
                <p className="text-xl text-muted-foreground">
                  Download previous year question papers for NTRUHS & KNRUHS
                </p>
              </div>

              {/* University Selection */}
              <div className="flex justify-center">
                <div className="flex items-center gap-4 p-1 bg-muted rounded-lg">
                  <Button
                    variant={selectedUniversity === "NTRUHS" ? "default" : "ghost"}
                    onClick={() => setSelectedUniversity("NTRUHS")}
                    className="flex items-center gap-2"
                  >
                    <University className="w-4 h-4" />
                    NTRUHS
                  </Button>
                  <Button
                    variant={selectedUniversity === "KNRUHS" ? "default" : "ghost"}
                    onClick={() => setSelectedUniversity("KNRUHS")}
                    className="flex items-center gap-2"
                  >
                    <University className="w-4 h-4" />
                    KNRUHS
                  </Button>
                </div>
              </div>

              {/* Year Selection */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
                  {(["1st", "2nd", "3rd", "4th"] as const).map((year) => (
                    <Button
                      key={year}
                      variant={selectedYear === year ? "default" : "ghost"}
                      onClick={() => setSelectedYear(year)}
                      size="sm"
                    >
                      {year} Year
                    </Button>
                  ))}
                </div>
              </div>

              {/* Question Papers Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PREVIOUS_PAPERS[selectedUniversity][selectedYear]?.map((paper, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <FileText className="w-8 h-8 text-accent" />
                        <Badge variant="secondary">{paper.year}</Badge>
                      </div>
                      <CardTitle className="text-lg">{paper.subject}</CardTitle>
                      <CardDescription>
                        {selectedUniversity} • {selectedYear} Year BDS
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{paper.size}</span>
                        <Button size="sm" asChild>
                          <a href={paper.url} download>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Probable Questions Tab */}
            <TabsContent value="probable" className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Most Probable Questions</h1>
                <p className="text-xl text-muted-foreground">High-probability topics based on previous year analysis</p>
              </div>

              {/* University Selection */}
              <div className="flex justify-center">
                <div className="flex items-center gap-4 p-1 bg-muted rounded-lg">
                  <Button
                    variant={selectedUniversity === "NTRUHS" ? "default" : "ghost"}
                    onClick={() => setSelectedUniversity("NTRUHS")}
                    className="flex items-center gap-2"
                  >
                    <University className="w-4 h-4" />
                    NTRUHS
                  </Button>
                  <Button
                    variant={selectedUniversity === "KNRUHS" ? "default" : "ghost"}
                    onClick={() => setSelectedUniversity("KNRUHS")}
                    className="flex items-center gap-2"
                  >
                    <University className="w-4 h-4" />
                    KNRUHS
                  </Button>
                </div>
              </div>

              {/* Year Selection */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
                  {(["1st", "2nd", "3rd", "4th"] as const).map((year) => (
                    <Button
                      key={year}
                      variant={selectedYear === year ? "default" : "ghost"}
                      onClick={() => setSelectedYear(year)}
                      size="sm"
                    >
                      {year} Year
                    </Button>
                  ))}
                </div>
              </div>

              {/* Probable Questions List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    High Probability Topics - {selectedUniversity} {selectedYear} Year
                  </CardTitle>
                  <CardDescription>
                    Topics with high probability of appearing in exams based on previous year analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {PROBABLE_QUESTIONS[selectedUniversity][selectedYear]?.map((question, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold">{question.topic}</h4>
                          <p className="text-sm text-muted-foreground">{question.subject}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-accent">{question.percentage}%</div>
                            <div className="text-xs text-muted-foreground">Probability</div>
                          </div>
                          <div className="w-2 h-12 bg-muted rounded-full overflow-hidden">
                            <div
                              className="w-full bg-accent rounded-full transition-all duration-500"
                              style={{ height: `${question.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact" className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Contact Us</h1>
                <p className="text-xl text-muted-foreground">Have questions? We're here to help you succeed</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Get in Touch
                    </CardTitle>
                    <CardDescription>Reach out to us for any queries or support</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <Mail className="w-6 h-6 text-accent" />
                      <div>
                        <h4 className="font-semibold">Email Support</h4>
                        <p className="text-muted-foreground">studental.queries@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <Phone className="w-6 h-6 text-accent" />
                      <div>
                        <h4 className="font-semibold">Response Time</h4>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <Calendar className="w-6 h-6 text-accent" />
                      <div>
                        <h4 className="font-semibold">Support Hours</h4>
                        <p className="text-muted-foreground">Monday - Saturday, 9 AM - 6 PM</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-2">Common Queries</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Course enrollment and payment</li>
                        <li>• Study material access</li>
                        <li>• Technical support</li>
                        <li>• Batch timings and schedules</li>
                        <li>• Refund and cancellation policy</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name">Name *</Label>
                          <Input
                            id="contact-name"
                            value={contactForm.name}
                            onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-email">Email *</Label>
                          <Input
                            id="contact-email"
                            type="email"
                            value={contactForm.email}
                            onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                            placeholder="Your email address"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-subject">Subject *</Label>
                        <Input
                          id="contact-subject"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, subject: e.target.value }))}
                          placeholder="What is this regarding?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-message">Message *</Label>
                        <Textarea
                          id="contact-message"
                          value={contactForm.message}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                          placeholder="Please describe your query in detail..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
