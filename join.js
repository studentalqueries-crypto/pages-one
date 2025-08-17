// College data
const COLLEGES = {
  NTRUHS: [
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
  ],
  KNRUHS: [
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
  ],
}

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

// Form state
let currentStep = 1
let formData = {
  name: "",
  email: "",
  whatsapp: "",
  university: "",
  year: "",
  college: "",
  selectedSubjects: [],
  paymentMethod: "upi",
  upiId: "",
  bankAccount: "",
  utrNumber: "",
}

// Notification function
function showNotification(message, type) {
  alert(`${type.toUpperCase()}: ${message}`)
}

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Phone validation function
function validatePhone(phone) {
  const re = /^\d{10}$/
  return re.test(phone)
}

// Loading state function
function setLoadingState(button, loading) {
  if (loading) {
    button.textContent = "Submitting..."
    button.disabled = true
  } else {
    button.textContent = "Submit"
    button.disabled = false
  }
}

// Update colleges dropdown based on university selection
function updateColleges() {
  const universitySelect = document.getElementById("university")
  const collegeGroup = document.getElementById("collegeGroup")
  const collegeSelect = document.getElementById("college")

  const selectedUniversity = universitySelect.value

  if (selectedUniversity) {
    collegeGroup.style.display = "block"
    collegeSelect.innerHTML = '<option value="">Select your college</option>'

    COLLEGES[selectedUniversity].forEach((college) => {
      const option = document.createElement("option")
      option.value = college
      option.textContent = college
      collegeSelect.appendChild(option)
    })
  } else {
    collegeGroup.style.display = "none"
  }

  formData.university = selectedUniversity
  formData.college = ""
}

// Update subjects based on year selection
function updateSubjects() {
  const yearSelect = document.getElementById("year")
  const selectedYear = yearSelect.value

  formData.year = selectedYear
  formData.selectedSubjects = []

  if (selectedYear) {
    const yearTitle = document.getElementById("yearTitle")
    yearTitle.textContent = `${selectedYear} Year BDS Subjects`

    const subjectsContainer = document.getElementById("subjectsContainer")
    subjectsContainer.innerHTML = ""

    const yearData = SUBJECTS_BY_YEAR[selectedYear]
    if (yearData) {
      yearData.subjects.forEach((subject) => {
        const subjectItem = document.createElement("div")
        subjectItem.className = "subject-item"
        subjectItem.innerHTML = `
                    <input type="checkbox" id="${subject}" value="${subject}" onchange="handleSubjectChange('${subject}', this.checked)">
                    <label for="${subject}">${subject}</label>
                    <span class="subject-price">₹${yearData.individualPrice}</span>
                `
        subjectsContainer.appendChild(subjectItem)
      })
    }
  }

  updatePricing()
}

// Handle subject selection
function handleSubjectChange(subject, checked) {
  if (checked) {
    formData.selectedSubjects.push(subject)
  } else {
    formData.selectedSubjects = formData.selectedSubjects.filter((s) => s !== subject)
  }
  updatePricing()
}

// Toggle all subjects
function toggleAllSubjects() {
  if (!formData.year) return

  const yearData = SUBJECTS_BY_YEAR[formData.year]
  if (!yearData) return

  const allSelected = formData.selectedSubjects.length === yearData.subjects.length

  if (allSelected) {
    // Deselect all
    formData.selectedSubjects = []
    document.querySelectorAll('#subjectsContainer input[type="checkbox"]').forEach((cb) => {
      cb.checked = false
    })
  } else {
    // Select all
    formData.selectedSubjects = [...yearData.subjects]
    document.querySelectorAll('#subjectsContainer input[type="checkbox"]').forEach((cb) => {
      cb.checked = true
    })
  }

  updatePricing()
}

// Update pricing display
function updatePricing() {
  const pricingCard = document.getElementById("pricingCard")
  const selectedCount = document.getElementById("selectedCount")
  const totalPrice = document.getElementById("totalPrice")
  const bundleDiscount = document.getElementById("bundleDiscount")

  if (formData.selectedSubjects.length === 0) {
    pricingCard.style.display = "none"
    return
  }

  pricingCard.style.display = "block"
  selectedCount.textContent = `${formData.selectedSubjects.length} subject(s) selected`

  const yearData = SUBJECTS_BY_YEAR[formData.year]
  if (!yearData) return

  let price = 0
  let showDiscount = false

  if (formData.selectedSubjects.length === yearData.subjects.length) {
    // Bundle price
    price = yearData.bundlePrice
    showDiscount = true
  } else {
    // Individual pricing
    price = formData.selectedSubjects.length * yearData.individualPrice
  }

  totalPrice.textContent = `₹${price}`
  bundleDiscount.style.display = showDiscount ? "block" : "none"
}

// Navigation functions
function nextStep(step) {
  if (step === 1) {
    // Validate step 1
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const whatsapp = document.getElementById("whatsapp").value
    const university = document.getElementById("university").value
    const year = document.getElementById("year").value
    const college = document.getElementById("college").value

    if (!name || !email || !whatsapp || !university || !year || !college) {
      showNotification("Please fill in all required fields", "error")
      return
    }

    if (!validateEmail(email)) {
      showNotification("Please enter a valid email address", "error")
      return
    }

    if (!validatePhone(whatsapp)) {
      showNotification("Please enter a valid phone number", "error")
      return
    }

    // Update form data
    formData.name = name
    formData.email = email
    formData.whatsapp = whatsapp
    formData.university = university
    formData.year = year
    formData.college = college

    showStep(2)
  } else if (step === 2) {
    // Validate step 2
    if (formData.selectedSubjects.length === 0) {
      showNotification("Please select at least one subject", "error")
      return
    }

    // Update payment summary
    updatePaymentSummary()
    showStep(3)
  }
}

function prevStep(step) {
  showStep(step - 1)
}

function showStep(step) {
  // Hide all steps
  document.querySelectorAll(".form-step").forEach((s) => s.classList.remove("active"))
  document.querySelectorAll(".step").forEach((s) => s.classList.remove("active"))

  // Show current step
  document.getElementById(`formStep${step}`).classList.add("active")
  document.getElementById(`step${step}`).classList.add("active")

  currentStep = step
}

// Update payment summary
function updatePaymentSummary() {
  const summarySubjects = document.getElementById("summarySubjects")
  const summaryYear = document.getElementById("summaryYear")
  const summaryTotal = document.getElementById("summaryTotal")

  summarySubjects.textContent = formData.selectedSubjects.length
  summaryYear.textContent = `${formData.year} BDS`

  const yearData = SUBJECTS_BY_YEAR[formData.year]
  let price = 0

  if (formData.selectedSubjects.length === yearData.subjects.length) {
    price = yearData.bundlePrice
  } else {
    price = formData.selectedSubjects.length * yearData.individualPrice
  }

  summaryTotal.textContent = `₹${price}`
}

// Payment method selection
function selectPaymentMethod(method) {
  formData.paymentMethod = method

  // Update UI
  document.querySelectorAll(".method-option").forEach((option) => {
    option.classList.remove("active")
  })

  document.querySelector(`input[value="${method}"]`).closest(".method-option").classList.add("active")

  // Show/hide payment details
  const upiDetails = document.getElementById("upiDetails")
  const bankDetails = document.getElementById("bankDetails")

  if (method === "upi") {
    upiDetails.style.display = "block"
    bankDetails.style.display = "none"
  } else {
    upiDetails.style.display = "none"
    bankDetails.style.display = "block"
  }
}

// Copy to clipboard function
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    // Use modern clipboard API
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showNotification("Copied to clipboard!", "success")
      })
      .catch(() => {
        fallbackCopyToClipboard(text)
      })
  } else {
    // Fallback for older browsers
    fallbackCopyToClipboard(text)
  }
}

// Fallback copy function for older browsers
function fallbackCopyToClipboard(text) {
  const textArea = document.createElement("textarea")
  textArea.value = text
  textArea.style.position = "fixed"
  textArea.style.left = "-999999px"
  textArea.style.top = "-999999px"
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    document.execCommand("copy")
    showNotification("Copied to clipboard!", "success")
  } catch (err) {
    showNotification("Failed to copy. Please copy manually.", "error")
  }

  document.body.removeChild(textArea)
}

// Google Sheets integration configuration
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbylOB8EydHYtE9xn-qAoYoWrsguqXMP09rHgOPfFME/dev"

// Form submission
document.getElementById("registrationForm").addEventListener("submit", async (e) => {
  e.preventDefault()

  const submitBtn = document.getElementById("submitBtn")

  // Validate step 3
  const utrNumber = document.getElementById("utrNumber").value
  if (!utrNumber) {
    showNotification("Please enter the UTR/Transaction reference number", "error")
    return
  }

  if (formData.paymentMethod === "upi") {
    const upiId = document.getElementById("upiId").value
    if (!upiId) {
      showNotification("Please enter your UPI ID", "error")
      return
    }
    formData.upiId = upiId
  } else {
    const bankAccount = document.getElementById("bankAccount").value
    if (!bankAccount) {
      showNotification("Please enter your bank account details", "error")
      return
    }
    formData.bankAccount = bankAccount
  }

  formData.utrNumber = utrNumber

  // Calculate total amount
  const yearData = SUBJECTS_BY_YEAR[formData.year]
  let totalAmount = 0

  if (formData.selectedSubjects.length === yearData.subjects.length) {
    totalAmount = yearData.bundlePrice
  } else {
    totalAmount = formData.selectedSubjects.length * yearData.individualPrice
  }

  // Prepare submission data for Google Sheets
  const submissionData = {
    action: "addRegistration",
    data: {
      timestamp: new Date().toISOString(),
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      university: formData.university,
      year: formData.year,
      college: formData.college,
      subjects: formData.selectedSubjects.join(", "),
      subjectCount: formData.selectedSubjects.length,
      paymentMethod: formData.paymentMethod,
      upiId: formData.paymentMethod === "upi" ? formData.upiId : "",
      bankDetails: formData.paymentMethod === "bank" ? formData.bankAccount : "",
      utrNumber: formData.utrNumber,
      totalAmount: totalAmount.toString(),
      status: "Pending Verification",
    },
  }

  setLoadingState(submitBtn, true)

  try {
    // Submit to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
      mode: "cors",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success) {
      showNotification("Registration submitted successfully! You will receive a confirmation email shortly.", "success")

      // Reset form
      document.getElementById("registrationForm").reset()
      formData = {
        name: "",
        email: "",
        whatsapp: "",
        university: "",
        year: "",
        college: "",
        selectedSubjects: [],
        paymentMethod: "upi",
        upiId: "",
        bankAccount: "",
        utrNumber: "",
      }
      showStep(1)

      // Reset UI elements
      document.getElementById("collegeGroup").style.display = "none"
      document.getElementById("pricingCard").style.display = "none"
      document.getElementById("subjectsContainer").innerHTML = ""
      document.getElementById("yearTitle").textContent = "Select Year First"
    } else {
      throw new Error(result.error || "Submission failed")
    }
  } catch (error) {
    console.error("Submission error:", error)

    // Provide more specific error messages
    let errorMessage = "Failed to submit registration. "

    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      errorMessage += "Please check your internet connection and try again."
    } else if (error.message.includes("CORS")) {
      errorMessage += "There's a configuration issue. Please contact support."
    } else if (error.message.includes("HTTP error")) {
      errorMessage += "Server error. Please try again later."
    } else {
      errorMessage += "Please try again or contact support if the problem persists."
    }

    showNotification(errorMessage, "error")
  } finally {
    setLoadingState(submitBtn, false)
  }
})

// Initialize form
document.addEventListener("DOMContentLoaded", () => {
  // Set initial payment method
  selectPaymentMethod("upi")
})
