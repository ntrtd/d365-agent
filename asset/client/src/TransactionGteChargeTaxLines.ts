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
import type { TransactionGteChargeTaxLinesApi } from './TransactionGteChargeTaxLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TransactionGTEChargeTaxLines" of service "d365_metadata".
 */
export class TransactionGteChargeTaxLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionGteChargeTaxLinesType<T>
{
  /**
   * Technical entity name for TransactionGteChargeTaxLines.
   */
  static override _entityName = 'TransactionGTEChargeTaxLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionGteChargeTaxLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'TerminalId',
    'TransactionId',
    'SaleLineNum',
    'MarkupLineNum',
    'TaxComponent'
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
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sale Line Num.
   */
  declare saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Markup Line Num.
   */
  declare markupLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Component.
   */
  declare taxComponent: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Percentage.
   */
  declare taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Included In Price.
   * @nullable
   */
  declare isIncludedInPrice?: NoYes | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Basis.
   */
  declare taxBasis: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: TransactionGteChargeTaxLinesApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionGteChargeTaxLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  markupLineNum: DeserializedType<T, 'Edm.Decimal'>;
  taxComponent: DeserializedType<T, 'Edm.String'>;
  taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isIncludedInPrice?: NoYes | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxBasis: DeserializedType<T, 'Edm.Decimal'>;
}
