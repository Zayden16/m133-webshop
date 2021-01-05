function incrementArticleCounter() {
    let counter = document.getElementById("article-counter");
    let newVal = counter.value++;
    return newVal;
}

function decrementArticleCounter() {
    let counter = document.getElementById("article-counter");
    if (counter.value < 2) {
        return 1;
    }
    let newVal = counter.value--;
    return newVal;
}

function getCookie(name) {
    var cookieArr = document.cookie.split(";");

    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

var val = getCookie();
console.log(val);


function addToCart(elem) {
    let sessionId = document.cookie;
    console.log(document.cookie);
    let artId = elem.value;
    let amount = document.getElementById("article-counter-" + artId);
}