function calcu() {
    const carprice = document.getElementById("inprice").value;
    const percent = document.getElementById("indown").value;
    const totalmonth = document.getElementById("inmonth").value;
    const increase = document.getElementById("increase").value;

    const downpayment = (carprice / 100) * percent;
    const carp = (carprice / 100) * 100;
    const remainprice = carprice - downpayment;
    const sumincrese = ((remainprice / 100) * increase) * (totalmonth / 12);
    const sumprice = remainprice + sumincrese;
    const monthpay = sumprice / totalmonth;
    const sumpay = carp + sumincrese;

    if (isNaN(carprice, percent, totalmonth, increase)) {
        alert("ข้อมูลต้องเป็นตัวเลขเท่านั้น")


    } else {
        document.getElementById("show down").innerHTML = thousands_separators(Math.ceil(downpayment));
        document.getElementById("show monthpay").innerHTML = thousands_separators(Math.ceil(monthpay));
        document.getElementById("show sum").innerHTML = thousands_separators(remainprice);
        document.getElementById("show increase").innerHTML = thousands_separators(Math.ceil(sumincrese));
        document.getElementById("show allpay").innerHTML = thousands_separators(Math.ceil(sumpay))
    }


}

function calcu2() {
    const price2 = document.getElementById("inprice2").value;
    const totalmonth2 = document.getElementById("inmonth2").value;
    const increase2 = document.getElementById("increase2").value;
    const prepay = document.getElementById("prepay").value;
    const intidpro = document.getElementById("intidpro").value;
    const intidproMonth = document.getElementById("intidproMonth").value;


    const sumincrese2 = ((price2 / 100) * increase2) * totalmonth2;
    const sumprice2 = parseInt(price2) + sumincrese2;
    const monthpay2 = sumprice2 / totalmonth2;
    const sumpro = intidpro * intidproMonth;
    const sumpaypromonth = monthpay2 + (parseInt(intidpro));
    const sumall = sumprice2 + sumpro;

    const prepaysum = prepay / 10;

    console.log("sumincrese2 is " + sumincrese2, "sumpaymonth is " + sumpaypromonth,
        "sumall is " + sumall,
        "price2A is " + price2,
        "sumprice2 is " + sumprice2);


    if (isNaN(price2, totalmonth2, increase2, prepay, intidpro, intidproMonth)) {
        alert("ข้อมูลต้องเป็นตัวเลขเท่านั้น")
    } else {
        document.getElementById("show monthpay2").innerHTML = thousands_separators(Math.ceil(monthpay2));
        document.getElementById("show increse2").innerHTML = thousands_separators(Math.ceil(sumincrese2));

        if (intidpro > 0 && prepay > 0) {
            document.getElementById("show sum2").innerHTML = thousands_separators(Math.ceil(sumpaypromonth - prepaysum));
        } else if (intidpro > 0 && prepay == 0) {
            document.getElementById("show sum2").innerHTML = thousands_separators(Math.ceil(sumpaypromonth));
        }

        document.getElementById("show sumpro2").innerHTML = thousands_separators(Math.ceil(sumpro));
        document.getElementById("show allpay2").innerHTML = thousands_separators(Math.ceil(sumall));
    }
}

function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}