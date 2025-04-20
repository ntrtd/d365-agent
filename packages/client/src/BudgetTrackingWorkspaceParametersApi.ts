/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetTrackingWorkspaceParameters } from './BudgetTrackingWorkspaceParameters';
import { BudgetTrackingWorkspaceParametersRequestBuilder } from './BudgetTrackingWorkspaceParametersRequestBuilder';
import { FinancialDimensionSetsApi } from './FinancialDimensionSetsApi';
import { FiscalPeriodsApi } from './FiscalPeriodsApi';
import { BudgetModelsApi } from './BudgetModelsApi';
import { OrganizationHierarchyTypesApi } from './OrganizationHierarchyTypesApi';
import { SystemUsersApi } from './SystemUsersApi';
import { BudgetPlanProcessesApi } from './BudgetPlanProcessesApi';
import { BudgetCyclesApi } from './BudgetCyclesApi';
import { BudgetAnalysisPeriod } from './BudgetAnalysisPeriod';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetTrackingWorkspaceParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetTrackingWorkspaceParameters<DeSerializersT>, DeSerializersT>
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
  ): BudgetTrackingWorkspaceParametersApi<DeSerializersT> {
    return new BudgetTrackingWorkspaceParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link expenseFinancialDimensionSets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_FINANCIAL_DIMENSION_SETS: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalPeriods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_PERIODS: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      FiscalPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MODELS: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      BudgetModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link organizationHierarchyTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORGANIZATION_HIERARCHY_TYPES: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      OrganizationHierarchyTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link revenueFinancialDimensionSets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REVENUE_FINANCIAL_DIMENSION_SETS: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemUsers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USERS: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetPlanProcesses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_PLAN_PROCESSES: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      BudgetPlanProcessesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetCycles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CYCLES: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      BudgetCyclesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FinancialDimensionSetsApi<DeSerializersT>,
      FiscalPeriodsApi<DeSerializersT>,
      BudgetModelsApi<DeSerializersT>,
      OrganizationHierarchyTypesApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      SystemUsersApi<DeSerializersT>,
      BudgetPlanProcessesApi<DeSerializersT>,
      BudgetCyclesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXPENSE_FINANCIAL_DIMENSION_SETS: new OneToOneLink(
        'ExpenseFinancialDimensionSets',
        this,
        linkedApis[0]
      ),
      FISCAL_PERIODS: new OneToOneLink('FiscalPeriods', this, linkedApis[1]),
      BUDGET_MODELS: new OneToOneLink('BudgetModels', this, linkedApis[2]),
      ORGANIZATION_HIERARCHY_TYPES: new OneToOneLink(
        'OrganizationHierarchyTypes',
        this,
        linkedApis[3]
      ),
      REVENUE_FINANCIAL_DIMENSION_SETS: new OneToOneLink(
        'RevenueFinancialDimensionSets',
        this,
        linkedApis[4]
      ),
      SYSTEM_USERS: new OneToOneLink('SystemUsers', this, linkedApis[5]),
      BUDGET_PLAN_PROCESSES: new OneToOneLink(
        'BudgetPlanProcesses',
        this,
        linkedApis[6]
      ),
      BUDGET_CYCLES: new OneToOneLink('BudgetCycles', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = BudgetTrackingWorkspaceParameters;

  requestBuilder(): BudgetTrackingWorkspaceParametersRequestBuilder<DeSerializersT> {
    return new BudgetTrackingWorkspaceParametersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetTrackingWorkspaceParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetTrackingWorkspaceParameters<DeSerializersT>,
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
    typeof BudgetTrackingWorkspaceParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetTrackingWorkspaceParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_PERIOD_END: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUDGET_CYCLE_TIME_SPAN_NAME: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CYCLE_NAME: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUE_BUDGET_THRESHOLD_PERCENT: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVE_FORECASTING_PROCESS: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_ANALYSIS_PERIOD: EnumField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      BudgetAnalysisPeriod,
      true,
      true
    >;
    FISCAL_PERIOD_NAME: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PERIOD_YEAR: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CYCLE_TIME_SPAN_FISCAL_CALENDAR: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT: EnumField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPENSE_BUDGET_THRESHOLD_PERCENT: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FISCAL_PERIOD_START: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FISCAL_PERIOD_CALENDAR: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_HIERARCHY: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_DIMENSION_SET: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUE_DIMENSION_SET: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_MODEL_ID: OrderableEdmTypeField<
      BudgetTrackingWorkspaceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseFinancialDimensionSets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_FINANCIAL_DIMENSION_SETS: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalPeriods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_PERIODS: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      FiscalPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MODELS: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      BudgetModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link organizationHierarchyTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORGANIZATION_HIERARCHY_TYPES: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      OrganizationHierarchyTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link revenueFinancialDimensionSets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REVENUE_FINANCIAL_DIMENSION_SETS: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemUsers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USERS: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetPlanProcesses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_PLAN_PROCESSES: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      BudgetPlanProcessesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetCycles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CYCLES: OneToOneLink<
      BudgetTrackingWorkspaceParameters<DeSerializersT>,
      DeSerializersT,
      BudgetCyclesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetTrackingWorkspaceParameters<DeSerializers>>;
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
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', false),
        /**
         * Static representation of the {@link fiscalPeriodEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PERIOD_END: fieldBuilder.buildEdmTypeField(
          'FiscalPeriodEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link budgetCycleTimeSpanName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_TIME_SPAN_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetCycleTimeSpanName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetCycleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetCycleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenueBudgetThresholdPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_BUDGET_THRESHOLD_PERCENT: fieldBuilder.buildEdmTypeField(
          'RevenueBudgetThresholdPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link activeForecastingProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FORECASTING_PROCESS: fieldBuilder.buildEdmTypeField(
          'ActiveForecastingProcess',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetAnalysisPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_ANALYSIS_PERIOD: fieldBuilder.buildEnumField(
          'BudgetAnalysisPeriod',
          BudgetAnalysisPeriod,
          true
        ),
        /**
         * Static representation of the {@link fiscalPeriodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalPeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalPeriodYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PERIOD_YEAR: fieldBuilder.buildEdmTypeField(
          'FiscalPeriodYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetCycleTimeSpanFiscalCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_TIME_SPAN_FISCAL_CALENDAR: fieldBuilder.buildEdmTypeField(
          'BudgetCycleTimeSpanFiscalCalendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT: fieldBuilder.buildEnumField('IsDefault', NoYes, true),
        /**
         * Static representation of the {@link expenseBudgetThresholdPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_BUDGET_THRESHOLD_PERCENT: fieldBuilder.buildEdmTypeField(
          'ExpenseBudgetThresholdPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fiscalPeriodStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PERIOD_START: fieldBuilder.buildEdmTypeField(
          'FiscalPeriodStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fiscalPeriodCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PERIOD_CALENDAR: fieldBuilder.buildEdmTypeField(
          'FiscalPeriodCalendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_HIERARCHY: fieldBuilder.buildEdmTypeField(
          'OrganizationHierarchy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseDimensionSet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_DIMENSION_SET: fieldBuilder.buildEdmTypeField(
          'ExpenseDimensionSet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenueDimensionSet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_DIMENSION_SET: fieldBuilder.buildEdmTypeField(
          'RevenueDimensionSet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'BudgetModelId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetTrackingWorkspaceParameters)
      };
    }

    return this._schema;
  }
}
