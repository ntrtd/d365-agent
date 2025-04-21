/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAndAttendanceActivityRegistrations } from './TimeAndAttendanceActivityRegistrations';
import { TimeAndAttendanceActivityRegistrationsRequestBuilder } from './TimeAndAttendanceActivityRegistrationsRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { JmgStampTypeSpecEnum } from './JmgStampTypeSpecEnum';
import { JmgStampTypeEnum } from './JmgStampTypeEnum';
import { JmgJournalRegWorkflowStatus } from './JmgJournalRegWorkflowStatus';
import { RouteJobType } from './RouteJobType';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
import { JmgJobTypeEnum } from './JmgJobTypeEnum';
import { JmgJobRefTypeEnum } from './JmgJobRefTypeEnum';
import { JmgJourRegTypeEnum } from './JmgJourRegTypeEnum';
import { ProdErrorCause } from './ProdErrorCause';
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
export class TimeAndAttendanceActivityRegistrationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TimeAndAttendanceActivityRegistrations<DeSerializersT>,
      DeSerializersT
    >
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
  ): TimeAndAttendanceActivityRegistrationsApi<DeSerializersT> {
    return new TimeAndAttendanceActivityRegistrationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      TimeAndAttendanceActivityRegistrations<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      TimeAndAttendanceActivityRegistrations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkersApi<DeSerializersT>, DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = TimeAndAttendanceActivityRegistrations;

  requestBuilder(): TimeAndAttendanceActivityRegistrationsRequestBuilder<DeSerializersT> {
    return new TimeAndAttendanceActivityRegistrationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TimeAndAttendanceActivityRegistrations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeAndAttendanceActivityRegistrations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeAndAttendanceActivityRegistrations<DeSerializersT>,
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
    typeof TimeAndAttendanceActivityRegistrations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeAndAttendanceActivityRegistrations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIME_PROFILE_DATE: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVITY_REGISTRATION_ENTRY_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OPERATIONS_RESOURCE_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CORRECTED_START_TIME: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_JOB_FINISHED: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REGISTRATION_SUB_TYPE: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      JmgStampTypeSpecEnum,
      true,
      true
    >;
    REPORTED_ERROR_QUANTITY: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BREAK_TOLERANCE_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ON_CALL_TIME_AND_ATTENDANCE_JOB_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_TYPE: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      JmgStampTypeEnum,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STOP_REGISTRATION_TERMINAL_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATED_TIME_AFTER_ALLOCATION_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ERROR_LOG_TEXT: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABSENCE_CODE_TIME_AND_ATTENDANCE_JOB_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTED_GOOD_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKFLOW_STATUS: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      JmgJournalRegWorkflowStatus,
      true,
      true
    >;
    STARTED_QUANTITY: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_JOB_TYPE: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      RouteJobType,
      true,
      true
    >;
    ACTIVITY_REGISTRATION_TRANSACTION_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_PAY_RATE_METHOD: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      JmgJobPayTypeEnum,
      true,
      true
    >;
    REPORTED_ERROR_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ABSENCE_PAY_UNITS: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CORRECTED_END_TIME: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_REGISTRATION_TERMINAL_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTED_END_DATE: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PILOT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BREAK_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TIME_ALLOCATION_TYPE: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      JmgJobTypeEnum,
      true,
      true
    >;
    TIME_AND_ATTENDANCE_JOB_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDIRECT_ACTIVITY_NAME: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TYPE: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      JmgJobRefTypeEnum,
      true,
      true
    >;
    CALCULATED_TIME_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ERROR_SPECIFICATION: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_STOP_TIME: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_WORK_IN_PROGRESS: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INDIRECT_ACTIVITY_CATEGORY_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_REGISTRATION_TYPE: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      JmgJourRegTypeEnum,
      true,
      true
    >;
    CORRECTED_START_DATE: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ERROR_CAUSE: EnumField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      ProdErrorCause,
      true,
      true
    >;
    REPORTED_GOOD_QUANTITY: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATED_TIME_BEFORE_ALLOCATION_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OPERATION_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATIONS_RESOURCE_PILOT_ID: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      TimeAndAttendanceActivityRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      TimeAndAttendanceActivityRegistrations<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      TimeAndAttendanceActivityRegistrations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TimeAndAttendanceActivityRegistrations<DeSerializers>
    >;
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
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link timeProfileDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_DATE: fieldBuilder.buildEdmTypeField(
          'TimeProfileDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activityRegistrationEntryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_REGISTRATION_ENTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityRegistrationEntryNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link operationsResourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'OperationsResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link correctedStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_START_TIME: fieldBuilder.buildEdmTypeField(
          'CorrectedStartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isJobFinished} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JOB_FINISHED: fieldBuilder.buildEnumField(
          'IsJobFinished',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link registrationSubType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_SUB_TYPE: fieldBuilder.buildEnumField(
          'RegistrationSubType',
          JmgStampTypeSpecEnum,
          true
        ),
        /**
         * Static representation of the {@link reportedErrorQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_ERROR_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedErrorQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link breakToleranceSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BREAK_TOLERANCE_SECONDS: fieldBuilder.buildEdmTypeField(
          'BreakToleranceSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link onCallTimeAndAttendanceJobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_CALL_TIME_AND_ATTENDANCE_JOB_ID: fieldBuilder.buildEdmTypeField(
          'OnCallTimeAndAttendanceJobId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registrationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_TYPE: fieldBuilder.buildEnumField(
          'RegistrationType',
          JmgStampTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link stopRegistrationTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOP_REGISTRATION_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'StopRegistrationTerminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculatedTimeAfterAllocationSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_TIME_AFTER_ALLOCATION_SECONDS:
          fieldBuilder.buildEdmTypeField(
            'CalculatedTimeAfterAllocationSeconds',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link errorLogText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_LOG_TEXT: fieldBuilder.buildEdmTypeField(
          'ErrorLogText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link absenceCodeTimeAndAttendanceJobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_CODE_TIME_AND_ATTENDANCE_JOB_ID: fieldBuilder.buildEdmTypeField(
          'AbsenceCodeTimeAndAttendanceJobId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportedGoodCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_GOOD_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedGoodCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'WorkflowStatus',
          JmgJournalRegWorkflowStatus,
          true
        ),
        /**
         * Static representation of the {@link startedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StartedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeJobType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_JOB_TYPE: fieldBuilder.buildEnumField(
          'RouteJobType',
          RouteJobType,
          true
        ),
        /**
         * Static representation of the {@link activityRegistrationTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_REGISTRATION_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'ActivityRegistrationTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobPayRateMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_PAY_RATE_METHOD: fieldBuilder.buildEnumField(
          'JobPayRateMethod',
          JmgJobPayTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link reportedErrorCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_ERROR_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedErrorCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link absencePayUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_PAY_UNITS: fieldBuilder.buildEdmTypeField(
          'AbsencePayUnits',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link correctedEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_END_TIME: fieldBuilder.buildEdmTypeField(
          'CorrectedEndTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link startRegistrationTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_REGISTRATION_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'StartRegistrationTerminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctedEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_END_DATE: fieldBuilder.buildEdmTypeField(
          'CorrectedEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link pilotPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PILOT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PilotPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link breakSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BREAK_SECONDS: fieldBuilder.buildEdmTypeField(
          'BreakSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link timeAllocationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ALLOCATION_TYPE: fieldBuilder.buildEnumField(
          'TimeAllocationType',
          JmgJobTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link timeAndAttendanceJobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_AND_ATTENDANCE_JOB_ID: fieldBuilder.buildEdmTypeField(
          'TimeAndAttendanceJobId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link indirectActivityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDIRECT_ACTIVITY_NAME: fieldBuilder.buildEdmTypeField(
          'IndirectActivityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TYPE: fieldBuilder.buildEnumField(
          'ActivityType',
          JmgJobRefTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link calculatedTimeSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_TIME_SECONDS: fieldBuilder.buildEdmTypeField(
          'CalculatedTimeSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link errorSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_SPECIFICATION: fieldBuilder.buildEdmTypeField(
          'ErrorSpecification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endStopTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_STOP_TIME: fieldBuilder.buildEdmTypeField(
          'EndStopTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isWorkInProgress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORK_IN_PROGRESS: fieldBuilder.buildEnumField(
          'IsWorkInProgress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link indirectActivityCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDIRECT_ACTIVITY_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'IndirectActivityCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalRegistrationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_REGISTRATION_TYPE: fieldBuilder.buildEnumField(
          'JournalRegistrationType',
          JmgJourRegTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link correctedStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_START_DATE: fieldBuilder.buildEdmTypeField(
          'CorrectedStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link errorCause} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CAUSE: fieldBuilder.buildEnumField(
          'ErrorCause',
          ProdErrorCause,
          true
        ),
        /**
         * Static representation of the {@link reportedGoodQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_GOOD_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedGoodQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calculatedTimeBeforeAllocationSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_TIME_BEFORE_ALLOCATION_SECONDS:
          fieldBuilder.buildEdmTypeField(
            'CalculatedTimeBeforeAllocationSeconds',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link operationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperationNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operationsResourcePilotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_RESOURCE_PILOT_ID: fieldBuilder.buildEdmTypeField(
          'OperationsResourcePilotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StartedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeAndAttendanceActivityRegistrations)
      };
    }

    return this._schema;
  }
}
