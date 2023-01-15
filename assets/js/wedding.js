param = window.location.search.replace("?inv=","");
wInfo = JSON.parse(atob(param));

let fecha = document.getElementById("fecha");
    fecha.innerText = wInfo.fecha;
    fecha.setAttribute("href", wInfo.calDate);

document.getElementById("horaMisa").innerText = wInfo.evento[0].hora;
document.getElementById("horaFiesta").innerText = wInfo.evento[1].hora;

document.getElementById("lugarMisa").innerText = wInfo.evento[0].lugar;
document.getElementById("lugarFiesta").innerText = wInfo.evento[1].lugar;

document.getElementById("addressMisa").innerText = wInfo.evento[0].direccion;
document.getElementById("addressFiesta").innerText = wInfo.evento[1].direccion;

document.getElementById("locMisa").setAttribute("href", wInfo.evento[0].maps);
document.getElementById("locFiesta").setAttribute("href", wInfo.evento[1].maps);


