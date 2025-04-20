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
import type { RetailTransactionAuditablePaymentLinesApi } from './RetailTransactionAuditablePaymentLinesApi';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { RetailEntryStatus } from './RetailEntryStatus';
import { NoYes } from './NoYes';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { RetailTenderVoidStatus } from './RetailTenderVoidStatus';
import {
  RetailTransactionsAuditable,
  RetailTransactionsAuditableType
} from './RetailTransactionsAuditable';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "RetailTransactionAuditablePaymentLines" of service "d365_metadata".
 */
export class RetailTransactionAuditablePaymentLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditablePaymentLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditablePaymentLines.
   */
  static override _entityName = 'RetailTransactionAuditablePaymentLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditablePaymentLines entity.
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
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operator Id.
   * @nullable
   */
  declare operatorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Asynchronous Order Status.
   * @nullable
   */
  declare headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Change.
   * @nullable
   */
  declare change?: NoYes | null;
  /**
   * Payment Method.
   * @nullable
   */
  declare paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Card Or Account.
   * @nullable
   */
  declare cardOrAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Transaction Type.
   * @nullable
   */
  declare headerTransactionType?: RetailTransactionType | null;
  /**
   * Card Type Id.
   * @nullable
   */
  declare cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Financial Dimension Display Value.
   * @nullable
   */
  declare financialDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Amount Tendered.
   */
  declare amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Card Payment Account Id.
   * @nullable
   */
  declare cardPaymentAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Validation Status.
   * @nullable
   */
  declare headerValidationStatus?: RetailTransactionValidationStatus | null;
  /**
   * Void Status.
   * @nullable
   */
  declare voidStatus?: RetailTenderVoidStatus | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Time.
   */
  declare transactionTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Statement Number.
   * @nullable
   */
  declare statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionsAuditable} entity.
   */
  declare retailTransactionAuditable?: RetailTransactionsAuditable<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: RetailTransactionAuditablePaymentLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditablePaymentLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  registerNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  operatorId?: DeserializedType<T, 'Edm.String'> | null;
  headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  transactionStatus?: RetailEntryStatus | null;
  change?: NoYes | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  cardOrAccount?: DeserializedType<T, 'Edm.String'> | null;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  headerTransactionType?: RetailTransactionType | null;
  cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  financialDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cardPaymentAccountId?: DeserializedType<T, 'Edm.String'> | null;
  headerValidationStatus?: RetailTransactionValidationStatus | null;
  voidStatus?: RetailTenderVoidStatus | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
  statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  retailTransactionAuditable?: RetailTransactionsAuditableType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
