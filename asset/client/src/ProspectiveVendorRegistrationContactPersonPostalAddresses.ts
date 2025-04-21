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
import type { ProspectiveVendorRegistrationContactPersonPostalAddressesApi } from './ProspectiveVendorRegistrationContactPersonPostalAddressesApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "ProspectiveVendorRegistrationContactPersonPostalAddresses" of service "d365_metadata".
 */
export class ProspectiveVendorRegistrationContactPersonPostalAddresses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProspectiveVendorRegistrationContactPersonPostalAddressesType<T>
{
  /**
   * Technical entity name for ProspectiveVendorRegistrationContactPersonPostalAddresses.
   */
  static override _entityName =
    'ProspectiveVendorRegistrationContactPersonPostalAddresses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProspectiveVendorRegistrationContactPersonPostalAddresses entity.
   */
  static _keys = ['VendorRegistrationId', 'AddressLocationId'];
  /**
   * Vendor Registration Id.
   */
  declare vendorRegistrationId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Address Location Id.
   */
  declare addressLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Building Compliment.
   * @nullable
   */
  declare addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Role Delivery.
   * @nullable
   */
  declare isRoleDelivery?: NoYes | null;
  /**
   * Contact Person Email Address.
   * @nullable
   */
  declare contactPersonEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Address Primary.
   * @nullable
   */
  declare isAddressPrimary?: NoYes | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Is Role Home.
   * @nullable
   */
  declare isRoleHome?: NoYes | null;
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
   * Is Primary Tax Registration.
   * @nullable
   */
  declare isPrimaryTaxRegistration?: NoYes | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attention To Address Line.
   * @nullable
   */
  declare attentionToAddressLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Location Owner.
   * @nullable
   */
  declare isLocationOwner?: NoYes | null;
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
   * Is Role Business.
   * @nullable
   */
  declare isRoleBusiness?: NoYes | null;
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
   * Is Address Private.
   * @nullable
   */
  declare isAddressPrivate?: NoYes | null;
  /**
   * Address Street Number.
   * @nullable
   */
  declare addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(
    _entityApi: ProspectiveVendorRegistrationContactPersonPostalAddressesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface ProspectiveVendorRegistrationContactPersonPostalAddressesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  vendorRegistrationId: DeserializedType<T, 'Edm.Int64'>;
  addressLocationId: DeserializedType<T, 'Edm.String'>;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  isRoleDelivery?: NoYes | null;
  contactPersonEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  isAddressPrimary?: NoYes | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  isRoleHome?: NoYes | null;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryTaxRegistration?: NoYes | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  attentionToAddressLine?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isLocationOwner?: NoYes | null;
  addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  isRoleBusiness?: NoYes | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  isAddressPrivate?: NoYes | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
}
