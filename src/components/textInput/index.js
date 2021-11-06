import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Animated,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {colors, appStyles, sizes, fontSize, fontFamily} from '../../services';
import {ComponentWrapper, AbsoluteWrapper, Wrapper} from '../wrappers';
import {Spacer} from '../spacers';
import {IconWithText, CustomIcon} from '../icons';
import {InputTitle} from '../text';
const TextInputColored = ({
  iconName,
  iconType,
  placeholder,
  onFocus,
  onBlur,
  onChangeText,
  secureTextEntry,
  value,
  containerStyle,
  customIconLeft,
  customRightIcon,
  iconSizeLeft,
  iconSizeRight,
  iconStyleLeft,
  customVectorIconLeft,
  fieldStyle,
  multiline,
}) => {
  return (
    <View
      style={[
        appStyles.inputContainerColored,
        {
          borderWidth: 0.4,
          borderColor: colors.borderColor,
          borderRadius: totalSize(10),
          backgroundColor: colors.snow,
        },
        appStyles.shadowSmall,
        containerStyle,
      ]}>
      {customIconLeft ? (
        <View style={{flex: 2, alignItems: 'center'}}>
          <CustomIcon
            icon={customIconLeft}
            size={iconSizeLeft ? iconSizeLeft : sizes.icons.small}
            // color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
            containerStyle={iconStyleLeft}
          />
          {/* <Icon
            name={iconName}
            type={iconType}
            size={totalSize(2.5)}
            color={colors.appTextColor5}
            iconStyle={{}}
          /> */}
        </View>
      ) : customVectorIconLeft ? (
        <View style={{flex: 2, alignItems: 'center'}}>
          <Icon
            name={customVectorIconLeft}
            type={iconType}
            size={totalSize(2.8)}
            color={colors.appTextColor5}
            iconStyle={{}}
          />
        </View>
      ) : null}
      <View style={{flex: customRightIcon ? 6 : 8}}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          style={[
            appStyles.inputField,
            {width: null, height: Platform.OS == 'ios' ? height(6) : height(8)},
            fieldStyle,
          ]}
          multiline={multiline}
        />
      </View>
      {customRightIcon ? (
        <View style={{flex: 2, alignItems: 'center'}}>
          <CustomIcon
            icon={customRightIcon}
            size={iconSizeRight ? iconSizeRight : sizes.icons.small}
            // color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
            containerStyle={iconStyleLeft}
          />
          {/* <Icon
            name={iconName}
            type={iconType}
            size={totalSize(2.5)}
            color={colors.appTextColor5}
            iconStyle={{}}
          /> */}
        </View>
      ) : null}
    </View>
  );
};
// const TextInputBordered = ({iconName, iconType, placeholder, placeholderTextColor, onFocus, onChangeText, secureTextEntry, value, containerStyle, inputStyle}) => {
//     return (
//         <View style={[appStyles.inputContainerBorderd, {
//             borderRadius: 5,
//             borderWidth: 1,
//             borderColor: colors.appColor1
//         }, containerStyle]}>
//             <View style={{ flex: 2, alignItems: 'center' }}>
//                 <Icon name={iconName} type={iconType} size={totalSize(2.5)} color={ colors.appColor1 } iconStyle={{}} />
//             </View>
//             <View style={{ flex: 8 }}>
//                 <TextInput
//                     onChangeText={onChangeText}
//                     value={value}
//                     placeholder={placeholder}
//                     onFocus={onFocus}
//                     placeholderTextColor={placeholderTextColor}
//                     secureTextEntry={secureTextEntry}
//                     style={[appStyles.inputField, { width: null, height: height(6) }, inputStyle]}
//                 />
//             </View>
//         </View>
//     );
// }
const TextInputBordered = ({
  keyboardType,
  returnKeyType,
  left,
  right,
  error,
  editable,
  titleStyle,
  title,
  maxLength,
  customIconLeft,
  iconNameLeft,
  multiline,
  iconNameRight,
  placeholderTextColor,
  iconTypeLeft,
  iconTypeRight,
  iconSizeLeft,
  iconSizeRight,
  iconColorLeft,
  iconColorRight,
  iconStyleLeft,
  iconStyleRight,
  onPressIconLeft,
  onPressIconRight,
  placeholder,
  onFocus,
  onBlur,
  onChangeText,
  secureTextEntry,
  value,
  containerStyle,
  inputContainerStyle,
  inputStyle,
}) => {
  const [titleMarginBottom, setTitleMarginBottom] = useState(
    new Animated.Value(0),
  );
  const [titleSize] = useState(new Animated.Value(fontSize.regular));
  const FocusedTitleMarginBottom =
    Platform.OS === 'ios' ? height(3) : height(3);
  //const [titleMarginBottom, setTitleMarginBottom] = useState(0)
  //const [titleSize, setTitleSize] = useState(fontSize.input)
  const moveTitleUp = () => {
    Animated.spring(titleMarginBottom, {
      toValue: height(3),
      duration: 250,
      speed: 50,
      useNativeDriver: false,
    }).start();
    // Animated.spring(titleSize, {
    //     toValue: fontSize.small,
    //     duration: 250,
    //    // useNativeDriver: true
    // }).start();
  };
  const moveTitleDown = () => {
    Animated.spring(titleMarginBottom, {
      toValue: 0,
      duration: 250,
      speed: 50,
      useNativeDriver: false,
    }).start();
    // Animated.spring(titleSize, {
    //     toValue: fontSize.regular,
    //     duration: 250,
    //   //  useNativeDriver: true
    // }).start();
  };
  const onFocusInput = () => {
    moveTitleUp();
    // HelpingMethods.handleAnimation()
    // setTitleMarginBottom(FocusedTitleMarginBottom)
    // setTitleSize(fontSize.regular)
  };
  const onBlurInput = () => {
    moveTitleDown();
    // HelpingMethods.handleAnimation()
    // setTitleMarginBottom(0)
    // setTitleSize(fontSize.inpu)
  };
  return (
    <Wrapper>
      <View
        style={[
          appStyles.inputContainerBorderd,
          {
            borderRadius: sizes.inputRadius,
            borderWidth: 0.5,
            borderColor: colors.appTextColor4,
          },
          containerStyle,
        ]}>
        {left ? (
          left
        ) : customIconLeft ? (
          <View style={{flex: 1.5, alignItems: 'flex-end'}}>
            <CustomIcon
              icon={customIconLeft}
              size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
              color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
              containerStyle={iconStyleLeft}
            />
          </View>
        ) : iconNameLeft ? (
          <View style={{flex: 1.5, alignItems: 'flex-end'}}>
            <Icon
              name={iconNameLeft}
              type={iconTypeLeft}
              size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
              color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
              iconStyle={iconStyleLeft}
              onPress={onPressIconLeft}
            />
          </View>
        ) : null}
        <View
          style={[
            {
              flex: 7,
              justifyContent: 'center',
              marginHorizontal: sizes.marginHorizontal,
            },
            inputContainerStyle,
          ]}>
          <AbsoluteWrapper style={{top: 0, bottom: 0, ...appStyles.center}}>
            <Wrapper
              style={{
                marginBottom: value
                  ? FocusedTitleMarginBottom
                  : titleMarginBottom,
              }}>
              <InputTitle style={titleStyle}>{title}</InputTitle>
            </Wrapper>
          </AbsoluteWrapper>
          <TextInput
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            onFocus={() => {
              onFocusInput();
              onFocus ? onFocus() : null;
            }}
            onBlur={() => {
              onBlurInput(), onBlur ? onBlur() : null;
            }}
            editable={editable}
            underlineColorAndroid="transparent"
            maxLength={maxLength}
            multiline={multiline}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : colors.appTextColor4
            }
            secureTextEntry={secureTextEntry}
            style={[
              appStyles.inputField,
              {
                width: null,
                height: height(8),
                paddingTop: Platform.OS === 'ios' ? height(1.5) : height(2.5),
                fontFamily: fontFamily.appTextRegular,
                paddingHorizontal: 0,
              },
              inputStyle,
            ]}
          />
        </View>

        {right ? (
          right
        ) : iconNameRight ? (
          <View style={{flex: 1.5, alignItems: 'flex-start'}}>
            <Icon
              name={iconNameRight}
              type={iconTypeRight}
              size={iconSizeRight ? iconSizeRight : sizes.icons.medium}
              color={iconColorRight ? iconColorRight : colors.appTextColor4}
              iconStyle={iconStyleRight}
              onPress={onPressIconRight}
            />
          </View>
        ) : null}
      </View>
      {error ? (
        <ComponentWrapper style={{marginLeft: width(7.5)}} animation="shake">
          <Spacer height={sizes.TinyMargin} />
          <IconWithText
            iconName="alert-circle-outline"
            //title="New"
            text={error}
            tintColor={colors.error}
            iconSize={sizes.icons.small}
            textStyle={[{fontSize: fontSize.small}]}
          />
        </ComponentWrapper>
      ) : null}
    </Wrapper>
  );
};
const SearchBarHome = ({
  keyboardType,
  returnKeyType,
  left,
  right,
  error,
  editable,
  titleStyle,
  title,
  maxLength,
  customIconLeft,
  customIconRight,
  iconNameLeft,
  multiline,
  iconNameRight,
  placeholderTextColor,
  iconTypeLeft,
  iconTypeRight,
  iconSizeLeft,
  iconSizeRight,
  iconColorLeft,
  iconColorRight,
  iconStyleLeft,
  iconStyleRight,
  onPressIconLeft,
  onPressIconRight,
  placeholder,
  onFocus,
  onBlur,
  onChangeText,
  secureTextEntry,
  value,
  containerStyle,
  inputContainerStyle,
  inputStyle,
}) => {
  const [titleMarginBottom, setTitleMarginBottom] = useState(
    new Animated.Value(0),
  );
  const [titleSize] = useState(new Animated.Value(fontSize.regular));
  const FocusedTitleMarginBottom =
    Platform.OS === 'ios' ? height(3) : height(3);
  //const [titleMarginBottom, setTitleMarginBottom] = useState(0)
  //const [titleSize, setTitleSize] = useState(fontSize.input)
  const moveTitleUp = () => {
    Animated.spring(titleMarginBottom, {
      toValue: height(3),
      duration: 250,
      speed: 50,
      useNativeDriver: false,
    }).start();
    // Animated.spring(titleSize, {
    //     toValue: fontSize.small,
    //     duration: 250,
    //    // useNativeDriver: true
    // }).start();
  };
  const moveTitleDown = () => {
    Animated.spring(titleMarginBottom, {
      toValue: 0,
      duration: 250,
      speed: 50,
      useNativeDriver: false,
    }).start();
    // Animated.spring(titleSize, {
    //     toValue: fontSize.regular,
    //     duration: 250,
    //   //  useNativeDriver: true
    // }).start();
  };
  const onFocusInput = () => {
    moveTitleUp();
    // HelpingMethods.handleAnimation()
    // setTitleMarginBottom(FocusedTitleMarginBottom)
    // setTitleSize(fontSize.regular)
  };
  const onBlurInput = () => {
    moveTitleDown();
    // HelpingMethods.handleAnimation()
    // setTitleMarginBottom(0)
    // setTitleSize(fontSize.inpu)
  };
  return (
    <Wrapper>
      <View
        style={[
          appStyles.homeSearchInput,
          {
            borderRadius: sizes.inputRadius,
            // borderWidth: 0.5,
            // borderColor: colors.appTextColor4,
          },
          containerStyle,
        ]}>
        {left ? (
          left
        ) : customIconLeft ? (
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <CustomIcon
              icon={customIconLeft}
              size={iconSizeLeft ? iconSizeLeft : sizes.icons.small}
              // color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
              containerStyle={iconStyleLeft}
            />
          </View>
        ) : iconNameLeft ? (
          <View style={{flex: 1.5, alignItems: 'flex-end'}}>
            <Icon
              name={iconNameLeft}
              type={iconTypeLeft}
              size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
              color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
              iconStyle={iconStyleLeft}
              onPress={onPressIconLeft}
            />
          </View>
        ) : null}
        <View
          style={[
            {
              flex: 9,
              justifyContent: 'center',
              marginHorizontal: sizes.marginHorizontal,
            },
            inputContainerStyle,
          ]}>
          {/* <AbsoluteWrapper style={{top: 0, bottom: 0, ...appStyles.center}}>
            <Wrapper
              style={{
                marginBottom: value
                  ? FocusedTitleMarginBottom
                  : titleMarginBottom,
              }}>
              <InputTitle style={titleStyle}>{title}</InputTitle>
            </Wrapper>
          </AbsoluteWrapper> */}
          <TextInput
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            onFocus={() => {
              onFocusInput();
              onFocus ? onFocus() : null;
            }}
            onBlur={() => {
              onBlurInput(), onBlur ? onBlur() : null;
            }}
            editable={editable}
            underlineColorAndroid="transparent"
            maxLength={maxLength}
            multiline={multiline}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : colors.textGrey1
            }
            secureTextEntry={secureTextEntry}
            style={[
              appStyles.inputField,
              {
                width: null,
                fontSize:
                  Platform.OS == 'ios'
                    ? sizes.fontSize.smaller
                    : sizes.fontSize.smallMedium,
                height: Platform.OS == 'ios' ? height(5.5) : height(6),
                // paddingTop: Platform.OS === 'ios' ? height(1.5) : height(2.5),
                marginLeft: 0,
                fontFamily: fontFamily.appTextRegular,
                paddingHorizontal: 0,
              },
              inputStyle,
            ]}
          />
        </View>

        {customIconRight ? (
          <View style={{flex: 1.5, alignItems: 'flex-start'}}>
            <CustomIcon
              icon={customIconRight}
              size={iconSizeLeft ? iconSizeLeft : sizes.icons.small}
              // color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
              containerStyle={iconStyleLeft}
            />
          </View>
        ) : null}
      </View>
    </Wrapper>
  );
};

export {TextInputColored, TextInputBordered, SearchBarHome};
