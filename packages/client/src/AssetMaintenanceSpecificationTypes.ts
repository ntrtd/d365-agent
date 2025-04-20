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
import type { AssetMaintenanceSpecificationTypesApi } from './AssetMaintenanceSpecificationTypesApi';
import { EntAssetConditionType } from './EntAssetConditionType';
import {
  AssetMaintenanceAssetTypeAttributes,
  AssetMaintenanceAssetTypeAttributesType
} from './AssetMaintenanceAssetTypeAttributes';
import {
  AssetMaintenanceAssetAttributes,
  AssetMaintenanceAssetAttributesType
} from './AssetMaintenanceAssetAttributes';
import {
  AssetMaintenanceFunctionalLocationAttributes,
  AssetMaintenanceFunctionalLocationAttributesType
} from './AssetMaintenanceFunctionalLocationAttributes';
import {
  AssetMaintenanceFunctionalLocationAttributeSpecifications,
  AssetMaintenanceFunctionalLocationAttributeSpecificationsType
} from './AssetMaintenanceFunctionalLocationAttributeSpecifications';
import {
  AssetMaintenanceFunctionalLocationAttributesV2,
  AssetMaintenanceFunctionalLocationAttributesV2Type
} from './AssetMaintenanceFunctionalLocationAttributesV2';

/**
 * This class represents the entity "AssetMaintenanceSpecificationTypes" of service "d365_metadata".
 */
export class AssetMaintenanceSpecificationTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceSpecificationTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceSpecificationTypes.
   */
  static override _entityName = 'AssetMaintenanceSpecificationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceSpecificationTypes entity.
   */
  static _keys = ['dataAreaId', 'AttributeTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Id.
   */
  declare attributeTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Type.
   * @nullable
   */
  declare dataType?: EntAssetConditionType | null;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeAttributes} entity.
   */
  declare assetMaintenanceAssetTypeAttribute: AssetMaintenanceAssetTypeAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetAttributes} entity.
   */
  declare assetMaintenanceAssetAttribute: AssetMaintenanceAssetAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationAttributes} entity.
   */
  declare assetMaintenanceFunctionalLocationAttribute: AssetMaintenanceFunctionalLocationAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationAttributeSpecifications} entity.
   */
  declare assetMaintenanceFunctionalLocationAttributeSpecification: AssetMaintenanceFunctionalLocationAttributeSpecifications<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationAttributesV2} entity.
   */
  declare entAssetMaintenanceFunctionalLocationAttributeV2AttributeTypeId: AssetMaintenanceFunctionalLocationAttributesV2<T>[];

  constructor(_entityApi: AssetMaintenanceSpecificationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceSpecificationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  attributeTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dataType?: EntAssetConditionType | null;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceAssetTypeAttribute: AssetMaintenanceAssetTypeAttributesType<T>[];
  assetMaintenanceAssetAttribute: AssetMaintenanceAssetAttributesType<T>[];
  assetMaintenanceFunctionalLocationAttribute: AssetMaintenanceFunctionalLocationAttributesType<T>[];
  assetMaintenanceFunctionalLocationAttributeSpecification: AssetMaintenanceFunctionalLocationAttributeSpecificationsType<T>[];
  entAssetMaintenanceFunctionalLocationAttributeV2AttributeTypeId: AssetMaintenanceFunctionalLocationAttributesV2Type<T>[];
}
