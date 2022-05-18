import './App.scss'
import { useState } from 'react'
import useQueryCw20 from './hooks/useQueryCW20';
import { Button, Divider, TextField } from '@mui/material';
import Loader from 'components/Loader/Loader';
import useQueryCW721 from 'hooks/useQueryCW721';
import { JsonArray, download } from "json-to-csv-in-browser"
import { useSnackbar } from "notistack";

const App = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loader, setLoader] = useState({
    loading: false,
    index: 0,
    account: ""
  });
  const {
    PRE_ATTACK_BLOCK_HEIGHT,
    getTokenInfo,
    getTokenAccountsWithBalance
  } = useQueryCw20();
  const { getAllMintedTokens } = useQueryCW721();
  const [blockHeight, setBlockHeight] = useState(PRE_ATTACK_BLOCK_HEIGHT);
  const [contractHash, setContractHash] = useState("");
  const [isCW721, setIsCW721] = useState(false);
  const [tokenHolders, setTokenHolders] = useState([]);

  const onSnapshotData = async () => {
    setLoader({ ...loader, loading: true });

    const tokenInfo = await getTokenInfo(contractHash, blockHeight);
    console.log(Object.keys(tokenInfo))
    setIsCW721(Object.keys(tokenInfo).length === 0);
    
    try{
      if (isCW721) await getCW721Data()
      else await getCW20Data();
    } catch (e) {
      enqueueSnackbar("Something went wrong, try again", {variant: "error"});
    }

    setLoader({ ...loader, loading: false });
  }

  const getCW20Data = async () => {
    let allAccountsRetrieved = false;
    let _tokenHolders: any = [];

    while (!allAccountsRetrieved) {
      if (_tokenHolders.length == 0) {
        const holders = await getTokenAccountsWithBalance(contractHash, blockHeight);
        _tokenHolders = holders;
      }
      else {
        const lastHolderFromIndex = _tokenHolders[_tokenHolders.length - 1].address;
        setLoader({ ...loader, index: _tokenHolders.length, account: lastHolderFromIndex, loading: true });
        const holders = await getTokenAccountsWithBalance(contractHash, blockHeight, lastHolderFromIndex);

        _tokenHolders = _tokenHolders.concat(holders);
        if (holders.length < 30) {
          allAccountsRetrieved = true;
        }
      }
      setLoader({ ...loader, index: _tokenHolders.length, loading: true });
    }
    setTokenHolders(_tokenHolders);
  }

  const getCW721Data = async () => {
    let allAccountsRetrieved = false;
    let _tokenHolders: any = [];

    while (!allAccountsRetrieved) {
      if (_tokenHolders.length == 0) {
        const holders = await getAllMintedTokens(contractHash, blockHeight);
        _tokenHolders = holders;
      }
      else {
        const lastHolderFromIndex = _tokenHolders[_tokenHolders.length - 1].owner;
        setLoader({ ...loader, index: _tokenHolders.length, account: lastHolderFromIndex, loading: true });
        const holders = await getAllMintedTokens(contractHash, blockHeight, lastHolderFromIndex);

        _tokenHolders = _tokenHolders.concat(holders);
        if (holders.length < 30) {
          allAccountsRetrieved = true;
        }
      }
      setLoader({ ...loader, index: _tokenHolders.length, loading: true });
    }
    setTokenHolders(_tokenHolders);
  }

  const onDownloadDataToJSON = async () => {
    download(contractHash + ".json", JSON.stringify(tokenHolders));
    setTokenHolders([]);
  }

  const onDownloadDataToCSV = async () => {
    let exportableData : Array<any> = tokenHolders;
    
    if(isCW721){
      exportableData = exportableData.map((holder: any) => {

        return {
          ...holder,
          attributes: JSON.stringify(holder.attributes)
        }
      })
    }
    let jsonArray = new JsonArray(exportableData);
    let str = jsonArray.convertToCSVstring();
    download(contractHash + ".csv", str);
    setTokenHolders([]);
  }

  return (
    <div className="App">
      <div className="Header">
        <h2>Terra Classic Tokens Migration</h2>
        <h3>Snapshot a CW20 or CW721 at a block height from Terra Classic</h3>
      </div>
      <div className="Toolbox">
        <TextField className="BlockHeightInput"
          variant="standard"
          defaultValue={blockHeight}
          label="Block height"
          type='number'
          onChange={(event) => setBlockHeight(Number(event.currentTarget.value))} />
        <TextField className="ContractHashInput"
          variant="standard"
          defaultValue={contractHash}
          label="CW20 or CW721 token address"
          onChange={(event) => setContractHash(event.currentTarget.value)} />
        <Button className="Button"
          variant="contained"
          onClick={onSnapshotData}
          disabled={!blockHeight || !contractHash.length}>Create Snapshot</Button>
      </div>
      <Divider />
      <div className="Body">
        {!!tokenHolders.length && <>
          <Button variant="contained"
            onClick={onDownloadDataToCSV}>Download to CSV</Button>
          <Button variant="contained"
            onClick={onDownloadDataToJSON}>Download to JSON</Button>
        </>}
      </div>
      {loader.loading && <Loader data={loader} />}
    </div>
  )
}

export default App
