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
import type { AddressCitiesApi } from './AddressCitiesApi';
import { AddressStates, AddressStatesType } from './AddressStates';
import { AddressCounties, AddressCountiesType } from './AddressCounties';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';
import {
  PurchaseDestinationAddressTransportationTimes,
  PurchaseDestinationAddressTransportationTimesType
} from './PurchaseDestinationAddressTransportationTimes';
import { AssetLocations, AssetLocationsType } from './AssetLocations';
import {
  PurchaseDestinationAddressDeliveryModeTransportationTimes,
  PurchaseDestinationAddressDeliveryModeTransportationTimesType
} from './PurchaseDestinationAddressDeliveryModeTransportationTimes';
import { AddressDistricts, AddressDistrictsType } from './AddressDistricts';
import {
  AddressDistrictsV2,
  AddressDistrictsV2Type
} from './AddressDistrictsV2';

/**
 * This class represents the entity "AddressCities" of service "d365_metadata".
 */
export class AddressCities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressCitiesType<T>
{
  /**
   * Technical entity name for AddressCities.
   */
  static override _entityName = 'AddressCities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressCities entity.
   */
  static _keys = ['CityKey'];
  /**
   * City Key.
   */
  declare cityKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County Id.
   * @nullable
   */
  declare countyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Id.
   * @nullable
   */
  declare stateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City In Kana.
   * @nullable
   */
  declare cityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Italy Municipality Code.
   * @nullable
   */
  declare italyMunicipalityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brazil City Code.
   * @nullable
   */
  declare brazilCityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Italy City Code.
   * @nullable
   */
  declare italyCityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AddressStates} entity.
   */
  declare state?: AddressStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCounties} entity.
   */
  declare county?: AddressCounties<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare countryRegion?: AddressCountryRegions<T> | null;
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
  /**
   * One-to-many navigation property to the {@link AddressDistricts} entity.
   */
  declare districts: AddressDistricts<T>[];
  /**
   * One-to-many navigation property to the {@link AddressDistrictsV2} entity.
   */
  declare districtsV2: AddressDistrictsV2<T>[];

  constructor(_entityApi: AddressCitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AddressCitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cityKey: DeserializedType<T, 'Edm.String'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  countyId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  stateId?: DeserializedType<T, 'Edm.String'> | null;
  cityInKana?: DeserializedType<T, 'Edm.String'> | null;
  italyMunicipalityCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  brazilCityCode?: DeserializedType<T, 'Edm.String'> | null;
  italyCityCode?: DeserializedType<T, 'Edm.String'> | null;
  state?: AddressStatesType<T> | null;
  county?: AddressCountiesType<T> | null;
  countryRegion?: AddressCountryRegionsType<T> | null;
  purchaseDestinationAddressTransportationTimes: PurchaseDestinationAddressTransportationTimesType<T>[];
  assetLocation: AssetLocationsType<T>[];
  purchaseDestinationAddressDeliveryModeTransportationTimes: PurchaseDestinationAddressDeliveryModeTransportationTimesType<T>[];
  districts: AddressDistrictsType<T>[];
  districtsV2: AddressDistrictsV2Type<T>[];
}
