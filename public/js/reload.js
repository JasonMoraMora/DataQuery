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
    xhttp.open("POST", "updateDoc", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('items='+myJSON);
}

function DeleteDoc(){
    var NDoc = parseInt(document.getElementById('DeltxtNDoc').value);        
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {        
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("app-web").innerHTML = this.responseText;            
        }
    };
    xhttp.open("POST", "deteteDoc", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('NDoc='+NDoc);
}

//LOAD FORM ( UPDATE & DELETE )
function loadDocToUpd() {
    var NDoc = parseInt(document.getElementById('UpdtxtNDoc').value);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var MyObj = JSON.parse(this.responseText);
            document.getElementById('UpdtxtNom').value = MyObj.nombre;
            document.getElementById('UpdtxtApe') .value = MyObj.apellido;
            document.getElementById('UpdtxtEdad').value = MyObj.edad;
            document.getElementById('UpdtxtPais').value = MyObj.pais;
            document.getElementById('UpdtxtTel').value = MyObj.telefono;            
        }
    };
    xhttp.open("POST", "SearchDocToUpd", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("NDoc=" + NDoc);
}

function loadDocToDel() {
    var NDoc = parseInt(document.getElementById('DeltxtNDoc').value);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var MyObj = JSON.parse(this.responseText);
            document.getElementById('DeltxtNom').value = MyObj.nombre;
            document.getElementById('DeltxtApe') .value = MyObj.apellido;
            document.getElementById('DeltxtEdad').value = MyObj.edad;
            document.getElementById('DeltxtPais').value = MyObj.pais;
            document.getElementById('DeltxtTel').value = MyObj.telefono;            
        }
    };
    xhttp.open("POST", "SearchDocToDel", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("NDoc=" + NDoc);
}