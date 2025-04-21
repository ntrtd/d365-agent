/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalCalendarPeriodBiEntities } from './FiscalCalendarPeriodBiEntities';
import { FiscalCalendarPeriodBiEntitiesRequestBuilder } from './FiscalCalendarPeriodBiEntitiesRequestBuilder';
import { FiscalQuarter } from './FiscalQuarter';
import { FiscalPeriodMonth } from './FiscalPeriodMonth';
import { FiscalPeriodType } from './FiscalPeriodType';
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
export class FiscalCalendarPeriodBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FiscalCalendarPeriodBiEntities<DeSerializersT>, DeSerializersT>
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
  ): FiscalCalendarPeriodBiEntitiesApi<DeSerializersT> {
    return new FiscalCalendarPeriodBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalCalendarPeriodBiEntities;

  requestBuilder(): FiscalCalendarPeriodBiEntitiesRequestBuilder<DeSerializersT> {
    return new FiscalCalendarPeriodBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalCalendarPeriodBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalCalendarPeriodBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalCalendarPeriodBiEntities<DeSerializersT>,
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
    typeof FiscalCalendarPeriodBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalCalendarPeriodBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_CALENDAR_YEAR: OrderableEdmTypeField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SHORT_NAME: OrderableEdmTypeField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CALENDAR: OrderableEdmTypeField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUARTER: EnumField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      FiscalQuarter,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONTH: EnumField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      FiscalPeriodMonth,
      true,
      true
    >;
    TYPE: EnumField<
      FiscalCalendarPeriodBiEntities<DeSerializers>,
      DeSerializersT,
      FiscalPeriodType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalCalendarPeriodBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link fiscalCalendarYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_YEAR: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarYear',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link shortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'ShortName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR: fieldBuilder.buildEdmTypeField(
          'FiscalCalendar',
          'Edm.Int64',
          false
        ),
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
        /**
         * Static representation of the {@link quarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTER: fieldBuilder.buildEnumField('Quarter', FiscalQuarter, true),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
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
        /**
         * Static representation of the {@link month} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH: fieldBuilder.buildEnumField('Month', FiscalPeriodMonth, true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', FiscalPeriodType, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalCalendarPeriodBiEntities)
      };
    }

    return this._schema;
  }
}
