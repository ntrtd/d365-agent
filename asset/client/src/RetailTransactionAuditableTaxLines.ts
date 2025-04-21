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
import type { RetailTransactionAuditableTaxLinesApi } from './RetailTransactionAuditableTaxLinesApi';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { RetailTransactionType } from './RetailTransactionType';
import { NoYes } from './NoYes';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import {
  RetailTransactionAuditableSalesLines,
  RetailTransactionAuditableSalesLinesType
} from './RetailTransactionAuditableSalesLines';
import {
  RetailTransactionsAuditable,
  RetailTransactionsAuditableType
} from './RetailTransactionsAuditable';

/**
 * This class represents the entity "RetailTransactionAuditableTaxLines" of service "d365_metadata".
 */
export class RetailTransactionAuditableTaxLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditableTaxLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditableTaxLines.
   */
  static override _entityName = 'RetailTransactionAuditableTaxLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditableTaxLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'RegisterNumber',
    'StoreNumber',
    'TransactionId',
    'SalesLineNumber',
    'TaxCode'
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
   * Register Number.
   */
  declare registerNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Line Number.
   */
  declare salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Percentage.
   */
  declare taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Asynchronous Order Status.
   * @nullable
   */
  declare headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  /**
   * Header Transaction Type.
   * @nullable
   */
  declare headerTransactionType?: RetailTransactionType | null;
  /**
   * Is Exempt.
   * @nullable
   */
  declare isExempt?: NoYes | null;
  /**
   * Is Included In Price.
   * @nullable
   */
  declare isIncludedInPrice?: NoYes | null;
  /**
   * Header Validation Status.
   * @nullable
   */
  declare headerValidationStatus?: RetailTransactionValidationStatus | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Store Number.
   * @nullable
   */
  declare headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Statement Number.
   * @nullable
   */
  declare headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionAuditableSalesLines} entity.
   */
  declare retailTransactionAuditableSalesLine?: RetailTransactionAuditableSalesLines<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionsAuditable} entity.
   */
  declare retailTransactionAuditable?: RetailTransactionsAuditable<T> | null;

  constructor(_entityApi: RetailTransactionAuditableTaxLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditableTaxLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  registerNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  headerTransactionType?: RetailTransactionType | null;
  isExempt?: NoYes | null;
  isIncludedInPrice?: NoYes | null;
  headerValidationStatus?: RetailTransactionValidationStatus | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  retailTransactionAuditableSalesLine?: RetailTransactionAuditableSalesLinesType<T> | null;
  retailTransactionAuditable?: RetailTransactionsAuditableType<T> | null;
}
