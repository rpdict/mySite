$("document").ready(function(){
  if (location.pathname === '/') {
    $("nav a:eq(0)").addClass("active");
  } else if (location.pathname === '/markdown') {
    $("nav a:eq(1)").addClass("active");
  } else {
    $("nav a").removeClass("active");
  }
});
