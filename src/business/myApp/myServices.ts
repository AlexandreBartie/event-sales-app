import { DataBaseConnector } from '../../util/DBConnector';
import { myApp } from './myProject';

export class myServices {
  readonly DB: DataBaseConnector;

  constructor(app: myApp) {
    this.DB = new DataBaseConnector(app.settings.DB);
  }


}
