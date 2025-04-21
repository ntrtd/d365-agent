/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectExpenseForecasts } from './ProjectExpenseForecasts';
import { ProjectExpenseForecastsRequestBuilder } from './ProjectExpenseForecastsRequestBuilder';
import { ProjectResourcesApi } from './ProjectResourcesApi';
import { ResourceCategoriesApi } from './ResourceCategoriesApi';
import { ProjectLinePropertiesApi } from './ProjectLinePropertiesApi';
import { ProjectsApi } from './ProjectsApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { PeriodUnit } from './PeriodUnit';
import { NoYes } from './NoYes';
import { BudgetAllocateMethod } from './BudgetAllocateMethod';
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
export class ProjectExpenseForecastsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectExpenseForecasts<DeSerializersT>, DeSerializersT>
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
  ): ProjectExpenseForecastsApi<DeSerializersT> {
    return new ProjectExpenseForecastsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projectResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_RESOURCE: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CATEGORY: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectLineProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_LINE_PROPERTY: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectLinePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProjectResourcesApi<DeSerializersT>,
      ResourceCategoriesApi<DeSerializersT>,
      ProjectLinePropertiesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROJECT_RESOURCE: new OneToOneLink(
        'ProjectResource',
        this,
        linkedApis[0]
      ),
      RESOURCE_CATEGORY: new OneToOneLink(
        'ResourceCategory',
        this,
        linkedApis[1]
      ),
      PROJECT_LINE_PROPERTY: new OneToOneLink(
        'ProjectLineProperty',
        this,
        linkedApis[2]
      ),
      PROJECT: new OneToOneLink('Project', this, linkedApis[3]),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[4]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = ProjectExpenseForecasts;

  requestBuilder(): ProjectExpenseForecastsRequestBuilder<DeSerializersT> {
    return new ProjectExpenseForecastsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectExpenseForecasts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectExpenseForecasts<DeSerializersT>,
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
    typeof ProjectExpenseForecasts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectExpenseForecasts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANS_ID: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELIMINATION_DATE: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESOURCE_COMPANY_ID: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_KEY: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PAYMENT_DATE: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_PAYMENT_DATE: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOCATION_QUANTITY: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_PROPERTY: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOCATION_KEY: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT: EnumField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CURRENCY: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOP: EnumField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_DATE: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    METHOD: EnumField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      BudgetAllocateMethod,
      true,
      true
    >;
    FORECAST_MODEL: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: EnumField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNDING_SOURCE_ID: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_CATEGORY_ID: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      ProjectExpenseForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_RESOURCE: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CATEGORY: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectLineProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_LINE_PROPERTY: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectLinePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjectExpenseForecasts<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectExpenseForecasts<DeSerializers>>;
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
         * Static representation of the {@link transId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_ID: fieldBuilder.buildEdmTypeField(
          'TransId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link eliminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIMINATION_DATE: fieldBuilder.buildEdmTypeField(
          'EliminationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link resourceCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_KEY: fieldBuilder.buildEdmTypeField(
          'PeriodKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPaymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'SalesPaymentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costPaymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'CostPaymentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allocationQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_QUANTITY: fieldBuilder.buildEdmTypeField(
          'AllocationQuantity',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lineProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROPERTY: fieldBuilder.buildEdmTypeField(
          'LineProperty',
          'Edm.String',
          true
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
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allocationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_KEY: fieldBuilder.buildEdmTypeField(
          'AllocationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEnumField('Unit', PeriodUnit, true),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CURRENCY: fieldBuilder.buildEdmTypeField(
          'SalesCurrency',
          'Edm.String',
          true
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
         * Static representation of the {@link stop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOP: fieldBuilder.buildEnumField('Stop', NoYes, true),
        /**
         * Static representation of the {@link projectDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_DATE: fieldBuilder.buildEdmTypeField(
          'ProjectDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link method} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD: fieldBuilder.buildEnumField(
          'Method',
          BudgetAllocateMethod,
          true
        ),
        /**
         * Static representation of the {@link forecastModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_MODEL: fieldBuilder.buildEdmTypeField(
          'ForecastModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
        /**
         * Static representation of the {@link costPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PRICE: fieldBuilder.buildEdmTypeField(
          'CostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fundingSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDING_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'FundingSourceID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resourceCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectContractID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectExpenseForecasts)
      };
    }

    return this._schema;
  }
}
