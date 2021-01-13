class CartItem {
    constructor(artId, amount){
        this.ArticleId = artId;
        this.Amount = amount;
    }
}
console.log("readsy");
let toggler = document.getElementById("cart-toggler");
let minicart = document.getElementById("minicart");
toggler.addEventListener("click", function() {
    if (minicart.style.display === "none") {
        minicart.style.display = "flex";
        console.log("changed disp to flex");
    } else {
        minicart.style.display = "none";
        console.log("changed disp to none");
    }
});