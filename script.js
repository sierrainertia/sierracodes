const projectOneVideo = document.querySelector(".projectOneVideo");

projectOneVideo.addEventListener("mouseover", function () {
  console.log("mouse on");
  projectOneVideo.play();
});

projectOneVideo.addEventListener("mouseleave", function () {
  console.log("mouse off");
  projectOneVideo.pause();
});
