/*
  Portfolio
  Student Name: Vishal Thapa
  Student ID: 301271185
  Date: 30-09-2023

*/

// Text typing animation
const welcomeText = document.querySelector('.welcome-text');
const missionText = document.querySelector('.mission-text');
const cursor = document.querySelector('.cursor');

const textToTypeWelcome = "Welcome to My Website";
const textToTypeMission = "To leverage cutting-edge technology and innovative solutions to create software that not only meets the needs of users but also enhances their experiences. I am committed to continuous learning and improvement, striving for excellence in every line of code I write. My mission is to contribute to the development of reliable, efficient, and user-friendly software applications that make a positive impact on people's lives and drive the future of technology.";

function typeText(element, text, speed) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i <= text.length) {
            element.textContent = text.substring(0, i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

window.addEventListener('DOMContentLoaded', () => {
    // Typing animation for Welcome text
    typeText(welcomeText, textToTypeWelcome, 150);
    cursor.style.visibility = 'visible'; // Show cursor at the beginning

    // Typing animation for Mission Statement text with a delay
    setTimeout(() => {
        missionText.style.visibility = 'visible';
        typeText(missionText, textToTypeMission, 50);
    }, textToTypeWelcome.length * 50); // Delay the mission statement animation
});


// JavaScript to handle logo hover effect
const logo = document.getElementById('logo');
const socialIcons = document.getElementById('socialIcons');

logo.addEventListener('mouseenter', () => {
    socialIcons.style.display = 'block';
    socialIcons.style.transform = 'scale(1)';
});

socialIcons.addEventListener('mouseleave', () => {
    socialIcons.style.display = 'none';
    socialIcons.style.transform = 'scale(0)';
});

function submitForm() {
    document.querySelector("form").submit();
  }