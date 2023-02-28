import { DataBaseConnector } from '../../util/libDBConnector';
import { mmoApp } from './ESM-Project';

export class mmoServices {
  readonly DB: DataBaseConnector;

  constructor(app: mmoApp) {
    this.DB = new DataBaseConnector();
  }
}
