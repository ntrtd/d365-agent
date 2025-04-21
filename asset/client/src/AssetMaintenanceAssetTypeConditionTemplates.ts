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
import type { AssetMaintenanceAssetTypeConditionTemplatesApi } from './AssetMaintenanceAssetTypeConditionTemplatesApi';

/**
 * This class represents the entity "AssetMaintenanceAssetTypeConditionTemplates" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeConditionTemplates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeConditionTemplatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeConditionTemplates.
   */
  static override _entityName = 'AssetMaintenanceAssetTypeConditionTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeConditionTemplates entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetTypeId',
    'ConditionTemplateId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Template Id.
   */
  declare conditionTemplateId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: AssetMaintenanceAssetTypeConditionTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeConditionTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  conditionTemplateId: DeserializedType<T, 'Edm.String'>;
}
