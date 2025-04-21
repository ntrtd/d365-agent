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
import type { RAssetLocationsApi } from './RAssetLocationsApi';
import { RAssetLocationType } from './RAssetLocationType';

/**
 * This class represents the entity "RAssetLocations" of service "d365_metadata".
 */
export class RAssetLocations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetLocationsType<T>
{
  /**
   * Technical entity name for RAssetLocations.
   */
  static override _entityName = 'RAssetLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetLocations entity.
   */
  static _keys = ['dataAreaId', 'Location'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Location.
   */
  declare location: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Code.
   * @nullable
   */
  declare salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: RAssetLocationType | null;
  /**
   * Rcoad.
   * @nullable
   */
  declare rcoad?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Separate Division Id.
   * @nullable
   */
  declare separateDivisionId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RAssetLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  location: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  type?: RAssetLocationType | null;
  rcoad?: DeserializedType<T, 'Edm.String'> | null;
  separateDivisionId?: DeserializedType<T, 'Edm.String'> | null;
}
