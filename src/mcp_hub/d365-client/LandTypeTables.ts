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
import type { LandTypeTablesApi } from './LandTypeTablesApi';

/**
 * This class represents the entity "LandTypeTables" of service "d365_metadata".
 */
export class LandTypeTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LandTypeTablesType<T>
{
  /**
   * Technical entity name for LandTypeTables.
   */
  static override _entityName = 'LandTypeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LandTypeTables entity.
   */
  static _keys = ['dataAreaId', 'Category'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LandTypeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface LandTypeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
