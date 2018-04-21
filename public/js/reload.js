//CRUD
function CreateDoc(){
    var items = {
        ndocumento: parseInt(document.getElementById('SavetxtNDoc').value),
        nombre: document.getElementById('SavetxtNom').value,
        apellido: document.getElementById('SavetxtApe').value,
        edad: parseInt(document.getElementById('SavetxtEdad').value),
        pais: document.getElementById('SavetxtPais').value,
        telefono: parseInt(document.getElementById('SavetxtTel').value)
    };
    var myJSON = JSON.stringify(items)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {        
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("app-web").innerHTML = this.responseText;            
        }
    };
    xhttp.open("POST", "createDoc", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('items='+myJSON);
}

function UpdateDoc(){
    var items = {
        ndocumento: parseInt(document.getElementById('UpdtxtNDoc').value),
        nombre: document.getElementById('UpdtxtNom').value,
        apellido: document.getElementById('UpdtxtApe').value,
        edad: parseInt(document.getElementById('UpdtxtEdad').value),
        pais: document.getElementById('UpdtxtPais').value,
        telefono: parseInt(document.getElementById('UpdtxtTel').value)
    };
    var myJSON = JSON.stringify(items)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {        
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("app-web").innerHTML = this.responseText;            
        }
    };
    xhttp.open("POST", "createDoc", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('items='+myJSON);
}

//LOAD FORM ( UPDATE & DELETE )
function loadDocToUpd() {
    var NDoc = document.getElementById('UpdtxtNDoc').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById('txtNomToUpd').value = obj.nombre;
            document.getElementById('txtApeToUpd').value = obj.apellido;
            document.getElementById('txtEdadToUpd').value = obj.edad;
            document.getElementById('txtDirToUpd').value = obj.direccion;
            document.getElementById('txtTelToUpd').value = obj.telefono;
            document.getElementById('txtCelToUpd').value = obj.celular;
            document.getElementById('txtHobToUpd').value = obj.hoobie;
        }
    };
    xhttp.open("POST", "DocToUpd", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("NDoc=" + NDoc);
}

function loadDocToDel() {
    var NDoc = document.getElementById('findNDocToDel').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById('txtNomToDel').value = obj.nombre;
            document.getElementById('txtApeToDel').value = obj.apellido;
            document.getElementById('txtEdadToDel').value = obj.edad;
            document.getElementById('txtDirToDel').value = obj.direccion;
            document.getElementById('txtTelToDel').value = obj.telefono;
            document.getElementById('txtCelToDel').value = obj.celular;
            document.getElementById('txtHobToDel').value = obj.hoobie;
        }
    };
    xhttp.open("POST", "DocToDel", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("NDoc=" + NDoc);
}
