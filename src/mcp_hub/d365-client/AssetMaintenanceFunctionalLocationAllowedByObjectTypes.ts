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
import type { AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi } from './AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';
import {
  AssetMaintenanceFunctionalLocationTypes,
  AssetMaintenanceFunctionalLocationTypesType
} from './AssetMaintenanceFunctionalLocationTypes';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationAllowedByObjectTypes" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationAllowedByObjectTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationAllowedByObjectTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationAllowedByObjectTypes.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationAllowedByObjectTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationAllowedByObjectTypes entity.
   */
  static _keys = [
    'dataAreaId',
    'FunctionalLocationTypeId',
    'MaintenanceAssetTypeId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Type Id.
   */
  declare functionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocationTypes} entity.
   */
  declare assetMaintenanceFunctionalLocationType?: AssetMaintenanceFunctionalLocationTypes<T> | null;

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationAllowedByObjectTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
  assetMaintenanceFunctionalLocationType?: AssetMaintenanceFunctionalLocationTypesType<T> | null;
}
