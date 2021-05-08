
async function contract_deployer(){
    console.log(network.chainId)
    
        
    factory = new ethers.ContractFactory(abi, bytecode, signer);
    contract = await factory.deploy();   
    console.log(contract.address);
    contractaddress = contract.address;
    await localStorage.setItem( network.name , contractaddress );
    $("#transactionmodal").modal('show');
    egg = document.getElementById("statusegg");
    setInterval( function(){
    egg.style.transitionDuration = "0.2s";
    egg.style.transform = `rotate(${(Math.random() * 60) - 30}deg)`;
    setTimeout ( function(){
    egg.style.transitionDuration = "1s"; 
    egg.style.transform = `rotate(0deg)`;
    } , 0.2 * 1000 );
                               } , 3 * 1000 );
    
    
    await contract.deployTransaction.wait();
    document.getElementById("statusegg").innerHTML = "🐣";
    localStorage.setItem( "phoenixaddress" , contractaddress );
    setTimeout( function(){location.reload()} , 60 * 1000 );
    
    
}

