let btn = document.querySelector('#btn');
let jokes = document.querySelector('#jokes');

const  generateJokes = async () => {

  try{
    const setHeader = {
     headers: {
       Accept : "application/json"
     }
    }
 
 
  const res = await fetch('https://icanhazdadjoke.com',setHeader);
   const data = await res.json()
   jokes.innerHTML = data.joke
  }catch(error){
    jokes.innerHTML = error;
    }
 }
 
 generateJokes();
  btn.addEventListener('click',generateJokes);
