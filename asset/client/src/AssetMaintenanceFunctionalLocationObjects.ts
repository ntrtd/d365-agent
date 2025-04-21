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
import type { AssetMaintenanceFunctionalLocationObjectsApi } from './AssetMaintenanceFunctionalLocationObjectsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationObjects" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationObjects<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationObjectsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationObjects.
   */
  static override _entityName = 'AssetMaintenanceFunctionalLocationObjects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationObjects entity.
   */
  static _keys = ['dataAreaId', 'MaintenanceAssetId', 'ValidFrom', 'ValidTo'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Asset.
   * @nullable
   */
  declare subAsset?: NoYes | null;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetMaintenanceFunctionalLocationObjectsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationObjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subAsset?: NoYes | null;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
}
