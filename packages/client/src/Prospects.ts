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
import type { ProspectsApi } from './ProspectsApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { MonthsOfYear } from './MonthsOfYear';
import { CustVendorBlocked } from './CustVendorBlocked';
import { Abc } from './Abc';
import { RetailB2BProspectStatus } from './RetailB2BProspectStatus';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { Gender } from './Gender';
import { DeliveryTerms, DeliveryTermsType } from './DeliveryTerms';
import { WorkCalendars, WorkCalendarsType } from './WorkCalendars';
import { CdsParties, CdsPartiesType } from './CdsParties';
import { CustomerGroups, CustomerGroupsType } from './CustomerGroups';
import { AddressCounties, AddressCountiesType } from './AddressCounties';
import { Currencies, CurrenciesType } from './Currencies';
import { DeliveryModesV2, DeliveryModesV2Type } from './DeliveryModesV2';
import { Workers, WorkersType } from './Workers';
import { OfBusinesses, OfBusinessesType } from './OfBusinesses';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { AddressStates, AddressStatesType } from './AddressStates';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';
import { VendorGroups, VendorGroupsType } from './VendorGroups';

/**
 * This class represents the entity "Prospects" of service "d365_metadata".
 */
export class Prospects<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProspectsType<T>
{
  /**
   * Technical entity name for Prospects.
   */
  static override _entityName = 'Prospects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Prospects entity.
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
   * Is Receiving Direct Mail.
   * @nullable
   */
  declare isReceivingDirectMail?: NoYes | null;
  /**
   * Customer Group Id.
   * @nullable
   */
  declare customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Location Id.
   * @nullable
   */
  declare electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ups Freight Zone.
   * @nullable
   */
  declare upsFreightZone?: DeserializedType<T, 'Edm.String'> | null;
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
   * Address Post Box.
   * @nullable
   */
  declare addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Fax Number Purpose.
   * @nullable
   */
  declare primaryFaxNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Children Names.
   * @nullable
   */
  declare personChildrenNames?: DeserializedType<T, 'Edm.String'> | null;
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
   * Credit Rating.
   * @nullable
   */
  declare creditRating?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Email Address.
   * @nullable
   */
  declare primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Initials.
   * @nullable
   */
  declare personInitials?: DeserializedType<T, 'Edm.String'> | null;
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
   * Person Professional Title.
   * @nullable
   */
  declare personProfessionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Email Address Description.
   * @nullable
   */
  declare primaryEmailAddressDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Credit Limit Checking Required.
   * @nullable
   */
  declare isCreditLimitCheckingRequired?: NoYes | null;
  /**
   * Person Phonetic Last Name.
   * @nullable
   */
  declare personPhoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prospect Party Number.
   * @nullable
   */
  declare prospectPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company Name.
   * @nullable
   */
  declare companyName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Prospect Responsible Personnel Number.
   * @nullable
   */
  declare prospectResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Prospect Relation Type Id.
   * @nullable
   */
  declare prospectRelationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Twitter.
   * @nullable
   */
  declare primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Size.
   */
  declare companySize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Company Chain Name.
   * @nullable
   */
  declare companyChainName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Facebook Purpose.
   * @nullable
   */
  declare primaryFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Building Compliment.
   * @nullable
   */
  declare addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vendor Group Id.
   * @nullable
   */
  declare vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Birth Month.
   * @nullable
   */
  declare personBirthMonth?: MonthsOfYear | null;
  /**
   * Prospect Known As Name.
   * @nullable
   */
  declare prospectKnownAsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Phonetic First Name.
   * @nullable
   */
  declare personPhoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Retail Channel Operating Unit Party Number.
   * @nullable
   */
  declare retailChannelOperatingUnitPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Naf Code.
   * @nullable
   */
  declare nafCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is B 2 B Prospect.
   * @nullable
   */
  declare isB2BProspect?: NoYes | null;
  /**
   * On Hold Status.
   * @nullable
   */
  declare onHoldStatus?: CustVendorBlocked | null;
  /**
   * Person Anniversary Year.
   */
  declare personAnniversaryYear: DeserializedType<T, 'Edm.Int32'>;
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
   * Business Subsegment Code.
   * @nullable
   */
  declare businessSubsegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Phonetic Middle Name.
   * @nullable
   */
  declare personPhoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City In Kana.
   * @nullable
   */
  declare addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prospect Party Type.
   * @nullable
   */
  declare prospectPartyType?: DeserializedType<T, 'Edm.String'> | null;
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
   * Department.
   * @nullable
   */
  declare department?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Address Street Number.
   * @nullable
   */
  declare addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prospect Status Code.
   * @nullable
   */
  declare prospectStatusCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Code.
   * @nullable
   */
  declare destinationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Closing Time.
   */
  declare businessClosingTime: DeserializedType<T, 'Edm.Int32'>;
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
   * Person Hobbies.
   * @nullable
   */
  declare personHobbies?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Employee Amount.
   */
  declare organizationEmployeeAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Primary Telex Description.
   * @nullable
   */
  declare primaryTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street In Kana.
   * @nullable
   */
  declare addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Person Birth Year.
   */
  declare personBirthYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales District Id.
   * @nullable
   */
  declare salesDistrictId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is One Time Customer Or Vendor.
   * @nullable
   */
  declare isOneTimeCustomerOrVendor?: NoYes | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * B 2 B Prospect Status.
   * @nullable
   */
  declare b2BProspectStatus?: RetailB2BProspectStatus | null;
  /**
   * Person Professional Suffix.
   * @nullable
   */
  declare personProfessionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Of Business Id.
   * @nullable
   */
  declare lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Siret Number.
   * @nullable
   */
  declare siretNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Anniversary Month.
   * @nullable
   */
  declare personAnniversaryMonth?: MonthsOfYear | null;
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
   * Organization Phonetic Name.
   * @nullable
   */
  declare organizationPhoneticName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Opening Time.
   */
  declare businessOpeningTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Business Segment Code.
   * @nullable
   */
  declare businessSegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Birth Day.
   */
  declare personBirthDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Person Anniversary Day.
   */
  declare personAnniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address State Id.
   * @nullable
   */
  declare addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prospect Search Name.
   * @nullable
   */
  declare prospectSearchName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Formatted Address.
   * @nullable
   */
  declare formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Email Address Im Enabled.
   * @nullable
   */
  declare isPrimaryEmailAddressImEnabled?: NoYes | null;
  /**
   * Delivery Receipt Work Calendar Id.
   * @nullable
   */
  declare deliveryReceiptWorkCalendarId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Code.
   * @nullable
   */
  declare fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Imported.
   * @nullable
   */
  declare isImported?: NoYes | null;
  /**
   * Primary Twitter Description.
   * @nullable
   */
  declare primaryTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link DeliveryTerms} entity.
   */
  declare deliveryTerms?: DeliveryTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkCalendars} entity.
   */
  declare deliveryReceiptWorkCalendar?: WorkCalendars<T> | null;
  /**
   * One-to-one navigation property to the {@link CdsParties} entity.
   */
  declare party?: CdsParties<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerGroups} entity.
   */
  declare customerGroup?: CustomerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCounties} entity.
   */
  declare addressCounty?: AddressCounties<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link DeliveryModesV2} entity.
   */
  declare deliveryMode?: DeliveryModesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare prospectResponsibleWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link OfBusinesses} entity.
   */
  declare lineOfBusiness?: OfBusinesses<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultLedgerDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressStates} entity.
   */
  declare addressState?: AddressStates<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare salesTaxGroup?: TaxGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare addressCountryRegion?: AddressCountryRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorGroups} entity.
   */
  declare vendorGroup?: VendorGroups<T> | null;

  constructor(_entityApi: ProspectsApi<T>) {
    super(_entityApi);
  }
}

export interface ProspectsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  prospectId: DeserializedType<T, 'Edm.String'>;
  isPrimaryPhoneNumberMobile?: NoYes | null;
  isReceivingDirectMail?: NoYes | null;
  customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  upsFreightZone?: DeserializedType<T, 'Edm.String'> | null;
  prospectName?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelex?: DeserializedType<T, 'Edm.String'> | null;
  addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  personChildrenNames?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  primaryEmailAddressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  creditRating?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  personInitials?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  personProfessionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  isCreditLimitCheckingRequired?: NoYes | null;
  personPhoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  prospectPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  companyName?: DeserializedType<T, 'Edm.String'> | null;
  creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  primaryUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  prospectResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  prospectRelationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  companySize: DeserializedType<T, 'Edm.Int32'>;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  companyChainName?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  personBirthMonth?: MonthsOfYear | null;
  prospectKnownAsName?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  personPhoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  retailChannelOperatingUnitPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  primaryTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  nafCode?: DeserializedType<T, 'Edm.String'> | null;
  isB2BProspect?: NoYes | null;
  onHoldStatus?: CustVendorBlocked | null;
  personAnniversaryYear: DeserializedType<T, 'Edm.Int32'>;
  primaryPhoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebook?: DeserializedType<T, 'Edm.String'> | null;
  businessSubsegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  personPhoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  prospectPartyType?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  department?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  prospectStatusCode?: DeserializedType<T, 'Edm.String'> | null;
  destinationCode?: DeserializedType<T, 'Edm.String'> | null;
  businessClosingTime: DeserializedType<T, 'Edm.Int32'>;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  organizationAbcCode?: Abc | null;
  personHobbies?: DeserializedType<T, 'Edm.String'> | null;
  organizationEmployeeAmount: DeserializedType<T, 'Edm.Int32'>;
  primaryTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  arePricesIncludingSalesTax?: NoYes | null;
  personBirthYear: DeserializedType<T, 'Edm.Int32'>;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  salesDistrictId?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeCustomerOrVendor?: NoYes | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  b2BProspectStatus?: RetailB2BProspectStatus | null;
  personProfessionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  siretNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  personAnniversaryMonth?: MonthsOfYear | null;
  primaryUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  personMaritalStatus?: DirPersonMaritalStatus | null;
  organizationPhoneticName?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  businessOpeningTime: DeserializedType<T, 'Edm.Int32'>;
  businessSegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  personBirthDay: DeserializedType<T, 'Edm.Int32'>;
  personAnniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  prospectSearchName?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  personGender?: Gender | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryEmailAddressImEnabled?: NoYes | null;
  deliveryReceiptWorkCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  isImported?: NoYes | null;
  primaryTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryTerms?: DeliveryTermsType<T> | null;
  deliveryReceiptWorkCalendar?: WorkCalendarsType<T> | null;
  party?: CdsPartiesType<T> | null;
  customerGroup?: CustomerGroupsType<T> | null;
  addressCounty?: AddressCountiesType<T> | null;
  currency?: CurrenciesType<T> | null;
  deliveryMode?: DeliveryModesV2Type<T> | null;
  prospectResponsibleWorker?: WorkersType<T> | null;
  lineOfBusiness?: OfBusinessesType<T> | null;
  defaultLedgerDimension?: DimensionSetsType<T> | null;
  addressState?: AddressStatesType<T> | null;
  salesTaxGroup?: TaxGroupsType<T> | null;
  addressCountryRegion?: AddressCountryRegionsType<T> | null;
  vendorGroup?: VendorGroupsType<T> | null;
}
