import React, {Fragment, useState, useEffect, useRef, Component} from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector, useDispatch} from 'react-redux';
import {colors} from '../../../services/utilities/colors/index';
import {width, height, totalSize} from 'react-native-dimension';
import {Icon} from 'react-native-elements';
import {
  Spacer,
  HeaderSimple,
  ButtonColored,
  SmallText,
  RegularText,
  TouchableCustomIcon,
  TinyText,
  MediumText,
  LineHorizontal,
  CustomIcon,
  LargeText,
  ImageBackgroundWrapper,
} from '../../../components';
import {
  appImages,
  appStyles,
  fontFamily,
  routes,
  sizes,
} from '../../../services';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native';

export default function Cart({navigation, route}) {
  const [loading, setLoading] = useState(true);
  const [uploadIdVisible, setUploadIdVisible] = useState(false);

  const [accountList, setAccountList] = useState([
    {
      title: 'Prescription #258963',
      date: '06/29/2020, 18:12',
      status: 'Shipped',
      collapsed: false,
      items: 2,
      text1: 'Candes Eclat Fresh Lightening Face Tonic 200 mL',
      text2: 'By DW-NAD-P01',
      price: 'AED 69.00',
    },
  ]);

  useEffect(() => {}, []);

  const ProductCard = ({item, image}) => {
    return (
      <View style={[styles.onlyRow, {flex: 1}]}>
        <View
          style={[
            styles.productCardNew,
            Platform.OS == 'ios' && appStyles.shadowSmall,
          ]}>
          <View style={styles.onlyRow}>
            <View>
              <CustomIcon
                icon={image ? image : appImages.product1}
                size={totalSize(10)}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: width(3)}}>
              {Platform.OS == 'ios' ? (
                <SmallText>Candes Eclat Fresh</SmallText>
              ) : (
                <RegularText>Shipping Charge</RegularText>
              )}
              <Spacer height={sizes.TinyMargin} />
              {Platform.OS == 'ios' ? (
                <SmallText>Lightening Face Tonic 200 mL</SmallText>
              ) : (
                <RegularText>Lightening Face Tonic 200 mL</RegularText>
              )}
              <Spacer height={sizes.TinyMargin} />
              {Platform.OS == 'ios' ? (
                <TinyText style={{color: colors.textGrey2}}>
                  By DW-NAD-P01
                </TinyText>
              ) : (
                <SmallText style={{color: colors.textGrey2}}>
                  By DW-NAD-P01
                </SmallText>
              )}

              <Spacer height={sizes.TinyMargin} />
              <View style={[styles.onlyRow, {alignItems: 'flex-end'}]}>
                {Platform.OS == 'ios' ? (
                  <SmallText>AED </SmallText>
                ) : (
                  <RegularText>AED </RegularText>
                )}
                {Platform.OS == 'ios' ? (
                  <MediumText>97.00</MediumText>
                ) : (
                  <LargeText>97.00</LargeText>
                )}
              </View>
              <View
                style={[
                  styles.onlyRow,
                  {
                    marginTop: height(1),
                    justifyContent: 'space-between',
                  },
                ]}>
                <View style={styles.onlyRow}>
                  <TouchableOpacity style={styles.blueButton}>
                    {Platform.OS == 'ios' ? (
                      <RegularText style={appStyles.whiteText}>-</RegularText>
                    ) : (
                      <MediumText style={appStyles.whiteText}>-</MediumText>
                    )}
                  </TouchableOpacity>
                  {Platform.OS == 'ios' ? (
                    <SmallText style={{marginRight: width(2)}}>2</SmallText>
                  ) : (
                    <RegularText style={{marginRight: width(2)}}>2</RegularText>
                  )}
                  <TouchableOpacity style={styles.blueButton}>
                    {Platform.OS == 'ios' ? (
                      <RegularText style={appStyles.whiteText}>+</RegularText>
                    ) : (
                      <MediumText style={appStyles.whiteText}>+</MediumText>
                    )}
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.blueButtonLight}>
                  {Platform.OS == 'ios' ? (
                    <TinyText style={{color: colors.gradient1}}>
                      Save for later
                    </TinyText>
                  ) : (
                    <SmallText style={{color: colors.gradient1}}>
                      Save for later
                    </SmallText>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <TouchableCustomIcon
          icon={appImages.greyCross}
          size={totalSize(4)}
          style={{marginRight: width(4)}}
        />
      </View>
    );
  };

  const ShippingCard = ({}) => {
    return (
      <View
        style={[
          styles.productCard,
          Platform.OS == 'ios' && appStyles.shadowSmall,
        ]}>
        <View style={{paddingHorizontal: width(3)}}>
          <View style={styles.row}>
            {Platform.OS == 'ios' ? (
              <SmallText>Shipping Charge</SmallText>
            ) : (
              <RegularText>Shipping Charge</RegularText>
            )}
            {Platform.OS == 'ios' ? (
              <SmallText>AED 10.00</SmallText>
            ) : (
              <RegularText>AED 10.00</RegularText>
            )}
          </View>
          <Spacer height={sizes.TinyMargin} />
          <View style={styles.row}>
            {Platform.OS == 'ios' ? (
              <SmallText>Item Total</SmallText>
            ) : (
              <RegularText>Item Total</RegularText>
            )}
            {Platform.OS == 'ios' ? (
              <SmallText>AED 97.98</SmallText>
            ) : (
              <RegularText>AED 97.98</RegularText>
            )}
          </View>
          <Spacer height={sizes.TinyMargin} />
          <View style={styles.row}>
            {Platform.OS == 'ios' ? (
              <SmallText style={{color: colors.gradient1}}>
                Coupon Discount
              </SmallText>
            ) : (
              <RegularText style={{color: colors.gradient1}}>
                Coupon Discount
              </RegularText>
            )}
            {Platform.OS == 'ios' ? (
              <SmallText style={{color: colors.gradient1}}>AED 10.00</SmallText>
            ) : (
              <RegularText style={{color: colors.gradient1}}>
                AED 10.00
              </RegularText>
            )}
          </View>
          <Spacer height={sizes.TinyMargin * 1.5} />
          <LineHorizontal height={1} />
          <Spacer height={sizes.TinyMargin * 1.5} />
          <View style={styles.row}>
            {Platform.OS == 'ios' ? (
              <RegularText style={{fontFamily: fontFamily.appTextBold}}>
                Total Amount
              </RegularText>
            ) : (
              <MediumText style={{fontFamily: fontFamily.appTextBold}}>
                Total Amount
              </MediumText>
            )}
            {Platform.OS == 'ios' ? (
              <RegularText style={{fontFamily: fontFamily.appTextBold}}>
                AED 97.98
              </RegularText>
            ) : (
              <MediumText style={{fontFamily: fontFamily.appTextBold}}>
                AED 97.98
              </MediumText>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.statusBarColor}
      />
      <SafeAreaView
        style={[styles.container, {backgroundColor: colors.bgLight}]}>
        <Spacer height={Platform.OS == 'ios' ? 0 : sizes.smallMargin} />
        <HeaderSimple onBackPress={() => navigation.pop()} />
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={colors.authGradient}
          style={[
            {
              width: width(100),
              height: Platform.OS == 'ios' ? height(7) : height(9),
            },
          ]}>
          <View
            style={[
              styles.row,
              {
                flex: 1,
                backgroundColor: 'transparent',
              },
            ]}>
            <View>
              <MediumText
                style={[
                  appStyles.whiteText,
                  {fontFamily: fontFamily.appTextBold, marginLeft: width(4)},
                ]}>
                Cart
              </MediumText>
              <SmallText
                style={[{color: colors.bgLight, marginLeft: width(4)}]}>
                3 items in your cart
              </SmallText>
            </View>
            <View style={{alignItems: 'flex-end', paddingRight: width(4)}}>
              <View style={[styles.onlyRow]}>
                <Icon
                  name={'location-arrow'}
                  size={totalSize(1.3)}
                  color={colors.snow}
                  type={'font-awesome-5'}
                />
                {Platform.OS == 'ios' ? (
                  <SmallText
                    style={[
                      appStyles.whiteText,
                      {
                        marginLeft: width(2),
                      },
                    ]}>
                    Deliver to
                  </SmallText>
                ) : (
                  <RegularText
                    style={[
                      appStyles.whiteText,
                      {
                        marginLeft: width(2),
                      },
                    ]}>
                    Deliver to
                  </RegularText>
                )}
              </View>
              <Spacer height={sizes.TinyMargin * 0.7} />
              <View style={[styles.onlyRow]}>
                {Platform.OS == 'ios' ? (
                  <SmallText
                    style={[
                      {
                        marginRight: width(2),
                        color: colors.bgLight,
                      },
                    ]}>
                    Hamdan St-Zone 1 - Abu Dhabi
                  </SmallText>
                ) : (
                  <RegularText
                    style={[
                      {
                        marginRight: width(2),
                        color: colors.bgLight,
                      },
                    ]}>
                    Hamdan St-Zone 1 - Abu Dhabi
                  </RegularText>
                )}
                <TouchableCustomIcon
                  icon={appImages.down}
                  size={totalSize(1.3)}
                />
              </View>
            </View>
          </View>
        </LinearGradient>

        <KeyboardAwareScrollView>
          <View style={styles.bottomContainer}>
            <Spacer height={sizes.smallMargin} />
            <ProductCard image={appImages.product1} />
            <ProductCard image={appImages.product2} />
            <Spacer height={sizes.baseMargin} />
            <ImageBackground
              source={appImages.coupenBg}
              style={{
                width: width(94),
                height: Platform.OS == 'ios' ? height(20) : height(26),
                alignSelf: 'center',
              }}
              imageStyle={{borderRadius: 5}}>
              <View
                style={{
                  paddingHorizontal: width(5),
                  paddingVertical: width(4),
                }}>
                {Platform.OS == 'ios' ? (
                  <RegularText
                    style={[appStyles.whiteText, appStyles.textBold]}>
                    Gift Coupen / Promo Code
                  </RegularText>
                ) : (
                  <MediumText style={[appStyles.whiteText, appStyles.textBold]}>
                    Gift Coupen / Promo Code
                  </MediumText>
                )}
                <Spacer height={sizes.baseMargin} />
                <View>
                  <TextInput style={styles.textInput} />
                </View>
                <Spacer height={sizes.smallMargin} />

                <TouchableOpacity
                  style={[styles.blueButtonLight, styles.blueButtonRemaining]}>
                  {Platform.OS == 'ios' ? (
                    <TinyText style={[appStyles.whiteText, appStyles.textBold]}>
                      APPLY
                    </TinyText>
                  ) : (
                    <SmallText
                      style={[appStyles.whiteText, appStyles.textBold]}>
                      APPLY
                    </SmallText>
                  )}
                </TouchableOpacity>
                <Spacer height={sizes.smallMargin} />
                {Platform.OS == 'ios' ? (
                  <RegularText
                    style={[appStyles.whiteText, appStyles.textBold]}>
                    Congrats ...
                  </RegularText>
                ) : (
                  <MediumText style={[appStyles.whiteText, appStyles.textBold]}>
                    Congrats ...
                  </MediumText>
                )}
                {Platform.OS == 'ios' ? (
                  <RegularText style={[appStyles.whiteText]}>
                    You received 10 AED Discount
                  </RegularText>
                ) : (
                  <MediumText style={[appStyles.whiteText]}>
                    You received 10 AED Discount
                  </MediumText>
                )}
              </View>
            </ImageBackground>

            <Spacer height={sizes.smallMargin} />
            <ShippingCard />

            <Spacer height={sizes.doubleBaseMargin} />
            {Platform.OS == 'ios' ? (
              <RegularText
                style={[appStyles.textGray, {marginHorizontal: width(5)}]}>
                The price and availability of items at Dwaae.com are subject to
                change. The Cart is a temporary place to store a list of your
                items and reflects each item's most recent price.
              </RegularText>
            ) : (
              <MediumText
                style={[appStyles.textGray, {marginHorizontal: width(5)}]}>
                The price and availability of items at Dwaae.com are subject to
                change. The Cart is a temporary place to store a list of your
                items and reflects each item's most recent price.
              </MediumText>
            )}

            <Spacer height={sizes.baseMargin} />
            <ButtonColored
              text={'CHECKOUT'}
              onPress={() => navigation.navigate(routes.checkOut)}
              buttonStyle={{
                height: Platform.OS == 'ios' ? height(6) : height(7),
                width: width(92),
                alignSelf: 'center',
                borderRadius: 5,
              }}
            />
            <Spacer height={sizes.doubleBaseMargin} />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
