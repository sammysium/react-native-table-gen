export function formatNumber(
  value,
  deicmalsToShow = 2
) {
  const result = parseFloat(value, 10)
    .toFixed(deicmalsToShow)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    .toString();
  return result;
}

export function formatCurrency(
    amount,
    currencySymbol,
    currencyPosition = 'front',
    deicmalsToShow = 2
  ) {
    /*
      Format the given monetary amount into friendly display
  
      @returns string. If error, the amount is re-sent back as is.
  
      */
    let negative = false;
    let givenValue = amount;
    if (amount < 0) {
      negative = true;
      givenValue = Math.abs(amount);
    }
  
    if (currencySymbol === undefined) {
      return '';
    }
    const placeSymbolIn =
      currencyPosition !== 'front' && currencyPosition !== 'back'
        ? 'front'
        : currencyPosition;
  
    const sign = negative ? '-' : '';
    const result = formatNumber(givenValue, deicmalsToShow)
  
    if (placeSymbolIn === 'front') {
      return `${sign}${currencySymbol} ${result}`;
    }
    return `${sign}${result} ${currencySymbol}`;
  }