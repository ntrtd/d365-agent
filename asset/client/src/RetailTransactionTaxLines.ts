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
import type { RetailTransactionTaxLinesApi } from './RetailTransactionTaxLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailTransactionTaxLines" of service "d365_metadata".
 */
export class RetailTransactionTaxLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionTaxLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionTaxLines.
   */
  static override _entityName = 'RetailTransactionTaxLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionTaxLines entity.
   */
  static _keys = [
    'dataAreaId',
    'Terminal',
    'TransactionNumber',
    'SalesLineNumber',
    'TaxCode',
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
   * Sales Line Number.
   */
  declare salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Percentage.
   */
  declare taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Tax Included In Price.
   * @nullable
   */
  declare isTaxIncludedInPrice?: NoYes | null;
  /**
   * Is Exempt.
   * @nullable
   */
  declare isExempt?: NoYes | null;

  constructor(_entityApi: RetailTransactionTaxLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionTaxLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  isTaxIncludedInPrice?: NoYes | null;
  isExempt?: NoYes | null;
}
