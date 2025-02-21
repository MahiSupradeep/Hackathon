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

document.getElementById('username').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') login();
});

document.getElementById('password').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') login();
});

function showResumeForm() {
  document.getElementById("resume-form").style.display = "block";
  document.getElementById("student-actions").innerHTML = "";
}

document.getElementById('student-name').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') submitResume();
});

document.getElementById('student-skills').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') submitResume();
});

document.getElementById('student-experience').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') submitResume();
});

document.getElementById('student-education').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') submitResume();
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

function viewAnalytics() {
  let analyticsWindow = window.open("", "_blank");

  if (analyticsWindow) {
      let doc = analyticsWindow.document;
      doc.open();
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
                                  data: [10, 5, 2, 3],
                                  backgroundColor: ["blue", "green", "gold", "red"]
                              }]
                          }
                      });
                  };
              </script>
          </body>
          </html>
      `);
      doc.close();
  } else {
      alert("Pop-up blocked! Please allow pop-ups to view analytics.");
  }
}

function extractKeywords(text) {
  return text
      .toLowerCase()
      .match(/\b[a-zA-Z]{3,}\b/g)
      .filter((word, index, arr) => arr.indexOf(word) === index);
}

function analyzeResume() {
  let resumeText = document.getElementById("resume").value;
  let jobText = document.getElementById("job").value;

  if (!resumeText || !jobText) {
      alert("Please paste both resume and job description!");
      return;
  }

  let resumeKeywords = extractKeywords(resumeText);
  let jobKeywords = extractKeywords(jobText);

  let missingSkills = jobKeywords.filter(word => !resumeKeywords.includes(word));
  let matchScore = Math.round(((jobKeywords.length - missingSkills.length) / jobKeywords.length) * 100);

  document.getElementById("results").innerHTML = `
      <h3>Analysis Results</h3>
      <p><strong>Match Score:</strong> ${matchScore}%</p>
      <p><strong>Missing Keywords:</strong> ${missingSkills.join(", ") || "None"}</p>
      <p><strong>Suggestions:</strong> Add more relevant keywords from the job description.</p>
  `;
}

document.getElementById('candidate-name').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') submitFeedback();
});

document.getElementById('status').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') submitFeedback();
});

document.getElementById('feedback').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') submitFeedback();
});

function submitFeedback() {
  const candidateName = document.getElementById('candidate-name').value;
  const status = document.getElementById('status').value;
  const feedback = document.querySelector('textarea[name="feedback"]').value;

  if (candidateName === "" || feedback === "") {
      alert("Please fill in all fields before submitting.");
      return;
  }

  const recruiterActions = document.getElementById('recruiter-actions');
  recruiterActions.innerHTML += `<p><strong>${candidateName}</strong> - Status: ${status}<br>Feedback: ${feedback}</p>`;

  document.getElementById('candidate-name').value = "";
  document.getElementById('status').value = "shortlisted";
  document.querySelector('textarea[name="feedback"]').value = "";
}
