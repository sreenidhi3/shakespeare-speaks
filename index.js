//variables
var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var textOutput = document.querySelector("#text-output");
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

//translate using funTranslations API
function errorHandler(error) {
    console.log("Error Occured :(",error);
    alert("Server Error Occured");
}

function constructURL(text) {
    console.log(text);
    console.log(serverURL+"?text="+text);
    return(serverURL+"?text="+text);
    
}
function fetchURL(text) {
    fetch(constructURL(text)).then(response => response.json()).then(json => textOutput.innerText = json.contents.translated).catch(errorHandler);
}

function eventHandler() {
    fetchURL(textInput.value);
}

btnTranslate.addEventListener("click", eventHandler);