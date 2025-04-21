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
import type { AddressPostalCodesV3Api } from './AddressPostalCodesV3Api';
import { AllEvenOdd } from './AllEvenOdd';
import { Timezone } from './Timezone';
import {
  PurchaseDestinationAddressTransportationTimes,
  PurchaseDestinationAddressTransportationTimesType
} from './PurchaseDestinationAddressTransportationTimes';
import { AssetLocations, AssetLocationsType } from './AssetLocations';
import {
  PurchaseDestinationAddressDeliveryModeTransportationTimes,
  PurchaseDestinationAddressDeliveryModeTransportationTimesType
} from './PurchaseDestinationAddressDeliveryModeTransportationTimes';

/**
 * This class represents the entity "AddressPostalCodesV3" of service "d365_metadata".
 */
export class AddressPostalCodesV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AddressPostalCodesV3Type<T>
{
  /**
   * Technical entity name for AddressPostalCodesV3.
   */
  static override _entityName = 'AddressPostalCodesV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressPostalCodesV3 entity.
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
    'StreetNumberValidity',
    'Street',
    'TimeZone'
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
   * Street.
   */
  declare street: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * City Alias.
   * @nullable
   */
  declare cityAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseDestinationAddressTransportationTimes} entity.
   */
  declare purchaseDestinationAddressTransportationTimes: PurchaseDestinationAddressTransportationTimes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetLocations} entity.
   */
  declare assetLocation: AssetLocations<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDestinationAddressDeliveryModeTransportationTimes} entity.
   */
  declare purchaseDestinationAddressDeliveryModeTransportationTimes: PurchaseDestinationAddressDeliveryModeTransportationTimes<T>[];

  constructor(_entityApi: AddressPostalCodesV3Api<T>) {
    super(_entityApi);
  }
}

export interface AddressPostalCodesV3Type<
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
  street: DeserializedType<T, 'Edm.String'>;
  timeZone?: Timezone | null;
  cityAlias?: DeserializedType<T, 'Edm.String'> | null;
  purchaseDestinationAddressTransportationTimes: PurchaseDestinationAddressTransportationTimesType<T>[];
  assetLocation: AssetLocationsType<T>[];
  purchaseDestinationAddressDeliveryModeTransportationTimes: PurchaseDestinationAddressDeliveryModeTransportationTimesType<T>[];
}
