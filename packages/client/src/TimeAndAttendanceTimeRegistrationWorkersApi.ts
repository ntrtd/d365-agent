/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAndAttendanceTimeRegistrationWorkers } from './TimeAndAttendanceTimeRegistrationWorkers';
import { TimeAndAttendanceTimeRegistrationWorkersRequestBuilder } from './TimeAndAttendanceTimeRegistrationWorkersRequestBuilder';
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
export class TimeAndAttendanceTimeRegistrationWorkersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializersT>,
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
  ): TimeAndAttendanceTimeRegistrationWorkersApi<DeSerializersT> {
    return new TimeAndAttendanceTimeRegistrationWorkersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TimeAndAttendanceTimeRegistrationWorkers;

  requestBuilder(): TimeAndAttendanceTimeRegistrationWorkersRequestBuilder<DeSerializersT> {
    return new TimeAndAttendanceTimeRegistrationWorkersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TimeAndAttendanceTimeRegistrationWorkers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeAndAttendanceTimeRegistrationWorkers<DeSerializersT>,
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
    typeof TimeAndAttendanceTimeRegistrationWorkers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeAndAttendanceTimeRegistrationWorkers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SENIORITY_DATE: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_BADGE_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_AND_ATTENDANCE_APPROVAL_GROUP_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_ACTIVATION_DATE: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_PERIOD_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_AND_ATTENDANCE_PROFILE_GROUP_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPENING_FLEX_BALANCE_SECONDS: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TIME_AND_ATTENDANCE_CALCULATION_GROUP_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_BADGE_VERSION: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_CARD_TERMINAL_CONFIGURATION_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_AND_ATTENDANCE_FLEX_GROUP_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TIME_AND_ATTEDANCE_CALCULATION_GROUP_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FLEX_TIME_ALLOWED: EnumField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_TIME_PROFILE_ID: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_AGREEMENT_CODE: OrderableEdmTypeField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAN_BUNDLE_NEW_JOBS: EnumField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAN_USE_ELECTRONIC_TIMECARD: EnumField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HAS_SUPERVISOR_OPTIONS: EnumField<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      TimeAndAttendanceTimeRegistrationWorkers<DeSerializers>
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
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link seniorityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENIORITY_DATE: fieldBuilder.buildEdmTypeField(
          'SeniorityDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerBadgeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_BADGE_ID: fieldBuilder.buildEdmTypeField(
          'WorkerBadgeId',
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
         * Static representation of the {@link workerActivationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_ACTIVATION_DATE: fieldBuilder.buildEdmTypeField(
          'WorkerActivationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'ProjectPeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeAndAttendanceProfileGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_AND_ATTENDANCE_PROFILE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TimeAndAttendanceProfileGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link openingFlexBalanceSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPENING_FLEX_BALANCE_SECONDS: fieldBuilder.buildEdmTypeField(
          'OpeningFlexBalanceSeconds',
          'Edm.Int32',
          false
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
         * Static representation of the {@link workerBadgeVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_BADGE_VERSION: fieldBuilder.buildEdmTypeField(
          'WorkerBadgeVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobCardTerminalConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_CARD_TERMINAL_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'JobCardTerminalConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeAndAttendanceFlexGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_AND_ATTENDANCE_FLEX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TimeAndAttendanceFlexGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultTimeAndAttedanceCalculationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TIME_AND_ATTEDANCE_CALCULATION_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'DefaultTimeAndAttedanceCalculationGroupId',
            'Edm.String',
            true
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
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardTimeProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_TIME_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'StandardTimeProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payAgreementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_AGREEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'PayAgreementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link canBundleNewJobs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_BUNDLE_NEW_JOBS: fieldBuilder.buildEnumField(
          'CanBundleNewJobs',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link canUseElectronicTimecard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_USE_ELECTRONIC_TIMECARD: fieldBuilder.buildEnumField(
          'CanUseElectronicTimecard',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hasSupervisorOptions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_SUPERVISOR_OPTIONS: fieldBuilder.buildEnumField(
          'HasSupervisorOptions',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeAndAttendanceTimeRegistrationWorkers)
      };
    }

    return this._schema;
  }
}
