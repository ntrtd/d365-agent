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
import type { RetailTransactionAuditableTenderDeclarationsApi } from './RetailTransactionAuditableTenderDeclarationsApi';
import { RetailEntryStatus } from './RetailEntryStatus';

/**
 * This class represents the entity "RetailTransactionAuditableTenderDeclarations" of service "d365_metadata".
 */
export class RetailTransactionAuditableTenderDeclarations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditableTenderDeclarationsType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditableTenderDeclarations.
   */
  static override _entityName = 'RetailTransactionAuditableTenderDeclarations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditableTenderDeclarations entity.
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
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company Currency Exchange Rate.
   */
  declare companyCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
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
   * Channel Currency.
   * @nullable
   */
  declare channelCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Number.
   * @nullable
   */
  declare statementNumber?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: RetailTransactionAuditableTenderDeclarationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditableTenderDeclarationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  registerNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionStatus?: RetailEntryStatus | null;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  companyCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  foreignCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  amountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  amountInChannelCurrency: DeserializedType<T, 'Edm.Decimal'>;
  headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  channelCurrency?: DeserializedType<T, 'Edm.String'> | null;
  statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  operatorId?: DeserializedType<T, 'Edm.String'> | null;
  headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
}
