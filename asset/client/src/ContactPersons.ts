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
import type { ContactPersonsApi } from './ContactPersonsApi';
import { NoYes } from './NoYes';
import { MonthsOfYear } from './MonthsOfYear';
import { VendRequestRoleType } from './VendRequestRoleType';
import { Gender } from './Gender';
import { SmmSensitivity } from './SmmSensitivity';
import { Timezone } from './Timezone';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  SalesAgreementConfirmations,
  SalesAgreementConfirmationsType
} from './SalesAgreementConfirmations';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';
import {
  ServiceAgreementHeaders,
  ServiceAgreementHeadersType
} from './ServiceAgreementHeaders';
import {
  ServiceOrderHeaders,
  ServiceOrderHeadersType
} from './ServiceOrderHeaders';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "ContactPersons" of service "d365_metadata".
 */
export class ContactPersons<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ContactPersonsType<T>
{
  /**
   * Technical entity name for ContactPersons.
   */
  static override _entityName = 'ContactPersons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ContactPersons entity.
   */
  static _keys = ['dataAreaId', 'ContactPersonId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Person Id.
   */
  declare contactPersonId: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Address Latitude.
   */
  declare primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Loyalty Level Phrase.
   * @nullable
   */
  declare loyaltyLevelPhrase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Phone Number Mobile.
   * @nullable
   */
  declare isPrimaryPhoneNumberMobile?: NoYes | null;
  /**
   * Anniversary Month.
   * @nullable
   */
  declare anniversaryMonth?: MonthsOfYear | null;
  /**
   * Billing Information.
   * @nullable
   */
  declare billingInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Receiving Direct Mail.
   * @nullable
   */
  declare isReceivingDirectMail?: NoYes | null;
  /**
   * Electronic Location Id.
   * @nullable
   */
  declare electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Day.
   */
  declare birthDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Spouse Name.
   * @nullable
   */
  declare spouseName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Information Language Id.
   * @nullable
   */
  declare contactInformationLanguageId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Display Name Sequence Pattern Name.
   * @nullable
   */
  declare displayNameSequencePatternName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Telex.
   * @nullable
   */
  declare primaryTelex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Available From Time.
   */
  declare availableFromTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Primary Fax Number Purpose.
   * @nullable
   */
  declare primaryFaxNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Party Type.
   * @nullable
   */
  declare contactPersonPartyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Email Address Purpose.
   * @nullable
   */
  declare primaryEmailAddressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hobbies.
   * @nullable
   */
  declare hobbies?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Email Address.
   * @nullable
   */
  declare primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Edit Date Time.
   */
  declare lastEditDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Initials.
   * @nullable
   */
  declare initials?: DeserializedType<T, 'Edm.String'> | null;
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
   * Citizenship Country Region.
   * @nullable
   */
  declare citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decision Making Role Code.
   * @nullable
   */
  declare decisionMakingRoleCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Valid From.
   */
  declare primaryAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment Profession.
   * @nullable
   */
  declare employmentProfession?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Url Purpose.
   * @nullable
   */
  declare primaryUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Role.
   * @nullable
   */
  declare userRole?: VendRequestRoleType | null;
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
   * Primary Twitter.
   * @nullable
   */
  declare primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Associated Party Number.
   * @nullable
   */
  declare associatedPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Vendor Portal Access Allowed.
   * @nullable
   */
  declare isVendorPortalAccessAllowed?: NoYes | null;
  /**
   * Primary Address State Id.
   * @nullable
   */
  declare primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Middle Name.
   * @nullable
   */
  declare phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Building Compliment.
   * @nullable
   */
  declare primaryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Professional Title.
   * @nullable
   */
  declare professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Microsoft Outlook Categories.
   * @nullable
   */
  declare microsoftOutlookCategories?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Facebook Purpose.
   * @nullable
   */
  declare primaryFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Country Region Iso Code.
   * @nullable
   */
  declare primaryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Organization Identification Number.
   * @nullable
   */
  declare organizationIdentificationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Location Id.
   * @nullable
   */
  declare primaryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Primary Address Country Region Id.
   * @nullable
   */
  declare primaryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Children Names.
   * @nullable
   */
  declare childrenNames?: DeserializedType<T, 'Edm.String'> | null;
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
   * Assistant Name.
   * @nullable
   */
  declare assistantName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Job Title.
   * @nullable
   */
  declare employmentJobTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Url.
   * @nullable
   */
  declare primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address County Id.
   * @nullable
   */
  declare primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: Gender | null;
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
   * Alternate Salutation Phrase.
   * @nullable
   */
  declare alternateSalutationPhrase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Location Roles.
   * @nullable
   */
  declare primaryAddressLocationRoles?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Known As Name.
   * @nullable
   */
  declare knownAsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Name.
   * @nullable
   */
  declare contactPersonName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Contact Person.
   * @nullable
   */
  declare isDefaultContactPerson?: NoYes | null;
  /**
   * Manager Contact Person Id.
   * @nullable
   */
  declare managerContactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address District Name.
   * @nullable
   */
  declare primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Facebook Description.
   * @nullable
   */
  declare primaryFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Office Location.
   * @nullable
   */
  declare employmentOfficeLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Available To Time.
   */
  declare availableToTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Assistant Phone Number.
   * @nullable
   */
  declare assistantPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Valid To.
   */
  declare primaryAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Book Names.
   * @nullable
   */
  declare addressBookNames?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street.
   * @nullable
   */
  declare primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Telex Description.
   * @nullable
   */
  declare primaryTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Responsible Personnel Number.
   * @nullable
   */
  declare contactPersonResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Birth Year.
   */
  declare birthYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Contact Person Party Number.
   * @nullable
   */
  declare contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Fax Number.
   * @nullable
   */
  declare primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Government Identification Number.
   * @nullable
   */
  declare governmentIdentificationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Linked In.
   * @nullable
   */
  declare primaryLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personal Character Type Code.
   * @nullable
   */
  declare personalCharacterTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Activity Sensitivity Level.
   * @nullable
   */
  declare contactActivitySensitivityLevel?: SmmSensitivity | null;
  /**
   * Identity Card Number.
   * @nullable
   */
  declare identityCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Description.
   * @nullable
   */
  declare primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Has Requested Internet Access.
   * @nullable
   */
  declare hasRequestedInternetAccess?: NoYes | null;
  /**
   * Phonetic Last Name.
   * @nullable
   */
  declare phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address City.
   * @nullable
   */
  declare primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street In Kana.
   * @nullable
   */
  declare primaryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street Number.
   * @nullable
   */
  declare primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Zip Code.
   * @nullable
   */
  declare primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Contact Person Externally Maintained.
   * @nullable
   */
  declare isContactPersonExternallyMaintained?: NoYes | null;
  /**
   * Anniversary Year.
   */
  declare anniversaryYear: DeserializedType<T, 'Edm.Int32'>;
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
   * Phonetic First Name.
   * @nullable
   */
  declare phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number.
   * @nullable
   */
  declare primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mileage Distance.
   * @nullable
   */
  declare mileageDistance?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Suffix.
   * @nullable
   */
  declare professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Complimentary Closing Phrase.
   * @nullable
   */
  declare primaryComplimentaryClosingPhrase?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Time Zone.
   * @nullable
   */
  declare primaryAddressTimeZone?: Timezone | null;
  /**
   * Primary Address City In Kana.
   * @nullable
   */
  declare primaryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternate Complimentary Closing Phrase.
   * @nullable
   */
  declare alternateComplimentaryClosingPhrase?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Salutation Phrase.
   * @nullable
   */
  declare primarySalutationPhrase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Job Function Name.
   * @nullable
   */
  declare employmentJobFunctionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marital Status.
   * @nullable
   */
  declare maritalStatus?: DirPersonMaritalStatus | null;
  /**
   * Employment Department.
   * @nullable
   */
  declare employmentDepartment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Vip.
   * @nullable
   */
  declare isVip?: NoYes | null;
  /**
   * Primary Address Post Box.
   * @nullable
   */
  declare primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Computer Network Name.
   * @nullable
   */
  declare employmentComputerNetworkName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Longitude.
   */
  declare primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Primary Email Address Im Enabled.
   * @nullable
   */
  declare isPrimaryEmailAddressImEnabled?: NoYes | null;
  /**
   * Is Imported.
   * @nullable
   */
  declare isImported?: NoYes | null;
  /**
   * Anniversary Day.
   */
  declare anniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Inactive.
   * @nullable
   */
  declare isInactive?: NoYes | null;
  /**
   * Birth Month.
   * @nullable
   */
  declare birthMonth?: MonthsOfYear | null;
  /**
   * Primary Twitter Description.
   * @nullable
   */
  declare primaryTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmations} entity.
   */
  declare salesAgreementConfirmationHeaders: SalesAgreementConfirmations<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeaders: SalesAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementHeaders} entity.
   */
  declare serviceAgreementHeaders: ServiceAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderHeaders} entity.
   */
  declare serviceOrderHeaders: ServiceOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: ContactPersonsApi<T>) {
    super(_entityApi);
  }
}

export interface ContactPersonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contactPersonId: DeserializedType<T, 'Edm.String'>;
  primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  loyaltyLevelPhrase?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryPhoneNumberMobile?: NoYes | null;
  anniversaryMonth?: MonthsOfYear | null;
  billingInformation?: DeserializedType<T, 'Edm.String'> | null;
  isReceivingDirectMail?: NoYes | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  birthDay: DeserializedType<T, 'Edm.Int32'>;
  spouseName?: DeserializedType<T, 'Edm.String'> | null;
  contactInformationLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  displayNameSequencePatternName?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelex?: DeserializedType<T, 'Edm.String'> | null;
  availableFromTime: DeserializedType<T, 'Edm.Int32'>;
  primaryFaxNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonPartyType?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  hobbies?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  lastEditDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  initials?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  decisionMakingRoleCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentProfession?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  userRole?: VendRequestRoleType | null;
  primaryFaxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  associatedPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  isVendorPortalAccessAllowed?: NoYes | null;
  primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  microsoftOutlookCategories?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  organizationIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  childrenNames?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  assistantName?: DeserializedType<T, 'Edm.String'> | null;
  employmentJobTitle?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  gender?: Gender | null;
  primaryPhoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebook?: DeserializedType<T, 'Edm.String'> | null;
  alternateSalutationPhrase?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  knownAsName?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonName?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultContactPerson?: NoYes | null;
  managerContactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  employmentOfficeLocation?: DeserializedType<T, 'Edm.String'> | null;
  availableToTime: DeserializedType<T, 'Edm.Int32'>;
  assistantPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressBookNames?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  birthYear: DeserializedType<T, 'Edm.Int32'>;
  contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  governmentIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  personalCharacterTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  contactActivitySensitivityLevel?: SmmSensitivity | null;
  identityCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  hasRequestedInternetAccess?: NoYes | null;
  phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  isContactPersonExternallyMaintained?: NoYes | null;
  anniversaryYear: DeserializedType<T, 'Edm.Int32'>;
  primaryUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  mileageDistance?: DeserializedType<T, 'Edm.String'> | null;
  professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  primaryComplimentaryClosingPhrase?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressTimeZone?: Timezone | null;
  primaryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  alternateComplimentaryClosingPhrase?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  primarySalutationPhrase?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  employmentJobFunctionName?: DeserializedType<T, 'Edm.String'> | null;
  maritalStatus?: DirPersonMaritalStatus | null;
  employmentDepartment?: DeserializedType<T, 'Edm.String'> | null;
  isVip?: NoYes | null;
  primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  employmentComputerNetworkName?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  isPrimaryEmailAddressImEnabled?: NoYes | null;
  isImported?: NoYes | null;
  anniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  isInactive?: NoYes | null;
  birthMonth?: MonthsOfYear | null;
  primaryTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  salesAgreementConfirmationHeaders: SalesAgreementConfirmationsType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  serviceAgreementHeaders: ServiceAgreementHeadersType<T>[];
  serviceOrderHeaders: ServiceOrderHeadersType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
