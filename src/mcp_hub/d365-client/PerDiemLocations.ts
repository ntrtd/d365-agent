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
import type { PerDiemLocationsApi } from './PerDiemLocationsApi';

/**
 * This class represents the entity "PerDiemLocations" of service "d365_metadata".
 */
export class PerDiemLocations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PerDiemLocationsType<T>
{
  /**
   * Technical entity name for PerDiemLocations.
   */
  static override _entityName = 'PerDiemLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PerDiemLocations entity.
   */
  static _keys = ['dataAreaId', 'Location', 'StateId', 'CountryRegionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Location.
   */
  declare location: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: PerDiemLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface PerDiemLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  location: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
}
