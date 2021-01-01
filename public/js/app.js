console.log("App Loaded");


function incrementArticleCounter() {
    let counter = document.getElementById("article-counter");
    let newVal = counter.value++;
    return newVal;
}


function decrementArticleCounter() {
    let counter = document.getElementById("article-counter");
    let newVal = counter.value--;
    return newVal;
}