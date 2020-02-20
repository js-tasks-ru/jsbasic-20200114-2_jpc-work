/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.el.classList.add("pure-table");
    const headerTemplate = `<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td><td></td></tr></thead>`;
    this.el.insertAdjacentHTML('afterbegin',headerTemplate);
    const bodyTemplate = `<tbody></tbody>`;
    this.el.insertAdjacentHTML('beforeend',bodyTemplate);
    this.render();
    this.el.onclick = this.onClickTable.bind(this);
  }

  render(desc = false)
  {
    const tableBody = this.el.querySelector("tbody");
    const place = desc ? 'afterbegin' : 'beforeend'; 

    tableBody.innerHTML = "";
    for(const item of this.data)
    {
      const template = `<tr data-id="${item.id}"><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><a href="#delete">X</a></td></tr>`;
      tableBody.insertAdjacentHTML(place ,template);
    }
  }  

  onClickTable(event)
  {
    let a = event.target.closest("a");
    if(!a)
      return;
    if(!this.el.contains(a))
      return;

    if(a.href.indexOf("#delete") == -1)
      return;

    let row = a.closest("tr");

    if(!row)
      return;

    let id = row.dataset.id;

    row.remove();
    this.onRemoved(+id);
  }

  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {}
}

window.ClearedTable = ClearedTable;
