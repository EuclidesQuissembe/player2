import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import Button from '../../components/Button';
import Loading from '../../components/Loading';
import useAuth from '../../hooks/useAuth';
import { RootScreenList } from '../../navigation/types';

import { Container, Title, Subtitle, Label, Input, Link } from './styles';

const Login: React.FC = () => {
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>();

  const navigation = useNavigation<NavigationProp<RootScreenList>>();

  const signIn = async () => {
    setIsLoading(true);
    try {
      const response = await login();

      if (response) {
        navigation.navigate('First');
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading visible={isLoading} />
      <Title>Loging</Title>
      <Subtitle>Enter your email and password</Subtitle>
      <Label>Email</Label>
      <Input keyboardType="email-address" />
      <Label>Password</Label>
      <Input keyboardType="default" secureTextEntry />
      <Link>Forgot password?</Link>
      <Button text="Log In" onPress={signIn} />
      <Link>Don't have an account? Signup</Link>
    </Container>
  );
};

export default Login;
