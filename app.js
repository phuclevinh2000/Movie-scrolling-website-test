const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
// console.log(text)
//END SECTION
const section = document.querySelector('section')
const end = section.querySelector('h1')

// SCROLL MAGIC
const controller = new ScrollMagic.Controller();

// Scenes
let scene = new ScrollMagic.Scene({
    duration: 8000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro) //stuck the video
    .addTo(controller)

// Text animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1}, {opacity: 0})

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    // .setTween(textAnim) //make the text dis when we scroll
    // .addTo(controller)

// Video animation
let accelamount = 0.1;  //acceleration
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;    //scrollPos is from scroll magic
    // console.log(e)
})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount  //smooth
    // console.log(scrollpos, delay)

    video.currentTime = delay;  //catch up where we scroll
}, 33.3)        //33.3 because take 1000 / 30 (30 is the frame of the video)