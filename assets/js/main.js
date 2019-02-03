  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  });


  window.onscroll = function () {
    myFunction()
  };

  var header = document.querySelector(".my_nav");

  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      header.classList.remove('no-shadows');
    } else {
      header.classList.remove("sticky");
      header.classList.add('no-shadows');
    }
  }