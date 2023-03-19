import { useState, useEffect } from 'react';
import {
  Avatar,
  AvatarContainer,
  BackgroundImage,
  Button,
  CardContainer,
  CentralBar,
  Logo,
  Text,
  UserName,
} from './UserCard.styled';
import { theme } from 'services/theme';
const colors = theme.colors;

export const UserCard = ({ user }) => {
  const [followers, setFollowers] = useState(user.followers);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(user.id)) {
      setIsFollowing(true);
      setFollowers(user.followers + 1);
    }
  }, [user.id, user.followers]);

  const onBtnCliick = () => {
    if (isFollowing) {
      setFollowers(followers - 1);
      localStorage.removeItem(user.id);
    } else {
      setFollowers(followers + 1);
      localStorage.setItem(user.id, 'following');
    }
    setIsFollowing(!isFollowing);
  };

  const btnColor = isFollowing ? colors.accent : colors.background;
  const formatedFollowers = followers.toLocaleString('en', {
    useGrouping: true,
  });

  return (
    <CardContainer>
      <Logo
        src={require('assets/images/logo.png')}
        srcSet={`
          ${require('assets/images/logo@2x.png')} 2x,
          ${require('assets/images/logo@3x.png')} 3x
        `}
        alt="logo"
        width={76}
      />
      <BackgroundImage
        src={require('assets/images/picture.png')}
        srcSet={`
          ${require('assets/images/picture@2x.png')} 2x,
          ${require('assets/images/picture@3x.png')} 3x
        `}
        alt="background image"
        width={308}
      />
      <CentralBar>
        <AvatarContainer>
          <Avatar src={user.avatar} alt={user.user} width={62} />
          <UserName>{user.user}</UserName>
        </AvatarContainer>
      </CentralBar>
      <Text>{user.tweets} Tweets</Text>
      <Text style={{ marginBottom: '40px' }}>
        {formatedFollowers} Followers
      </Text>
      <Button
        type="button"
        onClick={onBtnCliick}
        style={{ backgroundColor: btnColor }}
      >
        {isFollowing ? 'following' : 'follow'}
      </Button>
    </CardContainer>
  );
};
