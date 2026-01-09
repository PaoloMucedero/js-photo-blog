
// INIZIO SELEZIONANDO ELEMENTI DOM SUI QUALI AGIRE
const output = document.querySelector(".row");
const click = document.querySelector("click");


// SALVO ENDPOINT DELLA CHIAMATA
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";


// AVENDO SALVATO ENDPOINT IN UNA COSTANTE POSSO UTILIZZARLO NELLA CHIAMATA AXIOS.GET()
axios.get(endpoint)
    .then(response => {
        // DA ESEGUIRE PER SUCCESSO
        const result = response.data;
        // SALVO INDEX DEL CICLO IN UNA VARIABILE INTERNA VUOTA COSì DA POTERLO RIUSARE FINO AD ESAURIMENTO DATI
        let cardOutput = ""
        /*console.log(result, response);*/
        // QUI SOTTO NON METTE NULLA IN PAGINA PERCHE' COSì STO CHIEDENDO DI METTERE IN PAGINA L'ARRAY DI OGGETTI E NON LE PROPRIETà DI OGNI OGGETTO
        /* output.innerHTML = result.response; */
        // DEVO ESTRAPOLARE LE PROPRIETà SCORRENDO L'ARRAY CHE RICEVO
        // METODO .forEach
        result.forEach((element) => {
            //console.log(element);
            cardOutput += `
                <div class="col-lg-4">
                    <div class="box">
                        <img class="color-pin" src="./img/pin.svg" alt="pin">
                        <img class="card-img" src="${element.url}" alt="img-example-1">
                        <p class="flex-center">${element.title}, ${element.date}</p>
                    </div>
                </div>
            `
        });
        // METODO ciclo for (stampa solo in console per verifica funzionamento)
        for (let index = 0; index < result.length; index++) {
            const element = result[index];
            console.log(element);
        }

        // A QUESTO PUNTO cardOutput SI E' RIEMPITO DI TUTTI I DATI ARRIVATI CON LA CHIAMATA E LO POSSO INSERIRE IN PAGINA CON L'ELEMENTO DOM SELEZIONATO ALL'INIZIO
        output.innerHTML = cardOutput
    })
    .catch(error => {
        // INTERCETTA ERRORE
        console.error(error);
        
    })
    .finally(() => {
        // CHIUDI CHIAMATA
        console.log("fatto!");
        
    })

