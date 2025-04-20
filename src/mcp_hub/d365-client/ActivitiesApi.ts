/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Activities } from './Activities';
import { ActivitiesRequestBuilder } from './ActivitiesRequestBuilder';
import { ServiceOrderHeadersApi } from './ServiceOrderHeadersApi';
import { ServiceOrderLinesApi } from './ServiceOrderLinesApi';
import { SmmActivityPriority } from './SmmActivityPriority';
import { SmmActivityCategory } from './SmmActivityCategory';
import { SmaDispatched } from './SmaDispatched';
import { NoYes } from './NoYes';
import { SmmSensitivity } from './SmmSensitivity';
import { SmmOutlookRecurrenceState } from './SmmOutlookRecurrenceState';
import { SmmShowTimeAs } from './SmmShowTimeAs';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ActivitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Activities<DeSerializersT>, DeSerializersT>
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
  ): ActivitiesApi<DeSerializersT> {
    return new ActivitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_LINES: OneToManyLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ServiceOrderLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ServiceOrderHeadersApi<DeSerializersT>,
      ServiceOrderLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SERVICE_ORDER_HEADERS: new OneToManyLink(
        'ServiceOrderHeaders',
        this,
        linkedApis[0]
      ),
      SERVICE_ORDER_LINES: new OneToManyLink(
        'ServiceOrderLines',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = Activities;

  requestBuilder(): ActivitiesRequestBuilder<DeSerializersT> {
    return new ActivitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Activities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Activities<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Activities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Activities, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Activities, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIORITY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      SmmActivityPriority,
      true,
      true
    >;
    CATEGORY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      SmmActivityCategory,
      true,
      true
    >;
    CLOSED_BY_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTLOOK_TEXT: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPATCHED: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      SmaDispatched,
      true,
      true
    >;
    MODIFIED: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_DAY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMINDER: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MASTER_APPOINTMENT: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGINAL_START_DATE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PHASE_ID: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENSITIVITY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      SmmSensitivity,
      true,
      true
    >;
    SOURCE_APPLICATION: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTLOOK_RESPONSE_REQUESTED: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESPONSIBILITY_ID: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_AND_TIME_CLOSED: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECURRENCE_STATE: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      SmmOutlookRecurrenceState,
      true,
      true
    >;
    MILEAGE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_WORK: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMINDER_MINUTES: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OUTLOOK_SHARED_OBJECT_ID: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROLE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEAM_TASK: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OUTLOOK_ENTRY_ID: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTLOOK_RESOURCES: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTLOOK_CATEGORIES: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEEP_SYNCHRONIZED: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSED: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBLE_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHOW_TIME_AS: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      SmmShowTimeAs,
      true,
      true
    >;
    COMPLETED_PERCENTAGE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILLING_INFORMATION: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_STATUS: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      SmmActivityTaskTimeType,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_DATE_TIME_EDITED: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TOTAL_WORK: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TEMPLATE: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMINDER_DATE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_LINES: OneToManyLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ServiceOrderLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Activities<DeSerializers>>;
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
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEnumField(
          'Priority',
          SmmActivityPriority,
          true
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
         * Static representation of the {@link closedByPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_BY_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ClosedByPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outlookText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTLOOK_TEXT: fieldBuilder.buildEdmTypeField(
          'OutlookText',
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
         * Static representation of the {@link modified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED: fieldBuilder.buildEnumField('Modified', NoYes, true),
        /**
         * Static representation of the {@link allDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALL_DAY: fieldBuilder.buildEnumField('AllDay', NoYes, true),
        /**
         * Static representation of the {@link reminder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER: fieldBuilder.buildEnumField('Reminder', NoYes, true),
        /**
         * Static representation of the {@link masterAppointment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASTER_APPOINTMENT: fieldBuilder.buildEnumField(
          'MasterAppointment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link originalStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'OriginalStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link phaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHASE_ID: fieldBuilder.buildEdmTypeField('PhaseId', 'Edm.String', true),
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
         * Static representation of the {@link sourceApplication} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_APPLICATION: fieldBuilder.buildEdmTypeField(
          'SourceApplication',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outlookResponseRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTLOOK_RESPONSE_REQUESTED: fieldBuilder.buildEnumField(
          'OutlookResponseRequested',
          NoYes,
          true
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
         * Static representation of the {@link dateAndTimeClosed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_AND_TIME_CLOSED: fieldBuilder.buildEdmTypeField(
          'DateAndTimeClosed',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link mileage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE: fieldBuilder.buildEdmTypeField('Mileage', 'Edm.String', true),
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
         * Static representation of the {@link reminderMinutes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER_MINUTES: fieldBuilder.buildEdmTypeField(
          'ReminderMinutes',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link outlookSharedObjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTLOOK_SHARED_OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'OutlookSharedObjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link role} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE: fieldBuilder.buildEdmTypeField('Role', 'Edm.String', true),
        /**
         * Static representation of the {@link teamTask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_TASK: fieldBuilder.buildEnumField('TeamTask', NoYes, true),
        /**
         * Static representation of the {@link outlookEntryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTLOOK_ENTRY_ID: fieldBuilder.buildEdmTypeField(
          'OutlookEntryId',
          'Edm.String',
          true
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
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', true),
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
         * Static representation of the {@link keepSynchronized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP_SYNCHRONIZED: fieldBuilder.buildEnumField(
          'KeepSynchronized',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED: fieldBuilder.buildEnumField('Closed', NoYes, true),
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
         * Static representation of the {@link responsibleWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResponsibleWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link showTimeAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_TIME_AS: fieldBuilder.buildEnumField(
          'ShowTimeAs',
          SmmShowTimeAs,
          true
        ),
        /**
         * Static representation of the {@link completedPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'CompletedPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link billingInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_INFORMATION: fieldBuilder.buildEdmTypeField(
          'BillingInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_STATUS: fieldBuilder.buildEnumField(
          'ActivityStatus',
          SmmActivityTaskTimeType,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link lastDateTimeEdited} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DATE_TIME_EDITED: fieldBuilder.buildEdmTypeField(
          'LastDateTimeEdited',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', true),
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
         * Static representation of the {@link template} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE: fieldBuilder.buildEnumField('Template', NoYes, true),
        /**
         * Static representation of the {@link reminderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER_DATE: fieldBuilder.buildEdmTypeField(
          'ReminderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Activities)
      };
    }

    return this._schema;
  }
}
