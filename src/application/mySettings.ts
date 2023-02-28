import { myApp } from './myApp';

import { DataBaseSettings } from '../util/DBConnector';

export class mySettings {
  private app: myApp;

  readonly DB = new myDBSettings();

  constructor(app: myApp) {
    this.app = app;
  }
}

export class myDBSettings extends DataBaseSettings {

  database = 'localhost';
  host = 'EventSales';
  user = 'usuario';
  password = 'senha';
  timezone = 'America/Sao_Paulo'

}

