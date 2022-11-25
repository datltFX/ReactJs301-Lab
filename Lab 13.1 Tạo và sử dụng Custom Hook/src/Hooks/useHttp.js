import { useCallback, useState } from "react";

const useHttp = () => {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  //lay api
  const fetchApi = async (url) => {
    setIsloading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed: ${res.status}`);
      const data = await res.json();
      //   tra arr gia tri thuoc tinh obj
      const dataArr = [];
      for (const key in data) {
        const dataObj = {
          id: key,
          content: data[key],
        };
        //them obj vao arr
        dataArr.push(dataObj);
      }
      return dataArr;
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  };

  //upload
  const postData = useCallback(async (url, data) => {
    setIsloading(true);
    setError(null);
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(`Failed: ${res.status}`);
      const feedback = await res.json();
      console.log(feedback);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, []);
  //tra lai obj chua value can thiet
  return {
    error,
    isloading,
    fetchApi,
    postData,
  };
};

export default useHttp;
