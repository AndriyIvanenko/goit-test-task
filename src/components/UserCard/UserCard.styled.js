import styled from 'styled-components';
import bgrImg from '../../assets/images/picture.png';
import bgrImg2x from '../../assets/images/picture@2x.png';
import bgrImg3x from '../../assets/images/picture@3x.png';

export const CardContainer = styled.div`
  position: relative;

  width: 380px;
  height: 460px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding: 20px;

  border-radius: 20px;
  background-image: image-set(
      url(${bgrImg}) 1x,
      url(${bgrImg2x}) 2x,
      url(${bgrImg3x}) 3x
    ),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: 36px 28px, 0 0;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Logo = styled.img`
  align-self: flex-start;

  margin-bottom: 242px;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: calc(50% - 12px);
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AvatarWrapper = styled.div`
  width: 80px;
  height: 80px;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  background: ${p => p.theme.colors.background};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 26px;

  transition: width 500ms, height 500ms;

  :hover {
    cursor: pointer;
    width: 200px;
    height: 200px;
  }

  ::after {
    content: '';
    position: absolute;
    z-index: -1;

    width: 380px;
    height: 8px;
    background: ${p => p.theme.colors.background};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Avatar = styled.img`
  width: calc(100% - 18px);
  height: calc(100% - 18px);
  background: ${p => p.theme.colors.avatarBgrd};
  border-radius: 50%;
`;

export const UserName = styled.span`
  display: none;
  position: absolute;
  bottom: 50px;
  max-width: 60px;
  text-align: center;

  font-size: 8px;
  font-weight: 700;
  text-shadow: 0.5px 0.5px 0.5px white;

  transform: scale(2);

  ${AvatarContainer}:hover & {
    display: block;
  }
`;

export const Text = styled.span`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};

  margin-bottom: 16px;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.btnText};

  :hover {
    cursor: pointer;
    outline: 2px solid ${p => p.theme.colors.btnText};
    text-shadow: 1px 1px 1px ${p => p.theme.colors.avatarBgrd};
  }
`;
