/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GeneralLedgerCustInvoiceJournalLines } from './GeneralLedgerCustInvoiceJournalLines';
import { GeneralLedgerCustInvoiceJournalLinesRequestBuilder } from './GeneralLedgerCustInvoiceJournalLinesRequestBuilder';
import { GeneralLedgerCustInvoiceJournalHeadersApi } from './GeneralLedgerCustInvoiceJournalHeadersApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { VoucherTypesApi } from './VoucherTypesApi';
import { OfficeAddinLegalEntitiesApi } from './OfficeAddinLegalEntitiesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { Listcode } from './Listcode';
import { LedgerTransType } from './LedgerTransType';
import { NoYes } from './NoYes';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
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
export class GeneralLedgerCustInvoiceJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT
    >
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
  ): GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT> {
    return new GeneralLedgerCustInvoiceJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJournalLineComposite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_COMPOSITE: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJournalDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_DIMENSION_COMBINATION: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJournalLineEntityOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_ENTITY_OFFSET_COMPANY: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custAccountCombinationOffsetCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_ACCOUNT_COMBINATION_OFFSET_COMBINATION: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJournalLineEntityCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_ENTITY_CURRENCY: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJournalLineEntityCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_ENTITY_COMPANY: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJourLineEntityDefaultDim} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOUR_LINE_ENTITY_DEFAULT_DIM: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GeneralLedgerCustInvoiceJournalHeadersApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      VoucherTypesApi<DeSerializersT>,
      OfficeAddinLegalEntitiesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      OfficeAddinLegalEntitiesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUST_INVOICE_JOURNAL_LINE_COMPOSITE: new OneToOneLink(
        'CustInvoiceJournalLineComposite',
        this,
        linkedApis[0]
      ),
      CUST_INVOICE_JOURNAL_DIMENSION_COMBINATION: new OneToOneLink(
        'CustInvoiceJournalDimensionCombination',
        this,
        linkedApis[1]
      ),
      VOUCHER_TYPE: new OneToOneLink('VoucherType', this, linkedApis[2]),
      CUST_INVOICE_JOURNAL_LINE_ENTITY_OFFSET_COMPANY: new OneToOneLink(
        'CustInvoiceJournalLineEntityOffsetCompany',
        this,
        linkedApis[3]
      ),
      CUST_ACCOUNT_COMBINATION_OFFSET_COMBINATION: new OneToOneLink(
        'CustAccountCombinationOffsetCombination',
        this,
        linkedApis[4]
      ),
      CUST_INVOICE_JOURNAL_LINE_ENTITY_CURRENCY: new OneToOneLink(
        'CustInvoiceJournalLineEntityCurrency',
        this,
        linkedApis[5]
      ),
      CUST_INVOICE_JOURNAL_LINE_ENTITY_COMPANY: new OneToOneLink(
        'CustInvoiceJournalLineEntityCompany',
        this,
        linkedApis[6]
      ),
      CUST_INVOICE_JOUR_LINE_ENTITY_DEFAULT_DIM: new OneToOneLink(
        'CustInvoiceJourLineEntityDefaultDim',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = GeneralLedgerCustInvoiceJournalLines;

  requestBuilder(): GeneralLedgerCustInvoiceJournalLinesRequestBuilder<DeSerializersT> {
    return new GeneralLedgerCustInvoiceJournalLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
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
    typeof GeneralLedgerCustInvoiceJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GeneralLedgerCustInvoiceJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_VEND_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_DATE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_TRANSACTION_TEXT: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TEXT: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LISTCODE: EnumField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WITHHOLDING_CALCULATION_ENABLED: EnumField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHINESE_VOUCHER: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHINESE_VOUCHER_TYPE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPROVED: EnumField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    TYPE_OF_OPERATION: EnumField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVED_BY: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_COMMENT: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJournalLineComposite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_COMPOSITE: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJournalDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_DIMENSION_COMBINATION: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJournalLineEntityOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_ENTITY_OFFSET_COMPANY: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custAccountCombinationOffsetCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_ACCOUNT_COMBINATION_OFFSET_COMBINATION: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJournalLineEntityCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_ENTITY_CURRENCY: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJournalLineEntityCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_ENTITY_COMPANY: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJourLineEntityDefaultDim} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOUR_LINE_ENTITY_DEFAULT_DIM: OneToOneLink<
      GeneralLedgerCustInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GeneralLedgerCustInvoiceJournalLines<DeSerializers>>;
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
         * Static representation of the {@link creditAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custVendBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'CustVendBankAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscountDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link exchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
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
         * Static representation of the {@link offsetTransactionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_TRANSACTION_TEXT: fieldBuilder.buildEdmTypeField(
          'OffsetTransactionText',
          'Edm.String',
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
         * Static representation of the {@link transactionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TEXT: fieldBuilder.buildEdmTypeField(
          'TransactionText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link listcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LISTCODE: fieldBuilder.buildEnumField('Listcode', Listcode, true),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          LedgerTransType,
          true
        ),
        /**
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
          'Edm.String',
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
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWithholdingCalculationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WITHHOLDING_CALCULATION_ENABLED: fieldBuilder.buildEnumField(
          'IsWithholdingCalculationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link offsetCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_COMPANY: fieldBuilder.buildEdmTypeField(
          'OffsetCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chineseVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHINESE_VOUCHER: fieldBuilder.buildEdmTypeField(
          'ChineseVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chineseVoucherType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHINESE_VOUCHER_TYPE: fieldBuilder.buildEdmTypeField(
          'ChineseVoucherType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'CustomerAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchRateSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_SECONDARY: fieldBuilder.buildEdmTypeField(
          'ExchRateSecondary',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'BankTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemWithholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ItemWithholdingTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
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
         * Static representation of the {@link cashDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link approved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED: fieldBuilder.buildEnumField('Approved', NoYes, true),
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
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link typeOfOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_OPERATION: fieldBuilder.buildEnumField(
          'TypeOfOperation',
          VendorOperationTypeMx,
          true
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          true
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
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
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
         * Static representation of the {@link approvedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_BY: fieldBuilder.buildEdmTypeField(
          'ApprovedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReasonComment',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION: fieldBuilder.buildEdmTypeField(
          'PaymentSpecification',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GeneralLedgerCustInvoiceJournalLines)
      };
    }

    return this._schema;
  }
}
