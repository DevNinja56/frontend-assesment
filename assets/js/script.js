// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the button that will show/hide the sidebar
  const showSidebarButton = document.getElementById("showSidebar");
  // Select the sidebar element
  const sidebar = document.querySelector(".side-bar-main-container");

  // Check if both the button and sidebar exist in the DOM
  if (showSidebarButton && sidebar) {
    // Add a click event listener to the button
    showSidebarButton.addEventListener("click", function () {
      // Toggle the 'sidebar-visible' class on the sidebar to show/hide it
      sidebar.classList.toggle("sidebar-visible");
    });
  }
});

// Initialize Select2 plugin for elements with the class '.js-example-basic-single'
$(document).ready(function () {
  $(".js-example-basic-single").select2({
    minimumResultsForSearch: Infinity, // Disable search functionality
  });
});

// Initialize DataTables for the element with the ID '#dataTable'
$(document).ready(function () {
  $("#dataTable").DataTable({
    searching: false, // Disable the search feature
    info: false, // Disable the info text (e.g., showing "Showing 1 to 5 of 10 entries")
    paging: true, // Enable pagination
    lengthChange: false, // Disable changing the number of entries shown per page
    pageLength: 5, // Set the number of rows per page
    columnDefs: [
      {
        orderable: false, // Disable sorting for the first column
        targets: 0,
      },
    ],
  });

  // Add a click event listener to the '#selectAll' checkbox
  $("#selectAll").click(function () {
    var checked = this.checked; // Get the checked state of the '#selectAll' checkbox
    // Iterate over each checkbox with the class '.row-select' and set its checked state
    $(".row-select").each(function () {
      this.checked = checked;
    });
  });
});

// Initialize Swiper for elements with the class '.swiper'
const swiper = new Swiper(".swiper", {
  direction: "horizontal", // Set the direction of the swiper to horizontal
  loop: true, // Enable infinite looping
  effect: "slide", // Set the transition effect to slide
  navigation: {
    nextEl: ".swiper-button-next", // Selector for the next button
    prevEl: ".swiper-button-prev", // Selector for the previous button
  },
});

// Initialize Datepicker for elements with IDs '#datePicker1', '#datePicker2', and '#datePicker3'
new Datepicker("#datePicker1");
new Datepicker("#datePicker2");
new Datepicker("#datePicker3");
