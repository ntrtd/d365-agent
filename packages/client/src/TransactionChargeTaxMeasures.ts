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
import type { TransactionChargeTaxMeasuresApi } from './TransactionChargeTaxMeasuresApi';

/**
 * This class represents the entity "TransactionChargeTaxMeasures" of service "d365_metadata".
 */
export class TransactionChargeTaxMeasures<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionChargeTaxMeasuresType<T>
{
  /**
   * Technical entity name for TransactionChargeTaxMeasures.
   */
  static override _entityName = 'TransactionChargeTaxMeasures';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionChargeTaxMeasures entity.
   */
  static _keys = [
    'dataAreaId',
    'Terminal',
    'TransactionNumber',
    'SaleLineNum',
    'MarkupLineNum',
    'Path',
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
   * Markup Line Num.
   */
  declare markupLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Path.
   */
  declare path: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: TransactionChargeTaxMeasuresApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionChargeTaxMeasuresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  markupLineNum: DeserializedType<T, 'Edm.Decimal'>;
  path: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
}
