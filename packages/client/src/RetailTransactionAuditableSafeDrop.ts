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
import type { RetailTransactionAuditableSafeDropApi } from './RetailTransactionAuditableSafeDropApi';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailSafeStatusTypeBase } from './RetailSafeStatusTypeBase';

/**
 * This class represents the entity "RetailTransactionAuditableSafeDrop" of service "d365_metadata".
 */
export class RetailTransactionAuditableSafeDrop<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditableSafeDropType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditableSafeDrop.
   */
  static override _entityName = 'RetailTransactionAuditableSafeDrop';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditableSafeDrop entity.
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
   * Amount In Company Currency.
   */
  declare amountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
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
   * Statement Number.
   * @nullable
   */
  declare statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailSafeStatusTypeBase | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Operator Id.
   * @nullable
   */
  declare operatorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Statement Number.
   * @nullable
   */
  declare headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Time.
   */
  declare transactionTime: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailTransactionAuditableSafeDropApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditableSafeDropType<
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
  amountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  amountInChannelCurrency: DeserializedType<T, 'Edm.Decimal'>;
  headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  status?: RetailSafeStatusTypeBase | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  operatorId?: DeserializedType<T, 'Edm.String'> | null;
  headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
}
