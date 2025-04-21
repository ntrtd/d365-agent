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
import type { WarehouseInventoryOwnersApi } from './WarehouseInventoryOwnersApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { Abc } from './Abc';

/**
 * This class represents the entity "WarehouseInventoryOwners" of service "d365_metadata".
 */
export class WarehouseInventoryOwners<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseInventoryOwnersType<T>
{
  /**
   * Technical entity name for WarehouseInventoryOwners.
   */
  static override _entityName = 'WarehouseInventoryOwners';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseInventoryOwners entity.
   */
  static _keys = ['dataAreaId', 'SourceSystemId', 'SourceSystemInventOwnerId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Invent Owner Id.
   */
  declare sourceSystemInventOwnerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Primary Phone Number Mobile.
   * @nullable
   */
  declare isPrimaryPhoneNumberMobile?: NoYes | null;
  /**
   * Electronic Location Id.
   * @nullable
   */
  declare electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Telex.
   * @nullable
   */
  declare primaryTelex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Fax Number Purpose.
   * @nullable
   */
  declare primaryFaxNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duns Number.
   * @nullable
   */
  declare dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Primary Email Address Purpose.
   * @nullable
   */
  declare primaryEmailAddressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Email Address.
   * @nullable
   */
  declare primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Roles.
   * @nullable
   */
  declare addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Party Number.
   * @nullable
   */
  declare organizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Email Address Description.
   * @nullable
   */
  declare primaryEmailAddressDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Formatted Primary Address.
   * @nullable
   */
  declare formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Primary Url Purpose.
   * @nullable
   */
  declare primaryUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Fax Number Extension.
   * @nullable
   */
  declare primaryFaxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number Description.
   * @nullable
   */
  declare primaryPhoneNumberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Fax Number Description.
   * @nullable
   */
  declare primaryFaxNumberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Twitter.
   * @nullable
   */
  declare primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Organization Party Type.
   * @nullable
   */
  declare organizationPartyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Facebook Purpose.
   * @nullable
   */
  declare primaryFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Linked In Description.
   * @nullable
   */
  declare primaryLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Twitter Purpose.
   * @nullable
   */
  declare primaryTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number Purpose.
   * @nullable
   */
  declare primaryPhoneNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County Id.
   * @nullable
   */
  declare addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Telex Purpose.
   * @nullable
   */
  declare primaryTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Url.
   * @nullable
   */
  declare primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number Extension.
   * @nullable
   */
  declare primaryPhoneNumberExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Facebook.
   * @nullable
   */
  declare primaryFacebook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Name.
   * @nullable
   */
  declare organizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Known As Name.
   * @nullable
   */
  declare organizationKnownAsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Facebook Description.
   * @nullable
   */
  declare primaryFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Books.
   * @nullable
   */
  declare addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Number.
   * @nullable
   */
  declare organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Abc Code.
   * @nullable
   */
  declare organizationAbcCode?: Abc | null;
  /**
   * Invent Owner Id.
   * @nullable
   */
  declare inventOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Telex Description.
   * @nullable
   */
  declare primaryTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Employee Amount.
   */
  declare organizationEmployeeAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Primary Fax Number.
   * @nullable
   */
  declare primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Linked In.
   * @nullable
   */
  declare primaryLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Default Source System Warehouse Inventory Owner.
   * @nullable
   */
  declare isDefaultSourceSystemWarehouseInventoryOwner?: NoYes | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Url Description.
   * @nullable
   */
  declare primaryUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Linked In Purpose.
   * @nullable
   */
  declare primaryLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number.
   * @nullable
   */
  declare primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Phonetic Name.
   * @nullable
   */
  declare organizationPhoneticName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State Id.
   * @nullable
   */
  declare addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Name Search Name.
   * @nullable
   */
  declare organizationNameSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Email Address Im Enabled.
   * @nullable
   */
  declare isPrimaryEmailAddressImEnabled?: NoYes | null;
  /**
   * Primary Twitter Description.
   * @nullable
   */
  declare primaryTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: WarehouseInventoryOwnersApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseInventoryOwnersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  sourceSystemInventOwnerId: DeserializedType<T, 'Edm.String'>;
  isPrimaryPhoneNumberMobile?: NoYes | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelex?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  primaryEmailAddressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  organizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  primaryUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  organizationPartyType?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebook?: DeserializedType<T, 'Edm.String'> | null;
  organizationName?: DeserializedType<T, 'Edm.String'> | null;
  organizationKnownAsName?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  organizationAbcCode?: Abc | null;
  inventOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  organizationEmployeeAmount: DeserializedType<T, 'Edm.Int32'>;
  primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  isDefaultSourceSystemWarehouseInventoryOwner?: NoYes | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  organizationPhoneticName?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  organizationNameSearchName?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryEmailAddressImEnabled?: NoYes | null;
  primaryTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
