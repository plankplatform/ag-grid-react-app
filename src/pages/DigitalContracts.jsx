import React, { useMemo } from "react"
import { useTranslation } from "react-i18next"
import DataGrid from "../components/DataGrid"
import { digitalContractsColumns } from "../columns/digitalContracts"
import { makeDatasource } from "../lib/datasource"
import { useAuth } from "../context/AuthContext"

const DigitalContracts = () => {
  const { t } = useTranslation()
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const { token } = useAuth()

  const colDefs = useMemo(() => digitalContractsColumns(t), [t])

  const defaultColDef = useMemo(() => ({
    flex: 1,
    sortable: true,
    filter: true
  }), [])

  const datasource = useMemo(() => {
    if (!token) return null

    return makeDatasource({
      url: `${baseUrl}/v1/digitalContracts`,
      fieldMap: {
        "customer_data.first_name": "name",
        "customer_data.last_name": "surname",
        "customer_data.company_name": "company_name",
        "contract_data.beneficiary_user": "beneficiary_user",
        "contract_data.salesman": "salesman"
      }
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

export default DigitalContracts
