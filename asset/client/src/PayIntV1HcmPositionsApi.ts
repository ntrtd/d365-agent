/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1HcmPositions } from './PayIntV1HcmPositions';
import { PayIntV1HcmPositionsRequestBuilder } from './PayIntV1HcmPositionsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PayIntV1HcmPositionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1HcmPositions<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1HcmPositionsApi<DeSerializersT> {
    return new PayIntV1HcmPositionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1HcmPositions;

  requestBuilder(): PayIntV1HcmPositionsRequestBuilder<DeSerializersT> {
    return new PayIntV1HcmPositionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1HcmPositions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayIntV1HcmPositions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1HcmPositions<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PayIntV1HcmPositions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1HcmPositions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DETAIL_EFFECTIVE: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_TYPE_ID: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_ASSIGNMENT_REASON_CODE: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNION_AGREEMENT_EFFECTIVE: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LABOR_UNION_ID: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_DETAIL_EFFECTIVE: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETIREMENT: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNUAL_REGULAR_HOURS: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_PRIMARY_POSITION: EnumField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPENSATION_REGION: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FULL_TIME_EQUIVALENT: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKER_ASSIGNMENT_END: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DETAIL_EXPIRATION: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_NAME: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    UNION_AGREEMENT_LEGAL_ENTITY: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVATION: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_ASSIGNMENT_REASON_CODE_ID: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_ASSIGNMENT_START: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AVAILABLE_FOR_ASSIGNMENT: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPORTS_TO_EXPIRATION: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_TYPE: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORTS_TO_POSITION_ID: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_DETAIL_EXPIRATION: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAID_BY_LEGAL_ENTITY: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTS_TO_EFFECTIVE: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_CYCLE: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    UNION_AGREEMENT: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPENSATION_REGION_ID: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    UNION_AGREEMENT_EXPIRATION: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNION_AGREEMENT_NAME: OrderableEdmTypeField<
      PayIntV1HcmPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1HcmPositions<DeSerializers>>;
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
         * Static representation of the {@link workerAssignmentReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_ASSIGNMENT_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'WorkerAssignmentReasonCode',
          'Edm.Int64',
          false
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
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.Int64', false),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'Department',
          'Edm.Int64',
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
         * Static representation of the {@link job} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB: fieldBuilder.buildEdmTypeField('Job', 'Edm.Int64', false),
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
         * Static representation of the {@link compensationRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_REGION: fieldBuilder.buildEdmTypeField(
          'CompensationRegion',
          'Edm.Int64',
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
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.Int64',
          false
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
         * Static representation of the {@link positionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_TYPE: fieldBuilder.buildEdmTypeField(
          'PositionType',
          'Edm.Int64',
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
         * Static representation of the {@link payCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_CYCLE: fieldBuilder.buildEdmTypeField(
          'PayCycle',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link unionAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNION_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'UnionAgreement',
          'Edm.Int64',
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
         * Static representation of the {@link worker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER: fieldBuilder.buildEdmTypeField('Worker', 'Edm.Int64', false),
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1HcmPositions)
      };
    }

    return this._schema;
  }
}
