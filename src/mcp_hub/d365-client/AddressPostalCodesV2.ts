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
import type { AddressPostalCodesV2Api } from './AddressPostalCodesV2Api';
import { AllEvenOdd } from './AllEvenOdd';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "AddressPostalCodesV2" of service "d365_metadata".
 */
export class AddressPostalCodesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AddressPostalCodesV2Type<T>
{
  /**
   * Technical entity name for AddressPostalCodesV2.
   */
  static override _entityName = 'AddressPostalCodesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressPostalCodesV2 entity.
   */
  static _keys = [
    'ZipCode',
    'CountryRegionId',
    'StateId',
    'CountyId',
    'CityId',
    'DistrictId',
    'StreetNumberMinimum',
    'StreetNumberMaximum',
    'StreetNumberValidity'
  ];
  /**
   * Zip Code.
   */
  declare zipCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * County Id.
   */
  declare countyId: DeserializedType<T, 'Edm.String'>;
  /**
   * City Id.
   */
  declare cityId: DeserializedType<T, 'Edm.String'>;
  /**
   * District Id.
   */
  declare districtId: DeserializedType<T, 'Edm.String'>;
  /**
   * Street Number Minimum.
   */
  declare streetNumberMinimum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Street Number Maximum.
   */
  declare streetNumberMaximum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Street Number Validity.
   * @nullable
   */
  declare streetNumberValidity?: AllEvenOdd | null;
  /**
   * City Alias.
   * @nullable
   */
  declare cityAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AddressPostalCodesV2Api<T>) {
    super(_entityApi);
  }
}

export interface AddressPostalCodesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  zipCode: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countyId: DeserializedType<T, 'Edm.String'>;
  cityId: DeserializedType<T, 'Edm.String'>;
  districtId: DeserializedType<T, 'Edm.String'>;
  streetNumberMinimum: DeserializedType<T, 'Edm.Int32'>;
  streetNumberMaximum: DeserializedType<T, 'Edm.Int32'>;
  streetNumberValidity?: AllEvenOdd | null;
  cityAlias?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: Timezone | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
}
