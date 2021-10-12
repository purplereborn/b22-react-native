import React from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import user from '../../images/user2.png';

// const AtomListChat = props => {
//   return (
//     <TouchableOpacity style={styles.row1}>
//       <Image style={styles.images2} source={user} />
//       <View style={styles.textWrap}>
//         <View style={styles.row2}>
//           <Text style={styles.name}>Name</Text>
//           <Text>time</Text>
//         </View>

//         <Text style={styles.dsc}>
//           What beans do you use for making cold brew?
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

const ItemListChat = ({name}) => {
  return (
    <View style={styles.chatWrap}>
      <Text style={styles.h3}>Message</Text>

      <ScrollView style={styles.scroll} vertical={true}>
        <TouchableOpacity style={styles.row1}>
          <Image style={styles.images2} source={user} />
          <View style={styles.textWrap}>
            <View style={styles.row2}>
              <Text style={styles.name}>{name}</Text>
              <Text>time</Text>
            </View>

            <Text style={styles.dsc}>
              What beans do you use for making cold brew?
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.h9}>You have no conversation left</Text>
      </ScrollView>
    </View>
  );
};

export default ItemListChat;

const styles = StyleSheet.create({
  h3: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    paddingTop: 20,
    borderTopWidth: 2,
    borderColor: '#E0E0E2',
    paddingHorizontal: 30,
  },
  h9: {
    textAlign: 'center',
    paddingVertical: 10,
  },
  images: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginHorizontal: 5,
  },
  images2: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  scroll: {
    marginHorizontal: 40,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 210,
  },
  textWrap: {
    marginHorizontal: 10,
  },
  dsc: {
    width: 210,
    fontFamily: 'Poppins-Regular',
  },
  name: {
    fontFamily: 'Poppins-Bold',
  },
  chatWrap: {
    paddingTop: 10,
    height: 350,
  },
});
