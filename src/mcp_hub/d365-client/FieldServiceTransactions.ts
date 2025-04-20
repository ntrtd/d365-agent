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
import type { FieldServiceTransactionsApi } from './FieldServiceTransactionsApi';

/**
 * This class represents the entity "FieldServiceTransactions" of service "d365_metadata".
 */
export class FieldServiceTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FieldServiceTransactionsType<T>
{
  /**
   * Technical entity name for FieldServiceTransactions.
   */
  static override _entityName = 'FieldServiceTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FieldServiceTransactions entity.
   */
  static _keys = ['dataAreaId', 'RowId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Row Id.
   */
  declare rowId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Row Name.
   * @nullable
   */
  declare rowName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Row Value.
   * @nullable
   */
  declare rowValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FieldServiceTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface FieldServiceTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rowId: DeserializedType<T, 'Edm.Guid'>;
  rowName?: DeserializedType<T, 'Edm.String'> | null;
  rowValue?: DeserializedType<T, 'Edm.String'> | null;
}
