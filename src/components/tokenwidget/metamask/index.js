import React, {useState} from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import AddToken from './AddToken';
import ButtonFox from './ButtonFox';
//import ErrorToken from "./ErrorToken"
const MetaMask = () => {
    const [isProviderLoaded, setProvider] = useState([]);
    const [isLoading, setLoading] = useState([true]);

    const checkEthereumProvider = async () => {
      const provider = await detectEthereumProvider()
      setLoading(false)
      setProvider(provider)
    }

    checkEthereumProvider()
    return ( <>

        {isLoading
        ?  <ButtonFox className="disable" />
        : <> {isProviderLoaded ? <AddToken/> : <a href="https://metamask.io/download.html" target="blank"><ButtonFox /></a>} </>
        }
    </> );
}

export default MetaMask;