$(document).ready(function() {
  const headerTemplate = (link, resumeLink) => `
<nav>
  <h1>
      <span id="homenav">
          <a href="${link}">Arthur Kim is a designer</a>
      </span>
  </h1>
  <span id="button"></span>
</nav>
<br clear="all" />
<div class="hidden">
  <div id="hiddenLeft" class="hiddenModule">
      <p>Arthur Kim is a student at
          <a href="https://www.risd.edu" target="_blank">RISD</a>
          graduating in June 2019. You can find his
          <a href="${resumeLink}" target="_blank">❒ resume</a>
          here. He previously worked at
          <a href="https://www.sypartners.com/" target="_blank">SYPartners</a>
          and worked business development and strategy with Nike, Virgin Voyages ️⚓, and Uniqlo.
          <br />
          <br /> He also worked for a smaller textile firm in South Korea as a design intern and later worked for
          them as a graphic designer.
      </p>
  </div>

  <div id="hiddenMiddle" class="hiddenModule">
      <p>He enjoys challenges, solving interesting and weird problems, and knows how to thread eyebrows. 😮 He's
          not that great at writing about himself in third person so you can find more about him here — stalk
          his
          <a href="https://www.instagram.com/arthursdayy/" target="_blank"> 📷 instagram</a>
          or connect with him on
          <a href="https://www.linkedin.com/in/arthur-kim/" target="_blank"> ⚡︎ linkedIn</a>.
          <br />
          <br /> Or drop a hello email.
      </p>
  </div>
</div>`;

  const animationPath = $("#indexHeader").length? 'assets/js/data.json' : '../../assets/js/data.json';
  $("#indexHeader").html(headerTemplate("index.html", "ArthurKim_Resume.pdf"));
  $("#projectHeader").html(
    headerTemplate("../../index.html", "../../ArthurKim_Resume.pdf")
  );

  var animation = lottie.loadAnimation({
    container: document.getElementById("button"),
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: animationPath
  });

  $("#button").click(function() {
    $(".hidden").toggleClass("showHidden");
    animation.play();

    if ($(".hidden").hasClass("showHidden")) {
      lottie.setDirection(1);
    } else {
      lottie.setDirection(-1);
    }
  });
});
