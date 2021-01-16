class CartItem {
    constructor(artId1, amount){
        this.ArticleId = artId1;
        this.Amount = amount;
    }
}
if (document.title == "Webshop Cart") {
    $('.decrementor').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
            artId = $this.closest('div').find('.decrementor').value;
            fetch("/api/cart/addItem", {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(cartItem)
            });
            window.location.reload();
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
    const artId2 = document.getElementById("addToCart").value;
    let addToCartBtn = document.getElementById("addToCart");
    addToCartBtn.addEventListener("click", function() {
        addToCart(artId2);
    });
    function addToCart(artId3) {
        const amount1 = parseInt(document.getElementById("article-counter-" + artId3).value);
        const cartItem = new CartItem(artId3, amount1);
        fetch("/api/cart/addItem", {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(cartItem)
        });
        window.location.reload();
    }
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
