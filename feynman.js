import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({apiKey:"AIzaSyAftLLYUOdXUg1EffIp-57-UUdFkk9r5vo"});

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: "Explain why 2 + 2 is equal to 5",
    });
    console.log(response.text);
}

main();





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