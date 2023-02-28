import { MainForm } from '../../forms/MainForm/MainForm';

export interface iMenuBarPanel {
  name: string;
  enabled?: boolean;
}

export class SalesListPanel {
  readonly main: MainForm;

  readonly listTopics: iMenuBarPanel[] = [
    { name: 'MODEL' },
    { name: 'DESIGN', enabled: true },
    { name: 'MOVE' },
    { name: 'REPORT' }
  ];

  constructor(main: MainForm) {
    this.main = main;
  }
}
