import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const API_KEY = process.env.REACT_APP_API_KEY;

const Paginate = (props) => {
  // console.log("ppp", props);
  const [page, setPage] = useState(1);
  const [list, setList] = useState(null);
  const { id } = useParams();
  const handlePageChange = (page) => {
    setPage(page.selected + 1);
    getAPI();
  };

  useEffect(() => {
    getAPI();
  }, [page]);

  const getAPI = async () => {
    const url = `https://apis.data.go.kr/B551011/KorService1/searchStay1?MobileOS=etc&MobileApp=accommodation&_type=json&areaCode=${id}&serviceKey=${API_KEY}`;
    const response = await fetch(url);
    const data1 = await response.json();
    const data2 = data1.response.body;
    const data3 = data2.items.item;
    // console.log(url);
    // console.log(response);
    // console.log(data1);
    // console.log(data2);
    setList(data3);
  };

  return (
    <div className="paginate">
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={Math.ceil(props.page.totalCount / 10)} // 전체 페이지
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={page - 1} // 현재 페이지
      />
    </div>
  );
};

export default Paginate;
