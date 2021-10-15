import { useEffect } from "react";
import { Button } from "semantic-ui-react";
import { ethers } from "ethers";
const data = require("../blockchain/contractInfo.json");

const CreateSection = () => {
  let provider = null;
  let signer = null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const armyContract = new ethers.Contract(data.address, data.abi, signer);    
    console.log(armyContract.address)
    
    let tx = {
      value: ethers.utils.parseEther("0.1")
    }
    await armyContract.safeMint(tx);
  };

  useEffect(async () => {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
      provider.listAccounts().then((accounts) => {
        const defaultAccount = accounts[0];
        if (defaultAccount) console.log("Metamask connected!");
      });
    
  }, []);

  window.ethereum.on("accountsChanged", () => {
    window.location.reload();
  });

  window.ethereum.on("disconnect", () => {
    window.location.reload();
  });

  const connectMetamask = (e) => {
    e.preventDefault();
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ display: "inline" }}>
      <Button primary onClick={handleSubmit}>
        Create!
      </Button>
      <Button primary onClick={connectMetamask}>
        Connect Wallet
      </Button>
    </div>
  );
};

export default CreateSection;
