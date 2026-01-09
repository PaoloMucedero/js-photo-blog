
// INIZIO SELEZIONANDO ELEMENTI DOM SUI QUALI AGIRE
const output = document.getElementsByClassName("row");


// SALVO ENDPOINT DELLA CHIAMATA
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";


// AVENDO SALVATO ENDPOINT IN UNA COSTANTE POSSO UTILIZZARLO NELLA CHIAMATA AXIOS.GET()
axios.get(endpoint)
    .then(response => {
        // DA ESEGUIRE PER SUCCESSO
        const result = response.data;
        console.log(result, response);
        // QUI SOTTO NON METTE NULLA IN PAGINA PERCHE' COSì STO CHIEDENDO DI METTERE IN PAGINA L'ARRAY DI OGGETTI E NON LE PROPRIETà DI OGNI OGGETTO
        output.innerHTML = result.response;
        // DEVO ESTRAPOLARE LE PROPRIETà SCORRENDO L'ARRAY CHE RICEVO

    })
    .catch(error => {
        // INTERCETTA ERRORE
        console.error(error);
        
    })
    .finally(() => {
        // CHIUDI CHIAMATA
        console.log("fatto!");
        
    })