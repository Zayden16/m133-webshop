let toggler = document.getElementById("cart-toggler");
let minicart = document.getElementById("minicart");
toggler.addEventListener("click", function() {
    if (minicart.style.display == "none" || minicart.style.display == "") {
        minicart.style.display = "flex";
    } else {
        minicart.style.display = "none";
    }
});
