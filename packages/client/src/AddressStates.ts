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
import type { AddressStatesApi } from './AddressStatesApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
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
import { AddressCounties, AddressCountiesType } from './AddressCounties';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  AddressDistrictsV2,
  AddressDistrictsV2Type
} from './AddressDistrictsV2';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';
import {
  InventOperationalSiteCurrentPostalAddresses,
  InventOperationalSiteCurrentPostalAddressesType
} from './InventOperationalSiteCurrentPostalAddresses';
import {
  WorkerGarnishmentRules,
  WorkerGarnishmentRulesType
} from './WorkerGarnishmentRules';

/**
 * This class represents the entity "AddressStates" of service "d365_metadata".
 */
export class AddressStates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressStatesType<T>
{
  /**
   * Technical entity name for AddressStates.
   */
  static override _entityName = 'AddressStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressStates entity.
   */
  static _keys = ['CountryRegionId', 'State'];
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   */
  declare state: DeserializedType<T, 'Edm.String'>;
  /**
   * Intrastat Code.
   * @nullable
   */
  declare intrastatCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * Brazil State Code.
   * @nullable
   */
  declare brazilStateCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default State For Country Region.
   * @nullable
   */
  declare defaultStateForCountryRegion?: NoYes | null;
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
   * One-to-many navigation property to the {@link AddressCounties} entity.
   */
  declare addressCounty: AddressCounties<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AddressDistrictsV2} entity.
   */
  declare districtsV2: AddressDistrictsV2<T>[];
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare countryRegion?: AddressCountryRegions<T> | null;
  /**
   * One-to-many navigation property to the {@link InventOperationalSiteCurrentPostalAddresses} entity.
   */
  declare operationalSiteCurrentPostalAddresses: InventOperationalSiteCurrentPostalAddresses<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerGarnishmentRules} entity.
   */
  declare garnishmentTaxLevies: WorkerGarnishmentRules<T>[];

  constructor(_entityApi: AddressStatesApi<T>) {
    super(_entityApi);
  }
}

export interface AddressStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  state: DeserializedType<T, 'Edm.String'>;
  intrastatCode?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: Timezone | null;
  brazilStateCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultStateForCountryRegion?: NoYes | null;
  cities: AddressCitiesType<T>[];
  prospects: ProspectsType<T>[];
  purchaseDestinationAddressTransportationTimes: PurchaseDestinationAddressTransportationTimesType<T>[];
  assetLocation: AssetLocationsType<T>[];
  purchaseDestinationAddressDeliveryModeTransportationTimes: PurchaseDestinationAddressDeliveryModeTransportationTimesType<T>[];
  districts: AddressDistrictsType<T>[];
  addressCounty: AddressCountiesType<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  districtsV2: AddressDistrictsV2Type<T>[];
  countryRegion?: AddressCountryRegionsType<T> | null;
  operationalSiteCurrentPostalAddresses: InventOperationalSiteCurrentPostalAddressesType<T>[];
  garnishmentTaxLevies: WorkerGarnishmentRulesType<T>[];
}
