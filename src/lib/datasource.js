import axios from "./axios.js"

const AG_GRID_OPERATOR_MAP = {
  equals: '',
  notEqual: 'ne',
  lessThan: 'lt',
  lessThanOrEqual: 'lte',
  greaterThan: 'gt',
  greaterThanOrEqual: 'gte',
  contains: 'contains',
  notContains: 'not_contains',
  startsWith: 'starts_with',
  endsWith: 'ends_with',
  blank: 'null',
  notBlank: 'not_null'
}

export const makeDatasource = ({ url }) => ({
  getRows: async (params) => {
    const { startRow, endRow, sortModel, filterModel } = params
    const limit = endRow - startRow
    const offset = startRow

    const sort = sortModel
      .map(s => `${s.colId}:${s.sort}`)
      .join(",")

    const filter = Object.entries(filterModel)
      .flatMap(([field, conf]) => {
        const operator = AG_GRID_OPERATOR_MAP[conf.type] ?? ''
        const value = encodeURIComponent(conf.filter ?? true)

        const key = operator
          ? `filter[${field}][${operator}]`
          : `filter[${field}]`

        return [`${key}=${value}`]
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
