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
import type { CountryRegionParametersApi } from './CountryRegionParametersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CountryRegionParameters" of service "d365_metadata".
 */
export class CountryRegionParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CountryRegionParametersType<T>
{
  /**
   * Technical entity name for CountryRegionParameters.
   */
  static override _entityName = 'CountryRegionParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CountryRegionParameters entity.
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
   * Sales Tax Code.
   * @nullable
   */
  declare salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Tax Exempt Number.
   * @nullable
   */
  declare checkTaxExemptNumber?: NoYes | null;

  constructor(_entityApi: CountryRegionParametersApi<T>) {
    super(_entityApi);
  }
}

export interface CountryRegionParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  checkTaxExemptNumber?: NoYes | null;
}
