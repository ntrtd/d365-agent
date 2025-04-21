/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionsV2 } from './PositionsV2';
import { PositionsV2RequestBuilder } from './PositionsV2RequestBuilder';
import { PayIntV1HcmPositionDetailsApi } from './PayIntV1HcmPositionDetailsApi';
import { OnboardingWorkerChecklistTasksApi } from './OnboardingWorkerChecklistTasksApi';
import { PositionWorkerAssignmentsV2Api } from './PositionWorkerAssignmentsV2Api';
import { PositionWorkerDefaultTaxRgnsApi } from './PositionWorkerDefaultTaxRgnsApi';
import { InjuryIncidentsApi } from './InjuryIncidentsApi';
import { RecruitingRequestPositionsApi } from './RecruitingRequestPositionsApi';
import { PositionDetailsApi } from './PositionDetailsApi';
import { PayrollFixedCompensationPlansApi } from './PayrollFixedCompensationPlansApi';
import { WorkerPositionEarningCodesV2Api } from './WorkerPositionEarningCodesV2Api';
import { PositionDefaultDimensionsApi } from './PositionDefaultDimensionsApi';
import { PayIntV1HcmPositionHierarchiesApi } from './PayIntV1HcmPositionHierarchiesApi';
import { IntV1PayrollFixedCompensationPlansApi } from './IntV1PayrollFixedCompensationPlansApi';
import { WorkerPositionEarningCodesApi } from './WorkerPositionEarningCodesApi';
import { OnboardProcessTasksDualWriteApi } from './OnboardProcessTasksDualWriteApi';
import { PositionDurationsApi } from './PositionDurationsApi';
import { PositionWorkerAssignmentsApi } from './PositionWorkerAssignmentsApi';
import { PayIntV1PayrollPositionsApi } from './PayIntV1PayrollPositionsApi';
import { CandidatesToHireApi } from './CandidatesToHireApi';
import { PayrollPositionsApi } from './PayrollPositionsApi';
import { PositionHierarchiesApi } from './PositionHierarchiesApi';
import { OnboardingChecklistTemplateTasksApi } from './OnboardingChecklistTemplateTasksApi';
import { OnboardingLibraryTasksApi } from './OnboardingLibraryTasksApi';
import { PayStatementEarningLinesApi } from './PayStatementEarningLinesApi';
import { PayCyclesApi } from './PayCyclesApi';
import { TitlesApi } from './TitlesApi';
import { DepartmentsApi } from './DepartmentsApi';
import { JobsApi } from './JobsApi';
import { CompensationRegionsApi } from './CompensationRegionsApi';
import { ReasonCodesApi } from './ReasonCodesApi';
import { PositionTypesApi } from './PositionTypesApi';
import { WorkersApi } from './WorkersApi';
import { WorkerEnrolledBenefitDetailsApi } from './WorkerEnrolledBenefitDetailsApi';
import { ProcessGroupAssignmentMembersApi } from './ProcessGroupAssignmentMembersApi';
import { EarningStatementLineInquiriesApi } from './EarningStatementLineInquiriesApi';
import { PositionUnionAgreementsApi } from './PositionUnionAgreementsApi';
import { NoYes } from './NoYes';
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
export class PositionsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PositionsV2<DeSerializersT>, DeSerializersT>
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
  ): PositionsV2Api<DeSerializersT> {
    return new PositionsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payIntDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_DETAILS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TASKS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      OnboardingWorkerChecklistTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerAssignmentsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ASSIGNMENTS_V_2: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionWorkerAssignmentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionWorkerDefaultTaxRgn} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_WORKER_DEFAULT_TAX_RGN: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionWorkerDefaultTaxRgnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link injuryIncidents} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENTS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestPositionPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_POSITION_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPositionEarningCodeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_POSITION_EARNING_CODE_V_2: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      WorkerPositionEarningCodesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDefaultDimensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DEFAULT_DIMENSIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionDefaultDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntParentPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_PARENT_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntReportingPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_REPORTING_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPositionEarningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_POSITION_EARNING_CODE: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      WorkerPositionEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      OnboardProcessTasksDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link durations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DURATIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionDurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ASSIGNMENTS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionWorkerAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payIntV1PayrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_PAYROLL_POSITION: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayIntV1PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link candidatesToHire} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANDIDATES_TO_HIRE: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      CandidatesToHireApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link parentPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportingPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTING_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTemplateTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TEMPLATE_TASKS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link libraryTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASKS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      OnboardingLibraryTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementEarningLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_EARNING_LINE: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayStatementEarningLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPayCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_PAY_CYCLE: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DEFAULT_DIMENSION: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionDefaultDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_REGION: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_TYPE: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledBenefitDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT_DETAILS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link groupAssignmentMemberships} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GROUP_ASSIGNMENT_MEMBERSHIPS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      ProcessGroupAssignmentMembersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link earningStatementLineInquiry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_STATEMENT_LINE_INQUIRY: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      EarningStatementLineInquiriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link unionAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNION_AGREEMENTS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionUnionAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayIntV1HcmPositionDetailsApi<DeSerializersT>,
      OnboardingWorkerChecklistTasksApi<DeSerializersT>,
      PositionWorkerAssignmentsV2Api<DeSerializersT>,
      PositionWorkerDefaultTaxRgnsApi<DeSerializersT>,
      InjuryIncidentsApi<DeSerializersT>,
      RecruitingRequestPositionsApi<DeSerializersT>,
      RecruitingRequestPositionsApi<DeSerializersT>,
      PositionDetailsApi<DeSerializersT>,
      PayrollFixedCompensationPlansApi<DeSerializersT>,
      WorkerPositionEarningCodesV2Api<DeSerializersT>,
      PositionDefaultDimensionsApi<DeSerializersT>,
      PayIntV1HcmPositionHierarchiesApi<DeSerializersT>,
      PayIntV1HcmPositionHierarchiesApi<DeSerializersT>,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>,
      WorkerPositionEarningCodesApi<DeSerializersT>,
      OnboardProcessTasksDualWriteApi<DeSerializersT>,
      PositionDurationsApi<DeSerializersT>,
      PositionWorkerAssignmentsApi<DeSerializersT>,
      PayIntV1PayrollPositionsApi<DeSerializersT>,
      CandidatesToHireApi<DeSerializersT>,
      PayrollPositionsApi<DeSerializersT>,
      PositionHierarchiesApi<DeSerializersT>,
      PositionHierarchiesApi<DeSerializersT>,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>,
      OnboardingLibraryTasksApi<DeSerializersT>,
      PayStatementEarningLinesApi<DeSerializersT>,
      PayCyclesApi<DeSerializersT>,
      TitlesApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      PositionDefaultDimensionsApi<DeSerializersT>,
      JobsApi<DeSerializersT>,
      CompensationRegionsApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      PositionTypesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      WorkerEnrolledBenefitDetailsApi<DeSerializersT>,
      ProcessGroupAssignmentMembersApi<DeSerializersT>,
      EarningStatementLineInquiriesApi<DeSerializersT>,
      PositionUnionAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_INT_DETAILS: new OneToManyLink('PayIntDetails', this, linkedApis[0]),
      CHECKLIST_TASKS: new OneToManyLink('ChecklistTasks', this, linkedApis[1]),
      WORKER_ASSIGNMENTS_V_2: new OneToManyLink(
        'WorkerAssignmentsV2',
        this,
        linkedApis[2]
      ),
      POSITION_WORKER_DEFAULT_TAX_RGN: new OneToOneLink(
        'PositionWorkerDefaultTaxRgn',
        this,
        linkedApis[3]
      ),
      INJURY_INCIDENTS: new OneToManyLink(
        'InjuryIncidents',
        this,
        linkedApis[4]
      ),
      RECRUITING_REQUEST_POSITIONS: new OneToManyLink(
        'RecruitingRequestPositions',
        this,
        linkedApis[5]
      ),
      RECRUITING_REQUEST_POSITION_POSITIONS: new OneToManyLink(
        'RecruitingRequestPositionPositions',
        this,
        linkedApis[6]
      ),
      DETAILS: new OneToManyLink('Details', this, linkedApis[7]),
      PAYROLL_FIXED_COMPENSATION_PLAN: new OneToManyLink(
        'PayrollFixedCompensationPlan',
        this,
        linkedApis[8]
      ),
      WORKER_POSITION_EARNING_CODE_V_2: new OneToManyLink(
        'WorkerPositionEarningCodeV2',
        this,
        linkedApis[9]
      ),
      POSITION_DEFAULT_DIMENSIONS: new OneToManyLink(
        'PositionDefaultDimensions',
        this,
        linkedApis[10]
      ),
      PAY_INT_PARENT_POSITIONS: new OneToManyLink(
        'PayIntParentPositions',
        this,
        linkedApis[11]
      ),
      PAY_INT_REPORTING_POSITIONS: new OneToManyLink(
        'PayIntReportingPositions',
        this,
        linkedApis[12]
      ),
      INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: new OneToManyLink(
        'IntV1PayrollFixedCompensationPlan',
        this,
        linkedApis[13]
      ),
      WORKER_POSITION_EARNING_CODE: new OneToManyLink(
        'WorkerPositionEarningCode',
        this,
        linkedApis[14]
      ),
      POSITIONS: new OneToManyLink('Positions', this, linkedApis[15]),
      DURATIONS: new OneToManyLink('Durations', this, linkedApis[16]),
      WORKER_ASSIGNMENTS: new OneToManyLink(
        'WorkerAssignments',
        this,
        linkedApis[17]
      ),
      PAY_INT_V_1_PAYROLL_POSITION: new OneToOneLink(
        'PayIntV1PayrollPosition',
        this,
        linkedApis[18]
      ),
      CANDIDATES_TO_HIRE: new OneToManyLink(
        'CandidatesToHire',
        this,
        linkedApis[19]
      ),
      PAYROLL_POSITION: new OneToOneLink(
        'PayrollPosition',
        this,
        linkedApis[20]
      ),
      PARENT_POSITIONS: new OneToManyLink(
        'ParentPositions',
        this,
        linkedApis[21]
      ),
      REPORTING_POSITIONS: new OneToManyLink(
        'ReportingPositions',
        this,
        linkedApis[22]
      ),
      CHECKLIST_TEMPLATE_TASKS: new OneToManyLink(
        'ChecklistTemplateTasks',
        this,
        linkedApis[23]
      ),
      LIBRARY_TASKS: new OneToManyLink('LibraryTasks', this, linkedApis[24]),
      PAY_STATEMENT_EARNING_LINE: new OneToManyLink(
        'PayStatementEarningLine',
        this,
        linkedApis[25]
      ),
      PAYROLL_PAY_CYCLE: new OneToOneLink(
        'PayrollPayCycle',
        this,
        linkedApis[26]
      ),
      TITLE: new OneToOneLink('Title', this, linkedApis[27]),
      DEPARTMENT: new OneToOneLink('Department', this, linkedApis[28]),
      POSITION_DEFAULT_DIMENSION: new OneToOneLink(
        'PositionDefaultDimension',
        this,
        linkedApis[29]
      ),
      JOB: new OneToOneLink('Job', this, linkedApis[30]),
      COMPENSATION_REGION: new OneToOneLink(
        'CompensationRegion',
        this,
        linkedApis[31]
      ),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[32]),
      POSITION_TYPE: new OneToOneLink('PositionType', this, linkedApis[33]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[34]),
      WORKER_ENROLLED_BENEFIT_DETAILS: new OneToManyLink(
        'WorkerEnrolledBenefitDetails',
        this,
        linkedApis[35]
      ),
      GROUP_ASSIGNMENT_MEMBERSHIPS: new OneToManyLink(
        'GroupAssignmentMemberships',
        this,
        linkedApis[36]
      ),
      EARNING_STATEMENT_LINE_INQUIRY: new OneToManyLink(
        'EarningStatementLineInquiry',
        this,
        linkedApis[37]
      ),
      UNION_AGREEMENTS: new OneToManyLink(
        'UnionAgreements',
        this,
        linkedApis[38]
      )
    };
    return this;
  }

  entityConstructor = PositionsV2;

  requestBuilder(): PositionsV2RequestBuilder<DeSerializersT> {
    return new PositionsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PositionsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PositionsV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PositionsV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PositionsV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PositionsV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DETAIL_EFFECTIVE: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_TYPE_ID: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_DETAIL_EFFECTIVE: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETIREMENT: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNUAL_REGULAR_HOURS: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FULL_TIME_EQUIVALENT: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKER_ASSIGNMENT_END: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DETAIL_EXPIRATION: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_NAME: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVATION: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_ASSIGNMENT_REASON_CODE_ID: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_ASSIGNMENT_START: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AVAILABLE_FOR_ASSIGNMENT: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYROLL_DETAIL_EXPIRATION: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAID_BY_LEGAL_ENTITY: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_REGION_ID: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_PERIOD_OVERTIME_HOURS: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SALARY_GENERATED: EnumField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_EARNINGS_GENERATED_FROM_SCHEDULE: EnumField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_EARNING_CODE_ID: OrderableEdmTypeField<
      PositionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_DETAILS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TASKS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      OnboardingWorkerChecklistTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerAssignmentsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ASSIGNMENTS_V_2: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionWorkerAssignmentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionWorkerDefaultTaxRgn} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_WORKER_DEFAULT_TAX_RGN: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionWorkerDefaultTaxRgnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link injuryIncidents} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENTS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestPositionPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_POSITION_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPositionEarningCodeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_POSITION_EARNING_CODE_V_2: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      WorkerPositionEarningCodesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDefaultDimensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DEFAULT_DIMENSIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionDefaultDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntParentPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_PARENT_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntReportingPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_REPORTING_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPositionEarningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_POSITION_EARNING_CODE: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      WorkerPositionEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      OnboardProcessTasksDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link durations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DURATIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionDurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ASSIGNMENTS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionWorkerAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payIntV1PayrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_PAYROLL_POSITION: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayIntV1PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link candidatesToHire} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANDIDATES_TO_HIRE: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      CandidatesToHireApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link parentPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportingPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTING_POSITIONS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTemplateTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TEMPLATE_TASKS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link libraryTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASKS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      OnboardingLibraryTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementEarningLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_EARNING_LINE: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayStatementEarningLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPayCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_PAY_CYCLE: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PayCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DEFAULT_DIMENSION: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionDefaultDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_REGION: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_TYPE: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledBenefitDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT_DETAILS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link groupAssignmentMemberships} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GROUP_ASSIGNMENT_MEMBERSHIPS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      ProcessGroupAssignmentMembersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link earningStatementLineInquiry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_STATEMENT_LINE_INQUIRY: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      EarningStatementLineInquiriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link unionAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNION_AGREEMENTS: OneToManyLink<
      PositionsV2<DeSerializersT>,
      DeSerializersT,
      PositionUnionAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PositionsV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link detailEffective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'DetailEffective',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payCycleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_CYCLE_ID: fieldBuilder.buildEdmTypeField(
          'PayCycleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PositionTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payrollDetailEffective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_DETAIL_EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'PayrollDetailEffective',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETIREMENT: fieldBuilder.buildEdmTypeField(
          'Retirement',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link departmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepartmentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
        /**
         * Static representation of the {@link annualRegularHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUAL_REGULAR_HOURS: fieldBuilder.buildEdmTypeField(
          'AnnualRegularHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fullTimeEquivalent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_TIME_EQUIVALENT: fieldBuilder.buildEdmTypeField(
          'FullTimeEquivalent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workerAssignmentEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_ASSIGNMENT_END: fieldBuilder.buildEdmTypeField(
          'WorkerAssignmentEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link detailExpiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_EXPIRATION: fieldBuilder.buildEdmTypeField(
          'DetailExpiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'WorkerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATION: fieldBuilder.buildEdmTypeField(
          'Activation',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerAssignmentReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_ASSIGNMENT_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'WorkerAssignmentReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField('TitleId', 'Edm.String', true),
        /**
         * Static representation of the {@link workerAssignmentStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_ASSIGNMENT_START: fieldBuilder.buildEdmTypeField(
          'WorkerAssignmentStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link availableForAssignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_FOR_ASSIGNMENT: fieldBuilder.buildEdmTypeField(
          'AvailableForAssignment',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payrollDetailExpiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_DETAIL_EXPIRATION: fieldBuilder.buildEdmTypeField(
          'PayrollDetailExpiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paidByLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_BY_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'PaidByLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compensationRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CompensationRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payPeriodOvertimeHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_PERIOD_OVERTIME_HOURS: fieldBuilder.buildEdmTypeField(
          'PayPeriodOvertimeHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isSalaryGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALARY_GENERATED: fieldBuilder.buildEnumField(
          'IsSalaryGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link schedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE: fieldBuilder.buildEdmTypeField(
          'Schedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areEarningsGeneratedFromSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_EARNINGS_GENERATED_FROM_SCHEDULE: fieldBuilder.buildEnumField(
          'AreEarningsGeneratedFromSchedule',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultEarningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultEarningCodeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PositionsV2)
      };
    }

    return this._schema;
  }
}
