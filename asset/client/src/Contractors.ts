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
import type { ContractorsApi } from './ContractorsApi';
import { NoYes } from './NoYes';
import { HcmPersonGender } from './HcmPersonGender';
import { HcmUnitOfNotice } from './HcmUnitOfNotice';
import { HcmPersonMaritalStatus } from './HcmPersonMaritalStatus';
import { Titles, TitlesType } from './Titles';
import { People, PeopleType } from './People';
import { VeteranStatuses, VeteranStatusesType } from './VeteranStatuses';
import { EthnicOrigins, EthnicOriginsType } from './EthnicOrigins';
import { Workers, WorkersType } from './Workers';
import { LanguageCodes, LanguageCodesType } from './LanguageCodes';
import { WorkCalendars, WorkCalendarsType } from './WorkCalendars';

/**
 * This class represents the entity "Contractors" of service "d365_metadata".
 */
export class Contractors<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ContractorsType<T>
{
  /**
   * Technical entity name for Contractors.
   */
  static override _entityName = 'Contractors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Contractors entity.
   */
  static _keys = [
    'PersonnelNumber',
    'EmploymentLegalEntityId',
    'EmploymentStartDate',
    'EmploymentEndDate'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Legal Entity Id.
   */
  declare employmentLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Office Location Id.
   * @nullable
   */
  declare officeLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Books.
   * @nullable
   */
  declare addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Suffix.
   * @nullable
   */
  declare professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Hire Date Time.
   */
  declare originalHireDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Military Service Start Date.
   */
  declare militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Nationality Country Region.
   * @nullable
   */
  declare nationalityCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Url Description.
   * @nullable
   */
  declare primaryContactUrlDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Person Birth City.
   * @nullable
   */
  declare personBirthCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Extension.
   * @nullable
   */
  declare primaryContactPhoneExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Email Is Private.
   * @nullable
   */
  declare primaryContactEmailIsPrivate?: NoYes | null;
  /**
   * Primary Contact Url Is Private.
   * @nullable
   */
  declare primaryContactUrlIsPrivate?: NoYes | null;
  /**
   * Father Birth Country Region.
   * @nullable
   */
  declare fatherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Is Im.
   * @nullable
   */
  declare primaryContactEmailIsIm?: NoYes | null;
  /**
   * Primary Contact Facebook Is Private.
   * @nullable
   */
  declare primaryContactFacebookIsPrivate?: NoYes | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Birth Country Region.
   * @nullable
   */
  declare personBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Notice Worker Quantity.
   */
  declare employmentNoticeWorkerQuantity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Fulltime Student.
   * @nullable
   */
  declare isFulltimeStudent?: NoYes | null;
  /**
   * Primary Contact Url.
   * @nullable
   */
  declare primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Purpose.
   * @nullable
   */
  declare primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax.
   * @nullable
   */
  declare primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personal Suffix.
   * @nullable
   */
  declare personalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expatriate Ruling Valid To.
   */
  declare expatriateRulingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Twitter Is Private.
   * @nullable
   */
  declare primaryContactTwitterIsPrivate?: NoYes | null;
  /**
   * Primary Contact Phone Is Mobile.
   * @nullable
   */
  declare primaryContactPhoneIsMobile?: NoYes | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name Sequence Display As.
   * @nullable
   */
  declare nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Description.
   * @nullable
   */
  declare primaryContactPhoneDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Name Description.
   * @nullable
   */
  declare addressNameDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Details Valid From.
   */
  declare personDetailsValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Fax Is Private.
   * @nullable
   */
  declare primaryContactFaxIsPrivate?: NoYes | null;
  /**
   * Primary Contact Linked In Purpose.
   * @nullable
   */
  declare primaryContactLinkedInPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Termination Reason Code Id.
   * @nullable
   */
  declare terminationReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Military Service End Date.
   */
  declare militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Twitter Purpose.
   * @nullable
   */
  declare primaryContactTwitterPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Date Worked.
   */
  declare lastDateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Birth Date.
   */
  declare birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Facebook Description.
   * @nullable
   */
  declare primaryContactFacebookDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Works From Home.
   * @nullable
   */
  declare worksFromHome?: NoYes | null;
  /**
   * Summary Valid From.
   */
  declare summaryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Fax Extension.
   * @nullable
   */
  declare primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Veteran Status Id.
   * @nullable
   */
  declare veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulatory Establishment Id.
   * @nullable
   */
  declare regulatoryEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter Description.
   * @nullable
   */
  declare primaryContactTwitterDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Termination Date.
   */
  declare terminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Person Details Valid To.
   */
  declare personDetailsValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Citizenship Country Region.
   * @nullable
   */
  declare citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Description.
   * @nullable
   */
  declare primaryContactLinkedInDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Purpose.
   * @nullable
   */
  declare primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Notice Employer Quantity.
   */
  declare employmentNoticeEmployerQuantity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Url Purpose.
   * @nullable
   */
  declare primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Disabled.
   * @nullable
   */
  declare isDisabled?: NoYes | null;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: HcmPersonGender | null;
  /**
   * Address Location Roles.
   * @nullable
   */
  declare addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expatriate Ruling Valid From.
   */
  declare expatriateRulingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Summary Valid To.
   */
  declare summaryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Location.
   */
  declare primaryAddressLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Allow Rehire.
   * @nullable
   */
  declare allowRehire?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Description.
   * @nullable
   */
  declare primaryContactFaxDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Linked In.
   * @nullable
   */
  declare primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Dependents.
   */
  declare numberOfDependents: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Personal Title.
   * @nullable
   */
  declare personalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook.
   * @nullable
   */
  declare primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deceased Date.
   */
  declare deceasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Phone.
   * @nullable
   */
  declare primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Education.
   * @nullable
   */
  declare education?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Seniority Date.
   */
  declare seniorityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Email Description.
   * @nullable
   */
  declare primaryContactEmailDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mother Birth Country Region.
   * @nullable
   */
  declare motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Office Location.
   * @nullable
   */
  declare officeLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Notice Employer Unit.
   * @nullable
   */
  declare employmentNoticeEmployerUnit?: HcmUnitOfNotice | null;
  /**
   * Primary Contact Email.
   * @nullable
   */
  declare primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Middle Name.
   * @nullable
   */
  declare phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Expatriate Ruling Applicable.
   * @nullable
   */
  declare isExpatriateRulingApplicable?: NoYes | null;
  /**
   * Phonetic Last Name.
   * @nullable
   */
  declare phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter.
   * @nullable
   */
  declare primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Details Expiration.
   */
  declare employmentDetailsExpiration: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Primary Contact Facebook Purpose.
   * @nullable
   */
  declare primaryContactFacebookPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Anniversary Date Time.
   */
  declare anniversaryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Phone Is Private.
   * @nullable
   */
  declare primaryContactPhoneIsPrivate?: NoYes | null;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Is Private.
   * @nullable
   */
  declare primaryContactLinkedInIsPrivate?: NoYes | null;
  /**
   * Professional Title.
   * @nullable
   */
  declare professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Native Language Id.
   * @nullable
   */
  declare nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Purpose.
   * @nullable
   */
  declare primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjusted Worker Start Date.
   */
  declare adjustedWorkerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Notice Worker Unit.
   * @nullable
   */
  declare employmentNoticeWorkerUnit?: HcmUnitOfNotice | null;
  /**
   * Disabled Verification Date.
   */
  declare disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Marital Status.
   * @nullable
   */
  declare maritalStatus?: HcmPersonMaritalStatus | null;
  /**
   * Employment Details Effective.
   */
  declare employmentDetailsEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Disabled Veteran.
   * @nullable
   */
  declare isDisabledVeteran?: NoYes | null;
  /**
   * Ethnic Origin Id.
   * @nullable
   */
  declare ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic First Name.
   * @nullable
   */
  declare phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Location Id.
   * @nullable
   */
  declare electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contractor Vendor Data Area.
   * @nullable
   */
  declare contractorVendorDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contractor Details Effective.
   */
  declare contractorDetailsEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Calendar Data Area Id.
   * @nullable
   */
  declare calendarDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contractor Vendor Id.
   * @nullable
   */
  declare contractorVendorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contractor Purchase Requisition Id.
   * @nullable
   */
  declare contractorPurchaseRequisitionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contractor Details Expiration.
   */
  declare contractorDetailsExpiration: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Calendar Id.
   * @nullable
   */
  declare calendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contractor Purchase Order Id.
   * @nullable
   */
  declare contractorPurchaseOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Titles} entity.
   */
  declare title?: Titles<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link VeteranStatuses} entity.
   */
  declare veteranStatus?: VeteranStatuses<T> | null;
  /**
   * One-to-one navigation property to the {@link EthnicOrigins} entity.
   */
  declare ethnicOrigin?: EthnicOrigins<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link LanguageCodes} entity.
   */
  declare nativeLanguage?: LanguageCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkCalendars} entity.
   */
  declare workCalendar?: WorkCalendars<T> | null;

  constructor(_entityApi: ContractorsApi<T>) {
    super(_entityApi);
  }
}

export interface ContractorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  employmentLegalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  officeLocationId?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  originalHireDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nationalityCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  personBirthCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailIsPrivate?: NoYes | null;
  primaryContactUrlIsPrivate?: NoYes | null;
  fatherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailIsIm?: NoYes | null;
  primaryContactFacebookIsPrivate?: NoYes | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  personBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  employmentNoticeWorkerQuantity: DeserializedType<T, 'Edm.Int32'>;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  isFulltimeStudent?: NoYes | null;
  primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  personalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  expatriateRulingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactTwitterIsPrivate?: NoYes | null;
  primaryContactPhoneIsMobile?: NoYes | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressNameDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  personDetailsValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactFaxIsPrivate?: NoYes | null;
  primaryContactLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  terminationReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  lastDateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  worksFromHome?: NoYes | null;
  summaryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  regulatoryEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  terminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personDetailsValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  employmentNoticeEmployerQuantity: DeserializedType<T, 'Edm.Int32'>;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  isDisabled?: NoYes | null;
  gender?: HcmPersonGender | null;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  expatriateRulingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  summaryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocation: DeserializedType<T, 'Edm.Int64'>;
  allowRehire?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  numberOfDependents: DeserializedType<T, 'Edm.Int32'>;
  personalTitle?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  deceasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  education?: DeserializedType<T, 'Edm.String'> | null;
  seniorityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactEmailDescription?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  officeLocation?: DeserializedType<T, 'Edm.String'> | null;
  employmentNoticeEmployerUnit?: HcmUnitOfNotice | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  isExpatriateRulingApplicable?: NoYes | null;
  phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  employmentDetailsExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  anniversaryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactPhoneIsPrivate?: NoYes | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInIsPrivate?: NoYes | null;
  professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  adjustedWorkerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  employmentNoticeWorkerUnit?: HcmUnitOfNotice | null;
  disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maritalStatus?: HcmPersonMaritalStatus | null;
  employmentDetailsEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDisabledVeteran?: NoYes | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  contractorVendorDataArea?: DeserializedType<T, 'Edm.String'> | null;
  contractorDetailsEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  calendarDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  contractorVendorId?: DeserializedType<T, 'Edm.String'> | null;
  contractorPurchaseRequisitionId?: DeserializedType<T, 'Edm.String'> | null;
  contractorDetailsExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
  contractorPurchaseOrderId?: DeserializedType<T, 'Edm.String'> | null;
  title?: TitlesType<T> | null;
  person?: PeopleType<T> | null;
  veteranStatus?: VeteranStatusesType<T> | null;
  ethnicOrigin?: EthnicOriginsType<T> | null;
  worker?: WorkersType<T> | null;
  nativeLanguage?: LanguageCodesType<T> | null;
  workCalendar?: WorkCalendarsType<T> | null;
}
