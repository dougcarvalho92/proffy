import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import heartOutLineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://github.com/dougcarvalho92.png" }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Douglas Carvalho</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Sou desenvolvedor Front-end, formado em sistemas de informação e
        entusiasta do desenvolvimento mobile.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutLineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
