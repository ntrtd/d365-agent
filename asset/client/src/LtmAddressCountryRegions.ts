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
import type { LtmAddressCountryRegionsApi } from './LtmAddressCountryRegionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMAddressCountryRegions" of service "d365_metadata".
 */
export class LtmAddressCountryRegions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmAddressCountryRegionsType<T>
{
  /**
   * Technical entity name for LtmAddressCountryRegions.
   */
  static override _entityName = 'LTMAddressCountryRegions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmAddressCountryRegions entity.
   */
  static _keys = ['dataAreaId', 'CountryRegionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Foreign Country.
   * @nullable
   */
  declare foreignCountry?: NoYes | null;

  constructor(_entityApi: LtmAddressCountryRegionsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmAddressCountryRegionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  foreignCountry?: NoYes | null;
}
