import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { SalesListPanel } from './SalesListPanel';

import './SalesListPanel.css';

export type SalesListPanelPropTypes = { ux: SalesListPanel };

export default function SalesListPanelUX({
  ux
}: SalesListPanelPropTypes): JSX.Element {

  return (
    <div className="SalesListPanel">
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={ux.getRows()}
          columns={ux.getColumns()}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}
