// @flow
import { NativeModules, Platform } from 'react-native';

const { RNGooglePay } = NativeModules;
import _PaymentRequest from './PaymentRequest';
import { PKPaymentButton } from './PKPaymentButton';

export const ApplePayButton = PKPaymentButton;
export const PaymentRequest = Platform.OS === 'android' ? RNGooglePay : _PaymentRequest;
