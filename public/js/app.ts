// deno-lint-ignore-file
import { CartItem } from "../../models/CartItem.ts";

if (document.title == "Webshop Cart") {
    $('.incrementor').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        // var articleIdHelper = $this.closest('div').find('h6');
        // var artId = articleIdHelper.innerHTML;
        // console.log(artId);
        
        var value = parseInt($input.val());
        if (value < 100) {
            value = value + 1;

        } else {
            value = 100;
        }
        $input.val(value);
    });

    $('.decrementor').on('click', function (e) {
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


    function addToCart(artId) {
        const counter = <HTMLInputElement>document.getElementById("article-counter-" + artId);
        var amount = parseInt(counter.value) + 1;
        const cartItem = new CartItem(artId, amount);
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

    toggler.addEventListener("click", function () {
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

    toggler.addEventListener("click", function () {
        if (minicart.style.display == "none" || minicart.style.display == "") {
            minicart.style.display = "flex";
        } else {
            minicart.style.display = "none";
        }
    });

    const artId = document.getElementById("addToCart").value;
    let addToCartBtn = document.getElementById("addToCart");
    addToCartBtn.addEventListener("click", function () {
        addToCart(artId);
        var snack: HTMLElement = document.getElementById("snackbar");
        snack.className = "show";
        setTimeout(function () {
            snack.className = snack.className.replace("show", "");
        }, 2000);
        setTimeout(function () {
            window.location.reload();
        }, 2000);
    });

    $('.decrementor').on('click', function (e) {
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

    $('.incrementor').on('click', function (e) {
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

if (document.title == "Webshop Checkout") {
    let checkoutBtn = document.getElementById("checkoutBtn");
    checkoutBtn.addEventListener("click", function () {
        checkout();
        var snack: HTMLElement = document.getElementById("snackbar");
        snack.className = "show";
        setTimeout(function () {
            snack.className = snack.className.replace("show", "");
        }, 2000);
    });

    async function checkout() {
        var cart = fetch("http://localhost:8000/api/cart", {
                method: 'GET',
                redirect: 'follow'
            })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        fetch("/api/checkout", {
            method: 'POST',
            mode: 'no-cors',
            body: `${JSON.stringify(cart)}`
        });
    }
}

function addToCart(artId) {
    const amount = parseInt(document.getElementById("article-counter-" + artId).value);
    const cartItem = new CartItem(artId, amount);
    fetch("/api/cart/addItem", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(cartItem)
    });
}