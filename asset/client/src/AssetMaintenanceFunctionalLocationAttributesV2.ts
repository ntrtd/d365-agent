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
import type { AssetMaintenanceFunctionalLocationAttributesV2Api } from './AssetMaintenanceFunctionalLocationAttributesV2Api';
import {
  AssetMaintenanceSpecificationTypes,
  AssetMaintenanceSpecificationTypesType
} from './AssetMaintenanceSpecificationTypes';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationAttributesV2" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationAttributesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationAttributesV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationAttributesV2.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationAttributesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationAttributesV2 entity.
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
   * Value String.
   * @nullable
   */
  declare valueString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line.
   */
  declare line: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceSpecificationTypes} entity.
   */
  declare entAssetMaintenanceAttributeTypeRole?: AssetMaintenanceSpecificationTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare entAssetMaintenanceFunctionalLocationRole?: AssetMaintenanceFunctionalLocations<T> | null;

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationAttributesV2Api<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationAttributesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
  attributeTypeId: DeserializedType<T, 'Edm.String'>;
  valueString?: DeserializedType<T, 'Edm.String'> | null;
  line: DeserializedType<T, 'Edm.Int32'>;
  entAssetMaintenanceAttributeTypeRole?: AssetMaintenanceSpecificationTypesType<T> | null;
  entAssetMaintenanceFunctionalLocationRole?: AssetMaintenanceFunctionalLocationsType<T> | null;
}
