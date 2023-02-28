// import mysql, { Connection, Query } from 'mysql2';

export class DataBaseConnector {
//   private connection!: Connection;

//   private host!: string;
//   private user!: string;
//   private password!: string;
//   private database!: string;

//   public connect(): Promise<Connection> {
//     return new Promise<Connection>((resolve, reject) => {
//       this.connection = mysql.createConnection({
//         host: this.host,
//         user: this.user,
//         password: this.password,
//         database: this.database
//       });

//       this.connection.connect((error: any) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(this.connection);
//         }
//       });
//     });
//   }

//   public disconnect(): Promise<void> {
//     return new Promise<void>((resolve, reject) => {
//       if (this.connection) {
//         this.connection.end((error: any) => {
//           if (error) {
//             reject(error);
//           } else {
//             this.connection.destroy();
//             resolve();
//           }
//         });
//       } else {
//         reject(new Error('Connection is not established'));
//       }
//     });
//   }

//   public executeQuery(sql: string, args?: any[]): Promise<any> {
//     return new Promise<any>((resolve, reject) => {
//       if (this.connection) {
//         const query: Query = this.connection.query(
//           sql,
//           args,
//           (error: any, results: any) => {
//             if (error) {
//               reject(error);
//             } else {
//               resolve(results);
//             }
//           }
//         );
//         console.log(`SQL query executed: ${query.sql}`);
//       } else {
//         reject(new Error('Connection is not established'));
//       }
//     });
//   }
}
