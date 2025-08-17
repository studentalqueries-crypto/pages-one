// Mobile menu functionality
function toggleMobileMenu() {
  const nav = document.querySelector(".nav")
  nav.style.display = nav.style.display === "flex" ? "none" : "flex"
}

// Demo video functionality
function playDemo() {
  alert("Demo video would play here. This would typically open a modal or redirect to a video.")
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(248, 250, 252, 0.95)"
  } else {
    header.style.backgroundColor = "rgba(248, 250, 252, 0.8)"
  }
})

// Form validation helper function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Show success/error messages
function showMessage(message, type = "success") {
  const messageDiv = document.createElement("div")
  messageDiv.className = `message message-${type}`
  messageDiv.textContent = message
  messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.375rem;
        color: white;
        font-weight: 500;
        z-index: 1000;
        background-color: ${type === "success" ? "#10b981" : "#ef4444"};
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    `

  document.body.appendChild(messageDiv)

  setTimeout(() => {
    messageDiv.remove()
  }, 5000)
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  console.log("StuDental website loaded successfully")
})
