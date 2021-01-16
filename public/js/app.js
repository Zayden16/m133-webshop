class CartItem {
    constructor(artId, amount){
        this.ArticleId = artId;
        this.Amount = amount;
    }
}
if (document.title == "Webshop Cart") {
    $('.incrementor').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var articleIdHelper = $this.closest('div').find('h6');
        var artId1 = articleIdHelper.innerHTML;
        console.log(artId1);
        var value = parseInt($input.val());
        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }
        $input.val(value);
    });
    $('.decrementor').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
        $input.val(value);
    });
    function addToCart(artId1) {
        const counter = document.getElementById("article-counter-" + artId1);
        var amount1 = parseInt(counter.value) + 1;
        const cartItem = new CartItem(artId1, amount1);
        fetch("/api/cart/addItem", {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(cartItem)
        });
    }
}
if (document.title == "Webshop Home") {
    let toggler = document.getElementById("cart-toggler");
    let minicart = document.getElementById("minicart");
    toggler.addEventListener("click", function() {
        if (minicart.style.display == "none" || minicart.style.display == "") {
            minicart.style.display = "flex";
        } else {
            minicart.style.display = "none";
        }
    });
}
function addToCart(artId1) {
    const amount1 = parseInt(document.getElementById("article-counter-" + artId1).value);
    const cartItem = new CartItem(artId1, amount1);
    fetch("/api/cart/addItem", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(cartItem)
    });
}
if (document.title == "Webshop Article") {
    let toggler = document.getElementById("cart-toggler");
    let minicart = document.getElementById("minicart");
    toggler.addEventListener("click", function() {
        if (minicart.style.display == "none" || minicart.style.display == "") {
            minicart.style.display = "flex";
        } else {
            minicart.style.display = "none";
        }
    });
    const artId1 = document.getElementById("addToCart").value;
    let addToCartBtn = document.getElementById("addToCart");
    addToCartBtn.addEventListener("click", function() {
        addToCart(artId1);
        var snack = document.getElementById("snackbar");
        snack.className = "show";
        setTimeout(function() {
            snack.className = snack.className.replace("show", "");
        }, 2000);
        setTimeout(function() {
            window.location.reload();
        }, 2000);
    });
    $('.decrementor').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
        $input.val(value);
    });
    $('.incrementor').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }
        $input.val(value);
    });
}
