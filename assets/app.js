console.log('js connected');

setTimeout(function () {
    document.querySelector('.loader-container').classList.add('hidden')
}, 4000)

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

