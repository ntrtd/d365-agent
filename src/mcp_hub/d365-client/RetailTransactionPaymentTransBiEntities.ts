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
import type { RetailTransactionPaymentTransBiEntitiesApi } from './RetailTransactionPaymentTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { RetailEntryStatus } from './RetailEntryStatus';
import { CreditCardProcessorStatus } from './CreditCardProcessorStatus';
import { RetailTenderVoidStatus } from './RetailTenderVoidStatus';

/**
 * This class represents the entity "RetailTransactionPaymentTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionPaymentTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionPaymentTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionPaymentTransBiEntities.
   */
  static override _entityName = 'RetailTransactionPaymentTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionPaymentTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'store',
    'terminal',
    'transactionId',
    'lineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Capture Failed.
   * @nullable
   */
  declare isCaptureFailed?: NoYes | null;
  /**
   * Authorized Amount.
   */
  declare authorizedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Sig Cap Data.
   * @nullable
   */
  declare sigCapData?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate Mst.
   */
  declare exchRateMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card Id.
   * @nullable
   */
  declare giftCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked Payment Terminal Id.
   * @nullable
   */
  declare linkedPaymentTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Payment Captured.
   * @nullable
   */
  declare isPaymentCaptured?: NoYes | null;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Processor Status.
   * @nullable
   */
  declare creditCardProcessorStatus?: CreditCardProcessorStatus | null;
  /**
   * Is Payment Data Archived.
   * @nullable
   */
  declare isPaymentDataArchived?: NoYes | null;
  /**
   * Message Num.
   */
  declare messageNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Voucher Id.
   * @nullable
   */
  declare creditVoucherId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Linked Refund.
   * @nullable
   */
  declare isLinkedRefund?: NoYes | null;
  /**
   * Is Payment Data Compressed.
   * @nullable
   */
  declare isPaymentDataCompressed?: NoYes | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Capture Token.
   * @nullable
   */
  declare paymentCaptureToken?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replicated.
   * @nullable
   */
  declare replicated?: NoYes | null;
  /**
   * Authentication Code.
   * @nullable
   */
  declare authenticationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counter.
   */
  declare counter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Prepayment.
   * @nullable
   */
  declare isPrepayment?: NoYes | null;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Linked Payment Store.
   * @nullable
   */
  declare linkedPaymentStore?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Refundable Amount.
   */
  declare refundableAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Customer Account Floor Limit Used.
   * @nullable
   */
  declare isCustomerAccountFloorLimitUsed?: NoYes | null;
  /**
   * Payment Authorization.
   * @nullable
   */
  declare paymentAuthorization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Card Token.
   * @nullable
   */
  declare paymentCardToken?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift.
   * @nullable
   */
  declare shift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Doc Id Ru.
   * @nullable
   */
  declare cashDocIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manager Key Live.
   * @nullable
   */
  declare managerKeyLive?: NoYes | null;
  /**
   * Linked Payment Currency.
   * @nullable
   */
  declare linkedPaymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Or Account.
   * @nullable
   */
  declare cardOrAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tender Type.
   * @nullable
   */
  declare tenderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Tendered.
   */
  declare amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Loyalty Card Id.
   * @nullable
   */
  declare loyaltyCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Change Line.
   * @nullable
   */
  declare changeLine?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Linked Payment Transaction Id.
   * @nullable
   */
  declare linkedPaymentTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Payment Account Id.
   * @nullable
   */
  declare cardPaymentAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Void Status.
   * @nullable
   */
  declare voidStatus?: RetailTenderVoidStatus | null;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Card Type Id.
   * @nullable
   */
  declare cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Time.
   */
  declare transTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Linked Payment Line Number.
   */
  declare linkedPaymentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionPaymentTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionPaymentTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  isCaptureFailed?: NoYes | null;
  authorizedAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionStatus?: RetailEntryStatus | null;
  sigCapData?: DeserializedType<T, 'Edm.String'> | null;
  exchRateMst: DeserializedType<T, 'Edm.Decimal'>;
  giftCardId?: DeserializedType<T, 'Edm.String'> | null;
  linkedPaymentTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  isPaymentCaptured?: NoYes | null;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  creditCardProcessorStatus?: CreditCardProcessorStatus | null;
  isPaymentDataArchived?: NoYes | null;
  messageNum: DeserializedType<T, 'Edm.Int32'>;
  creditVoucherId?: DeserializedType<T, 'Edm.String'> | null;
  isLinkedRefund?: NoYes | null;
  isPaymentDataCompressed?: NoYes | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentCaptureToken?: DeserializedType<T, 'Edm.String'> | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  replicated?: NoYes | null;
  authenticationCode?: DeserializedType<T, 'Edm.String'> | null;
  counter: DeserializedType<T, 'Edm.Int32'>;
  isPrepayment?: NoYes | null;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  linkedPaymentStore?: DeserializedType<T, 'Edm.String'> | null;
  refundableAmount: DeserializedType<T, 'Edm.Decimal'>;
  isCustomerAccountFloorLimitUsed?: NoYes | null;
  paymentAuthorization?: DeserializedType<T, 'Edm.String'> | null;
  paymentCardToken?: DeserializedType<T, 'Edm.String'> | null;
  shift?: DeserializedType<T, 'Edm.String'> | null;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  cashDocIdRu?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  managerKeyLive?: NoYes | null;
  linkedPaymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  cardOrAccount?: DeserializedType<T, 'Edm.String'> | null;
  tenderType?: DeserializedType<T, 'Edm.String'> | null;
  amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  loyaltyCardId?: DeserializedType<T, 'Edm.String'> | null;
  changeLine?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  linkedPaymentTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  cardPaymentAccountId?: DeserializedType<T, 'Edm.String'> | null;
  voidStatus?: RetailTenderVoidStatus | null;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  transTime: DeserializedType<T, 'Edm.Int32'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  linkedPaymentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
}
