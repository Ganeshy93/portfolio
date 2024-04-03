// Sample data object


import { Application } from '@splinetool/runtime';

  const canvas = document.createElement('canvas');
  canvas.id = 'canvas3d';
  canvas.width = 400;
  canvas.height = 300;
  document.querySelector('.section__pic-container').appendChild(canvas);

  const app = new Application(canvas);
  app.load('https://prod.spline.design/Wv-YNhgeAyBh1u07/scene.splinecode');
const projectsData = [
  {
    title: "Project One",
    imgUrl: "./assets/project-1.png",
    githubUrl: "https://github.com/project1",
    demoUrl: "https://project1demo.com"
  },
  // Add data for other projects similarly
];

// Function to populate projects data
function populateProjects() {
  const projectContainers = document.querySelectorAll(".details-container.color-container");
  projectContainers.forEach((container, index) => {
    const project = projectsData[index];
    container.querySelector(".project-img").src = project.imgUrl;
    container.querySelector(".project-title").textContent = project.title;
  });
}

// Function to open GitHub link
function openGitHub(url) {
  window.open(url, '_blank');
}

// Function to open demo link
function openDemo(url) {
  window.open(url, '_blank');
}

// Function to populate contact information
function populateContactInfo() {
  document.getElementById("emailInfo").querySelector("a").href = "mailto:" + yourEmail;
  document.getElementById("linkedinInfo").querySelector("a").href = yourLinkedInUrl;
}

// Function to toggle menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Call functions to populate data

function showCategory(category) {
  // Hide all project categories
  document.querySelectorAll('.project-category').forEach(function(category) {
    category.style.display = 'none';
  });

  // Show the selected category
  document.getElementById(category).style.display = 'block';
}
populateProjects();
populateContactInfo();