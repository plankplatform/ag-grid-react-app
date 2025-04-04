import React, { useMemo } from "react"
import { useTranslation } from "react-i18next"
import DataGrid from "../components/DataGrid"
import { invoicesColumns } from "../columns/invoices"
import { makeDatasource } from "../lib/datasource"
import { useAuth } from "../context/AuthContext"

const Invoices = () => {
  const { t } = useTranslation()
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const { token } = useAuth()

  const colDefs = useMemo(() => invoicesColumns(t), [t])

  const defaultColDef = useMemo(() => ({
    flex: 1,
    sortable: true,
    filter: true
  }), [])

  const datasource = useMemo(() => {
    if (!token) return null

    return makeDatasource({
      url: `${baseUrl}/v1/invoices`
    })
  }, [baseUrl, token])

  if (!token) {
    return <p style={{ padding: "1rem" }}>Effettua il login per vedere i dati.</p>
  }

  return (
    <DataGrid
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
      datasource={datasource}
    />
  )
}

export default Invoices
