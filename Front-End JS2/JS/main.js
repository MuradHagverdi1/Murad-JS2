function Mode(){
    let body = document.body
    var background = document.getElementById('first')
    let button = document.getElementById('btn')
    if (confirm("Arxa fonu deyismeyini tesdiq edirsiniz?")) {
        background.style.backgroundColor = 'black'
      } 
      else {
        alert('tesdiqe icaze vermediniz!')
      }

}

function check(){
    var nbr;
    nbr = Number(document.getElementById("age").value);
    if(nbr < 18)
    {
       alert("Get suduvu ic");
    }
    else
    {
       alert("Ugurla daxil oldunuz");
    }
}