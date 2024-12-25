import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RenderList from "../components/RenderList";

const API_KEY = process.env.REACT_APP_API_KEY;

const ListPage = () => {
  const [list, setList] = useState(null);
  const { id } = useParams();
  // console.log("ppp", id);

  useEffect(() => {
    tourAPI();
  }, []);

  const tourAPI = async () => {
    const url = `https://apis.data.go.kr/B551011/KorService1/searchStay1?MobileOS=etc&MobileApp=accommodation&_type=json&areaCode=${id}&serviceKey=${API_KEY}`;
    const response = await fetch(url);
    const data1 = await response.json();
    const data2 = data1.response.body.items.item;
    // console.log(url);
    // console.log(response);
    // console.log(data1);
    console.log(data2);
    setList(data2);
  };

  return (
    <div>
      {list && list.map((item) => (
        <RenderList item={item} />
      ))}
    </div>
  );
};

export default ListPage;
