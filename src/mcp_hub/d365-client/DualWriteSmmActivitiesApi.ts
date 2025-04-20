/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DualWriteSmmActivities } from './DualWriteSmmActivities';
import { DualWriteSmmActivitiesRequestBuilder } from './DualWriteSmmActivitiesRequestBuilder';
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
export class DualWriteSmmActivitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DualWriteSmmActivities<DeSerializersT>, DeSerializersT>
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
  ): DualWriteSmmActivitiesApi<DeSerializersT> {
    return new DualWriteSmmActivitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DualWriteSmmActivities;

  requestBuilder(): DualWriteSmmActivitiesRequestBuilder<DeSerializersT> {
    return new DualWriteSmmActivitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DualWriteSmmActivities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DualWriteSmmActivities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DualWriteSmmActivities<DeSerializersT>,
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
    typeof DualWriteSmmActivities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DualWriteSmmActivities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_INFORMATION: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_AGREEMENT_HEADER: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SENSITIVITY: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      SmmSensitivity,
      true,
      true
    >;
    PSA_CATEGORY_DEFAULT: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_MEMO: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEAM_TASK: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATUS: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      SmmActivityStatus,
      true,
      true
    >;
    REC_VERSION_1: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PHASE_ID: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEEP_SYNCHRONIZED: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTLOOK_ENTRY_ID: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMINDER_DATE_TIME: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REMINDER_ACTIVE: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PSA_QUOTATION_ID: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTLOOK_CATEGORIES: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_DATE_TIME_1: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CLOSED: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVITY_TASK_TIME_TYPE: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      SmmActivityTaskTimeType,
      true,
      true
    >;
    TOTAL_WORK: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OUTLOOK_RESOURCES: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TIME_TYPE: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      SmmShowTimeAs,
      true,
      true
    >;
    CREATED_DATE_TIME_1: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TASK_ROLE: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REC_ID_1: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PARTITION_1: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISPATCHED: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      SmaDispatched,
      true,
      true
    >;
    PSA_DESCRIPTION: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBLE_WORKER: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REMINDER_MINUTES: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_TYPE: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      SmmActivityParentType,
      true,
      true
    >;
    IS_TEMPLATE: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MODIFIED: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MILEAGE: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DONE_BY_WORKER: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LAST_EDIT_AX_DATE_TIME: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PSA_MILE_STONE: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TASK_PRIORITY: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      SmmActivityPriority,
      true,
      true
    >;
    DATA_AREA_ID_1: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_END_DATE_TIME: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESPONSIBILITY_ID: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSE_REQUESTED: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECURRENCE_STATE: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      SmmOutlookRecurrenceState,
      true,
      true
    >;
    PERCENTAGE_COMPLETED: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MODIFIED_BY_1: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_DAY: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATED_BY_1: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTLOOK_GLOBAL_OBJECT_ID: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MASTER_APPOINTMENT: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGINAL_APPOINTMENT_START_DATE_TIME: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CATEGORY: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      SmmActivityCategory,
      true,
      true
    >;
    ACTUAL_WORK: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PSA_ACTIVITY: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_MEMO: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE: OrderableEdmTypeField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_MANDATORY: EnumField<
      DualWriteSmmActivities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<DualWriteSmmActivities<DeSerializers>>;
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
         * Static representation of the {@link psaCategoryDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_CATEGORY_DEFAULT: fieldBuilder.buildEdmTypeField(
          'PSACategoryDefault',
          'Edm.String',
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
         * Static representation of the {@link recVersion1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REC_VERSION_1: fieldBuilder.buildEdmTypeField(
          'RecVersion1',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link phaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHASE_ID: fieldBuilder.buildEdmTypeField('PhaseId', 'Edm.String', true),
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
         * Static representation of the {@link reminderActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER_ACTIVE: fieldBuilder.buildEnumField(
          'ReminderActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link psaQuotationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_QUOTATION_ID: fieldBuilder.buildEdmTypeField(
          'PSAQuotationId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link modifiedDateTime1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_DATE_TIME_1: fieldBuilder.buildEdmTypeField(
          'ModifiedDateTime1',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link createdDateTime1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME_1: fieldBuilder.buildEdmTypeField(
          'CreatedDateTime1',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link recId1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REC_ID_1: fieldBuilder.buildEdmTypeField('RecId1', 'Edm.Int64', false),
        /**
         * Static representation of the {@link partition1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTITION_1: fieldBuilder.buildEdmTypeField(
          'Partition1',
          'Edm.Int64',
          false
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
         * Static representation of the {@link psaDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PSADescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link responsibleWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_WORKER: fieldBuilder.buildEdmTypeField(
          'ResponsibleWorker',
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
         * Static representation of the {@link psaMileStone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_MILE_STONE: fieldBuilder.buildEnumField(
          'PSAMileStone',
          NoYes,
          true
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
         * Static representation of the {@link dataAreaId1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID_1: fieldBuilder.buildEdmTypeField(
          'DataAreaId1',
          'Edm.String',
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
         * Static representation of the {@link modifiedBy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_BY_1: fieldBuilder.buildEdmTypeField(
          'ModifiedBy1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALL_DAY: fieldBuilder.buildEnumField('AllDay', NoYes, true),
        /**
         * Static representation of the {@link createdBy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_1: fieldBuilder.buildEdmTypeField(
          'CreatedBy1',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link psaActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_ACTIVITY: fieldBuilder.buildEdmTypeField(
          'PSAActivity',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link psaMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_MANDATORY: fieldBuilder.buildEnumField('PSAMandatory', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DualWriteSmmActivities)
      };
    }

    return this._schema;
  }
}
