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
import type { PayIntV1WorkersApi } from './PayIntV1WorkersApi';
import { HcmWorkerStatus } from './HcmWorkerStatus';
import { NoYes } from './NoYes';
import { HcmWorkerRelationType } from './HcmWorkerRelationType';
import { HcmPersonGender } from './HcmPersonGender';
import { HcmPersonMaritalStatus } from './HcmPersonMaritalStatus';

/**
 * This class represents the entity "PayIntV1Workers" of service "d365_metadata".
 */
export class PayIntV1Workers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayIntV1WorkersType<T>
{
  /**
   * Technical entity name for PayIntV1Workers.
   */
  static override _entityName = 'PayIntV1Workers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1Workers entity.
   */
  static _keys = ['PersonnelNumber'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
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
   * User.
   * @nullable
   */
  declare user?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Status.
   * @nullable
   */
  declare workerStatus?: HcmWorkerStatus | null;
  /**
   * Person User Valid From.
   */
  declare personUserValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person User Valid To.
   */
  declare personUserValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Name Description.
   * @nullable
   */
  declare addressNameDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Id.
   */
  declare objectId: DeserializedType<T, 'Edm.Guid'>;
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
   * Military Service End Date.
   */
  declare militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name Valid To.
   */
  declare nameValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Twitter Purpose.
   * @nullable
   */
  declare primaryContactTwitterPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Worker Type.
   * @nullable
   */
  declare workerType?: HcmWorkerRelationType | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
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
   * Primary Contact Twitter Description.
   * @nullable
   */
  declare primaryContactTwitterDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Person Details Valid To.
   */
  declare personDetailsValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Linked In Description.
   * @nullable
   */
  declare primaryContactLinkedInDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Citizenship Country Region.
   * @nullable
   */
  declare citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
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
   * Name Valid From.
   */
  declare nameValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Identity Provider.
   * @nullable
   */
  declare identityProvider?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Purpose.
   * @nullable
   */
  declare addressPurpose?: DeserializedType<T, 'Edm.String'> | null;
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
   * Identity Email.
   * @nullable
   */
  declare identityEmail?: DeserializedType<T, 'Edm.String'> | null;
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
   * Professional Title.
   * @nullable
   */
  declare professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Is Private.
   * @nullable
   */
  declare primaryContactLinkedInIsPrivate?: NoYes | null;
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
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: PayIntV1WorkersApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1WorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  officeLocationId?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  originalHireDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  user?: DeserializedType<T, 'Edm.String'> | null;
  workerStatus?: HcmWorkerStatus | null;
  personUserValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  personUserValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressNameDescription?: DeserializedType<T, 'Edm.String'> | null;
  objectId: DeserializedType<T, 'Edm.Guid'>;
  personDetailsValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactFaxIsPrivate?: NoYes | null;
  primaryContactLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nameValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  workerType?: HcmWorkerRelationType | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  worksFromHome?: NoYes | null;
  summaryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  personDetailsValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  nameValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  identityProvider?: DeserializedType<T, 'Edm.String'> | null;
  addressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  isDisabled?: NoYes | null;
  gender?: HcmPersonGender | null;
  identityEmail?: DeserializedType<T, 'Edm.String'> | null;
  expatriateRulingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  summaryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
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
  motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  officeLocation?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  isExpatriateRulingApplicable?: NoYes | null;
  phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  anniversaryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactPhoneIsPrivate?: NoYes | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInIsPrivate?: NoYes | null;
  nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maritalStatus?: HcmPersonMaritalStatus | null;
  isDisabledVeteran?: NoYes | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
}
