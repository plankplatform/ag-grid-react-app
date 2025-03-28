export const digitalContractsColumns = (t) => [
//   {
//     field: "customer_data.last_name",
//     headerName: t("Cognome"),
//     filter: "agTextColumnFilter",
//     filterParams: { filterOptions: ["equals"], maxNumConditions: 0 },
//   },
//   {
//     field: "customer_data.first_name",
//     headerName: t("Nome"),
//     filter: "agTextColumnFilter",
//     filterParams: { filterOptions: ["equals"], maxNumConditions: 0 },
//   },
  {
    field: "customer_data.company_name",
    headerName: t("Den. Sociale"),
    filter: "agTextColumnFilter",
    filterParams: { filterOptions: ["contains"], maxNumConditions: 0 },
  },
  {
    field: "contract_data.beneficiary_user",
    headerName: t("Utente Beneficiario"),
    filterParams: {
      filterOptions: ["equals", "contains"],
      maxNumConditions: 0,
    },
  },
  {
    field: "contract_data.salesman",
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
    field: "created_at",
    headerName: t("Data Inserimento"),
    filter: false,
  },
];
