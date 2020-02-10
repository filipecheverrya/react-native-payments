// @flow
import { NativeModules, Platform } from 'react-native';

const { RNPayments } = NativeModules;
import _PaymentRequest from './PaymentRequest';
import { PKPaymentButton } from './PKPaymentButton';

export const ApplePayButton = PKPaymentButton;
export const PaymentRequest = Platform.OS === 'android' ? RNPayments : _PaymentRequest;
