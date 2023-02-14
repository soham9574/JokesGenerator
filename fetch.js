
 let btn = document.querySelector('#btn');
 let jokes = document.querySelector('#jokes');
const  generateJokes = () => {
   const setHeader = {
    headers: {
      Accept : "application/json"
    }
   }


  fetch('https://icanhazdadjoke.com',setHeader)
  .then((res)=> res.json() )
  .then((data)=>{
    jokes.innerHTML = data.joke
  }).catch((error)=> {
  console.log(error);
  jokes.innerHTML = error;
  })



}

generateJokes();
 btn.addEventListener('click',generateJokes);