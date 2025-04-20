/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjTableBiEntities } from './ProjTableBiEntities';
import { ProjTableBiEntitiesRequestBuilder } from './ProjTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { BankLgDocumentType } from './BankLgDocumentType';
import { ProjBudgetOverrunOption } from './ProjBudgetOverrunOption';
import { ProjStatus } from './ProjStatus';
import { PsaProjStatus } from './PsaProjStatus';
import { ProjType } from './ProjType';
import { ProjLinePropertySearch } from './ProjLinePropertySearch';
import { ProjBudgetManagement } from './ProjBudgetManagement';
import { DetailSummary } from './DetailSummary';
import { ProjBudgetInterval } from './ProjBudgetInterval';
import { PsaResSchedStatus } from './PsaResSchedStatus';
import { ProjLedgerPosting } from './ProjLedgerPosting';
import { PsaScheduled } from './PsaScheduled';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
import { PsaInvoiceMethod } from './PsaInvoiceMethod';
import { ProjBudgetaryControlOn } from './ProjBudgetaryControlOn';
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
export class ProjTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): ProjTableBiEntitiesApi<DeSerializersT> {
    return new ProjTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjTableBiEntities;

  requestBuilder(): ProjTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new ProjTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjTableBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjTableBiEntities<DeSerializersT>,
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
    typeof ProjTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CERTIFIED_PAYROLL: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_DATA_SOURCE: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_DOCUMENT_TYPE: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      BankLgDocumentType,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    USE_ALTERNATE_PROJECT: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKER_RESPONSIBLE_SALES: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OCIPGL: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTRACT_DATE_SA: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_LOCATION: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PSA_SCHED_DURATION: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DLV_NAME: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATE_BUDGET_PROJECT: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_BUDGET_OVERRUN_OPTION: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      ProjBudgetOverrunOption,
      true,
      true
    >;
    CREATED: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_PRICE_GROUP: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRE_ACTIVITY_EXPENSE_FORECAST: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALERT_TIME_FRAME_WEEKS: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATUS: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      ProjStatus,
      true,
      true
    >;
    FORMAT: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_CARRY_FORWARD_REMAINING_BUDGET: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_GROUP_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_PROJ_STATUS: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      PsaProjStatus,
      true,
      true
    >;
    SUBJECT_SA: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      ProjType,
      true,
      true
    >;
    REQUIRE_ACTIVITY_ITEM_FORECAST: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MIN_TIME_INCREMENT: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PSA_SCHED_USE_DURATION: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_LINE_PROPERTY_SEARCH: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      ProjLinePropertySearch,
      true,
      true
    >;
    PSA_SCHED_FROM_TIME: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PSA_FORECAST_MODEL_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_VALUE_SA: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OCIP: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTENSION_DATE: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_BUDGET_MANAGEMENT: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      ProjBudgetManagement,
      true,
      true
    >;
    WORKER_RESPONSIBLE_FINANCIAL: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJECTED_START_DATE: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CHECK_BUDGET: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_POST_DETAIL_SUMMARY: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    PROJ_BUDGET_INTERVAL: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      ProjBudgetInterval,
      true,
      true
    >;
    REQUIRE_ACTIVITY_HOUR_FORECAST: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PSA_SCHED_EFFORT: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PSA_SCHED_START_DATE: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PSA_SCHED_TO_TIME: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUIRE_ACTIVITY_HOUR_TRX: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PSA_RES_SCHED_STATUS: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      PsaResSchedStatus,
      true,
      true
    >;
    PROJ_LEDGER_POSTING: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      ProjLedgerPosting,
      true,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_PERIOD_SA: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_INVOICE_PROJ_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_SCHED_SCHEDULED: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      PsaScheduled,
      true,
      true
    >;
    PROJECTED_END_DATE: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTRACT_AMENDMENT_SA: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FUNDING_SOURCE: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PSA_SCHED_CALENDAR_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_CARRY_FORWARD_NEGATIVE_BUDGET: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_PAY_TYPE: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      JmgJobPayTypeEnum,
      true,
      true
    >;
    PSA_FORECAST_MODEL_ID_EXTERNAL: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_SCHED_END_DATE: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    USE_BUDGETING: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PSA_INVOICE_METHOD: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      PsaInvoiceMethod,
      true,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PSA_SCHED_IGNORE_CALENDAR: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REQUIRE_ACTIVITY_EXPENSE_TRX: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKER_RESPONSIBLE: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    HEADER: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_GROUP_ID: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_PROJ_CATEGORY: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PSA_DO_INVOICE_COST: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_BUDGETARY_CONTROL_ON: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      ProjBudgetaryControlOn,
      true,
      true
    >;
    TEMPLATE_APPLIED: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WIP_PROJECT: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETE_SCHEDULED: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRE_ACTIVITY_ITEM_TRX: EnumField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKER_PSA_ARCHITECT: OrderableEdmTypeField<
      ProjTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', false),
        /**
         * Static representation of the {@link certifiedPayroll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFIED_PAYROLL: fieldBuilder.buildEnumField(
          'CertifiedPayroll',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projDataSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_DATA_SOURCE: fieldBuilder.buildEdmTypeField(
          'ProjDataSource',
          'Edm.Int64',
          false
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
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link useAlternateProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ALTERNATE_PROJECT: fieldBuilder.buildEnumField(
          'UseAlternateProject',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workerResponsibleSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_RESPONSIBLE_SALES: fieldBuilder.buildEdmTypeField(
          'WorkerResponsibleSales',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ocipgl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCIPGL: fieldBuilder.buildEnumField('OCIPGL', NoYes, true),
        /**
         * Static representation of the {@link contractDateSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_DATE_SA: fieldBuilder.buildEdmTypeField(
          'ContractDate_SA',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LOCATION: fieldBuilder.buildEdmTypeField(
          'DeliveryLocation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link psaSchedDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_DURATION: fieldBuilder.buildEdmTypeField(
          'PSASchedDuration',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dlvName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_NAME: fieldBuilder.buildEdmTypeField('DlvName', 'Edm.String', true),
        /**
         * Static representation of the {@link alternateBudgetProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATE_BUDGET_PROJECT: fieldBuilder.buildEdmTypeField(
          'AlternateBudgetProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projBudgetOverrunOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_BUDGET_OVERRUN_OPTION: fieldBuilder.buildEnumField(
          'ProjBudgetOverrunOption',
          ProjBudgetOverrunOption,
          true
        ),
        /**
         * Static representation of the {@link created} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED: fieldBuilder.buildEdmTypeField(
          'Created',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projPriceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_PRICE_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjPriceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requireActivityExpenseForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_ACTIVITY_EXPENSE_FORECAST: fieldBuilder.buildEnumField(
          'RequireActivityExpenseForecast',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link alertTimeFrameWeeks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALERT_TIME_FRAME_WEEKS: fieldBuilder.buildEdmTypeField(
          'AlertTimeFrameWeeks',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', ProjStatus, true),
        /**
         * Static representation of the {@link format} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT: fieldBuilder.buildEdmTypeField('Format', 'Edm.String', true),
        /**
         * Static representation of the {@link projCarryForwardRemainingBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CARRY_FORWARD_REMAINING_BUDGET: fieldBuilder.buildEnumField(
          'ProjCarryForwardRemainingBudget',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TaxGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psaProjStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_PROJ_STATUS: fieldBuilder.buildEnumField(
          'PSAProjStatus',
          PsaProjStatus,
          true
        ),
        /**
         * Static representation of the {@link subjectSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT_SA: fieldBuilder.buildEdmTypeField(
          'Subject_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', ProjType, true),
        /**
         * Static representation of the {@link requireActivityItemForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_ACTIVITY_ITEM_FORECAST: fieldBuilder.buildEnumField(
          'RequireActivityItemForecast',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link minTimeIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_TIME_INCREMENT: fieldBuilder.buildEdmTypeField(
          'MinTimeIncrement',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link psaSchedUseDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_USE_DURATION: fieldBuilder.buildEnumField(
          'PSASchedUseDuration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projLinePropertySearch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LINE_PROPERTY_SEARCH: fieldBuilder.buildEnumField(
          'ProjLinePropertySearch',
          ProjLinePropertySearch,
          true
        ),
        /**
         * Static representation of the {@link psaSchedFromTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_FROM_TIME: fieldBuilder.buildEdmTypeField(
          'PSASchedFromTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link psaForecastModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_FORECAST_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'PSAForecastModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractValueSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_VALUE_SA: fieldBuilder.buildEdmTypeField(
          'ContractValue_SA',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ocip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCIP: fieldBuilder.buildEnumField('OCIP', NoYes, true),
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projBudgetManagement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_BUDGET_MANAGEMENT: fieldBuilder.buildEnumField(
          'ProjBudgetManagement',
          ProjBudgetManagement,
          true
        ),
        /**
         * Static representation of the {@link workerResponsibleFinancial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_RESPONSIBLE_FINANCIAL: fieldBuilder.buildEdmTypeField(
          'WorkerResponsibleFinancial',
          'Edm.Int64',
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
         * Static representation of the {@link checkBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_BUDGET: fieldBuilder.buildEnumField('CheckBudget', NoYes, true),
        /**
         * Static representation of the {@link timePostDetailSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_POST_DETAIL_SUMMARY: fieldBuilder.buildEnumField(
          'TimePostDetailSummary',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link projBudgetInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_BUDGET_INTERVAL: fieldBuilder.buildEnumField(
          'ProjBudgetInterval',
          ProjBudgetInterval,
          true
        ),
        /**
         * Static representation of the {@link requireActivityHourForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_ACTIVITY_HOUR_FORECAST: fieldBuilder.buildEnumField(
          'RequireActivityHourForecast',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link psaSchedEffort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_EFFORT: fieldBuilder.buildEdmTypeField(
          'PSASchedEffort',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link psaSchedStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_START_DATE: fieldBuilder.buildEdmTypeField(
          'PSASchedStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link psaSchedToTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_TO_TIME: fieldBuilder.buildEdmTypeField(
          'PSASchedToTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link requireActivityHourTrx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_ACTIVITY_HOUR_TRX: fieldBuilder.buildEnumField(
          'RequireActivityHourTrx',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link psaResSchedStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_RES_SCHED_STATUS: fieldBuilder.buildEnumField(
          'PSAResSchedStatus',
          PsaResSchedStatus,
          true
        ),
        /**
         * Static representation of the {@link projLedgerPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LEDGER_POSTING: fieldBuilder.buildEnumField(
          'ProjLedgerPosting',
          ProjLedgerPosting,
          true
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link contractPeriodSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_PERIOD_SA: fieldBuilder.buildEdmTypeField(
          'ContractPeriod_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projInvoiceProjId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_PROJ_ID: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceProjId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link template} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE: fieldBuilder.buildEnumField('Template', NoYes, true),
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
         * Static representation of the {@link psaSchedScheduled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_SCHEDULED: fieldBuilder.buildEnumField(
          'PSASchedScheduled',
          PsaScheduled,
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
         * Static representation of the {@link contractAmendmentSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_AMENDMENT_SA: fieldBuilder.buildEdmTypeField(
          'ContractAmendment_SA',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ID: fieldBuilder.buildEdmTypeField(
          'ParentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultFundingSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FUNDING_SOURCE: fieldBuilder.buildEdmTypeField(
          'DefaultFundingSource',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link psaSchedCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'PSASchedCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projCarryForwardNegativeBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CARRY_FORWARD_NEGATIVE_BUDGET: fieldBuilder.buildEnumField(
          'ProjCarryForwardNegativeBudget',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link jobPayType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_PAY_TYPE: fieldBuilder.buildEnumField(
          'JobPayType',
          JmgJobPayTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link psaForecastModelIdExternal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_FORECAST_MODEL_ID_EXTERNAL: fieldBuilder.buildEdmTypeField(
          'PSAForecastModelIdExternal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link psaSchedEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_END_DATE: fieldBuilder.buildEdmTypeField(
          'PSASchedEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link useBudgeting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_BUDGETING: fieldBuilder.buildEnumField('UseBudgeting', NoYes, true),
        /**
         * Static representation of the {@link psaInvoiceMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_INVOICE_METHOD: fieldBuilder.buildEnumField(
          'PSAInvoiceMethod',
          PsaInvoiceMethod,
          true
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link psaSchedIgnoreCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_IGNORE_CALENDAR: fieldBuilder.buildEnumField(
          'PSASchedIgnoreCalendar',
          NoYes,
          true
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link requireActivityExpenseTrx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_ACTIVITY_EXPENSE_TRX: fieldBuilder.buildEnumField(
          'RequireActivityExpenseTrx',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workerResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_RESPONSIBLE: fieldBuilder.buildEdmTypeField(
          'WorkerResponsible',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link header} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER: fieldBuilder.buildEnumField('Header', NoYes, true),
        /**
         * Static representation of the {@link projGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validateProjCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_PROJ_CATEGORY: fieldBuilder.buildEnumField(
          'ValidateProjCategory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link psaDoInvoiceCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_DO_INVOICE_COST: fieldBuilder.buildEnumField(
          'PSADoInvoiceCost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projBudgetaryControlOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_BUDGETARY_CONTROL_ON: fieldBuilder.buildEnumField(
          'ProjBudgetaryControlOn',
          ProjBudgetaryControlOn,
          true
        ),
        /**
         * Static representation of the {@link templateApplied} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_APPLIED: fieldBuilder.buildEnumField(
          'TemplateApplied',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link wipProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_PROJECT: fieldBuilder.buildEdmTypeField(
          'WIPProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link completeScheduled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETE_SCHEDULED: fieldBuilder.buildEnumField(
          'CompleteScheduled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link requireActivityItemTrx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_ACTIVITY_ITEM_TRX: fieldBuilder.buildEnumField(
          'RequireActivityItemTrx',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workerPsaArchitect} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PSA_ARCHITECT: fieldBuilder.buildEdmTypeField(
          'WorkerPSAArchitect',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjTableBiEntities)
      };
    }

    return this._schema;
  }
}
