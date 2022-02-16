import React, {useState} from 'react';

export default function CopyClipboard({contract}) {
    const [copied, setCopied] = useState(false)

    function greeting() {
        setCopied(true)
        navigator.clipboard.writeText(contract)
      }



    return(
        <>
            <input className='copy-input' type="text" value={contract} readOnly="readOnly"/>

                <button onClick={greeting} /* onClick={() =>  {navigator.clipboard.writeText(contract)}} */ /* onClick={()=> setCopied(true)} */ className="copy-button"  > <CopyIcon colorIcon="#676464" /> <span>Copy to clipboard</span> </button>

            {copied && <div className='alertcopied'>✓ Copied</div>}
        </>
    )
};
export function CopyIcon({colorIcon}){
    return(
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0H8C6.897 0 6 0.96044 6 2.14145V6.42435H2C0.897 6.42435 0 7.38479 0 8.5658V19.273C0 20.4541 0.897 21.4145 2 21.4145H12C13.103 21.4145 14 20.4541 14 19.273V14.9901H18C19.103 14.9901 20 14.0297 20 12.8487V2.14145C20 0.96044 19.103 0 18 0ZM2 19.273V8.5658H12L12.002 19.273H2ZM18 12.8487H14V8.5658C14 7.38479 13.103 6.42435 12 6.42435H8V2.14145H18V12.8487Z" fill={colorIcon}/>
        </svg>
    )
}
