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
import type { AccomodationTypesApi } from './AccomodationTypesApi';

/**
 * This class represents the entity "AccomodationTypes" of service "d365_metadata".
 */
export class AccomodationTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccomodationTypesType<T>
{
  /**
   * Technical entity name for AccomodationTypes.
   */
  static override _entityName = 'AccomodationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccomodationTypes entity.
   */
  static _keys = ['AccommodationTypeId'];
  /**
   * Accommodation Type Id.
   */
  declare accommodationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AccomodationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AccomodationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accommodationTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
}
