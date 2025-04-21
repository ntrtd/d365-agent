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
import type { ApplicantsApi } from './ApplicantsApi';
import { NoYes } from './NoYes';
import { HcmPersonGender } from './HcmPersonGender';
import { HrmBlankYesNo } from './HrmBlankYesNo';
import { HcmPersonMaritalStatus } from './HcmPersonMaritalStatus';
import { HcmApplicantType } from './HcmApplicantType';
import {
  PersonSkillMappings,
  PersonSkillMappingsType
} from './PersonSkillMappings';
import { EducationDegrees, EducationDegreesType } from './EducationDegrees';
import { VeteranStatuses, VeteranStatusesType } from './VeteranStatuses';
import { EthnicOrigins, EthnicOriginsType } from './EthnicOrigins';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';
import { Applications, ApplicationsType } from './Applications';

/**
 * This class represents the entity "Applicants" of service "d365_metadata".
 */
export class Applicants<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApplicantsType<T>
{
  /**
   * Technical entity name for Applicants.
   */
  static override _entityName = 'Applicants';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Applicants entity.
   */
  static _keys = ['Applicant'];
  /**
   * Applicant.
   */
  declare applicant: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Contact Facebook Is Private.
   * @nullable
   */
  declare primaryContactFacebookIsPrivate?: NoYes | null;
  /**
   * Postal Address Valid To.
   */
  declare postalAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Linked In Description.
   * @nullable
   */
  declare primaryContactLinkedInDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Electronic Location Id.
   * @nullable
   */
  declare electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook.
   * @nullable
   */
  declare primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Highest Degree Id.
   * @nullable
   */
  declare highestDegreeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Telex Is Private.
   * @nullable
   */
  declare primaryContactTelexIsPrivate?: NoYes | null;
  /**
   * Primary Contact Phone Is Private.
   * @nullable
   */
  declare primaryContactPhoneIsPrivate?: NoYes | null;
  /**
   * Is Skill Mapping Enabled.
   * @nullable
   */
  declare isSkillMappingEnabled?: NoYes | null;
  /**
   * Postal Address Valid From.
   */
  declare postalAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Location Roles.
   * @nullable
   */
  declare addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Extension.
   * @nullable
   */
  declare primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initials.
   * @nullable
   */
  declare initials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Citizenship Country Region.
   * @nullable
   */
  declare citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Extension.
   * @nullable
   */
  declare primaryContactPhoneExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Phone Is Mobile.
   * @nullable
   */
  declare primaryContactPhoneIsMobile?: NoYes | null;
  /**
   * Primary Contact Telex Description.
   * @nullable
   */
  declare primaryContactTelexDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Fax Is Private.
   * @nullable
   */
  declare primaryContactFaxIsPrivate?: NoYes | null;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Description.
   * @nullable
   */
  declare primaryContactPhoneDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Native Language Id.
   * @nullable
   */
  declare nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Middle Name.
   * @nullable
   */
  declare phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Title.
   * @nullable
   */
  declare professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Job Title.
   * @nullable
   */
  declare currentJobTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Description.
   * @nullable
   */
  declare primaryContactEmailDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Name Sequence Display As.
   * @nullable
   */
  declare nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Veteran Status Id.
   * @nullable
   */
  declare veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Details Valid To.
   */
  declare personDetailsValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Description Name.
   * @nullable
   */
  declare addressDescriptionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter.
   * @nullable
   */
  declare primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Telex.
   * @nullable
   */
  declare primaryContactTelex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: HcmPersonGender | null;
  /**
   * Primary Contact Facebook Description.
   * @nullable
   */
  declare primaryContactFacebookDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Url Is Private.
   * @nullable
   */
  declare primaryContactUrlIsPrivate?: NoYes | null;
  /**
   * Person Details Valid From.
   */
  declare personDetailsValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Date.
   */
  declare birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Phone.
   * @nullable
   */
  declare primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Books.
   * @nullable
   */
  declare addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email.
   * @nullable
   */
  declare primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Previous Employee.
   * @nullable
   */
  declare previousEmployee?: HrmBlankYesNo | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ethnic Origin Id.
   * @nullable
   */
  declare ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In.
   * @nullable
   */
  declare primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Url.
   * @nullable
   */
  declare primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Url Description.
   * @nullable
   */
  declare primaryContactUrlDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Number Of Applications.
   */
  declare numberOfApplications: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Primary Contact Email Is Im.
   * @nullable
   */
  declare primaryContactEmailIsIm?: NoYes | null;
  /**
   * Phonetic Last Name.
   * @nullable
   */
  declare phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Is Private.
   * @nullable
   */
  declare primaryContactLinkedInIsPrivate?: NoYes | null;
  /**
   * Primary Contact Twitter Is Private.
   * @nullable
   */
  declare primaryContactTwitterIsPrivate?: NoYes | null;
  /**
   * Phonetic First Name.
   * @nullable
   */
  declare phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Suffix.
   * @nullable
   */
  declare professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Future Consideration.
   * @nullable
   */
  declare futureConsideration?: HrmBlankYesNo | null;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax.
   * @nullable
   */
  declare primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marital Status.
   * @nullable
   */
  declare maritalStatus?: HcmPersonMaritalStatus | null;
  /**
   * Primary Contact Email Is Private.
   * @nullable
   */
  declare primaryContactEmailIsPrivate?: NoYes | null;
  /**
   * Total Applications.
   */
  declare totalApplications: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Primary Contact Fax Description.
   * @nullable
   */
  declare primaryContactFaxDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Twitter Description.
   * @nullable
   */
  declare primaryContactTwitterDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Applicant Type.
   * @nullable
   */
  declare applicantType?: HcmApplicantType | null;
  /**
   * Address Is Private.
   * @nullable
   */
  declare addressIsPrivate?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link PersonSkillMappings} entity.
   */
  declare personSkillMapping?: PersonSkillMappings<T> | null;
  /**
   * One-to-one navigation property to the {@link EducationDegrees} entity.
   */
  declare educationLevel?: EducationDegrees<T> | null;
  /**
   * One-to-one navigation property to the {@link VeteranStatuses} entity.
   */
  declare veteranStatus?: VeteranStatuses<T> | null;
  /**
   * One-to-one navigation property to the {@link EthnicOrigins} entity.
   */
  declare ethnicOrigin?: EthnicOrigins<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-many navigation property to the {@link Applications} entity.
   */
  declare applications: Applications<T>[];

  constructor(_entityApi: ApplicantsApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicantsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  applicant: DeserializedType<T, 'Edm.String'>;
  primaryContactFacebookIsPrivate?: NoYes | null;
  postalAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  highestDegreeId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTelexIsPrivate?: NoYes | null;
  primaryContactPhoneIsPrivate?: NoYes | null;
  isSkillMappingEnabled?: NoYes | null;
  postalAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  initials?: DeserializedType<T, 'Edm.String'> | null;
  citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneIsMobile?: NoYes | null;
  primaryContactTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxIsPrivate?: NoYes | null;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  currentJobTitle?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailDescription?: DeserializedType<T, 'Edm.String'> | null;
  nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  personDetailsValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressDescriptionName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTelex?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  gender?: HcmPersonGender | null;
  primaryContactFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlIsPrivate?: NoYes | null;
  personDetailsValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  previousEmployee?: HrmBlankYesNo | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  numberOfApplications: DeserializedType<T, 'Edm.Int32'>;
  primaryContactEmailIsIm?: NoYes | null;
  phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInIsPrivate?: NoYes | null;
  primaryContactTwitterIsPrivate?: NoYes | null;
  phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  futureConsideration?: HrmBlankYesNo | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  maritalStatus?: HcmPersonMaritalStatus | null;
  primaryContactEmailIsPrivate?: NoYes | null;
  totalApplications: DeserializedType<T, 'Edm.Int32'>;
  primaryContactFaxDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  applicantType?: HcmApplicantType | null;
  addressIsPrivate?: NoYes | null;
  personSkillMapping?: PersonSkillMappingsType<T> | null;
  educationLevel?: EducationDegreesType<T> | null;
  veteranStatus?: VeteranStatusesType<T> | null;
  ethnicOrigin?: EthnicOriginsType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
  applications: ApplicationsType<T>[];
}
