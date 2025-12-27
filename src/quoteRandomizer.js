export default async function fetchQuote(){
    try {
        const response = await fetch(`https://dummyjson.com/quotes/random`);
        if (!response.ok){
            throw new Error("Can't fetch");
        }
        const data = await response.json();
        const quoteP = document.querySelector(".quote-p");
        quoteP.textContent = `"${data.quote}" - ${data.author}`;
    }catch (e){
        console.error(e);
    }
}