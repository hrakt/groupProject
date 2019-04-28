console.log('js connected');

// function onReady(check) {
//     const intervalID = window.setInterval(checkReady, 1000);

//     function checkReady() {
//         if (document.querySelector('.home-container')[0] !== undefined) {
//             window.clearInterval(intervalID);
//             check.call(this);
//         }
//     }
// }

// function show(id, value) {
//     document.getElementById(id).style.display = value ? 'flex' : 'none';
// }

// onReady(function () {
//     show('.home-container', true);
//     show('.loader-container', false);
// });

const exploreText = document.querySelector('.explore-static');
const exploreImage = document.querySelector('.home-img-explore')

const yourText = document.querySelector('.your-static')
const yourImage = document.querySelector('.home-img-your')

const elseText = document.querySelector('.else-static')
const elseImage = document.querySelector('.home-img-else')
console.log(exploreText)

exploreText.addEventListener('mouseover', function() {
    exploreImage.style.zIndex = '0';
    exploreImage.style.animation = 'fadein 1s linear 1';
    exploreText.addEventListener('mouseout', function() {
    exploreImage.style.zIndex = '0';
    exploreImage.style.animation = '';
    })
    console.log(exploreText)
})

yourText.addEventListener('mouseover', function() {
    yourImage.style.zIndex = '0';
    yourImage.style.animation = 'fadein 1s linear 1';
    yourText.addEventListener('mouseout', function() {
    yourImage.style.zIndex = '-1';
    yourImage.style.animation = '';
    })
    console.log(yourText)
})

elseText.addEventListener('mouseover', function() {
    elseImage.style.zIndex = '0';
    elseImage.style.animation = 'fadein 1s linear 1';
    elseText.addEventListener('mouseout', function() {
    elseImage.style.zIndex = '-2';
    elseImage.style.animation = '';
    })
    console.log(elseText)
})