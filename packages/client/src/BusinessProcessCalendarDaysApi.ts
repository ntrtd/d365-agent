/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessProcessCalendarDays } from './BusinessProcessCalendarDays';
import { BusinessProcessCalendarDaysRequestBuilder } from './BusinessProcessCalendarDaysRequestBuilder';
import { BusinessProcessCalendarsApi } from './BusinessProcessCalendarsApi';
import { BusinessProcessCalendarDayStatus } from './BusinessProcessCalendarDayStatus';
import { WeekDays } from './WeekDays';
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
export class BusinessProcessCalendarDaysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessProcessCalendarDays<DeSerializersT>, DeSerializersT>
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
  ): BusinessProcessCalendarDaysApi<DeSerializersT> {
    return new BusinessProcessCalendarDaysApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link calendarHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CALENDAR_HEADER: OneToOneLink<
      BusinessProcessCalendarDays<DeSerializersT>,
      DeSerializersT,
      BusinessProcessCalendarsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessProcessCalendarsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CALENDAR_HEADER: new OneToOneLink('CalendarHeader', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BusinessProcessCalendarDays;

  requestBuilder(): BusinessProcessCalendarDaysRequestBuilder<DeSerializersT> {
    return new BusinessProcessCalendarDaysRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessProcessCalendarDays<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessProcessCalendarDays<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessProcessCalendarDays<DeSerializersT>,
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
    typeof BusinessProcessCalendarDays,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessProcessCalendarDays,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CALENDAR_ID: OrderableEdmTypeField<
      BusinessProcessCalendarDays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALENDAR_DATE: OrderableEdmTypeField<
      BusinessProcessCalendarDays<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      BusinessProcessCalendarDays<DeSerializers>,
      DeSerializersT,
      BusinessProcessCalendarDayStatus,
      true,
      true
    >;
    DAY_OF_WEEK: EnumField<
      BusinessProcessCalendarDays<DeSerializers>,
      DeSerializersT,
      WeekDays,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link calendarHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CALENDAR_HEADER: OneToOneLink<
      BusinessProcessCalendarDays<DeSerializersT>,
      DeSerializersT,
      BusinessProcessCalendarsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessProcessCalendarDays<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link calendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'CalendarId',
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BusinessProcessCalendarDayStatus,
          true
        ),
        /**
         * Static representation of the {@link dayOfWeek} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAY_OF_WEEK: fieldBuilder.buildEnumField('DayOfWeek', WeekDays, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessProcessCalendarDays)
      };
    }

    return this._schema;
  }
}
