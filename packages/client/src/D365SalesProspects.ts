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
import type { D365SalesProspectsApi } from './D365SalesProspectsApi';
import { NoYes } from './NoYes';
import { CustVendorBlocked } from './CustVendorBlocked';
import { Timezone } from './Timezone';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { Gender } from './Gender';

/**
 * This class represents the entity "D365SalesProspects" of service "d365_metadata".
 */
export class D365SalesProspects<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements D365SalesProspectsType<T>
{
  /**
   * Technical entity name for D365SalesProspects.
   */
  static override _entityName = 'D365SalesProspects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the D365SalesProspects entity.
   */
  static _keys = ['dataAreaId', 'ProspectId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Prospect Id.
   */
  declare prospectId: DeserializedType<T, 'Edm.String'>;
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
   * Customer Group Id.
   * @nullable
   */
  declare customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prospect Name.
   * @nullable
   */
  declare prospectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Telex.
   * @nullable
   */
  declare primaryTelex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Fax Number Purpose.
   * @nullable
   */
  declare primaryFaxNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person First Name.
   * @nullable
   */
  declare personFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Rating.
   * @nullable
   */
  declare creditRating?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Email Address Purpose.
   * @nullable
   */
  declare primaryEmailAddressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Record Id.
   */
  declare deliveryAddressRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Primary Email Address.
   * @nullable
   */
  declare primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Professional Title.
   * @nullable
   */
  declare personProfessionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Valid From.
   */
  declare deliveryAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Email Address Description.
   * @nullable
   */
  declare primaryEmailAddressDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Person Middle Name.
   * @nullable
   */
  declare personMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Credit Limit Checking Required.
   * @nullable
   */
  declare isCreditLimitCheckingRequired?: NoYes | null;
  /**
   * Person Last Name.
   * @nullable
   */
  declare personLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prospect Party Number.
   * @nullable
   */
  declare prospectPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Limit.
   */
  declare creditLimit: DeserializedType<T, 'Edm.Decimal'>;
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
   * Prospect Relation Type Id.
   * @nullable
   */
  declare prospectRelationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Num Of Employees.
   */
  declare organizationNumOfEmployees: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Twitter.
   * @nullable
   */
  declare primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Facebook Purpose.
   * @nullable
   */
  declare primaryFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number Purpose.
   * @nullable
   */
  declare primaryPhoneNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Telex Purpose.
   * @nullable
   */
  declare primaryTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address County.
   * @nullable
   */
  declare deliveryAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Url.
   * @nullable
   */
  declare primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Hold Status.
   * @nullable
   */
  declare onHoldStatus?: CustVendorBlocked | null;
  /**
   * Primary Phone Number Extension.
   * @nullable
   */
  declare primaryPhoneNumberExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Building Complement.
   * @nullable
   */
  declare deliveryAddressBuildingComplement?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Facebook.
   * @nullable
   */
  declare primaryFacebook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prospect Party Type.
   * @nullable
   */
  declare prospectPartyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Facebook Description.
   * @nullable
   */
  declare primaryFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Telex Description.
   * @nullable
   */
  declare primaryTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Valid To.
   */
  declare deliveryAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Person Last Name Prefix.
   * @nullable
   */
  declare personLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is One Time Customer Or Vendor.
   * @nullable
   */
  declare isOneTimeCustomerOrVendor?: NoYes | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Person Professional Suffix.
   * @nullable
   */
  declare personProfessionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Url Description.
   * @nullable
   */
  declare primaryUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
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
   * Person Marital Status.
   * @nullable
   */
  declare personMaritalStatus?: DirPersonMaritalStatus | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State.
   * @nullable
   */
  declare deliveryAddressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Gender.
   * @nullable
   */
  declare personGender?: Gender | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
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

  constructor(_entityApi: D365SalesProspectsApi<T>) {
    super(_entityApi);
  }
}

export interface D365SalesProspectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  prospectId: DeserializedType<T, 'Edm.String'>;
  isPrimaryPhoneNumberMobile?: NoYes | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  prospectName?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelex?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  primaryFaxNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  personFirstName?: DeserializedType<T, 'Edm.String'> | null;
  creditRating?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressRecordId: DeserializedType<T, 'Edm.Int64'>;
  primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  personProfessionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryEmailAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  personMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  isCreditLimitCheckingRequired?: NoYes | null;
  personLastName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  prospectPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  primaryUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  prospectRelationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  organizationNumOfEmployees: DeserializedType<T, 'Edm.Int32'>;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  onHoldStatus?: CustVendorBlocked | null;
  primaryPhoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebook?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  prospectPartyType?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  personLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeCustomerOrVendor?: NoYes | null;
  deliveryAddressTimeZone?: Timezone | null;
  personProfessionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  personMaritalStatus?: DirPersonMaritalStatus | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressState?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  personGender?: Gender | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  isPrimaryEmailAddressImEnabled?: NoYes | null;
  primaryTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
}
