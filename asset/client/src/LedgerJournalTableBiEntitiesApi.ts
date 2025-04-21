/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerJournalTableBiEntities } from './LedgerJournalTableBiEntities';
import { LedgerJournalTableBiEntitiesRequestBuilder } from './LedgerJournalTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { BankRemittanceType } from './BankRemittanceType';
import { LedgerJournalType } from './LedgerJournalType';
import { CustVendNegInstProtestProcess } from './CustVendNegInstProtestProcess';
import { LtAssetTransferType } from './LtAssetTransferType';
import { LedgerJournalWfApprovalStatus } from './LedgerJournalWfApprovalStatus';
import { BankTransSummarizationCriteria } from './BankTransSummarizationCriteria';
import { TaxObligationCompany } from './TaxObligationCompany';
import { DetailSummary } from './DetailSummary';
import { CurrentOperationsTax } from './CurrentOperationsTax';
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
export class LedgerJournalTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LedgerJournalTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): LedgerJournalTableBiEntitiesApi<DeSerializersT> {
    return new LedgerJournalTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerJournalTableBiEntities;

  requestBuilder(): LedgerJournalTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new LedgerJournalTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerJournalTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerJournalTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerJournalTableBiEntities<DeSerializersT>,
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
    typeof LedgerJournalTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerJournalTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REVERSE_ENTRY: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED_DATE_TIME: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SIMULATION_POSTED_IT: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    BANK_REMITTANCE_TYPE: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      BankRemittanceType,
      true,
      true
    >;
    REVERSE_DATE: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETAIL_STATEMENT_ID: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_TYPE: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalType,
      true,
      true
    >;
    JOURNAL_BALANCE: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER_ALLOCATED_AT_POSTING: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EURO_TRIANGULATION: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_LEDGER_DIMENSION_NAME_UPDATED: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_VEND_NEG_INST_PROTEST_PROCESS: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      CustVendNegInstProtestProcess,
      true,
      true
    >;
    REPORTING_CURRENCY_FIXED_EXCH_RATE: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REJECTED_BY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TRANSFER_TYPE_LT: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      LtAssetTransferType,
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTED_AS_READY_BY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SESSION_LOGIN_DATE_TIME: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_TOTAL_DEBIT: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_JOURNAL_NUM: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_TABLE: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_TRANS_SUMMARIZATION_ENABLED: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_TOTAL_OFFSET_BALANCE: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROTEST_SETTLED_BILL: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_NUM: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_JOURNAL_INCL_TAX: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGINAL_COMPANY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WORKFLOW_APPROVAL_STATUS: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalWfApprovalStatus,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_TRANS_SUMMARIZATION_CRITERIA: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      BankTransSummarizationCriteria,
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUM_OF_LINES: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINES_LIMIT_BEFORE_DISTRIBUTION: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORIGINAL_JOURNAL_NUM: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_OBLIGATION_COMPANY: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      TaxObligationCompany,
      true,
      true
    >;
    USER_BLOCK_ID: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENTS_GENERATED_IT: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYSTEM_BLOCKED: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_TOTAL_CREDIT_REPORTING_CURRENCY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOG: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_BLOCK_ID: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOURNAL_TOTAL_DEBIT_REPORTING_CURRENCY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_TOTAL_CREDIT: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_ACCOUNT_ID: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_BALANCE: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFSET_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHRATE_SECONDARY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_OFFSET_ACCOUNT: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_EXCH_RATE: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DETAIL_SUMMARY_POSTING: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    DELAY_TAX_CALCULATION: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SESSION_ID: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEGRATION_KEY: OrderableEdmTypeField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ADJUSTMENT_JOURNAL: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENT_OPERATIONS_TAX: EnumField<
      LedgerJournalTableBiEntities<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LedgerJournalTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reverseEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_ENTRY: fieldBuilder.buildEnumField('ReverseEntry', NoYes, true),
        /**
         * Static representation of the {@link postedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PostedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link simulationPostedIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIMULATION_POSTED_IT: fieldBuilder.buildEnumField(
          'SimulationPosted_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link bankRemittanceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_REMITTANCE_TYPE: fieldBuilder.buildEnumField(
          'BankRemittanceType',
          BankRemittanceType,
          true
        ),
        /**
         * Static representation of the {@link reverseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_DATE: fieldBuilder.buildEdmTypeField(
          'ReverseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retailStatementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'RetailStatementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          LedgerJournalType,
          true
        ),
        /**
         * Static representation of the {@link journalBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BALANCE: fieldBuilder.buildEdmTypeField(
          'JournalBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucherAllocatedAtPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_ALLOCATED_AT_POSTING: fieldBuilder.buildEnumField(
          'VoucherAllocatedAtPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link euroTriangulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EURO_TRIANGULATION: fieldBuilder.buildEnumField(
          'EUROTriangulation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
        /**
         * Static representation of the {@link isLedgerDimensionNameUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LEDGER_DIMENSION_NAME_UPDATED: fieldBuilder.buildEnumField(
          'IsLedgerDimensionNameUpdated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custVendNegInstProtestProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_NEG_INST_PROTEST_PROCESS: fieldBuilder.buildEnumField(
          'CustVendNegInstProtestProcess',
          CustVendNegInstProtestProcess,
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyFixedExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_FIXED_EXCH_RATE: fieldBuilder.buildEnumField(
          'ReportingCurrencyFixedExchRate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inUseBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_USE_BY: fieldBuilder.buildEdmTypeField(
          'InUseBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rejectedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REJECTED_BY: fieldBuilder.buildEdmTypeField(
          'RejectedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetTransferTypeLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TRANSFER_TYPE_LT: fieldBuilder.buildEnumField(
          'AssetTransferType_LT',
          LtAssetTransferType,
          true
        ),
        /**
         * Static representation of the {@link exchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportedAsReadyBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_AS_READY_BY: fieldBuilder.buildEdmTypeField(
          'ReportedAsReadyBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link sessionLoginDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_LOGIN_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SessionLoginDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalTotalDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TOTAL_DEBIT: fieldBuilder.buildEdmTypeField(
          'JournalTotalDebit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentJournalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'ParentJournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_TABLE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankTransSummarizationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANS_SUMMARIZATION_ENABLED: fieldBuilder.buildEnumField(
          'BankTransSummarizationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalTotalOffsetBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TOTAL_OFFSET_BALANCE: fieldBuilder.buildEdmTypeField(
          'journalTotalOffsetBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link protestSettledBill} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROTEST_SETTLED_BILL: fieldBuilder.buildEnumField(
          'ProtestSettledBill',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link documentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUM: fieldBuilder.buildEdmTypeField(
          'DocumentNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerJournalInclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_JOURNAL_INCL_TAX: fieldBuilder.buildEnumField(
          'LedgerJournalInclTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link originalCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_COMPANY: fieldBuilder.buildEdmTypeField(
          'OriginalCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER: fieldBuilder.buildEdmTypeField(
          'Approver',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link workflowApprovalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'WorkflowApprovalStatus',
          LedgerJournalWfApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link bankTransSummarizationCriteria} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANS_SUMMARIZATION_CRITERIA: fieldBuilder.buildEnumField(
          'BankTransSummarizationCriteria',
          BankTransSummarizationCriteria,
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numOfLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_LINES: fieldBuilder.buildEdmTypeField(
          'NumOfLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link linesLimitBeforeDistribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINES_LIMIT_BEFORE_DISTRIBUTION: fieldBuilder.buildEdmTypeField(
          'LinesLimitBeforeDistribution',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link originalJournalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'OriginalJournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxObligationCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OBLIGATION_COMPANY: fieldBuilder.buildEnumField(
          'TaxObligationCompany',
          TaxObligationCompany,
          true
        ),
        /**
         * Static representation of the {@link userBlockId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_BLOCK_ID: fieldBuilder.buildEdmTypeField(
          'UserBlockId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link paymentsGeneratedIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENTS_GENERATED_IT: fieldBuilder.buildEnumField(
          'PaymentsGenerated_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link systemBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_BLOCKED: fieldBuilder.buildEnumField(
          'SystemBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalTotalCreditReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TOTAL_CREDIT_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'JournalTotalCreditReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link log} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG: fieldBuilder.buildEdmTypeField('Log', 'Edm.String', true),
        /**
         * Static representation of the {@link groupBlockId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_BLOCK_ID: fieldBuilder.buildEdmTypeField(
          'GroupBlockId',
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
         * Static representation of the {@link journalTotalDebitReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TOTAL_DEBIT_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'JournalTotalDebitReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link journalTotalCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TOTAL_CREDIT: fieldBuilder.buildEdmTypeField(
          'JournalTotalCredit',
          'Edm.Decimal',
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
         * Static representation of the {@link bankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'BankAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_BALANCE: fieldBuilder.buildEdmTypeField(
          'EndBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link offsetLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchrateSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHRATE_SECONDARY: fieldBuilder.buildEdmTypeField(
          'ExchrateSecondary',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fixedOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_OFFSET_ACCOUNT: fieldBuilder.buildEnumField(
          'FixedOffsetAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchRateSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE_SECONDARY: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRateSecondary',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fixedExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCH_RATE: fieldBuilder.buildEnumField(
          'FixedExchRate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link detailSummaryPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_SUMMARY_POSTING: fieldBuilder.buildEnumField(
          'DetailSummaryPosting',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link delayTaxCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELAY_TAX_CALCULATION: fieldBuilder.buildEnumField(
          'DelayTaxCalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sessionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_ID: fieldBuilder.buildEdmTypeField(
          'SessionId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link integrationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_KEY: fieldBuilder.buildEdmTypeField(
          'IntegrationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAdjustmentJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ADJUSTMENT_JOURNAL: fieldBuilder.buildEnumField(
          'IsAdjustmentJournal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currentOperationsTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_OPERATIONS_TAX: fieldBuilder.buildEnumField(
          'CurrentOperationsTax',
          CurrentOperationsTax,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerJournalTableBiEntities)
      };
    }

    return this._schema;
  }
}
