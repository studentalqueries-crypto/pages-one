import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Video, BookOpen, Target, Calendar } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-serif font-bold text-foreground">StuDental</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
                Courses
              </Link>
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="/downloads" className="text-muted-foreground hover:text-foreground transition-colors">
                Downloads
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Button asChild>
                <Link href="/join">Join Now</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">Next Batch Starts August 30th</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Master Your BDS Exams with Expert Guidance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Live video classes, short-form content, and structured study plans designed for ambitious dental students
              who want to excel in NTRUHS & KNRUHS university exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/join">Start Learning Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Video className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Why Choose StuDental?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specially designed for current generation students who need focused, engaging content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Video className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Live Video Classes</CardTitle>
                <CardDescription>
                  Interactive sessions with experienced faculty for real-time doubt clearing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Short-Form Content</CardTitle>
                <CardDescription>
                  Reels-style explanations perfect for on-the-go learning and quick revision
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Structured Schedule</CardTitle>
                <CardDescription>Organized study plans and time management strategies for exam success</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Complete Study Notes</CardTitle>
                <CardDescription>Comprehensive notes with diagrams for every topic and subject</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Expert Faculty</CardTitle>
                <CardDescription>Learn from experienced doctors with 10+ years of clinical expertise</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Answer Writing Strategy</CardTitle>
                <CardDescription>Master the art of writing perfect answers for university examinations</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section id="courses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Course Offerings</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive courses for all BDS years under NTRUHS & KNRUHS
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 4th Year BDS */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-serif">4th Year BDS</CardTitle>
                  <Badge variant="secondary">8 Subjects</Badge>
                </div>
                <CardDescription>Final year preparation with comprehensive coverage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Oral Medicine & Radiology</div>
                  <div>• Oral & Maxillofacial Surgery</div>
                  <div>• Periodontics</div>
                  <div>• Prosthodontics</div>
                  <div>• Orthodontics</div>
                  <div>• Conservative Dentistry</div>
                  <div>• Public Health Dentistry</div>
                  <div>• Pedodontics</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-muted-foreground">Per Subject</div>
                    <div className="text-lg font-bold">₹299</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">₹2,392</div>
                    <div className="text-2xl font-bold text-accent">₹1,699</div>
                    <div className="text-sm text-green-600">Save ₹693</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3rd Year BDS */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-serif">3rd Year BDS</CardTitle>
                  <Badge variant="secondary">3 Subjects</Badge>
                </div>
                <CardDescription>Clinical foundation subjects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div>• General Medicine</div>
                  <div>• General Surgery</div>
                  <div>• Oral Pathology</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-muted-foreground">Per Subject</div>
                    <div className="text-lg font-bold">₹399</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">₹1,197</div>
                    <div className="text-2xl font-bold text-accent">₹999</div>
                    <div className="text-sm text-green-600">Save ₹198</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2nd Year BDS */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-serif">2nd Year BDS</CardTitle>
                  <Badge variant="secondary">3 Subjects</Badge>
                </div>
                <CardDescription>Pre-clinical subjects and materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div>• Pharmacology</div>
                  <div>• Pathology & Microbiology</div>
                  <div>• Dental Materials</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-muted-foreground">Per Subject</div>
                    <div className="text-lg font-bold">₹399</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">₹1,197</div>
                    <div className="text-2xl font-bold text-accent">₹999</div>
                    <div className="text-sm text-green-600">Save ₹198</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 1st Year BDS */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-serif">1st Year BDS</CardTitle>
                  <Badge variant="secondary">4 Subjects</Badge>
                </div>
                <CardDescription>Foundation subjects for dental education</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Anatomy</div>
                  <div>• Physiology</div>
                  <div>• Biochemistry</div>
                  <div>• Dental Anatomy</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-muted-foreground">Per Subject</div>
                    <div className="text-lg font-bold">₹399</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">₹1,596</div>
                    <div className="text-2xl font-bold text-accent">₹999</div>
                    <div className="text-sm text-green-600">Save ₹597</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/join">Choose Your Course</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Batch Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/20 bg-accent/5">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif text-accent mb-2">Upcoming Batches</CardTitle>
                <CardDescription className="text-lg">Join thousands of successful BDS students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg border">
                    <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Current Batch</h3>
                    <p className="text-2xl font-bold text-accent mb-2">August 20, 2024</p>
                    <p className="text-muted-foreground">Limited seats available</p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg border">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Next Batch</h3>
                    <p className="text-2xl font-bold text-accent mb-2">August 30, 2024</p>
                    <p className="text-muted-foreground">Early bird discount available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Excel in Your BDS Exams?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful students who have transformed their study habits and achieved excellent
              results with our proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link href="/join">Enroll Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/downloads">Download Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-xl font-serif font-bold">StuDental</span>
              </div>
              <p className="text-muted-foreground">
                Empowering BDS students to achieve excellence in their university examinations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/join" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Join Course
                </Link>
                <Link href="/downloads" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Downloads
                </Link>
                <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Universities</h3>
              <div className="space-y-2">
                <div className="text-muted-foreground">NTRUHS</div>
                <div className="text-muted-foreground">KNRUHS</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="text-muted-foreground">studental.queries@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p>&copy; 2024 StuDental. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
