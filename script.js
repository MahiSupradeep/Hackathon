// Login Function
function login() {
  const userType = document.getElementById("user-type").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
      if (userType === "student") {
          document.getElementById("student-portal").style.display = "block";
          document.querySelector(".login-container").style.display = "none";
      } else if (userType === "recruiter") {
          document.getElementById("recruiter-portal").style.display = "block";
          document.querySelector(".login-container").style.display = "none";
      }
  } else {
      alert("Please enter username and password.");
  }
}

// Event listener for Enter key in the login form
document.getElementById('username').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      login();
  }
});

document.getElementById('password').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      login();
  }
});

// Student Portal Functions
function showResumeForm() {
  document.getElementById("resume-form").style.display = "block";
  document.getElementById("student-actions").innerHTML = ""; // Clear previous messages
}

// Event listener for Enter key in the resume form
document.getElementById('student-name').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      submitResume();
  }
});

document.getElementById('student-skills').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      submitResume();
  }
});

document.getElementById('student-experience').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      submitResume();
  }
});

document.getElementById('student-education').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      submitResume();
  }
});

function submitResume() {
  const name = document.getElementById("student-name").value;
  const skills = document.getElementById("student-skills").value;
  const experience = document.getElementById("student-experience").value;
  const education = document.getElementById("student-education").value;

  if (name && skills && experience && education) {
      document.getElementById("student-actions").innerHTML = `
          <h4>Resume Optimized Successfully!</h4>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Skills:</strong> ${skills}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>Education:</strong> ${education}</p>
      `;
      document.getElementById("resume-form").reset();
      document.getElementById("resume-form").style.display = "none";
  } else {
      alert("Please fill in all fields before submitting.");
  }
}

function selectTemplate() {
  alert("Template selection feature is coming soon!");
}

// Function to Open Analytics in a New Tab
function viewAnalytics() {
  let analyticsWindow = window.open("", "_blank"); // Open new tab

  if (analyticsWindow) {
      let doc = analyticsWindow.document;
      doc.open();

      // Inject Chart.js code into the new tab
      doc.write(`
          <html>
          <head>
              <title>Application Analytics</title>
              <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
          </head>
          <body style="display:flex; justify-content:center; align-items:center; height:100vh;">
              <canvas id="applicationChart" width="400" height="400"></canvas>
              <script>
                  window.onload = function () {
                      let ctx = document.getElementById("applicationChart").getContext("2d");
                      new Chart(ctx, {
                          type: "bar",
                          data: {
                              labels: ["Applied", "Shortlisted", "Hired", "Rejected"],
                              datasets: [{
                                  label: "Job Application Status",
                                  data: [10, 5, 2, 3], // Example Data
                                  backgroundColor: ["blue", "green", "gold", "red"]
                              }]
                          }
                      });
                  };
              </script>
          </body>
          </html>
      `);

      doc.close(); // Close document writing
  } else {
      alert("Pop-up blocked! Please allow pop-ups to view analytics.");
  }
}

// Recruiter Portal Functions
document.getElementById('candidate-name').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      submitFeedback();
  }
});

document.getElementById('status').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      submitFeedback();
  }
});

document.getElementById('feedback').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      submitFeedback();
  }
});

function submitFeedback() {
  const candidateName = document.getElementById("candidate-name").value;
  const status = document.getElementById("status").value;
  const feedback = document.getElementById("feedback").value;

  if (candidateName && status && feedback) {
      document.getElementById("recruiter-actions").innerHTML = `
          <h4>Feedback Submitted</h4>
          <p><strong>Candidate:</strong> ${candidateName}</p>
          <p><strong>Status:</strong> ${status}</p>
          <p><strong>Feedback:</strong> ${feedback}</p>
      `;
  } else {
      alert("Please complete all fields before submitting feedback.");
  }
}
