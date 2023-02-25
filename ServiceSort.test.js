import ServiceSort from './ServiceSort';


describe('service : Sort', () => {
  describe('generic Sort', () => {
    const data = [
      { startDate: '2019-08-01', value: 199, name: 'Edgewire' },
      { startDate: '2019-10-07', value: 362, name: 'Skidoo' },
      { startDate: '2020-03-02', value: 512, name: 'Edgetag' },
      { startDate: '2019-06-26', value: 246, name: 'Vidoo' },
      { startDate: '2019-11-08', value: 527, name: 'Quatz' }
    ];

    it('should sort by date - asc', () => {
      const d = ServiceSort.genericDictArraySort(data, 'startDate', 'date');
      expect(d[0].name).toStrictEqual('Vidoo');
      expect(d[1].name).toStrictEqual('Edgewire');
      expect(d[2].name).toStrictEqual('Skidoo');
      expect(d[3].name).toStrictEqual('Quatz');
      expect(d[4].name).toStrictEqual('Edgetag');
    });

    it('should sort by date - desc', () => {
      const d = ServiceSort.genericDictArraySort(
        data,
        'startDate',
        'date',
        'desc'
      );
      expect(d[0].name).toStrictEqual('Edgetag');
      expect(d[1].name).toStrictEqual('Quatz');
      expect(d[2].name).toStrictEqual('Skidoo');
      expect(d[3].name).toStrictEqual('Edgewire');
      expect(d[4].name).toStrictEqual('Vidoo');
    });

    it('should sort by string - asc', () => {
      const d = ServiceSort.genericDictArraySort(data, 'name', 'string');
      expect(d[0].name).toStrictEqual('Edgetag');
      expect(d[1].name).toStrictEqual('Edgewire');
      expect(d[2].name).toStrictEqual('Quatz');
      expect(d[3].name).toStrictEqual('Skidoo');
      expect(d[4].name).toStrictEqual('Vidoo');
    });

    it('should sort by string - desc', () => {
      const d = ServiceSort.genericDictArraySort(
        data,
        'name',
        'string',
        'desc'
      );
      expect(d[4].name).toStrictEqual('Edgetag');
      expect(d[3].name).toStrictEqual('Edgewire');
      expect(d[2].name).toStrictEqual('Quatz');
      expect(d[1].name).toStrictEqual('Skidoo');
      expect(d[0].name).toStrictEqual('Vidoo');
    });

    it('should sort by number - asc', () => {
      const d = ServiceSort.genericDictArraySort(data, 'value', 'number');
      expect(d[0].name).toStrictEqual('Edgewire');
      expect(d[1].name).toStrictEqual('Vidoo');
      expect(d[2].name).toStrictEqual('Skidoo');
      expect(d[3].name).toStrictEqual('Edgetag');
      expect(d[4].name).toStrictEqual('Quatz');
    });

    it('should sort by number - desc', () => {
      const d = ServiceSort.genericDictArraySort(
        data,
        'value',
        'number',
        'desc'
      );
      expect(d[4].name).toStrictEqual('Edgewire');
      expect(d[3].name).toStrictEqual('Vidoo');
      expect(d[2].name).toStrictEqual('Skidoo');
      expect(d[1].name).toStrictEqual('Edgetag');
      expect(d[0].name).toStrictEqual('Quatz');
    });

    it('should tag column by its alias - asc', () => {
      const d = ServiceSort.genericDictArraySort(
        data,
        'value',
        'number',
        'desc'
      );
      expect(d[4].name).toStrictEqual('Edgewire');
      expect(d[3].name).toStrictEqual('Vidoo');
      expect(d[2].name).toStrictEqual('Skidoo');
      expect(d[1].name).toStrictEqual('Edgetag');
      expect(d[0].name).toStrictEqual('Quatz');
    });


  });  
});
