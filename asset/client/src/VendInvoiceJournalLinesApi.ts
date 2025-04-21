/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceJournalLines } from './VendInvoiceJournalLines';
import { VendInvoiceJournalLinesRequestBuilder } from './VendInvoiceJournalLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { VendInvoiceJournalHeadersApi } from './VendInvoiceJournalHeadersApi';
import { OfficeAddinLegalEntitiesApi } from './OfficeAddinLegalEntitiesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { TaxGroupsApi } from './TaxGroupsApi';
import { TaxItemGroupHeadingsApi } from './TaxItemGroupHeadingsApi';
import { FixedAssetBooksV2Api } from './FixedAssetBooksV2Api';
import { DimensionSetsApi } from './DimensionSetsApi';
import { VoucherTypesApi } from './VoucherTypesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { Listcode } from './Listcode';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { LedgerTransType } from './LedgerTransType';
import { AssetTransTypeJournal } from './AssetTransTypeJournal';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { ItmCostArea } from './ItmCostArea';
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
export class VendInvoiceJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendInvoiceJournalLines<DeSerializersT>, DeSerializersT>
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
  ): VendInvoiceJournalLinesApi<DeSerializersT> {
    return new VendInvoiceJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityOffsetAccountDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_OFFSET_ACCOUNT_DIMENSION_COMBINATION: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_HEADER: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityAccountDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_ACCOUNT_DIMENSION_COMBINATION: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_OFFSET_COMPANY: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_CURRENCY: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntitySalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_SALES_TAX_GROUP: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_COMPANY: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_ITEM_SALES_TAX_GROUP: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAssetBookV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_BOOK_V_2: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJourLineEntityDefaultDim} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOUR_LINE_ENTITY_DEFAULT_DIM: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJourLineEntityOffsetDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOUR_LINE_ENTITY_OFFSET_DEFAULT_DIMENSION: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      VendInvoiceJournalHeadersApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      OfficeAddinLegalEntitiesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      TaxGroupsApi<DeSerializersT>,
      OfficeAddinLegalEntitiesApi<DeSerializersT>,
      TaxItemGroupHeadingsApi<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      VoucherTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VEND_INVOICE_JOURNAL_LINE_ENTITY_OFFSET_ACCOUNT_DIMENSION_COMBINATION:
        new OneToOneLink(
          'VendInvoiceJournalLineEntityOffsetAccountDimensionCombination',
          this,
          linkedApis[0]
        ),
      VEND_INVOICE_JOURNAL_HEADER: new OneToOneLink(
        'VendInvoiceJournalHeader',
        this,
        linkedApis[1]
      ),
      VEND_INVOICE_JOURNAL_LINE_ENTITY_ACCOUNT_DIMENSION_COMBINATION:
        new OneToOneLink(
          'VendInvoiceJournalLineEntityAccountDimensionCombination',
          this,
          linkedApis[2]
        ),
      VEND_INVOICE_JOURNAL_LINE_ENTITY_OFFSET_COMPANY: new OneToOneLink(
        'VendInvoiceJournalLineEntityOffsetCompany',
        this,
        linkedApis[3]
      ),
      VEND_INVOICE_JOURNAL_LINE_ENTITY_CURRENCY: new OneToOneLink(
        'VendInvoiceJournalLineEntityCurrency',
        this,
        linkedApis[4]
      ),
      VEND_INVOICE_JOURNAL_LINE_ENTITY_SALES_TAX_GROUP: new OneToOneLink(
        'VendInvoiceJournalLineEntitySalesTaxGroup',
        this,
        linkedApis[5]
      ),
      VEND_INVOICE_JOURNAL_LINE_ENTITY_COMPANY: new OneToOneLink(
        'VendInvoiceJournalLineEntityCompany',
        this,
        linkedApis[6]
      ),
      VEND_INVOICE_JOURNAL_LINE_ENTITY_ITEM_SALES_TAX_GROUP: new OneToOneLink(
        'VendInvoiceJournalLineEntityItemSalesTaxGroup',
        this,
        linkedApis[7]
      ),
      FIXED_ASSET_BOOK_V_2: new OneToOneLink(
        'FixedAssetBookV2',
        this,
        linkedApis[8]
      ),
      VEND_INVOICE_JOUR_LINE_ENTITY_DEFAULT_DIM: new OneToOneLink(
        'VendInvoiceJourLineEntityDefaultDim',
        this,
        linkedApis[9]
      ),
      VEND_INVOICE_JOUR_LINE_ENTITY_OFFSET_DEFAULT_DIMENSION: new OneToOneLink(
        'VendInvoiceJourLineEntityOffsetDefaultDimension',
        this,
        linkedApis[10]
      ),
      VOUCHER_TYPE: new OneToOneLink('VoucherType', this, linkedApis[11])
    };
    return this;
  }

  entityConstructor = VendInvoiceJournalLines;

  requestBuilder(): VendInvoiceJournalLinesRequestBuilder<DeSerializersT> {
    return new VendInvoiceJournalLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceJournalLines<DeSerializersT>,
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
    typeof VendInvoiceJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_DATE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    BOOK_ID: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LISTCODE: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_COUNTRY_ISO_CODE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_COUNTY: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GSTHST_TAX_TYPE: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      GsthstTaxTypeCa,
      true,
      true
    >;
    REMITTANCE_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    APPROVER_NUMBER: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHINESE_VOUCHER_TYPE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UUID: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TRANS_TYPE: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      AssetTransTypeJournal,
      true,
      true
    >;
    REMITTANCE_ADDRESS_STREET: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_TAX_CODE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_PRIMARY_REMITTANCE_ADDRESS: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_VALID_TO: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYM_ID: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_CITY: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMITTANCE_ADDRESS_LATITUDE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_TRANSACTION_TEXT: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_FIELDS: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REMITTANCE_ADDRESS_STATE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMITTANCE_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_COUNTRY: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS_TIME_ZONE: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    INVOICE_DECLARATION_ID: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WITHHOLDING_TAX_CALCULATE: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCH_RATE_SECOND: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_VEND_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_OF_OPERATION: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVED: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHINESE_VOUCHER: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITM_COST_TYPE_ID: OrderableEdmTypeField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITM_COST_AREA: EnumField<
      VendInvoiceJournalLines<DeSerializers>,
      DeSerializersT,
      ItmCostArea,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityOffsetAccountDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_OFFSET_ACCOUNT_DIMENSION_COMBINATION: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_HEADER: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityAccountDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_ACCOUNT_DIMENSION_COMBINATION: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_OFFSET_COMPANY: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_CURRENCY: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntitySalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_SALES_TAX_GROUP: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_COMPANY: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      OfficeAddinLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJournalLineEntityItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ENTITY_ITEM_SALES_TAX_GROUP: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAssetBookV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_BOOK_V_2: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJourLineEntityDefaultDim} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOUR_LINE_ENTITY_DEFAULT_DIM: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendInvoiceJourLineEntityOffsetDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOUR_LINE_ENTITY_OFFSET_DEFAULT_DIMENSION: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      VendInvoiceJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendInvoiceJournalLines<DeSerializers>>;
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
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
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
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
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
         * Static representation of the {@link credit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT: fieldBuilder.buildEdmTypeField('Credit', 'Edm.Decimal', false),
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
         * Static representation of the {@link bookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_ID: fieldBuilder.buildEdmTypeField('BookId', 'Edm.String', true),
        /**
         * Static representation of the {@link listcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LISTCODE: fieldBuilder.buildEnumField('Listcode', Listcode, true),
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
         * Static representation of the {@link remittanceAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressDistrictName',
          'Edm.String',
          true
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
         * Static representation of the {@link remittanceAddressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressCounty',
          'Edm.String',
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
         * Static representation of the {@link remittanceAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressLongitude',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link document} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT: fieldBuilder.buildEdmTypeField(
          'Document',
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
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          LedgerTransType,
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
         * Static representation of the {@link exchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ExchRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link uuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UUID: fieldBuilder.buildEdmTypeField('UUID', 'Edm.String', true),
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
         * Static representation of the {@link assetTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TRANS_TYPE: fieldBuilder.buildEnumField(
          'AssetTransType',
          AssetTransTypeJournal,
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
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxCode',
          'Edm.String',
          true
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
         * Static representation of the {@link remittanceAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ID: fieldBuilder.buildEdmTypeField('PaymId', 'Edm.String', true),
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
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
          'Edm.String',
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
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
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
         * Static representation of the {@link debit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT: fieldBuilder.buildEdmTypeField('Debit', 'Edm.Decimal', false),
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetDefaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetDefaultDimensionDisplayValue',
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
         * Static representation of the {@link paymentSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION: fieldBuilder.buildEdmTypeField(
          'PaymentSpecification',
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
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
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
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link remittanceAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressDescription',
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
         * Static representation of the {@link remittanceAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressValidFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link remittanceAddressCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS_COUNTRY: fieldBuilder.buildEdmTypeField(
          'RemittanceAddressCountry',
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
         * Static representation of the {@link invoiceDeclarationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DECLARATION_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceDeclarationId',
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
         * Static representation of the {@link isWithholdingTaxCalculate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WITHHOLDING_TAX_CALCULATE: fieldBuilder.buildEnumField(
          'IsWithholdingTaxCalculate',
          NoYes,
          true
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
         * Static representation of the {@link custVendBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'CustVendBankAccountId',
          'Edm.String',
          true
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
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
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
         * Static representation of the {@link itemWithholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ItemWithholdingTaxGroupCode',
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
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
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link approved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED: fieldBuilder.buildEnumField('Approved', NoYes, true),
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
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itmCostTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_COST_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ITMCostTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itmCostArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_COST_AREA: fieldBuilder.buildEnumField(
          'ITMCostArea',
          ItmCostArea,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendInvoiceJournalLines)
      };
    }

    return this._schema;
  }
}
