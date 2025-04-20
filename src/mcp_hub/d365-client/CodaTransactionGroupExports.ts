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
import type { CodaTransactionGroupExportsApi } from './CodaTransactionGroupExportsApi';

/**
 * This class represents the entity "CodaTransactionGroupExports" of service "d365_metadata".
 */
export class CodaTransactionGroupExports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CodaTransactionGroupExportsType<T>
{
  /**
   * Technical entity name for CodaTransactionGroupExports.
   */
  static override _entityName = 'CodaTransactionGroupExports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CodaTransactionGroupExports entity.
   */
  static _keys = ['dataAreaId', 'TransactionGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Group.
   */
  declare transactionGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CodaTransactionGroupExportsApi<T>) {
    super(_entityApi);
  }
}

export interface CodaTransactionGroupExportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
