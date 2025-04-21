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
import type { AssetMaintenanceChecklistTemplatesApi } from './AssetMaintenanceChecklistTemplatesApi';
import { EntAssetChecklistTemplateType } from './EntAssetChecklistTemplateType';
import {
  AssetMaintenanceJobTypeDefaults,
  AssetMaintenanceJobTypeDefaultsType
} from './AssetMaintenanceJobTypeDefaults';

/**
 * This class represents the entity "AssetMaintenanceChecklistTemplates" of service "d365_metadata".
 */
export class AssetMaintenanceChecklistTemplates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceChecklistTemplatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceChecklistTemplates.
   */
  static override _entityName = 'AssetMaintenanceChecklistTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceChecklistTemplates entity.
   */
  static _keys = ['dataAreaId', 'TemplateID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   * @nullable
   */
  declare maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Id.
   * @nullable
   */
  declare modelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: EntAssetChecklistTemplateType | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Type Id.
   * @nullable
   */
  declare maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Trade Id.
   * @nullable
   */
  declare jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Product Id.
   * @nullable
   */
  declare modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTypeDefaults} entity.
   */
  declare assetMaintenanceJobTypeDefault?: AssetMaintenanceJobTypeDefaults<T> | null;

  constructor(_entityApi: AssetMaintenanceChecklistTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceChecklistTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  templateId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  modelId?: DeserializedType<T, 'Edm.String'> | null;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  productId?: DeserializedType<T, 'Edm.String'> | null;
  type?: EntAssetChecklistTemplateType | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceJobTypeDefault?: AssetMaintenanceJobTypeDefaultsType<T> | null;
}
