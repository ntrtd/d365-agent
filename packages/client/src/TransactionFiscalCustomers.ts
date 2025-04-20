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
import type { TransactionFiscalCustomersApi } from './TransactionFiscalCustomersApi';

/**
 * This class represents the entity "TransactionFiscalCustomers" of service "d365_metadata".
 */
export class TransactionFiscalCustomers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionFiscalCustomersType<T>
{
  /**
   * Technical entity name for TransactionFiscalCustomers.
   */
  static override _entityName = 'TransactionFiscalCustomers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionFiscalCustomers entity.
   */
  static _keys = [
    'dataAreaId',
    'Store',
    'Terminal',
    'TransactionId',
    'OperatingUnitNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Serialized Data.
   * @nullable
   */
  declare serializedData?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Om Operating Unit Party Number.
   * @nullable
   */
  declare omOperatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: TransactionFiscalCustomersApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionFiscalCustomersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  serializedData?: DeserializedType<T, 'Edm.String'> | null;
  omOperatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
}
