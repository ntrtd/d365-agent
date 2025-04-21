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
import type { RetailTransactionGteTaxLinesApi } from './RetailTransactionGteTaxLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailTransactionGTETaxLines" of service "d365_metadata".
 */
export class RetailTransactionGteTaxLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionGteTaxLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionGteTaxLines.
   */
  static override _entityName = 'RetailTransactionGTETaxLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionGteTaxLines entity.
   */
  static _keys = [
    'dataAreaId',
    'Terminal',
    'TransactionNumber',
    'SaleLineNum',
    'TaxComponent',
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
   * Sale Line Num.
   */
  declare saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Component.
   */
  declare taxComponent: DeserializedType<T, 'Edm.String'>;
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
   * Tax Basis.
   */
  declare taxBasis: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailTransactionGteTaxLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionGteTaxLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  taxComponent: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  isTaxIncludedInPrice?: NoYes | null;
  taxBasis: DeserializedType<T, 'Edm.Decimal'>;
}
