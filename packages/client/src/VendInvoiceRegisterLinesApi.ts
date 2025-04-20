/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceRegisterLines } from './VendInvoiceRegisterLines';
import { VendInvoiceRegisterLinesRequestBuilder } from './VendInvoiceRegisterLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { VendInvoiceRegisterHeadersApi } from './VendInvoiceRegisterHeadersApi';
import { VoucherTypesApi } from './VoucherTypesApi';
import { WorkersApi } from './WorkersApi';
import { CurrenciesApi } from './CurrenciesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { Listcode } from './Listcode';
import { LedgerTransType } from './LedgerTransType';
import { NoYes } from './NoYes';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { Timezone } from './Timezone';
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
export class VendInvoiceRegisterLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendInvoiceRegisterLines<DeSerializersT>, DeSerializersT>
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
  ): VendInvoiceRegisterLinesApi<DeSerializersT> {
    return new VendInvoiceRegisterLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterLineEntityOffsetAccountDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_ENTITY_OFFSET_ACCOUNT_DIMENSION_COMBINATION: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_HEADER: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      VendInvoiceRegisterHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterLedgerVoucherTypeRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LEDGER_VOUCHER_TYPE_ROLE: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterLineHcmWorkerEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_HCM_WORKER_ENTITY_ROLE: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterLineEntityCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_ENTITY_CURRENCY: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterLineEntityAccountDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_ENTITY_ACCOUNT_DIMENSION_COMBINATION: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      VendInvoiceRegisterHeadersApi<DeSerializersT>,
      VoucherTypesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VEND_INVOICE_REGISTER_LINE_ENTITY_OFFSET_ACCOUNT_DIMENSION_COMBINATION:
        new OneToOneLink(
          'VendInvoiceRegisterLineEntityOffsetAccountDimensionCombination',
          this,
          linkedApis[0]
        ),
      VEND_INVOICE_REGISTER_HEADER: new OneToOneLink(
        'VendInvoiceRegisterHeader',
        this,
        linkedApis[1]
      ),
      VEND_INVOICE_REGISTER_LEDGER_VOUCHER_TYPE_ROLE: new OneToOneLink(
        'VendInvoiceRegisterLedgerVoucherTypeRole',
        this,
        linkedApis[2]
      ),
      VEND_INVOICE_REGISTER_LINE_HCM_WORKER_ENTITY_ROLE: new OneToOneLink(
        'VendInvoiceRegisterLineHcmWorkerEntityRole',
        this,
        linkedApis[3]
      ),
      VEND_INVOICE_REGISTER_LINE_ENTITY_CURRENCY: new OneToOneLink(
        'VendInvoiceRegisterLineEntityCurrency',
        this,
        linkedApis[4]
      ),
      VEND_INVOICE_REGISTER_LINE_ENTITY_ACCOUNT_DIMENSION_COMBINATION:
        new OneToOneLink(
          'VendInvoiceRegisterLineEntityAccountDimensionCombination',
          this,
          linkedApis[5]
        )
    };
    return this;
  }

  entityConstructor = VendInvoiceRegisterLines;

  requestBuilder(): VendInvoiceRegisterLinesRequestBuilder<DeSerializersT> {
    return new VendInvoiceRegisterLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceRegisterLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceRegisterLines<DeSerializersT>,
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
    typeof VendInvoiceRegisterLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceRegisterLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_VEND_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_COUNTRY: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_DATE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    REMITTANCE_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_CITY: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_TRANSACTION_TEXT: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMITTANCE_ADDRESS_LATITUDE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LISTCODE: EnumField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_VALID_TO: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REMITTANCE_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DECLARATION_ID: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_STATE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHINESE_VOUCHER: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHINESE_VOUCHER_TYPE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_STREET: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WITHHOLDING_TAX_CALCULATE: EnumField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEBIT: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_SERIES_MX: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FULL_PRIMARY_REMITTANCE_ADDRESS: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UUID: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMITTANCE_ADDRESS_COUNTRY_ISO_CODE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_NUMBER: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYM_ID: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    GSTHST_TAX_TYPE: EnumField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      GsthstTaxTypeCa,
      true,
      true
    >;
    REMITTANCE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_OF_OPERATION: EnumField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    CASH_DISCOUNT: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_TIME_ZONE: EnumField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_COUNTY: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      VendInvoiceRegisterLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterLineEntityOffsetAccountDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_ENTITY_OFFSET_ACCOUNT_DIMENSION_COMBINATION: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_HEADER: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      VendInvoiceRegisterHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterLedgerVoucherTypeRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LEDGER_VOUCHER_TYPE_ROLE: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterLineHcmWorkerEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_HCM_WORKER_ENTITY_ROLE: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterLineEntityCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_ENTITY_CURRENCY: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceRegisterLineEntityAccountDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_ENTITY_ACCOUNT_DIMENSION_COMBINATION: OneToOneLink<
      VendInvoiceRegisterLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendInvoiceRegisterLines<DeSerializers>>;
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
         * Static representation of the {@link custVendBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'CustVendBankAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddressCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_COUNTRY: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressCountry',
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
         * Static representation of the {@link remittanceAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressDistrictName',
          'Edm.String',
          true
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
         * Static representation of the {@link remittanceAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressCity',
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
         * Static representation of the {@link remittanceAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remittanceAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
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
         * Static representation of the {@link finTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FinTagDisplayValue',
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
         * Static representation of the {@link remittanceAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressValidTo',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link remittanceAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressDescription',
          'Edm.String',
          true
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
         * Static representation of the {@link invoiceDeclarationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DECLARATION_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceDeclarationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressState',
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
         * Static representation of the {@link remittanceAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link isWithholdingTaxCalculate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WITHHOLDING_TAX_CALCULATE: fieldBuilder.buildEnumField(
          'IsWithholdingTaxCalculate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link credit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT: fieldBuilder.buildEdmTypeField('Credit', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link debit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT: fieldBuilder.buildEdmTypeField('Debit', 'Edm.Decimal', false),
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
         * Static representation of the {@link invoiceSeriesMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_SERIES_MX: fieldBuilder.buildEdmTypeField(
          'InvoiceSeries_MX',
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
         * Static representation of the {@link fullPrimaryRemittanceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_PRIMARY_REMITTANCE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullPrimaryRemittanceAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UUID: fieldBuilder.buildEdmTypeField('UUID', 'Edm.String', true),
        /**
         * Static representation of the {@link remittanceAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressLocationId',
          'Edm.String',
          true
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
         * Static representation of the {@link remittanceAddressCountryIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_COUNTRY_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressCountryISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approverNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ID: fieldBuilder.buildEdmTypeField('PaymId', 'Edm.String', true),
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
         * Static representation of the {@link gsthstTaxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GSTHST_TAX_TYPE: fieldBuilder.buildEnumField(
          'GSTHSTTaxType',
          GsthstTaxTypeCa,
          true
        ),
        /**
         * Static representation of the {@link remittanceAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressZipCode',
          'Edm.String',
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
         * Static representation of the {@link cashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetFinTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetFinTagDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'RemittanceAddressTimeZone',
          Timezone,
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
         * Static representation of the {@link document} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT: fieldBuilder.buildEdmTypeField(
          'Document',
          'Edm.String',
          true
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
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressCounty',
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
        ALL_FIELDS: new AllFields('*', VendInvoiceRegisterLines)
      };
    }

    return this._schema;
  }
}
