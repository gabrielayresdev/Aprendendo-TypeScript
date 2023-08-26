"use strict";
function arredondaPraCima(num) {
    let result;
    result = Math.ceil(Number(num));
    if (typeof num === "string") {
        return "" + result;
    }
    return result;
}
arredondaPraCima("234.5");
arredondaPraCima(423.34);
