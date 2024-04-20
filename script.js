function itemDropdown() {
    let dropdownButton = document.getElementById("dropdownButton");
    let dropdownMenu = document.getElementById("dropdownMenu");

    dropdownButton.addEventListener("click", function() {
      if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
      } else {
        dropdownMenu.classList.add("show"); 
      }
    });
    
    document.addEventListener("click", function(event) {
      if (!dropdownButton.contains(event.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  }
  itemDropdown();
 