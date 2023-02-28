import { mmoApp } from './ESM-Project';

export class mmoSettings {
  private app: mmoApp;

  readonly API = new mmoAPISettings();

  constructor(app: mmoApp) {
    this.app = app;
  }
}

export class mmoAPISettings {
  private server = 'http://192.168.1.108:58767';

  private path = '/api/local/mme/';

  timeout = 5;

  get url(): string {
    return this.server + this.path;
  }
}
