$(document).ready(function() {
    var animation = lottie.loadAnimation({
        container: document.getElementById('design-xAnimation'),
        renderer: 'svg',
        autoplay: false,
        loop: true,
        path: 'assets/js/design-x.json'
    });
    
    // $("#design-xAnimation").mouseover(function(){
    //     animation.play();
    // });

    // $("#design-xAnimation").mouseout(function(){
    //     animation.stop();
    // });

    $( "#design-xAnimation" ).hover(
        function() {
          animation.play();
        },
        function() {
          animation.stop();
        }
      );
});