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
import type { TrvLogisticsAddressCountryRegionTranslationsApi } from './TrvLogisticsAddressCountryRegionTranslationsApi';

/**
 * This class represents the entity "TrvLogisticsAddressCountryRegionTranslations" of service "d365_metadata".
 */
export class TrvLogisticsAddressCountryRegionTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvLogisticsAddressCountryRegionTranslationsType<T>
{
  /**
   * Technical entity name for TrvLogisticsAddressCountryRegionTranslations.
   */
  static override _entityName = 'TrvLogisticsAddressCountryRegionTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvLogisticsAddressCountryRegionTranslations entity.
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

  constructor(_entityApi: TrvLogisticsAddressCountryRegionTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface TrvLogisticsAddressCountryRegionTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  longName?: DeserializedType<T, 'Edm.String'> | null;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
}
