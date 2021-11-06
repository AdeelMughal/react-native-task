import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ViewPropTypes,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {colors, sizes, appStyles, appImages} from '../../services';
import {
  CardWrapper,
  RowWrapper,
  ComponentWrapper,
  Wrapper,
  AbsoluteWrapper,
} from '../wrappers';
import {Spacer} from '../spacers';
import {TinyTitle, RegularText, SmallText} from '../text';
import {TextInputColored, TextInputBordered} from '../textInput';
import Modal from 'react-native-modal';
import {CheckBoxPrimary} from '../checkBoxs';
import {ButtonColored, ButtonGradiantColored, ButtonBordered} from '../buttons';
import {SearchIcon, CloseIcon, TouchableCustomIcon} from '../icons';
import {styles} from './styles';
import {LineHorizontal} from '../lines';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';

export const SwipableModal = ({
  children,
  title,
  isVisible,
  toggleModal,
  footerFlex,
  headerFlex,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={toggleModal}
      style={{margin: 0}}
      // backdropOpacity={0}
      onBackdropPress={toggleModal}>
      <Wrapper flex={1}>
        <Wrapper flex={headerFlex ? headerFlex : 1.5} />
        <Wrapper
          flex={footerFlex ? footerFlex : 8.5}
          style={[styles.swipableModalFooter]}>
          {children}
          <AbsoluteWrapper style={[styles.barContainer]}>
            <Wrapper style={[appStyles.center]}>
              <TouchableOpacity onPress={toggleModal}>
                <LineHorizontal
                  height={4}
                  width={width(15)}
                  style={{borderRadius: 5}}
                  color={colors.appBgColor3}
                />
              </TouchableOpacity>
              <Spacer height={sizes.baseMargin} />
              <TinyTitle>{title}</TinyTitle>
            </Wrapper>
          </AbsoluteWrapper>
          <AbsoluteWrapper
            style={[
              {top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal},
            ]}>
            <CloseIcon onPress={toggleModal} />
          </AbsoluteWrapper>
        </Wrapper>
      </Wrapper>
    </Modal>
  );
};

export const AddValueModal = ({
  children,
  placeholder,
  title,
  value,
  onChangeText,
  isVisible,
  toggleModal,
  buttonText,
  onPressButton,
  autoFocus,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      //swipeDirection="down"
      //onSwipeComplete={toggleModal}
      style={{flex: 1, margin: 0, justifyContent: 'center'}}
      onBackdropPress={toggleModal}
      backdropOpacity={0.5}>
      <CardWrapper style={[styles.enterValueModalPrimaryCard]}>
        <TinyTitle>{title ? title : 'Title'}</TinyTitle>
        <Spacer height={sizes.baseMargin} />
        <TextInputBordered
          placeholder={placeholder}
          value={value}
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          inputContainerStyle={{marginHorizontal: 0}}
        />
        <Spacer height={sizes.baseMargin} />
        <ButtonColored
          text={buttonText ? buttonText : 'ADD'}
          onPress={onPressButton}
          buttonStyle={{marginHorizontal: 0}}
        />
        {children}
      </CardWrapper>
    </Modal>
  );
};

export const UploadEmiratesIdModal = ({
  children,
  placeholder,
  title,
  value,
  onChangeText,
  isVisible,
  toggleModal,
  buttonText,
  onPressButton,
  autoFocus,
  onPressFront,
  onPressBack,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      //swipeDirection="down"
      //onSwipeComplete={toggleModal}
      style={{flex: 1, margin: 0, justifyContent: 'center'}}
      onBackdropPress={toggleModal}
      backdropOpacity={0.5}>
      <CardWrapper style={[styles.emiratesCardContainer]}>
        <View style={[styles.row, styles.spaceBetween]}>
          <TinyTitle>{title ? title : 'Add Emirates ID'}</TinyTitle>
          <TouchableCustomIcon
            onPress={toggleModal}
            icon={appImages.crossIcon}
            size={totalSize(3)}
          />
        </View>
        <Spacer height={sizes.baseMargin * 1.8} />
        <View>
          <TextInputColored
            containerStyle={[styles.inputfieldStyle]}
            fieldStyle={[styles.fieldStyle]}
            placeholder={'Emirates ID Name'}
          />
        </View>
        <Spacer height={sizes.baseMargin * 1.8} />
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              styles.cameraContainer,
              {
                marginRight: width(2),
              },
            ]}>
            <TouchableCustomIcon
              icon={appImages.camera}
              onPress={onPressFront}
            />
            <SmallText style={{color: colors.textGrey, marginTop: height(2)}}>
              Front Side
            </SmallText>
          </View>
          <View
            style={[
              styles.cameraContainer,
              {
                marginLeft: width(2),
              },
            ]}>
            <TouchableCustomIcon
              icon={appImages.camera}
              onPress={onPressBack}
            />
            <SmallText style={{color: colors.textGrey, marginTop: height(2)}}>
              Back Side
            </SmallText>
          </View>
        </View>
        <Spacer height={sizes.baseMargin} />
        <View>
          <ButtonColored
            text={buttonText ? buttonText : 'SAVE'}
            onPress={onPressButton}
            buttonStyle={{
              marginHorizontal: 0,
              height: Platform.OS == 'ios' ? height(6) : height(7),
              borderRadius: 5,
            }}
          />
        </View>
      </CardWrapper>
    </Modal>
  );
};

export const FilterProductsModal = ({
  children,
  placeholder,
  title,
  value,
  onChangeText,
  isVisible,
  toggleModal,
  buttonText,
  onPressButton,
  autoFocus,
}) => {
  var radio_props = [
    {id: 0, label: 'Alphabetically: A to Z'},
    {id: 1, label: 'Alphabetically: Z to A'},
    {id: 2, label: 'Price: Low to High'},
    {id: 3, label: 'Price: High to Low'},
    {id: 4, label: 'Customer Review'},
  ];

  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <Modal
      isVisible={isVisible}
      //swipeDirection="down"
      //onSwipeComplete={toggleModal}
      style={{flex: 1, margin: 0, justifyContent: 'center'}}
      onBackdropPress={toggleModal}
      backdropOpacity={0.5}>
      <CardWrapper style={[styles.enterValueModalPrimaryCard]}>
        <Spacer height={sizes.baseMargin} />
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={value => {
            setSelectedOption(value);
          }}
          selectedLabelColor={colors.statusBarColor}
          selectedButtonColor={colors.statusBarColor}
          buttonColor={colors.textGrey}
          buttonSize={totalSize(1)}
        />
        <Spacer height={sizes.smallMargin} />
        {children}
      </CardWrapper>
    </Modal>
  );
};
export const DropdownPickerModal = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  containerStyle,
  disableBorderRadius,
  zIndex,
  zIndexInverse,
}) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={
        containerStyle
          ? containerStyle
          : {
              marginLeft: width(4),
              width: width(40),
            }
      }
      disableBorderRadius={disableBorderRadius}
      zIndex={zIndex}
      zIndexInverse={zIndexInverse}
    />
  );
};
