/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { People } from './People';
import { PeopleRequestBuilder } from './PeopleRequestBuilder';
import { PersonExamsApi } from './PersonExamsApi';
import { OnboardingWorkerChecklistTasksApi } from './OnboardingWorkerChecklistTasksApi';
import { WorkersApi } from './WorkersApi';
import { EmployeesApi } from './EmployeesApi';
import { TeamMembersApi } from './TeamMembersApi';
import { CourseInstructorsApi } from './CourseInstructorsApi';
import { PersonScreeningsApi } from './PersonScreeningsApi';
import { TeamMembersV2Api } from './TeamMembersV2Api';
import { ContractorsV2Api } from './ContractorsV2Api';
import { CdsPartiesApi } from './CdsPartiesApi';
import { PayIntV1HcmPersonDetailsApi } from './PayIntV1HcmPersonDetailsApi';
import { CourseParticipantsApi } from './CourseParticipantsApi';
import { PersonProjectRolesApi } from './PersonProjectRolesApi';
import { PersonDetailsApi } from './PersonDetailsApi';
import { PersonCertificatesApi } from './PersonCertificatesApi';
import { ContractorsApi } from './ContractorsApi';
import { PersonTrustedPositionsApi } from './PersonTrustedPositionsApi';
import { ReleasedProductReadinessChecksApi } from './ReleasedProductReadinessChecksApi';
import { LoanedEquipmentsApi } from './LoanedEquipmentsApi';
import { ProcessLibraryTasksApi } from './ProcessLibraryTasksApi';
import { DiscussionGoalCommentsApi } from './DiscussionGoalCommentsApi';
import { PersonProfessionalExperiencesApi } from './PersonProfessionalExperiencesApi';
import { PersonSkillsApi } from './PersonSkillsApi';
import { PersonEducationsApi } from './PersonEducationsApi';
import { EssWorkerDetailsApi } from './EssWorkerDetailsApi';
import { PersonImagesApi } from './PersonImagesApi';
import { CandidatesToHireApi } from './CandidatesToHireApi';
import { PersonCountrySpecificFieldsV3Api } from './PersonCountrySpecificFieldsV3Api';
import { RetailCatalogsApi } from './RetailCatalogsApi';
import { CourseParticipantsV2Api } from './CourseParticipantsV2Api';
import { PersonAddressesApi } from './PersonAddressesApi';
import { EmployeesV2Api } from './EmployeesV2Api';
import { DiscussionTopicCommentsApi } from './DiscussionTopicCommentsApi';
import { OnboardingChecklistTemplateTasksApi } from './OnboardingChecklistTemplateTasksApi';
import { ProductReadinessPolicyChecksApi } from './ProductReadinessPolicyChecksApi';
import { PersonCoursesApi } from './PersonCoursesApi';
import { BaseWorkersApi } from './BaseWorkersApi';
import { DiscussionOverallCommentsApi } from './DiscussionOverallCommentsApi';
import { RecruitingRequestsApi } from './RecruitingRequestsApi';
import { PersonCountrySpecificFieldsV2Api } from './PersonCountrySpecificFieldsV2Api';
import { PersonIdentificationNumbersApi } from './PersonIdentificationNumbersApi';
import { PersonLaborUnionsApi } from './PersonLaborUnionsApi';
import { PersonCountrySpecificFieldsApi } from './PersonCountrySpecificFieldsApi';
import { NoYes } from './NoYes';
import { MonthsOfYear } from './MonthsOfYear';
import { Timezone } from './Timezone';
import { Gender } from './Gender';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PeopleApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<People<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): PeopleApi<DeSerializersT> {
    return new PeopleApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link personExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EXAM: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TASKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      OnboardingWorkerChecklistTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      TeamMembersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseInstructor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_INSTRUCTOR: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      CourseInstructorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personScreening} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SCREENING: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonScreeningsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link teamMemberV2Person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBER_V_2_PERSON: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      TeamMembersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsParty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_PERSON_DETAILS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseParticipants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_PARTICIPANTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      CourseParticipantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personProjectRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_PROJECT_ROLE: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonProjectRolesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_DETAILS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personCertificate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_CERTIFICATE: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contractor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTOR: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personTrustedPositon} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_TRUSTED_POSITON: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonTrustedPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link approvedReleasedProductReadinessChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVED_RELEASED_PRODUCT_READINESS_CHECKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      ReleasedProductReadinessChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ownedReleasedProductReadinessChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OWNED_RELEASED_PRODUCT_READINESS_CHECKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      ReleasedProductReadinessChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loanedEquipments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOANED_EQUIPMENTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      LoanedEquipmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link libraryTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      ProcessLibraryTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionGoalComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_GOAL_COMMENTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personProfessionalExperience} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_PROFESSIONAL_EXPERIENCE: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonProfessionalExperiencesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SKILL: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personEducation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EDUCATION: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonEducationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link essWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ESS_WORKER: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      EssWorkerDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personImage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_IMAGE: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonImagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link candidatesToHire} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANDIDATES_TO_HIRE: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      CandidatesToHireApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personCountrySpecificFieldsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_COUNTRY_SPECIFIC_FIELDS_V_3: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonCountrySpecificFieldsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseParticipantsV2Person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_PARTICIPANTS_V_2_PERSON: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      CourseParticipantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_ADDRESSES: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTopicComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TOPIC_COMMENTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTemplateTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TEMPLATE_TASKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productReadinessPolicyChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY_CHECKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPolicyChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personCourse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_COURSE: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonCoursesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionOverallComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_OVERALL_COMMENTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      DiscussionOverallCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personCountrySpecificFieldsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_COUNTRY_SPECIFIC_FIELDS_V_2: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonCountrySpecificFieldsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link identificationNumbers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IDENTIFICATION_NUMBERS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonIdentificationNumbersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personLaborUnions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_LABOR_UNIONS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonLaborUnionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personCountrySpecificFields} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_COUNTRY_SPECIFIC_FIELDS: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonCountrySpecificFieldsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PersonExamsApi<DeSerializersT>,
      OnboardingWorkerChecklistTasksApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      EmployeesApi<DeSerializersT>,
      TeamMembersApi<DeSerializersT>,
      CourseInstructorsApi<DeSerializersT>,
      PersonScreeningsApi<DeSerializersT>,
      TeamMembersV2Api<DeSerializersT>,
      ContractorsV2Api<DeSerializersT>,
      CdsPartiesApi<DeSerializersT>,
      PayIntV1HcmPersonDetailsApi<DeSerializersT>,
      CourseParticipantsApi<DeSerializersT>,
      PersonProjectRolesApi<DeSerializersT>,
      PersonDetailsApi<DeSerializersT>,
      PersonCertificatesApi<DeSerializersT>,
      ContractorsApi<DeSerializersT>,
      PersonTrustedPositionsApi<DeSerializersT>,
      ReleasedProductReadinessChecksApi<DeSerializersT>,
      ReleasedProductReadinessChecksApi<DeSerializersT>,
      LoanedEquipmentsApi<DeSerializersT>,
      ProcessLibraryTasksApi<DeSerializersT>,
      DiscussionGoalCommentsApi<DeSerializersT>,
      PersonProfessionalExperiencesApi<DeSerializersT>,
      PersonSkillsApi<DeSerializersT>,
      PersonEducationsApi<DeSerializersT>,
      EssWorkerDetailsApi<DeSerializersT>,
      PersonImagesApi<DeSerializersT>,
      CandidatesToHireApi<DeSerializersT>,
      PersonCountrySpecificFieldsV3Api<DeSerializersT>,
      RetailCatalogsApi<DeSerializersT>,
      CourseParticipantsV2Api<DeSerializersT>,
      PersonAddressesApi<DeSerializersT>,
      EmployeesV2Api<DeSerializersT>,
      DiscussionTopicCommentsApi<DeSerializersT>,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>,
      ProductReadinessPolicyChecksApi<DeSerializersT>,
      PersonCoursesApi<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>,
      DiscussionOverallCommentsApi<DeSerializersT>,
      RecruitingRequestsApi<DeSerializersT>,
      PersonCountrySpecificFieldsV2Api<DeSerializersT>,
      PersonIdentificationNumbersApi<DeSerializersT>,
      PersonLaborUnionsApi<DeSerializersT>,
      PersonCountrySpecificFieldsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSON_EXAM: new OneToManyLink('PersonExam', this, linkedApis[0]),
      CHECKLIST_TASKS: new OneToManyLink('ChecklistTasks', this, linkedApis[1]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[2]),
      EMPLOYEE: new OneToOneLink('Employee', this, linkedApis[3]),
      PERSON: new OneToManyLink('Person', this, linkedApis[4]),
      COURSE_INSTRUCTOR: new OneToOneLink(
        'CourseInstructor',
        this,
        linkedApis[5]
      ),
      PERSON_SCREENING: new OneToManyLink(
        'PersonScreening',
        this,
        linkedApis[6]
      ),
      TEAM_MEMBER_V_2_PERSON: new OneToManyLink(
        'TeamMemberV2Person',
        this,
        linkedApis[7]
      ),
      CONTRACTORS_V_2: new OneToOneLink('ContractorsV2', this, linkedApis[8]),
      CDS_PARTY: new OneToOneLink('CDSParty', this, linkedApis[9]),
      PAY_INT_PERSON_DETAILS: new OneToManyLink(
        'PayIntPersonDetails',
        this,
        linkedApis[10]
      ),
      COURSE_PARTICIPANTS: new OneToManyLink(
        'CourseParticipants',
        this,
        linkedApis[11]
      ),
      PERSON_PROJECT_ROLE: new OneToManyLink(
        'PersonProjectRole',
        this,
        linkedApis[12]
      ),
      PERSON_DETAILS: new OneToManyLink('PersonDetails', this, linkedApis[13]),
      PERSON_CERTIFICATE: new OneToManyLink(
        'PersonCertificate',
        this,
        linkedApis[14]
      ),
      CONTRACTOR: new OneToOneLink('Contractor', this, linkedApis[15]),
      PERSON_TRUSTED_POSITON: new OneToManyLink(
        'PersonTrustedPositon',
        this,
        linkedApis[16]
      ),
      APPROVED_RELEASED_PRODUCT_READINESS_CHECKS: new OneToManyLink(
        'ApprovedReleasedProductReadinessChecks',
        this,
        linkedApis[17]
      ),
      OWNED_RELEASED_PRODUCT_READINESS_CHECKS: new OneToManyLink(
        'OwnedReleasedProductReadinessChecks',
        this,
        linkedApis[18]
      ),
      LOANED_EQUIPMENTS: new OneToManyLink(
        'LoanedEquipments',
        this,
        linkedApis[19]
      ),
      LIBRARY_TASKS: new OneToManyLink('LibraryTasks', this, linkedApis[20]),
      DISCUSSION_GOAL_COMMENTS: new OneToManyLink(
        'DiscussionGoalComments',
        this,
        linkedApis[21]
      ),
      PERSON_PROFESSIONAL_EXPERIENCE: new OneToManyLink(
        'PersonProfessionalExperience',
        this,
        linkedApis[22]
      ),
      PERSON_SKILL: new OneToManyLink('PersonSkill', this, linkedApis[23]),
      PERSON_EDUCATION: new OneToManyLink(
        'PersonEducation',
        this,
        linkedApis[24]
      ),
      ESS_WORKER: new OneToOneLink('EssWorker', this, linkedApis[25]),
      PERSON_IMAGE: new OneToOneLink('PersonImage', this, linkedApis[26]),
      CANDIDATES_TO_HIRE: new OneToManyLink(
        'CandidatesToHire',
        this,
        linkedApis[27]
      ),
      PERSON_COUNTRY_SPECIFIC_FIELDS_V_3: new OneToOneLink(
        'PersonCountrySpecificFieldsV3',
        this,
        linkedApis[28]
      ),
      RETAIL_CATALOG: new OneToManyLink('RetailCatalog', this, linkedApis[29]),
      COURSE_PARTICIPANTS_V_2_PERSON: new OneToManyLink(
        'CourseParticipantsV2Person',
        this,
        linkedApis[30]
      ),
      PERSON_ADDRESSES: new OneToManyLink(
        'PersonAddresses',
        this,
        linkedApis[31]
      ),
      EMPLOYEES_V_2: new OneToOneLink('EmployeesV2', this, linkedApis[32]),
      DISCUSSION_TOPIC_COMMENTS: new OneToManyLink(
        'DiscussionTopicComments',
        this,
        linkedApis[33]
      ),
      CHECKLIST_TEMPLATE_TASKS: new OneToManyLink(
        'ChecklistTemplateTasks',
        this,
        linkedApis[34]
      ),
      PRODUCT_READINESS_POLICY_CHECKS: new OneToManyLink(
        'ProductReadinessPolicyChecks',
        this,
        linkedApis[35]
      ),
      PERSON_COURSE: new OneToManyLink('PersonCourse', this, linkedApis[36]),
      BASE_WORKER: new OneToOneLink('BaseWorker', this, linkedApis[37]),
      DISCUSSION_OVERALL_COMMENTS: new OneToManyLink(
        'DiscussionOverallComments',
        this,
        linkedApis[38]
      ),
      RECRUITING_REQUESTS: new OneToManyLink(
        'RecruitingRequests',
        this,
        linkedApis[39]
      ),
      PERSON_COUNTRY_SPECIFIC_FIELDS_V_2: new OneToOneLink(
        'PersonCountrySpecificFieldsV2',
        this,
        linkedApis[40]
      ),
      IDENTIFICATION_NUMBERS: new OneToManyLink(
        'IdentificationNumbers',
        this,
        linkedApis[41]
      ),
      PERSON_LABOR_UNIONS: new OneToManyLink(
        'PersonLaborUnions',
        this,
        linkedApis[42]
      ),
      PERSON_COUNTRY_SPECIFIC_FIELDS: new OneToOneLink(
        'PersonCountrySpecificFields',
        this,
        linkedApis[43]
      )
    };
    return this;
  }

  entityConstructor = People;

  requestBuilder(): PeopleRequestBuilder<DeSerializersT> {
    return new PeopleRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<People<DeSerializersT>, DeSerializersT> {
    return entityBuilder<People<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<People<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof People, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(People, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_IS_PRIVATE: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ANNIVERSARY_MONTH: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DAY: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_PURPOSE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    HOBBIES: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_EXTENSION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIALS: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_EXTENSION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_CONTACT_PHONE_IS_MOBILE: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_PURPOSE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_CONTACT_TELEX_DESCRIPTION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_DESCRIPTION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_PREFIX: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNOWN_AS: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONAL_TITLE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_TITLE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_DESCRIPTION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_PURPOSE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_SEQUENCE_DISPLAY_AS: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONAL_SUFFIX: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHILDREN_NAMES: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_PURPOSE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENDER: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      Gender,
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TYPE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BOOKS: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_YEAR: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_DESCRIPTION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_CONTACT_TELEX_PURPOSE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_IS_IM: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONETIC_LAST_NAME: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNIVERSARY_YEAR: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FULL_PRIMARY_ADDRESS: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_IS_PRIVATE: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_IS_PRIVATE: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_PURPOSE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARITAL_STATUS: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      DirPersonMaritalStatus,
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_DESCRIPTION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNIVERSARY_DAY: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_IS_PRIVATE: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_MONTH: EnumField<
      People<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      People<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EXAM: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TASKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      OnboardingWorkerChecklistTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      TeamMembersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseInstructor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_INSTRUCTOR: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      CourseInstructorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personScreening} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SCREENING: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonScreeningsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link teamMemberV2Person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEAM_MEMBER_V_2_PERSON: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      TeamMembersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsParty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_PERSON_DETAILS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseParticipants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_PARTICIPANTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      CourseParticipantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personProjectRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_PROJECT_ROLE: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonProjectRolesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_DETAILS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personCertificate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_CERTIFICATE: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contractor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTOR: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personTrustedPositon} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_TRUSTED_POSITON: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonTrustedPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link approvedReleasedProductReadinessChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVED_RELEASED_PRODUCT_READINESS_CHECKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      ReleasedProductReadinessChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ownedReleasedProductReadinessChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OWNED_RELEASED_PRODUCT_READINESS_CHECKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      ReleasedProductReadinessChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loanedEquipments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOANED_EQUIPMENTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      LoanedEquipmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link libraryTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      ProcessLibraryTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionGoalComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_GOAL_COMMENTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personProfessionalExperience} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_PROFESSIONAL_EXPERIENCE: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonProfessionalExperiencesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SKILL: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personEducation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EDUCATION: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonEducationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link essWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ESS_WORKER: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      EssWorkerDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personImage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_IMAGE: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonImagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link candidatesToHire} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANDIDATES_TO_HIRE: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      CandidatesToHireApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personCountrySpecificFieldsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_COUNTRY_SPECIFIC_FIELDS_V_3: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonCountrySpecificFieldsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseParticipantsV2Person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_PARTICIPANTS_V_2_PERSON: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      CourseParticipantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_ADDRESSES: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTopicComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TOPIC_COMMENTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTemplateTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TEMPLATE_TASKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productReadinessPolicyChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY_CHECKS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPolicyChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personCourse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_COURSE: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonCoursesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionOverallComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_OVERALL_COMMENTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      DiscussionOverallCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personCountrySpecificFieldsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_COUNTRY_SPECIFIC_FIELDS_V_2: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonCountrySpecificFieldsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link identificationNumbers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IDENTIFICATION_NUMBERS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonIdentificationNumbersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personLaborUnions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_LABOR_UNIONS: OneToManyLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonLaborUnionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personCountrySpecificFields} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_COUNTRY_SPECIFIC_FIELDS: OneToOneLink<
      People<DeSerializersT>,
      DeSerializersT,
      PersonCountrySpecificFieldsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<People<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link primaryContactFacebookIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactFacebookIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link anniversaryMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNIVERSARY_MONTH: fieldBuilder.buildEnumField(
          'AnniversaryMonth',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_DAY: fieldBuilder.buildEdmTypeField(
          'BirthDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link electronicLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhonePurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhonePurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebook',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'AddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link hobbies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOBBIES: fieldBuilder.buildEdmTypeField('Hobbies', 'Edm.String', true),
        /**
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'AddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link initials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIALS: fieldBuilder.buildEdmTypeField(
          'Initials',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link primaryContactPhoneIsMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_IS_MOBILE: fieldBuilder.buildEnumField(
          'PrimaryContactPhoneIsMobile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link primaryContactTelexDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastNamePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'LastNamePrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link knownAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS: fieldBuilder.buildEdmTypeField('KnownAs', 'Edm.String', true),
        /**
         * Static representation of the {@link phoneticMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link professionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'ProfessionalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameSequenceDisplayAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_SEQUENCE_DISPLAY_AS: fieldBuilder.buildEdmTypeField(
          'NameSequenceDisplayAs',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link childrenNames} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHILDREN_NAMES: fieldBuilder.buildEdmTypeField(
          'ChildrenNames',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', Gender, true),
        /**
         * Static representation of the {@link primaryContactFacebookDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'PartyType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressBooks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOKS: fieldBuilder.buildEdmTypeField(
          'AddressBooks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link primaryContactLinkedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedIn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_YEAR: fieldBuilder.buildEdmTypeField(
          'BirthYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link primaryContactFacebookPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link primaryContactTelexPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailIsIm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_IS_IM: fieldBuilder.buildEnumField(
          'PrimaryContactEmailIsIM',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link phoneticLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link anniversaryYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNIVERSARY_YEAR: fieldBuilder.buildEdmTypeField(
          'AnniversaryYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fullPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactLinkedInIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactTwitterIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link phoneticFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link professionalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFESSIONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'ProfessionalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'MiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARITAL_STATUS: fieldBuilder.buildEnumField(
          'MaritalStatus',
          DirPersonMaritalStatus,
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link anniversaryDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNIVERSARY_DAY: fieldBuilder.buildEdmTypeField(
          'AnniversaryDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_IS_PRIVATE: fieldBuilder.buildEnumField(
          'AddressIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_MONTH: fieldBuilder.buildEnumField(
          'BirthMonth',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', People)
      };
    }

    return this._schema;
  }
}
