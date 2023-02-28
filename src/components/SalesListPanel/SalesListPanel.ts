import { MainForm } from '../../forms/MainForm/MainForm';

import mysql from 'mysql2';

export interface iMenuBarPanel {
  name: string;
  enabled?: boolean;
}

export class SalesListPanel {
  readonly main: MainForm;

  constructor(main: MainForm) {
    this.main = main;
  }

  getColumns() {
    return [
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true
      },
      {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true
      },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160
      }
    ];
  }

  getRows() {
    return [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
    ];
  }
}

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

connection.query('SELECT * FROM Customer', (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(results);
});

connection.end();
