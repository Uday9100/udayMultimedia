function helloWorld(languageCode) {
    switch (languageCode) {
        case "es":
            return "¡Hola, Mundo!";
        case "de":
            return "Hallo, Welt!";
        case "en":
        default:
            return "Hello, World!";
    }
}
const languages = ["en", "es", "de"];
languages.forEach((language) => {
    const greeting = helloWorld(language);
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `[${language}] ${greeting}<br>`; 
});

