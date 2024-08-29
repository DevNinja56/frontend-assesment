document.addEventListener("DOMContentLoaded", function () {
  const showSidebarButton = document.getElementById("showSidebar");
  const sidebar = document.querySelector(".side-bar-main-container");

  if (showSidebarButton && sidebar) {
    showSidebarButton.addEventListener("click", function () {
      sidebar.classList.toggle("sidebar-visible");
    });
  }
});

$(document).ready(function () {
  $(".js-example-basic-single").select2({
    minimumResultsForSearch: Infinity,
  });
});

$(document).ready(function () {
  $("#dataTable").DataTable({
    searching: false,
    info: false,
    paging: true,
    lengthChange: false,
    pageLength: 5,
    columnDefs: [
      {
        orderable: false,
        targets: 0,
      },
    ],
  });

  $("#selectAll").click(function () {
    var checked = this.checked;
    $(".row-select").each(function () {
      this.checked = checked;
    });
  });
});


//for swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

