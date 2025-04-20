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
import type { ClmIntegrationAddressCountryRegionsApi } from './ClmIntegrationAddressCountryRegionsApi';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';

/**
 * This class represents the entity "CLMIntegrationAddressCountryRegions" of service "d365_metadata".
 */
export class ClmIntegrationAddressCountryRegions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ClmIntegrationAddressCountryRegionsType<T>
{
  /**
   * Technical entity name for ClmIntegrationAddressCountryRegions.
   */
  static override _entityName = 'CLMIntegrationAddressCountryRegions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ClmIntegrationAddressCountryRegions entity.
   */
  static _keys = ['CountryRegionId'];
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Long Name.
   * @nullable
   */
  declare longName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Name.
   * @nullable
   */
  declare shortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare addressCountryRegion?: AddressCountryRegions<T> | null;

  constructor(_entityApi: ClmIntegrationAddressCountryRegionsApi<T>) {
    super(_entityApi);
  }
}

export interface ClmIntegrationAddressCountryRegionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  longName?: DeserializedType<T, 'Edm.String'> | null;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegion?: AddressCountryRegionsType<T> | null;
}
