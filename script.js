// This is for the ABOUT ME Animation 
function typeWriter(text, i, id) {
    if (i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i, id);
        }, 100); // Adjust the typing speed here (milliseconds)
    } else {
        setTimeout(function () {
            document.getElementById(id).innerHTML = ''; // Clear the text after typing is complete
            i = 0;
            typeWriter(text, i, id); // Restart typing
        }, 2000); // Adjust the delay before restart (milliseconds)
    }
}

function startTyping() {
    var title = "About Me";
    var i = 0;
    var id = "about-title"; // Assign an ID to your h1 element, like class="sub-title" id="about-title"
    typeWriter(title, i, id);
}

window.onload = startTyping;



// Animation Skill Bars
const skillBars = document.querySelectorAll('.skill-progress');

// Loop through each skill bar
skillBars.forEach(skill => {
    const progress = skill.style.width;
    skill.style.width = '0'; // Set initial width to 0
    setTimeout(() => {
        skill.style.width = progress; // Animate width to the actual progress percentage
    }, 500); // You can adjust the delay as needed
});



// For Projects Photo Slide
const projects = document.querySelectorAll('.project');

// Function to handle project click
function handleClick(event) {
    // Remove active class from all projects
    projects.forEach(project => {
        project.classList.remove('active');
    });

    // Add active class to the clicked project
    const project = event.currentTarget;
    project.classList.add('active');
}

// Attach click event listeners to projects
projects.forEach(project => {
    project.addEventListener('click', handleClick);
});


// Clicking each image
const Projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', () => {
        // Toggle the display of project details on click
        const details = project.querySelector('.project-details');
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
});

const project = document.querySelectorAll('.project');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');

projects.forEach(project => {
    const img = project.querySelector('.project-image');
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});





// Fonction pour afficher l'image zoomée
function zoomImage(src) {
    var zoomedImg = document.getElementById("zoomed-image");
    zoomedImg.src = src;
    document.getElementById("image-zoom-container").style.display = "block";
}

// Fonction pour masquer l'image zoomée
function hideZoomed() {
    document.getElementById("image-zoom-container").style.display = "none";
}