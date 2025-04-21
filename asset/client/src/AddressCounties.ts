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
import type { AddressCountiesApi } from './AddressCountiesApi';
import { AddressCities, AddressCitiesType } from './AddressCities';
import { Prospects, ProspectsType } from './Prospects';
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
import { AddressStates, AddressStatesType } from './AddressStates';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';
import {
  AddressDistrictsV2,
  AddressDistrictsV2Type
} from './AddressDistrictsV2';
import {
  InventOperationalSiteCurrentPostalAddresses,
  InventOperationalSiteCurrentPostalAddressesType
} from './InventOperationalSiteCurrentPostalAddresses';

/**
 * This class represents the entity "AddressCounties" of service "d365_metadata".
 */
export class AddressCounties<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressCountiesType<T>
{
  /**
   * Technical entity name for AddressCounties.
   */
  static override _entityName = 'AddressCounties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressCounties entity.
   */
  static _keys = ['CountryRegionId', 'StateId', 'CountyId'];
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Es Country Code.
   * @nullable
   */
  declare esCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * It County Code.
   * @nullable
   */
  declare itCountyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AddressCities} entity.
   */
  declare cities: AddressCities<T>[];
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
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
   * One-to-one navigation property to the {@link AddressStates} entity.
   */
  declare addressState?: AddressStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare addressCountryRegion?: AddressCountryRegions<T> | null;
  /**
   * One-to-many navigation property to the {@link AddressDistrictsV2} entity.
   */
  declare districtsV2: AddressDistrictsV2<T>[];
  /**
   * One-to-many navigation property to the {@link InventOperationalSiteCurrentPostalAddresses} entity.
   */
  declare operationalSiteCurrentPostalAddresses: InventOperationalSiteCurrentPostalAddresses<T>[];

  constructor(_entityApi: AddressCountiesApi<T>) {
    super(_entityApi);
  }
}

export interface AddressCountiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countyId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  esCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  itCountyCode?: DeserializedType<T, 'Edm.String'> | null;
  cities: AddressCitiesType<T>[];
  prospects: ProspectsType<T>[];
  purchaseDestinationAddressTransportationTimes: PurchaseDestinationAddressTransportationTimesType<T>[];
  assetLocation: AssetLocationsType<T>[];
  purchaseDestinationAddressDeliveryModeTransportationTimes: PurchaseDestinationAddressDeliveryModeTransportationTimesType<T>[];
  districts: AddressDistrictsType<T>[];
  addressState?: AddressStatesType<T> | null;
  addressCountryRegion?: AddressCountryRegionsType<T> | null;
  districtsV2: AddressDistrictsV2Type<T>[];
  operationalSiteCurrentPostalAddresses: InventOperationalSiteCurrentPostalAddressesType<T>[];
}
