import * as React from "react";
import axios from "../../../node_modules/axios/index";
import { serverUrl } from "../../helpers/Constants";
import { UrlData } from "../../interface/UrlData";
import DataTable from "../DataTable/DataTable";
import FormContainer from "../FormContainer/FormContainer";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setReload(true);
  };

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/api/shortUrl`);
    console.log("The response from the server is : ", response);
    setData(response.data);
    setReload(false);
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload]);

  return (
    <div className="flex-1">
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data} />
    </div>
  );
};

export default Container;
