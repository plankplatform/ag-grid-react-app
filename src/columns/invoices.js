export const invoicesColumns = (t) => [
    {
      field: "company_name",
      headerName: t("Den. Sociale"),
      filter: "agTextColumnFilter",
      filterParams: { filterOptions: ["contains"], maxNumConditions: 0 },
    },
    {
      field: "issue_date",
      headerName: t("Data Fattura"),
      filterParams: {
        filterOptions: ["equals", "contains"],
        maxNumConditions: 0,
      },
    },
    {
      field: "invoice_code",
      headerName: t("Codice Fattura"),
      filterParams: {
        filterOptions: ["equals", "contains"],
        maxNumConditions: 0,
      },
    },
    {
      field: "payment_status",
      headerName: t("Stato Pagamento"),
      filter: false,
    }
  ]
  