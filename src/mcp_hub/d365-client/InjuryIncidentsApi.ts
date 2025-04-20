/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InjuryIncidents } from './InjuryIncidents';
import { InjuryIncidentsRequestBuilder } from './InjuryIncidentsRequestBuilder';
import { InjuryIncidentTreatmentsApi } from './InjuryIncidentTreatmentsApi';
import { WorkersApi } from './WorkersApi';
import { PositionsV2Api } from './PositionsV2Api';
import { InjuryOutcomeTypesApi } from './InjuryOutcomeTypesApi';
import { InjuryTypesApi } from './InjuryTypesApi';
import { InjurySeverityLevelsApi } from './InjurySeverityLevelsApi';
import { InjuryBodyPartsApi } from './InjuryBodyPartsApi';
import { InjuryIncidentFilingAgenciesApi } from './InjuryIncidentFilingAgenciesApi';
import { InjuryIncidentCostTypesApi } from './InjuryIncidentCostTypesApi';
import { NoYes } from './NoYes';
import { HcmInjuryOshaInjuryType } from './HcmInjuryOshaInjuryType';
import { HrmInjuryCaseStatus } from './HrmInjuryCaseStatus';
import { HcmInjuryOshaCaseType } from './HcmInjuryOshaCaseType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InjuryIncidentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InjuryIncidents<DeSerializersT>, DeSerializersT>
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
  ): InjuryIncidentsApi<DeSerializersT> {
    return new InjuryIncidentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncidentTreatment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_TREATMENT: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentTreatmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link humanResourcesContactWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HUMAN_RESOURCES_CONTACT_WORKER: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reportedByWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTED_BY_WORKER: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link supervisorWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPERVISOR_WORKER: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link outcomeType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTCOME_TYPE: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryOutcomeTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link incidentType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCIDENT_TYPE: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injurySeverityLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_SEVERITY_LEVEL: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjurySeverityLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bodyPart} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BODY_PART: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryBodyPartsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncidentFilingAgency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_FILING_AGENCY: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentFilingAgenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncidentCostType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_COST_TYPE: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentCostTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InjuryIncidentTreatmentsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      InjuryOutcomeTypesApi<DeSerializersT>,
      InjuryTypesApi<DeSerializersT>,
      InjurySeverityLevelsApi<DeSerializersT>,
      InjuryBodyPartsApi<DeSerializersT>,
      InjuryIncidentFilingAgenciesApi<DeSerializersT>,
      InjuryIncidentCostTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INJURY_INCIDENT_TREATMENT: new OneToOneLink(
        'InjuryIncidentTreatment',
        this,
        linkedApis[0]
      ),
      HUMAN_RESOURCES_CONTACT_WORKER: new OneToOneLink(
        'HumanResourcesContactWorker',
        this,
        linkedApis[1]
      ),
      REPORTED_BY_WORKER: new OneToOneLink(
        'ReportedByWorker',
        this,
        linkedApis[2]
      ),
      SUPERVISOR_WORKER: new OneToOneLink(
        'SupervisorWorker',
        this,
        linkedApis[3]
      ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[4]),
      POSITION: new OneToOneLink('Position', this, linkedApis[5]),
      OUTCOME_TYPE: new OneToOneLink('OutcomeType', this, linkedApis[6]),
      INCIDENT_TYPE: new OneToOneLink('IncidentType', this, linkedApis[7]),
      INJURY_SEVERITY_LEVEL: new OneToOneLink(
        'InjurySeverityLevel',
        this,
        linkedApis[8]
      ),
      BODY_PART: new OneToOneLink('BodyPart', this, linkedApis[9]),
      INJURY_INCIDENT_FILING_AGENCY: new OneToOneLink(
        'InjuryIncidentFilingAgency',
        this,
        linkedApis[10]
      ),
      INJURY_INCIDENT_COST_TYPE: new OneToOneLink(
        'InjuryIncidentCostType',
        this,
        linkedApis[11]
      )
    };
    return this;
  }

  entityConstructor = InjuryIncidents;

  requestBuilder(): InjuryIncidentsRequestBuilder<DeSerializersT> {
    return new InjuryIncidentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InjuryIncidents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InjuryIncidents<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InjuryIncidents<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof InjuryIncidents, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InjuryIncidents,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASE_NUMBER: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEVERITY_LEVEL_ID: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DAYS_AWAY_FROM_WORK: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OUTCOME_TYPE_ID: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_DAYS_AWAY_FROM_WORK: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INJURY_OR_ILLNESS_TYPE_ID: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASE_DESCRIPTION: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BODY_PART_ID: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_AND_TIME_BEGAN_WORK: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_AND_TIME_REPORTED: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIVACY_CASE: EnumField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTED_BY_ID: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OSHA_INJURY_TYPE: EnumField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      HcmInjuryOshaInjuryType,
      true,
      true
    >;
    DAYS_ON_JOB_TRANSFER_OR_RESTRICTION: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CASE_STATUS: EnumField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      HrmInjuryCaseStatus,
      true,
      true
    >;
    COMPLIANCE_RECORDABLE_CASE: EnumField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ON_WORK_PREMISES: EnumField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUPERVISOR_ID: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_JOB_OR_TASK: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASE_CLOSED_DATE: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTION_TO_BE_TAKEN: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_ID: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OSHA_CASE_TYPE: EnumField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      HcmInjuryOshaCaseType,
      true,
      true
    >;
    CASE_OPENED_DATE: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_AND_TIME_OF_INCIDENT: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAUSE_OF_INCIDENT: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WHERE_INCIDENT_OCCURRED: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HUMAN_RESOURCES_CONTACT_ID: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAFEGUARDS_THAT_WERE_PROVIDED: OrderableEdmTypeField<
      InjuryIncidents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncidentTreatment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_TREATMENT: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentTreatmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link humanResourcesContactWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HUMAN_RESOURCES_CONTACT_WORKER: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reportedByWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTED_BY_WORKER: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link supervisorWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPERVISOR_WORKER: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link outcomeType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTCOME_TYPE: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryOutcomeTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link incidentType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCIDENT_TYPE: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injurySeverityLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_SEVERITY_LEVEL: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjurySeverityLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bodyPart} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BODY_PART: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryBodyPartsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncidentFilingAgency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_FILING_AGENCY: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentFilingAgenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncidentCostType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_COST_TYPE: OneToOneLink<
      InjuryIncidents<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentCostTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InjuryIncidents<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link caseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CaseNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link severityLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEVERITY_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'SeverityLevelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link daysAwayFromWork} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_AWAY_FROM_WORK: fieldBuilder.buildEdmTypeField(
          'DaysAwayFromWork',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link outcomeTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTCOME_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'OutcomeTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedDaysAwayFromWork} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_DAYS_AWAY_FROM_WORK: fieldBuilder.buildEdmTypeField(
          'ExpectedDaysAwayFromWork',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link injuryOrIllnessTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INJURY_OR_ILLNESS_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'InjuryOrIllnessTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link caseDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CaseDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bodyPartId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BODY_PART_ID: fieldBuilder.buildEdmTypeField(
          'BodyPartId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateAndTimeBeganWork} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_AND_TIME_BEGAN_WORK: fieldBuilder.buildEdmTypeField(
          'DateAndTimeBeganWork',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dateAndTimeReported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_AND_TIME_REPORTED: fieldBuilder.buildEdmTypeField(
          'DateAndTimeReported',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link privacyCase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIVACY_CASE: fieldBuilder.buildEnumField('PrivacyCase', NoYes, true),
        /**
         * Static representation of the {@link reportedById} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_BY_ID: fieldBuilder.buildEdmTypeField(
          'ReportedById',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oshaInjuryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OSHA_INJURY_TYPE: fieldBuilder.buildEnumField(
          'OshaInjuryType',
          HcmInjuryOshaInjuryType,
          true
        ),
        /**
         * Static representation of the {@link daysOnJobTransferOrRestriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_ON_JOB_TRANSFER_OR_RESTRICTION: fieldBuilder.buildEdmTypeField(
          'DaysOnJobTransferOrRestriction',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link caseStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_STATUS: fieldBuilder.buildEnumField(
          'CaseStatus',
          HrmInjuryCaseStatus,
          true
        ),
        /**
         * Static representation of the {@link complianceRecordableCase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLIANCE_RECORDABLE_CASE: fieldBuilder.buildEnumField(
          'ComplianceRecordableCase',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link onWorkPremises} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_WORK_PREMISES: fieldBuilder.buildEnumField(
          'OnWorkPremises',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link supervisorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPERVISOR_ID: fieldBuilder.buildEdmTypeField(
          'SupervisorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeJobOrTask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_JOB_OR_TASK: fieldBuilder.buildEdmTypeField(
          'EmployeeJobOrTask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link caseClosedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_CLOSED_DATE: fieldBuilder.buildEdmTypeField(
          'CaseClosedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link actionToBeTaken} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_TO_BE_TAKEN: fieldBuilder.buildEdmTypeField(
          'ActionToBeTaken',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_ID: fieldBuilder.buildEdmTypeField(
          'WorkerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oshaCaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OSHA_CASE_TYPE: fieldBuilder.buildEnumField(
          'OshaCaseType',
          HcmInjuryOshaCaseType,
          true
        ),
        /**
         * Static representation of the {@link caseOpenedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_OPENED_DATE: fieldBuilder.buildEdmTypeField(
          'CaseOpenedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dateAndTimeOfIncident} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_AND_TIME_OF_INCIDENT: fieldBuilder.buildEdmTypeField(
          'DateAndTimeOfIncident',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link causeOfIncident} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAUSE_OF_INCIDENT: fieldBuilder.buildEdmTypeField(
          'CauseOfIncident',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link whereIncidentOccurred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHERE_INCIDENT_OCCURRED: fieldBuilder.buildEdmTypeField(
          'WhereIncidentOccurred',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link humanResourcesContactId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HUMAN_RESOURCES_CONTACT_ID: fieldBuilder.buildEdmTypeField(
          'HumanResourcesContactId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link safeguardsThatWereProvided} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFEGUARDS_THAT_WERE_PROVIDED: fieldBuilder.buildEdmTypeField(
          'SafeguardsThatWereProvided',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InjuryIncidents)
      };
    }

    return this._schema;
  }
}
