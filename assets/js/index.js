
async function mint_from_ledger(){
    await window.ethereum.enable();
    ethereum.on('chainChanged', (_chainId) => window.location.reload());
    provider = await new ethers.providers.Web3Provider(window.ethereum);
//    signer = await provider.getSigner();
    signer = new LedgerSigner(provider);
    network = await provider.getNetwork();
    contractaddress = localStorage.getItem(network.name);

}

