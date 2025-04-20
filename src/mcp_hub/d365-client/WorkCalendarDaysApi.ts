/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkCalendarDays } from './WorkCalendarDays';
import { WorkCalendarDaysRequestBuilder } from './WorkCalendarDaysRequestBuilder';
import { WorkCalendarTimeIntervalsApi } from './WorkCalendarTimeIntervalsApi';
import { WorkCalendarsApi } from './WorkCalendarsApi';
import { NoYes } from './NoYes';
import { WorkTimeControl } from './WorkTimeControl';
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
export class WorkCalendarDaysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkCalendarDays<DeSerializersT>, DeSerializersT>
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
  ): WorkCalendarDaysApi<DeSerializersT> {
    return new WorkCalendarDaysApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link workCalendarTimeIntervals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR_TIME_INTERVALS: OneToManyLink<
      WorkCalendarDays<DeSerializersT>,
      DeSerializersT,
      WorkCalendarTimeIntervalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      WorkCalendarDays<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkCalendarTimeIntervalsApi<DeSerializersT>,
      WorkCalendarsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORK_CALENDAR_TIME_INTERVALS: new OneToManyLink(
        'WorkCalendarTimeIntervals',
        this,
        linkedApis[0]
      ),
      WORK_CALENDAR: new OneToOneLink('WorkCalendar', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = WorkCalendarDays;

  requestBuilder(): WorkCalendarDaysRequestBuilder<DeSerializersT> {
    return new WorkCalendarDaysRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkCalendarDays<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkCalendarDays<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkCalendarDays<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkCalendarDays, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkCalendarDays,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WorkCalendarDays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_CALENDAR_ID: OrderableEdmTypeField<
      WorkCalendarDays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALENDAR_DATE: OrderableEdmTypeField<
      WorkCalendarDays<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_PICKING_UP_CLOSED: EnumField<
      WorkCalendarDays<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKING_DAY_DEFINITION: EnumField<
      WorkCalendarDays<DeSerializers>,
      DeSerializersT,
      WorkTimeControl,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workCalendarTimeIntervals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR_TIME_INTERVALS: OneToManyLink<
      WorkCalendarDays<DeSerializersT>,
      DeSerializersT,
      WorkCalendarTimeIntervalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      WorkCalendarDays<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkCalendarDays<DeSerializers>>;
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
         * Static representation of the {@link workCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'WorkCalendarId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link calendarDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_DATE: fieldBuilder.buildEdmTypeField(
          'CalendarDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isPickingUpClosed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PICKING_UP_CLOSED: fieldBuilder.buildEnumField(
          'IsPickingUpClosed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workingDayDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKING_DAY_DEFINITION: fieldBuilder.buildEnumField(
          'WorkingDayDefinition',
          WorkTimeControl,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkCalendarDays)
      };
    }

    return this._schema;
  }
}
