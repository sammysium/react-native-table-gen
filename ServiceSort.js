class SortService {
    constructor() {
      if (!SortService.instance) {
        SortService.instance = this;
      }
      // Initialize object
      return SortService.instance;
    }
  
    _numberSort = (num1, num2, sortValue) => {
      /*
      given two numbers, sort them out
      sortValue indicates asc or desc. shuts up sonar as well
      */
      if (num1 > num2) return -1 * sortValue;
      return num1 < num2 ? sortValue : 0;
    };
  
    _dateSort = (date1, date2, sortValue) => {
      /*
      date1 and date2 must be date objects
      */
      if (date1 > date2) return -1 * sortValue;
      return date1 < date2 ? sortValue : 0;
    };
  
    _handleSortOptions(fieldName, direction) {
      /*
      A reusable method to process sorting option. Returns a sorting integer
      */
  
      let sortValue = -1; // asc
  
      let mySortColumn = fieldName;
      let myDirection = 'asc';
      if (direction) {
        if (direction !== 'asc') {
          myDirection = 'desc';
        }
      } else {
        // direction not given. do we have a saved option for sorting under the column?
        if (this._sortByColumnName === mySortColumn) {
          myDirection = this._lastSortDirection;
        }
      }
  
  
      if (myDirection === 'desc') {
        sortValue = 1;
      }
      return sortValue;
    }
  
  
    genericDictArraySort(
      arObj,
      fieldName,
      fieldType = 'string',
      direction = undefined
    ) {
      /*
        Sort the given dictionary/object array.
  
        @input arObj: an dictionary array object e.g. [{'a':1}]
        @input fieldName:  the name to sort with e.g.
        @input direction: how to sort it out? default asc. Can be desc
        @input fieldType : default String. The field to sort by's type. Curretnly string or date,
      */
  
      const sortValue = this._handleSortOptions(
        fieldName,
        direction
      );
      let sorted = [];
      const that = this;
      if (fieldType === 'string') {
        sorted = [...arObj].sort((a, b) => {
          if (
            a[fieldName].toLocaleLowerCase() < b[fieldName].toLocaleLowerCase()
          ) {
            return sortValue;
          }
          return -1 * sortValue;
        });
      } else if (fieldType === 'date') {
        sorted = [...arObj].sort((a, b) => {
          const date1 = new Date(a[fieldName]);
          const date2 = new Date(b[fieldName]);
          return that._dateSort(date1, date2, sortValue);
        });
      } else if (fieldType === 'number') {
        sorted = [...arObj].sort((a, b) => {
          const num1 = a[fieldName];
          const num2 = b[fieldName];
          return that._numberSort(num1, num2, sortValue);
        });
      }
  
      return sorted;
    }
  

  }
  const ServiceSort = new SortService();
  export default ServiceSort;
  