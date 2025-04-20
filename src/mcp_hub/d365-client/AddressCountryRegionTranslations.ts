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
import type { AddressCountryRegionTranslationsApi } from './AddressCountryRegionTranslationsApi';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';

/**
 * This class represents the entity "AddressCountryRegionTranslations" of service "d365_metadata".
 */
export class AddressCountryRegionTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AddressCountryRegionTranslationsType<T>
{
  /**
   * Technical entity name for AddressCountryRegionTranslations.
   */
  static override _entityName = 'AddressCountryRegionTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressCountryRegionTranslations entity.
   */
  static _keys = ['CountryRegionId', 'LanguageId'];
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: AddressCountryRegionTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface AddressCountryRegionTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  longName?: DeserializedType<T, 'Edm.String'> | null;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegion?: AddressCountryRegionsType<T> | null;
}
