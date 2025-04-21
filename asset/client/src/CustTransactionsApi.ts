/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustTransactions } from './CustTransactions';
import { CustTransactionsRequestBuilder } from './CustTransactionsRequestBuilder';
import { CustTransOpensApi } from './CustTransOpensApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { CustDisputesApi } from './CustDisputesApi';
import { NoYes } from './NoYes';
import { CustCollectionLetterCode } from './CustCollectionLetterCode';
import { NetCurrent } from './NetCurrent';
import { LedgerTransType } from './LedgerTransType';
import { CustVendNegInstStatus } from './CustVendNegInstStatus';
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
  EdmTypeField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CustTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustTransactions<DeSerializersT>, DeSerializersT>
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
  ): CustTransactionsApi<DeSerializersT> {
    return new CustTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link custTransOpen} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_TRANS_OPEN: OneToManyLink<
      CustTransactions<DeSerializersT>,
      DeSerializersT,
      CustTransOpensApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      CustTransactions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custDispute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_DISPUTE: OneToOneLink<
      CustTransactions<DeSerializersT>,
      DeSerializersT,
      CustDisputesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CustTransOpensApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      CustDisputesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUST_TRANS_OPEN: new OneToManyLink('CustTransOpen', this, linkedApis[0]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1]),
      CUST_DISPUTE: new OneToOneLink('CustDispute', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = CustTransactions;

  requestBuilder(): CustTransactionsRequestBuilder<DeSerializersT> {
    return new CustTransactionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustTransactions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustTransactions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustTransactions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYS_REC_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORTING_CURRENCY_CROSS_RATE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_STORE_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_EXCH_ADJUSTMENT_REALIZED: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYM_SPEC: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_SETTLE_COMPANY: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_PAYM_ORDER_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_AUTOMATION_PREDICTION_SENT: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_EXCH_ADJ_VOUCHER: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPAYMENT: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEREST: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_NUM: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_AMOUNT_MST: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_AUTOMATION_PREDUNNING_SENT: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTION_LETTER_CODE: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      CustCollectionLetterCode,
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PACKED_EXTENSIONS: EdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    REPORTING_EXCH_ADJUSTMENT_UNREALIZED: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_SETTLE_ACCOUNT_NUM: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETAIL_CUST_TRANS: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TXT: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_TERMINAL_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_TRANSACTION_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_EXCHANGE_SEQ_NUM: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_EXCH_ADJ_RATE_REPORTING: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_CUR: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_PROJECT: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTROL_NUM: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTION_LETTER: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILL_OF_EXCHANGE_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_ADJUSTMENT_REPORTING: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_EXCH_ADJ: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_MODE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_EXCH_RATE: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSED: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_REFERENCE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_METHOD: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NetCurrent,
      true,
      true
    >;
    TAX_INVOICE_SALES_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_AMOUNT_MX: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TYPE: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CANCELLED_PAYMENT: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_SETTLE_VOUCHER: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECT: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCH_ADJUSTMENT: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_AUTOMATION_EXCLUDE: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_EXCH_ADJ_RATE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLEMENT: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYM_TERM_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVED: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYM_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_REMITTANCE_FILE_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_CODE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_AMOUNT_CUR: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EURO_TRIANGULATION: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC_BASE_DATE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SETTLE_AMOUNT_REPORTING: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BILL_OF_EXCHANGE_STATUS: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      CustVendNegInstStatus,
      true,
      true
    >;
    CUST_EXCH_ADJUSTMENT_UNREALIZED: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_RATE_SECOND: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYM_SCHED_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_EXCH_ADJUSTMENT_REALIZED: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_SETTLE_DATE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_PAYMENT: EnumField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_CLOSE: OrderableEdmTypeField<
      CustTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custTransOpen} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_TRANS_OPEN: OneToManyLink<
      CustTransactions<DeSerializersT>,
      DeSerializersT,
      CustTransOpensApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      CustTransactions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custDispute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_DISPUTE: OneToOneLink<
      CustTransactions<DeSerializersT>,
      DeSerializersT,
      CustDisputesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustTransactions<DeSerializers>>;
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
         * Static representation of the {@link sysRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_ID: fieldBuilder.buildEdmTypeField(
          'SysRecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link retailStoreId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_STORE_ID: fieldBuilder.buildEdmTypeField(
          'RetailStoreId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link exchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ExchRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link paymSpec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_SPEC: fieldBuilder.buildEdmTypeField(
          'PaymSpec',
          'Edm.String',
          true
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
         * Static representation of the {@link mcrPaymOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_PAYM_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'MCRPaymOrderID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custAutomationPredictionSent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_AUTOMATION_PREDICTION_SENT: fieldBuilder.buildEnumField(
          'CustAutomationPredictionSent',
          NoYes,
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
         * Static representation of the {@link lastExchAdjVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EXCH_ADJ_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LastExchAdjVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT: fieldBuilder.buildEnumField('Prepayment', NoYes, true),
        /**
         * Static representation of the {@link interest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST: fieldBuilder.buildEnumField('Interest', NoYes, true),
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
         * Static representation of the {@link settleAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'SettleAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custAutomationPredunningSent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_AUTOMATION_PREDUNNING_SENT: fieldBuilder.buildEnumField(
          'CustAutomationPredunningSent',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionLetterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_CODE: fieldBuilder.buildEnumField(
          'CollectionLetterCode',
          CustCollectionLetterCode,
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
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link packedExtensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_EXTENSIONS: fieldBuilder.buildEdmTypeField(
          'PackedExtensions',
          'Edm.Binary',
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
         * Static representation of the {@link reportingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyAmount',
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
         * Static representation of the {@link bankCentralBankPurposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'BankCentralBankPurposeText',
          'Edm.String',
          true
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retailCustTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CUST_TRANS: fieldBuilder.buildEnumField(
          'RetailCustTrans',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link retailTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'RetailTerminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'RetailTransactionId',
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
         * Static representation of the {@link billOfExchangeSeqNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_SEQ_NUM: fieldBuilder.buildEdmTypeField(
          'BillOfExchangeSeqNum',
          'Edm.Int32',
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
         * Static representation of the {@link lastExchAdjRateReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EXCH_ADJ_RATE_REPORTING: fieldBuilder.buildEdmTypeField(
          'LastExchAdjRateReporting',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link invoiceProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PROJECT: fieldBuilder.buildEnumField(
          'InvoiceProject',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link controlNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_NUM: fieldBuilder.buildEdmTypeField(
          'ControlNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OrderAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionLetter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER: fieldBuilder.buildEnumField(
          'CollectionLetter',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link billOfExchangeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_ID: fieldBuilder.buildEdmTypeField(
          'BillOfExchangeID',
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
         * Static representation of the {@link lastExchAdj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EXCH_ADJ: fieldBuilder.buildEdmTypeField(
          'LastExchAdj',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE: fieldBuilder.buildEdmTypeField(
          'DeliveryMode',
          'Edm.String',
          true
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
         * Static representation of the {@link fixedExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCH_RATE: fieldBuilder.buildEnumField(
          'FixedExchRate',
          NoYes,
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
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
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
         * Static representation of the {@link paymMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_METHOD: fieldBuilder.buildEnumField(
          'PaymMethod',
          NetCurrent,
          true
        ),
        /**
         * Static representation of the {@link taxInvoiceSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_SALES_ID: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceSalesId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link settleAmountMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_MX: fieldBuilder.buildEdmTypeField(
          'SettleAmount_MX',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
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
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cancelledPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLED_PAYMENT: fieldBuilder.buildEnumField(
          'CancelledPayment',
          NoYes,
          true
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
         * Static representation of the {@link correct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECT: fieldBuilder.buildEnumField('Correct', NoYes, true),
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
         * Static representation of the {@link custAutomationExclude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_AUTOMATION_EXCLUDE: fieldBuilder.buildEnumField(
          'CustAutomationExclude',
          NoYes,
          true
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
         * Static representation of the {@link settlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT: fieldBuilder.buildEnumField('Settlement', NoYes, true),
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
         * Static representation of the {@link approved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED: fieldBuilder.buildEnumField('Approved', NoYes, true),
        /**
         * Static representation of the {@link paymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ID: fieldBuilder.buildEdmTypeField('PaymId', 'Edm.String', true),
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
         * Static representation of the {@link cashDiscCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscCode',
          'Edm.String',
          true
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
         * Static representation of the {@link euroTriangulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EURO_TRIANGULATION: fieldBuilder.buildEnumField(
          'EUROTriangulation',
          NoYes,
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
         * Static representation of the {@link settleAmountReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_AMOUNT_REPORTING: fieldBuilder.buildEdmTypeField(
          'SettleAmountReporting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link billOfExchangeStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_STATUS: fieldBuilder.buildEnumField(
          'BillOfExchangeStatus',
          CustVendNegInstStatus,
          true
        ),
        /**
         * Static representation of the {@link custExchAdjustmentUnrealized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_EXCH_ADJUSTMENT_UNREALIZED: fieldBuilder.buildEdmTypeField(
          'CustExchAdjustmentUnrealized',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link exchRateSecond} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_SECOND: fieldBuilder.buildEdmTypeField(
          'ExchRateSecond',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymSchedId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_SCHED_ID: fieldBuilder.buildEdmTypeField(
          'PaymSchedId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custExchAdjustmentRealized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_EXCH_ADJUSTMENT_REALIZED: fieldBuilder.buildEdmTypeField(
          'CustExchAdjustmentRealized',
          'Edm.Decimal',
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
         * Static representation of the {@link companyBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'CompanyBankAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_PAYMENT: fieldBuilder.buildEnumField('CashPayment', NoYes, true),
        /**
         * Static representation of the {@link postingProfileClose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_CLOSE: fieldBuilder.buildEdmTypeField(
          'PostingProfileClose',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustTransactions)
      };
    }

    return this._schema;
  }
}
