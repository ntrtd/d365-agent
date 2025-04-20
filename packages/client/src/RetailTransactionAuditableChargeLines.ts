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
import type { RetailTransactionAuditableChargeLinesApi } from './RetailTransactionAuditableChargeLinesApi';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { MarkupCategory } from './MarkupCategory';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { MarkupModuleType } from './MarkupModuleType';
import { NoYes } from './NoYes';
import {
  RetailTransactionAuditableSalesLines,
  RetailTransactionAuditableSalesLinesType
} from './RetailTransactionAuditableSalesLines';
import {
  RetailTransactionsAuditable,
  RetailTransactionsAuditableType
} from './RetailTransactionsAuditable';

/**
 * This class represents the entity "RetailTransactionAuditableChargeLines" of service "d365_metadata".
 */
export class RetailTransactionAuditableChargeLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditableChargeLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditableChargeLines.
   */
  static override _entityName = 'RetailTransactionAuditableChargeLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditableChargeLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'StoreNumber',
    'RegisterNumber',
    'TransactionId',
    'SalesLineNumber',
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
   * Sales Line Number.
   */
  declare salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Amount.
   */
  declare salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exclusive Tax Amount.
   */
  declare exclusiveTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Asynchronous Order Status.
   * @nullable
   */
  declare headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  /**
   * Category Type.
   * @nullable
   */
  declare categoryType?: MarkupCategory | null;
  /**
   * Header Statement Number.
   * @nullable
   */
  declare headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inclusive Tax Amount.
   */
  declare inclusiveTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Transaction Type.
   * @nullable
   */
  declare headerTransactionType?: RetailTransactionType | null;
  /**
   * Header Store Number.
   * @nullable
   */
  declare headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Price Inclusive Reduction Amount.
   */
  declare taxExemptPriceInclusiveReductionAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Calculated Amount.
   */
  declare calculatedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Charges Code.
   * @nullable
   */
  declare chargesCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Validation Status.
   * @nullable
   */
  declare headerValidationStatus?: RetailTransactionValidationStatus | null;
  /**
   * Module Type.
   * @nullable
   */
  declare moduleType?: MarkupModuleType | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Price Inclusive Original Price.
   */
  declare taxExemptPriceInclusiveOriginalPrice: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Charges Value.
   */
  declare chargesValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Keep.
   * @nullable
   */
  declare keep?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionAuditableSalesLines} entity.
   */
  declare retailTransactionAuditableSalesLine?: RetailTransactionAuditableSalesLines<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionsAuditable} entity.
   */
  declare retailTransactionAuditable?: RetailTransactionsAuditable<T> | null;

  constructor(_entityApi: RetailTransactionAuditableChargeLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditableChargeLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  registerNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  exclusiveTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  categoryType?: MarkupCategory | null;
  headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  inclusiveTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  headerTransactionType?: RetailTransactionType | null;
  headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptPriceInclusiveReductionAmount: DeserializedType<T, 'Edm.Decimal'>;
  calculatedAmount: DeserializedType<T, 'Edm.Decimal'>;
  chargesCode?: DeserializedType<T, 'Edm.String'> | null;
  headerValidationStatus?: RetailTransactionValidationStatus | null;
  moduleType?: MarkupModuleType | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptPriceInclusiveOriginalPrice: DeserializedType<T, 'Edm.Decimal'>;
  chargesValue: DeserializedType<T, 'Edm.Decimal'>;
  keep?: NoYes | null;
  retailTransactionAuditableSalesLine?: RetailTransactionAuditableSalesLinesType<T> | null;
  retailTransactionAuditable?: RetailTransactionsAuditableType<T> | null;
}
