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
import type { AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi } from './AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi';
import { EntAssetConditionType } from './EntAssetConditionType';
import { NoYes } from './NoYes';
import { CuesThresholdCriteria } from './CuesThresholdCriteria';
import {
  AssetMaintenanceFunctionalLocationTypes,
  AssetMaintenanceFunctionalLocationTypesType
} from './AssetMaintenanceFunctionalLocationTypes';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationTypeAttributeRequirements" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationTypeAttributeRequirements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationTypeAttributeRequirementsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationTypeAttributeRequirements.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationTypeAttributeRequirements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationTypeAttributeRequirements entity.
   */
  static _keys = ['dataAreaId', 'FunctionalLocationTypeId', 'AttributeTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Type Id.
   */
  declare functionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
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
   * Value Date.
   */
  declare valueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Value String.
   * @nullable
   */
  declare valueString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Type Data Type.
   * @nullable
   */
  declare attributeTypeDataType?: EntAssetConditionType | null;
  /**
   * Value No Yes.
   * @nullable
   */
  declare valueNoYes?: NoYes | null;
  /**
   * Threshold Criteria.
   * @nullable
   */
  declare thresholdCriteria?: CuesThresholdCriteria | null;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Real.
   */
  declare valueReal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value Integer.
   */
  declare valueInteger: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocationTypes} entity.
   */
  declare assetMaintenanceFunctionalLocationType?: AssetMaintenanceFunctionalLocationTypes<T> | null;

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationTypeAttributeRequirementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  attributeTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  valueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  valueString?: DeserializedType<T, 'Edm.String'> | null;
  attributeTypeDataType?: EntAssetConditionType | null;
  valueNoYes?: NoYes | null;
  thresholdCriteria?: CuesThresholdCriteria | null;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  valueReal: DeserializedType<T, 'Edm.Decimal'>;
  valueInteger: DeserializedType<T, 'Edm.Int32'>;
  assetMaintenanceFunctionalLocationType?: AssetMaintenanceFunctionalLocationTypesType<T> | null;
}
