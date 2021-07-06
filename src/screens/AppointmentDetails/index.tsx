// import { Header } from '@react-navigation/stack';
import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import {
  ImageBackground,
  Text,
  View,
  FlatList
} from 'react-native';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';

import BannerImg from '../../assets/banner.png'

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Lucas',
      avatar_url: 'https://github.com/lucascarmelim.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/lucascarmelim.png',
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje uqe vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>

      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle="Total 6"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item}/>
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida"/>
      </View>
    </Background>
  );
}