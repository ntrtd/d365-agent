/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectParameterEntities } from './ProjectParameterEntities';
import { ProjectParameterEntitiesRequestBuilder } from './ProjectParameterEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { TsManualAutomatic } from './TsManualAutomatic';
import { ProjLineTotal } from './ProjLineTotal';
import { ProjReduceCostPriority } from './ProjReduceCostPriority';
import { TsFieldVisibility } from './TsFieldVisibility';
import { ProjValParameter } from './ProjValParameter';
import { ErrorTolerance } from './ErrorTolerance';
import { ProjProdPostingTypeSetup } from './ProjProdPostingTypeSetup';
import { ProjBudgetaryControlOn } from './ProjBudgetaryControlOn';
import { WeekDays } from './WeekDays';
import { DetailSummary } from './DetailSummary';
import { MspIntegrationType } from './MspIntegrationType';
import { ProjGrossMarginDisplay } from './ProjGrossMarginDisplay';
import { ProjType } from './ProjType';
import { ProjTaxGroupMethod } from './ProjTaxGroupMethod';
import { ProjBudgetManagement } from './ProjBudgetManagement';
import { CreditLineErrorType } from './CreditLineErrorType';
import { PriceAmount } from './PriceAmount';
import { ProjBudgetOverrunOption } from './ProjBudgetOverrunOption';
import { ProjCostControlMethod } from './ProjCostControlMethod';
import { TaxCalculationProjDateType } from './TaxCalculationProjDateType';
import { FirstLast } from './FirstLast';
import { ProjValueAddedDisplay } from './ProjValueAddedDisplay';
import { ProjTaxItemGroupMethod } from './ProjTaxItemGroupMethod';
import { ProjBudgetInterval } from './ProjBudgetInterval';
import { TsVoucherDateChange } from './TsVoucherDateChange';
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
export class ProjectParameterEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectParameterEntities<DeSerializersT>, DeSerializersT>
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
  ): ProjectParameterEntitiesApi<DeSerializersT> {
    return new ProjectParameterEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectParameterEntities;

  requestBuilder(): ProjectParameterEntitiesRequestBuilder<DeSerializersT> {
    return new ProjectParameterEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectParameterEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectParameterEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectParameterEntities<DeSerializersT>,
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
    typeof ProjectParameterEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectParameterEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVOICED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPROVED_TIMESHEET_POSTING: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TsManualAutomatic,
      true,
      true
    >;
    IS_BUDGET_CONTROL_OUTSIDE_THE_PROJECT_HIERARCHY_ALLOWED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NO_ONE_TIME_CUSTOMERS_FOR_PROJECT_CONTRACTS: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USER_GROUP: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT_FOR_HOURS: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSCRIPTION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjLineTotal,
      true,
      true
    >;
    PURCHASE_REQUISITION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTRACT_LINE_BASED_REVENUE_RECOGNITION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CATEGORY_ITEM: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_REQUIREMENT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    PROMPT_FOR_CUSTOMER_INFORMATION_ON_PROJECT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATICALLY_SET_ACCOUNTING_DATE_TO_OPEN_LEDGER_PERIOD: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HIDE_ACTIVITY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPENSE_REDUCE_COST_PRIORITY_2: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    TIME_SERVICE_VISIBILITY_CATEGORY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TsFieldVisibility,
      true,
      true
    >;
    ITEM_JOURNAL: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_INVOICE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HOUR_REDUCE_COST_PRIORITY_2: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    HOUR_REDUCE_COST_PRIORITY_3: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    FORECAST_MODEL: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUR_REDUCE_COST_PRIORITY_1: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    VALUE_ADDED_DECIMALS: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HOUR_REDUCE_COST_PRIORITY_4: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    HOUR_REDUCE_COST_PRIORITY_5: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    EXPENSE_JOURNAL_NAME_ID: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_SUBPROJECT_ID_FORMAT: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATION_WORKER_CATEGORY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjValParameter,
      true,
      true
    >;
    IS_HOUR_QUANTITY_IN_CONSUMPTION_STATEMENT_INCLUDED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_JOURNAL_NAMES_HOUR: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_REPORT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERNAL_COST_EFFICIENCY: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_ESTIMATE_POSTING_TOLERANCE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    DEFAULT_WORKING_CALENDAR: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_PRICE_EFFICIENCY: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEGINNING_BALANCES: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SERVICE_VISIBILITY_ITEM_SALES_TAX_GROUP: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TsFieldVisibility,
      true,
      true
    >;
    POSTING_METHOD: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjProdPostingTypeSetup,
      true,
      true
    >;
    IS_ALLOCATION_SETTINGS_LOCKED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_TYPES_CONTROLLED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjBudgetaryControlOn,
      true,
      true
    >;
    ACTUAL_COST_AFTER_ESTIMATE_DATE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ACTIVITY_EXPENSE_JOURNAL_REQUIRED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIXED_PRICE_BILLABLE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AUTOUPDATE_FIELD: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HIDE_CATEGORY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CFOP_ID_OTHER_STATE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_MATERIAL_BILLABLE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_MINIMUM_REQUIREMENT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_HOUR_SCHEDULING_ENABLED: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUR_REDUCED_MINIMUM_REQUIREMENT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    GENERAL_BUDGET_RESERVATION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SET_THE_COST_PRICE_AS_THE_SALES_PRICE_BY_DEFAULT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TIME_RANGE_OVERLAP: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    TRAVEL_REQUISITION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMITTED_COST: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    HIDE_LINE_PROPERTY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HOUR_JOURNAL: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_CANCEL_SETTLED_PROJECT_INVOICE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_RULE_FEE_JOURNAL: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_THOUSANDS: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_ACTIVITY_EXPENSE_FORECAST_REQUIRED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROMPT_FOR_CUSTOMER_INFORMATION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DAY_WEEK_STARTS: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      WeekDays,
      true,
      true
    >;
    DEFAULT_POSTING_LEVEL: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    IS_ELIMINATION_WITHOUT_POSTING_ESTIMATES_ALLOWED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_BUDGET_ON_DOCUMENT_LINE_SAVE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_SERVICE_VISIBILITY_ACTIVITY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TsFieldVisibility,
      true,
      true
    >;
    ESTIMATED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjLineTotal,
      true,
      true
    >;
    IS_ACTIVITY_ITEM_JOURNAL_REQUIRED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPENSE_REDUCE_COST_PRIORITY_4: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    IS_HOUR_QUANTITY_IN_PROFIT_LOSS_STATEMENT_INCLUDED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPENSE_LUMP_SUM_ALLOCATION_KEY: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEFORE_ELIMINATION_DATE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    INVESTMENT_BILLABLE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_HOUR_COST_IN_CONSUMPTION_STATEMENT_INCLUDED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORDER: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAN_ALWAYS_CREATE_ADJUSTMENT_TRANSACTION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMITTED_COST_AFTER_ESTIMATE_DATE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAVE_MICROSOFT_PROJECT_FILES_TO: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      MspIntegrationType,
      true,
      true
    >;
    USE_FAVORITES: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAPACITY_PLANNING_PLANNED_ORDER: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT_FOR_ITEMS: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATION_WORKER_PROJECT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjValParameter,
      true,
      true
    >;
    ITEM_DELETE_REDUCED_TO_ZERO: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PROCESSING_INVOICE_PROPOSALS_IN_WORKFLOW_ENABLED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UTILIZATION_RATE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GROSS_MARGIN_DECIMALS: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SELECT_PROJECT_INVOICE_PROPOSAL_BY_FUNDING_SOURCE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_PROJECTS_EFFICIENCY: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_MARGIN_RATIO: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjGrossMarginDisplay,
      true,
      true
    >;
    ITEM_LUMP_SUM_ALLOCATION_KEY: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SERVICE_VISIBILITY_INTERNAL_COMMENT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TsFieldVisibility,
      true,
      true
    >;
    ITEM_NEVER_LEDGER_CONSUM: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CFOP_ID_OUTSIDE_COUNTRY_REGION: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ITEM_ALLOCATION_KEY: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNAL_COST_BILLABLE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ITEM_CONSUMPTION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_COST_TEMPLATE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUR_QTY_DECIMALS: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPENSE_DELETE_REDUCED_TO_ZERO: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVESTMENT_EFFICIENCY: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT_FOR_EXPENSES: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CATEGORY_HOUR: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVITY_HOUR_FORECAST_REQUIRED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_PROJECT_TYPE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjType,
      true,
      true
    >;
    HOUR_DELETE_REDUCED_TO_ZERO: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ABSENCE_PROJECT: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVITY_ITEM_FORECAST_REQUIRED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_GROUP_METHOD: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjTaxGroupMethod,
      true,
      true
    >;
    HAS_INACTIVE_CATEGORIES: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_SERVICE_VISIBILITY_LINE_PROPERTY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TsFieldVisibility,
      true,
      true
    >;
    USE_BUDGET_CONTROL: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INVOICE_PRINTING_BY_INVOICE_TYPE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOLDER_FOR_MICROSOFT_PROJECT_FILES: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_NUMBER_OF_TIMESHEETS_PER_PERIOD: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PURCHASE_ORDER: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_ADJUSTMENT_DATE_AS_NEW_PROJECT_DATE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HAS_FINISHED_PROJECTS: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SET_SUBPRODUCTION_TO_CONSUMED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_BUDGET_MANAGEMENT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjBudgetManagement,
      true,
      true
    >;
    IS_TIMESHEET_AUDIT_TRAIL_REQUIRED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LINE_ERROR: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      CreditLineErrorType,
      true,
      true
    >;
    COMMITTED_COST_UP_TO_ESTIMATE_DATE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HAS_TIME_REGISTRATION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_SERVICE_VISIBILITY_CUSTOMER: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TsFieldVisibility,
      true,
      true
    >;
    DEFAULT_JOURNAL_NAME_ITEM: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESIGNATION_OF_SIGNATORY: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIDE_EXTERNAL_COMMENTS: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPENSE_REDUCE_COST_PRIORITY_3: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    HAS_TERMINATED_WORKERS: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FUTURE_TIMESHEET_ENTRIES_BLOCKED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AFTER_ELIMINATION_DATE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    TIME_SERVICE_VISIBILITY_EXTERNAL_COMMENT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TsFieldVisibility,
      true,
      true
    >;
    IS_INVOICE_PRINTING_BY_TRANSACTION_TEXT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_ABSENCE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_TRANSACTIONS: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      PriceAmount,
      true,
      true
    >;
    DEFAULT_CATEGORY_EXPENSE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVITY_HOUR_JOURNAL_REQUIRED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_REQUIREMENT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_SALES_ORDERS_FOR_MULTIPLE_FUNDING_SOURCES: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NEGATIVE_BUDGETS_TO_BE_CARRIED_FORWARD_ALLOWED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ENABLE_ALTERNATIVE_ACCOUNT_FOR_CANCELLATION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_SERVICE_VISIBILITY_SALES_TAX_GROUP: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TsFieldVisibility,
      true,
      true
    >;
    BUDGET_OVERRUN_DEFAULT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjBudgetOverrunOption,
      true,
      true
    >;
    CAPACITY_PLANNING_PRODUCTION: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SPLIT_INVOICE_BASED_ON_SERVICE_CODE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_CANCEL_SETTLED_DEBIT_NOTE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PAYMENT_CRITERIA: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ITEM_NEVER_LEDGER_PL: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_SERVICE_ENABLE_DEFAULT_LINE_PROPERTY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTHORIZED_SIGNATORY: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_BUDGET: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CARRY_FORWARD_REMAINING_BUDGETS: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATION_PROJECT_CATEGORY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjValParameter,
      true,
      true
    >;
    COST_CONTROL_METHODS: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjCostControlMethod,
      true,
      true
    >;
    TAX_ITEM_GROUP_ON_ACC: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CREATE_ITEM_REQUIREMENT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_BUDGET: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVOICE_PRINTING_BY_CATEGORY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPENSE_REDUCE_COST_PRIORITY_1: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    ALLOW_TIMESHEET_CHANGE_REASON: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DATE_CORRECTIONS_ON_TIMESHEETS_ALLOWED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_PROJECTS_BILLABLE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVOICE_PRINTING_BY_LINE_SPECIFIC: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATION_DATE_TYPE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TaxCalculationProjDateType,
      true,
      true
    >;
    TIMESHEET_JOURNAL: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_START_STOP_TIME_REQUIRED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CFOP_ID_SAME_STATE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_MATERIAL_EFFICIENCY: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CATEGORY_FEE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_REDUCE_COST_PRIORITY_5: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    REMAINING_BUDGET: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERAL_BUFFER_DAYS: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MISSING_TIMESHEETS_EMAIL_ID: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_TIME_INCREMENT: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHOW_INVOICE_SUMMARY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRE_TIMESHEET_CHANGE_REASON: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_REDUCE_COST_PRIORITY_3: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    ITEM_REDUCE_COST_PRIORITY_2: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    ITEM_REDUCE_COST_PRIORITY_1: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    ACCRUE_REVENUE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjLineTotal,
      true,
      true
    >;
    INVOICE_PROPOSAL: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_REDUCE_COST_PRIORITY_5: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    ITEM_REDUCE_COST_PRIORITY_4: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjReduceCostPriority,
      true,
      true
    >;
    ELIMINATED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_CONTRACT_CURRENCY_FOR_REV_REC: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPLY_PRIORITY_SETTINGS_FIRST_OR_LAST_IN_FUNDING_ALLOCATION_ORDER: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      FirstLast,
      true,
      true
    >;
    TIME_SERVICE_ENABLE_SERVICE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INTERCOMPANY_RESOURCE_SCHEDULING_AND_TIMESHEETS_ENABLED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIMESHEETS: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_JOURNAL_NAMES_FEE: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_HOUR_COST_IN_PROFIT_LOSS_STATEMENT_INCLUDED: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADJUSTMENT: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjLineTotal,
      true,
      true
    >;
    IS_INVOICE_PRINTING_BY_EMPLOYEE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_COSTS: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjLineTotal,
      true,
      true
    >;
    VALUE_ADDED_DISPLAY: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjValueAddedDisplay,
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP_METHOD: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjTaxItemGroupMethod,
      true,
      true
    >;
    BUDGET_CONTROL_INTERVAL: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjBudgetInterval,
      true,
      true
    >;
    AMOUNT_IN_MILLIONS: OrderableEdmTypeField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SET_VOUCHER_DATE_TO: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      TsVoucherDateChange,
      true,
      true
    >;
    ESTIMATE: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      ProjLineTotal,
      true,
      true
    >;
    PRODUCTION: EnumField<
      ProjectParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectParameterEntities<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link invoiced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED: fieldBuilder.buildEnumField('Invoiced', NoYes, true),
        /**
         * Static representation of the {@link approvedTimesheetPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_TIMESHEET_POSTING: fieldBuilder.buildEnumField(
          'ApprovedTimesheetPosting',
          TsManualAutomatic,
          true
        ),
        /**
         * Static representation of the {@link isBudgetControlOutsideTheProjectHierarchyAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BUDGET_CONTROL_OUTSIDE_THE_PROJECT_HIERARCHY_ALLOWED:
          fieldBuilder.buildEnumField(
            'IsBudgetControlOutsideTheProjectHierarchyAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link noOneTimeCustomersForProjectContracts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_ONE_TIME_CUSTOMERS_FOR_PROJECT_CONTRACTS:
          fieldBuilder.buildEnumField(
            'NoOneTimeCustomersForProjectContracts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link userGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP: fieldBuilder.buildEdmTypeField(
          'UserGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link termsOfPaymentForHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT_FOR_HOURS: fieldBuilder.buildEdmTypeField(
          'TermsOfPaymentForHours',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subscription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSCRIPTION: fieldBuilder.buildEnumField(
          'Subscription',
          ProjLineTotal,
          true
        ),
        /**
         * Static representation of the {@link purchaseRequisition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REQUISITION: fieldBuilder.buildEnumField(
          'PurchaseRequisition',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link contractLineBasedRevenueRecognition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINE_BASED_REVENUE_RECOGNITION: fieldBuilder.buildEnumField(
          'ContractLineBasedRevenueRecognition',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultCategoryItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CATEGORY_ITEM: fieldBuilder.buildEdmTypeField(
          'DefaultCategoryItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_REQUIREMENT: fieldBuilder.buildEnumField(
          'MinimumRequirement',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link promptForCustomerInformationOnProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMPT_FOR_CUSTOMER_INFORMATION_ON_PROJECT: fieldBuilder.buildEnumField(
          'PromptForCustomerInformationOnProject',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link automaticallySetAccountingDateToOpenLedgerPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATICALLY_SET_ACCOUNTING_DATE_TO_OPEN_LEDGER_PERIOD:
          fieldBuilder.buildEnumField(
            'AutomaticallySetAccountingDateToOpenLedgerPeriod',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link hideActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_ACTIVITY: fieldBuilder.buildEnumField('HideActivity', NoYes, true),
        /**
         * Static representation of the {@link expenseReduceCostPriority2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_REDUCE_COST_PRIORITY_2: fieldBuilder.buildEnumField(
          'ExpenseReduceCostPriority2',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link timeServiceVisibilityCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SERVICE_VISIBILITY_CATEGORY: fieldBuilder.buildEnumField(
          'TimeServiceVisibilityCategory',
          TsFieldVisibility,
          true
        ),
        /**
         * Static representation of the {@link itemJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_JOURNAL: fieldBuilder.buildEnumField('ItemJournal', NoYes, true),
        /**
         * Static representation of the {@link vendorInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE: fieldBuilder.buildEnumField(
          'VendorInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hourReduceCostPriority2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_REDUCE_COST_PRIORITY_2: fieldBuilder.buildEnumField(
          'HourReduceCostPriority2',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link hourReduceCostPriority3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_REDUCE_COST_PRIORITY_3: fieldBuilder.buildEnumField(
          'HourReduceCostPriority3',
          ProjReduceCostPriority,
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
         * Static representation of the {@link hourReduceCostPriority1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_REDUCE_COST_PRIORITY_1: fieldBuilder.buildEnumField(
          'HourReduceCostPriority1',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link valueAddedDecimals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_DECIMALS: fieldBuilder.buildEdmTypeField(
          'ValueAddedDecimals',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link hourReduceCostPriority4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_REDUCE_COST_PRIORITY_4: fieldBuilder.buildEnumField(
          'HourReduceCostPriority4',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link hourReduceCostPriority5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_REDUCE_COST_PRIORITY_5: fieldBuilder.buildEnumField(
          'HourReduceCostPriority5',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link expenseJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'ExpenseJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultSubprojectIdFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SUBPROJECT_ID_FORMAT: fieldBuilder.buildEdmTypeField(
          'DefaultSubprojectIDFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validationWorkerCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_WORKER_CATEGORY: fieldBuilder.buildEnumField(
          'ValidationWorkerCategory',
          ProjValParameter,
          true
        ),
        /**
         * Static representation of the {@link isHourQuantityInConsumptionStatementIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HOUR_QUANTITY_IN_CONSUMPTION_STATEMENT_INCLUDED:
          fieldBuilder.buildEnumField(
            'IsHourQuantityInConsumptionStatementIncluded',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultJournalNamesHour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_JOURNAL_NAMES_HOUR: fieldBuilder.buildEdmTypeField(
          'DefaultJournalNamesHour',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseReport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_REPORT: fieldBuilder.buildEnumField(
          'ExpenseReport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link internalCostEfficiency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_COST_EFFICIENCY: fieldBuilder.buildEdmTypeField(
          'InternalCostEfficiency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalEstimatePostingTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ESTIMATE_POSTING_TOLERANCE: fieldBuilder.buildEnumField(
          'TotalEstimatePostingTolerance',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link defaultWorkingCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_WORKING_CALENDAR: fieldBuilder.buildEdmTypeField(
          'DefaultWorkingCalendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedPriceEfficiency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PRICE_EFFICIENCY: fieldBuilder.buildEdmTypeField(
          'FixedPriceEfficiency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beginningBalances} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNING_BALANCES: fieldBuilder.buildEdmTypeField(
          'BeginningBalances',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeServiceVisibilityItemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SERVICE_VISIBILITY_ITEM_SALES_TAX_GROUP:
          fieldBuilder.buildEnumField(
            'TimeServiceVisibilityItemSalesTaxGroup',
            TsFieldVisibility,
            true
          ),
        /**
         * Static representation of the {@link postingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_METHOD: fieldBuilder.buildEnumField(
          'PostingMethod',
          ProjProdPostingTypeSetup,
          true
        ),
        /**
         * Static representation of the {@link isAllocationSettingsLocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOCATION_SETTINGS_LOCKED: fieldBuilder.buildEnumField(
          'IsAllocationSettingsLocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transactionTypesControlled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPES_CONTROLLED: fieldBuilder.buildEnumField(
          'TransactionTypesControlled',
          ProjBudgetaryControlOn,
          true
        ),
        /**
         * Static representation of the {@link actualCostAfterEstimateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_COST_AFTER_ESTIMATE_DATE: fieldBuilder.buildEnumField(
          'ActualCostAfterEstimateDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isActivityExpenseJournalRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_EXPENSE_JOURNAL_REQUIRED: fieldBuilder.buildEnumField(
          'IsActivityExpenseJournalRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fixedPriceBillable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PRICE_BILLABLE: fieldBuilder.buildEdmTypeField(
          'FixedPriceBillable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAutoupdateField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTOUPDATE_FIELD: fieldBuilder.buildEnumField(
          'IsAutoupdateField',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hideCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_CATEGORY: fieldBuilder.buildEnumField('HideCategory', NoYes, true),
        /**
         * Static representation of the {@link cfopIdOtherState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_ID_OTHER_STATE: fieldBuilder.buildEdmTypeField(
          'CFOPIdOtherState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeMaterialBillable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_MATERIAL_BILLABLE: fieldBuilder.buildEdmTypeField(
          'TimeMaterialBillable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemMinimumRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_MINIMUM_REQUIREMENT: fieldBuilder.buildEnumField(
          'ItemMinimumRequirement',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link methodOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'MethodOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isHourSchedulingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HOUR_SCHEDULING_ENABLED: fieldBuilder.buildEdmTypeField(
          'IsHourSchedulingEnabled',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hourReducedMinimumRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_REDUCED_MINIMUM_REQUIREMENT: fieldBuilder.buildEnumField(
          'HourReducedMinimumRequirement',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link generalBudgetReservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_BUDGET_RESERVATION: fieldBuilder.buildEnumField(
          'GeneralBudgetReservation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link setTheCostPriceAsTheSalesPriceByDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_THE_COST_PRICE_AS_THE_SALES_PRICE_BY_DEFAULT:
          fieldBuilder.buildEnumField(
            'SetTheCostPriceAsTheSalesPriceByDefault',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link allowTimeRangeOverlap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_TIME_RANGE_OVERLAP: fieldBuilder.buildEnumField(
          'AllowTimeRangeOverlap',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link travelRequisition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_REQUISITION: fieldBuilder.buildEnumField(
          'TravelRequisition',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link committedCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITTED_COST: fieldBuilder.buildEnumField(
          'CommittedCost',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link hideLineProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_LINE_PROPERTY: fieldBuilder.buildEnumField(
          'HideLineProperty',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link hourJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_JOURNAL: fieldBuilder.buildEnumField('HourJournal', NoYes, true),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableCancelSettledProjectInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_CANCEL_SETTLED_PROJECT_INVOICE: fieldBuilder.buildEnumField(
          'EnableCancelSettledProjectInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link billingRuleFeeJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_RULE_FEE_JOURNAL: fieldBuilder.buildEdmTypeField(
          'BillingRuleFeeJournal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInThousands} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_THOUSANDS: fieldBuilder.buildEdmTypeField(
          'AmountInThousands',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isActivityExpenseForecastRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_EXPENSE_FORECAST_REQUIRED: fieldBuilder.buildEnumField(
          'IsActivityExpenseForecastRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link promptForCustomerInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMPT_FOR_CUSTOMER_INFORMATION: fieldBuilder.buildEnumField(
          'PromptForCustomerInformation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dayWeekStarts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAY_WEEK_STARTS: fieldBuilder.buildEnumField(
          'DayWeekStarts',
          WeekDays,
          true
        ),
        /**
         * Static representation of the {@link defaultPostingLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_POSTING_LEVEL: fieldBuilder.buildEnumField(
          'DefaultPostingLevel',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link isEliminationWithoutPostingEstimatesAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ELIMINATION_WITHOUT_POSTING_ESTIMATES_ALLOWED:
          fieldBuilder.buildEnumField(
            'IsEliminationWithoutPostingEstimatesAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link checkBudgetOnDocumentLineSave} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_BUDGET_ON_DOCUMENT_LINE_SAVE: fieldBuilder.buildEnumField(
          'CheckBudgetOnDocumentLineSave',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link timeServiceVisibilityActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SERVICE_VISIBILITY_ACTIVITY: fieldBuilder.buildEnumField(
          'TimeServiceVisibilityActivity',
          TsFieldVisibility,
          true
        ),
        /**
         * Static representation of the {@link estimated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED: fieldBuilder.buildEnumField('Estimated', NoYes, true),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEnumField('Invoice', ProjLineTotal, true),
        /**
         * Static representation of the {@link isActivityItemJournalRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_ITEM_JOURNAL_REQUIRED: fieldBuilder.buildEnumField(
          'IsActivityItemJournalRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link expenseReduceCostPriority4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_REDUCE_COST_PRIORITY_4: fieldBuilder.buildEnumField(
          'ExpenseReduceCostPriority4',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link isHourQuantityInProfitLossStatementIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HOUR_QUANTITY_IN_PROFIT_LOSS_STATEMENT_INCLUDED:
          fieldBuilder.buildEnumField(
            'IsHourQuantityInProfitLossStatementIncluded',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link expenseLumpSumAllocationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_LUMP_SUM_ALLOCATION_KEY: fieldBuilder.buildEdmTypeField(
          'ExpenseLumpSumAllocationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beforeEliminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEFORE_ELIMINATION_DATE: fieldBuilder.buildEnumField(
          'BeforeEliminationDate',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link investmentBillable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVESTMENT_BILLABLE: fieldBuilder.buildEdmTypeField(
          'InvestmentBillable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isHourCostInConsumptionStatementIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HOUR_COST_IN_CONSUMPTION_STATEMENT_INCLUDED:
          fieldBuilder.buildEnumField(
            'IsHourCostInConsumptionStatementIncluded',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link salesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER: fieldBuilder.buildEnumField('SalesOrder', NoYes, true),
        /**
         * Static representation of the {@link canAlwaysCreateAdjustmentTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_ALWAYS_CREATE_ADJUSTMENT_TRANSACTION: fieldBuilder.buildEnumField(
          'CanAlwaysCreateAdjustmentTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link committedCostAfterEstimateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITTED_COST_AFTER_ESTIMATE_DATE: fieldBuilder.buildEnumField(
          'CommittedCostAfterEstimateDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link saveMicrosoftProjectFilesTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAVE_MICROSOFT_PROJECT_FILES_TO: fieldBuilder.buildEnumField(
          'SaveMicrosoftProjectFilesTo',
          MspIntegrationType,
          true
        ),
        /**
         * Static representation of the {@link useFavorites} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FAVORITES: fieldBuilder.buildEnumField('UseFavorites', NoYes, true),
        /**
         * Static representation of the {@link capacityPlanningPlannedOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_PLANNING_PLANNED_ORDER: fieldBuilder.buildEdmTypeField(
          'CapacityPlanningPlannedOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link termsOfPaymentForItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT_FOR_ITEMS: fieldBuilder.buildEdmTypeField(
          'TermsOfPaymentForItems',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validationWorkerProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_WORKER_PROJECT: fieldBuilder.buildEnumField(
          'ValidationWorkerProject',
          ProjValParameter,
          true
        ),
        /**
         * Static representation of the {@link itemDeleteReducedToZero} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DELETE_REDUCED_TO_ZERO: fieldBuilder.buildEnumField(
          'ItemDeleteReducedToZero',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isProcessingInvoiceProposalsInWorkflowEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCESSING_INVOICE_PROPOSALS_IN_WORKFLOW_ENABLED:
          fieldBuilder.buildEnumField(
            'IsProcessingInvoiceProposalsInWorkflowEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link utilizationRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UTILIZATION_RATE: fieldBuilder.buildEdmTypeField(
          'UtilizationRate',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link grossMarginDecimals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_MARGIN_DECIMALS: fieldBuilder.buildEdmTypeField(
          'GrossMarginDecimals',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link selectProjectInvoiceProposalByFundingSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELECT_PROJECT_INVOICE_PROPOSAL_BY_FUNDING_SOURCE:
          fieldBuilder.buildEnumField(
            'SelectProjectInvoiceProposalByFundingSource',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link timeProjectsEfficiency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROJECTS_EFFICIENCY: fieldBuilder.buildEdmTypeField(
          'TimeProjectsEfficiency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossMarginRatio} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_MARGIN_RATIO: fieldBuilder.buildEnumField(
          'GrossMarginRatio',
          ProjGrossMarginDisplay,
          true
        ),
        /**
         * Static representation of the {@link itemLumpSumAllocationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_LUMP_SUM_ALLOCATION_KEY: fieldBuilder.buildEdmTypeField(
          'ItemLumpSumAllocationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeServiceVisibilityInternalComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SERVICE_VISIBILITY_INTERNAL_COMMENT: fieldBuilder.buildEnumField(
          'TimeServiceVisibilityInternalComment',
          TsFieldVisibility,
          true
        ),
        /**
         * Static representation of the {@link itemNeverLedgerConsum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NEVER_LEDGER_CONSUM: fieldBuilder.buildEnumField(
          'ItemNeverLedgerConsum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cfopIdOutsideCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_ID_OUTSIDE_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CFOPIdOutsideCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultItemAllocationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ITEM_ALLOCATION_KEY: fieldBuilder.buildEdmTypeField(
          'DefaultItemAllocationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internalCostBillable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_COST_BILLABLE: fieldBuilder.buildEdmTypeField(
          'InternalCostBillable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isItemConsumption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ITEM_CONSUMPTION: fieldBuilder.buildEnumField(
          'IsItemConsumption',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultCostTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COST_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'DefaultCostTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hourQtyDecimals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_QTY_DECIMALS: fieldBuilder.buildEdmTypeField(
          'HourQtyDecimals',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link expenseDeleteReducedToZero} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_DELETE_REDUCED_TO_ZERO: fieldBuilder.buildEnumField(
          'ExpenseDeleteReducedToZero',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link investmentEfficiency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVESTMENT_EFFICIENCY: fieldBuilder.buildEdmTypeField(
          'InvestmentEfficiency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link termsOfPaymentForExpenses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT_FOR_EXPENSES: fieldBuilder.buildEdmTypeField(
          'TermsOfPaymentForExpenses',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultCategoryHour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CATEGORY_HOUR: fieldBuilder.buildEdmTypeField(
          'DefaultCategoryHour',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActivityHourForecastRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_HOUR_FORECAST_REQUIRED: fieldBuilder.buildEnumField(
          'IsActivityHourForecastRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultProjectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PROJECT_TYPE: fieldBuilder.buildEnumField(
          'DefaultProjectType',
          ProjType,
          true
        ),
        /**
         * Static representation of the {@link hourDeleteReducedToZero} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_DELETE_REDUCED_TO_ZERO: fieldBuilder.buildEnumField(
          'HourDeleteReducedToZero',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link absenceProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_PROJECT: fieldBuilder.buildEdmTypeField(
          'AbsenceProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActivityItemForecastRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_ITEM_FORECAST_REQUIRED: fieldBuilder.buildEnumField(
          'IsActivityItemForecastRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_METHOD: fieldBuilder.buildEnumField(
          'SalesTaxGroupMethod',
          ProjTaxGroupMethod,
          true
        ),
        /**
         * Static representation of the {@link hasInactiveCategories} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_INACTIVE_CATEGORIES: fieldBuilder.buildEnumField(
          'HasInactiveCategories',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link timeServiceVisibilityLineProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SERVICE_VISIBILITY_LINE_PROPERTY: fieldBuilder.buildEnumField(
          'TimeServiceVisibilityLineProperty',
          TsFieldVisibility,
          true
        ),
        /**
         * Static representation of the {@link useBudgetControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_BUDGET_CONTROL: fieldBuilder.buildEnumField(
          'UseBudgetControl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isInvoicePrintingByInvoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVOICE_PRINTING_BY_INVOICE_TYPE: fieldBuilder.buildEnumField(
          'IsInvoicePrintingByInvoiceType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link folderForMicrosoftProjectFiles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLDER_FOR_MICROSOFT_PROJECT_FILES: fieldBuilder.buildEdmTypeField(
          'FolderForMicrosoftProjectFiles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumNumberOfTimesheetsPerPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_NUMBER_OF_TIMESHEETS_PER_PERIOD: fieldBuilder.buildEdmTypeField(
          'MaximumNumberOfTimesheetsPerPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEnumField(
          'PurchaseOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useAdjustmentDateAsNewProjectDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ADJUSTMENT_DATE_AS_NEW_PROJECT_DATE: fieldBuilder.buildEnumField(
          'UseAdjustmentDateAsNewProjectDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hasFinishedProjects} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_FINISHED_PROJECTS: fieldBuilder.buildEnumField(
          'HasFinishedProjects',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link setSubproductionToConsumed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_SUBPRODUCTION_TO_CONSUMED: fieldBuilder.buildEnumField(
          'SetSubproductionToConsumed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectBudgetManagement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_BUDGET_MANAGEMENT: fieldBuilder.buildEnumField(
          'ProjectBudgetManagement',
          ProjBudgetManagement,
          true
        ),
        /**
         * Static representation of the {@link isTimesheetAuditTrailRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TIMESHEET_AUDIT_TRAIL_REQUIRED: fieldBuilder.buildEnumField(
          'IsTimesheetAuditTrailRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditLineError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LINE_ERROR: fieldBuilder.buildEnumField(
          'CreditLineError',
          CreditLineErrorType,
          true
        ),
        /**
         * Static representation of the {@link committedCostUpToEstimateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITTED_COST_UP_TO_ESTIMATE_DATE: fieldBuilder.buildEnumField(
          'CommittedCostUpToEstimateDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hasTimeRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_TIME_REGISTRATION: fieldBuilder.buildEnumField(
          'HasTimeRegistration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link timeServiceVisibilityCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SERVICE_VISIBILITY_CUSTOMER: fieldBuilder.buildEnumField(
          'TimeServiceVisibilityCustomer',
          TsFieldVisibility,
          true
        ),
        /**
         * Static representation of the {@link defaultJournalNameItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_JOURNAL_NAME_ITEM: fieldBuilder.buildEdmTypeField(
          'DefaultJournalNameItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link designationOfSignatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESIGNATION_OF_SIGNATORY: fieldBuilder.buildEdmTypeField(
          'DesignationOfSignatory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hideExternalComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_EXTERNAL_COMMENTS: fieldBuilder.buildEnumField(
          'HideExternalComments',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link expenseReduceCostPriority3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_REDUCE_COST_PRIORITY_3: fieldBuilder.buildEnumField(
          'ExpenseReduceCostPriority3',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link hasTerminatedWorkers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_TERMINATED_WORKERS: fieldBuilder.buildEnumField(
          'HasTerminatedWorkers',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isFutureTimesheetEntriesBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FUTURE_TIMESHEET_ENTRIES_BLOCKED: fieldBuilder.buildEnumField(
          'IsFutureTimesheetEntriesBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link afterEliminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFTER_ELIMINATION_DATE: fieldBuilder.buildEnumField(
          'AfterEliminationDate',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link timeServiceVisibilityExternalComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SERVICE_VISIBILITY_EXTERNAL_COMMENT: fieldBuilder.buildEnumField(
          'TimeServiceVisibilityExternalComment',
          TsFieldVisibility,
          true
        ),
        /**
         * Static representation of the {@link isInvoicePrintingByTransactionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVOICE_PRINTING_BY_TRANSACTION_TEXT: fieldBuilder.buildEnumField(
          'IsInvoicePrintingByTransactionText',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateAbsence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_ABSENCE: fieldBuilder.buildEnumField(
          'ValidateAbsence',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displayTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TRANSACTIONS: fieldBuilder.buildEnumField(
          'DisplayTransactions',
          PriceAmount,
          true
        ),
        /**
         * Static representation of the {@link defaultCategoryExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CATEGORY_EXPENSE: fieldBuilder.buildEdmTypeField(
          'DefaultCategoryExpense',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActivityHourJournalRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_HOUR_JOURNAL_REQUIRED: fieldBuilder.buildEnumField(
          'IsActivityHourJournalRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_REQUIREMENT: fieldBuilder.buildEnumField(
          'ItemRequirement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowSalesOrdersForMultipleFundingSources} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SALES_ORDERS_FOR_MULTIPLE_FUNDING_SOURCES:
          fieldBuilder.buildEnumField(
            'AllowSalesOrdersForMultipleFundingSources',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link negativeBudgetsToBeCarriedForwardAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_BUDGETS_TO_BE_CARRIED_FORWARD_ALLOWED:
          fieldBuilder.buildEnumField(
            'NegativeBudgetsToBeCarriedForwardAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isEnableAlternativeAccountForCancellation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENABLE_ALTERNATIVE_ACCOUNT_FOR_CANCELLATION:
          fieldBuilder.buildEnumField(
            'IsEnableAlternativeAccountForCancellation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link timeServiceVisibilitySalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SERVICE_VISIBILITY_SALES_TAX_GROUP: fieldBuilder.buildEnumField(
          'TimeServiceVisibilitySalesTaxGroup',
          TsFieldVisibility,
          true
        ),
        /**
         * Static representation of the {@link budgetOverrunDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_OVERRUN_DEFAULT: fieldBuilder.buildEnumField(
          'BudgetOverrunDefault',
          ProjBudgetOverrunOption,
          true
        ),
        /**
         * Static representation of the {@link capacityPlanningProduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_PLANNING_PRODUCTION: fieldBuilder.buildEdmTypeField(
          'CapacityPlanningProduction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSplitInvoiceBasedOnServiceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SPLIT_INVOICE_BASED_ON_SERVICE_CODE: fieldBuilder.buildEnumField(
          'IsSplitInvoiceBasedOnServiceCode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableCancelSettledDebitNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_CANCEL_SETTLED_DEBIT_NOTE: fieldBuilder.buildEnumField(
          'EnableCancelSettledDebitNote',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPaymentCriteria} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAYMENT_CRITERIA: fieldBuilder.buildEnumField(
          'IsPaymentCriteria',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isItemNeverLedgerPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ITEM_NEVER_LEDGER_PL: fieldBuilder.buildEnumField(
          'IsItemNeverLedgerPL',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link timeServiceEnableDefaultLineProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SERVICE_ENABLE_DEFAULT_LINE_PROPERTY: fieldBuilder.buildEnumField(
          'TimeServiceEnableDefaultLineProperty',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link authorizedSignatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZED_SIGNATORY: fieldBuilder.buildEdmTypeField(
          'AuthorizedSignatory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_BUDGET: fieldBuilder.buildEdmTypeField(
          'OriginalBudget',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCarryForwardRemainingBudgets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CARRY_FORWARD_REMAINING_BUDGETS: fieldBuilder.buildEnumField(
          'IsCarryForwardRemainingBudgets',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validationProjectCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_PROJECT_CATEGORY: fieldBuilder.buildEnumField(
          'ValidationProjectCategory',
          ProjValParameter,
          true
        ),
        /**
         * Static representation of the {@link costControlMethods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CONTROL_METHODS: fieldBuilder.buildEnumField(
          'CostControlMethods',
          ProjCostControlMethod,
          true
        ),
        /**
         * Static representation of the {@link taxItemGroupOnAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_ON_ACC: fieldBuilder.buildEdmTypeField(
          'TaxItemGroupOnAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCreateItemRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CREATE_ITEM_REQUIREMENT: fieldBuilder.buildEnumField(
          'IsCreateItemRequirement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link totalBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_BUDGET: fieldBuilder.buildEdmTypeField(
          'TotalBudget',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInvoicePrintingByCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVOICE_PRINTING_BY_CATEGORY: fieldBuilder.buildEnumField(
          'IsInvoicePrintingByCategory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link expenseReduceCostPriority1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_REDUCE_COST_PRIORITY_1: fieldBuilder.buildEnumField(
          'ExpenseReduceCostPriority1',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link allowTimesheetChangeReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_TIMESHEET_CHANGE_REASON: fieldBuilder.buildEnumField(
          'AllowTimesheetChangeReason',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isDateCorrectionsOnTimesheetsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DATE_CORRECTIONS_ON_TIMESHEETS_ALLOWED: fieldBuilder.buildEnumField(
          'IsDateCorrectionsOnTimesheetsAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link timeProjectsBillable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROJECTS_BILLABLE: fieldBuilder.buildEdmTypeField(
          'TimeProjectsBillable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInvoicePrintingByLineSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVOICE_PRINTING_BY_LINE_SPECIFIC: fieldBuilder.buildEnumField(
          'IsInvoicePrintingByLineSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calculationDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_DATE_TYPE: fieldBuilder.buildEnumField(
          'CalculationDateType',
          TaxCalculationProjDateType,
          true
        ),
        /**
         * Static representation of the {@link timesheetJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMESHEET_JOURNAL: fieldBuilder.buildEdmTypeField(
          'TimesheetJournal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isStartStopTimeRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_START_STOP_TIME_REQUIRED: fieldBuilder.buildEnumField(
          'IsStartStopTimeRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cfopIdSameState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_ID_SAME_STATE: fieldBuilder.buildEdmTypeField(
          'CFOPIdSameState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeMaterialEfficiency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_MATERIAL_EFFICIENCY: fieldBuilder.buildEdmTypeField(
          'TimeMaterialEfficiency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultCategoryFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CATEGORY_FEE: fieldBuilder.buildEdmTypeField(
          'DefaultCategoryFee',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseReduceCostPriority5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_REDUCE_COST_PRIORITY_5: fieldBuilder.buildEnumField(
          'ExpenseReduceCostPriority5',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link remainingBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_BUDGET: fieldBuilder.buildEdmTypeField(
          'RemainingBudget',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link generalBufferDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_BUFFER_DAYS: fieldBuilder.buildEdmTypeField(
          'GeneralBufferDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link missingTimesheetsEmailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISSING_TIMESHEETS_EMAIL_ID: fieldBuilder.buildEdmTypeField(
          'MissingTimesheetsEmailId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumTimeIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_TIME_INCREMENT: fieldBuilder.buildEdmTypeField(
          'MinimumTimeIncrement',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link showInvoiceSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_INVOICE_SUMMARY: fieldBuilder.buildEnumField(
          'ShowInvoiceSummary',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requireTimesheetChangeReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_TIMESHEET_CHANGE_REASON: fieldBuilder.buildEnumField(
          'RequireTimesheetChangeReason',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemReduceCostPriority3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_REDUCE_COST_PRIORITY_3: fieldBuilder.buildEnumField(
          'ItemReduceCostPriority3',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link itemReduceCostPriority2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_REDUCE_COST_PRIORITY_2: fieldBuilder.buildEnumField(
          'ItemReduceCostPriority2',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link itemReduceCostPriority1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_REDUCE_COST_PRIORITY_1: fieldBuilder.buildEnumField(
          'ItemReduceCostPriority1',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link accrueRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUE_REVENUE: fieldBuilder.buildEnumField(
          'AccrueRevenue',
          ProjLineTotal,
          true
        ),
        /**
         * Static representation of the {@link invoiceProposal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PROPOSAL: fieldBuilder.buildEnumField(
          'InvoiceProposal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemReduceCostPriority5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_REDUCE_COST_PRIORITY_5: fieldBuilder.buildEnumField(
          'ItemReduceCostPriority5',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link itemReduceCostPriority4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_REDUCE_COST_PRIORITY_4: fieldBuilder.buildEnumField(
          'ItemReduceCostPriority4',
          ProjReduceCostPriority,
          true
        ),
        /**
         * Static representation of the {@link eliminated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIMINATED: fieldBuilder.buildEnumField('Eliminated', NoYes, true),
        /**
         * Static representation of the {@link enableContractCurrencyForRevRec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_CONTRACT_CURRENCY_FOR_REV_REC: fieldBuilder.buildEnumField(
          'EnableContractCurrencyForRevRec',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link applyPrioritySettingsFirstOrLastInFundingAllocationOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_PRIORITY_SETTINGS_FIRST_OR_LAST_IN_FUNDING_ALLOCATION_ORDER:
          fieldBuilder.buildEnumField(
            'ApplyPrioritySettingsFirstOrLastInFundingAllocationOrder',
            FirstLast,
            true
          ),
        /**
         * Static representation of the {@link timeServiceEnableService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SERVICE_ENABLE_SERVICE: fieldBuilder.buildEnumField(
          'TimeServiceEnableService',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isIntercompanyResourceSchedulingAndTimesheetsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTERCOMPANY_RESOURCE_SCHEDULING_AND_TIMESHEETS_ENABLED:
          fieldBuilder.buildEnumField(
            'IsIntercompanyResourceSchedulingAndTimesheetsEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link timesheets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMESHEETS: fieldBuilder.buildEnumField('Timesheets', NoYes, true),
        /**
         * Static representation of the {@link defaultJournalNamesFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_JOURNAL_NAMES_FEE: fieldBuilder.buildEdmTypeField(
          'DefaultJournalNamesFee',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isHourCostInProfitLossStatementIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HOUR_COST_IN_PROFIT_LOSS_STATEMENT_INCLUDED:
          fieldBuilder.buildEnumField(
            'IsHourCostInProfitLossStatementIncluded',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link adjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT: fieldBuilder.buildEnumField(
          'Adjustment',
          ProjLineTotal,
          true
        ),
        /**
         * Static representation of the {@link isInvoicePrintingByEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVOICE_PRINTING_BY_EMPLOYEE: fieldBuilder.buildEnumField(
          'IsInvoicePrintingByEmployee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_COSTS: fieldBuilder.buildEnumField(
          'PostCosts',
          ProjLineTotal,
          true
        ),
        /**
         * Static representation of the {@link valueAddedDisplay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_DISPLAY: fieldBuilder.buildEnumField(
          'ValueAddedDisplay',
          ProjValueAddedDisplay,
          true
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroupMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP_METHOD: fieldBuilder.buildEnumField(
          'ItemSalesTaxGroupMethod',
          ProjTaxItemGroupMethod,
          true
        ),
        /**
         * Static representation of the {@link budgetControlInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CONTROL_INTERVAL: fieldBuilder.buildEnumField(
          'BudgetControlInterval',
          ProjBudgetInterval,
          true
        ),
        /**
         * Static representation of the {@link amountInMillions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_MILLIONS: fieldBuilder.buildEdmTypeField(
          'AmountInMillions',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link setVoucherDateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_VOUCHER_DATE_TO: fieldBuilder.buildEnumField(
          'SetVoucherDateTo',
          TsVoucherDateChange,
          true
        ),
        /**
         * Static representation of the {@link estimate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATE: fieldBuilder.buildEnumField('Estimate', ProjLineTotal, true),
        /**
         * Static representation of the {@link production} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION: fieldBuilder.buildEnumField('Production', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectParameterEntities)
      };
    }

    return this._schema;
  }
}
