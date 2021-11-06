import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ViewPropTypes,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {colors, sizes, appStyles, appImages, fontFamily} from '../../services';
import PropTypes from 'prop-types';
import {Wrapper, AbsoluteWrapper} from '../wrappers';
import {color} from 'react-native-reanimated';
import {SliderBox} from 'react-native-image-slider-box';
import {
  LargeText,
  LargeTitle,
  MediumText,
  MediumTitle,
  RegularText,
  SmallText,
  SmallTitle,
  TinierTitle,
  TinyText,
  TinyTitle,
  XLTitle,
  XXLTitle,
} from '../text';
import {BackIcon, CustomIcon} from '../icons';
//import LinearGradient from 'react-native-linear-gradient';

export const ImageRound = ({style, size, source}) => {
  const defaultSize = totalSize(5);
  return (
    <Image
      source={source}
      style={[
        {
          height: size ? size : defaultSize,
          width: size ? size : defaultSize,
          borderRadius: 150,
        },
        style,
      ]}
    />
  );
};

export const ImageSqareRound = ({style, size, source}) => {
  const defaultSize = totalSize(5);
  return (
    <Image
      source={source}
      style={[
        {
          height: size ? size : defaultSize,
          width: size ? size : defaultSize,
          borderRadius: 15,
        },
        style,
      ]}
    />
  );
};

export const ImageProfile = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'zoomIn'}
        style={[styles.ImageProfileContainer, containerStyle]}>
        <Image source={source} style={[styles.ImageProfile, imageStyle]} />
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageHomeBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <Image
          source={source ? source : appImages.banner}
          style={[styles.ImageHomeBanner, imageStyle]}
        />
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageCategoryBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <ImageBackground
          source={source ? source : appImages.banner}
          style={[styles.ImageCategoryBanner, imageStyle]}>
          <View style={{marginLeft: width(5)}}>
            <TinierTitle style={appStyles.whiteText}>{text}</TinierTitle>
            <TinyText style={appStyles.whiteText}>{subText}</TinyText>
          </View>
        </ImageBackground>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const SliderImages = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
  images,
}) => {
  return (
    <SliderBox
      images={
        images ? images : ['https://source.unsplash.com/1024x768/?nature']
      }
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
      resizeMethod={'resize'}
      resizeMode={'contain'}
      inactiveDotColor={colors.textGrey}
      dotColor={colors.gradient1}
      dotStyle={{
        width: totalSize(0.8),
        height: totalSize(0.8),
        // borderRadius: 15,
        marginHorizontal: width(0.1),
        padding: 0,
        margin: 0,
      }}
      sliderBoxHeight={Platform.OS == 'ios' ? height(22) : height(26)}
      paginationBoxVerticalPadding={height(3)}
    />
  );
};
export const FilterPageBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
  onBackPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <ImageBackground
          source={source ? source : appImages.banner}
          style={[styles.ImageCategoryBanner, imageStyle]}>
          <View style={{marginLeft: width(3), paddingRight: width(40)}}>
            <View style={styles.row}>
              <Icon
                name={'arrowleft'}
                type={'antdesign'}
                color={colors.snow}
                style={{alignSelf: 'flex-start'}}
                onPress={onBackPress}
              />
              <View style={{marginLeft: width(2)}}>
                <TinierTitle style={appStyles.whiteText}>{text}</TinierTitle>
                {Platform.OS == 'ios' ? (
                  <SmallText
                    style={[appStyles.whiteText, {marginTop: height(2)}]}>
                    {subText}
                  </SmallText>
                ) : (
                  <RegularText
                    style={[appStyles.whiteText, {marginTop: height(2)}]}>
                    {subText}
                  </RegularText>
                )}
              </View>
            </View>
          </View>
        </ImageBackground>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const CovidTestBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
  onBackPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <ImageBackground
          source={source ? source : appImages.banner}
          style={[styles.ImageCategoryBanner, imageStyle]}
          resizeMode={resizeMode ? resizeMode : 'contain'}>
          <View
            style={{
              marginLeft: width(5),
              paddingRight: width(50),
              alignItems: 'flex-start',
            }}>
            <Icon
              name={'arrowleft'}
              type={'antdesign'}
              color={colors.snow}
              onPress={onBackPress}
            />
            {Platform.OS == 'ios' ? (
              <SmallTitle style={[appStyles.whiteText, {marginTop: height(4)}]}>
                {text}
              </SmallTitle>
            ) : (
              <SmallTitle
                style={[
                  appStyles.whiteText,
                  {fontFamily: fontFamily.appTextBold, marginTop: height(4)},
                ]}>
                {text}
              </SmallTitle>
            )}
            {Platform.OS == 'ios' ? (
              <SmallText style={[appStyles.whiteText, {marginTop: height(2)}]}>
                {subText}
              </SmallText>
            ) : (
              <MediumText style={[appStyles.whiteText, {marginTop: height(2)}]}>
                {subText}
              </MediumText>
            )}
          </View>
        </ImageBackground>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const MyPointsBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
  onBackPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <ImageBackground
          source={source ? source : appImages.banner}
          style={[styles.ImageCategoryBanner, imageStyle]}
          resizeMode={resizeMode ? resizeMode : 'contain'}>
          <View
            style={{
              width: width(100),
            }}>
            <View style={[appStyles.rowView, {marginLeft: width(5)}]}>
              <Icon
                name={'arrowleft'}
                type={'antdesign'}
                color={colors.snow}
                onPress={onBackPress}
              />
              {Platform.OS == 'ios' ? (
                <MediumText
                  style={[appStyles.whiteText, {marginLeft: width(2)}]}>
                  My Points
                </MediumText>
              ) : (
                <LargeText
                  style={[
                    appStyles.whiteText,
                    {fontFamily: fontFamily.appTextBold, marginLeft: width(2)},
                  ]}>
                  My Points
                </LargeText>
              )}
            </View>
            <View
              style={[
                appStyles.rowView,
                {alignSelf: 'center', marginTop: height(6)},
              ]}>
              <CustomIcon icon={appImages.flash} size={totalSize(6)} />
              {Platform.OS == 'ios' ? (
                <XLTitle style={[appStyles.whiteText, {marginLeft: width(2)}]}>
                  105
                </XLTitle>
              ) : (
                <XXLTitle
                  style={[
                    appStyles.whiteText,
                    {fontFamily: fontFamily.appTextBold, marginLeft: width(2)},
                  ]}>
                  105
                </XXLTitle>
              )}
            </View>

            <View
              style={[
                appStyles.rowView,
                {
                  marginLeft: width(7),
                  marginTop: Platform.OS == 'ios' ? height(2) : height(4),
                },
              ]}>
              {Platform.OS == 'ios' ? (
                <SmallText style={[appStyles.whiteText]}>
                  Total Points 200
                </SmallText>
              ) : (
                <MediumText style={[appStyles.whiteText]}>
                  Total Points 200
                </MediumText>
              )}
              {Platform.OS == 'ios' ? (
                <SmallText
                  style={[appStyles.whiteText, {marginLeft: width(4)}]}>
                  1 Point = 1 AED
                </SmallText>
              ) : (
                <MediumText
                  style={[appStyles.whiteText, {marginLeft: width(4)}]}>
                  1 Point = 1 AED
                </MediumText>
              )}
            </View>
          </View>
        </ImageBackground>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageHomeCategoriesText = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <Image
          style={[styles.categoryImge, imageStyle]}
          source={source ? source : appImages.item1}
          resizeMode={resizeMode ? resizeMode : 'contain'}
        />
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageCategoriesText = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[containerStyle]}>
        <Image
          style={imageStyle ? imageStyle : styles.categoriesImage}
          source={source ? source : appImages.item1}
          resizeMode={resizeMode ? resizeMode : 'contain'}
        />
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageCollectionItem = ({imageStyle, source, containerStyle}) => {
  return (
    <Wrapper style={containerStyle}>
      <Image source={source} style={[styles.ImageCollectionItem, imageStyle]} />
    </Wrapper>
  );
};
export const ImageBackgroundTop = ({imageStyle, source, containerStyle}) => {
  return (
    <AbsoluteWrapper style={[containerStyle]}>
      <Image
        source={source}
        style={[{width: width(100), height: height(45)}, imageStyle]}
      />
      <AbsoluteWrapper
        style={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: colors.appBgColor5 + '40',
        }}
      />
    </AbsoluteWrapper>
  );
};

const styles = StyleSheet.create({
  ImageProfileContainer: {
    ...appStyles.shadowColored,
    // backgroundColor:'transparent',
    borderRadius: 100,
    backgroundColor: colors.appBgColor1,
  },
  ImageHomeBannerContainer: {
    // ...appStyles.shadowColored,
    alignSelf: 'center',
  },
  ImageProfile: {
    width: totalSize(15),
    height: totalSize(15),
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.appBgColor1,
  },
  ImageProfileOverlay: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  ImageCollectionItem: {
    width: width(32.5),
    height: height(20),
    borderRadius: 15,
  },
  ImageHomeBanner: {
    width: width(92),
    height: Platform.OS == 'ios' ? height(25) : height(30),
    borderRadius: 15,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
  },
  ImageCategoryBanner: {
    width: width(69),
    height: Platform.OS == 'ios' ? height(10) : height(12),
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  ImageHomeCategory: {
    width: width(40),
    height: height(30),
    borderRadius: 15,
    marginRight: totalSize(1.5),
    resizeMode: 'contain',
  },
  categoryImge: {
    width: width(40),
    height: Platform.OS == 'ios' ? height(25) : height(30),
    borderRadius: 15,
    marginRight: totalSize(1.5),
    resizeMode: 'contain',
  },
  categoriesImage: {
    width: width(24),
    height: Platform.OS == 'ios' ? height(7.8) : height(10),
    resizeMode: 'contain',
  },
});
