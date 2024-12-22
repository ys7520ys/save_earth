$('header a, .btn-gototop').click(function(){
  $.scrollTo(this.hash || 0, 500);
  e.preventDefault();
})