import React, { useRef } from "react";
import { useParams } from "react-router-dom";

const PrintOnLine = () => {
  const comandi = useRef();
  const { dns } = useParams();

  const submithandler = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "*");

    const raw = "clear\nresprn\nINFO CODICE=1\nwecfine\n";

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      mode: "no-cors",
    };

    fetch("https://" + dns + "/cmd/wec", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <textarea ref={comandi} />
      <button onClick={submithandler}>submit</button>
    </div>
  );
};
export default PrintOnLine;
