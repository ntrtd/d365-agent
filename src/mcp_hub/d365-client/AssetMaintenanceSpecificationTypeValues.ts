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
import type { AssetMaintenanceSpecificationTypeValuesApi } from './AssetMaintenanceSpecificationTypeValuesApi';
import { EntAssetConditionType } from './EntAssetConditionType';

/**
 * This class represents the entity "AssetMaintenanceSpecificationTypeValues" of service "d365_metadata".
 */
export class AssetMaintenanceSpecificationTypeValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceSpecificationTypeValuesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceSpecificationTypeValues.
   */
  static override _entityName = 'AssetMaintenanceSpecificationTypeValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceSpecificationTypeValues entity.
   */
  static _keys = ['dataAreaId', 'AttributeTypeId', 'StringValue'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Id.
   */
  declare attributeTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * String Value.
   */
  declare stringValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Type Data Type.
   * @nullable
   */
  declare attributeTypeDataType?: EntAssetConditionType | null;

  constructor(_entityApi: AssetMaintenanceSpecificationTypeValuesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceSpecificationTypeValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  attributeTypeId: DeserializedType<T, 'Edm.String'>;
  stringValue: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  attributeTypeDataType?: EntAssetConditionType | null;
}
