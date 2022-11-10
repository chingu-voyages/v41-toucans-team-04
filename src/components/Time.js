import { useEffect, useState } from "react";

export default function Time() {
  const [alert, setAlert] = useState(false);

  const alertHandler = () => {
    setAlert(true);
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log("hello");
  };

  return <p onClick={alertHandler}>{alert ? "hello" : "click"}</p>;
}
