const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "JyRtkUXjcm3DzfIEAC0TcQ==JhiVx61tjvsfnjX0";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,

    },

};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke(){

    try {
        jokeEl.innerText = "Bogga xiga...";
    btnEl.disabled = true;
    btnEl.innerText = "Raadinaya...";
    const response = await fetch(apiUrl, options);
    const data =  await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "ila kaftan!";

    jokeEl.innerText = data[0].joke;

        
    } catch (error) {
        jokeEl.innerText = "Waxaa jira khalad, mar labaad isku day!";
        btnEl.disabled = false;
        btnEl.innerText = "ila kaftan!";

        console.log(error);
        
    }
    
}

btnEl.addEventListener("click", getjoke);