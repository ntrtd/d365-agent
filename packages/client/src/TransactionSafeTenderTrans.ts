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
import type { TransactionSafeTenderTransApi } from './TransactionSafeTenderTransApi';
import { NoYes } from './NoYes';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailSafeStatusTypeBase } from './RetailSafeStatusTypeBase';

/**
 * This class represents the entity "TransactionSafeTenderTrans" of service "d365_metadata".
 */
export class TransactionSafeTenderTrans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionSafeTenderTransType<T>
{
  /**
   * Technical entity name for TransactionSafeTenderTrans.
   */
  static override _entityName = 'TransactionSafeTenderTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionSafeTenderTrans entity.
   */
  static _keys = [
    'dataAreaId',
    'RetailChannelId',
    'StoreNumber',
    'Terminal',
    'TransactionNumber',
    'StatementId',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Statement Id.
   */
  declare statementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shift.
   * @nullable
   */
  declare shift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Tendered.
   */
  declare amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Mstpos.
   */
  declare amountMstpos: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Card Type Id.
   * @nullable
   */
  declare cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tender Type.
   * @nullable
   */
  declare tenderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Replicated.
   * @nullable
   */
  declare replicated?: NoYes | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Change Line.
   * @nullable
   */
  declare changeLine?: NoYes | null;
  /**
   * Card Or Account.
   * @nullable
   */
  declare cardOrAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Currency.
   */
  declare amountCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Message Number.
   */
  declare messageNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount Tendered Pos.
   */
  declare amountTenderedPos: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Safe Status Type.
   * @nullable
   */
  declare safeStatusType?: RetailSafeStatusTypeBase | null;
  /**
   * Managers Key Live.
   * @nullable
   */
  declare managersKeyLive?: NoYes | null;
  /**
   * Transaction Time.
   */
  declare transactionTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Counter.
   */
  declare counter: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Currency Pos.
   */
  declare amountCurrencyPos: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Mst.
   */
  declare exchangeRateMst: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: TransactionSafeTenderTransApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionSafeTenderTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  statementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  shift?: DeserializedType<T, 'Edm.String'> | null;
  amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  amountMstpos: DeserializedType<T, 'Edm.Decimal'>;
  cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  tenderType?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  replicated?: NoYes | null;
  transactionStatus?: RetailEntryStatus | null;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  changeLine?: NoYes | null;
  cardOrAccount?: DeserializedType<T, 'Edm.String'> | null;
  amountCurrency: DeserializedType<T, 'Edm.Decimal'>;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  messageNumber: DeserializedType<T, 'Edm.Int32'>;
  amountTenderedPos: DeserializedType<T, 'Edm.Decimal'>;
  safeStatusType?: RetailSafeStatusTypeBase | null;
  managersKeyLive?: NoYes | null;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
  counter: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  amountCurrencyPos: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateMst: DeserializedType<T, 'Edm.Decimal'>;
}
