var controller = new ScrollMagic.Controller();

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    effect: "fade",
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  // create a scene

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 900
  })
    .on("enter", function (e) {
      let player = document.querySelector("#fifthLottie");
      player.play();
    })
    .addTo(controller);

  LottieInteractivity.create({
    mode: "scroll",
    player: "#firstLottie",
    actions: [
      {
        visibility: [0.2, 1],
        type: "play"
      }
    ]
  });
  LottieInteractivity.create({
    mode: "scroll",
    player: "#secondLottie",
    actions: [
      {
        visibility: [0.2, 1],
        type: "play"
      }
    ]
  });
  LottieInteractivity.create({
    mode: "scroll",
    player: "#thirdLottie",
    actions: [
      {
        visibility: [0.2, 1],
        type: "play"
      }
    ]
  });
  LottieInteractivity.create({
    mode: "scroll",
    player: "#fourthLottie",
    actions: [
      {
        visibility: [0.2, 1],
        type: "play"
      }
    ]
  });

  LottieInteractivity.create({
    mode: "scroll",
    player: "#sixthLottie",
    actions: [
      {
        visibility: [0.2, 1],
        type: "play"
      }
    ]
  });
  LottieInteractivity.create({
    mode: "scroll",
    player: "#seventhLottie",
    actions: [
      {
        visibility: [0.2, 1],
        type: "play"
      }
    ]
  });
  LottieInteractivity.create({
    mode: "scroll",
    player: "#eigthLottie",
    actions: [
      {
        visibility: [0.2, 1],
        type: "play"
      }
    ]
  });
  LottieInteractivity.create({
    mode: "scroll",
    player: "#ninthLottie",
    actions: [
      {
        visibility: [0.2, 1],
        type: "play"
      }
    ]
  });

  LottieInteractivity.create({
    mode: "scroll",
    player: "#tenthLottie",
    actions: [
      {
        visibility: [0.1, 1],
        type: "play"
      }
    ]
  });
});