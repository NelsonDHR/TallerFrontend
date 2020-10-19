console.log('holaaa');

var formulario = document.getElementById('contact');

document.getElementById('contact-delete').addEventListener('click', function (a) {
  a.preventDefault();
  console.log('me diste un clickkk');
  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');
 
  let myHeaders = new Headers();
 
  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }
 
  fetch('/basedatos/borrarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
 
});

document.getElementById('contact-submit').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/insertarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    }); 
});
 
document.getElementById('contact-update').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/actualizarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    }); 
});

document.getElementById('contact-patients').addEventListener('click', function (e) {

  e.preventDefault();
  console.log('me diste un click');

  let myHeaders = new Headers();

  const options = {
    method: 'GET',
    headers: myHeaders,
  }

  
  fetch('/basedatos/consultatotalpacientes',options)
    .then((res) => res.json())
    .then((data) => { 
      setText(data);  
      console.log(data);
  
    });
  });

  function setText(data){
 
    var newHtml = document.getElementById("contact");
 
    var d = "<table><tr>";
    
    for(key in data[0])
    {
      d +='<td>' + key + '</td>';
    }
    d +="</tr>";
 
    for(var i = 0;i<data.length; i++)
    {
      d +='<tr>';
      for(key in data[i])
      {
        d +='<td>' + data[i][key] + '</td>';
      }
      d +='</tr>';
    }

    d +="</table>";
    newHtml.innerHTML=d;
 
    console.log(d);
  }








