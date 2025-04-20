/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalCalendarsEntity } from './FiscalCalendarsEntity';
import { FiscalCalendarsEntityRequestBuilder } from './FiscalCalendarsEntityRequestBuilder';
import { FiscalPeriodsApi } from './FiscalPeriodsApi';
import { FiscalCalendarYearsEntityApi } from './FiscalCalendarYearsEntityApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class FiscalCalendarsEntityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalCalendarsEntity<DeSerializersT>, DeSerializersT>
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
  ): FiscalCalendarsEntityApi<DeSerializersT> {
    return new FiscalCalendarsEntityApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link fiscalPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_PERIOD: OneToManyLink<
      FiscalCalendarsEntity<DeSerializersT>,
      DeSerializersT,
      FiscalPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fiscalCalendarYearEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_CALENDAR_YEAR_ENTITY: OneToManyLink<
      FiscalCalendarsEntity<DeSerializersT>,
      DeSerializersT,
      FiscalCalendarYearsEntityApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FiscalPeriodsApi<DeSerializersT>,
      FiscalCalendarYearsEntityApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FISCAL_PERIOD: new OneToManyLink('FiscalPeriod', this, linkedApis[0]),
      FISCAL_CALENDAR_YEAR_ENTITY: new OneToManyLink(
        'FiscalCalendarYearEntity',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = FiscalCalendarsEntity;

  requestBuilder(): FiscalCalendarsEntityRequestBuilder<DeSerializersT> {
    return new FiscalCalendarsEntityRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalCalendarsEntity<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FiscalCalendarsEntity<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalCalendarsEntity<DeSerializersT>,
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
    typeof FiscalCalendarsEntity,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalCalendarsEntity,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CALENDAR_ID: OrderableEdmTypeField<
      FiscalCalendarsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FiscalCalendarsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fiscalPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_PERIOD: OneToManyLink<
      FiscalCalendarsEntity<DeSerializersT>,
      DeSerializersT,
      FiscalPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fiscalCalendarYearEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_CALENDAR_YEAR_ENTITY: OneToManyLink<
      FiscalCalendarsEntity<DeSerializersT>,
      DeSerializersT,
      FiscalCalendarYearsEntityApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FiscalCalendarsEntity<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', FiscalCalendarsEntity)
      };
    }

    return this._schema;
  }
}
