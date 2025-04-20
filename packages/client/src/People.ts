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
import type { PeopleApi } from './PeopleApi';
import { NoYes } from './NoYes';
import { MonthsOfYear } from './MonthsOfYear';
import { Timezone } from './Timezone';
import { Gender } from './Gender';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { PersonExams, PersonExamsType } from './PersonExams';
import {
  OnboardingWorkerChecklistTasks,
  OnboardingWorkerChecklistTasksType
} from './OnboardingWorkerChecklistTasks';
import { Workers, WorkersType } from './Workers';
import { Employees, EmployeesType } from './Employees';
import { TeamMembers, TeamMembersType } from './TeamMembers';
import { CourseInstructors, CourseInstructorsType } from './CourseInstructors';
import { PersonScreenings, PersonScreeningsType } from './PersonScreenings';
import { TeamMembersV2, TeamMembersV2Type } from './TeamMembersV2';
import { ContractorsV2, ContractorsV2Type } from './ContractorsV2';
import { CdsParties, CdsPartiesType } from './CdsParties';
import {
  PayIntV1HcmPersonDetails,
  PayIntV1HcmPersonDetailsType
} from './PayIntV1HcmPersonDetails';
import {
  CourseParticipants,
  CourseParticipantsType
} from './CourseParticipants';
import {
  PersonProjectRoles,
  PersonProjectRolesType
} from './PersonProjectRoles';
import { PersonDetails, PersonDetailsType } from './PersonDetails';
import {
  PersonCertificates,
  PersonCertificatesType
} from './PersonCertificates';
import { Contractors, ContractorsType } from './Contractors';
import {
  PersonTrustedPositions,
  PersonTrustedPositionsType
} from './PersonTrustedPositions';
import {
  ReleasedProductReadinessChecks,
  ReleasedProductReadinessChecksType
} from './ReleasedProductReadinessChecks';
import { LoanedEquipments, LoanedEquipmentsType } from './LoanedEquipments';
import {
  ProcessLibraryTasks,
  ProcessLibraryTasksType
} from './ProcessLibraryTasks';
import {
  DiscussionGoalComments,
  DiscussionGoalCommentsType
} from './DiscussionGoalComments';
import {
  PersonProfessionalExperiences,
  PersonProfessionalExperiencesType
} from './PersonProfessionalExperiences';
import { PersonSkills, PersonSkillsType } from './PersonSkills';
import { PersonEducations, PersonEducationsType } from './PersonEducations';
import { EssWorkerDetails, EssWorkerDetailsType } from './EssWorkerDetails';
import { PersonImages, PersonImagesType } from './PersonImages';
import { CandidatesToHire, CandidatesToHireType } from './CandidatesToHire';
import {
  PersonCountrySpecificFieldsV3,
  PersonCountrySpecificFieldsV3Type
} from './PersonCountrySpecificFieldsV3';
import { RetailCatalogs, RetailCatalogsType } from './RetailCatalogs';
import {
  CourseParticipantsV2,
  CourseParticipantsV2Type
} from './CourseParticipantsV2';
import { PersonAddresses, PersonAddressesType } from './PersonAddresses';
import { EmployeesV2, EmployeesV2Type } from './EmployeesV2';
import {
  DiscussionTopicComments,
  DiscussionTopicCommentsType
} from './DiscussionTopicComments';
import {
  OnboardingChecklistTemplateTasks,
  OnboardingChecklistTemplateTasksType
} from './OnboardingChecklistTemplateTasks';
import {
  ProductReadinessPolicyChecks,
  ProductReadinessPolicyChecksType
} from './ProductReadinessPolicyChecks';
import { PersonCourses, PersonCoursesType } from './PersonCourses';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import {
  DiscussionOverallComments,
  DiscussionOverallCommentsType
} from './DiscussionOverallComments';
import {
  RecruitingRequests,
  RecruitingRequestsType
} from './RecruitingRequests';
import {
  PersonCountrySpecificFieldsV2,
  PersonCountrySpecificFieldsV2Type
} from './PersonCountrySpecificFieldsV2';
import {
  PersonIdentificationNumbers,
  PersonIdentificationNumbersType
} from './PersonIdentificationNumbers';
import { PersonLaborUnions, PersonLaborUnionsType } from './PersonLaborUnions';
import {
  PersonCountrySpecificFields,
  PersonCountrySpecificFieldsType
} from './PersonCountrySpecificFields';

/**
 * This class represents the entity "People" of service "d365_metadata".
 */
export class People<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PeopleType<T>
{
  /**
   * Technical entity name for People.
   */
  static override _entityName = 'People';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the People entity.
   */
  static _keys = ['PartyNumber'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Contact Facebook Is Private.
   * @nullable
   */
  declare primaryContactFacebookIsPrivate?: NoYes | null;
  /**
   * Anniversary Month.
   * @nullable
   */
  declare anniversaryMonth?: MonthsOfYear | null;
  /**
   * Primary Contact Linked In Description.
   * @nullable
   */
  declare primaryContactLinkedInDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Birth Day.
   */
  declare birthDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Electronic Location Id.
   * @nullable
   */
  declare electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Purpose.
   * @nullable
   */
  declare primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
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
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Hobbies.
   * @nullable
   */
  declare hobbies?: DeserializedType<T, 'Edm.String'> | null;
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
   * Primary Contact Phone Extension.
   * @nullable
   */
  declare primaryContactPhoneExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Primary Contact Phone Is Mobile.
   * @nullable
   */
  declare primaryContactPhoneIsMobile?: NoYes | null;
  /**
   * Primary Contact Fax Purpose.
   * @nullable
   */
  declare primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Telex Description.
   * @nullable
   */
  declare primaryContactTelexDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Phone Description.
   * @nullable
   */
  declare primaryContactPhoneDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Personal Title.
   * @nullable
   */
  declare personalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Title.
   * @nullable
   */
  declare professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Description.
   * @nullable
   */
  declare primaryContactEmailDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Twitter Purpose.
   * @nullable
   */
  declare primaryContactTwitterPurpose?: DeserializedType<
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
   * Personal Suffix.
   * @nullable
   */
  declare personalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Children Names.
   * @nullable
   */
  declare childrenNames?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Purpose.
   * @nullable
   */
  declare primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
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
  declare gender?: Gender | null;
  /**
   * Primary Contact Facebook Description.
   * @nullable
   */
  declare primaryContactFacebookDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In.
   * @nullable
   */
  declare primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Year.
   */
  declare birthYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Primary Contact Facebook Purpose.
   * @nullable
   */
  declare primaryContactFacebookPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Primary Contact Telex Purpose.
   * @nullable
   */
  declare primaryContactTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
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
   * Anniversary Year.
   */
  declare anniversaryYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Full Primary Address.
   * @nullable
   */
  declare fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
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
   * Primary Contact Url Purpose.
   * @nullable
   */
  declare primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
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
   * Professional Suffix.
   * @nullable
   */
  declare professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
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
  declare maritalStatus?: DirPersonMaritalStatus | null;
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
   * Anniversary Day.
   */
  declare anniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Is Private.
   * @nullable
   */
  declare addressIsPrivate?: NoYes | null;
  /**
   * Primary Contact Linked In Purpose.
   * @nullable
   */
  declare primaryContactLinkedInPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Birth Month.
   * @nullable
   */
  declare birthMonth?: MonthsOfYear | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link PersonExams} entity.
   */
  declare personExam: PersonExams<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingWorkerChecklistTasks} entity.
   */
  declare checklistTasks: OnboardingWorkerChecklistTasks<T>[];
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Employees} entity.
   */
  declare employee?: Employees<T> | null;
  /**
   * One-to-many navigation property to the {@link TeamMembers} entity.
   */
  declare person: TeamMembers<T>[];
  /**
   * One-to-one navigation property to the {@link CourseInstructors} entity.
   */
  declare courseInstructor?: CourseInstructors<T> | null;
  /**
   * One-to-many navigation property to the {@link PersonScreenings} entity.
   */
  declare personScreening: PersonScreenings<T>[];
  /**
   * One-to-many navigation property to the {@link TeamMembersV2} entity.
   */
  declare teamMemberV2Person: TeamMembersV2<T>[];
  /**
   * One-to-one navigation property to the {@link ContractorsV2} entity.
   */
  declare contractorsV2?: ContractorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link CdsParties} entity.
   */
  declare cdsParty?: CdsParties<T> | null;
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPersonDetails} entity.
   */
  declare payIntPersonDetails: PayIntV1HcmPersonDetails<T>[];
  /**
   * One-to-many navigation property to the {@link CourseParticipants} entity.
   */
  declare courseParticipants: CourseParticipants<T>[];
  /**
   * One-to-many navigation property to the {@link PersonProjectRoles} entity.
   */
  declare personProjectRole: PersonProjectRoles<T>[];
  /**
   * One-to-many navigation property to the {@link PersonDetails} entity.
   */
  declare personDetails: PersonDetails<T>[];
  /**
   * One-to-many navigation property to the {@link PersonCertificates} entity.
   */
  declare personCertificate: PersonCertificates<T>[];
  /**
   * One-to-one navigation property to the {@link Contractors} entity.
   */
  declare contractor?: Contractors<T> | null;
  /**
   * One-to-many navigation property to the {@link PersonTrustedPositions} entity.
   */
  declare personTrustedPositon: PersonTrustedPositions<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductReadinessChecks} entity.
   */
  declare approvedReleasedProductReadinessChecks: ReleasedProductReadinessChecks<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductReadinessChecks} entity.
   */
  declare ownedReleasedProductReadinessChecks: ReleasedProductReadinessChecks<T>[];
  /**
   * One-to-many navigation property to the {@link LoanedEquipments} entity.
   */
  declare loanedEquipments: LoanedEquipments<T>[];
  /**
   * One-to-many navigation property to the {@link ProcessLibraryTasks} entity.
   */
  declare libraryTasks: ProcessLibraryTasks<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionGoalComments} entity.
   */
  declare discussionGoalComments: DiscussionGoalComments<T>[];
  /**
   * One-to-many navigation property to the {@link PersonProfessionalExperiences} entity.
   */
  declare personProfessionalExperience: PersonProfessionalExperiences<T>[];
  /**
   * One-to-many navigation property to the {@link PersonSkills} entity.
   */
  declare personSkill: PersonSkills<T>[];
  /**
   * One-to-many navigation property to the {@link PersonEducations} entity.
   */
  declare personEducation: PersonEducations<T>[];
  /**
   * One-to-one navigation property to the {@link EssWorkerDetails} entity.
   */
  declare essWorker?: EssWorkerDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link PersonImages} entity.
   */
  declare personImage?: PersonImages<T> | null;
  /**
   * One-to-many navigation property to the {@link CandidatesToHire} entity.
   */
  declare candidatesToHire: CandidatesToHire<T>[];
  /**
   * One-to-one navigation property to the {@link PersonCountrySpecificFieldsV3} entity.
   */
  declare personCountrySpecificFieldsV3?: PersonCountrySpecificFieldsV3<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailCatalogs} entity.
   */
  declare retailCatalog: RetailCatalogs<T>[];
  /**
   * One-to-many navigation property to the {@link CourseParticipantsV2} entity.
   */
  declare courseParticipantsV2Person: CourseParticipantsV2<T>[];
  /**
   * One-to-many navigation property to the {@link PersonAddresses} entity.
   */
  declare personAddresses: PersonAddresses<T>[];
  /**
   * One-to-one navigation property to the {@link EmployeesV2} entity.
   */
  declare employeesV2?: EmployeesV2<T> | null;
  /**
   * One-to-many navigation property to the {@link DiscussionTopicComments} entity.
   */
  declare discussionTopicComments: DiscussionTopicComments<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingChecklistTemplateTasks} entity.
   */
  declare checklistTemplateTasks: OnboardingChecklistTemplateTasks<T>[];
  /**
   * One-to-many navigation property to the {@link ProductReadinessPolicyChecks} entity.
   */
  declare productReadinessPolicyChecks: ProductReadinessPolicyChecks<T>[];
  /**
   * One-to-many navigation property to the {@link PersonCourses} entity.
   */
  declare personCourse: PersonCourses<T>[];
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;
  /**
   * One-to-many navigation property to the {@link DiscussionOverallComments} entity.
   */
  declare discussionOverallComments: DiscussionOverallComments<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequests} entity.
   */
  declare recruitingRequests: RecruitingRequests<T>[];
  /**
   * One-to-one navigation property to the {@link PersonCountrySpecificFieldsV2} entity.
   */
  declare personCountrySpecificFieldsV2?: PersonCountrySpecificFieldsV2<T> | null;
  /**
   * One-to-many navigation property to the {@link PersonIdentificationNumbers} entity.
   */
  declare identificationNumbers: PersonIdentificationNumbers<T>[];
  /**
   * One-to-many navigation property to the {@link PersonLaborUnions} entity.
   */
  declare personLaborUnions: PersonLaborUnions<T>[];
  /**
   * One-to-one navigation property to the {@link PersonCountrySpecificFields} entity.
   */
  declare personCountrySpecificFields?: PersonCountrySpecificFields<T> | null;

  constructor(_entityApi: PeopleApi<T>) {
    super(_entityApi);
  }
}

export interface PeopleType<T extends DeSerializers = DefaultDeSerializers> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  primaryContactFacebookIsPrivate?: NoYes | null;
  anniversaryMonth?: MonthsOfYear | null;
  primaryContactLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  birthDay: DeserializedType<T, 'Edm.Int32'>;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  hobbies?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  initials?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  primaryContactPhoneIsMobile?: NoYes | null;
  primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  personalTitle?: DeserializedType<T, 'Edm.String'> | null;
  professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  personalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  childrenNames?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTelex?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  gender?: Gender | null;
  primaryContactFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  birthYear: DeserializedType<T, 'Edm.Int32'>;
  primaryContactFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  primaryContactTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailIsIm?: NoYes | null;
  phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  anniversaryYear: DeserializedType<T, 'Edm.Int32'>;
  fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInIsPrivate?: NoYes | null;
  primaryContactTwitterIsPrivate?: NoYes | null;
  phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  maritalStatus?: DirPersonMaritalStatus | null;
  primaryContactFaxDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  anniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  addressIsPrivate?: NoYes | null;
  primaryContactLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  birthMonth?: MonthsOfYear | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personExam: PersonExamsType<T>[];
  checklistTasks: OnboardingWorkerChecklistTasksType<T>[];
  worker?: WorkersType<T> | null;
  employee?: EmployeesType<T> | null;
  person: TeamMembersType<T>[];
  courseInstructor?: CourseInstructorsType<T> | null;
  personScreening: PersonScreeningsType<T>[];
  teamMemberV2Person: TeamMembersV2Type<T>[];
  contractorsV2?: ContractorsV2Type<T> | null;
  cdsParty?: CdsPartiesType<T> | null;
  payIntPersonDetails: PayIntV1HcmPersonDetailsType<T>[];
  courseParticipants: CourseParticipantsType<T>[];
  personProjectRole: PersonProjectRolesType<T>[];
  personDetails: PersonDetailsType<T>[];
  personCertificate: PersonCertificatesType<T>[];
  contractor?: ContractorsType<T> | null;
  personTrustedPositon: PersonTrustedPositionsType<T>[];
  approvedReleasedProductReadinessChecks: ReleasedProductReadinessChecksType<T>[];
  ownedReleasedProductReadinessChecks: ReleasedProductReadinessChecksType<T>[];
  loanedEquipments: LoanedEquipmentsType<T>[];
  libraryTasks: ProcessLibraryTasksType<T>[];
  discussionGoalComments: DiscussionGoalCommentsType<T>[];
  personProfessionalExperience: PersonProfessionalExperiencesType<T>[];
  personSkill: PersonSkillsType<T>[];
  personEducation: PersonEducationsType<T>[];
  essWorker?: EssWorkerDetailsType<T> | null;
  personImage?: PersonImagesType<T> | null;
  candidatesToHire: CandidatesToHireType<T>[];
  personCountrySpecificFieldsV3?: PersonCountrySpecificFieldsV3Type<T> | null;
  retailCatalog: RetailCatalogsType<T>[];
  courseParticipantsV2Person: CourseParticipantsV2Type<T>[];
  personAddresses: PersonAddressesType<T>[];
  employeesV2?: EmployeesV2Type<T> | null;
  discussionTopicComments: DiscussionTopicCommentsType<T>[];
  checklistTemplateTasks: OnboardingChecklistTemplateTasksType<T>[];
  productReadinessPolicyChecks: ProductReadinessPolicyChecksType<T>[];
  personCourse: PersonCoursesType<T>[];
  baseWorker?: BaseWorkersType<T> | null;
  discussionOverallComments: DiscussionOverallCommentsType<T>[];
  recruitingRequests: RecruitingRequestsType<T>[];
  personCountrySpecificFieldsV2?: PersonCountrySpecificFieldsV2Type<T> | null;
  identificationNumbers: PersonIdentificationNumbersType<T>[];
  personLaborUnions: PersonLaborUnionsType<T>[];
  personCountrySpecificFields?: PersonCountrySpecificFieldsType<T> | null;
}
