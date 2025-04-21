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
import type { RetailTransactionAuditableBankDropApi } from './RetailTransactionAuditableBankDropApi';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailBankedStatusTypeBase } from './RetailBankedStatusTypeBase';

/**
 * This class represents the entity "RetailTransactionAuditableBankDrop" of service "d365_metadata".
 */
export class RetailTransactionAuditableBankDrop<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditableBankDropType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditableBankDrop.
   */
  static override _entityName = 'RetailTransactionAuditableBankDrop';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditableBankDrop entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'StoreNumber',
    'RegisterNumber',
    'TransactionId',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Register Number.
   */
  declare registerNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company Currency Exchange Rate.
   */
  declare companyCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Currency Exchange Rate.
   */
  declare foreignCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shift.
   * @nullable
   */
  declare shift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount In Company Currency.
   */
  declare amountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bag Number.
   * @nullable
   */
  declare bagNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount In Channel Currency.
   */
  declare amountInChannelCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Store Number.
   * @nullable
   */
  declare headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method.
   * @nullable
   */
  declare paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Statement Number.
   * @nullable
   */
  declare statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailBankedStatusTypeBase | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Header Statement Number.
   * @nullable
   */
  declare headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operator Id.
   * @nullable
   */
  declare operatorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Time.
   */
  declare transactionTime: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailTransactionAuditableBankDropApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditableBankDropType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  registerNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  transactionStatus?: RetailEntryStatus | null;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  companyCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  foreignCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  shift?: DeserializedType<T, 'Edm.String'> | null;
  amountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
  bagNumber?: DeserializedType<T, 'Edm.String'> | null;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  amountInChannelCurrency: DeserializedType<T, 'Edm.Decimal'>;
  headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  status?: RetailBankedStatusTypeBase | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  operatorId?: DeserializedType<T, 'Edm.String'> | null;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
}
