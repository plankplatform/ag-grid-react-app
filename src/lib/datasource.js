import axios from "./axios.js"

export const makeDatasource = ({ url, fieldMap }) => ({
  getRows: async (params) => {
    const { startRow, endRow, sortModel, filterModel } = params
    const limit = endRow - startRow
    const offset = startRow

    const sort = sortModel
      .map(s => `${fieldMap[s.colId] || s.colId}:${s.sort}`)
      .join(",")

    const filter = Object.entries(filterModel)
      .map(([field, conf]) => {
        const realField = fieldMap[field] || field
        const value = encodeURIComponent(conf.type === "contains" ? `~${conf.filter}` : conf.filter)
        return `filter[${realField}]=${value}`
      })
      .join("&")

    const fullUrl = `${url}?offset=${offset}&limit=${limit}` +
                    (sort ? `&sort=${sort}` : "") +
                    (filter ? `&${filter}` : "")

    try {
      const res = await axios.get(fullUrl)
      const rows = res.data.rows || []
      const lastRow = res.data.lastRow ?? rows.length
      params.successCallback(rows, lastRow)
    } catch (err) {
      console.error("Errore fetch dati:", err.response?.data || err.message)
      params.failCallback()
    }
  }
})
