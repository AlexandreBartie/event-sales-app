import { myApp } from "../../application/myApp";

import { SalesListPanel } from "../../components/SalesListPanel/SalesListPanel";

export class MainForm {
  readonly app: myApp;

  readonly salesList: SalesListPanel;

  readonly actions: MainFormActions;

  constructor(app: myApp) {
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
