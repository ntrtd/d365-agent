/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicTimecardActivityRegistrationLines } from './ElectronicTimecardActivityRegistrationLines';
import { ElectronicTimecardActivityRegistrationLinesRequestBuilder } from './ElectronicTimecardActivityRegistrationLinesRequestBuilder';
import { ElectronicTimecardActivityRegistrationHeadersApi } from './ElectronicTimecardActivityRegistrationHeadersApi';
import { NoYes } from './NoYes';
import { JmgJourRegTypeEnum } from './JmgJourRegTypeEnum';
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
export class ElectronicTimecardActivityRegistrationLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ElectronicTimecardActivityRegistrationLines<DeSerializersT>,
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
  ): ElectronicTimecardActivityRegistrationLinesApi<DeSerializersT> {
    return new ElectronicTimecardActivityRegistrationLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link electronicTimecardActivityRegistrationHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ELECTRONIC_TIMECARD_ACTIVITY_REGISTRATION_HEADER: OneToOneLink<
      ElectronicTimecardActivityRegistrationLines<DeSerializersT>,
      DeSerializersT,
      ElectronicTimecardActivityRegistrationHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ElectronicTimecardActivityRegistrationHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ELECTRONIC_TIMECARD_ACTIVITY_REGISTRATION_HEADER: new OneToOneLink(
        'ElectronicTimecardActivityRegistrationHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ElectronicTimecardActivityRegistrationLines;

  requestBuilder(): ElectronicTimecardActivityRegistrationLinesRequestBuilder<DeSerializersT> {
    return new ElectronicTimecardActivityRegistrationLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ElectronicTimecardActivityRegistrationLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ElectronicTimecardActivityRegistrationLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ElectronicTimecardActivityRegistrationLines<DeSerializersT>,
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
    typeof ElectronicTimecardActivityRegistrationLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ElectronicTimecardActivityRegistrationLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELECTRONIC_TIMECARD_ACTIVITY_REGISTRATION_ENTRY_NUMBER: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ON_CALL_TIME_AND_ATTENDANCE_JOB_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_WORK_IN_PROGRESS: EnumField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ABSENCE_CODE_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDIRECT_ACTIVITY_CATEGORY_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_REGISTRATION_TYPE: EnumField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      JmgJourRegTypeEnum,
      true,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_PROFILE_DATE: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOP_DATE_TIME: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CALCULATED_TIME_SECONDS: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATIONS_RESOURCE_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATIONS_RESOURCE_PILOT_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABSENCE_CODE_TIME_AND_ATTENDANCE_JOB_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_AND_ATTENDANCE_JOB_ID: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_JOB_FINISHED: EnumField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PILOT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link electronicTimecardActivityRegistrationHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ELECTRONIC_TIMECARD_ACTIVITY_REGISTRATION_HEADER: OneToOneLink<
      ElectronicTimecardActivityRegistrationLines<DeSerializersT>,
      DeSerializersT,
      ElectronicTimecardActivityRegistrationHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ElectronicTimecardActivityRegistrationLines<DeSerializers>
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
         * Static representation of the {@link electronicTimecardActivityRegistrationEntryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_TIMECARD_ACTIVITY_REGISTRATION_ENTRY_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'ElectronicTimecardActivityRegistrationEntryNumber',
            'Edm.Int64',
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
         * Static representation of the {@link startDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StartDateTime',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link absenceCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_CODE_ID: fieldBuilder.buildEdmTypeField(
          'AbsenceCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
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
         * Static representation of the {@link productionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionOrderNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stopDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOP_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StopDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link operationsResourcePilotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_RESOURCE_PILOT_ID: fieldBuilder.buildEdmTypeField(
          'OperationsResourcePilotId',
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
         * Static representation of the {@link timeAndAttendanceJobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_AND_ATTENDANCE_JOB_ID: fieldBuilder.buildEdmTypeField(
          'TimeAndAttendanceJobId',
          'Edm.String',
          true
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
         * Static representation of the {@link pilotPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PILOT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PilotPersonnelNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ElectronicTimecardActivityRegistrationLines
        )
      };
    }

    return this._schema;
  }
}
