const condition = true;

while(condition == true){

    const nama = prompt("Masukkan nama:");
    const umur = prompt("Masukkan umur:"); 

    if (umur >= 13){
        const studio = prompt("Pilih studio: \nA. Studio A \nB. Studio B \nC. Studio C");
    
        if (studio === "A"){
            alert("Harga tiket: Rp 50.000");
        } else if (studio === "B"){
            alert("Harga tiket: Rp 35.000");
        } else if (studio === "C"){
            alert("Harga tiket: Rp 25.000");
        } else {
            alert("Pilihan studio tidak tersedia");
        }
    } else {
        alert("Mohon maaf usia minimal masuk studio 13 tahun \nAnda belum cukup umur untuk menonton pertunjukan");
    }

}


