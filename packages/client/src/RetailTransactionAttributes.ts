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
import type { RetailTransactionAttributesApi } from './RetailTransactionAttributesApi';

/**
 * This class represents the entity "RetailTransactionAttributes" of service "d365_metadata".
 */
export class RetailTransactionAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAttributesType<T>
{
  /**
   * Technical entity name for RetailTransactionAttributes.
   */
  static override _entityName = 'RetailTransactionAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAttributes entity.
   */
  static _keys = [
    'dataAreaId',
    'AttributeName',
    'TransactionNumber',
    'Terminal',
    'OperatingUnitNumber',
    'HeaderOrLineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Or Line Num.
   */
  declare headerOrLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Attribute Value.
   * @nullable
   */
  declare attributeValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  headerOrLineNum: DeserializedType<T, 'Edm.Decimal'>;
  attributeValue?: DeserializedType<T, 'Edm.String'> | null;
}
