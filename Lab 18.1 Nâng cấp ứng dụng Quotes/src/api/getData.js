//do
const getData = async (url) => {
  const data = fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`No data available: ${res.mesage}`);
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      const arrayData = [];
      //duyet obj chua obj sang arr
      for (const key in data) {
        const quoteObj = {
          id: key,
          ...data[key],
        };
        // console.log(quoteObj);
        arrayData.push(quoteObj);
      }
      // console.log(arrayData);
      return arrayData;
    });
  return data;
};
export default getData;
