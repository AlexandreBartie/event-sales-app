import { mmoApp } from '../../../business/ESM-App/ESM-Project';

import { SalesListPanel } from '../../panels/SalesListPanel/SalesListPanel';

export class MainForm {
  readonly app: mmoApp;

  readonly salesList: SalesListPanel;

  readonly actions: MainFormActions;

  constructor(app: mmoApp) {
    this.app = app;

    this.salesList = new SalesListPanel(this);

    this.actions = new MainFormActions(this);
  }
}

export class MainFormActions {
  private main: MainForm;

  constructor(main: MainForm) {
    this.main = main;
  }

  // async onSiteDefault(): Promise<boolean> {
  //   return await this.main.tabView.select.setDefault();
  // }

  // onSiteSelected(site: string) {
  //   this.main.tabView.refresh(site);
  // }

  // onNodeSelected(item: mmoTreeNode) {
  //   this.main.edition.setItem(item);
  //   this.main.tabPath.setItem(item);
  // }
}
