/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkCalendarHolidays } from './WorkCalendarHolidays';
import { WorkCalendarHolidaysRequestBuilder } from './WorkCalendarHolidaysRequestBuilder';
import { WorkCalendarsApi } from './WorkCalendarsApi';
import { WorkCalendarHolidayLinesApi } from './WorkCalendarHolidayLinesApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WorkCalendarHolidaysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkCalendarHolidays<DeSerializersT>, DeSerializersT>
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
  ): WorkCalendarHolidaysApi<DeSerializersT> {
    return new WorkCalendarHolidaysApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      WorkCalendarHolidays<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workCalendarHolidayLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR_HOLIDAY_LINE: OneToManyLink<
      WorkCalendarHolidays<DeSerializersT>,
      DeSerializersT,
      WorkCalendarHolidayLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkCalendarsApi<DeSerializersT>,
      WorkCalendarHolidayLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORK_CALENDAR: new OneToOneLink('WorkCalendar', this, linkedApis[0]),
      WORK_CALENDAR_HOLIDAY_LINE: new OneToManyLink(
        'WorkCalendarHolidayLine',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = WorkCalendarHolidays;

  requestBuilder(): WorkCalendarHolidaysRequestBuilder<DeSerializersT> {
    return new WorkCalendarHolidaysRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkCalendarHolidays<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkCalendarHolidays<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkCalendarHolidays<DeSerializersT>,
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
    typeof WorkCalendarHolidays,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkCalendarHolidays,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      WorkCalendarHolidays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WorkCalendarHolidays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      WorkCalendarHolidays<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workCalendarHolidayLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR_HOLIDAY_LINE: OneToManyLink<
      WorkCalendarHolidays<DeSerializersT>,
      DeSerializersT,
      WorkCalendarHolidayLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkCalendarHolidays<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkCalendarHolidays)
      };
    }

    return this._schema;
  }
}
