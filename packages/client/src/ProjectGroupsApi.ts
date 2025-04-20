/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectGroups } from './ProjectGroups';
import { ProjectGroupsRequestBuilder } from './ProjectGroupsRequestBuilder';
import { ProjLedgerStatus } from './ProjLedgerStatus';
import { ProjMatchingPrincip } from './ProjMatchingPrincip';
import { NoYes } from './NoYes';
import { ProjLedgerStatusOnAcc } from './ProjLedgerStatusOnAcc';
import { ProjCompletePrincip } from './ProjCompletePrincip';
import { ProjLinePropertySearch } from './ProjLinePropertySearch';
import { ProjType } from './ProjType';
import { ProjLedgerPosting } from './ProjLedgerPosting';
import { ProjSalesPriceMatchingPrincip } from './ProjSalesPriceMatchingPrincip';
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
export class ProjectGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectGroups<DeSerializersT>, DeSerializersT>
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
  ): ProjectGroupsApi<DeSerializersT> {
    return new ProjectGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectGroups;

  requestBuilder(): ProjectGroupsRequestBuilder<DeSerializersT> {
    return new ProjectGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjectGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjectGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProjectGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_GROUP: OrderableEdmTypeField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_COSTS_EXPENSE: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      ProjLedgerStatus,
      true,
      true
    >;
    PROFIT_CATEGORY_ID: OrderableEdmTypeField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCHING_PRINCIPLE: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      ProjMatchingPrincip,
      true,
      true
    >;
    CAN_VERIFY_COST_AGAINST_REMAINING_FORECAST: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_FORESEEABLE_LOSSES: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCRUE_REVENUE_FEE: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ON_ACCOUNT_INVOICING: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      ProjLedgerStatusOnAcc,
      true,
      true
    >;
    REVENUE_RECOGNITION_ACCOUNTING_RULE: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      ProjCompletePrincip,
      true,
      true
    >;
    ACCRUE_REVENUE_EXPENSE: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERIOD_CODE: OrderableEdmTypeField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_COSTS_HOUR: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      ProjLedgerStatus,
      true,
      true
    >;
    PRODUCTION_CATEGORY_ID: OrderableEdmTypeField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUE_REVENUE_ITEM: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_PROPERTY_SEARCH_PRIORITY: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      ProjLinePropertySearch,
      true,
      true
    >;
    SALES_VALUE_CATEGORY_ID: OrderableEdmTypeField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUED_LOSS_CATEGORY_ID: OrderableEdmTypeField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_COSTS_ITEM: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      ProjLedgerStatus,
      true,
      true
    >;
    COST_TEMPLATE: OrderableEdmTypeField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TYPE: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      ProjType,
      true,
      true
    >;
    LEDGER_POSTING_SEARCH_PRIORITY: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      ProjLedgerPosting,
      true,
      true
    >;
    CALCULATION_METHOD: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      ProjSalesPriceMatchingPrincip,
      true,
      true
    >;
    ACCRUE_REVENUE_HOUR: EnumField<
      ProjectGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectGroups<DeSerializers>>;
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
         * Static representation of the {@link projectGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjectGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link postCostsExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_COSTS_EXPENSE: fieldBuilder.buildEnumField(
          'PostCostsExpense',
          ProjLedgerStatus,
          true
        ),
        /**
         * Static representation of the {@link profitCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProfitCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matchingPrinciple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_PRINCIPLE: fieldBuilder.buildEnumField(
          'MatchingPrinciple',
          ProjMatchingPrincip,
          true
        ),
        /**
         * Static representation of the {@link canVerifyCostAgainstRemainingForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_VERIFY_COST_AGAINST_REMAINING_FORECAST: fieldBuilder.buildEnumField(
          'CanVerifyCostAgainstRemainingForecast',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link areForeseeableLosses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_FORESEEABLE_LOSSES: fieldBuilder.buildEnumField(
          'AreForeseeableLosses',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accrueRevenueFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUE_REVENUE_FEE: fieldBuilder.buildEnumField(
          'AccrueRevenueFee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link onAccountInvoicing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ACCOUNT_INVOICING: fieldBuilder.buildEnumField(
          'OnAccountInvoicing',
          ProjLedgerStatusOnAcc,
          true
        ),
        /**
         * Static representation of the {@link revenueRecognitionAccountingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_RECOGNITION_ACCOUNTING_RULE: fieldBuilder.buildEnumField(
          'RevenueRecognitionAccountingRule',
          ProjCompletePrincip,
          true
        ),
        /**
         * Static representation of the {@link accrueRevenueExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUE_REVENUE_EXPENSE: fieldBuilder.buildEnumField(
          'AccrueRevenueExpense',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link periodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_CODE: fieldBuilder.buildEdmTypeField(
          'PeriodCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postCostsHour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_COSTS_HOUR: fieldBuilder.buildEnumField(
          'PostCostsHour',
          ProjLedgerStatus,
          true
        ),
        /**
         * Static representation of the {@link productionCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProductionCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accrueRevenueItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUE_REVENUE_ITEM: fieldBuilder.buildEnumField(
          'AccrueRevenueItem',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link linePropertySearchPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROPERTY_SEARCH_PRIORITY: fieldBuilder.buildEnumField(
          'LinePropertySearchPriority',
          ProjLinePropertySearch,
          true
        ),
        /**
         * Static representation of the {@link salesValueCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_VALUE_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'SalesValueCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accruedLossCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUED_LOSS_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'AccruedLossCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postCostsItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_COSTS_ITEM: fieldBuilder.buildEnumField(
          'PostCostsItem',
          ProjLedgerStatus,
          true
        ),
        /**
         * Static representation of the {@link costTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'CostTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TYPE: fieldBuilder.buildEnumField(
          'ProjectType',
          ProjType,
          true
        ),
        /**
         * Static representation of the {@link ledgerPostingSearchPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_POSTING_SEARCH_PRIORITY: fieldBuilder.buildEnumField(
          'LedgerPostingSearchPriority',
          ProjLedgerPosting,
          true
        ),
        /**
         * Static representation of the {@link calculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'CalculationMethod',
          ProjSalesPriceMatchingPrincip,
          true
        ),
        /**
         * Static representation of the {@link accrueRevenueHour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUE_REVENUE_HOUR: fieldBuilder.buildEnumField(
          'AccrueRevenueHour',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectGroups)
      };
    }

    return this._schema;
  }
}
