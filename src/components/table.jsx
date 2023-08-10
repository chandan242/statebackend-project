import { useState, useEffect } from "react";
import { BiDetail } from "react-icons/bi";
import "./common.css";

export const DynamicTable = (params) => {
  const data_table = params.data;
  const column = params.sequence;
  const filter_required = params.filter_required || false;

  const [searchField, setSearchField] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [filteredArray, setFilteredArray] = useState(null);
  const [pageMoverRequired, setPageMoverRequired] = useState(false);

  useEffect(() => {
    setFilteredArray([]);
    if (data_table.length > 20) {
      setFilteredArray(
        data_table.slice(0 + pageCount * 20, 20 + pageCount * 20)
      );
      setPageMoverRequired(true);
    } else {
      setFilteredArray(data_table);
      setPageMoverRequired(false);
    }
  }, [data_table, pageCount]);

    useEffect(() => {
        const startIndex = pageCount * 20;
        const endIndex = startIndex + 20;

        if (filter_required && searchField.length >= 10) {
            const filteredData = data_table.filter(item =>
                item["iccid"].includes(searchField)
            ).slice(startIndex, endIndex);
            setFilteredArray(filteredData);
        } else {
            setFilteredArray(data_table.slice(startIndex, endIndex));
        }
    }, [data_table, pageCount, searchField]);

  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>;
    });
  };
  // get table row data
  const tdData = () => {
    if (filteredArray && filteredArray.length > 0) {
      return filteredArray.map((data) => {
        return (
          <tr>
            {column.map((v, index) => {
              return index === 0 ? (
                <td className="">
                  <span>{data[v]}</span>
                  <BiDetail
                    size="1rem"
                    className=""
                    onClick={() => params.onDetailClick(data)}
                  />
                </td>
              ) : (
                <td>{data[v] && data[v].toString()}</td>
              );
            })}
          </tr>
        );
      });
    }
  };

//   const searchESIM = (e) => {
//     if (searchField.length >= 5) {
//       const filteredArraySearched = data_table.filter((item) =>
//         item["iccid"].includes(searchField)
//       );
//       setFilteredArray(filteredArraySearched);
//     }
//   };

  const decrement = (e) => {
    if (pageCount > 0) {
      setPageCount(pageCount - 1);
    }
  };

  const increment = (e) => {
    if (
      pageCount < Math.floor(data_table.length / 20) &&
      Math.floor(data_table.length / 20) > 1
    ) {
      setPageCount(pageCount + 1);
    }
  };

  return (
    <div className="">
      <div className="">
        {filter_required ? (
          <div className="">
            <input
              placeholder="search..."
              className="search-feild"
              type="text"
              value={searchField}
              onChange={(e) => {
                setSearchField(e.target.value);
                params.onSearchChange && params.onSearchChange(e.target.value);
              }}
            />
            {/* <button className="" onClick={(e) => searchESIM(e)}>
              <b>search</b>
            </button> */}
          </div>
        ) : null}

        {pageMoverRequired ? (
          <div className="">
            <button className="" onClick={(e) => decrement(e)}>
              previous page
            </button>
            <button className="" onClick={(e) => increment(e)}>
              next page
            </button>
          </div>
        ) : null}
      </div>
      <div className="scroll_table">
        <table className="table-striped">
          <thead>
            <tr>{ThData()}</tr>
          </thead>
          <tbody>{tdData()}</tbody>
        </table>
      </div>
    </div>
  );
};