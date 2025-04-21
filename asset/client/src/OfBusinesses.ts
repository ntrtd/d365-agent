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
import type { OfBusinessesApi } from './OfBusinessesApi';
import { Prospects, ProspectsType } from './Prospects';

/**
 * This class represents the entity "OfBusinesses" of service "d365_metadata".
 */
export class OfBusinesses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OfBusinessesType<T>
{
  /**
   * Technical entity name for OfBusinesses.
   */
  static override _entityName = 'OfBusinesses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OfBusinesses entity.
   */
  static _keys = ['dataAreaId', 'LineOfBusiness'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Of Business.
   */
  declare lineOfBusiness: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];

  constructor(_entityApi: OfBusinessesApi<T>) {
    super(_entityApi);
  }
}

export interface OfBusinessesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineOfBusiness: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  prospects: ProspectsType<T>[];
}
