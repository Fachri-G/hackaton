import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  IconCalendar,
  IconClock,
  IconFilter,
  IconLocation,
  IconProfile,
  IconSearch,
} from '../../assets';

const Home = ({navigation}) => {
  const goToUploadRecorder = () => {
    navigation.navigate('UPLOADRECORDER');
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <View style={styles.searchInput}>
          <TextInput placeholder="Search" />
          <IconSearch height={25} width={25} />
        </View>
        <View style={styles.btnFilter}>
          <IconFilter height={25} width={25} />
        </View>
      </View>
      <View style={styles.banner}>
        <Text>RINGKAS</Text>
        <Text>Make it simple</Text>
      </View>
      <View style={styles.containerListMeeting}>
        <Text style={styles.txtTitleMeeting}>Your Meeting</Text>
        <View style={styles.cardList}>
          <Text>Meeting 29/24/2022 15:00</Text>
          <View style={styles.flexRow}>
            <View style={styles.itemRow}>
              <View style={styles.rowItem}>
                <IconCalendar height={18} width={18} />
                <Text>Nov 29</Text>
              </View>
              <View style={styles.rowItem}>
                <IconProfile height={18} width={18} />
                <Text>Member Collabs 2</Text>
              </View>
            </View>
            <View style={styles.itemRow}>
              <View style={styles.rowItem}>
                <IconClock height={18} width={18} />
                <Text>15.00 - 15.30</Text>
              </View>
              <View style={styles.rowItem}>
                <IconLocation height={18} width={18} />
                <Text>Zoom Virtual room</Text>
              </View>
            </View>
          </View>
          <Text>No participant</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnUpload}
        onPress={() => {
          goToUploadRecorder();
        }}>
        <Text style={styles.txtUpload}>Upload Rekaman</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  searchHeader: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 12,
  },
  searchInput: {
    height: 40,
    width: 260,
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  btnFilter: {
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 117,
    width: 325,
    borderRadius: 8,
    backgroundColor: '#9C9DEE',
    marginTop: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitleMeeting: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  containerListMeeting: {
    marginTop: 12,
    paddingHorizontal: 10,
    flex: 1,
  },
  cardList: {
    padding: 8,
    height: 115,
    width: 312,
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  rowItem: {
    flexDirection: 'row',
  },
  flexRow: {
    flexDirection: 'row',
  },
  itemRow: {
    width: 150,
    height: 40,
    justifyContent: 'space-between',
  },
  btnUpload: {
    height: 35,
    width: 300,
    borderRadius: 8,
    backgroundColor: '#9C9DEE',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtUpload: {
    color: 'white',
  },
});
