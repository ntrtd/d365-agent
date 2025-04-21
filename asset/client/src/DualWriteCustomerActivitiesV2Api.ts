/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DualWriteCustomerActivitiesV2 } from './DualWriteCustomerActivitiesV2';
import { DualWriteCustomerActivitiesV2RequestBuilder } from './DualWriteCustomerActivitiesV2RequestBuilder';
import { SmmSensitivity } from './SmmSensitivity';
import { NoYes } from './NoYes';
import { SmmActivityStatus } from './SmmActivityStatus';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
import { SmmShowTimeAs } from './SmmShowTimeAs';
import { SmaDispatched } from './SmaDispatched';
import { SmmActivityParentType } from './SmmActivityParentType';
import { SmmActivityPriority } from './SmmActivityPriority';
import { SmmOutlookRecurrenceState } from './SmmOutlookRecurrenceState';
import { SmmActivityCategory } from './SmmActivityCategory';
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
export class DualWriteCustomerActivitiesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DualWriteCustomerActivitiesV2<DeSerializersT>, DeSerializersT>
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
  ): DualWriteCustomerActivitiesV2Api<DeSerializersT> {
    return new DualWriteCustomerActivitiesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DualWriteCustomerActivitiesV2;

  requestBuilder(): DualWriteCustomerActivitiesV2RequestBuilder<DeSerializersT> {
    return new DualWriteCustomerActivitiesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DualWriteCustomerActivitiesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DualWriteCustomerActivitiesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DualWriteCustomerActivitiesV2<DeSerializersT>,
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
    typeof DualWriteCustomerActivitiesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DualWriteCustomerActivitiesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_INFORMATION: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_AGREEMENT_HEADER: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SENSITIVITY: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      SmmSensitivity,
      true,
      true
    >;
    USER_MEMO: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEAM_TASK: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATUS: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      SmmActivityStatus,
      true,
      true
    >;
    KEEP_SYNCHRONIZED: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHASE_ID: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTLOOK_ENTRY_ID: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMINDER_DATE_TIME: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REMINDER_ACTIVE: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_LINK: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OUTLOOK_CATEGORIES: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVITY_TASK_TIME_TYPE: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      SmmActivityTaskTimeType,
      true,
      true
    >;
    TOTAL_WORK: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OUTLOOK_RESOURCES: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TIME_TYPE: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      SmmShowTimeAs,
      true,
      true
    >;
    TASK_ROLE: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPATCHED: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      SmaDispatched,
      true,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REMINDER_MINUTES: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_TYPE: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      SmmActivityParentType,
      true,
      true
    >;
    IS_TEMPLATE: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MODIFIED: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MILEAGE: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DONE_BY_WORKER: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LAST_EDIT_AX_DATE_TIME: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TASK_PRIORITY: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      SmmActivityPriority,
      true,
      true
    >;
    ACTUAL_END_DATE_TIME: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESPONSIBILITY_ID: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSE_REQUESTED: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECURRENCE_STATE: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      SmmOutlookRecurrenceState,
      true,
      true
    >;
    PERCENTAGE_COMPLETED: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_DAY: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OUTLOOK_GLOBAL_OBJECT_ID: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MASTER_APPOINTMENT: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGINAL_APPOINTMENT_START_DATE_TIME: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CATEGORY: EnumField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      SmmActivityCategory,
      true,
      true
    >;
    ACTUAL_WORK: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_MEMO: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE: OrderableEdmTypeField<
      DualWriteCustomerActivitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DualWriteCustomerActivitiesV2<DeSerializers>>;
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
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billingInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_INFORMATION: fieldBuilder.buildEdmTypeField(
          'BillingInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchAgreementHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_AGREEMENT_HEADER: fieldBuilder.buildEdmTypeField(
          'PurchAgreementHeader',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sensitivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENSITIVITY: fieldBuilder.buildEnumField(
          'Sensitivity',
          SmmSensitivity,
          true
        ),
        /**
         * Static representation of the {@link userMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_MEMO: fieldBuilder.buildEdmTypeField(
          'UserMemo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link teamTask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_TASK: fieldBuilder.buildEnumField('TeamTask', NoYes, true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', SmmActivityStatus, true),
        /**
         * Static representation of the {@link keepSynchronized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP_SYNCHRONIZED: fieldBuilder.buildEnumField(
          'KeepSynchronized',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link phaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHASE_ID: fieldBuilder.buildEdmTypeField('PhaseId', 'Edm.String', true),
        /**
         * Static representation of the {@link endDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outlookEntryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTLOOK_ENTRY_ID: fieldBuilder.buildEdmTypeField(
          'OutlookEntryID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reminderDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ReminderDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reminderActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER_ACTIVE: fieldBuilder.buildEnumField(
          'ReminderActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINK: fieldBuilder.buildEnumField('PrimaryLink', NoYes, true),
        /**
         * Static representation of the {@link outlookCategories} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTLOOK_CATEGORIES: fieldBuilder.buildEdmTypeField(
          'OutlookCategories',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED: fieldBuilder.buildEnumField('Closed', NoYes, true),
        /**
         * Static representation of the {@link activityTaskTimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TASK_TIME_TYPE: fieldBuilder.buildEnumField(
          'ActivityTaskTimeType',
          SmmActivityTaskTimeType,
          true
        ),
        /**
         * Static representation of the {@link totalWork} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_WORK: fieldBuilder.buildEdmTypeField(
          'TotalWork',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link outlookResources} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTLOOK_RESOURCES: fieldBuilder.buildEdmTypeField(
          'OutlookResources',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityTimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TIME_TYPE: fieldBuilder.buildEnumField(
          'ActivityTimeType',
          SmmShowTimeAs,
          true
        ),
        /**
         * Static representation of the {@link taskRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_ROLE: fieldBuilder.buildEdmTypeField(
          'TaskRole',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dispatched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPATCHED: fieldBuilder.buildEnumField(
          'Dispatched',
          SmaDispatched,
          true
        ),
        /**
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reminderMinutes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER_MINUTES: fieldBuilder.buildEdmTypeField(
          'ReminderMinutes',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
        /**
         * Static representation of the {@link parentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_TYPE: fieldBuilder.buildEnumField(
          'ParentType',
          SmmActivityParentType,
          true
        ),
        /**
         * Static representation of the {@link isTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TEMPLATE: fieldBuilder.buildEnumField('IsTemplate', NoYes, true),
        /**
         * Static representation of the {@link modified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED: fieldBuilder.buildEnumField('Modified', NoYes, true),
        /**
         * Static representation of the {@link mileage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE: fieldBuilder.buildEdmTypeField('Mileage', 'Edm.String', true),
        /**
         * Static representation of the {@link doneByWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DONE_BY_WORKER: fieldBuilder.buildEdmTypeField(
          'DoneByWorker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lastEditAxDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EDIT_AX_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastEditAxDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taskPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_PRIORITY: fieldBuilder.buildEnumField(
          'TaskPriority',
          SmmActivityPriority,
          true
        ),
        /**
         * Static representation of the {@link actualEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ActualEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link responsibilityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBILITY_ID: fieldBuilder.buildEdmTypeField(
          'ResponsibilityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link responseRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_REQUESTED: fieldBuilder.buildEnumField(
          'ResponseRequested',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', true),
        /**
         * Static representation of the {@link recurrenceState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_STATE: fieldBuilder.buildEnumField(
          'RecurrenceState',
          SmmOutlookRecurrenceState,
          true
        ),
        /**
         * Static representation of the {@link percentageCompleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_COMPLETED: fieldBuilder.buildEdmTypeField(
          'PercentageCompleted',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALL_DAY: fieldBuilder.buildEnumField('AllDay', NoYes, true),
        /**
         * Static representation of the {@link outlookGlobalObjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTLOOK_GLOBAL_OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'OutlookGlobalObjectID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', true),
        /**
         * Static representation of the {@link isMasterAppointment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MASTER_APPOINTMENT: fieldBuilder.buildEnumField(
          'IsMasterAppointment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link originalAppointmentStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_APPOINTMENT_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'OriginalAppointmentStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEnumField(
          'Category',
          SmmActivityCategory,
          true
        ),
        /**
         * Static representation of the {@link actualWork} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_WORK: fieldBuilder.buildEdmTypeField(
          'ActualWork',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link externalMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_MEMO: fieldBuilder.buildEdmTypeField(
          'ExternalMemo',
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
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEdmTypeField('Source', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DualWriteCustomerActivitiesV2)
      };
    }

    return this._schema;
  }
}
