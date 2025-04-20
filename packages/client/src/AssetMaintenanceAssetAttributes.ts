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
import type { AssetMaintenanceAssetAttributesApi } from './AssetMaintenanceAssetAttributesApi';
import { NoYes } from './NoYes';
import { EntAssetConditionType } from './EntAssetConditionType';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';
import {
  AssetMaintenanceSpecificationTypes,
  AssetMaintenanceSpecificationTypesType
} from './AssetMaintenanceSpecificationTypes';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';

/**
 * This class represents the entity "AssetMaintenanceAssetAttributes" of service "d365_metadata".
 */
export class AssetMaintenanceAssetAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetAttributesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetAttributes.
   */
  static override _entityName = 'AssetMaintenanceAssetAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetAttributes entity.
   */
  static _keys = ['dataAreaId', 'MaintenanceAssetId', 'AttributeTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Id.
   */
  declare attributeTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value No Yes.
   * @nullable
   */
  declare valueNoYes?: NoYes | null;
  /**
   * Value Real.
   */
  declare valueReal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value Date.
   */
  declare valueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Value String.
   * @nullable
   */
  declare valueString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mandatory.
   * @nullable
   */
  declare mandatory?: NoYes | null;
  /**
   * Value Integer.
   */
  declare valueInteger: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Attribute Type Data Type.
   * @nullable
   */
  declare attributeTypeDataType?: EntAssetConditionType | null;
  /**
   * Line.
   */
  declare line: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset?: AssetMaintenanceAssets<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceSpecificationTypes} entity.
   */
  declare assetMaintenanceSpecificationType?: AssetMaintenanceSpecificationTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare maintenanceAssetV3?: AssetMaintenanceAssetsV3<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  attributeTypeId: DeserializedType<T, 'Edm.String'>;
  valueNoYes?: NoYes | null;
  valueReal: DeserializedType<T, 'Edm.Decimal'>;
  valueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  valueString?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mandatory?: NoYes | null;
  valueInteger: DeserializedType<T, 'Edm.Int32'>;
  attributeTypeDataType?: EntAssetConditionType | null;
  line: DeserializedType<T, 'Edm.Int32'>;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceAsset?: AssetMaintenanceAssetsType<T> | null;
  assetMaintenanceSpecificationType?: AssetMaintenanceSpecificationTypesType<T> | null;
  maintenanceAssetV3?: AssetMaintenanceAssetsV3Type<T> | null;
}
