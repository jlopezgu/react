import React, {useEffect, useState} from "react"
import DataTable from "react-data-table-component"

const CustomDataTable = ({id, columns}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async (page) => {
      const url = `https://subscriber-backend.herokuapp.com/${id}/?page=${page}`
      fetch(url, {mode: 'cors'})
        .then(res => res.json())
        .then(
          (data) => {
            setIsLoaded(true)
            setItems(data.results)
            setTotalRows(data.count)
          },
          (error) => {
            setIsLoaded(true)
            setError(error)
          }
        )
    }
    fetchData(page)
  }, [page, id])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <DataTable
          columns={columns}
          data={items}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangePage={page => setPage(page)}
          paginationRowsPerPageOptions={[10]}
          paginationComponentOptions={{ noRowsPerPage: true }}
        />
      </div>
    )
  }
}

export default CustomDataTable