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
import type { LtmAddressCountryRegionTaxPaysApi } from './LtmAddressCountryRegionTaxPaysApi';

/**
 * This class represents the entity "LTMAddressCountryRegionTaxPays" of service "d365_metadata".
 */
export class LtmAddressCountryRegionTaxPays<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmAddressCountryRegionTaxPaysType<T>
{
  /**
   * Technical entity name for LtmAddressCountryRegionTaxPays.
   */
  static override _entityName = 'LTMAddressCountryRegionTaxPays';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmAddressCountryRegionTaxPays entity.
   */
  static _keys = [
    'dataAreaId',
    'CountryRegionId',
    'TaxPayerTypeId',
    'TaxApplicationId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Payer Type Id.
   */
  declare taxPayerTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Application Id.
   */
  declare taxApplicationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Doc Type Id.
   * @nullable
   */
  declare countryDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Doc Num.
   * @nullable
   */
  declare countryDocNum?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmAddressCountryRegionTaxPaysApi<T>) {
    super(_entityApi);
  }
}

export interface LtmAddressCountryRegionTaxPaysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  taxPayerTypeId: DeserializedType<T, 'Edm.String'>;
  taxApplicationId: DeserializedType<T, 'Edm.String'>;
  countryDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  countryDocNum?: DeserializedType<T, 'Edm.String'> | null;
}
