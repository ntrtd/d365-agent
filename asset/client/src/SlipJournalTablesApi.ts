/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlipJournalTables } from './SlipJournalTables';
import { SlipJournalTablesRequestBuilder } from './SlipJournalTablesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { LedgerJournalType } from './LedgerJournalType';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { TaxObligationCompany } from './TaxObligationCompany';
import { RCashTransStatus } from './RCashTransStatus';
import { RCashDocType } from './RCashDocType';
import { LedgerJournalWfApprovalStatus } from './LedgerJournalWfApprovalStatus';
import { DetailSummary } from './DetailSummary';
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
export class SlipJournalTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SlipJournalTables<DeSerializersT>, DeSerializersT>
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
  ): SlipJournalTablesApi<DeSerializersT> {
    return new SlipJournalTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      SlipJournalTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SlipJournalTables;

  requestBuilder(): SlipJournalTablesRequestBuilder<DeSerializersT> {
    return new SlipJournalTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SlipJournalTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SlipJournalTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SlipJournalTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SlipJournalTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SlipJournalTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_RATE: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_ALLOCATED_AT_POSTING: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_COLL_BANK_CONTRIBUTOR_RU: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    JOURNAL_TYPE: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      LedgerJournalType,
      true,
      true
    >;
    LOCKED_BY_SYSTEM: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LINES_LIMIT: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REJECTED_BY: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LV_CASH_RECEIPT_TABLE: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOCUMENT: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCLUDE_EXCH_ADJ_PL: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DOC_ID: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_FOR_INTERCOMPANY_TAX_POSTING: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      TaxObligationCompany,
      true,
      true
    >;
    CASH_COLL_BAG_NUM_RU: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_ROUNDING_HU: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_SOURCE_CODE_RU: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTED_AS_READY_BY: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    R_CASH_TRANS_STATUS: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      RCashTransStatus,
      true,
      true
    >;
    POSTED: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_ACCOUNT_TYPE: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    PRIVATE_FOR_USER_GROUP: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_TYPE: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      RCashDocType,
      true,
      true
    >;
    TRANS_REG_DATE_PL: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    APPROVER_FK_PERSONNEL_NUMBER: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_COLL_STORE_ID_RU: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUND_OFF_CASH_AMOUNT_HU: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTED_ON: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_COLL_DEBIT_ACCOUNT_NUM_RU: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_APPROVAL_STATUS: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      LedgerJournalWfApprovalStatus,
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_JOURNAL_NUM: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_ACCOUNTING: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_COLL_CREDIT_ACCOUNT_NUM_RU: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_SOURCE_DESCRIPTION_RU: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DETAIL_LEVEL: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    AMOUNTS_INCLUDE_SALES_TAX: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SECONDARY_EXCHANGE_RATE: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELAY_TAX_CALCULATION: EnumField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_RECEIPT_NUM_LV: OrderableEdmTypeField<
      SlipJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      SlipJournalTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SlipJournalTables<DeSerializers>>;
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
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link fixedRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_RATE: fieldBuilder.buildEnumField('FixedRate', NoYes, true),
        /**
         * Static representation of the {@link numberAllocatedAtPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_ALLOCATED_AT_POSTING: fieldBuilder.buildEnumField(
          'NumberAllocatedAtPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        /**
         * Static representation of the {@link cashCollBankContributorRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_COLL_BANK_CONTRIBUTOR_RU: fieldBuilder.buildEdmTypeField(
          'CashCollBankContributor_RU',
          'Edm.String',
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
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          LedgerJournalType,
          true
        ),
        /**
         * Static representation of the {@link lockedBySystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKED_BY_SYSTEM: fieldBuilder.buildEnumField(
          'LockedBySystem',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link linesLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINES_LIMIT: fieldBuilder.buildEdmTypeField(
          'LinesLimit',
          'Edm.Int32',
          false
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
         * Static representation of the {@link lvCashReceiptTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LV_CASH_RECEIPT_TABLE: fieldBuilder.buildEdmTypeField(
          'LvCashReceiptTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link document} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT: fieldBuilder.buildEdmTypeField(
          'Document',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link excludeExchAdjPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_EXCH_ADJ_PL: fieldBuilder.buildEnumField(
          'ExcludeExchAdj_PL',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashDocId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DOC_ID: fieldBuilder.buildEdmTypeField(
          'CashDocId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityForIntercompanyTaxPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_FOR_INTERCOMPANY_TAX_POSTING: fieldBuilder.buildEnumField(
          'LegalEntityForIntercompanyTaxPosting',
          TaxObligationCompany,
          true
        ),
        /**
         * Static representation of the {@link cashCollBagNumRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_COLL_BAG_NUM_RU: fieldBuilder.buildEdmTypeField(
          'CashCollBagNum_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manualRoundingHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_ROUNDING_HU: fieldBuilder.buildEnumField(
          'ManualRounding_HU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link debitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DebitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cashSourceCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_SOURCE_CODE_RU: fieldBuilder.buildEdmTypeField(
          'CashSourceCode_RU',
          'Edm.String',
          true
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
         * Static representation of the {@link rCashTransStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_CASH_TRANS_STATUS: fieldBuilder.buildEnumField(
          'RCashTransStatus',
          RCashTransStatus,
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link transAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'TransAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link privateForUserGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIVATE_FOR_USER_GROUP: fieldBuilder.buildEdmTypeField(
          'PrivateForUserGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE: fieldBuilder.buildEnumField('DocType', RCashDocType, true),
        /**
         * Static representation of the {@link transRegDatePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_REG_DATE_PL: fieldBuilder.buildEdmTypeField(
          'TransRegDate_PL',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link approverFkPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_FK_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'Approver_FK_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashCollStoreIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_COLL_STORE_ID_RU: fieldBuilder.buildEdmTypeField(
          'CashCollStoreId_RU',
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
         * Static representation of the {@link roundOffCashAmountHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF_CASH_AMOUNT_HU: fieldBuilder.buildEdmTypeField(
          'RoundOffCashAmount_HU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_ON: fieldBuilder.buildEdmTypeField(
          'PostedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cashCollDebitAccountNumRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_COLL_DEBIT_ACCOUNT_NUM_RU: fieldBuilder.buildEdmTypeField(
          'CashCollDebitAccountNum_RU',
          'Edm.String',
          true
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
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
          true
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
         * Static representation of the {@link reportingCurrencyExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRate',
          'Edm.Decimal',
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
         * Static representation of the {@link log} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG: fieldBuilder.buildEdmTypeField('Log', 'Edm.String', true),
        /**
         * Static representation of the {@link interCompanyAccounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_ACCOUNTING: fieldBuilder.buildEdmTypeField(
          'InterCompanyAccounting',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashCollCreditAccountNumRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_COLL_CREDIT_ACCOUNT_NUM_RU: fieldBuilder.buildEdmTypeField(
          'CashCollCreditAccountNum_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashSourceDescriptionRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_SOURCE_DESCRIPTION_RU: fieldBuilder.buildEdmTypeField(
          'CashSourceDescription_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link offsetLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link detailLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_LEVEL: fieldBuilder.buildEnumField(
          'DetailLevel',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link amountsIncludeSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNTS_INCLUDE_SALES_TAX: fieldBuilder.buildEnumField(
          'AmountsIncludeSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
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
         * Static representation of the {@link secondaryExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'SecondaryExchangeRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link cashReceiptNumLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_RECEIPT_NUM_LV: fieldBuilder.buildEdmTypeField(
          'CashReceiptNumLV',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SlipJournalTables)
      };
    }

    return this._schema;
  }
}
