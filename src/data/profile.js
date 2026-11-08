// All personal content for the portfolio lives in this file.
// Search for "TODO(theo)" to find every placeholder that still needs real content.

export const profile = {
  name: 'Theo Moritz',
  headline: 'MSBAIM Student · Purdue University',
  // TODO(theo): refine the value proposition in your own words.
  valueProp: 'I turn data into decisions.',
  intro:
    'I am pursuing a Master of Science in Business Analytics and Information Management at Purdue University. I combine analytics, information systems, and code to help organizations understand their data and act on it.',
  location: 'West Lafayette, IN',
  // TODO(theo): update to reflect what you are currently looking for.
  availability: 'Open to internships and full-time roles in business analytics and data.',
}

export const contact = {
  email: 'moritz5@purdue.edu',
  linkedin: 'https://www.linkedin.com/in/theomoritz',
  github: 'https://github.com/tmoritz2005',
}

export const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'This site: a multi-page React application with a responsive, mobile-first design. It is containerized with Docker and continuously deployed to Google Cloud Run from its Git repository.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Docker', 'Google Cloud Run'],
    // TODO(theo): optionally replace with a real screenshot (e.g. /images/portfolio_screenshot.png).
    image: '/images/project_portfolio.svg',
    imageAlt: 'Illustration of the portfolio home page in a browser window',
    // TODO(theo): confirm this repository name and make it public before submitting.
    github: 'https://github.com/tmoritz2005/portfolio',
    demo: null,
  },
  {
    title: 'Forecasting U.S. Flight Delays',
    meta: 'MGMT 474 · Purdue University · Fall 2025 · Team of 4',
    description:
      'Predicted whether a U.S. flight will arrive 15+ minutes late using only pre-flight information: airline, origin, destination, day of week, departure hour, and distance. We compared logistic regression, decision tree, and XGBoost models; XGBoost performed best (ROC AUC 0.62, recall 0.85) and powers an interactive classifier that returns the delay probability for any flight.',
    // TODO(theo): confirm Python / scikit-learn (inferred; the poster names only the models).
    tech: ['Python', 'XGBoost', 'scikit-learn', 'Logistic Regression', 'Decision Tree'],
    image: '/images/project_flight_delays.png',
    imageAlt: 'Bar chart of average arrival delay by airline, led by Allegiant Air at 53.5 minutes',
    github: null,
    demo: null,
  },
  {
    title: 'Predicting Student Enrollment Status',
    meta: 'MGMT 473 · Purdue University · Team of 4',
    description:
      'Helped a university facing rising enrollment but declining retention identify students at risk of not returning. Using 6,597 student records and 37 variables, we framed retention as a binary classification problem; a random forest outperformed logistic regression with a test AUC of 0.78, and final grades, past-due balances, attendance, and scholarship percentage informed recommendations on financial aid, curriculum, and student support.',
    tech: ['R', 'RStudio', 'Random Forest', 'Logistic Regression', 'SMOTE'],
    image: '/images/project_enrollment.png',
    imageAlt: 'Random forest variable importance chart, with final grade as the most important predictor',
    github: null,
    demo: null,
  },
]

// level: 0–100, label: Advanced | Proficient | Intermediate | Learning
export const skillGroups = [
  {
    category: 'Analytics & Data',
    skills: [
      { name: 'SQL', level: 80, label: 'Proficient' },
      { name: 'Excel', level: 85, label: 'Advanced' },
      { name: 'Tableau / Power BI', level: 70, label: 'Proficient' },
      { name: 'Statistics', level: 65, label: 'Intermediate' },
    ],
  },
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 75, label: 'Proficient' },
      { name: 'R', level: 55, label: 'Intermediate' },
      { name: 'JavaScript / React', level: 50, label: 'Intermediate' },
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'pandas / NumPy', level: 70, label: 'Proficient' },
      { name: 'scikit-learn', level: 55, label: 'Intermediate' },
    ],
  },
]

export const tools = {
  using: ['SQL', 'Git & GitHub', 'Jupyter', 'Google Colab', 'VS Code', 'Tableau', 'Excel', 'Docker'],
  learning: ['Google Cloud', 'dbt', 'MongoDB'],
}
