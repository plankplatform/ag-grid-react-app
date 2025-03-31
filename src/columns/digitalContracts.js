export const digitalContractsColumns = (t) => [
  {
    field: "company_name",
    headerName: t("Den. Sociale"),
    filter: "agTextColumnFilter",
    filterParams: { filterOptions: ["contains"], maxNumConditions: 0 },
  },
  {
    field: "beneficiary_user",
    headerName: t("Utente Beneficiario"),
    filterParams: {
      filterOptions: ["equals", "contains"],
      maxNumConditions: 0,
    },
  },
  {
    field: "salesman",
    headerName: t("Agente"),
    filterParams: {
      filterOptions: ["equals", "contains"],
      maxNumConditions: 0,
    },
  },
  {
    field: "status",
    headerName: t("Stato"),
    filter: false,
  },
  {
    field: "creation_date",
    headerName: t("Data Inserimento"),
    filter: false,
  },
]
