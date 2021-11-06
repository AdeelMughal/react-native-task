import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {appImages, appStyles, fontFamily, sizes} from '../../services';
import {colors} from '../../services/utilities/colors/index';
import {BackIcon, SearchIcon} from '../icons';
import {LogoMain} from '../logos';
import {CardWrapper} from '../wrappers';
import * as Animatable from 'react-native-animatable';
import {CustomIcon} from '..';
import {
  RegularText,
  TinyTitle,
  SmallText,
  TinierTitle,
  TinyText,
} from '../text';

export const HeaderSimple = ({
  style,
  onPress,
  onBackPress,
  showSearch,
  item,
  animation,
}) => {
  return (
    <Animatable.View animation={animation ? animation : 'fadeInDown'}>
      <View
        style={[
          styles.row,
          {
            width: width(100),
            paddingRight: width(5),
            backgroundColor: colors.greenLighter,
            marginTop: Platform.OS == 'ios' ? 0 : sizes.baseMargin,
          },
        ]}>
        <View style={styles.onlyRow}>
          <BackIcon onPress={onBackPress} />
          <LogoMain
            logo={appImages.logo}
            size={Platform.OS == 'ios' ? totalSize(8) : totalSize(10)}
          />
        </View>
        {showSearch ? <SearchIcon /> : null}
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainViewContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.bgLight,
  },
  alignCenter: {
    alignItems: 'center',
  },
  bottomNavBar: {
    width: width(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgLight,
    justifyContent: 'space-around',
    paddingVertical: totalSize(1.5),
    elevation: 5,
    marginTop: totalSize(5),
  },
  navBarText: {
    fontSize: totalSize(1.4),
    color: colors.textGrey,
    marginTop: totalSize(0.4),
  },
  productImageImge: {
    width: width(20),
    height: Platform.OS == 'ios' ? height(15) : height(20),
    marginTop: totalSize(1.8),
  },
  iconStyle: {
    width: totalSize(3),
    height: totalSize(3),
  },
  imagesRowContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: totalSize(0.5),
  },
  productContainer: {
    width: width(40),
    // height: height(50),
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel, //textGrey
    borderRadius: 10,
    marginRight: totalSize(1.5),
    marginTop: totalSize(1),
    paddingHorizontal: totalSize(0.8),
    paddingVertical: totalSize(0.8),
  },
  addCartButton: {
    // paddingHorizontal: totalSize(2),
    width: totalSize(10),
    paddingVertical: totalSize(0.6),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gradient1,
    marginBottom: totalSize(0.4),
  },
  cartButtonText: {
    // fontSize: totalSize(1.5),

    color: colors.snow,
  },
  productRegularText: {
    fontSize: totalSize(1.8),
    color: colors.textGrey,
    fontWeight: '800',
  },
  priceText: {
    fontSize: totalSize(2.1),
    fontWeight: 'bold',
    color: colors.textGrey,
  },
  categoryImge: {
    width: width(40),
    height: height(30),
    borderRadius: 15,
    marginRight: totalSize(1.5),
  },
  parentColorContainer: {
    flex: 1,
    width: width(100),
    backgroundColor: colors.blueBitLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.blueLighter,
  },
  serviceContainer: {
    flex: 1,
  },
  iconContainer: {
    borderRadius: 2,
    width: totalSize(3.5),
    height: totalSize(3.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.snow,
  },
  headerContainer: {
    width: width(100),
    backgroundColor: colors.greenLighter,
    borderBottomLeftRadius: totalSize(5),
    borderBottomRightRadius: totalSize(5),
    borderWidth: 1,
    borderColor: colors.greenBitLight,
  },
  headerText: {
    fontSize: totalSize(2.6),
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: totalSize(1.8),
  },
  viewAllButton: {
    borderWidth: 1,
    paddingVertical: Platform.OS == 'ios' ? totalSize(0.1) : totalSize(0.3),
    paddingHorizontal: totalSize(0.9),
    backgroundColor: colors.snow,
    borderColor: colors.gradient1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryMainContainer: {
    // paddingVertical: totalSize(1.5),
    marginLeft: width(4),
    // alignSelf: 'center',
    // backgroundColor: 'red',
  },
  titleRowContainer: {
    // width: width(90),
    paddingRight: width(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerImage: {
    width: width(90),
    height: height(30),
    marginTop: totalSize(2),
    borderRadius: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  simpleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  onlyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputfieldStyle: {
    paddingHorizontal: totalSize(1),
    flex: 1,
  },
  searchBarStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: totalSize(2),
    backgroundColor: colors.snow,
    borderRadius: 10,
    paddingHorizontal: totalSize(1.3),
    height: height(6),
    // paddingVertical: totalSize(0.6),
  },
  prescriptionButton: {
    paddingHorizontal: totalSize(0.5),
    // paddingVertical: totalSize(0.5),
    height: totalSize(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradientwrap: {
    paddingHorizontal: totalSize(0.5),
    paddingVertical: totalSize(0.5),
    borderRadius: totalSize(5),
    height: totalSize(4.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: totalSize(20),
    width: totalSize(30),
    borderRadius: 100,
    //marginTop: 350
  },
  searchContainer: {
    width: width(80),
    height: height(7),
    backgroundColor: colors.snow,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: height(3),
    alignSelf: 'center',
    borderRadius: width(2),
    flexDirection: 'row',
    paddingHorizontal: width(2),
  },
  search: {
    backgroundColor: colors.snow,
    width: width(50),
    alignSelf: 'center',
  },
  headerText: {
    fontSize: height(2.5),
    color: colors.appColor1,
    marginLeft: width(3),
  },
  headerText1: {
    fontSize: height(1.5),
    color: colors.black,
    marginLeft: width(3),
  },
  flatListContainer: {
    width: width(90),
    height: height(10),
    borderRadius: height(2),
    backgroundColor: colors.snow,
    marginLeft: width(5),
    marginTop: height(1),
    elevation: 3,
    flexDirection: 'row',
    paddingHorizontal: width(2),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: height(8),
    width: height(8),
    borderRadius: height(4),
    alignSelf: 'center',
  },
  flatListInnerContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width(2),
    marginTop: totalSize(1),
  },
  flatListInnerContainer1: {
    flexDirection: 'row',
    zIndex: 0,
  },
  drawerContainer: {
    height: height(7),
    width: height(7),
    borderRadius: height(5),
    backgroundColor: colors.appColor1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: height(15),
    right: width(20),
    zIndex: 1,
  },
});
