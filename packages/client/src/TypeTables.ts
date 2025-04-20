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
import type { TypeTablesApi } from './TypeTablesApi';

/**
 * This class represents the entity "TypeTables" of service "d365_metadata".
 */
export class TypeTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TypeTablesType<T>
{
  /**
   * Technical entity name for TypeTables.
   */
  static override _entityName = 'TypeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TypeTables entity.
   */
  static _keys = ['dataAreaId', 'VehicleType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vehicle Type.
   */
  declare vehicleType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TypeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface TypeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vehicleType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
