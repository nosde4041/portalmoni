var indiceImagem = 0;

function alteraImg () {
    var imagem = ["images/central.png", "images/central2.png", "images/central3.png"];
    document.getElementById("imgCentral").src=imagem[indiceImagem];
    indiceImagem++;
    if (indiceImagem > 2) {
        indiceImagem = 0;
    }
    console.log(indiceImagem);
}

setInterval(alteraImg, 5000);