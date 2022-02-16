import React, { Component } from 'react';
import detectEthereumProvider from '@metamask/detect-provider'
import ButtonFox from './ButtonFox';
import ErroToken from './ErrorToken'

import Eth from 'ethjs-query';
import queryString from 'querystringify'


const metaMarkAddress = '0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf';

class AddToken extends Component {

  constructor(props) {
    const {
      tokenName = 'NFT Royal Token',
      tokenSymbol = 'NRT',
      tokenDecimals = 18,
      tokenAddress = metaMarkAddress,
      tokenImage = 'https://www.nftroyaltoken.com/images/logo/logo.png',
      tokenNet = '56',
      message = '',
      errorMessage = '',
      net = '56',
    } = props

    super()
    this.state = {
      tokenName,
      tokenSymbol,
      tokenDecimals,
      tokenAddress,
      tokenImage,
      tokenNet,
      message,
      errorMessage,
      net,
    }

    const search = window.location.search
    const params = queryString.parse(search)

    for (let key in params) {
      this.state[key] = params[key]
    }

    this.updateNet()
  }



  async updateNet() {
    const provider = await detectEthereumProvider()
    const eth = new Eth(provider)
    const realNet = await eth.net_version()
    this.setState({ net: realNet })
  }

  render(props, context) {
    const {
      tokenSymbol,
      tokenDecimals,
      tokenNet,
      net,
      tokenImage,
      tokenAddress,
      // message,
      //errorMessage,
    } = this.state



    if (tokenNet !== net) {
      return <ErroToken />
    }

    return (
        <>
          <ButtonFox

            onClick={async (event) => {
              const provider = await detectEthereumProvider()
              provider.sendAsync({
                method: 'metamask_watchAsset',
                params: {
                  "type": "ERC20",
                  "options": {
                    "address": tokenAddress,
                    "symbol": tokenSymbol,
                    "decimals": tokenDecimals,
                    "image": tokenImage,
                  },
                },
                id: Math.round(Math.random() * 100000),
              }, (err, added) => {
                console.log('provider returned', err, added)
                if (err || 'error' in added) {
                  this.setState({
                    errorMessage: 'There was a problem adding the token.',
                    message: '',
                  })
                  return
                }
                this.setState({
                  message: 'Token added!',
                  errorMessage: '',
                })
              })
            }}
          >


          </ButtonFox>



      </>
    )
  }
}



export default AddToken;
