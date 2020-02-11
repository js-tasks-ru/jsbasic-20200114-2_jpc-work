/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
//function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  //this.el = document.createElement('table');

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
//  this.sort = (column, desc = false) => {};
//}

class SortableTable {
  constructor(items)
  {
    this.el = document.createElement('table');        
    this.items = items;
    const headerTemplate = `<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead>`;
    this.el.insertAdjacentHTML('afterbegin',headerTemplate);
    const bodyTemplate = `<tbody></tbody>`;
    this.el.insertAdjacentHTML('beforeend',bodyTemplate);
    this.colHeaders = ['name', 'age', 'salary', 'city'];
    this.render();
  }

  render(desc = false)
  {
    const tableBody = this.el.querySelector("tbody");
    const place = desc ? 'afterbegin' : 'beforeend'; 

    tableBody.innerHTML = "";
    for(const item of this.items)
    {
      const template = `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td></tr>`;
      tableBody.insertAdjacentHTML(place ,template);
    }
  }

  sort(column, desc = false)
  {
    
    this.sortColumn = column;

    this.items.sort((a,b) => {
        const index = this.colHeaders[this.sortColumn];
        let result = a[index] - b[index];
        if(!isNaN(result))
          return result;

        if(a[index] > b[index])
          return 1;

        if(a[index] == b[index])
          return 0;

        return -1;
    });

    this.render(desc);
  }

}
