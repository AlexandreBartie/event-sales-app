import { myApp } from './myProject';

import { DataBaseSettings } from '../../util/DBConnector';

import 'dotenv/config'

export class mySettings {
  private app: myApp;

  readonly DB = new myDBSettings();

  constructor(app: myApp) {
    this.app = app;
  }
}

export class myDBSettings extends DataBaseSettings {
  constructor() {
    super(
      process.env.MYSQL_DATABASE ?? '',
      process.env.MYSQL_HOST ?? '',
      process.env.MYSQL_USER ?? '',
      process.env.MYSQL_PASSWORD ?? ''
    );
  }

}
