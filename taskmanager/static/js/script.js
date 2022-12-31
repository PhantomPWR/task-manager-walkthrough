document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // modal initialization
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // date picker
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    // select dropdown initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});

  // Or with jQuery

//   $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });
