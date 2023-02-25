import { formatCurrency, formatNumber } from './helperFunctions';
  
  describe('lib: Helper Functions', () => {
    describe('currency Formater', () => {
      it('should format currency', () => {
        const amounts = [
          {
            amount: 1000,
            currencyPosition: 'front',
            currency: 'RWF',
            expected: 'RWF 1,000.00',
            deicmalsToShow: 2
          },
          {
            amount: 1000,
            currencyPosition: 'back',
            currency: 'RWF',
            expected: '1,000.00 RWF',
            deicmalsToShow: 2
          },
          {
            amount: 10,
            currencyPosition: 'back',
            currency: 'KSH',
            expected: '10.00 KSH',
            deicmalsToShow: 2
          },
          {
            amount: 1935.9987,
            currencyPosition: 'front',
            currency: 'UGS',
            expected: 'UGS 1,935.999',
            deicmalsToShow: 3
          },
          {
            amount: 1935.9987,
            currencyPosition: 'front',
            currency: 'UGS',
            expected: 'UGS 1,935.9987',
            deicmalsToShow: 4
          }
        ];
  
        amounts.forEach((amount) => {
          const result = formatCurrency(
            amount.amount,
            amount.currency,
            amount.currencyPosition,
            amount.deicmalsToShow
          );
          expect(result).toStrictEqual(amount.expected);
        });
      });
  
      it('returns blank if current symbol not supplied', () => {
        const result = formatCurrency('98.00.34');
        expect(result).toEqual('');
      });
  
      it('defaults to front if currency position is invalid', () => {
        const result = formatCurrency(1000, 'RWF', 'center', 2);
        expect(result).toStrictEqual('RWF 1,000.00');
      });
  
      it('should return negative sign for negative number', () => {
        const result = formatCurrency(-1000, 'RWF', 'center', 2);
        expect(result).toStrictEqual('-RWF 1,000.00');
      });
    });
  
    describe('number Formater', () => {
      it('should format number', () => {
        
        const num1 = formatNumber(99, 0)
        expect(num1).toEqual(num1)

        const num2 = formatNumber(99, 2)
        expect(num2).toEqual("99.00")

        const num3 = formatNumber(100.45, 2)
        expect(num3).toEqual("100.45")
      });
  
    
    });
  
  });
  