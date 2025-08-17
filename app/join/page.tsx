"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CreditCard, QrCode, University, GraduationCap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// College data
const NTRUHS_COLLEGES = [
  "Anil Neerukonda Institute of Dental Sciences, Visakhapatnam",
  "CKS Teja Institute of Dental Sciences and Research, Tirupati",
  "Care Dental College, Guntur",
  "Drs. Sudha & Nageswara Rao Siddhartha Institute of Dental Sciences, Gannavaram",
  "G. Pulla Reddy Dental College and Hospital, Kurnool",
  "GITAM Dental College and Hospital, Visakhapatnam",
  "GSL Dental College and Hospital, Rajahmundry",
  "KIMS Dental College, Amalapuram",
  "Lenora Institute of Dental Sciences, Rajahmundry",
  "Narayana Dental College and Hospital, Nellore",
  "Nimra Institute of Dental Sciences, Vijayawada",
  "Sibar Institute of Dental Sciences, Guntur",
  "Sree Sai Dental College and Research Institute, Srikakulam",
  "St. Joseph Dental College, Duggirala",
  "Vishnu Dental College, Bhimavaram",
  "Government Dental College & Hospital, Vijayawada",
  "Government Dental College, RIMS, Kadapa",
]

const KNRUHS_COLLEGES = [
  "Government Dental College and Hospital, Hyderabad",
  "Army College of Dental Sciences, Secunderabad",
  "Kamineni Institute of Dental Sciences, Nalgonda",
  "Mamata Institute of Dental Sciences, Khammam",
  "Meghna Institute of Dental Sciences, Nizamabad",
  "Malla Reddy Dental College for Women, Hyderabad",
  "Malla Reddy Institute of Dental Sciences, Hyderabad",
  "Panineeya Mahavidyalaya Institute of Dental Sciences & Research Centre, Hyderabad",
  "Sri Balaji Dental College, Hyderabad",
  "Sri Sai College of Dental Surgery, Vikarabad",
  "Sri Venkata Sai Institute of Dental Sciences, Hyderabad",
  "Tirumala Institute of Dental Sciences & Research Centre",
  "MNR Dental College and Hospital, Medak",
]

// Subject data with pricing
const SUBJECTS_BY_YEAR = {
  "1st": {
    subjects: ["Anatomy", "Physiology", "Biochemistry", "Dental Anatomy"],
    individualPrice: 399,
    bundlePrice: 999,
  },
  "2nd": {
    subjects: ["Pharmacology", "Pathology and Microbiology", "Dental Materials"],
    individualPrice: 399,
    bundlePrice: 999,
  },
  "3rd": {
    subjects: ["General Medicine", "General Surgery", "Oral Pathology"],
    individualPrice: 399,
    bundlePrice: 999,
  },
  "4th": {
    subjects: [
      "Oral Medicine and Radiology",
      "Oral and Maxillofacial Surgery",
      "Periodontics",
      "Prosthodontics",
      "Orthodontics",
      "Conservative Dentistry and Endodontics",
      "Public Health Dentistry",
      "Pedodontics",
    ],
    individualPrice: 299,
    bundlePrice: 1699,
  },
}

interface FormData {
  name: string
  email: string
  whatsapp: string
  university: string
  year: string
  college: string
  selectedSubjects: string[]
  paymentMethod: string
  upiId: string
  bankDetails: string
  utrNumber: string
}

export default function JoinPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    university: "",
    year: "",
    college: "",
    selectedSubjects: [],
    paymentMethod: "upi",
    upiId: "",
    bankDetails: "",
    utrNumber: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  // Calculate pricing
  const calculatePrice = () => {
    if (!formData.year || formData.selectedSubjects.length === 0) return 0

    const yearData = SUBJECTS_BY_YEAR[formData.year as keyof typeof SUBJECTS_BY_YEAR]
    if (!yearData) return 0

    // If all subjects are selected, use bundle price
    if (formData.selectedSubjects.length === yearData.subjects.length) {
      return yearData.bundlePrice
    }

    // Otherwise, calculate individual pricing
    return formData.selectedSubjects.length * yearData.individualPrice
  }

  const handleSubjectChange = (subject: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      selectedSubjects: checked
        ? [...prev.selectedSubjects, subject]
        : prev.selectedSubjects.filter((s) => s !== subject),
    }))
  }

  const handleSelectAllSubjects = () => {
    if (!formData.year) return

    const yearData = SUBJECTS_BY_YEAR[formData.year as keyof typeof SUBJECTS_BY_YEAR]
    if (!yearData) return

    const allSelected = formData.selectedSubjects.length === yearData.subjects.length
    setFormData((prev) => ({
      ...prev,
      selectedSubjects: allSelected ? [] : yearData.subjects,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          totalAmount: calculatePrice(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit registration")
      }

      const result = await response.json()

      toast({
        title: "Registration Successful!",
        description: "Your enrollment has been submitted. You'll receive a confirmation email shortly.",
      })

      // Reset form or redirect
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        university: "",
        year: "",
        college: "",
        selectedSubjects: [],
        paymentMethod: "upi",
        upiId: "",
        bankDetails: "",
        utrNumber: "",
      })
      setCurrentStep(1)
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceedToStep2 =
    formData.name && formData.email && formData.whatsapp && formData.university && formData.year && formData.college
  const canProceedToStep3 = formData.selectedSubjects.length > 0
  const canSubmit = formData.utrNumber && (formData.paymentMethod === "upi" ? formData.upiId : formData.bankDetails)

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
              <GraduationCap className="w-6 h-6 text-accent" />
              <span className="text-xl font-serif font-bold">Course Registration</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}
              >
                1
              </div>
              <div className={`w-12 h-0.5 ${currentStep >= 2 ? "bg-accent" : "bg-muted"}`} />
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}
              >
                2
              </div>
              <div className={`w-12 h-0.5 ${currentStep >= 3 ? "bg-accent" : "bg-muted"}`} />
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 3 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}
              >
                3
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Personal & Academic Information */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <University className="w-5 h-5" />
                    Personal & Academic Information
                  </CardTitle>
                  <CardDescription>Please provide your personal details and academic information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Phone Number *</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))}
                      placeholder="Enter your WhatsApp number"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="university">University *</Label>
                      <Select
                        value={formData.university}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, university: value, college: "" }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your university" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NTRUHS">NTRUHS</SelectItem>
                          <SelectItem value="KNRUHS">KNRUHS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="year">Year *</Label>
                      <Select
                        value={formData.year}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, year: value, selectedSubjects: [] }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1st">1st Year BDS</SelectItem>
                          <SelectItem value="2nd">2nd Year BDS</SelectItem>
                          <SelectItem value="3rd">3rd Year BDS</SelectItem>
                          <SelectItem value="4th">4th Year BDS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {formData.university && (
                    <div className="space-y-2">
                      <Label htmlFor="college">College *</Label>
                      <Select
                        value={formData.college}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, college: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your college" />
                        </SelectTrigger>
                        <SelectContent>
                          {(formData.university === "NTRUHS" ? NTRUHS_COLLEGES : KNRUHS_COLLEGES).map((college) => (
                            <SelectItem key={college} value={college}>
                              {college}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <Button type="button" onClick={() => setCurrentStep(2)} disabled={!canProceedToStep2}>
                      Next: Select Subjects
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Subject Selection */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Subject Selection</CardTitle>
                  <CardDescription>Choose the subjects you want to enroll for</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {formData.year && (
                    <>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{formData.year} Year BDS Subjects</h3>
                        <Button type="button" variant="outline" size="sm" onClick={handleSelectAllSubjects}>
                          {formData.selectedSubjects.length ===
                          SUBJECTS_BY_YEAR[formData.year as keyof typeof SUBJECTS_BY_YEAR]?.subjects.length
                            ? "Deselect All"
                            : "Select All (Bundle)"}
                        </Button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {SUBJECTS_BY_YEAR[formData.year as keyof typeof SUBJECTS_BY_YEAR]?.subjects.map((subject) => (
                          <div key={subject} className="flex items-center space-x-2 p-3 border rounded-lg">
                            <Checkbox
                              id={subject}
                              checked={formData.selectedSubjects.includes(subject)}
                              onCheckedChange={(checked) => handleSubjectChange(subject, checked as boolean)}
                            />
                            <Label htmlFor={subject} className="flex-1 cursor-pointer">
                              {subject}
                            </Label>
                            <Badge variant="secondary">
                              ₹{SUBJECTS_BY_YEAR[formData.year as keyof typeof SUBJECTS_BY_YEAR]?.individualPrice}
                            </Badge>
                          </div>
                        ))}
                      </div>

                      {formData.selectedSubjects.length > 0 && (
                        <Card className="bg-accent/5 border-accent/20">
                          <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold">Total Amount</h4>
                                <p className="text-sm text-muted-foreground">
                                  {formData.selectedSubjects.length} subject(s) selected
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-accent">₹{calculatePrice()}</div>
                                {formData.selectedSubjects.length ===
                                  SUBJECTS_BY_YEAR[formData.year as keyof typeof SUBJECTS_BY_YEAR]?.subjects.length && (
                                  <div className="text-sm text-green-600">Bundle discount applied!</div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>
                          Back
                        </Button>
                        <Button type="button" onClick={() => setCurrentStep(3)} disabled={!canProceedToStep3}>
                          Next: Payment Details
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Step 3: Payment Details */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Details
                  </CardTitle>
                  <CardDescription>Complete your payment and provide transaction details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Payment Summary */}
                  <Card className="bg-muted/50">
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Selected Subjects:</span>
                          <span>{formData.selectedSubjects.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Year:</span>
                          <span>{formData.year} BDS</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total Amount:</span>
                          <span className="text-accent">₹{calculatePrice()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* QR Code */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <QrCode className="w-5 h-5" />
                        Payment QR Code
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="inline-block p-4 bg-white rounded-lg border">
                        <img src="/studental-bds-payment-qr.png" alt="Payment QR Code" className="w-48 h-48 mx-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Scan this QR code to make payment</p>
                    </CardContent>
                  </Card>

                  {/* Payment Method Selection */}
                  <div className="space-y-4">
                    <Label>Payment Method</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          formData.paymentMethod === "upi" ? "border-accent bg-accent/5" : "border-border"
                        }`}
                        onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: "upi" }))}
                      >
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="upi"
                            checked={formData.paymentMethod === "upi"}
                            onChange={() => setFormData((prev) => ({ ...prev, paymentMethod: "upi" }))}
                          />
                          <Label>UPI Payment</Label>
                        </div>
                      </div>
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          formData.paymentMethod === "bank" ? "border-accent bg-accent/5" : "border-border"
                        }`}
                        onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: "bank" }))}
                      >
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="bank"
                            checked={formData.paymentMethod === "bank"}
                            onChange={() => setFormData((prev) => ({ ...prev, paymentMethod: "bank" }))}
                          />
                          <Label>Bank Transfer</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Details Form */}
                  {formData.paymentMethod === "upi" && (
                    <div className="space-y-2">
                      <Label htmlFor="upiId">UPI ID *</Label>
                      <Input
                        id="upiId"
                        value={formData.upiId}
                        onChange={(e) => setFormData((prev) => ({ ...prev, upiId: e.target.value }))}
                        placeholder="Enter your UPI ID"
                        required
                      />
                    </div>
                  )}

                  {formData.paymentMethod === "bank" && (
                    <div className="space-y-2">
                      <Label htmlFor="bankDetails">Bank Account Details *</Label>
                      <Input
                        id="bankDetails"
                        value={formData.bankDetails}
                        onChange={(e) => setFormData((prev) => ({ ...prev, bankDetails: e.target.value }))}
                        placeholder="Enter your bank account details"
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="utrNumber">UTR/Transaction Reference Number *</Label>
                    <Input
                      id="utrNumber"
                      value={formData.utrNumber}
                      onChange={(e) => setFormData((prev) => ({ ...prev, utrNumber: e.target.value }))}
                      placeholder="Enter transaction reference number"
                      required
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>
                      Back
                    </Button>
                    <Button type="submit" disabled={!canSubmit || isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Complete Registration"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
