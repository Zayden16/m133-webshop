console.log("App Loaded");


function incrementArticleCounter() {
    let counter = document.getElementById("article-counter");
    let newVal = counter.value++;
    console.log(newVal);
    return counter.value = newVal; 
}