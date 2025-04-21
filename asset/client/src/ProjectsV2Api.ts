/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectsV2 } from './ProjectsV2';
import { ProjectsV2RequestBuilder } from './ProjectsV2RequestBuilder';
import { EngineeringChangeOrderHeadersApi } from './EngineeringChangeOrderHeadersApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { BankLgDocumentType } from './BankLgDocumentType';
import { ProjStatus } from './ProjStatus';
import { ProjBudgetInterval } from './ProjBudgetInterval';
import { DetailSummary } from './DetailSummary';
import { ProjBudgetOverrunOption } from './ProjBudgetOverrunOption';
import { ProjBudgetManagement } from './ProjBudgetManagement';
import { ProjLedgerPosting } from './ProjLedgerPosting';
import { ProjBudgetaryControlOn } from './ProjBudgetaryControlOn';
import { ProjLinePropertySearch } from './ProjLinePropertySearch';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProjectsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectsV2<DeSerializersT>, DeSerializersT>
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
  ): ProjectsV2Api<DeSerializersT> {
    return new ProjectsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADERS: OneToManyLink<
      ProjectsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjectsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderHeadersApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_HEADERS: new OneToManyLink(
        'EngineeringChangeOrderHeaders',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProjectsV2;

  requestBuilder(): ProjectsV2RequestBuilder<DeSerializersT> {
    return new ProjectsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectsV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjectsV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjectsV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProjectsV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTUAL_START_DATE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_OCIP_GENERAL_LIABILITY: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_MANAGER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_VERIFY_COST_AGAINST_REMAINING_FORECAST: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAN_CARRY_FORWARD_REMAINING_BUDGETS: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_DOCUMENT_TYPE: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      BankLgDocumentType,
      true,
      true
    >;
    SUBPROJECT_ID_FORMAT: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_GROUP_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_HOUR_FORECAST: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATE_PROJECT_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_PROJECT_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZAKAT_CONTRACT_AMENDMENT: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_SCHEDULE_DATE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_BUDGET_CONTROL_ENABLED: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_ITEM_TRANSACTION: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ZAKAT_CONTRACT_PERIOD: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULING_CALENDAR_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_NEGATIVE_BUDGETS_TO_BE_CARRIED_FORWARD: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_STAGE: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      ProjStatus,
      true,
      true
    >;
    IS_PROJECT_TEMPLATE: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZAKAT_PROJECT_VALUE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_CONTROL_INTERVAL: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      ProjBudgetInterval,
      true,
      true
    >;
    DATE_OF_CREATION: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULE_START_DATE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ZAKAT_CONTRACT_DATE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_EXPENSE_FORECAST: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_LEVEL: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    EXTENSION_DATE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUDGET_OVERRUN_DEFAULT: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      ProjBudgetOverrunOption,
      true,
      true
    >;
    PROJECT_NAME: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_MANAGER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CONTROLLER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULE_END_DATE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECTED_START_DATE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_PROJECT_CATEGORY_VALIDATION_ENABLED: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_HEADER: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARCHITECT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_EXPENSE_TRANSACTION: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_ITEM_FORECAST: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECTED_END_DATE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_TEMPLATE_APPLIED: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTUAL_END_DATE: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAN_USE_ALTERNATE_PROJECT_BUDGET: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_BUDGET_MANAGEMENT: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      ProjBudgetManagement,
      true,
      true
    >;
    SCHEDULE_DURATION_IN_DAYS: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_POSTING_SORT_PRIORITY: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      ProjLedgerPosting,
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPES_CONTROLLED: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      ProjBudgetaryControlOn,
      true,
      true
    >;
    ALTERNATE_PROJECT_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_GROUP_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_INVOICE_ACCOUNT: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_IDENTIFICATION: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_PROPERTY_SEARCH_PRIORITY: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      ProjLinePropertySearch,
      true,
      true
    >;
    TOTAL_PLANNED_EFFORT_IN_HOURS: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CERTIFIED_PAYROLL: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_HOUR_TRANSACTION: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_RESOURCE_CALENDAR_IGNORED: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OCIP_WORKER_COMPENSATION: EnumField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEGRATION_SOURCE_DATA_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_ID: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORTING_FIELD_3: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORTING_FIELD_2: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORTING_FIELD_1: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZAKAT_SUBJECT: OrderableEdmTypeField<
      ProjectsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADERS: OneToManyLink<
      ProjectsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjectsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectsV2<DeSerializers>>;
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link actualStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'ActualStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isOcipGeneralLiability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OCIP_GENERAL_LIABILITY: fieldBuilder.buildEnumField(
          'IsOCIPGeneralLiability',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesManagerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MANAGER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesManagerPersonnelNumber',
          'Edm.String',
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
         * Static representation of the {@link canCarryForwardRemainingBudgets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_CARRY_FORWARD_REMAINING_BUDGETS: fieldBuilder.buildEnumField(
          'CanCarryForwardRemainingBudgets',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'BankDocumentType',
          BankLgDocumentType,
          true
        ),
        /**
         * Static representation of the {@link subprojectIdFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBPROJECT_ID_FORMAT: fieldBuilder.buildEdmTypeField(
          'SubprojectIdFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPriceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesPriceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActivityRequiredForHourForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_HOUR_FORECAST: fieldBuilder.buildEnumField(
          'IsActivityRequiredForHourForecast',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link estimateProjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATE_PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'EstimateProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentProjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ParentProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zakatContractAmendment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_CONTRACT_AMENDMENT: fieldBuilder.buildEdmTypeField(
          'ZakatContractAmendment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultScheduleDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SCHEDULE_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultScheduleDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isBudgetControlEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BUDGET_CONTROL_ENABLED: fieldBuilder.buildEnumField(
          'IsBudgetControlEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isActivityRequiredForItemTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_ITEM_TRANSACTION: fieldBuilder.buildEnumField(
          'IsActivityRequiredForItemTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link zakatContractPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_CONTRACT_PERIOD: fieldBuilder.buildEdmTypeField(
          'ZakatContractPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link schedulingCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULING_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'SchedulingCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowNegativeBudgetsToBeCarriedForward} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_NEGATIVE_BUDGETS_TO_BE_CARRIED_FORWARD:
          fieldBuilder.buildEnumField(
            'AllowNegativeBudgetsToBeCarriedForward',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link projectStage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_STAGE: fieldBuilder.buildEnumField(
          'ProjectStage',
          ProjStatus,
          true
        ),
        /**
         * Static representation of the {@link isProjectTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROJECT_TEMPLATE: fieldBuilder.buildEnumField(
          'IsProjectTemplate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zakatProjectValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_PROJECT_VALUE: fieldBuilder.buildEdmTypeField(
          'ZakatProjectValue',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link dateOfCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_CREATION: fieldBuilder.buildEdmTypeField(
          'DateOfCreation',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link scheduleStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_START_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduleStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link zakatContractDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_CONTRACT_DATE: fieldBuilder.buildEdmTypeField(
          'ZakatContractDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isActivityRequiredForExpenseForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_EXPENSE_FORECAST: fieldBuilder.buildEnumField(
          'IsActivityRequiredForExpenseForecast',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LEVEL: fieldBuilder.buildEnumField(
          'PostingLevel',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link extensionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION_DATE: fieldBuilder.buildEdmTypeField(
          'ExtensionDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link projectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectManagerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_MANAGER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjectManagerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectControllerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTROLLER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjectControllerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scheduleEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_END_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduleEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectedStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_START_DATE: fieldBuilder.buildEdmTypeField(
          'ProjectedStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isProjectCategoryValidationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROJECT_CATEGORY_VALIDATION_ENABLED: fieldBuilder.buildEnumField(
          'IsProjectCategoryValidationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HEADER: fieldBuilder.buildEnumField('IsHeader', NoYes, true),
        /**
         * Static representation of the {@link architectPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARCHITECT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ArchitectPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActivityRequiredForExpenseTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_EXPENSE_TRANSACTION:
          fieldBuilder.buildEnumField(
            'IsActivityRequiredForExpenseTransaction',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isActivityRequiredForItemForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_ITEM_FORECAST: fieldBuilder.buildEnumField(
          'IsActivityRequiredForItemForecast',
          NoYes,
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
         * Static representation of the {@link projectedEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_END_DATE: fieldBuilder.buildEdmTypeField(
          'ProjectedEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isTemplateApplied} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TEMPLATE_APPLIED: fieldBuilder.buildEnumField(
          'IsTemplateApplied',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link actualEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'ActualEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link canUseAlternateProjectBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_USE_ALTERNATE_PROJECT_BUDGET: fieldBuilder.buildEnumField(
          'CanUseAlternateProjectBudget',
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
         * Static representation of the {@link scheduleDurationInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'ScheduleDurationInDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerPostingSortPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_POSTING_SORT_PRIORITY: fieldBuilder.buildEnumField(
          'LedgerPostingSortPriority',
          ProjLedgerPosting,
          true
        ),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
          'Edm.String',
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
         * Static representation of the {@link alternateProjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATE_PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'AlternateProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjectGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultInvoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DefaultInvoiceAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link linePropertySearchPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROPERTY_SEARCH_PRIORITY: fieldBuilder.buildEnumField(
          'LinePropertySearchPriority',
          ProjLinePropertySearch,
          true
        ),
        /**
         * Static representation of the {@link totalPlannedEffortInHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PLANNED_EFFORT_IN_HOURS: fieldBuilder.buildEdmTypeField(
          'TotalPlannedEffortInHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isCertifiedPayroll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CERTIFIED_PAYROLL: fieldBuilder.buildEnumField(
          'IsCertifiedPayroll',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isActivityRequiredForHourTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_HOUR_TRANSACTION: fieldBuilder.buildEnumField(
          'IsActivityRequiredForHourTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isResourceCalendarIgnored} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RESOURCE_CALENDAR_IGNORED: fieldBuilder.buildEnumField(
          'IsResourceCalendarIgnored',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectContractId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOcipWorkerCompensation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OCIP_WORKER_COMPENSATION: fieldBuilder.buildEnumField(
          'IsOCIPWorkerCompensation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link integrationSourceDataId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_SOURCE_DATA_ID: fieldBuilder.buildEdmTypeField(
          'IntegrationSourceDataId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link sortingField3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_FIELD_3: fieldBuilder.buildEdmTypeField(
          'SortingField3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortingField2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_FIELD_2: fieldBuilder.buildEdmTypeField(
          'SortingField2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortingField1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_FIELD_1: fieldBuilder.buildEdmTypeField(
          'SortingField1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zakatSubject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_SUBJECT: fieldBuilder.buildEdmTypeField(
          'ZakatSubject',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectsV2)
      };
    }

    return this._schema;
  }
}
