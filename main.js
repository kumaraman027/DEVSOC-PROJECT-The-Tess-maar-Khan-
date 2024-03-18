document.addEventListener('click', function(e) {
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var d = 0; d < dropdowns.length; d++) {
            var openDropdown = dropdowns[d];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
});
document.getElementsByClassName("dropbtn")[0].addEventListener("click", function() {
    this.parentNode.classList.toggle('active');
});
