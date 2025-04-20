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
import type { DemandPlanningSitesApi } from './DemandPlanningSitesApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DemandPlanningSites" of service "d365_metadata".
 */
export class DemandPlanningSites<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DemandPlanningSitesType<T>
{
  /**
   * Technical entity name for DemandPlanningSites.
   */
  static override _entityName = 'DemandPlanningSites';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DemandPlanningSites entity.
   */
  static _keys = ['SiteId', 'DataAreaPartyId'];
  /**
   * Site Id.
   */
  declare siteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Area Party Id.
   */
  declare dataAreaPartyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Address Description.
   * @nullable
   */
  declare primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Building Compliment.
   * @nullable
   */
  declare primaryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Latitude.
   */
  declare primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Site Timezone.
   * @nullable
   */
  declare siteTimezone?: Timezone | null;
  /**
   * Primary Address Country Region Id.
   * @nullable
   */
  declare primaryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Street.
   * @nullable
   */
  declare primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address City.
   * @nullable
   */
  declare primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address State Id.
   * @nullable
   */
  declare primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Post Box.
   * @nullable
   */
  declare primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Zip Code.
   * @nullable
   */
  declare primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Address Assigned.
   * @nullable
   */
  declare isPrimaryAddressAssigned?: NoYes | null;
  /**
   * Primary Address District Name.
   * @nullable
   */
  declare primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Primary Address.
   * @nullable
   */
  declare formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Time Zone.
   * @nullable
   */
  declare primaryAddressTimeZone?: Timezone | null;
  /**
   * Primary Address Location Roles.
   * @nullable
   */
  declare primaryAddressLocationRoles?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Longitude.
   */
  declare primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Primary Address Street Number.
   * @nullable
   */
  declare primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Site Name.
   * @nullable
   */
  declare siteName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address County Id.
   * @nullable
   */
  declare primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DemandPlanningSitesApi<T>) {
    super(_entityApi);
  }
}

export interface DemandPlanningSitesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  siteId: DeserializedType<T, 'Edm.String'>;
  dataAreaPartyId: DeserializedType<T, 'Edm.String'>;
  primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  siteTimezone?: Timezone | null;
  primaryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryAddressAssigned?: NoYes | null;
  primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressTimeZone?: Timezone | null;
  primaryAddressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  siteName?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
}
