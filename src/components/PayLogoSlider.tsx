import React from 'react';
import { useAppSelector } from '../redux/hooks';

import '../style/components/PayLogoSlider.scss';

function PayLogoSlider() {
  const { windowX } = useAppSelector(state => state.resize);
  return (
    <>
      <div id={windowX > 768 ? 'payLogoSlider' : 'mobilePayLogoSlider'}>
        <img src={require('../img/visa.png')} alt="visaLogo" />
        <img src={require('../img/payco.png')} alt="paycoLogo" />
        <img src={require('../img/apple.png')} alt="appleLogo" />
        <img src={require('../img/zero.png')} alt="zeroLogo" />
        <img src={require('../img/google.png')} alt="googleLogo" />
        <img src={require('../img/kakao.png')} alt="kakaoLogo" />
        <img src={require('../img/naver.png')} alt="naverLogo" />
        <img src={require('../img/master.png')} alt="masterLogo" />
        {windowX > 768 && (
          <>
            <img src={require('../img/visa.png')} alt="visaLogo" />
            <img src={require('../img/payco.png')} alt="paycoLogo" />
            <img src={require('../img/apple.png')} alt="appleLogo" />
            <img src={require('../img/zero.png')} alt="zeroLogo" />
            <img src={require('../img/google.png')} alt="googleLogo" />
            <img src={require('../img/kakao.png')} alt="kakaoLogo" />
            <img src={require('../img/naver.png')} alt="naverLogo" />
            <img src={require('../img/master.png')} alt="masterLogo" />
          </>
        )}
      </div>
    </>
  );
}

export default PayLogoSlider;
