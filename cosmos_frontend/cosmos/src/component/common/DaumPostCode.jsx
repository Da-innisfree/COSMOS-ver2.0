import React from 'react'; 

import DaumPostcode from 'react-daum-postcode';


const Postcode = (props) => {
    const setAddress = props.setAddress
    const address = props.address

    const handleComplete = (data) => {
      let fullAddress = data.address;
      let zonecode = data.zonecode;
      let extraAddress = ''; 
      
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
      }
      
      console.log(zonecode);
      // setAddress(zonecode);
      console.log(extraAddress)
      console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

      if(zonecode && fullAddress){
        setAddress({...address,
          zonecode : zonecode,
          fullAddress : fullAddress,
        });
      }
    }
  
    return (
      <DaumPostcode
        onComplete={handleComplete}
        style={{width: '100%', height: 500}}
      />
    );
  }

  export default Postcode;