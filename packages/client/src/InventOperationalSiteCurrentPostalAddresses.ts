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
import type { InventOperationalSiteCurrentPostalAddressesApi } from './InventOperationalSiteCurrentPostalAddressesApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { AddressCounties, AddressCountiesType } from './AddressCounties';
import { AddressStates, AddressStatesType } from './AddressStates';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';

/**
 * This class represents the entity "InventOperationalSiteCurrentPostalAddresses" of service "d365_metadata".
 */
export class InventOperationalSiteCurrentPostalAddresses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventOperationalSiteCurrentPostalAddressesType<T>
{
  /**
   * Technical entity name for InventOperationalSiteCurrentPostalAddresses.
   */
  static override _entityName = 'InventOperationalSiteCurrentPostalAddresses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventOperationalSiteCurrentPostalAddresses entity.
   */
  static _keys = [
    'dataAreaId',
    'OperationalSiteLegalEntityId',
    'OperationalSiteId',
    'AddressLocationId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operational Site Legal Entity Id.
   */
  declare operationalSiteLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operational Site Id.
   */
  declare operationalSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Location Id.
   */
  declare addressLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Primary Address.
   * @nullable
   */
  declare isPrimaryAddress?: NoYes | null;
  /**
   * Address Building Compliment.
   * @nullable
   */
  declare addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City In Kana.
   * @nullable
   */
  declare addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Post Box.
   * @nullable
   */
  declare addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State Id.
   * @nullable
   */
  declare addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Location Roles.
   * @nullable
   */
  declare addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street In Kana.
   * @nullable
   */
  declare addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County Id.
   * @nullable
   */
  declare addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Address.
   * @nullable
   */
  declare formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street Number.
   * @nullable
   */
  declare addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Sales Tax Group Code.
   * @nullable
   */
  declare addressLocationSalesTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare operationalSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCounties} entity.
   */
  declare addressCounty?: AddressCounties<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressStates} entity.
   */
  declare addressState?: AddressStates<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare addressLocationSalesTaxGroup?: TaxGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare addressCountryRegion?: AddressCountryRegions<T> | null;

  constructor(_entityApi: InventOperationalSiteCurrentPostalAddressesApi<T>) {
    super(_entityApi);
  }
}

export interface InventOperationalSiteCurrentPostalAddressesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operationalSiteLegalEntityId: DeserializedType<T, 'Edm.String'>;
  operationalSiteId: DeserializedType<T, 'Edm.String'>;
  addressLocationId: DeserializedType<T, 'Edm.String'>;
  isPrimaryAddress?: NoYes | null;
  addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationSalesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  operationalSite?: OperationalSitesType<T> | null;
  addressCounty?: AddressCountiesType<T> | null;
  addressState?: AddressStatesType<T> | null;
  addressLocationSalesTaxGroup?: TaxGroupsType<T> | null;
  addressCountryRegion?: AddressCountryRegionsType<T> | null;
}
