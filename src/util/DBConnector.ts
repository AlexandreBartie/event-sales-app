// import mysql, { Connection } from 'mysql2';

export class DataBaseSettings {
  public host!: string;
  public user!: string;
  public password!: string;
  public database!: string;
  public timezone!: string;
}

export class DataBaseConnector {
  // private connection: Connection;

  private settings: DataBaseSettings;

  constructor(settings: DataBaseSettings) {
    this.settings = settings;
    // this.connection = this.connect();
  }

  // private connect(): Connection {

  //   return mysql.createConnection({
  //     database: this.settings.database,
  //     host: this.settings.host,
  //     user: this.settings.user,
  //     password: this.settings.password,
  //     timezone: this.settings.timezone
  //   });
  // }

  // public execute(sql: string, args = []) {
  //   this.connection.query(sql, args, function (err, results, fields) {
  //     console.log(results); // results contains rows returned by server
  //     console.log(fields); // fields contains extra meta data about results, if available
  //   });
  // }
}

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
