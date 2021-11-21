const jokeUrl= "https://icanhazdadjoke.com";
const jokes=document.querySelector(".joke");
const nextButton=document.querySelector(".btn");
const generateJokes=()=>{
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    };
    fetch(jokeUrl, setHeader)
        .then((res) => res.json())
        .then((data) => jokes.innerHTML = data.joke)
        .catch((error) => console.log(error));
}
nextButton.addEventListener('click',generateJokes);