/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalPeriods } from './FiscalPeriods';
import { FiscalPeriodsRequestBuilder } from './FiscalPeriodsRequestBuilder';
import { FiscalCalendarsEntityApi } from './FiscalCalendarsEntityApi';
import { FiscalCalendarYearsEntityApi } from './FiscalCalendarYearsEntityApi';
import { BudgetTrackingWorkspaceParametersApi } from './BudgetTrackingWorkspaceParametersApi';
import { FiscalQuarter } from './FiscalQuarter';
import { CalendarTypeIn } from './CalendarTypeIn';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class FiscalPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalPeriods<DeSerializersT>, DeSerializersT>
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
  ): FiscalPeriodsApi<DeSerializersT> {
    return new FiscalPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link fiscalCalendarPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_CALENDAR_PERIOD: OneToOneLink<
      FiscalPeriods<DeSerializersT>,
      DeSerializersT,
      FiscalCalendarsEntityApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalCalendarYear} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_CALENDAR_YEAR: OneToOneLink<
      FiscalPeriods<DeSerializersT>,
      DeSerializersT,
      FiscalCalendarYearsEntityApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersFiscalPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_FISCAL_PERIOD: OneToManyLink<
      FiscalPeriods<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FiscalCalendarsEntityApi<DeSerializersT>,
      FiscalCalendarYearsEntityApi<DeSerializersT>,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FISCAL_CALENDAR_PERIOD: new OneToOneLink(
        'FiscalCalendarPeriod',
        this,
        linkedApis[0]
      ),
      FISCAL_CALENDAR_YEAR: new OneToOneLink(
        'FiscalCalendarYear',
        this,
        linkedApis[1]
      ),
      BUDGET_TRACKING_WORKSPACE_PARAMETERS_FISCAL_PERIOD: new OneToManyLink(
        'BudgetTrackingWorkspaceParametersFiscalPeriod',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = FiscalPeriods;

  requestBuilder(): FiscalPeriodsRequestBuilder<DeSerializersT> {
    return new FiscalPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FiscalPeriods<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FiscalPeriods<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FiscalPeriods, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FiscalPeriods, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CALENDAR: OrderableEdmTypeField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_YEAR: OrderableEdmTypeField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERIOD_NAME: OrderableEdmTypeField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUARTER: EnumField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      FiscalQuarter,
      true,
      true
    >;
    DAYS: OrderableEdmTypeField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_TYPE: EnumField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      CalendarTypeIn,
      true,
      true
    >;
    MONTH: EnumField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      FiscalPeriodMonth,
      true,
      true
    >;
    TYPE: EnumField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      FiscalPeriodType,
      true,
      true
    >;
    SHORT_NAME: OrderableEdmTypeField<
      FiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalCalendarPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_CALENDAR_PERIOD: OneToOneLink<
      FiscalPeriods<DeSerializersT>,
      DeSerializersT,
      FiscalCalendarsEntityApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalCalendarYear} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_CALENDAR_YEAR: OneToOneLink<
      FiscalPeriods<DeSerializersT>,
      DeSerializersT,
      FiscalCalendarYearsEntityApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersFiscalPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_FISCAL_PERIOD: OneToManyLink<
      FiscalPeriods<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FiscalPeriods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link calendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR: fieldBuilder.buildEdmTypeField(
          'Calendar',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'FiscalYear',
          'Edm.String',
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
         * Static representation of the {@link periodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'PeriodName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link quarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTER: fieldBuilder.buildEnumField('Quarter', FiscalQuarter, true),
        /**
         * Static representation of the {@link days} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS: fieldBuilder.buildEdmTypeField('Days', 'Edm.Int32', false),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calendarType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_TYPE: fieldBuilder.buildEnumField(
          'CalendarType',
          CalendarTypeIn,
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
        /**
         * Static representation of the {@link shortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'ShortName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalPeriods)
      };
    }

    return this._schema;
  }
}
