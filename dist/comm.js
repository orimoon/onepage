// const headerEl = document.querySelector('#header');

// // 페이지에 스크롤 이벤트 추가
// window.addEventListener(
//     'scroll',
//     // _.throttle(함수, 시간)
//     // 스크롤이 300ms마다 한번씩 실행되도록 설정
//     _.throttle(function () {
//         console.log(window.scrollY);
//         // 페이지의 스크롤 위치가 200px보다 크면...
//         if (window.scrollY > 200) {
//             // gsap.to(요소, 시간, 옵션);
//             gsap.to(headerEl, 0.6, {
//                 opacity: 0,
//                 display: 'none',
//             });
//         } else {
//             // 페이지의 스크롤 위치가 200px보다 작으면...
//             gsap.to(headerEl, 0.6, {
//                 opacity: 1,
//                 display: 'block',
//             });
//         }
//     }, 300)
// );
gsap.registerPlugin(ScrollTrigger);
gsap.to(".txt1", {
  scrollTrigger: {
    trigger: ".sec4",
    markers: false,
    start: "0 50%",
    end: "100% 100%",
    scrub: true,
  },
  rotate: "360deg",
  duration: 4,
});

const showAnim = gsap
  .from(".main-bar", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});
