function arredondaPraCima(num: number): number;
function arredondaPraCima(num: string): string;
function arredondaPraCima(num: number | string) {
  let result: number | string;
  result = Math.ceil(Number(num));
  if (typeof num === "string") {
    return "" + result;
  }
  return result;
}

arredondaPraCima("234.5");
arredondaPraCima(423.34);
