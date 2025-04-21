/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalCalendars } from './FiscalCalendars';
import { FiscalCalendarsRequestBuilder } from './FiscalCalendarsRequestBuilder';
import { FiscalQuarter } from './FiscalQuarter';
import { FiscalPeriodMonth } from './FiscalPeriodMonth';
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
export class FiscalCalendarsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalCalendars<DeSerializersT>, DeSerializersT>
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
  ): FiscalCalendarsApi<DeSerializersT> {
    return new FiscalCalendarsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalCalendars;

  requestBuilder(): FiscalCalendarsRequestBuilder<DeSerializersT> {
    return new FiscalCalendarsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalCalendars<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FiscalCalendars<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FiscalCalendars<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FiscalCalendars, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalCalendars,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEDGER_GREGORIAN_DATE_ID: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_REC_ID: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    YEAR_OFFSET: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALENDAR_REC_ID: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PERIOD_NAME: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEAR_NAME: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUARTER: EnumField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      FiscalQuarter,
      true,
      true
    >;
    LEDGER_REC_ID: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GREGORIAN_DATE: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUARTER_OFFSET: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONTH: EnumField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      FiscalPeriodMonth,
      true,
      true
    >;
    CALENDAR_ID: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_OFFSET: OrderableEdmTypeField<
      FiscalCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<FiscalCalendars<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ledgerGregorianDateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_GREGORIAN_DATE_ID: fieldBuilder.buildEdmTypeField(
          'LedgerGregorianDateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_REC_ID: fieldBuilder.buildEdmTypeField(
          'PeriodRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link yearOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_OFFSET: fieldBuilder.buildEdmTypeField(
          'YearOffset',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calendarRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_REC_ID: fieldBuilder.buildEdmTypeField(
          'CalendarRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link periodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'PeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link yearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'YearName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTER: fieldBuilder.buildEnumField('Quarter', FiscalQuarter, true),
        /**
         * Static representation of the {@link ledgerRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_REC_ID: fieldBuilder.buildEdmTypeField(
          'LedgerRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link gregorianDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GREGORIAN_DATE: fieldBuilder.buildEdmTypeField(
          'GregorianDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link quarterOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTER_OFFSET: fieldBuilder.buildEdmTypeField(
          'QuarterOffset',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link month} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH: fieldBuilder.buildEnumField('Month', FiscalPeriodMonth, true),
        /**
         * Static representation of the {@link calendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'CalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_OFFSET: fieldBuilder.buildEdmTypeField(
          'PeriodOffset',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalCalendars)
      };
    }

    return this._schema;
  }
}
