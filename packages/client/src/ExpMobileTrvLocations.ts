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
import type { ExpMobileTrvLocationsApi } from './ExpMobileTrvLocationsApi';

/**
 * This class represents the entity "ExpMobileTrvLocations" of service "d365_metadata".
 */
export class ExpMobileTrvLocations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileTrvLocationsType<T>
{
  /**
   * Technical entity name for ExpMobileTrvLocations.
   */
  static override _entityName = 'ExpMobileTrvLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileTrvLocations entity.
   */
  static _keys = ['dataAreaId', 'EntRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ent Rec Id.
   */
  declare entRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Data Area.
   * @nullable
   */
  declare referenceDataArea?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpMobileTrvLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileTrvLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  entRecId: DeserializedType<T, 'Edm.Int64'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  referenceDataArea?: DeserializedType<T, 'Edm.String'> | null;
}
