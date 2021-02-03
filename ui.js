// seçilen para birimine göre sonuç kısmındaki para birimi yazılarının değişmesini istiyorum
// sonuç kısmınında anlık olarak değişmesini istiyorum

class UI {
    constructor(firstSelect,secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        // Sonuç kısmındaki para birimleri ve sonuç;
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");

    }

    changeFirst(){
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;

    }

    changeSecond(){
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
        
    }

    displayResult(result){
        this.outputResult.value = result;
    }
}