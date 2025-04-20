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
import type { VendVendorPostalAddressesApi } from './VendVendorPostalAddressesApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "VendVendorPostalAddresses" of service "d365_metadata".
 */
export class VendVendorPostalAddresses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendVendorPostalAddressesType<T>
{
  /**
   * Technical entity name for VendVendorPostalAddresses.
   */
  static override _entityName = 'VendVendorPostalAddresses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendVendorPostalAddresses entity.
   */
  static _keys = [
    'dataAreaId',
    'VendorLegalEntityId',
    'VendorAccountNumber',
    'AddressLocationId',
    'AddressValidFrom'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Legal Entity Id.
   */
  declare vendorLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account Number.
   */
  declare vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Location Id.
   */
  declare addressLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Is Role Delivery.
   * @nullable
   */
  declare isRoleDelivery?: NoYes | null;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
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
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Role Invoice.
   * @nullable
   */
  declare isRoleInvoice?: NoYes | null;
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
   * Is Private Postal Address.
   * @nullable
   */
  declare isPrivatePostalAddress?: NoYes | null;
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
   * Is Role Business.
   * @nullable
   */
  declare isRoleBusiness?: NoYes | null;
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
   * Building Compliment.
   * @nullable
   */
  declare buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Postal Address.
   * @nullable
   */
  declare isPostalAddress?: NoYes | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: VendVendorPostalAddressesApi<T>) {
    super(_entityApi);
  }
}

export interface VendVendorPostalAddressesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorLegalEntityId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  addressLocationId: DeserializedType<T, 'Edm.String'>;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPrimary?: NoYes | null;
  isRoleDelivery?: NoYes | null;
  isPrivate?: NoYes | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isRoleInvoice?: NoYes | null;
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
  isPrivatePostalAddress?: NoYes | null;
  addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  isRoleBusiness?: NoYes | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  isPostalAddress?: NoYes | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
}
