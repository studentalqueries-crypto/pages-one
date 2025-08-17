import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, GraduationCap, Award, BookOpen, Target, Heart, Star } from "lucide-react"

const TUTORS = [
  {
    name: "Dr. B. Sai Nath Bhukya",
    qualification: "BDS",
    role: "Founder & CEO",
    experience: "Recent Graduate Excellence",
    specialization: "Dental Education Leadership",
    description: "Visionary leader with extensive experience in dental education and student mentorship.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    name: "Dr. Adarsha Bhukya",
    qualification: "BDS",
    role: "Co-Founder",
    experience: "Recent Graduate Excellence",
    specialization: "Educational Strategy",
    description: "Strategic planner focused on innovative teaching methodologies and curriculum development.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    name: "Dr. B. Sri Vidhya Mukharjee",
    qualification: "BDS",
    role: "Senior Faculty",
    experience: "Recent Graduate Excellence",
    specialization: "Clinical Dentistry",
    description: "Experienced clinician with deep expertise in practical dental procedures and patient care.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    name: "Dr. B. Chennakesav Naik",
    qualification: "MBBS, MS",
    role: "Medical Consultant",
    experience: "Recent Graduate Excellence",
    specialization: "General Medicine & Surgery",
    description: "Medical expert providing comprehensive knowledge in general medicine and surgical procedures.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    name: "Dr. Sharon Paul",
    qualification: "BDS",
    role: "Tutor & Reader",
    experience: "Recent Graduate Excellence",
    specialization: "Academic Excellence",
    description: "Dedicated educator focused on student success and comprehensive learning outcomes.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    name: "Dr Kaza Pushpa Sagar",
    qualification: "BDS",
    role: "JEO",
    experience: "Recent Graduate Excellence",
    specialization: "Interactive Learning",
    description: "Innovative teacher specializing in engaging educational content and student interaction.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Dr Samiksha Vepuri",
    qualification: "BDS",
    role: "Tutor & Reader",
    experience: "Recent Graduate Excellence",
    specialization: "Modern Teaching Methods",
    description: "Young and dynamic educator bringing fresh perspectives to dental education.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
]

export default function AboutPage() {
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
              <Users className="w-6 h-6 text-accent" />
              <span className="text-xl font-serif font-bold">About Us</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">About StuDental</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Empowering the next generation of dental professionals through innovative education, expert guidance, and
              personalized learning experiences tailored for NTRUHS & KNRUHS students.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Expert Faculty
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Recent Graduate Excellence
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Proven Results
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Modern Teaching
              </Badge>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-accent" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To revolutionize dental education by providing comprehensive, accessible, and engaging learning
                  experiences that prepare students for academic excellence and professional success in their BDS
                  examinations and future careers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-accent" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the leading educational platform for BDS students, fostering a community of successful
                  dental professionals who contribute meaningfully to healthcare and society through excellence in
                  education and practice.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8">Why Choose StuDental?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>Expert Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn from experienced doctors and educators with extensive clinical and academic expertise.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>Comprehensive Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete coverage of all subjects with detailed notes, diagrams, and practical insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track record of helping students achieve excellent results in university examinations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Meet Our Expert Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our dedicated team of experienced professionals is committed to your academic success and professional
                growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TUTORS.map((tutor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        {tutor.icon}
                      </div>
                      <div>
                        <Badge variant="outline" className="text-xs">
                          {tutor.qualification}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{tutor.name}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="font-semibold text-accent">{tutor.role}</div>
                      <div className="text-sm">{tutor.experience}</div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Specialization</h4>
                        <p className="text-sm text-muted-foreground">{tutor.specialization}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{tutor.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif">Our Teaching Approach</CardTitle>
              <CardDescription className="text-lg">
                Innovative methods designed for modern dental students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-accent" />
                    Interactive Learning
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Live video classes with real-time interaction</li>
                    <li>• Short-form content for quick understanding</li>
                    <li>• Visual learning with diagrams and illustrations</li>
                    <li>• Practical case studies and examples</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    Structured Methodology
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Systematic curriculum coverage</li>
                    <li>• Regular assessments and feedback</li>
                    <li>• Answer writing strategy training</li>
                    <li>• Time management techniques</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Striving for the highest standards in education</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Care</h4>
                <p className="text-sm text-muted-foreground">Genuine concern for student success and well-being</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Community</h4>
                <p className="text-sm text-muted-foreground">Building a supportive learning environment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">Embracing modern teaching technologies</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <Card className="text-center bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Ready to Start Your Journey?</CardTitle>
              <CardDescription className="text-lg">
                Join thousands of successful BDS students who have achieved their goals with StuDental
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/join">Enroll Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/downloads">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
