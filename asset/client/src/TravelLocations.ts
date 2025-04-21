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
import type { TravelLocationsApi } from './TravelLocationsApi';

/**
 * This class represents the entity "TravelLocations" of service "d365_metadata".
 */
export class TravelLocations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TravelLocationsType<T>
{
  /**
   * Technical entity name for TravelLocations.
   */
  static override _entityName = 'TravelLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TravelLocations entity.
   */
  static _keys = ['dataAreaId', 'Destination'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Destination.
   */
  declare destination: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TravelLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface TravelLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  destination: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
