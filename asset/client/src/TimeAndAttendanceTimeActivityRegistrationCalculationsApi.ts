/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAndAttendanceTimeActivityRegistrationCalculations } from './TimeAndAttendanceTimeActivityRegistrationCalculations';
import { TimeAndAttendanceTimeActivityRegistrationCalculationsRequestBuilder } from './TimeAndAttendanceTimeActivityRegistrationCalculationsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { JmgDaysTotalWorkflowStatus } from './JmgDaysTotalWorkflowStatus';
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
export class TimeAndAttendanceTimeActivityRegistrationCalculationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializersT>,
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
  ): TimeAndAttendanceTimeActivityRegistrationCalculationsApi<DeSerializersT> {
    return new TimeAndAttendanceTimeActivityRegistrationCalculationsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = TimeAndAttendanceTimeActivityRegistrationCalculations;

  requestBuilder(): TimeAndAttendanceTimeActivityRegistrationCalculationsRequestBuilder<DeSerializersT> {
    return new TimeAndAttendanceTimeActivityRegistrationCalculationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializersT>,
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
    typeof TimeAndAttendanceTimeActivityRegistrationCalculations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeAndAttendanceTimeActivityRegistrationCalculations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIME_PROFILE_DATE: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TOTAL_WORK_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TIME_PROFILE_NORM_FLEX_TIME_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ERROR_LOG_TEXT: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TIME_PROFILE_CHANGED: EnumField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSFERRER_PERONNEL_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_START_DATE: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    HAS_ERRORS: EnumField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_PROFILE_START_TIME: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_WORK_SECONDS_NOT_ALLOCATED: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAY_END_TIME: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_PAY_ABSENCE_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_TRANSFERRED: EnumField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_END_TIME: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORK_END_DATE: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_PROFILE_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATOR_PERSONNEL_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_AND_ATTENDANCE_APPROVAL_GROUP_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_PAY_FLEX_TIME_CORRECTION_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_PAY_FLEX_TIME_SUB_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAY_AGREEMENT_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_AND_ATTENDANCE_CALCULATION_GROUP_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_PROFILE_NORM_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TIME_PROFILE_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_PROFILE_END_TIME: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_CLOCK_IN_TOLERANCE_DROPPED: EnumField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_PAY_FLEX_TIME_ADD_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_PAID_BREAK_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TIME_PROFILE_START_DATE: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TOTAL_PAY_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_PAY_FLEX_TIME_BALANCE_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_NON_PAID_BREAK_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_CLOCK_OUT_TOLERANCE_DROPPED: EnumField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_START_TIME: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_PAY_OVER_TIME_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_FLEX_TIME_ALLOWED: EnumField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_PROFILE_END_DATE: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_START_DATE: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TOTAL_PAY_LEGAL_ABSENCE_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORKFLOW_STATUS: EnumField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      JmgDaysTotalWorkflowStatus,
      true,
      true
    >;
    PAY_END_DATE: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_START_TIME: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_CALCULATED: EnumField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_PAY_ILLEGAL_ABSENCE_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_APPROVED: EnumField<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TimeAndAttendanceTimeActivityRegistrationCalculations<DeSerializers>
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
         * Static representation of the {@link totalWorkSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_WORK_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalWorkSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link timeProfileNormFlexTimeSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_NORM_FLEX_TIME_SECONDS: fieldBuilder.buildEdmTypeField(
          'TimeProfileNormFlexTimeSeconds',
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
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTimeProfileChanged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TIME_PROFILE_CHANGED: fieldBuilder.buildEnumField(
          'IsTimeProfileChanged',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transferrerPeronnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERRER_PERONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransferrerPeronnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_START_DATE: fieldBuilder.buildEdmTypeField(
          'WorkStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link hasErrors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_ERRORS: fieldBuilder.buildEnumField('HasErrors', NoYes, true),
        /**
         * Static representation of the {@link timeProfileStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_START_TIME: fieldBuilder.buildEdmTypeField(
          'TimeProfileStartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalWorkSecondsNotAllocated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_WORK_SECONDS_NOT_ALLOCATED: fieldBuilder.buildEdmTypeField(
          'TotalWorkSecondsNotAllocated',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link payEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_END_TIME: fieldBuilder.buildEdmTypeField(
          'PayEndTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalPayAbsenceSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAY_ABSENCE_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalPayAbsenceSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isTransferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSFERRED: fieldBuilder.buildEnumField(
          'IsTransferred',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_END_TIME: fieldBuilder.buildEdmTypeField(
          'WorkEndTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_END_DATE: fieldBuilder.buildEdmTypeField(
          'WorkEndDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link timeProfileSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_SECONDS: fieldBuilder.buildEdmTypeField(
          'TimeProfileSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calculatorPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATOR_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'CalculatorPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeAndAttendanceApprovalGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_AND_ATTENDANCE_APPROVAL_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TimeAndAttendanceApprovalGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalPayFlexTimeCorrectionSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAY_FLEX_TIME_CORRECTION_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalPayFlexTimeCorrectionSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalPayFlexTimeSubSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAY_FLEX_TIME_SUB_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalPayFlexTimeSubSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link payAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'PayAgreementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeAndAttendanceCalculationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_AND_ATTENDANCE_CALCULATION_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'TimeAndAttendanceCalculationGroupId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link timeProfileNormSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_NORM_SECONDS: fieldBuilder.buildEdmTypeField(
          'TimeProfileNormSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link timeProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'TimeProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeProfileEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_END_TIME: fieldBuilder.buildEdmTypeField(
          'TimeProfileEndTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isClockInToleranceDropped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CLOCK_IN_TOLERANCE_DROPPED: fieldBuilder.buildEnumField(
          'IsClockInToleranceDropped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link totalPayFlexTimeAddSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAY_FLEX_TIME_ADD_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalPayFlexTimeAddSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalPaidBreakSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAID_BREAK_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalPaidBreakSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link timeProfileStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_START_DATE: fieldBuilder.buildEdmTypeField(
          'TimeProfileStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link totalPaySeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAY_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalPaySeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalPayFlexTimeBalanceSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAY_FLEX_TIME_BALANCE_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalPayFlexTimeBalanceSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalNonPaidBreakSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_NON_PAID_BREAK_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalNonPaidBreakSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isClockOutToleranceDropped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CLOCK_OUT_TOLERANCE_DROPPED: fieldBuilder.buildEnumField(
          'IsClockOutToleranceDropped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_START_TIME: fieldBuilder.buildEdmTypeField(
          'WorkStartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalPayOverTimeSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAY_OVER_TIME_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalPayOverTimeSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isFlexTimeAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FLEX_TIME_ALLOWED: fieldBuilder.buildEnumField(
          'IsFlexTimeAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link timeProfileEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_END_DATE: fieldBuilder.buildEdmTypeField(
          'TimeProfileEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_START_DATE: fieldBuilder.buildEdmTypeField(
          'PayStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link totalPayLegalAbsenceSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAY_LEGAL_ABSENCE_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalPayLegalAbsenceSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'WorkflowStatus',
          JmgDaysTotalWorkflowStatus,
          true
        ),
        /**
         * Static representation of the {@link payEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_END_DATE: fieldBuilder.buildEdmTypeField(
          'PayEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_START_TIME: fieldBuilder.buildEdmTypeField(
          'PayStartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CALCULATED: fieldBuilder.buildEnumField('IsCalculated', NoYes, true),
        /**
         * Static representation of the {@link totalPayIllegalAbsenceSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAY_ILLEGAL_ABSENCE_SECONDS: fieldBuilder.buildEdmTypeField(
          'TotalPayIllegalAbsenceSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEnumField('IsApproved', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          TimeAndAttendanceTimeActivityRegistrationCalculations
        )
      };
    }

    return this._schema;
  }
}
