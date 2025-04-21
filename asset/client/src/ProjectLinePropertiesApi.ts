/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectLineProperties } from './ProjectLineProperties';
import { ProjectLinePropertiesRequestBuilder } from './ProjectLinePropertiesRequestBuilder';
import { JournalTransApi } from './JournalTransApi';
import { ProjectEmplForecastsApi } from './ProjectEmplForecastsApi';
import { ProjectExpenseForecastsApi } from './ProjectExpenseForecastsApi';
import { ProjectItemJournalTransApi } from './ProjectItemJournalTransApi';
import { ExpenseJournalLinesApi } from './ExpenseJournalLinesApi';
import { ProjectItemForecastsApi } from './ProjectItemForecastsApi';
import { ProjectFeeForecastsApi } from './ProjectFeeForecastsApi';
import { NoYes } from './NoYes';
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
export class ProjectLinePropertiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectLineProperties<DeSerializersT>, DeSerializersT>
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
  ): ProjectLinePropertiesApi<DeSerializersT> {
    return new ProjectLinePropertiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectEmplForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EMPL_FORECAST: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ProjectEmplForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectExpenseForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_FORECAST: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ProjectExpenseForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectItemJournalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ITEM_JOURNAL_TRANS: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ProjectItemJournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projExpenseJournalLineProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_EXPENSE_JOURNAL_LINE_PROPERTY: OneToManyLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectItemForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ITEM_FORECAST: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ProjectItemForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectFeeForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_FEE_FORECAST: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ProjectFeeForecastsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalTransApi<DeSerializersT>,
      ProjectEmplForecastsApi<DeSerializersT>,
      ProjectExpenseForecastsApi<DeSerializersT>,
      ProjectItemJournalTransApi<DeSerializersT>,
      ExpenseJournalLinesApi<DeSerializersT>,
      ProjectItemForecastsApi<DeSerializersT>,
      ProjectFeeForecastsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_TRANS: new OneToOneLink('JournalTrans', this, linkedApis[0]),
      PROJECT_EMPL_FORECAST: new OneToOneLink(
        'ProjectEmplForecast',
        this,
        linkedApis[1]
      ),
      PROJECT_EXPENSE_FORECAST: new OneToOneLink(
        'ProjectExpenseForecast',
        this,
        linkedApis[2]
      ),
      PROJECT_ITEM_JOURNAL_TRANS: new OneToOneLink(
        'ProjectItemJournalTrans',
        this,
        linkedApis[3]
      ),
      PROJ_EXPENSE_JOURNAL_LINE_PROPERTY: new OneToManyLink(
        'ProjExpenseJournalLineProperty',
        this,
        linkedApis[4]
      ),
      PROJECT_ITEM_FORECAST: new OneToOneLink(
        'ProjectItemForecast',
        this,
        linkedApis[5]
      ),
      PROJECT_FEE_FORECAST: new OneToOneLink(
        'ProjectFeeForecast',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = ProjectLineProperties;

  requestBuilder(): ProjectLinePropertiesRequestBuilder<DeSerializersT> {
    return new ProjectLinePropertiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectLineProperties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectLineProperties<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectLineProperties<DeSerializersT>,
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
    typeof ProjectLineProperties,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectLineProperties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_PROPERTY_ID: OrderableEdmTypeField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADD_TO_NORM_BILLABLE: EnumField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_ZERO_SALES_PRICE_ON_INVOICE: EnumField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADD_TO_EFFICIENT_HOURS: EnumField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CHARGEABLE: EnumField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_ZERO_SALES_PRICE_ON_QUOTATION: EnumField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_PERCENTAGE: OrderableEdmTypeField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADD_TO_NORM_EFFICIENCY: EnumField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLED_CAPITALIZE_COST: OrderableEdmTypeField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ENABLE_ACCRUE_REVENUE: OrderableEdmTypeField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SALES_PERCENTAGE: OrderableEdmTypeField<
      ProjectLineProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectEmplForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EMPL_FORECAST: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ProjectEmplForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectExpenseForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_FORECAST: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ProjectExpenseForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectItemJournalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ITEM_JOURNAL_TRANS: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ProjectItemJournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projExpenseJournalLineProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_EXPENSE_JOURNAL_LINE_PROPERTY: OneToManyLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectItemForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ITEM_FORECAST: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ProjectItemForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectFeeForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_FEE_FORECAST: OneToOneLink<
      ProjectLineProperties<DeSerializersT>,
      DeSerializersT,
      ProjectFeeForecastsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectLineProperties<DeSerializers>>;
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
         * Static representation of the {@link linePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'LinePropertyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addToNormBillable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADD_TO_NORM_BILLABLE: fieldBuilder.buildEnumField(
          'AddToNormBillable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printZeroSalesPriceOnInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_ZERO_SALES_PRICE_ON_INVOICE: fieldBuilder.buildEnumField(
          'PrintZeroSalesPriceOnInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addToEfficientHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADD_TO_EFFICIENT_HOURS: fieldBuilder.buildEnumField(
          'AddToEfficientHours',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link isChargeable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CHARGEABLE: fieldBuilder.buildEnumField('IsChargeable', NoYes, true),
        /**
         * Static representation of the {@link printZeroSalesPriceOnQuotation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_ZERO_SALES_PRICE_ON_QUOTATION: fieldBuilder.buildEnumField(
          'PrintZeroSalesPriceOnQuotation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link costPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'CostPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addToNormEfficiency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADD_TO_NORM_EFFICIENCY: fieldBuilder.buildEnumField(
          'AddToNormEfficiency',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enabledCapitalizeCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLED_CAPITALIZE_COST: fieldBuilder.buildEdmTypeField(
          'EnabledCapitalizeCost',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link enableAccrueRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_ACCRUE_REVENUE: fieldBuilder.buildEdmTypeField(
          'EnableAccrueRevenue',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link salesPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SalesPercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectLineProperties)
      };
    }

    return this._schema;
  }
}
