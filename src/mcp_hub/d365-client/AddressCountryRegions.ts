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
import type { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { AddressCities, AddressCitiesType } from './AddressCities';
import { Prospects, ProspectsType } from './Prospects';
import {
  BenefitExternalReportings,
  BenefitExternalReportingsType
} from './BenefitExternalReportings';
import {
  PurchaseDestinationAddressTransportationTimes,
  PurchaseDestinationAddressTransportationTimesType
} from './PurchaseDestinationAddressTransportationTimes';
import { AssetLocations, AssetLocationsType } from './AssetLocations';
import {
  AddressCountryRegionTranslations,
  AddressCountryRegionTranslationsType
} from './AddressCountryRegionTranslations';
import {
  PurchaseDestinationAddressDeliveryModeTransportationTimes,
  PurchaseDestinationAddressDeliveryModeTransportationTimesType
} from './PurchaseDestinationAddressDeliveryModeTransportationTimes';
import {
  RecruitingRequestLocations,
  RecruitingRequestLocationsType
} from './RecruitingRequestLocations';
import { AddressDistricts, AddressDistrictsType } from './AddressDistricts';
import { AddressCounties, AddressCountiesType } from './AddressCounties';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { PersonAddresses, PersonAddressesType } from './PersonAddresses';
import { ItemBatches, ItemBatchesType } from './ItemBatches';
import {
  AddressDistrictsV2,
  AddressDistrictsV2Type
} from './AddressDistrictsV2';
import { AddressStates, AddressStatesType } from './AddressStates';
import {
  InventOperationalSiteCurrentPostalAddresses,
  InventOperationalSiteCurrentPostalAddressesType
} from './InventOperationalSiteCurrentPostalAddresses';
import {
  ClmIntegrationAddressCountryRegions,
  ClmIntegrationAddressCountryRegionsType
} from './ClmIntegrationAddressCountryRegions';

/**
 * This class represents the entity "AddressCountryRegions" of service "d365_metadata".
 */
export class AddressCountryRegions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AddressCountryRegionsType<T>
{
  /**
   * Technical entity name for AddressCountryRegions.
   */
  static override _entityName = 'AddressCountryRegions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressCountryRegions entity.
   */
  static _keys = ['CountryRegion'];
  /**
   * Country Region.
   */
  declare countryRegion: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Ocode.
   * @nullable
   */
  declare isOcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * Parent Country Region.
   * @nullable
   */
  declare parentCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Format.
   * @nullable
   */
  declare addressFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brazil Central Bank Country Code.
   * @nullable
   */
  declare brazilCentralBankCountryCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Zip Plus 4.
   * @nullable
   */
  declare useZipPlus4?: NoYes | null;
  /**
   * Oksm Code Ru.
   * @nullable
   */
  declare oksmCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AddressCities} entity.
   */
  declare cities: AddressCities<T>[];
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitExternalReportings} entity.
   */
  declare benefitExternalReporting: BenefitExternalReportings<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDestinationAddressTransportationTimes} entity.
   */
  declare purchaseDestinationAddressTransportationTimes: PurchaseDestinationAddressTransportationTimes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetLocations} entity.
   */
  declare assetLocation: AssetLocations<T>[];
  /**
   * One-to-many navigation property to the {@link AddressCountryRegionTranslations} entity.
   */
  declare addressCountryRegionTranslation: AddressCountryRegionTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDestinationAddressDeliveryModeTransportationTimes} entity.
   */
  declare purchaseDestinationAddressDeliveryModeTransportationTimes: PurchaseDestinationAddressDeliveryModeTransportationTimes<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequestLocations} entity.
   */
  declare recruitingRequestLocations: RecruitingRequestLocations<T>[];
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
   * One-to-many navigation property to the {@link PersonAddresses} entity.
   */
  declare personAddress: PersonAddresses<T>[];
  /**
   * One-to-many navigation property to the {@link ItemBatches} entity.
   */
  declare itemBatches: ItemBatches<T>[];
  /**
   * One-to-many navigation property to the {@link AddressDistrictsV2} entity.
   */
  declare districtsV2: AddressDistrictsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AddressStates} entity.
   */
  declare states: AddressStates<T>[];
  /**
   * One-to-many navigation property to the {@link InventOperationalSiteCurrentPostalAddresses} entity.
   */
  declare operationalSiteCurrentPostalAddresses: InventOperationalSiteCurrentPostalAddresses<T>[];
  /**
   * One-to-one navigation property to the {@link ClmIntegrationAddressCountryRegions} entity.
   */
  declare clmIntegrationAddressCountryRegion?: ClmIntegrationAddressCountryRegions<T> | null;

  constructor(_entityApi: AddressCountryRegionsApi<T>) {
    super(_entityApi);
  }
}

export interface AddressCountryRegionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  countryRegion: DeserializedType<T, 'Edm.String'>;
  isOcode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: Timezone | null;
  parentCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  addressFormat?: DeserializedType<T, 'Edm.String'> | null;
  brazilCentralBankCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  useZipPlus4?: NoYes | null;
  oksmCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  cities: AddressCitiesType<T>[];
  prospects: ProspectsType<T>[];
  benefitExternalReporting: BenefitExternalReportingsType<T>[];
  purchaseDestinationAddressTransportationTimes: PurchaseDestinationAddressTransportationTimesType<T>[];
  assetLocation: AssetLocationsType<T>[];
  addressCountryRegionTranslation: AddressCountryRegionTranslationsType<T>[];
  purchaseDestinationAddressDeliveryModeTransportationTimes: PurchaseDestinationAddressDeliveryModeTransportationTimesType<T>[];
  recruitingRequestLocations: RecruitingRequestLocationsType<T>[];
  districts: AddressDistrictsType<T>[];
  addressCounty: AddressCountiesType<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  personAddress: PersonAddressesType<T>[];
  itemBatches: ItemBatchesType<T>[];
  districtsV2: AddressDistrictsV2Type<T>[];
  states: AddressStatesType<T>[];
  operationalSiteCurrentPostalAddresses: InventOperationalSiteCurrentPostalAddressesType<T>[];
  clmIntegrationAddressCountryRegion?: ClmIntegrationAddressCountryRegionsType<T> | null;
}
