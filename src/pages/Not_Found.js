document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  setInterval(createStar, 100);

  function createStar() {
    var right = Math.random() * 500;
    var top = Math.random() * window.innerHeight; // Use window.innerWidth for width
    var star = document.createElement("div");
    star.classList.add("star");
    body.appendChild(star);
    setInterval(runStar, 10);
    star.style.top = top + "px";

    function runStar() {
      if (right >= window.innerWidth) {
        // Use window.innerWidth for width
        star.remove();
      }
      right += 3;
      star.style.right = right + "px";
    }
  }
});
