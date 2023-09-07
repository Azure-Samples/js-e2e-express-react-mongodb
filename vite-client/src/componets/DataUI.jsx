import { useState, useEffect } from "react";
import * as api from "./api";
import Form from "./Form";
import List from "./List";

function DataUI(props) {
  // Api Server Status
  const [apiStatus, setApiStatus] = useState(false);
  const [apiError, setApiError] = useState("");

  // List from database
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const checkApiServer = async () => {
      // If server returns URL, then API server is working
      const dbUrl = await api.status();

      // If URL isn't empty, database is probably working
      if (dbUrl && dbUrl.length > 0) {
        setApiStatus(true);

        // get data to fill list
        await getList();
      } else {
        setApiError(
          `DB is configured on server but isn't responding to requests`
        );
      }
    };

    checkApiServer();
  }, []);

  const getList = async () => {
    const data = await api.getList();

    setData(data);
  };
  const onAddHandler = async (newItem) => {
    console.log(newItem);
    await api.addToList(newItem);
    await getList();
  };
  const onDeleteAllHandler = async () => {
    await api.deleteList();
    await getList();
  };
  const onDeleteOneHandler = async (id) => {
    console.log(id);
    await api.deleteItem(id);
    await getList();
  };

  function DefaultLayout(props) {
    return <div>{props.children}</div>;
  }

  return (
    <DefaultLayout>
      {apiStatus === false && <div>API Error: {apiError.trim()}</div>}

      {apiStatus === true && (
        <div>
          <h2 id="title">Simple app</h2>
          <p>Server: Expressjs and MongoDB</p>
          <p>Client: Vite React</p>
          <hr />

          <Form addOne={onAddHandler}></Form>

          <hr />
          {(data && (data.length > 0)) && (
            <List
              list={data}
              deleteOne={onDeleteOneHandler}
              deleteAll={onDeleteAllHandler}
            ></List>
          )}
        </div>
      )}
    </DefaultLayout>
  );
}

export default DataUI;