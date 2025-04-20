/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { RetailTransactionPaymentLinesApi } from './RetailTransactionPaymentLinesApi';
import { NoYes } from './NoYes';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailTenderVoidStatus } from './RetailTenderVoidStatus';

/**
 * This class represents the entity "RetailTransactionPaymentLines" of service "d365_metadata".
 */
export class RetailTransactionPaymentLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionPaymentLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionPaymentLines.
   */
  static override _entityName = 'RetailTransactionPaymentLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionPaymentLines entity.
   */
  static _keys = [
    'dataAreaId',
    'Terminal',
    'TransactionNumber',
    'LineNumber',
    'OperatingUnitNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Number.
   * @nullable
   */
  declare cardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Prepayment.
   * @nullable
   */
  declare isPrepayment?: NoYes | null;
  /**
   * Amount In Accounting Currency.
   */
  declare amountInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Linked Payment Store.
   * @nullable
   */
  declare linkedPaymentStore?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked Payment Terminal.
   * @nullable
   */
  declare linkedPaymentTerminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Is Change Line.
   * @nullable
   */
  declare isChangeLine?: NoYes | null;
  /**
   * Payment Capture Token.
   * @nullable
   */
  declare paymentCaptureToken?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Refundable Amount.
   */
  declare refundableAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked Payment Line Number.
   */
  declare linkedPaymentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate In Tendered Currency.
   */
  declare exchangeRateInTenderedCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Linked Payment Transaction Number.
   * @nullable
   */
  declare linkedPaymentTransactionNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Card Type Id.
   * @nullable
   */
  declare cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Linked Refund.
   * @nullable
   */
  declare isLinkedRefund?: NoYes | null;
  /**
   * Loyalty Card Id.
   * @nullable
   */
  declare loyaltyCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Tendered.
   */
  declare amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount In Tendered Currency.
   */
  declare amountInTenderedCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tender Type.
   * @nullable
   */
  declare tenderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate In Accounting Currency.
   */
  declare exchangeRateInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Void Status.
   * @nullable
   */
  declare voidStatus?: RetailTenderVoidStatus | null;
  /**
   * Amount Tendered Adjustment.
   */
  declare amountTenderedAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Voucher Id.
   * @nullable
   */
  declare creditVoucherId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked Payment Currency.
   * @nullable
   */
  declare linkedPaymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Id.
   * @nullable
   */
  declare giftCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailTransactionPaymentLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionPaymentLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  cardNumber?: DeserializedType<T, 'Edm.String'> | null;
  isPrepayment?: NoYes | null;
  amountInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  linkedPaymentStore?: DeserializedType<T, 'Edm.String'> | null;
  linkedPaymentTerminal?: DeserializedType<T, 'Edm.String'> | null;
  transactionStatus?: RetailEntryStatus | null;
  isChangeLine?: NoYes | null;
  paymentCaptureToken?: DeserializedType<T, 'Edm.String'> | null;
  refundableAmount: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  linkedPaymentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateInTenderedCurrency: DeserializedType<T, 'Edm.Decimal'>;
  linkedPaymentTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  isLinkedRefund?: NoYes | null;
  loyaltyCardId?: DeserializedType<T, 'Edm.String'> | null;
  amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  amountInTenderedCurrency: DeserializedType<T, 'Edm.Decimal'>;
  tenderType?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  voidStatus?: RetailTenderVoidStatus | null;
  amountTenderedAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  creditVoucherId?: DeserializedType<T, 'Edm.String'> | null;
  linkedPaymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  giftCardId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
}
