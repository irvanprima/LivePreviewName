function pasSubmit(jarno){
    jarno.preventDefault()
}

function ubahNama(){
    let asu = document.getElementById("inputan").value
    console.log(asu)

    let celeng = document.getElementById("nama")
    celeng.innerHTML = asu
    // inputan.value = "";
}
let hapus2 = document.getElementById("nama")

function hapusNama(){
    hapus2.innerHTML = "";
    inputan.value = "";
}