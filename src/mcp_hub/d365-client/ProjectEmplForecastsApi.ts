/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectEmplForecasts } from './ProjectEmplForecasts';
import { ProjectEmplForecastsRequestBuilder } from './ProjectEmplForecastsRequestBuilder';
import { ProjectResourcesApi } from './ProjectResourcesApi';
import { ResourceCategoriesApi } from './ResourceCategoriesApi';
import { ProjectLinePropertiesApi } from './ProjectLinePropertiesApi';
import { ProjectsApi } from './ProjectsApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { SchedJobLink } from './SchedJobLink';
import { ProjForecastBudgetType } from './ProjForecastBudgetType';
import { SchedJobLinkType } from './SchedJobLinkType';
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
export class ProjectEmplForecastsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectEmplForecasts<DeSerializersT>, DeSerializersT>
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
  ): ProjectEmplForecastsApi<DeSerializersT> {
    return new ProjectEmplForecastsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projectResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_RESOURCE: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CATEGORY: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectLineProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_LINE_PROPERTY: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectLinePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
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

  entityConstructor = ProjectEmplForecasts;

  requestBuilder(): ProjectEmplForecastsRequestBuilder<DeSerializersT> {
    return new ProjectEmplForecastsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectEmplForecasts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectEmplForecasts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectEmplForecasts<DeSerializersT>,
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
    typeof ProjectEmplForecasts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectEmplForecasts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAPACITY: EnumField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINK: EnumField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      SchedJobLink,
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PAYMENT_DATE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVE: EnumField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELIMINATION_DATE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_TYPE: EnumField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      ProjForecastBudgetType,
      true,
      true
    >;
    SALES_CURRENCY: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_COMPANY_ID: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_MODEL: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINK_TYPE: EnumField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      SchedJobLinkType,
      true,
      true
    >;
    LINE_PROPERTY: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_REPORT: EnumField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_FLOW_FORECAST_STATUS: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COST_PAYMENT_DATE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RESOURCE_CATEGORY_ID: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKING_TIME: EnumField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULING_RESOURCE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_DATE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FUNDING_SOURCE_ID: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_IDENTIFICATION: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOURS: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOURS_SCHEDULED: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProjectEmplForecasts<DeSerializers>,
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
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CATEGORY: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectLineProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_LINE_PROPERTY: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectLinePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjectEmplForecasts<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectEmplForecasts<DeSerializers>>;
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
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link capacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY: fieldBuilder.buildEnumField('Capacity', NoYes, true),
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
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          true
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
         * Static representation of the {@link link} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINK: fieldBuilder.buildEnumField('Link', SchedJobLink, true),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
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
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link budgetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_TYPE: fieldBuilder.buildEnumField(
          'BudgetType',
          ProjForecastBudgetType,
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
         * Static representation of the {@link resourceCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCompanyId',
          'Edm.String',
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
         * Static representation of the {@link linkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINK_TYPE: fieldBuilder.buildEnumField(
          'LinkType',
          SchedJobLinkType,
          true
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
         * Static representation of the {@link specialReport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_REPORT: fieldBuilder.buildEnumField(
          'SpecialReport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashFlowForecastStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_FORECAST_STATUS: fieldBuilder.buildEdmTypeField(
          'CashFlowForecastStatus',
          'Edm.Int32',
          false
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
         * Static representation of the {@link endTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TIME: fieldBuilder.buildEdmTypeField('EndTime', 'Edm.Int32', false),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.Int32',
          false
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
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link workingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKING_TIME: fieldBuilder.buildEnumField('WorkingTime', NoYes, true),
        /**
         * Static representation of the {@link schedulingResource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULING_RESOURCE: fieldBuilder.buildEdmTypeField(
          'SchedulingResource',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link fundingSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDING_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'FundingSourceID',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobIdentification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'JobIdentification',
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
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURS: fieldBuilder.buildEdmTypeField('Hours', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link hoursScheduled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURS_SCHEDULED: fieldBuilder.buildEdmTypeField(
          'HoursScheduled',
          'Edm.Decimal',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectEmplForecasts)
      };
    }

    return this._schema;
  }
}
