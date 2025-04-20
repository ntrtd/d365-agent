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
import type { AssetMaintenanceFunctionalLocationAttributeSpecificationsApi } from './AssetMaintenanceFunctionalLocationAttributeSpecificationsApi';
import { EntAssetConditionType } from './EntAssetConditionType';
import { NoYes } from './NoYes';
import { CuesThresholdCriteria } from './CuesThresholdCriteria';
import {
  AssetMaintenanceSpecificationTypes,
  AssetMaintenanceSpecificationTypesType
} from './AssetMaintenanceSpecificationTypes';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationAttributeSpecifications" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationAttributeSpecifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationAttributeSpecificationsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationAttributeSpecifications.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationAttributeSpecifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationAttributeSpecifications entity.
   */
  static _keys = ['dataAreaId', 'FunctionalLocationId', 'AttributeTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Id.
   */
  declare functionalLocationId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link AssetMaintenanceSpecificationTypes} entity.
   */
  declare assetMaintenanceSpecificationType?: AssetMaintenanceSpecificationTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationAttributeSpecificationsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationAttributeSpecificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
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
  assetMaintenanceSpecificationType?: AssetMaintenanceSpecificationTypesType<T> | null;
  assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
}
