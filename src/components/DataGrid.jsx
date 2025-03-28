import React, { useRef, useMemo } from "react"
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react"
import { myTheme } from "../styles/agTheme"

ModuleRegistry.registerModules([AllCommunityModule]);

const DataGrid = ({
  columnDefs,
  defaultColDef,
  datasource,
  pagination = true,
  pageSize = 20,
}) => {
  const gridRef = useRef()

  return (
    <div style={{ height: '800px', width: '100%' }}>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowModelType="infinite"
        pagination={pagination}
        cacheBlockSize={pageSize}
        paginationPageSize={pageSize}
        cacheOverflowSize={2}
        maxBlocksInCache={5}
        datasource={datasource}
        theme={myTheme}
      />
    </div>
  )
}

export default DataGrid
