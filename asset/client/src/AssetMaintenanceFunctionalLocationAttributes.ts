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
import type { AssetMaintenanceFunctionalLocationAttributesApi } from './AssetMaintenanceFunctionalLocationAttributesApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceSpecificationTypes,
  AssetMaintenanceSpecificationTypesType
} from './AssetMaintenanceSpecificationTypes';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationAttributes" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationAttributesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationAttributes.
   */
  static override _entityName = 'AssetMaintenanceFunctionalLocationAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationAttributes entity.
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
   * Value Date.
   */
  declare valueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Value No Yes.
   * @nullable
   */
  declare valueNoYes?: NoYes | null;
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

  constructor(_entityApi: AssetMaintenanceFunctionalLocationAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
  attributeTypeId: DeserializedType<T, 'Edm.String'>;
  valueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  valueString?: DeserializedType<T, 'Edm.String'> | null;
  line: DeserializedType<T, 'Edm.Int32'>;
  valueNoYes?: NoYes | null;
  valueReal: DeserializedType<T, 'Edm.Decimal'>;
  valueInteger: DeserializedType<T, 'Edm.Int32'>;
  assetMaintenanceSpecificationType?: AssetMaintenanceSpecificationTypesType<T> | null;
  assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
}
