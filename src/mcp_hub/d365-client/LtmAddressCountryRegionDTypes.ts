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
import type { LtmAddressCountryRegionDTypesApi } from './LtmAddressCountryRegionDTypesApi';

/**
 * This class represents the entity "LTMAddressCountryRegionDTypes" of service "d365_metadata".
 */
export class LtmAddressCountryRegionDTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmAddressCountryRegionDTypesType<T>
{
  /**
   * Technical entity name for LtmAddressCountryRegionDTypes.
   */
  static override _entityName = 'LTMAddressCountryRegionDTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmAddressCountryRegionDTypes entity.
   */
  static _keys = ['dataAreaId', 'CountryDocTypeId', 'CountryRegionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Doc Type Id.
   */
  declare countryDocTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LtmAddressCountryRegionDTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmAddressCountryRegionDTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countryDocTypeId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
}
