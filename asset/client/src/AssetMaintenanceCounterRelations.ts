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
import type { AssetMaintenanceCounterRelationsApi } from './AssetMaintenanceCounterRelationsApi';

/**
 * This class represents the entity "AssetMaintenanceCounterRelations" of service "d365_metadata".
 */
export class AssetMaintenanceCounterRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceCounterRelationsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceCounterRelations.
   */
  static override _entityName = 'AssetMaintenanceCounterRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceCounterRelations entity.
   */
  static _keys = ['dataAreaId', 'CounterId', 'RelatedCounterId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Id.
   */
  declare counterId: DeserializedType<T, 'Edm.String'>;
  /**
   * Related Counter Id.
   */
  declare relatedCounterId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: AssetMaintenanceCounterRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceCounterRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  counterId: DeserializedType<T, 'Edm.String'>;
  relatedCounterId: DeserializedType<T, 'Edm.String'>;
}
