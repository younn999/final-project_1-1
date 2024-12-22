import React, { useEffect } from "react";

const tourAPI = async () => {
  const url = `https://apis.data.go.kr/B551011/KorService1/areaCode1?MobileOS=ETC&MobileApp=accommodation&areaCode=2&_type=json&serviceKey=`;
  const response = await fetch(url);
  const data1 = await response.json();
  const data2 = data1.response.body.items.item;
  console.log(url);
  console.log(response);
  console.log(data1);
  console.log(data2);
};

const ListPage = () => {
  useEffect(() => {
    tourAPI();
  }, []);
  return <div>ListPage</div>;
};

export default ListPage;
