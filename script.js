const tabs = document.querySelectorAll('.tab');
const editor = document.getElementById('editor');

const content = {
  'about': `
// About Me
Hi, I'm Julie Kalumba — a passionate and driven Junior Software Developer with a love for solving problems through creative and efficient code.

I thrive on learning new technologies and bringing ideas to life, whether that's building intuitive desktop applications in WPF, designing Android apps.

I enjoy blending logic with creativity, paying attention to both functionality and design. My journey has been fueled by curiosity, persistence, and a genuine excitement to grow in the tech world.
  `,
  'projects': `
// Completed Projects
<img src="image/images/Copilot_20250810_200339.png" alt="To-Do App Logo" class="project-logo">
📝 Priority To-Do App
- Girly aesthetic with lilac/pink
- Task scheduling, reminders, invisible mode

🍳 Recipe Book App
- C# desktop app
- Search by ingredients, clean UI

📄 Monthly Claim Contract System
- Lecturer claim submission
- Approval workflows, real-time updates

🌍 Peniel Place Ministries Website
- Community-focused NPO site
- Events, donations, contact form

// Upcoming Projects
💰 Save-A-Dime Budget App
- Anime/K-pop inspired
- Purple/black theme, savings pots

📖 Bible Game App
- Scripture quizzes, storylines
- Gender-neutral, progressive levels

📦 Inventory Management System
- Lightweight stock tracker
- Quick search, restock alerts
  `,
  'skills': `
// Languages & Tools
HTML, CSS, JavaScript
C#, WPF, .NET Core
SQL Server, GitHub, Android Studio

// Design
UI/UX, responsive layouts
Anime/K-pop inspired aesthetics
  `,
  'contact': `
// Contact
💼 LinkedIn: linkedin.com/in/julie29
💻 GitHub: github.com/Julie-portfolio
📧 Email: jewel29nsimba@gmail.com
  `
};

function loadTab(tabName) {
  tabs.forEach(tab => tab.classList.remove('active'));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  editor.textContent = content[tabName];
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    loadTab(tab.getAttribute('data-tab'));
  });
});

loadTab('about');
