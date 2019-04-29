console.log('js-home connected');

setTimeout(function () {
    document.querySelector('.loader-container').classList.add('hidden')
}, 4000)


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyNav()};

// Get the navbar
const navbar = document.querySelector('.nav-not-logged');

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// document.addEventListener('scroll', function(){
//     const scrollTop = document.scrollTop
//     const scrollBottom = scrollTop + window.innerHeight
//     const pageBottom = document.innerHeight
//     const differ = pageBottom - scrollBottom
//     const opacity = 1 - differ / 300
//     document.querySelector('.fade-bg').css('opacity', opacity)
// })

// window.addEventListener('scroll', function() {
//     document.querySelector('.home-bottom-text').innerHTML = pageYOffset + 'px';
//   });


const exploreText = document.querySelector('.explore-static');
const exploreImage = document.querySelector('.home-img-explore')

const yourText = document.querySelector('.your-static')
const yourImage = document.querySelector('.home-img-your')

const elseText = document.querySelector('.else-static')
const elseImage = document.querySelector('.home-img-else')
console.log(exploreText)



exploreText.addEventListener('mouseover', function() {
    exploreImage.style.zIndex = '0';
    exploreImage.style.animation = 'fadein 300ms linear 1';
    exploreText.addEventListener('mouseout', function() {
    exploreImage.style.animation = 'fadeout 300ms linear 1';
    setTimeout(() => {
        exploreImage.style.zIndex = '-1';
    }, 200);
    // exploreImage.style.zIndex = '0';
    // exploreImage.style.animation = '';
    })
    console.log(exploreText)
})

yourText.addEventListener('mouseover', function() {
    yourImage.style.zIndex = '0';
    yourImage.style.animation = 'fadein 300ms linear 1';
    yourText.addEventListener('mouseout', function() {
    yourImage.style.animation = 'fadeout 300ms linear 1';
    setTimeout(() => {
        yourImage.style.zIndex = '-2';
        }, 200);
    // yourImage.style.zIndex = '-1';
    // yourImage.style.animation = '';
    })
    console.log(yourText)
})

elseText.addEventListener('mouseover', function() {
    elseImage.style.zIndex = '0';
    elseImage.style.animation = 'fadein 300ms linear 1';
    elseText.addEventListener('mouseout', function() {
    elseImage.style.animation = 'fadeout 300ms linear 1';
    // elseImage.style.zIndex = '-2';
    setTimeout(() => {
        elseImage.style.zIndex = '-3';
        // elseImage.style.animation = '';
        }, 200);
    // elseImage.style.animation = '';
    })
    console.log(elseText)
})