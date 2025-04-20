/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalCalendarYearsEntity } from './FiscalCalendarYearsEntity';
import { FiscalCalendarYearsEntityRequestBuilder } from './FiscalCalendarYearsEntityRequestBuilder';
import { FiscalPeriodsApi } from './FiscalPeriodsApi';
import { FiscalCalendarsEntityApi } from './FiscalCalendarsEntityApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FiscalCalendarYearsEntityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FiscalCalendarYearsEntity<DeSerializersT>, DeSerializersT>
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
  ): FiscalCalendarYearsEntityApi<DeSerializersT> {
    return new FiscalCalendarYearsEntityApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link fiscalPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_PERIOD: OneToManyLink<
      FiscalCalendarYearsEntity<DeSerializersT>,
      DeSerializersT,
      FiscalPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalCalendarYear} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_CALENDAR_YEAR: OneToOneLink<
      FiscalCalendarYearsEntity<DeSerializersT>,
      DeSerializersT,
      FiscalCalendarsEntityApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FiscalPeriodsApi<DeSerializersT>,
      FiscalCalendarsEntityApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FISCAL_PERIOD: new OneToManyLink('FiscalPeriod', this, linkedApis[0]),
      FISCAL_CALENDAR_YEAR: new OneToOneLink(
        'FiscalCalendarYear',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = FiscalCalendarYearsEntity;

  requestBuilder(): FiscalCalendarYearsEntityRequestBuilder<DeSerializersT> {
    return new FiscalCalendarYearsEntityRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalCalendarYearsEntity<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalCalendarYearsEntity<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalCalendarYearsEntity<DeSerializersT>,
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
    typeof FiscalCalendarYearsEntity,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalCalendarYearsEntity,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FISCAL_CALENDAR_CALENDAR_ID: OrderableEdmTypeField<
      FiscalCalendarYearsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      FiscalCalendarYearsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      FiscalCalendarYearsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      FiscalCalendarYearsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fiscalPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_PERIOD: OneToManyLink<
      FiscalCalendarYearsEntity<DeSerializersT>,
      DeSerializersT,
      FiscalPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalCalendarYear} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_CALENDAR_YEAR: OneToOneLink<
      FiscalCalendarYearsEntity<DeSerializersT>,
      DeSerializersT,
      FiscalCalendarsEntityApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FiscalCalendarYearsEntity<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fiscalCalendarCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'FiscalCalendar_CalendarId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalCalendarYearsEntity)
      };
    }

    return this._schema;
  }
}
