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
import type { RetailTransactionPaymentLinesV2Api } from './RetailTransactionPaymentLinesV2Api';
import { RetailEntryStatus } from './RetailEntryStatus';
import { NoYes } from './NoYes';
import { RetailTenderVoidStatus } from './RetailTenderVoidStatus';
import { RetailTenderFunction } from './RetailTenderFunction';

/**
 * This class represents the entity "RetailTransactionPaymentLinesV2" of service "d365_metadata".
 */
export class RetailTransactionPaymentLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionPaymentLinesV2Type<T>
{
  /**
   * Technical entity name for RetailTransactionPaymentLinesV2.
   */
  static override _entityName = 'RetailTransactionPaymentLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionPaymentLinesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'Terminal',
    'TransactionNumber',
    'LineNumber',
    'OperatingUnitNumber',
    'Store'
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
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Gift Card Id.
   * @nullable
   */
  declare giftCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate In Tendered Currency.
   */
  declare exchangeRateInTenderedCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Payment Captured.
   * @nullable
   */
  declare isPaymentCaptured?: NoYes | null;
  /**
   * Linked Payment Transaction Number.
   * @nullable
   */
  declare linkedPaymentTransactionNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Amount In Tendered Currency.
   */
  declare amountInTenderedCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Linked Refund.
   * @nullable
   */
  declare isLinkedRefund?: NoYes | null;
  /**
   * Amount Tendered.
   */
  declare amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Prepayment.
   * @nullable
   */
  declare isPrepayment?: NoYes | null;
  /**
   * Amount Tendered Adjustment.
   */
  declare amountTenderedAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate In Accounting Currency.
   */
  declare exchangeRateInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked Payment Store.
   * @nullable
   */
  declare linkedPaymentStore?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Type Id.
   * @nullable
   */
  declare cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Voucher Id.
   * @nullable
   */
  declare creditVoucherId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Change Line.
   * @nullable
   */
  declare isChangeLine?: NoYes | null;
  /**
   * Linked Payment Currency.
   * @nullable
   */
  declare linkedPaymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Number.
   * @nullable
   */
  declare cardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tender Type.
   * @nullable
   */
  declare tenderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked Payment Terminal.
   * @nullable
   */
  declare linkedPaymentTerminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Refundable Amount.
   */
  declare refundableAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount In Accounting Currency.
   */
  declare amountInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Loyalty Card Id.
   * @nullable
   */
  declare loyaltyCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Linked Payment Line Number.
   */
  declare linkedPaymentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Void Status.
   * @nullable
   */
  declare voidStatus?: RetailTenderVoidStatus | null;
  /**
   * Function.
   * @nullable
   */
  declare function?: RetailTenderFunction | null;
  /**
   * Payment Capture Token.
   * @nullable
   */
  declare paymentCaptureToken?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionPaymentLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionPaymentLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  transactionStatus?: RetailEntryStatus | null;
  giftCardId?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateInTenderedCurrency: DeserializedType<T, 'Edm.Decimal'>;
  isPaymentCaptured?: NoYes | null;
  linkedPaymentTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  amountInTenderedCurrency: DeserializedType<T, 'Edm.Decimal'>;
  isLinkedRefund?: NoYes | null;
  amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  isPrepayment?: NoYes | null;
  amountTenderedAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  linkedPaymentStore?: DeserializedType<T, 'Edm.String'> | null;
  cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  creditVoucherId?: DeserializedType<T, 'Edm.String'> | null;
  isChangeLine?: NoYes | null;
  linkedPaymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  cardNumber?: DeserializedType<T, 'Edm.String'> | null;
  tenderType?: DeserializedType<T, 'Edm.String'> | null;
  linkedPaymentTerminal?: DeserializedType<T, 'Edm.String'> | null;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  refundableAmount: DeserializedType<T, 'Edm.Decimal'>;
  amountInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  loyaltyCardId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  linkedPaymentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  voidStatus?: RetailTenderVoidStatus | null;
  function?: RetailTenderFunction | null;
  paymentCaptureToken?: DeserializedType<T, 'Edm.String'> | null;
}
