/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FreeTextInvoiceLines } from './FreeTextInvoiceLines';
import { FreeTextInvoiceLinesRequestBuilder } from './FreeTextInvoiceLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { TaxGroupsApi } from './TaxGroupsApi';
import { FreeTextInvoiceHeadersApi } from './FreeTextInvoiceHeadersApi';
import { TaxItemGroupHeadingsApi } from './TaxItemGroupHeadingsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NgpCodesApi } from './NgpCodesApi';
import { NoYes } from './NoYes';
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
export class FreeTextInvoiceLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FreeTextInvoiceLines<DeSerializersT>, DeSerializersT>
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
  ): FreeTextInvoiceLinesApi<DeSerializersT> {
    return new FreeTextInvoiceLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ftiMainAccountDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FTI_MAIN_ACCOUNT_DIMENSION_COMBINATION: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceLineEntityTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_ENTITY_TAX_GROUP: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custFreeTextInvoiceHeaderComposite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_FREE_TEXT_INVOICE_HEADER_COMPOSITE: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceLineEntityTaxItemGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_ENTITY_TAX_ITEM_GROUP: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ftiDefaultDimensionDimensionSetCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FTI_DEFAULT_DIMENSION_DIMENSION_SET_COMBINATION: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceLineEntityNgp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_ENTITY_NGP: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      NgpCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      TaxGroupsApi<DeSerializersT>,
      FreeTextInvoiceHeadersApi<DeSerializersT>,
      TaxItemGroupHeadingsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      NgpCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FTI_MAIN_ACCOUNT_DIMENSION_COMBINATION: new OneToOneLink(
        'FTIMainAccountDimensionCombination',
        this,
        linkedApis[0]
      ),
      FREE_TEXT_INVOICE_LINE_ENTITY_TAX_GROUP: new OneToOneLink(
        'FreeTextInvoiceLineEntityTaxGroup',
        this,
        linkedApis[1]
      ),
      CUST_FREE_TEXT_INVOICE_HEADER_COMPOSITE: new OneToOneLink(
        'CustFreeTextInvoiceHeaderComposite',
        this,
        linkedApis[2]
      ),
      FREE_TEXT_INVOICE_LINE_ENTITY_TAX_ITEM_GROUP: new OneToOneLink(
        'FreeTextInvoiceLineEntityTaxItemGroup',
        this,
        linkedApis[3]
      ),
      FTI_DEFAULT_DIMENSION_DIMENSION_SET_COMBINATION: new OneToOneLink(
        'FTIDefaultDimensionDimensionSetCombination',
        this,
        linkedApis[4]
      ),
      FREE_TEXT_INVOICE_LINE_ENTITY_NGP: new OneToOneLink(
        'FreeTextInvoiceLineEntityNGP',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = FreeTextInvoiceLines;

  requestBuilder(): FreeTextInvoiceLinesRequestBuilder<DeSerializersT> {
    return new FreeTextInvoiceLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FreeTextInvoiceLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FreeTextInvoiceLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FreeTextInvoiceLines<DeSerializersT>,
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
    typeof FreeTextInvoiceLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FreeTextInvoiceLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_REC_ID: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_TAX_AMOUNT: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    E_INVOICE_ACCOUNT_CODE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SERVICE_INVOICE: EnumField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATE_OF_ORIGIN: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_CODE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_WEIGHT: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BILLING_CODE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NGP_CODE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_INVOICE_ID: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE_MODEL: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_DETAILS: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFOP_CODE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_INFORMATION_SERVICE_CODE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_ID: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_ID: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTY_NUMBER: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_TEXT: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_GROUP: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_GTD: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_NAME: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      FreeTextInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ftiMainAccountDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FTI_MAIN_ACCOUNT_DIMENSION_COMBINATION: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceLineEntityTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_ENTITY_TAX_GROUP: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custFreeTextInvoiceHeaderComposite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_FREE_TEXT_INVOICE_HEADER_COMPOSITE: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceLineEntityTaxItemGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_ENTITY_TAX_ITEM_GROUP: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ftiDefaultDimensionDimensionSetCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FTI_DEFAULT_DIMENSION_DIMENSION_SET_COMBINATION: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceLineEntityNgp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_ENTITY_NGP: OneToOneLink<
      FreeTextInvoiceLines<DeSerializersT>,
      DeSerializersT,
      NgpCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FreeTextInvoiceLines<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'ParentRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link eInvoiceAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'EInvoiceAccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'FixedAssetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isServiceInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_INVOICE: fieldBuilder.buildEnumField(
          'IsServiceInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link stateOfOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_OF_ORIGIN: fieldBuilder.buildEdmTypeField(
          'StateOfOrigin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CODE: fieldBuilder.buildEdmTypeField(
          'PrintCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_WEIGHT: fieldBuilder.buildEdmTypeField(
          'TotalWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link billingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CODE: fieldBuilder.buildEdmTypeField(
          'BillingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ngpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NGP_CODE: fieldBuilder.buildEdmTypeField('NGPCode', 'Edm.Int32', false),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link externalInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'ExternalInvoiceId',
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
         * Static representation of the {@link transactionCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link valueModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL: fieldBuilder.buildEdmTypeField(
          'ValueModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DETAILS: fieldBuilder.buildEdmTypeField(
          'AmountDetails',
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
         * Static representation of the {@link cfopCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_CODE: fieldBuilder.buildEdmTypeField(
          'CFOPCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalInformationServiceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_INFORMATION_SERVICE_CODE: fieldBuilder.buildEdmTypeField(
          'FiscalInformationServiceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryId',
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
         * Static representation of the {@link salesTaxItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propertyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PropertyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TEXT: fieldBuilder.buildEdmTypeField(
          'InvoiceText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
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
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceGtd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_GTD: fieldBuilder.buildEdmTypeField(
          'InvoiceGTD',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_NAME: fieldBuilder.buildEdmTypeField(
          'CountryName',
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
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FreeTextInvoiceLines)
      };
    }

    return this._schema;
  }
}
