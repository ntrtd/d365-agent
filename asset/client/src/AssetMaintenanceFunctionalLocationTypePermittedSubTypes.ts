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
import type { AssetMaintenanceFunctionalLocationTypePermittedSubTypesApi } from './AssetMaintenanceFunctionalLocationTypePermittedSubTypesApi';
import {
  AssetMaintenanceFunctionalLocationTypes,
  AssetMaintenanceFunctionalLocationTypesType
} from './AssetMaintenanceFunctionalLocationTypes';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationTypePermittedSubTypes" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationTypePermittedSubTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationTypePermittedSubTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationTypePermittedSubTypes.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationTypePermittedSubTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationTypePermittedSubTypes entity.
   */
  static _keys = [
    'dataAreaId',
    'FunctionalLocationTypeId',
    'PermittedFunctionalLocationTypeId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Type Id.
   */
  declare functionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Permitted Functional Location Type Id.
   */
  declare permittedFunctionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocationTypes} entity.
   */
  declare assetMaintenanceFunctionalLocationType?: AssetMaintenanceFunctionalLocationTypes<T> | null;

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationTypePermittedSubTypesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationTypePermittedSubTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  permittedFunctionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  assetMaintenanceFunctionalLocationType?: AssetMaintenanceFunctionalLocationTypesType<T> | null;
}
