document.addEventListener("DOMContentLoaded", function () {
    const submitFormArea = document.getElementById("calculatorArea");
    const submitFormPerimeter = document.getElementById("calculatorPerimeter");
    
    const resetLuas = document.getElementById("resetLuas");
    const resetKeliling = document.getElementById("resetKeliling");

    submitFormArea.addEventListener("submit", function (event) {
        event.preventDefault();
        hitungLuas();
    });

    submitFormPerimeter.addEventListener("submit", function (event) {
        event.preventDefault();
        hitungKeliling();
    });

    resetLuas.addEventListener("click", function (event) {
        event.preventDefault();
        resetFormLuas();
    });

    resetKeliling.addEventListener("click", function (event) {
        event.preventDefault();
        resetFormKeliling();
    });
});

const containerArea = document.getElementById("resultArea");
const containerPerimeter = document.getElementById("resultPerimeter");


function hitungLuas() {
    containerArea.innerHTML = "";

    let panjangSisi = parseFloat(document.getElementById("luas").value);
    
    let luas = panjangSisi * panjangSisi;

    heading = document.createElement("h4");
    heading.innerHTML = "Hasil";

    info = document.createElement("input");
    info.value = `L = ${panjangSisi} x ${panjangSisi}`;
    info.setAttribute("readonly", "true");

    result = document.createElement("input");
    result.value = `L = ${luas}`;
    result.setAttribute("readonly", "true");

    desc = document.createElement("p");
    desc.innerText = `Maka Luas persegi tersebut ${luas}`;

    containerArea.append(heading, info,result, desc);

}
    
function hitungKeliling() {
  containerPerimeter.innerHTML = "";

  let panjangSisi = parseFloat(document.getElementById("keliling").value);

  let keliling = 4 * panjangSisi;

  heading = document.createElement("h4");
  heading.innerHTML = "Hasil";

  info = document.createElement("input");
  info.value = `K = 4 x ${panjangSisi}`;
  info.setAttribute("readonly", "true");

  result = document.createElement("input");
  result.value = `K = ${keliling}`;
  result.setAttribute("readonly", "true");

  desc = document.createElement("p");
  desc.innerText = `Maka Keliling persegi tersebut ${keliling}`;

  containerPerimeter.append(heading, info, result, desc);
}

function resetFormLuas() {
    document.getElementById("luas").value = "";

    containerArea.innerHTML = "";
}
function resetFormKeliling() {
    document.getElementById("keliling").value = "";

    containerArea.innerHTML = "";
}