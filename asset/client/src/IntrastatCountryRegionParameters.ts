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
import type { IntrastatCountryRegionParametersApi } from './IntrastatCountryRegionParametersApi';
import { CountryRegionType } from './CountryRegionType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "IntrastatCountryRegionParameters" of service "d365_metadata".
 */
export class IntrastatCountryRegionParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntrastatCountryRegionParametersType<T>
{
  /**
   * Technical entity name for IntrastatCountryRegionParameters.
   */
  static override _entityName = 'IntrastatCountryRegionParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatCountryRegionParameters entity.
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
   * Country Region Type.
   * @nullable
   */
  declare countryRegionType?: CountryRegionType | null;
  /**
   * Intrastat Code.
   * @nullable
   */
  declare intrastatCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Black Listed Country.
   * @nullable
   */
  declare blackListedCountry?: NoYes | null;
  /**
   * Country Three Digit Code.
   * @nullable
   */
  declare countryThreeDigitCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntrastatCountryRegionParametersApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatCountryRegionParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  countryRegionType?: CountryRegionType | null;
  intrastatCode?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  blackListedCountry?: NoYes | null;
  countryThreeDigitCode?: DeserializedType<T, 'Edm.String'> | null;
}
