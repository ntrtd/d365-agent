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
import type { AssetMaintenanceConditionTemplatesApi } from './AssetMaintenanceConditionTemplatesApi';

/**
 * This class represents the entity "AssetMaintenanceConditionTemplates" of service "d365_metadata".
 */
export class AssetMaintenanceConditionTemplates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceConditionTemplatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceConditionTemplates.
   */
  static override _entityName = 'AssetMaintenanceConditionTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceConditionTemplates entity.
   */
  static _keys = ['dataAreaId', 'ConditionTemplateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Template Id.
   */
  declare conditionTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetMaintenanceConditionTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceConditionTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  conditionTemplateId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
