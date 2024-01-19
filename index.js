// FOR MOVING TEXT 
var typeData = new Typed(".role", {
  strings: [
    "Full Stack Developer.",
    "Web Developer.",
    "Frontend Developer.",
    "Backend Developer.",
    "Coder.",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});



//Nav Active
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("#Container > section");
  const navLinks = document.querySelectorAll(".nav-icons");

  function changeNavOnScroll() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const offsetTop = section.offsetTop;
      const offsetBottom = offsetTop + section.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  }

  function smoothScrollToSection(index) {
    const targetSection = sections[index];
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }

  window.addEventListener("scroll", changeNavOnScroll);

  navLinks.forEach((link, index) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 
      smoothScrollToSection(index);
    });
  });
});



// SKILLS DATA 
let number01 = document.getElementById("number01");
let counter01 = 0;
let intervalId01 = setInterval(() => {
    counter01 += 1;
    if (counter01 <= 80) {
    number01.innerHTML = counter01 + '%';
    } else {
    clearInterval(intervalId01);
    }
}, 20);



let number02 = document.getElementById("number02");
let counter02 = 0;
let intervalId02 = setInterval(() => {
    counter02 += 1;
    if (counter02 <= 85) {
      number02.innerHTML = counter02 + '%';
    } else {
    clearInterval(intervalId02);
    }
}, 20);


let number03 = document.getElementById("number03");
let counter03 = 0;
let intervalId03 = setInterval(() => {
  counter03 += 1;
    if (counter03 <= 85) {
      number03.innerHTML = counter03 + '%';
    } else {
    clearInterval(intervalId03);
    }
}, 20);


let number04 = document.getElementById("number04");
let counter04 = 0;
let intervalId04 = setInterval(() => {
    counter04 += 1;
    if (counter04 <= 90) {
      number04.innerHTML = counter04 + '%';
    } else {
    clearInterval(intervalId04);
    }
}, 20);

// IMAGE ANIMATION
document.addEventListener("DOMContentLoaded", function() {
      const animationElement = document.getElementById("animationElement");

      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
      };

      const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active'); 
            observer.unobserve(entry.target); 
          }
        });
      }, options);

      observer.observe(animationElement);
});
  

// ANIMATION FROM LEFT 
document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll(".animate-on-scroll-left");

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    animatedElements.forEach(element => observer.observe(element));
});


// ANIMATION FROM RIGHT 
document.addEventListener("DOMContentLoaded", function() {
    const animatedElementsleft = document.querySelectorAll(".animate-on-scroll-right");

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    animatedElementsleft.forEach(element => observer.observe(element));
});


// ANIMATION FROM TOP
document.addEventListener("DOMContentLoaded", function() {
    const animatedElementstop = document.querySelectorAll(".animate-on-scroll-top");

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    animatedElementstop.forEach(element => observer.observe(element));
});

 


// FOR CONTACT FORM 

const scriptURL = 'https://script.google.com/macros/s/AKfycbzlnDE94tmp55QY5JRSwIiiYtC2y8yrYbCSzbbokUvL0ayXePL3eQvz1NIjWgdMnnOtMw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML = "Message Sent SuccessFully."
      setTimeout(()=>{
        msg.innerHTML=""
      },2000)
      form.reset()
    } )
    .catch(error => console.error('Error!', error.message))
})