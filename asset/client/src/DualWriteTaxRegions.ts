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
import type { DualWriteTaxRegionsApi } from './DualWriteTaxRegionsApi';

/**
 * This class represents the entity "DualWriteTaxRegions" of service "d365_metadata".
 */
export class DualWriteTaxRegions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DualWriteTaxRegionsType<T>
{
  /**
   * Technical entity name for DualWriteTaxRegions.
   */
  static override _entityName = 'DualWriteTaxRegions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteTaxRegions entity.
   */
  static _keys = [
    'TaxRegionName',
    'City',
    'CountryOrRegion',
    'County',
    'State'
  ];
  /**
   * Tax Region Name.
   */
  declare taxRegionName: DeserializedType<T, 'Edm.String'>;
  /**
   * City.
   */
  declare city: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Or Region.
   */
  declare countryOrRegion: DeserializedType<T, 'Edm.String'>;
  /**
   * County.
   */
  declare county: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   */
  declare state: DeserializedType<T, 'Edm.String'>;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: DualWriteTaxRegionsApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteTaxRegionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taxRegionName: DeserializedType<T, 'Edm.String'>;
  city: DeserializedType<T, 'Edm.String'>;
  countryOrRegion: DeserializedType<T, 'Edm.String'>;
  county: DeserializedType<T, 'Edm.String'>;
  state: DeserializedType<T, 'Edm.String'>;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
