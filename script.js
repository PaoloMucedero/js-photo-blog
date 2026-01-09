const output = document.getElementsByClassName("row");
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(endpoint)
    .then(response => {
        // DA ESEGUIRE PER SUCCESSO
        const result = response.data;
        console.log(result);
        
    })
    .catch(error => {
        // INTERCETTA ERRORE
        console.error(error);
        
    })
    .finally(() => {
        // CHIUDI CHIAMATA
        console.log("fatto!");
        
    })