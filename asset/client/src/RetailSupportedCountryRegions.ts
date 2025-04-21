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
import type { RetailSupportedCountryRegionsApi } from './RetailSupportedCountryRegionsApi';

/**
 * This class represents the entity "RetailSupportedCountryRegions" of service "d365_metadata".
 */
export class RetailSupportedCountryRegions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSupportedCountryRegionsType<T>
{
  /**
   * Technical entity name for RetailSupportedCountryRegions.
   */
  static override _entityName = 'RetailSupportedCountryRegions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSupportedCountryRegions entity.
   */
  static _keys = ['dataAreaId', 'supportedCountryRegionISOCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Supported Country Region Iso Code.
   */
  declare supportedCountryRegionIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Name.
   * @nullable
   */
  declare countryRegionName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailSupportedCountryRegionsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSupportedCountryRegionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  supportedCountryRegionIsoCode: DeserializedType<T, 'Edm.String'>;
  countryRegionName?: DeserializedType<T, 'Edm.String'> | null;
}
