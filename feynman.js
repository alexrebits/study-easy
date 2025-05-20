// import { GoogleGenAI } from '#google/genai';

// const ai = new GoogleGenAI({apiKey:"AIzaSyAftLLYUOdXUg1EffIp-57-UUdFkk9r5vo"});

// async function main() {
//     const response = await ai.models.generateContent({
//         model: "genmini-1.5-flash",
//         contents: "Explain how AI works in a few words",
//     });
//     console.log(response.text);
// }

// main();





const selection = document.querySelector("input");

function enter(){
    let entry = selection.value;
    selection.value = "";
    console.log(entry);
}

selection.addEventListener("keydown",checkEnter);

function checkEnter(e){
    if(e.keyCode ==13){ //ensure that selection.value != "" (empty string, don't send anything to the ai)
        enter();
    }
}

function click(e){
    console.log(`${e.code}`);
}


/*AI with free API's:
1. Gemini 1.5 Flash
2. Groq (and I have code that clearly shows how to impliment it)
3. ollama?





*/