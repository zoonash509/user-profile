import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Card, CardContent, Typography, Stack, Divider } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useParams } from 'react-router-dom';
import { QueryKeys } from 'helpers/query-keys';
import { useQueryClient } from 'react-query';
import { IUser, RandomUserData } from 'models/IUser';

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  width: '100vw',
  background: `linear-gradient(to bottom, black 50%, ${theme.palette.grey[500]} 50%)`,
  justifyContent: 'center', // Center the card horizontally
  alignItems: 'center', // Center the card vertically
}));

const ProfileImage = styled('img')(({ theme }) => ({
  width: 200,
  height: 200,
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: theme.spacing(2),
}));

const InfoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const IconContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    fontSize: 40, // Set icon size to 40px
    color: theme.palette.grey[500], // Set icon color to grey
  },
}));

export default function UserProfilePage() {
  const { id } = useParams()
  const queryClient = useQueryClient();
  const users = queryClient.getQueryData<RandomUserData | undefined>([
    QueryKeys.GET_ALL_USERS
  ]);

  const [userData, setUserData] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    if (users && users.results && id) {
      const foundUser = users.results.find((item: IUser) => item.name.first === id);
      setUserData(foundUser);
    }
  }, [users, id]);

  return (
    <Wrapper>
      <Container maxWidth="sm" sx={{ maxWidth: "67vw !important" }}>
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '70vh', justifyContent: 'center', alignItems: 'center' }}>
          <CardContent>
            <InfoContainer>
              <ProfileImage src={userData?.picture.medium} alt="Profile" />
              <Typography variant="h6" align="center">Hi, my name is </Typography>
              <Typography variant="h3" align="center">{userData?.name.first + " " + userData?.name.last}</Typography>
            </InfoContainer>
            <Divider />
            <IconContainer direction="row" spacing={2}>
              <EmailOutlinedIcon />
              <CalendarMonthOutlinedIcon />
              <LocalPhoneOutlinedIcon />
              <PinDropOutlinedIcon />
              <LockOutlinedIcon />
            </IconContainer>
          </CardContent>
        </Card>
      </Container>
    </Wrapper>
  );
}
