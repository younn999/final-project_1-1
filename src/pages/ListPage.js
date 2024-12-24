import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ListPage = () => {
  const [list, setList] = useState(null);
  const { id } = useParams();
  // console.log("ppp", id);

  useEffect(() => {
    tourAPI();
  }, []);

  const tourAPI = async () => {
    const url = `https://apis.data.go.kr/B551011/KorService1/searchStay1?MobileOS=etc&MobileApp=accommodation&_type=json&areaCode=${id}&serviceKey=`;
    const response = await fetch(url);
    const data1 = await response.json();
    const data2 = data1.response.body.items.item;
    // console.log(url);
    // console.log(response);
    // console.log(data1);
    console.log(data2);
    setList(data2);
  };

  return <div>ListPage</div>;
};

export default ListPage;
