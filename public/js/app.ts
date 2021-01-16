// deno-lint-ignore-file
import { CartItem } from "../../models/CartItem.ts";

if (document.title == "Webshop Cart") {

    let togglerAmount:HTMLElement = document.getElementById("lblCartCount");
        fetch("/api/getCartTotal").then(function(response) {
            return response.text().then(function(text) {
                togglerAmount.innerHTML = text;
            });
          });
      
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
        let togglerAmount:HTMLElement = document.getElementById("lblCartCount");
        fetch("/api/getCartTotal").then(function(response) {
            return response.text().then(function(text) {
                togglerAmount.innerHTML = text;
            });
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
    
    let togglerAmount:HTMLElement = document.getElementById("lblCartCount");    
    fetch("/api/getCartTotal").then(function(response) {
        return response.text().then(function(text) {
            togglerAmount.innerHTML = text;
        });
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

    let togglerAmount:HTMLElement = document.getElementById("lblCartCount");    
    fetch("/api/getCartTotal").then(function(response) {
        return response.text().then(function(text) {
            togglerAmount.innerHTML = text;
        });
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
    let toggler = document.getElementById("cart-toggler");
    let minicart = document.getElementById("minicart");

    toggler.addEventListener("click", function () {
        if (minicart.style.display == "none" || minicart.style.display == "") {
            minicart.style.display = "flex";
        } else {
            minicart.style.display = "none";
        }
    });

    let togglerAmount:HTMLElement = document.getElementById("lblCartCount");    
    fetch("/api/getCartTotal").then(function(response) {
        return response.text().then(function(text) {
            togglerAmount.innerHTML = text;
        });
      });

    let checkoutBtn = document.getElementById("checkoutBtn");
    checkoutBtn.addEventListener("click", function () {
        checkout();
});

    async function checkout() {
        let name = document.getElementById("name");
        let street = document.getElementById("street");
        let city = document.getElementById("city");
        let zip = document.getElementById("zip");

        if (name.value == "" || street.value == "" || city.value == "" || zip.value == "") {
            alert("Please fill out the form");
            return
        } else {
            var cart = await fetch("http://localhost:8000/api/cart", {
                    method: 'GET',
                    redirect: 'follow'
                })
                .then(response => response.text())
                .catch(error => console.log('error', error));
            const stringifiedCart = JSON.stringify(cart);
            fetch("/api/checkout", {
                method: 'POST',
                mode: 'no-cors',
                body: stringifiedCart
            });
            var snack: HTMLElement = document.getElementById("snackbar");
            snack.className = "show";
            setTimeout(function () {
                snack.className = snack.className.replace("show", "");
            }, 2000);
        }
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
    let togglerAmount:HTMLElement = document.getElementById("lblCartCount");    
    fetch("/api/getCartTotal").then(function(response) {
        return response.text().then(function(text) {
            togglerAmount.innerHTML = text;
        });
      });
}
