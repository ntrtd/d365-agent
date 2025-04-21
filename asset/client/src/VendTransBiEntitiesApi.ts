/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendTransBiEntities } from './VendTransBiEntities';
import { VendTransBiEntitiesRequestBuilder } from './VendTransBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { CustVendNegInstStatus } from './CustVendNegInstStatus';
import { LedgerTransType } from './LedgerTransType';
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
export class VendTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): VendTransBiEntitiesApi<DeSerializersT> {
    return new VendTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendTransBiEntities;

  requestBuilder(): VendTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendTransBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendTransBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendTransBiEntities<DeSerializersT>,
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
    typeof VendTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RELEASE_DATE_COMMENT: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TXT: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_NUM: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_EXCH_ADJ_RATE_REPORTING: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYM_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_INVOICE_PURCH_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_PROJECT: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_RE_OPEN: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_NUM: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_CROSS_RATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_ADJUSTMENT: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_RATE_SECOND: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_SETTLE_ACCOUNT_NUM: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_FIELDS: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LAST_SETTLE_DATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUMMARY_ACCOUNT_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_EXCH_ADJUSTMENT_UNREALIZED: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_EXCH_ADJ_VOUCHER: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROMISSORY_NOTE_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_1099_DATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_PAYMENT_GROUP: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPAYMENT: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_SPEC: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_CLOSE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_AMOUNT_MST: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_REC_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYM_TERM_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    THIRD_PARTY_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCEL: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_EXCH_ADJUSTMENT_REALIZED: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_LC_IMPORT_LINE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    APPROVED: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_EXCH_ADJ: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_MODIFIED_TRANSACTION_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SETTLE_AMOUNT_CUR: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLEMENT: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROMISSORY_NOTE_SEQ_NUM: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BANK_REMITTANCE_FILE_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_VAT_DATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYM_REFERENCE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_EXCH_RATE: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REASON_REF_REC_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LAST_SETTLE_COMPANY: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARRIVAL: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_TAX_1099_AMOUNT: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_SETTLE_VOUCHER: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_ADJUSTMENT_REPORTING: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_1099_STATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROMISSORY_NOTE_STATUS: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      CustVendNegInstStatus,
      true,
      true
    >;
    VEND_EXCH_ADJUSTMENT_UNREALIZED: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ARRIVAL_ACCOUNT_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TYPE: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    AMOUNT_CUR: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EURO_TRIANGULATION: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CORRECT: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_EXCH_ADJUSTMENT_REALIZED: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_RELEASE_DATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    APPROVED_DATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    APPROVER: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_APPROVE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_RECID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_PROFILE_CANCEL: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMITTANCE_LOCATION: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_AMOUNT: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLE_AMOUNT_REPORTING: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_EVENT: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LAST_EXCH_ADJ_RATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CASH_DISC_CODE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_BASE_DATE: OrderableEdmTypeField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RBO_VEND_TRANS: EnumField<
      VendTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link releaseDateComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_DATE_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReleaseDateComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
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
         * Static representation of the {@link documentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUM: fieldBuilder.buildEdmTypeField(
          'DocumentNum',
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
         * Static representation of the {@link reportingCurrencyExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastExchAdjRateReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EXCH_ADJ_RATE_REPORTING: fieldBuilder.buildEdmTypeField(
          'LastExchAdjRateReporting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ID: fieldBuilder.buildEdmTypeField('PaymId', 'Edm.String', true),
        /**
         * Static representation of the {@link taxInvoicePurchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_PURCH_ID: fieldBuilder.buildEdmTypeField(
          'TaxInvoicePurchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PROJECT: fieldBuilder.buildEnumField(
          'InvoiceProject',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingProfileReOpen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_RE_OPEN: fieldBuilder.buildEdmTypeField(
          'PostingProfileReOpen',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099Num} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_NUM: fieldBuilder.buildEdmTypeField(
          'Tax1099Num',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyCrossRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_CROSS_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyCrossRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_ADJUSTMENT: fieldBuilder.buildEdmTypeField(
          'ExchAdjustment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchRateSecond} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_SECOND: fieldBuilder.buildEdmTypeField(
          'ExchRateSecond',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastSettleAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SETTLE_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'LastSettleAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099Fields} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_FIELDS: fieldBuilder.buildEdmTypeField(
          'Tax1099Fields',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lastSettleDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SETTLE_DATE: fieldBuilder.buildEdmTypeField(
          'LastSettleDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link summaryAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMARY_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'SummaryAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingExchAdjustmentUnrealized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_EXCH_ADJUSTMENT_UNREALIZED: fieldBuilder.buildEdmTypeField(
          'ReportingExchAdjustmentUnrealized',
          'Edm.Decimal',
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
         * Static representation of the {@link exchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastExchAdjVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EXCH_ADJ_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LastExchAdjVoucher',
          'Edm.String',
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
         * Static representation of the {@link promissoryNoteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMISSORY_NOTE_ID: fieldBuilder.buildEdmTypeField(
          'PromissoryNoteID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link tax1099Date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_DATE: fieldBuilder.buildEdmTypeField(
          'Tax1099Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendPaymentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_PAYMENT_GROUP: fieldBuilder.buildEdmTypeField(
          'VendPaymentGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT: fieldBuilder.buildEnumField('Prepayment', NoYes, true),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link paymSpec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_SPEC: fieldBuilder.buildEdmTypeField(
          'PaymSpec',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingProfileClose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_CLOSE: fieldBuilder.buildEdmTypeField(
          'PostingProfileClose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settleAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'SettleAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099RecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_REC_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099RecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link closed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED: fieldBuilder.buildEdmTypeField(
          'Closed',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_TERM_ID: fieldBuilder.buildEdmTypeField(
          'PaymTermId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settleTax1099StateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_TAX_1099_STATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SettleTax1099StateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link thirdPartyBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'ThirdPartyBankAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL: fieldBuilder.buildEnumField('Cancel', NoYes, true),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link vendExchAdjustmentRealized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_EXCH_ADJUSTMENT_REALIZED: fieldBuilder.buildEdmTypeField(
          'VendExchAdjustmentRealized',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankLcImportLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_LC_IMPORT_LINE: fieldBuilder.buildEdmTypeField(
          'BankLCImportLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link approved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED: fieldBuilder.buildEnumField('Approved', NoYes, true),
        /**
         * Static representation of the {@link lastExchAdj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EXCH_ADJ: fieldBuilder.buildEdmTypeField(
          'LastExchAdj',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysModifiedTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link settleAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SettleAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link settlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT: fieldBuilder.buildEnumField('Settlement', NoYes, true),
        /**
         * Static representation of the {@link promissoryNoteSeqNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMISSORY_NOTE_SEQ_NUM: fieldBuilder.buildEdmTypeField(
          'PromissoryNoteSeqNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bankRemittanceFileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_REMITTANCE_FILE_ID: fieldBuilder.buildEdmTypeField(
          'BankRemittanceFileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorVatDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_VAT_DATE: fieldBuilder.buildEdmTypeField(
          'VendorVATDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PaymReference',
          'Edm.String',
          true
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
         * Static representation of the {@link reasonRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReasonRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lastSettleCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SETTLE_COMPANY: fieldBuilder.buildEdmTypeField(
          'LastSettleCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arrival} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARRIVAL: fieldBuilder.buildEnumField('Arrival', NoYes, true),
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
         * Static representation of the {@link settleTax1099Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_TAX_1099_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SettleTax1099Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastSettleVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SETTLE_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LastSettleVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchAdjustmentReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_ADJUSTMENT_REPORTING: fieldBuilder.buildEdmTypeField(
          'ExchAdjustmentReporting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankCentralBankPurposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'BankCentralBankPurposeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
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
         * Static representation of the {@link bankCentralBankPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'BankCentralBankPurposeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'RemittanceAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link tax1099State} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE: fieldBuilder.buildEdmTypeField(
          'Tax1099State',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link promissoryNoteStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMISSORY_NOTE_STATUS: fieldBuilder.buildEnumField(
          'PromissoryNoteStatus',
          CustVendNegInstStatus,
          true
        ),
        /**
         * Static representation of the {@link vendExchAdjustmentUnrealized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_EXCH_ADJUSTMENT_UNREALIZED: fieldBuilder.buildEdmTypeField(
          'VendExchAdjustmentUnrealized',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'AmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link arrivalAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARRIVAL_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'ArrivalAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE: fieldBuilder.buildEnumField(
          'TransType',
          LedgerTransType,
          true
        ),
        /**
         * Static representation of the {@link amountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'AmountCur',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link correct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECT: fieldBuilder.buildEnumField('Correct', NoYes, true),
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingExchAdjustmentRealized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_EXCH_ADJUSTMENT_REALIZED: fieldBuilder.buildEdmTypeField(
          'ReportingExchAdjustmentRealized',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceReleaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceReleaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link approvedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_DATE: fieldBuilder.buildEdmTypeField(
          'ApprovedDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link paymMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_MODE: fieldBuilder.buildEdmTypeField(
          'PaymMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingProfileApprove} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_APPROVE: fieldBuilder.buildEdmTypeField(
          'PostingProfileApprove',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetRecid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_RECID: fieldBuilder.buildEdmTypeField(
          'OffsetRecid',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link postingProfileCancel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_CANCEL: fieldBuilder.buildEdmTypeField(
          'PostingProfileCancel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'CompanyBankAccountId',
          'Edm.String',
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
         * Static representation of the {@link tax1099StateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099StateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remittanceLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_LOCATION: fieldBuilder.buildEdmTypeField(
          'RemittanceLocation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reportingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link settleAmountReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_REPORTING: fieldBuilder.buildEdmTypeField(
          'SettleAmountReporting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountingEvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_EVENT: fieldBuilder.buildEdmTypeField(
          'AccountingEvent',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lastExchAdjRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EXCH_ADJ_RATE: fieldBuilder.buildEdmTypeField(
          'LastExchAdjRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sysCreatedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysCreatedTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link cashDiscCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscBaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_BASE_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscBaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link rboVendTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RBO_VEND_TRANS: fieldBuilder.buildEnumField(
          'RBOVendTrans',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendTransBiEntities)
      };
    }

    return this._schema;
  }
}
