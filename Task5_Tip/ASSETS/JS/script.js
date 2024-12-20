function calculated(){
    let bill = Number(document.querySelector("#Bill").value);
    let tip = Number(document.querySelector("#Tip").value);

    let tipAmount = (bill * tip) / 100;
    let totalAmount = bill + tipAmount;
    document.querySelector("#total").innerHTML = `Total: ${totalAmount}`;
}