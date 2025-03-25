import React, { useRef, useMemo } from "react"
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

import i18n from "i18next"
import { useTranslation, initReactI18next } from "react-i18next"
import it from "./locales/it.json"

ModuleRegistry.registerModules([AllCommunityModule]);

i18n
  .use(initReactI18next)
  .init({
    lng: "it",
    fallbackLng: "it",
    resources: { it: { translation: it } }
  })

const App = () => {
  const { t } = useTranslation()
  const gridRef = useRef()

  const colDefs = useMemo(() => [
    { field: "idcontrattodigitale", headerName: t("columns.idcontrattodigitale"), filter: false, sortable: false },
    { 
      field: "nome", 
      headerName: t("columns.name"),
      filter: 'agTextColumnFilter',
      filterParams: {
        filterOptions: ['equals'],
        maxNumConditions: 0
      },
    },
    { 
      field: "cognome", 
      headerName: "Cognome",
      filter: 'agTextColumnFilter',
      filterParams: {
        filterOptions: ['equals'],
        maxNumConditions: 0
      },
    },
    { 
      field: "codfiscale", 
      headerName: "Codice Fiscale",
      filter: false,
      sortable: false
    },
    { field: "datainserimento", headerName: "Data Inserimento", filter: false, sortable: false },
    { field: "statolavorazione", headerName: "Stato Lavorazione", filter: false, sortable: false },
    { field: "tipologiacliente", headerName: "Tipo Cliente", filter: false, sortable: false },
    { field: "referenteamm_email", headerName: "Email Referente", filter: false, sortable: false },
    { field: "referenteamm_cell", headerName: "Cell Referente", filter: false, sortable: false }
  ], [])

  const defaultColDef = useMemo(() => ({
    flex: 1,
    sortable: true,
    filter: true
  }), [])

  const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BsYW5rLmdsb2JhbCIsImF1ZCI6Imh0dHBzOi8vYXBpLnBsYW5rLmdsb2JhbCIsImlhdCI6MTc0MjkxNjI2OCwiZXhwIjoxNzQyOTE5ODY4LCJkYXRhIjp7InVzZXJpZCI6ImFkbWluZGVtbyIsImdydXBwbyI6ImFkbWluIiwiZ2VyYXJjaGlhIjpudWxsLCJwYXJ0aWNlbGxhYXppZW5kYSI6IkRFTU8iLCJwZXJtaXNzaW9ucyI6IltcImFwcHJvdnZpZ2lvbmFtZW50b1wiLCBcImNvbnRyYXR0aVwiLCBcInJhdGVzXCIsIFwiY2xpZW50aVwiLCBcIm1hc3RlcmRhdGFcIiwgXCJ0aWNrZXRfYWRkXCIsIFwiZW1haWxcIiwgXCJ0b29sc1wiLCBcInNjaGVkdWxlclwiLCBcIm1hc3NpdmVpbXBvcnRcIiwgXCJtb3Jvc2l0YVwiLCBcInNvY2lhbG5ldHdvcmtcIiwgXCJjb250cm9sbG9nZXN0aW9uZVwiLCBcImhyX3JlYWRcIiwgXCJ0aWNrZXRcIiwgXCJlc3Bsb3Npb25lXCIsIFwiY3JlZGl0Y2hlY2tcIiwgXCJpbnN0YW50Y2FsbFwiLCBcIndlbGNvbWVsZXR0ZXJcIiwgXCJjb250cmF0dGlkaWdpdGFsaVwiLCBcImdlc3Rpb25lcGVybWVzc2lib1wiLCBcImdlc3Rpb25lc2FsZXNcIiwgXCJzd2l0Y2hpbmdcIiwgXCJyaWFzc2VnbmF6aW9uaVwiLCBcInJpcHJpc3Rpbm9wcmVjZWRlbnRpXCIsIFwic21zXCIsIFwiY29tdW5pY2F6aW9uaV9sZXR0dXJhXCIsIFwiY29tdW5pY2F6aW9uaV9zY3JpdHR1cmFcIiwgXCJnZXN0aW9uZWhlbHBcIiwgXCJub3RpZmljaGVnZW5lcmljaGVcIiwgXCJnZXN0aW9uZWNyZWRpdGlcIiwgXCJjb250YWJpbGl0YVwiLCBcImNhbGxjZW50ZXJcIiwgXCJjYWxsY2VudGVyX3N1cGVydmlzb3JcIiwgXCJjYWxsY2VudGVyX3F1YWxpdHljb250cm9sXCIsIFwidGlja2V0X2hlbHBwbGFua1wiLCBcImFsbHRpY2tldHNcIiwgXCJyZXBvcnRfc2FsZXNcIiwgXCJyZXBvc2l0b3J5XCIsIFwibG9zdGFjY291bnRzXCIsIFwiY2FsbGNlbnRlcl9tYXN0ZXJcIiwgXCJhbGxjdXN0b21lcl9tYXN0ZXJsaXN0XCIsIFwiZW1haWxfc2V0dXBcIiwgXCJzd2l0Y2hfbGV0dHVyYVwiLCBcIm1hbmFnZXJhZ2VuZGVcIiwgXCJocl9tYXN0ZXJcIiwgXCJ0aWNrZXRfZGVsZXRlXCIsIFwicmVwb3NpdG9yeV9tYXN0ZXJcIiwgXCJvYnNlcnZlclwiLCBcImN1c3RvbWVyc2FyZWFcIiwgXCJsZWFkc19yZWFkXCIsIFwibGVhZHNfd3JpdGVcIiwgXCJjaGVja2xpc3RcIiwgXCJzZWVhbGx1c2Vyc1wiLCBcIndpdGhkcmF3X3dhbGxldFwiLCBcImNhX2F0dGl2YW9ubGluZVwiLCBcImNhX2NhbWJpYW1ldG9kb3BhZ2FtZW50b1wiLCBcImNhbGxjZW50ZXJfcmVjb3JkaW5nXCIsIFwiZmVlXCIsIFwiY2FfY3JlYXRlcG9zdFwiLCBcImNhX3dhbGxldF9lc3RyYXR0b2NvbnRvXCIsIFwiY2Ffd2FsbGV0X3V0aWxpdHlcIiwgXCJjYV93YWxsZXRfcmllcGlsb2dvZW50cmF0ZVwiLCBcImNhX2ZlZVwiLCBcImNhX2luc2VyaXNjaV9hdXRvbGV0dHVyYVwiLCBcImNhX3N2dW90YXdhbGxldFwiLCBcImNhX2NoYXRcIiwgXCJ3aGF0c2FwcF9hY2Nlc3NcIiwgXCJjb250cmF0dGlkaWdpdGFsaV9ncmFwaF9zaWduXCIsIFwiY29udHJhdHRpZGlnaXRhbGlfc21zX3NpZ25cIiwgXCJzbWFydGNvbGxlY3RvclwiLCBcIndoYXRzYXBwX2VkaXRcIiwgXCJ3aGF0c2FwcF9hc3NpZ25cIiwgXCJjYWxsY2VudGVyX3JlcG9ydF9zdXBlcnZpc29yXCIsIFwiY2FsbGNlbnRlcl90dXJib19sb2djYWxsXCIsIFwiYWxsdGlja2V0X2hlbHBwbGFua1wiLCBcImhyX2hpcmluZ1wiLCBcInN5c19pbnZlbnRvcnlcIiwgXCJzeXNfZG93bmxvYWRfc2VjdXJpdHlcIiwgXCJzeXNfZ2xvYmFsX2F1ZGl0XCIsIFwic3lzX2RpYWdyYW1zXCIsIFwic3lzX3ByZWFjY2Vzc19zZWN1cml0eVwiLCBcInByaWNpbmdfdXBcIiwgXCJzeXNfYWNjZXNzX3NlY3VyaXR5XCIsIFwid2ViaG9va1wiLCBcInNtYXJ0Zm9ybXNfdGVtcGxhdGVzXCIsIFwidHJhbnNjcmlwdGlvbnNcIiwgXCJleHBvcnRfY29udGFiaWxpdGFcIiwgXCJhbGxjb250cmFjdHNcIiwgXCJjYV90aWNrZXRcIiwgXCJmYXR0dXJhemlvbmVcIiwgXCJjYV9yZXdhcmRcIiwgXCJhY2Npc2VcIiwgXCJhZ2dpb3JuYWNvbXBvbmVudGlcIiwgXCJmYXR0dXJlXCIsIFwiZmF0dHVyZV9kZXR0YWdsaV9leHBvcnRcIiwgXCJwcm92dmlnaW9uaWxldHR1cmFcIiwgXCJwcm92dmlnaW9uaXNjcml0dHVyYVwiLCBcInJlcG9ydF9pbnZvaWNlc1wiLCBcInZpc3VhbGl6emFjb21wb25lbnRpXCIsIFwiYXV0b2xldHR1cmVcIiwgXCJmYXR0dXJlX2FjY2Vzc29yaWVcIiwgXCJpbnZvaWNpbmdfdHVyYm9faW52b2ljZXNcIiwgXCJzZXJ2aXppcHVudG9wcmVtaW9cIiwgXCJjb25maW1fZmlsdGVyZWRfaW52b2ljZXNcIiwgXCJkYl90b3RhbF9leHBvcnRcIiwgXCJ0aWNrZXRfY29uZmlndXJlX2dyb3Vwc1wiLCBcIm9yZGluaVwiLCBcImludm9pY2luZ190dXJib19jb250cmFjdHNcIiwgXCJhdXRvbWF0aW9uXCIsIFwic3BsaXRfZmlsZXNcIiwgXCJjb211bmljYXppb25pX2FsbFwiLCBcImNhbGxjZW50ZXJfaW5ib3VuZFwiLCBcImRvY3VtZW50YXRpb25fcGxhbmtfd3JpdGVcIiwgXCJxdW90YXRpb25zXCIsIFwibWVzc2Fpbm1vcmFfdXBkYXRlXCIsIFwic3lzX21vbml0b3JpbmdfdGFza3NcIiwgXCJkaXN0cmlidXRpb25saXN0c1wiLCBcImFsbHF1b3RhdGlvbnNcIl0ifX0.TD33l9X7BEV6t9fXHK4bKkExR33yC0Sp1r2aO8RV3ik';

  const datasource = {
    getRows: (params) => {
      const { startRow, endRow, sortModel, filterModel } = params

      const limit = endRow - startRow
      const offset = startRow
  
      const tempFieldPatch = {
        nome: 'name',
        cognome: 'surname'
      }

      // costruiamo sort=campo:asc,campo2:desc
      const sort = sortModel
        .map(s => {
          const field = tempFieldPatch[s.colId] || s.colId
          return `${field}:${s.sort}`
        })
        .join(',')
  
      // costruiamo filter[campo]=valore
      const filter = Object.entries(filterModel)
        .map(([field, conf]) => {
          const realField = tempFieldPatch[field] || field
          return `filter[${realField}]=${encodeURIComponent(conf.filter)}`
        })
        .join('&')
  
      const url = `https://api-dev.plank.global/v1/digitalContracts?offset=${offset}&limit=${limit}` +
                  (sort ? `&sort=${sort}` : '') +
                  (filter ? `&${filter}` : '')
  
      fetch(url, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          const rows = data.rows || []
          const lastRow = data.lastRow ?? rows.length
          params.successCallback(rows, lastRow)
        })
        .catch(err => {
          console.error("Errore fetch dati:", err)
          params.failCallback()
        })
    }
  }

  return (
    <div className="ag-material" style={{ height: '800px', width: '100%' }}>
      <AgGridReact
        ref={gridRef}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowModelType="infinite"
        pagination={true}
        cacheBlockSize={20}         // righe per blocco
        paginationPageSize={20}     // righe per pagina
        cacheOverflowSize={2}       // precarica 2 blocchi oltre al corrente
        maxBlocksInCache={5}        // massimo 5 blocchi tenuti in cache
        datasource={datasource}
    />
    </div>
  )
}

export default App
