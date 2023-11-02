import { gsap, Linear } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const landingEntranceAnimations = () => {
  const tl = gsap.timeline({ ease: 'power1.inOut' });
  tl.to(
    '.landing__subtext',
    {
      duration: 1,
      text: 'aka: A computer nerd with a passion for cool experiences',
    },
    0
  );
  tl.to(
    '.landing__content',
    {
      duration: 1,
      opacity: 1,
      marginTop: -100,
    },
    0
  );
}

const splitEntrance = () => {
  let tl = gsap.timeline({
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '.pinned',
      start: 'top+=300 center',
      // markers: true,
    },
  })
  tl.to('.split__code', { right: '-60%', immediateRender: false, duration: 1 }, 0)
  tl.to('.split__color', { left: '-70%', immediateRender: false, duration: 1 }, 0)
  tl.to('.split__content', { marginTop: -100, opacity: 1, immediateRender: false, duration: 1 }, 0)
  tl.to('.split__text', { x: 0, opacity: 1, immediateRender: false, duration: 1 }, 0)

}

const splitExit = () => {
  let tl = gsap.timeline({
    ease: 'power1.inOut',

    scrollTrigger: {
      trigger: '.pinned',
      start: 'top top',
      end: '+=8000',
      // markers: true,
      pin: true,
      anticipatePin: 1,
      scrub: true, 
    },
  }, 0)
  tl.to('.split__content', {
    scale: 30,
    duration: 5,
    // delay: 2,
  }, 2)
  tl.to('.split__background', {
    opacity: 0,
    duration: 4,
  }, 2)
  tl.to('.split__content', {visibility: 'hidden'})
  tl.to('.timeline', {
    scale: 1,
    duration:5,
    opacity: 1
  },2)
  tl.to('.timeline__block:nth-child(1) > .timeline__copy', {
    fontWeight: 700,
    color: 'black',
    duration: 1, 
    yoyo: true, 
    repeat: 1
  }, 7)
  tl.to('.timeline__block:nth-child(2) > .timeline__copy', {
    fontWeight: 700,
    color: 'black',
    yoyo: true,
    repeat: 1, 
    duration: 1
  })
  tl.to('.timeline__block:nth-child(3) > .timeline__copy', {
    fontWeight: 700,
    color: 'black',
    yoyo: true,
    repeat: 1,
    duration: 1
  })
  tl.to('.featured__card' ,{
    x: 0,
    duration: 1
  }, 13)
  tl.to('.timeline', {
    visibility: 'hidden'
  }, 14)
  tl.to('.portfolio__header', {visibility: 'visible'}, 14)
  tl.to('.featured__card' ,{
    scale: 0.3, 
    duration: 1
  }, 14)
  
  tl.to('.portfolio__cards', {
    left: () => .75*window.innerWidth,
    duration: 1
  }, 14);

  const cards = document.querySelector('.portfolio__cards');
  tl.to('.all__cards', {
    x: () => - (cards.offsetWidth - .25 * window.innerWidth),
    duration: 5
  }, 15)
}

const timelineEnter = () => {
  // let tl = gsap.timeline({
  //   ease: 'power1.inOut',
  //   scrollTrigger: {
  //     trigger: '.timeline',
  //     start: 'top top',
  //     markers: true,
  //     pin: true,
  //     scrub: 10
  //   },
  // }, 0)
  // tl.to('.timeline__block:nth-child(0)', {
  //   fontWeight
  // }, 0)
}

// const landingScrollAnimations = () => {
//   gsap.to('.landing__content', {
//     duration: 1,
//     // marginTop: 0,
//     x: '-100%',
//     immediateRender: false,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: '.section__landing',
//       start: 'top+=50px top',
//       markers: true,
//     },
//   });
// }

const initAnimations = () => {
  landingEntranceAnimations();
  splitEntrance();
  splitExit();
  timelineEnter();
};

export {
  initAnimations
}