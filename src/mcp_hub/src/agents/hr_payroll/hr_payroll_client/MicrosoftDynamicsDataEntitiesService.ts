// @ts-nocheck
import type { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  ODataService,
  EntityTypeServiceV4,
  ODataServiceOptionsInternal,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import type {
  OrganizationHierarchyPublishedId,
  HumanResourcesParametersId,
  PayIntV1LaborUnionsId,
  HcmWorkerPersonIdentificationNumberDualWriteId,
  CourseTypeNotesId,
  EssSystemParametersId,
  BenefitEarningBasisId,
  WorkerPersonDetailsId,
  PayIntV1HcmPersonDetailsId,
  WorkerProfessionalExperienceId,
  LaborUnionsId,
  WorkerEducationId,
  PersonDetailsId,
  LeaveAbsenceParametersId,
  OrganizationHierarchyPublishedV2Id,
  SignLimitParametersId,
  WorkerTimeOffId,
  PayIntV1VariableCompensationTypesId,
  PositionNotificationSubscriptionsId,
  HoursWorkedId,
  HumanResourcesSharedParametersId,
  PayIntV1UnionsId,
  UnionsId,
  WorkerEnrolledBenefitDetailsId,
  PayIntV1EmploymentDetailId,
  PersonCountrySpecificFieldsId,
  TimeAndAttendanceTimeProfileDetailsId,
  OrganizationHierarchyPublished,
  EditableOrganizationHierarchyPublished,
  HumanResourcesParameters,
  EditableHumanResourcesParameters,
  PayIntV1LaborUnions,
  EditablePayIntV1LaborUnions,
  HcmWorkerPersonIdentificationNumberDualWrite,
  EditableHcmWorkerPersonIdentificationNumberDualWrite,
  CourseTypeNotes,
  EditableCourseTypeNotes,
  EssSystemParameters,
  EditableEssSystemParameters,
  BenefitEarningBasis,
  EditableBenefitEarningBasis,
  WorkerPersonDetails,
  EditableWorkerPersonDetails,
  PayIntV1HcmPersonDetails,
  EditablePayIntV1HcmPersonDetails,
  WorkerProfessionalExperience,
  EditableWorkerProfessionalExperience,
  LaborUnions,
  EditableLaborUnions,
  WorkerEducation,
  EditableWorkerEducation,
  PersonDetails,
  EditablePersonDetails,
  LeaveAbsenceParameters,
  EditableLeaveAbsenceParameters,
  OrganizationHierarchyPublishedV2,
  EditableOrganizationHierarchyPublishedV2,
  SignLimitParameters,
  EditableSignLimitParameters,
  WorkerTimeOff,
  EditableWorkerTimeOff,
  PayIntV1VariableCompensationTypes,
  EditablePayIntV1VariableCompensationTypes,
  PositionNotificationSubscriptions,
  EditablePositionNotificationSubscriptions,
  HoursWorked,
  EditableHoursWorked,
  HumanResourcesSharedParameters,
  EditableHumanResourcesSharedParameters,
  PayIntV1Unions,
  EditablePayIntV1Unions,
  Unions,
  EditableUnions,
  WorkerEnrolledBenefitDetails,
  EditableWorkerEnrolledBenefitDetails,
  PayIntV1EmploymentDetail,
  EditablePayIntV1EmploymentDetail,
  PersonCountrySpecificFields,
  EditablePersonCountrySpecificFields,
  TimeAndAttendanceTimeProfileDetails,
  EditableTimeAndAttendanceTimeProfileDetails,
} from "./MicrosoftDynamicsDataEntitiesModel";
import type {
  QOrganizationHierarchyPublished,
  QHumanResourcesParameters,
  QPayIntV1LaborUnions,
  QHcmWorkerPersonIdentificationNumberDualWrite,
  QCourseTypeNotes,
  QEssSystemParameters,
  QBenefitEarningBasis,
  QWorkerPersonDetails,
  QPayIntV1HcmPersonDetails,
  QWorkerProfessionalExperience,
  QLaborUnions,
  QWorkerEducation,
  QPersonDetails,
  QLeaveAbsenceParameters,
  QOrganizationHierarchyPublishedV2,
  QSignLimitParameters,
  QWorkerTimeOff,
  QPayIntV1VariableCompensationTypes,
  QPositionNotificationSubscriptions,
  QHoursWorked,
  QHumanResourcesSharedParameters,
  QPayIntV1Unions,
  QUnions,
  QWorkerEnrolledBenefitDetails,
  QPayIntV1EmploymentDetail,
  QPersonCountrySpecificFields,
  QTimeAndAttendanceTimeProfileDetails,
} from "./QMicrosoftDynamicsDataEntities";
import {
  QOrganizationHierarchyPublishedId,
  QHumanResourcesParametersId,
  QPayIntV1LaborUnionsId,
  QHcmWorkerPersonIdentificationNumberDualWriteId,
  QCourseTypeNotesId,
  QEssSystemParametersId,
  QBenefitEarningBasisId,
  QWorkerPersonDetailsId,
  QPayIntV1HcmPersonDetailsId,
  QWorkerProfessionalExperienceId,
  QLaborUnionsId,
  QWorkerEducationId,
  QPersonDetailsId,
  QLeaveAbsenceParametersId,
  QOrganizationHierarchyPublishedV2Id,
  QSignLimitParametersId,
  QWorkerTimeOffId,
  QPayIntV1VariableCompensationTypesId,
  QPositionNotificationSubscriptionsId,
  QHoursWorkedId,
  QHumanResourcesSharedParametersId,
  QPayIntV1UnionsId,
  QUnionsId,
  QWorkerEnrolledBenefitDetailsId,
  QPayIntV1EmploymentDetailId,
  QPersonCountrySpecificFieldsId,
  QTimeAndAttendanceTimeProfileDetailsId,
  qOrganizationHierarchyPublished,
  qHumanResourcesParameters,
  qPayIntV1LaborUnions,
  qHcmWorkerPersonIdentificationNumberDualWrite,
  qCourseTypeNotes,
  qEssSystemParameters,
  qBenefitEarningBasis,
  qWorkerPersonDetails,
  qPayIntV1HcmPersonDetails,
  qWorkerProfessionalExperience,
  qLaborUnions,
  qWorkerEducation,
  qPersonDetails,
  qLeaveAbsenceParameters,
  qOrganizationHierarchyPublishedV2,
  qSignLimitParameters,
  qWorkerTimeOff,
  qPayIntV1VariableCompensationTypes,
  qPositionNotificationSubscriptions,
  qHoursWorked,
  qHumanResourcesSharedParameters,
  qPayIntV1Unions,
  qUnions,
  qWorkerEnrolledBenefitDetails,
  qPayIntV1EmploymentDetail,
  qPersonCountrySpecificFields,
  qTimeAndAttendanceTimeProfileDetails,
} from "./QMicrosoftDynamicsDataEntities";

export class MicrosoftDynamicsDataEntitiesService<
  in out ClientType extends ODataHttpClient,
> extends ODataService<ClientType> {
  public organizationHierarchyPublished(): OrganizationHierarchyPublishedCollectionService<ClientType>;
  public organizationHierarchyPublished(
    id: OrganizationHierarchyPublishedId,
  ): OrganizationHierarchyPublishedService<ClientType>;
  public organizationHierarchyPublished(
    id?: OrganizationHierarchyPublishedId | undefined,
  ) {
    const fieldName = "OrganizationHierarchyPublished";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new OrganizationHierarchyPublishedCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new OrganizationHierarchyPublishedService(
          client,
          path,
          new QOrganizationHierarchyPublishedId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public humanResourcesParameters(): HumanResourcesParametersCollectionService<ClientType>;
  public humanResourcesParameters(
    id: HumanResourcesParametersId,
  ): HumanResourcesParametersService<ClientType>;
  public humanResourcesParameters(id?: HumanResourcesParametersId | undefined) {
    const fieldName = "HumanResourcesParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new HumanResourcesParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new HumanResourcesParametersService(
          client,
          path,
          new QHumanResourcesParametersId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public payIntV1LaborUnions(): PayIntV1LaborUnionsCollectionService<ClientType>;
  public payIntV1LaborUnions(
    id: PayIntV1LaborUnionsId,
  ): PayIntV1LaborUnionsService<ClientType>;
  public payIntV1LaborUnions(id?: PayIntV1LaborUnionsId | undefined) {
    const fieldName = "PayIntV1LaborUnions";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PayIntV1LaborUnionsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PayIntV1LaborUnionsService(
          client,
          path,
          new QPayIntV1LaborUnionsId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public hcmWorkerPersonIdentificationNumberDualWrite(): HcmWorkerPersonIdentificationNumberDualWriteCollectionService<ClientType>;
  public hcmWorkerPersonIdentificationNumberDualWrite(
    id: HcmWorkerPersonIdentificationNumberDualWriteId,
  ): HcmWorkerPersonIdentificationNumberDualWriteService<ClientType>;
  public hcmWorkerPersonIdentificationNumberDualWrite(
    id?: HcmWorkerPersonIdentificationNumberDualWriteId | undefined,
  ) {
    const fieldName = "HcmWorkerPersonIdentificationNumberDualWrite";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new HcmWorkerPersonIdentificationNumberDualWriteCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new HcmWorkerPersonIdentificationNumberDualWriteService(
          client,
          path,
          new QHcmWorkerPersonIdentificationNumberDualWriteId(
            fieldName,
          ).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public courseTypeNotes(): CourseTypeNotesCollectionService<ClientType>;
  public courseTypeNotes(
    id: CourseTypeNotesId,
  ): CourseTypeNotesService<ClientType>;
  public courseTypeNotes(id?: CourseTypeNotesId | undefined) {
    const fieldName = "CourseTypeNotes";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CourseTypeNotesCollectionService(client, path, fieldName, options)
      : new CourseTypeNotesService(
          client,
          path,
          new QCourseTypeNotesId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public essSystemParameters(): EssSystemParametersCollectionService<ClientType>;
  public essSystemParameters(
    id: EssSystemParametersId,
  ): EssSystemParametersService<ClientType>;
  public essSystemParameters(id?: EssSystemParametersId | undefined) {
    const fieldName = "EssSystemParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EssSystemParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new EssSystemParametersService(
          client,
          path,
          new QEssSystemParametersId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public benefitEarningBasis(): BenefitEarningBasisCollectionService<ClientType>;
  public benefitEarningBasis(
    id: BenefitEarningBasisId,
  ): BenefitEarningBasisService<ClientType>;
  public benefitEarningBasis(id?: BenefitEarningBasisId | undefined) {
    const fieldName = "BenefitEarningBasis";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new BenefitEarningBasisCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new BenefitEarningBasisService(
          client,
          path,
          new QBenefitEarningBasisId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public workerPersonDetails(): WorkerPersonDetailsCollectionService<ClientType>;
  public workerPersonDetails(
    id: WorkerPersonDetailsId,
  ): WorkerPersonDetailsService<ClientType>;
  public workerPersonDetails(id?: WorkerPersonDetailsId | undefined) {
    const fieldName = "WorkerPersonDetails";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WorkerPersonDetailsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new WorkerPersonDetailsService(
          client,
          path,
          new QWorkerPersonDetailsId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public payIntV1HcmPersonDetails(): PayIntV1HcmPersonDetailsCollectionService<ClientType>;
  public payIntV1HcmPersonDetails(
    id: PayIntV1HcmPersonDetailsId,
  ): PayIntV1HcmPersonDetailsService<ClientType>;
  public payIntV1HcmPersonDetails(id?: PayIntV1HcmPersonDetailsId | undefined) {
    const fieldName = "PayIntV1HcmPersonDetails";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PayIntV1HcmPersonDetailsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PayIntV1HcmPersonDetailsService(
          client,
          path,
          new QPayIntV1HcmPersonDetailsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public workerProfessionalExperience(): WorkerProfessionalExperienceCollectionService<ClientType>;
  public workerProfessionalExperience(
    id: WorkerProfessionalExperienceId,
  ): WorkerProfessionalExperienceService<ClientType>;
  public workerProfessionalExperience(
    id?: WorkerProfessionalExperienceId | undefined,
  ) {
    const fieldName = "WorkerProfessionalExperience";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WorkerProfessionalExperienceCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new WorkerProfessionalExperienceService(
          client,
          path,
          new QWorkerProfessionalExperienceId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public laborUnions(): LaborUnionsCollectionService<ClientType>;
  public laborUnions(id: LaborUnionsId): LaborUnionsService<ClientType>;
  public laborUnions(id?: LaborUnionsId | undefined) {
    const fieldName = "LaborUnions";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LaborUnionsCollectionService(client, path, fieldName, options)
      : new LaborUnionsService(
          client,
          path,
          new QLaborUnionsId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public workerEducation(): WorkerEducationCollectionService<ClientType>;
  public workerEducation(
    id: WorkerEducationId,
  ): WorkerEducationService<ClientType>;
  public workerEducation(id?: WorkerEducationId | undefined) {
    const fieldName = "WorkerEducation";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WorkerEducationCollectionService(client, path, fieldName, options)
      : new WorkerEducationService(
          client,
          path,
          new QWorkerEducationId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public personDetails(): PersonDetailsCollectionService<ClientType>;
  public personDetails(id: PersonDetailsId): PersonDetailsService<ClientType>;
  public personDetails(id?: PersonDetailsId | undefined) {
    const fieldName = "PersonDetails";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PersonDetailsCollectionService(client, path, fieldName, options)
      : new PersonDetailsService(
          client,
          path,
          new QPersonDetailsId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public leaveAbsenceParameters(): LeaveAbsenceParametersCollectionService<ClientType>;
  public leaveAbsenceParameters(
    id: LeaveAbsenceParametersId,
  ): LeaveAbsenceParametersService<ClientType>;
  public leaveAbsenceParameters(id?: LeaveAbsenceParametersId | undefined) {
    const fieldName = "LeaveAbsenceParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LeaveAbsenceParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new LeaveAbsenceParametersService(
          client,
          path,
          new QLeaveAbsenceParametersId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public organizationHierarchyPublishedV2(): OrganizationHierarchyPublishedV2CollectionService<ClientType>;
  public organizationHierarchyPublishedV2(
    id: OrganizationHierarchyPublishedV2Id,
  ): OrganizationHierarchyPublishedV2Service<ClientType>;
  public organizationHierarchyPublishedV2(
    id?: OrganizationHierarchyPublishedV2Id | undefined,
  ) {
    const fieldName = "OrganizationHierarchyPublishedV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new OrganizationHierarchyPublishedV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new OrganizationHierarchyPublishedV2Service(
          client,
          path,
          new QOrganizationHierarchyPublishedV2Id(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public signLimitParameters(): SignLimitParametersCollectionService<ClientType>;
  public signLimitParameters(
    id: SignLimitParametersId,
  ): SignLimitParametersService<ClientType>;
  public signLimitParameters(id?: SignLimitParametersId | undefined) {
    const fieldName = "SignLimitParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SignLimitParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new SignLimitParametersService(
          client,
          path,
          new QSignLimitParametersId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public workerTimeOff(): WorkerTimeOffCollectionService<ClientType>;
  public workerTimeOff(id: WorkerTimeOffId): WorkerTimeOffService<ClientType>;
  public workerTimeOff(id?: WorkerTimeOffId | undefined) {
    const fieldName = "WorkerTimeOff";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WorkerTimeOffCollectionService(client, path, fieldName, options)
      : new WorkerTimeOffService(
          client,
          path,
          new QWorkerTimeOffId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public payIntV1VariableCompensationTypes(): PayIntV1VariableCompensationTypesCollectionService<ClientType>;
  public payIntV1VariableCompensationTypes(
    id: PayIntV1VariableCompensationTypesId,
  ): PayIntV1VariableCompensationTypesService<ClientType>;
  public payIntV1VariableCompensationTypes(
    id?: PayIntV1VariableCompensationTypesId | undefined,
  ) {
    const fieldName = "PayIntV1VariableCompensationTypes";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PayIntV1VariableCompensationTypesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PayIntV1VariableCompensationTypesService(
          client,
          path,
          new QPayIntV1VariableCompensationTypesId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public positionNotificationSubscriptions(): PositionNotificationSubscriptionsCollectionService<ClientType>;
  public positionNotificationSubscriptions(
    id: PositionNotificationSubscriptionsId,
  ): PositionNotificationSubscriptionsService<ClientType>;
  public positionNotificationSubscriptions(
    id?: PositionNotificationSubscriptionsId | undefined,
  ) {
    const fieldName = "PositionNotificationSubscriptions";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PositionNotificationSubscriptionsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PositionNotificationSubscriptionsService(
          client,
          path,
          new QPositionNotificationSubscriptionsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public hoursWorked(): HoursWorkedCollectionService<ClientType>;
  public hoursWorked(id: HoursWorkedId): HoursWorkedService<ClientType>;
  public hoursWorked(id?: HoursWorkedId | undefined) {
    const fieldName = "HoursWorked";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new HoursWorkedCollectionService(client, path, fieldName, options)
      : new HoursWorkedService(
          client,
          path,
          new QHoursWorkedId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public humanResourcesSharedParameters(): HumanResourcesSharedParametersCollectionService<ClientType>;
  public humanResourcesSharedParameters(
    id: HumanResourcesSharedParametersId,
  ): HumanResourcesSharedParametersService<ClientType>;
  public humanResourcesSharedParameters(
    id?: HumanResourcesSharedParametersId | undefined,
  ) {
    const fieldName = "HumanResourcesSharedParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new HumanResourcesSharedParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new HumanResourcesSharedParametersService(
          client,
          path,
          new QHumanResourcesSharedParametersId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public payIntV1Unions(): PayIntV1UnionsCollectionService<ClientType>;
  public payIntV1Unions(
    id: PayIntV1UnionsId,
  ): PayIntV1UnionsService<ClientType>;
  public payIntV1Unions(id?: PayIntV1UnionsId | undefined) {
    const fieldName = "PayIntV1Unions";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PayIntV1UnionsCollectionService(client, path, fieldName, options)
      : new PayIntV1UnionsService(
          client,
          path,
          new QPayIntV1UnionsId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public unions(): UnionsCollectionService<ClientType>;
  public unions(id: UnionsId): UnionsService<ClientType>;
  public unions(id?: UnionsId | undefined) {
    const fieldName = "Unions";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new UnionsCollectionService(client, path, fieldName, options)
      : new UnionsService(
          client,
          path,
          new QUnionsId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public workerEnrolledBenefitDetails(): WorkerEnrolledBenefitDetailsCollectionService<ClientType>;
  public workerEnrolledBenefitDetails(
    id: WorkerEnrolledBenefitDetailsId,
  ): WorkerEnrolledBenefitDetailsService<ClientType>;
  public workerEnrolledBenefitDetails(
    id?: WorkerEnrolledBenefitDetailsId | undefined,
  ) {
    const fieldName = "WorkerEnrolledBenefitDetails";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WorkerEnrolledBenefitDetailsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new WorkerEnrolledBenefitDetailsService(
          client,
          path,
          new QWorkerEnrolledBenefitDetailsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public payIntV1EmploymentDetail(): PayIntV1EmploymentDetailCollectionService<ClientType>;
  public payIntV1EmploymentDetail(
    id: PayIntV1EmploymentDetailId,
  ): PayIntV1EmploymentDetailService<ClientType>;
  public payIntV1EmploymentDetail(id?: PayIntV1EmploymentDetailId | undefined) {
    const fieldName = "PayIntV1EmploymentDetail";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PayIntV1EmploymentDetailCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PayIntV1EmploymentDetailService(
          client,
          path,
          new QPayIntV1EmploymentDetailId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public personCountrySpecificFields(): PersonCountrySpecificFieldsCollectionService<ClientType>;
  public personCountrySpecificFields(
    id: PersonCountrySpecificFieldsId,
  ): PersonCountrySpecificFieldsService<ClientType>;
  public personCountrySpecificFields(
    id?: PersonCountrySpecificFieldsId | undefined,
  ) {
    const fieldName = "PersonCountrySpecificFields";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PersonCountrySpecificFieldsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PersonCountrySpecificFieldsService(
          client,
          path,
          new QPersonCountrySpecificFieldsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public timeAndAttendanceTimeProfileDetails(): TimeAndAttendanceTimeProfileDetailsCollectionService<ClientType>;
  public timeAndAttendanceTimeProfileDetails(
    id: TimeAndAttendanceTimeProfileDetailsId,
  ): TimeAndAttendanceTimeProfileDetailsService<ClientType>;
  public timeAndAttendanceTimeProfileDetails(
    id?: TimeAndAttendanceTimeProfileDetailsId | undefined,
  ) {
    const fieldName = "TimeAndAttendanceTimeProfileDetails";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TimeAndAttendanceTimeProfileDetailsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new TimeAndAttendanceTimeProfileDetailsService(
          client,
          path,
          new QTimeAndAttendanceTimeProfileDetailsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }
}

export class OrganizationHierarchyPublishedService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  OrganizationHierarchyPublished,
  EditableOrganizationHierarchyPublished,
  QOrganizationHierarchyPublished
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qOrganizationHierarchyPublished, options);
  }
}

export class OrganizationHierarchyPublishedCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  OrganizationHierarchyPublished,
  EditableOrganizationHierarchyPublished,
  QOrganizationHierarchyPublished,
  OrganizationHierarchyPublishedId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qOrganizationHierarchyPublished,
      new QOrganizationHierarchyPublishedId(name),
      options,
    );
  }
}

export class HumanResourcesParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  HumanResourcesParameters,
  EditableHumanResourcesParameters,
  QHumanResourcesParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qHumanResourcesParameters, options);
  }
}

export class HumanResourcesParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  HumanResourcesParameters,
  EditableHumanResourcesParameters,
  QHumanResourcesParameters,
  HumanResourcesParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qHumanResourcesParameters,
      new QHumanResourcesParametersId(name),
      options,
    );
  }
}

export class PayIntV1LaborUnionsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PayIntV1LaborUnions,
  EditablePayIntV1LaborUnions,
  QPayIntV1LaborUnions
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPayIntV1LaborUnions, options);
  }
}

export class PayIntV1LaborUnionsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PayIntV1LaborUnions,
  EditablePayIntV1LaborUnions,
  QPayIntV1LaborUnions,
  PayIntV1LaborUnionsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPayIntV1LaborUnions,
      new QPayIntV1LaborUnionsId(name),
      options,
    );
  }
}

export class HcmWorkerPersonIdentificationNumberDualWriteService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  HcmWorkerPersonIdentificationNumberDualWrite,
  EditableHcmWorkerPersonIdentificationNumberDualWrite,
  QHcmWorkerPersonIdentificationNumberDualWrite
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qHcmWorkerPersonIdentificationNumberDualWrite,
      options,
    );
  }
}

export class HcmWorkerPersonIdentificationNumberDualWriteCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  HcmWorkerPersonIdentificationNumberDualWrite,
  EditableHcmWorkerPersonIdentificationNumberDualWrite,
  QHcmWorkerPersonIdentificationNumberDualWrite,
  HcmWorkerPersonIdentificationNumberDualWriteId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qHcmWorkerPersonIdentificationNumberDualWrite,
      new QHcmWorkerPersonIdentificationNumberDualWriteId(name),
      options,
    );
  }
}

export class CourseTypeNotesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  CourseTypeNotes,
  EditableCourseTypeNotes,
  QCourseTypeNotes
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qCourseTypeNotes, options);
  }
}

export class CourseTypeNotesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  CourseTypeNotes,
  EditableCourseTypeNotes,
  QCourseTypeNotes,
  CourseTypeNotesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qCourseTypeNotes,
      new QCourseTypeNotesId(name),
      options,
    );
  }
}

export class EssSystemParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  EssSystemParameters,
  EditableEssSystemParameters,
  QEssSystemParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qEssSystemParameters, options);
  }
}

export class EssSystemParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  EssSystemParameters,
  EditableEssSystemParameters,
  QEssSystemParameters,
  EssSystemParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qEssSystemParameters,
      new QEssSystemParametersId(name),
      options,
    );
  }
}

export class BenefitEarningBasisService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  BenefitEarningBasis,
  EditableBenefitEarningBasis,
  QBenefitEarningBasis
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qBenefitEarningBasis, options);
  }
}

export class BenefitEarningBasisCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  BenefitEarningBasis,
  EditableBenefitEarningBasis,
  QBenefitEarningBasis,
  BenefitEarningBasisId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qBenefitEarningBasis,
      new QBenefitEarningBasisId(name),
      options,
    );
  }
}

export class WorkerPersonDetailsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  WorkerPersonDetails,
  EditableWorkerPersonDetails,
  QWorkerPersonDetails
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qWorkerPersonDetails, options);
  }
}

export class WorkerPersonDetailsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  WorkerPersonDetails,
  EditableWorkerPersonDetails,
  QWorkerPersonDetails,
  WorkerPersonDetailsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qWorkerPersonDetails,
      new QWorkerPersonDetailsId(name),
      options,
    );
  }
}

export class PayIntV1HcmPersonDetailsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PayIntV1HcmPersonDetails,
  EditablePayIntV1HcmPersonDetails,
  QPayIntV1HcmPersonDetails
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPayIntV1HcmPersonDetails, options);
  }
}

export class PayIntV1HcmPersonDetailsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PayIntV1HcmPersonDetails,
  EditablePayIntV1HcmPersonDetails,
  QPayIntV1HcmPersonDetails,
  PayIntV1HcmPersonDetailsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPayIntV1HcmPersonDetails,
      new QPayIntV1HcmPersonDetailsId(name),
      options,
    );
  }
}

export class WorkerProfessionalExperienceService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  WorkerProfessionalExperience,
  EditableWorkerProfessionalExperience,
  QWorkerProfessionalExperience
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qWorkerProfessionalExperience, options);
  }
}

export class WorkerProfessionalExperienceCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  WorkerProfessionalExperience,
  EditableWorkerProfessionalExperience,
  QWorkerProfessionalExperience,
  WorkerProfessionalExperienceId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qWorkerProfessionalExperience,
      new QWorkerProfessionalExperienceId(name),
      options,
    );
  }
}

export class LaborUnionsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  LaborUnions,
  EditableLaborUnions,
  QLaborUnions
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qLaborUnions, options);
  }
}

export class LaborUnionsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  LaborUnions,
  EditableLaborUnions,
  QLaborUnions,
  LaborUnionsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qLaborUnions,
      new QLaborUnionsId(name),
      options,
    );
  }
}

export class WorkerEducationService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  WorkerEducation,
  EditableWorkerEducation,
  QWorkerEducation
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qWorkerEducation, options);
  }
}

export class WorkerEducationCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  WorkerEducation,
  EditableWorkerEducation,
  QWorkerEducation,
  WorkerEducationId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qWorkerEducation,
      new QWorkerEducationId(name),
      options,
    );
  }
}

export class PersonDetailsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PersonDetails,
  EditablePersonDetails,
  QPersonDetails
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPersonDetails, options);
  }
}

export class PersonDetailsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PersonDetails,
  EditablePersonDetails,
  QPersonDetails,
  PersonDetailsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPersonDetails,
      new QPersonDetailsId(name),
      options,
    );
  }
}

export class LeaveAbsenceParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  LeaveAbsenceParameters,
  EditableLeaveAbsenceParameters,
  QLeaveAbsenceParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qLeaveAbsenceParameters, options);
  }
}

export class LeaveAbsenceParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  LeaveAbsenceParameters,
  EditableLeaveAbsenceParameters,
  QLeaveAbsenceParameters,
  LeaveAbsenceParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qLeaveAbsenceParameters,
      new QLeaveAbsenceParametersId(name),
      options,
    );
  }
}

export class OrganizationHierarchyPublishedV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  OrganizationHierarchyPublishedV2,
  EditableOrganizationHierarchyPublishedV2,
  QOrganizationHierarchyPublishedV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qOrganizationHierarchyPublishedV2, options);
  }
}

export class OrganizationHierarchyPublishedV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  OrganizationHierarchyPublishedV2,
  EditableOrganizationHierarchyPublishedV2,
  QOrganizationHierarchyPublishedV2,
  OrganizationHierarchyPublishedV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qOrganizationHierarchyPublishedV2,
      new QOrganizationHierarchyPublishedV2Id(name),
      options,
    );
  }
}

export class SignLimitParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  SignLimitParameters,
  EditableSignLimitParameters,
  QSignLimitParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qSignLimitParameters, options);
  }
}

export class SignLimitParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  SignLimitParameters,
  EditableSignLimitParameters,
  QSignLimitParameters,
  SignLimitParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qSignLimitParameters,
      new QSignLimitParametersId(name),
      options,
    );
  }
}

export class WorkerTimeOffService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  WorkerTimeOff,
  EditableWorkerTimeOff,
  QWorkerTimeOff
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qWorkerTimeOff, options);
  }
}

export class WorkerTimeOffCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  WorkerTimeOff,
  EditableWorkerTimeOff,
  QWorkerTimeOff,
  WorkerTimeOffId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qWorkerTimeOff,
      new QWorkerTimeOffId(name),
      options,
    );
  }
}

export class PayIntV1VariableCompensationTypesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PayIntV1VariableCompensationTypes,
  EditablePayIntV1VariableCompensationTypes,
  QPayIntV1VariableCompensationTypes
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPayIntV1VariableCompensationTypes, options);
  }
}

export class PayIntV1VariableCompensationTypesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PayIntV1VariableCompensationTypes,
  EditablePayIntV1VariableCompensationTypes,
  QPayIntV1VariableCompensationTypes,
  PayIntV1VariableCompensationTypesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPayIntV1VariableCompensationTypes,
      new QPayIntV1VariableCompensationTypesId(name),
      options,
    );
  }
}

export class PositionNotificationSubscriptionsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PositionNotificationSubscriptions,
  EditablePositionNotificationSubscriptions,
  QPositionNotificationSubscriptions
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPositionNotificationSubscriptions, options);
  }
}

export class PositionNotificationSubscriptionsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PositionNotificationSubscriptions,
  EditablePositionNotificationSubscriptions,
  QPositionNotificationSubscriptions,
  PositionNotificationSubscriptionsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPositionNotificationSubscriptions,
      new QPositionNotificationSubscriptionsId(name),
      options,
    );
  }
}

export class HoursWorkedService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  HoursWorked,
  EditableHoursWorked,
  QHoursWorked
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qHoursWorked, options);
  }
}

export class HoursWorkedCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  HoursWorked,
  EditableHoursWorked,
  QHoursWorked,
  HoursWorkedId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qHoursWorked,
      new QHoursWorkedId(name),
      options,
    );
  }
}

export class HumanResourcesSharedParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  HumanResourcesSharedParameters,
  EditableHumanResourcesSharedParameters,
  QHumanResourcesSharedParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qHumanResourcesSharedParameters, options);
  }
}

export class HumanResourcesSharedParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  HumanResourcesSharedParameters,
  EditableHumanResourcesSharedParameters,
  QHumanResourcesSharedParameters,
  HumanResourcesSharedParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qHumanResourcesSharedParameters,
      new QHumanResourcesSharedParametersId(name),
      options,
    );
  }
}

export class PayIntV1UnionsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PayIntV1Unions,
  EditablePayIntV1Unions,
  QPayIntV1Unions
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPayIntV1Unions, options);
  }
}

export class PayIntV1UnionsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PayIntV1Unions,
  EditablePayIntV1Unions,
  QPayIntV1Unions,
  PayIntV1UnionsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPayIntV1Unions,
      new QPayIntV1UnionsId(name),
      options,
    );
  }
}

export class UnionsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<ClientType, Unions, EditableUnions, QUnions> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qUnions, options);
  }
}

export class UnionsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  Unions,
  EditableUnions,
  QUnions,
  UnionsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qUnions, new QUnionsId(name), options);
  }
}

export class WorkerEnrolledBenefitDetailsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  WorkerEnrolledBenefitDetails,
  EditableWorkerEnrolledBenefitDetails,
  QWorkerEnrolledBenefitDetails
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qWorkerEnrolledBenefitDetails, options);
  }
}

export class WorkerEnrolledBenefitDetailsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  WorkerEnrolledBenefitDetails,
  EditableWorkerEnrolledBenefitDetails,
  QWorkerEnrolledBenefitDetails,
  WorkerEnrolledBenefitDetailsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qWorkerEnrolledBenefitDetails,
      new QWorkerEnrolledBenefitDetailsId(name),
      options,
    );
  }
}

export class PayIntV1EmploymentDetailService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PayIntV1EmploymentDetail,
  EditablePayIntV1EmploymentDetail,
  QPayIntV1EmploymentDetail
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPayIntV1EmploymentDetail, options);
  }
}

export class PayIntV1EmploymentDetailCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PayIntV1EmploymentDetail,
  EditablePayIntV1EmploymentDetail,
  QPayIntV1EmploymentDetail,
  PayIntV1EmploymentDetailId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPayIntV1EmploymentDetail,
      new QPayIntV1EmploymentDetailId(name),
      options,
    );
  }
}

export class PersonCountrySpecificFieldsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PersonCountrySpecificFields,
  EditablePersonCountrySpecificFields,
  QPersonCountrySpecificFields
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPersonCountrySpecificFields, options);
  }
}

export class PersonCountrySpecificFieldsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PersonCountrySpecificFields,
  EditablePersonCountrySpecificFields,
  QPersonCountrySpecificFields,
  PersonCountrySpecificFieldsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPersonCountrySpecificFields,
      new QPersonCountrySpecificFieldsId(name),
      options,
    );
  }
}

export class TimeAndAttendanceTimeProfileDetailsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  TimeAndAttendanceTimeProfileDetails,
  EditableTimeAndAttendanceTimeProfileDetails,
  QTimeAndAttendanceTimeProfileDetails
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qTimeAndAttendanceTimeProfileDetails,
      options,
    );
  }
}

export class TimeAndAttendanceTimeProfileDetailsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  TimeAndAttendanceTimeProfileDetails,
  EditableTimeAndAttendanceTimeProfileDetails,
  QTimeAndAttendanceTimeProfileDetails,
  TimeAndAttendanceTimeProfileDetailsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qTimeAndAttendanceTimeProfileDetails,
      new QTimeAndAttendanceTimeProfileDetailsId(name),
      options,
    );
  }
}
