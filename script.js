// project one video functionality
const projectOneVideo = document.querySelector(".projectOneVideo");

projectOneVideo.addEventListener("mouseover", function () {
  if (!projectOneVideo.playing) {
    console.log("mouse on");
    projectOneVideo.play();
  }
});

projectOneVideo.addEventListener("mouseleave", function () {
  console.log("mouse off");
  projectOneVideo.pause();
});

// project two video functionality
const projectTwoVideo = document.querySelector(".projectTwoVideo");

projectTwoVideo.addEventListener("mouseover", function () {
  if (!projectTwoVideo.playing) {
    console.log("mouse on");
    projectTwoVideo.play();
  }
});

projectTwoVideo.addEventListener("mouseleave", function () {
  console.log("mouse off");
  projectTwoVideo.pause();
});

// project three video functionality
const projectThreeVideo = document.querySelector(".projectThreeVideo");

projectThreeVideo.addEventListener("mouseover", function () {
  if (!projectThreeVideo.playing) {
    console.log("mouse on");
    projectThreeVideo.play();
  }
});

projectThreeVideo.addEventListener("mouseleave", function () {
  console.log("mouse off");
  projectThreeVideo.pause();
});
