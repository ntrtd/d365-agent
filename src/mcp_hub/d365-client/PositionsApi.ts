/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Positions } from './Positions';
import { PositionsRequestBuilder } from './PositionsRequestBuilder';
import { LaborUnionAgreementsApi } from './LaborUnionAgreementsApi';
import { PayCyclesApi } from './PayCyclesApi';
import { TitlesApi } from './TitlesApi';
import { DepartmentsApi } from './DepartmentsApi';
import { JobsApi } from './JobsApi';
import { CompensationRegionsApi } from './CompensationRegionsApi';
import { ReasonCodesApi } from './ReasonCodesApi';
import { PositionTypesApi } from './PositionTypesApi';
import { WorkersApi } from './WorkersApi';
import { BenefitsApi } from './BenefitsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PositionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Positions<DeSerializersT>, DeSerializersT>
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
  ): PositionsApi<DeSerializersT> {
    return new PositionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link laborUnionAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION_AGREEMENT: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      LaborUnionAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPayCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_PAY_CYCLE: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      PayCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_REGION: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_TYPE: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      PositionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LaborUnionAgreementsApi<DeSerializersT>,
      PayCyclesApi<DeSerializersT>,
      TitlesApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      JobsApi<DeSerializersT>,
      CompensationRegionsApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      PositionTypesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      BenefitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LABOR_UNION_AGREEMENT: new OneToOneLink(
        'LaborUnionAgreement',
        this,
        linkedApis[0]
      ),
      PAYROLL_PAY_CYCLE: new OneToOneLink(
        'PayrollPayCycle',
        this,
        linkedApis[1]
      ),
      TITLE: new OneToOneLink('Title', this, linkedApis[2]),
      DEPARTMENT: new OneToOneLink('Department', this, linkedApis[3]),
      JOB: new OneToOneLink('Job', this, linkedApis[4]),
      COMPENSATION_REGION: new OneToOneLink(
        'CompensationRegion',
        this,
        linkedApis[5]
      ),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[6]),
      POSITION_TYPE: new OneToOneLink('PositionType', this, linkedApis[7]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[8]),
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[9])
    };
    return this;
  }

  entityConstructor = Positions;

  requestBuilder(): PositionsRequestBuilder<DeSerializersT> {
    return new PositionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Positions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Positions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Positions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Positions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Positions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DETAIL_EFFECTIVE: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_TYPE_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNION_AGREEMENT_EFFECTIVE: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LABOR_UNION_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_DETAIL_EFFECTIVE: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETIREMENT: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNUAL_REGULAR_HOURS: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PRIMARY_POSITION: EnumField<
      Positions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FULL_TIME_EQUIVALENT: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKER_ASSIGNMENT_END: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DETAIL_EXPIRATION: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_NAME: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNION_AGREEMENT_LEGAL_ENTITY: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVATION: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_ASSIGNMENT_REASON_CODE_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_ASSIGNMENT_START: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AVAILABLE_FOR_ASSIGNMENT: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPORTS_TO_EXPIRATION: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPORTS_TO_POSITION_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_DETAIL_EXPIRATION: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAID_BY_LEGAL_ENTITY: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTS_TO_EFFECTIVE: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPENSATION_REGION_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNION_AGREEMENT_EXPIRATION: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNION_AGREEMENT_NAME: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_PERIOD_OVERTIME_HOURS: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SALARY_GENERATED: EnumField<
      Positions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_EARNINGS_GENERATED_FROM_SCHEDULE: EnumField<
      Positions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_EARNING_CODE_ID: OrderableEdmTypeField<
      Positions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link laborUnionAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION_AGREEMENT: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      LaborUnionAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPayCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_PAY_CYCLE: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      PayCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_REGION: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_TYPE: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      PositionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      Positions<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Positions<DeSerializers>>;
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
         * Static representation of the {@link positionTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PositionTypeId',
          'Edm.String',
          true
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unionAgreementEffective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNION_AGREEMENT_EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'UnionAgreementEffective',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link laborUnionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABOR_UNION_ID: fieldBuilder.buildEdmTypeField(
          'LaborUnionId',
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
         * Static representation of the {@link isPrimaryPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_POSITION: fieldBuilder.buildEnumField(
          'IsPrimaryPosition',
          NoYes,
          true
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
         * Static representation of the {@link unionAgreementLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNION_AGREEMENT_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'UnionAgreementLegalEntity',
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
         * Static representation of the {@link reportsToExpiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTS_TO_EXPIRATION: fieldBuilder.buildEdmTypeField(
          'ReportsToExpiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reportsToPositionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTS_TO_POSITION_ID: fieldBuilder.buildEdmTypeField(
          'ReportsToPositionId',
          'Edm.String',
          true
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
         * Static representation of the {@link reportsToEffective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTS_TO_EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'ReportsToEffective',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link unionAgreementExpiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNION_AGREEMENT_EXPIRATION: fieldBuilder.buildEdmTypeField(
          'UnionAgreementExpiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unionAgreementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNION_AGREEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'UnionAgreementName',
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
        ALL_FIELDS: new AllFields('*', Positions)
      };
    }

    return this._schema;
  }
}
