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
import type { CodaTransApi } from './CodaTransApi';

/**
 * This class represents the entity "CodaTrans" of service "d365_metadata".
 */
export class CodaTrans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CodaTransType<T>
{
  /**
   * Technical entity name for CodaTrans.
   */
  static override _entityName = 'CodaTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CodaTrans entity.
   */
  static _keys = ['dataAreaId', 'TransactionFamily', 'Transaction'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Family.
   */
  declare transactionFamily: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction.
   */
  declare transaction: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CodaTransApi<T>) {
    super(_entityApi);
  }
}

export interface CodaTransType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionFamily: DeserializedType<T, 'Edm.String'>;
  transaction: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
