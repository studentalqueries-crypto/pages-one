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

// State variables
let selectedUniversity = "NTRUHS"
let selectedYear = "1st"
let selectedUniversityProb = "NTRUHS"
let selectedYearProb = "1st"

// Google Sheets integration configuration
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"

// Tab functionality
function showTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active")
  })

  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  // Show selected tab content
  document.getElementById(tabName).classList.add("active")

  // Add active class to clicked tab button
  event.target.classList.add("active")

  // Initialize content based on tab
  if (tabName === "downloads") {
    updatePapersGrid()
  } else if (tabName === "probable") {
    updateProbableQuestions()
  }
}

// University selection for downloads
function selectUniversity(university) {
  selectedUniversity = university

  // Update button states
  document.querySelectorAll("#downloads .university-selector .filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  updatePapersGrid()
}

// Year selection for downloads
function selectYear(year) {
  selectedYear = year

  // Update button states
  document.querySelectorAll("#downloads .year-selector .filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  updatePapersGrid()
}

// University selection for probable questions
function selectUniversityProb(university) {
  selectedUniversityProb = university

  // Update button states
  document.querySelectorAll("#probable .university-selector .filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  updateProbableQuestions()
}

// Year selection for probable questions
function selectYearProb(year) {
  selectedYearProb = year

  // Update button states
  document.querySelectorAll("#probable .year-selector .filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  updateProbableQuestions()
}

// Update papers grid
function updatePapersGrid() {
  const papersGrid = document.getElementById("papersGrid")
  const papers = PREVIOUS_PAPERS[selectedUniversity][selectedYear] || []

  papersGrid.innerHTML = ""

  papers.forEach((paper) => {
    const paperCard = document.createElement("div")
    paperCard.className = "paper-card"
    paperCard.innerHTML = `
            <div class="paper-header">
                <div class="paper-icon">📄</div>
                <div class="paper-year">${paper.year}</div>
            </div>
            <h3>${paper.subject}</h3>
            <p>${selectedUniversity} • ${selectedYear} Year BDS</p>
            <div class="paper-footer">
                <span class="paper-size">${paper.size}</span>
                <a href="${paper.url}" class="btn btn-primary" download>
                    📥 Download
                </a>
            </div>
        `
    papersGrid.appendChild(paperCard)
  })

  if (papers.length === 0) {
    papersGrid.innerHTML = '<p class="text-center">No papers available for this selection.</p>'
  }
}

// Update probable questions
function updateProbableQuestions() {
  const probableTitle = document.getElementById("probableTitle")
  const probableList = document.getElementById("probableList")
  const questions = PROBABLE_QUESTIONS[selectedUniversityProb][selectedYearProb] || []

  probableTitle.textContent = `${selectedUniversityProb} ${selectedYearProb} Year`
  probableList.innerHTML = ""

  questions.forEach((question) => {
    const questionItem = document.createElement("div")
    questionItem.className = "probable-item"
    questionItem.innerHTML = `
            <div class="probable-info">
                <h4>${question.topic}</h4>
                <p>${question.subject}</p>
            </div>
            <div class="probable-stats">
                <div class="percentage-display">
                    <div>${question.percentage}%</div>
                    <div>Probability</div>
                </div>
                <div class="probability-bar">
                    <div class="probability-fill" style="height: ${question.percentage}%"></div>
                </div>
            </div>
        `
    probableList.appendChild(questionItem)
  })

  if (questions.length === 0) {
    probableList.innerHTML = '<p class="text-center">No data available for this selection.</p>'
  }
}

// Contact form submission with Google Sheets integration
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const data = Object.fromEntries(formData)

  const submitBtn = this.querySelector('button[type="submit"]')

  function setLoadingState(button, isLoading) {
    if (isLoading) {
      button.textContent = "Sending..."
      button.disabled = true
    } else {
      button.textContent = "Send Message"
      button.disabled = false
    }
  }

  function showNotification(message, type) {
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.textContent = message
    document.body.appendChild(notification)

    setTimeout(() => {
      document.body.removeChild(notification)
    }, 3000)
  }

  setLoadingState(submitBtn, true)

  try {
    // Prepare submission data for Google Sheets
    const submissionData = {
      action: "addContact",
      data: {
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        status: "New",
      },
    }

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
      showNotification("Message sent successfully! We'll get back to you within 24 hours.", "success")
      // Reset form
      this.reset()
    } else {
      throw new Error(result.error || "Submission failed")
    }
  } catch (error) {
    console.error("Contact form error:", error)

    // Provide more specific error messages
    let errorMessage = "Failed to send message. "

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

// Initialize downloads page
document.addEventListener("DOMContentLoaded", () => {
  // Show downloads tab by default
  showTab("downloads")
})
