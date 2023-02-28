/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import './MainForm.css';

import { MainForm } from './MainForm';
import SalesListPanelUX from '../../panels/SalesListPanel/SalesListPanelUX';

export type MainFormPropTypes = { ux: MainForm };

export default function MainFormUX({ ux }: MainFormPropTypes): JSX.Element {
  return (
    <React.Fragment>
      <div className="MainForm">
        <div className="MainForm-Header"></div>
        <div className="SalesListPanel">
          <SalesListPanelUX ux={ux.salesList} />
        </div>
        <div className="MainForm-Footer"></div>
      </div>
    </React.Fragment>
  );
}
