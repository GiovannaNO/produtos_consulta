window.onload = function(){
    var url = "https://profrodolfo.com.br/projeto/";
    fetch(url)
    .then(resposta => {
	    return resposta.json();
    });
    document.querySelector('#searchButton').addEventListener('click', ()=>{
        var texto = '';
        var d = document.querySelector('.content');
        let inputname = document.querySelector('#searchInputName');
        let inputprice = document.querySelector('#searchInputPrice');
        let content = document.querySelector('#content');
         
        for(let c = 0; c<json.length;c++){
            if(inputname.value == json[c].nome && inputnprice.value == json[c].valor){
                texto += '<div class="row">';
                texto += '<div class="col-4 ">';
                texto += '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/'+json[c].foto+'">';
                texto += '</div>';
                texto += '<div class="col-8">'; 
                texto += '<h1>'+json[c].nome+'</h1>';
                texto += '<h3>R$'+json[c].valor+'</h3>';
                texto += '</div>';
                texto += '</div>';
                d.innerHTML += texto;
            } else if(inputname.value == json[c].nome){
                texto += '<div class="row">';
                texto += '<div class="col-4 ">';
                texto += '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/'+json[c].foto+'">';
                texto += '</div>';
                texto += '<div class="col-8">'; 
                texto += '<h1>'+json[c].nome+'</h1>';
                texto += '<h3>R$'+json[c].valor+'</h3>';
                texto += '</div>';
                texto += '</div>';
            } else if(inputnprice.value == json[c].valor){
                texto += '<div class="row">';
                texto += '<div class="col-4 ">';
                texto += '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/'+json[c].foto+'">';
                texto += '</div>';
                texto += '<div class="col-8">'; 
                texto += '<h1>'+json[c].nome+'</h1>';
                texto += '<h3>R$'+json[c].valor+'</h3>';
                texto += '</div>';
                texto += '</div>';
            }
    }
}