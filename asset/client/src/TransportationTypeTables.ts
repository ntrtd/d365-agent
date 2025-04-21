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
import type { TransportationTypeTablesApi } from './TransportationTypeTablesApi';

/**
 * This class represents the entity "TransportationTypeTables" of service "d365_metadata".
 */
export class TransportationTypeTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransportationTypeTablesType<T>
{
  /**
   * Technical entity name for TransportationTypeTables.
   */
  static override _entityName = 'TransportationTypeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransportationTypeTables entity.
   */
  static _keys = ['dataAreaId', 'Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransportationTypeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface TransportationTypeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
