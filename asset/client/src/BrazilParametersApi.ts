/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilParameters } from './BrazilParameters';
import { BrazilParametersRequestBuilder } from './BrazilParametersRequestBuilder';
import { FbGeneralLedgerIntegrationBr } from './FbGeneralLedgerIntegrationBr';
import { InternationalTradeModalityBr } from './InternationalTradeModalityBr';
import { NoYes } from './NoYes';
import { PrimaryMethodBr } from './PrimaryMethodBr';
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
export class BrazilParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BrazilParameters<DeSerializersT>, DeSerializersT>
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
  ): BrazilParametersApi<DeSerializersT> {
    return new BrazilParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BrazilParameters;

  requestBuilder(): BrazilParametersRequestBuilder<DeSerializersT> {
    return new BrazilParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BrazilParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BrazilParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BrazilParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BrazilParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BrazilParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOLUME_QUANTITY: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASIC_TAX_VALUE_FOR_PIS_IN_CUMULATIVE_REGIMEN: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPROXIMATE_TAXES_TEXT: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_DIMENSION_FOR_FISCAL_ESTABLISHMENT: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASIC_TAX_VALUE_FOR_COFINS_IN_NON_CUMULATIVE_REGIMEN: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FINANCIAL_DIMENSION_FOR_COST_CENTER: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_FISCAL_DOCUMENT_ITEM: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_TEXT_INVOICE_ITEM: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUFRAMA_TEXT_FOR_ISSUE_FISCAL_DOCUMENT: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_TO_CONSUME_PRODUCT_TYPE: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FCI_TEXT: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_PRIMARY_METHOD_OF_PAYMENT_DESCRIPTION: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_COMPLEMENTARY_FISCAL_DOCUMENT_SALES_TAX_CODE_FOR_PIS: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_INTEGRATION_STATUS: EnumField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      FbGeneralLedgerIntegrationBr,
      true,
      true
    >;
    IMPORT_DECLARATION_LINE_AMOUNT_IS_BASED_ON: EnumField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      InternationalTradeModalityBr,
      true,
      true
    >;
    FISCAL_DOCUMENT_TEXT_DOCUMENT_TYPE: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCED_FISCAL_DOCUMENT_MODEL_02_SALES_TAX_CODE_FOR_COFINS: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_FISCAL_DOCUMENTS_SALES_TAX_CODE_FOR_PIS: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROXIMATE_TAXES_PRINT_ONLY_FINAL_USER: EnumField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_FISCAL_DOCUMENT_UNIT: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_APPROXIMATE_TAX_VALUE_TEXT_ID: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_PRIMARY_METHOD_OF_PAYMENT: EnumField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      PrimaryMethodBr,
      true,
      true
    >;
    SALES_PRIMARY_METHOD_OF_PAYMENT_DESCRIPTION: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROXIMATE_TAXES_SOURCE: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_FISCAL_DOCUMENTS_SALES_TAX_CODE_FOR_COFINS: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_TEXT_FOR_WITHHOLDING_TAX: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCED_FISCAL_DOCUMENT_MODEL_02_SALES_TAX_CODE_FOR_PIS: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASIC_TAX_VALUE_FOR_COFINS_IN_CUMULATIVE_REGIMEN: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUEST_FOR_QUOTATION_OPERATION_TYPE: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLEMENTARY_FISCAL_DOCUMENT_SOURCE_TEXT: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRIMARY_METHOD_OF_PAYMENT: EnumField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      PrimaryMethodBr,
      true,
      true
    >;
    VOLUME_TYPE: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_COMPLEMENTARY_FISCAL_DOCUMENT_SALES_TAX_CODE_FOR_COFINS: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORT_DECLARATION_TEXT: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_TEXT_INVOICE_SERVICE_ITEM: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_ENABLE_FIX_ISSUE_DATE: EnumField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_REQUISITION_OPERATION_TYPE: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_CFPS_CODE: EnumField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BASIC_TAX_VALUE_FOR_PIS_IN_NON_CUMULATIVE_REGIMEN: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ICMS_TAXATION_CODE_OVERRIDES_ICMSST: EnumField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REFERENCED_FISCAL_DOCUMENT_MODEL_02_SALES_TAX_CODE_FOR_ICMS: OrderableEdmTypeField<
      BrazilParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BrazilParameters<DeSerializers>>;
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
         * Static representation of the {@link volumeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_QUANTITY: fieldBuilder.buildEdmTypeField(
          'VolumeQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link basicTaxValueForPisInCumulativeRegimen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIC_TAX_VALUE_FOR_PIS_IN_CUMULATIVE_REGIMEN:
          fieldBuilder.buildEdmTypeField(
            'BasicTaxValueForPISInCumulativeRegimen',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link approximateTaxesText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROXIMATE_TAXES_TEXT: fieldBuilder.buildEdmTypeField(
          'ApproximateTaxesText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link financialDimensionForFiscalEstablishment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_DIMENSION_FOR_FISCAL_ESTABLISHMENT:
          fieldBuilder.buildEdmTypeField(
            'FinancialDimensionForFiscalEstablishment',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link basicTaxValueForCofinsInNonCumulativeRegimen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIC_TAX_VALUE_FOR_COFINS_IN_NON_CUMULATIVE_REGIMEN:
          fieldBuilder.buildEdmTypeField(
            'BasicTaxValueForCOFINSInNonCumulativeRegimen',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link financialDimensionForCostCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_DIMENSION_FOR_COST_CENTER: fieldBuilder.buildEdmTypeField(
          'FinancialDimensionForCostCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxFiscalDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_FISCAL_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'TaxFiscalDocumentItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeTextInvoiceItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INVOICE_ITEM: fieldBuilder.buildEdmTypeField(
          'FreeTextInvoiceItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link suframaTextForIssueFiscalDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFRAMA_TEXT_FOR_ISSUE_FISCAL_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'SuframaTextForIssueFiscalDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsToConsumeProductType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_TO_CONSUME_PRODUCT_TYPE: fieldBuilder.buildEdmTypeField(
          'GoodsToConsumeProductType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fciText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FCI_TEXT: fieldBuilder.buildEdmTypeField('FCIText', 'Edm.String', true),
        /**
         * Static representation of the {@link purchasePrimaryMethodOfPaymentDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRIMARY_METHOD_OF_PAYMENT_DESCRIPTION:
          fieldBuilder.buildEdmTypeField(
            'PurchasePrimaryMethodOfPaymentDescription',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link taxComplementaryFiscalDocumentSalesTaxCodeForPis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COMPLEMENTARY_FISCAL_DOCUMENT_SALES_TAX_CODE_FOR_PIS:
          fieldBuilder.buildEdmTypeField(
            'TaxComplementaryFiscalDocumentSalesTaxCodeForPIS',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link ledgerIntegrationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_INTEGRATION_STATUS: fieldBuilder.buildEnumField(
          'LedgerIntegrationStatus',
          FbGeneralLedgerIntegrationBr,
          true
        ),
        /**
         * Static representation of the {@link importDeclarationLineAmountIsBasedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_DECLARATION_LINE_AMOUNT_IS_BASED_ON: fieldBuilder.buildEnumField(
          'ImportDeclarationLineAmountIsBasedOn',
          InternationalTradeModalityBr,
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentTextDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TEXT_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentTextDocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referencedFiscalDocumentModel02SalesTaxCodeForCofins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCED_FISCAL_DOCUMENT_MODEL_02_SALES_TAX_CODE_FOR_COFINS:
          fieldBuilder.buildEdmTypeField(
            'ReferencedFiscalDocumentModel02SalesTaxCodeForCOFINS',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link taxFiscalDocumentsSalesTaxCodeForPis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_FISCAL_DOCUMENTS_SALES_TAX_CODE_FOR_PIS:
          fieldBuilder.buildEdmTypeField(
            'TaxFiscalDocumentsSalesTaxCodeForPIS',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link approximateTaxesPrintOnlyFinalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROXIMATE_TAXES_PRINT_ONLY_FINAL_USER: fieldBuilder.buildEnumField(
          'ApproximateTaxesPrintOnlyFinalUser',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectFiscalDocumentUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_FISCAL_DOCUMENT_UNIT: fieldBuilder.buildEdmTypeField(
          'ProjectFiscalDocumentUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailApproximateTaxValueTextId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_APPROXIMATE_TAX_VALUE_TEXT_ID: fieldBuilder.buildEdmTypeField(
          'RetailApproximateTaxValueTextId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchasePrimaryMethodOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRIMARY_METHOD_OF_PAYMENT: fieldBuilder.buildEnumField(
          'PurchasePrimaryMethodOfPayment',
          PrimaryMethodBr,
          true
        ),
        /**
         * Static representation of the {@link salesPrimaryMethodOfPaymentDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRIMARY_METHOD_OF_PAYMENT_DESCRIPTION:
          fieldBuilder.buildEdmTypeField(
            'SalesPrimaryMethodOfPaymentDescription',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link approximateTaxesSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROXIMATE_TAXES_SOURCE: fieldBuilder.buildEdmTypeField(
          'ApproximateTaxesSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxFiscalDocumentsSalesTaxCodeForCofins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_FISCAL_DOCUMENTS_SALES_TAX_CODE_FOR_COFINS:
          fieldBuilder.buildEdmTypeField(
            'TaxFiscalDocumentsSalesTaxCodeForCOFINS',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link fiscalDocumentTextForWithholdingTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TEXT_FOR_WITHHOLDING_TAX:
          fieldBuilder.buildEdmTypeField(
            'FiscalDocumentTextForWithholdingTax',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link referencedFiscalDocumentModel02SalesTaxCodeForPis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCED_FISCAL_DOCUMENT_MODEL_02_SALES_TAX_CODE_FOR_PIS:
          fieldBuilder.buildEdmTypeField(
            'ReferencedFiscalDocumentModel02SalesTaxCodeForPIS',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link basicTaxValueForCofinsInCumulativeRegimen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIC_TAX_VALUE_FOR_COFINS_IN_CUMULATIVE_REGIMEN:
          fieldBuilder.buildEdmTypeField(
            'BasicTaxValueForCOFINSInCumulativeRegimen',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link requestForQuotationOperationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_FOR_QUOTATION_OPERATION_TYPE: fieldBuilder.buildEdmTypeField(
          'RequestForQuotationOperationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link complementaryFiscalDocumentSourceText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLEMENTARY_FISCAL_DOCUMENT_SOURCE_TEXT:
          fieldBuilder.buildEdmTypeField(
            'ComplementaryFiscalDocumentSourceText',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link salesPrimaryMethodOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRIMARY_METHOD_OF_PAYMENT: fieldBuilder.buildEnumField(
          'SalesPrimaryMethodOfPayment',
          PrimaryMethodBr,
          true
        ),
        /**
         * Static representation of the {@link volumeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_TYPE: fieldBuilder.buildEdmTypeField(
          'VolumeType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxComplementaryFiscalDocumentSalesTaxCodeForCofins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COMPLEMENTARY_FISCAL_DOCUMENT_SALES_TAX_CODE_FOR_COFINS:
          fieldBuilder.buildEdmTypeField(
            'TaxComplementaryFiscalDocumentSalesTaxCodeForCOFINS',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link importDeclarationText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_DECLARATION_TEXT: fieldBuilder.buildEdmTypeField(
          'ImportDeclarationText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeTextInvoiceServiceItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INVOICE_SERVICE_ITEM: fieldBuilder.buildEdmTypeField(
          'FreeTextInvoiceServiceItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentEnableFixIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_ENABLE_FIX_ISSUE_DATE: fieldBuilder.buildEnumField(
          'FiscalDocumentEnableFixIssueDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseRequisitionOperationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REQUISITION_OPERATION_TYPE: fieldBuilder.buildEdmTypeField(
          'PurchaseRequisitionOperationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableCfpsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_CFPS_CODE: fieldBuilder.buildEnumField(
          'EnableCFPSCode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link basicTaxValueForPisInNonCumulativeRegimen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIC_TAX_VALUE_FOR_PIS_IN_NON_CUMULATIVE_REGIMEN:
          fieldBuilder.buildEdmTypeField(
            'BasicTaxValueForPISInNonCumulativeRegimen',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link icmsTaxationCodeOverridesIcmsst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_TAXATION_CODE_OVERRIDES_ICMSST: fieldBuilder.buildEnumField(
          'ICMSTaxationCodeOverridesICMSST',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link referencedFiscalDocumentModel02SalesTaxCodeForIcms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCED_FISCAL_DOCUMENT_MODEL_02_SALES_TAX_CODE_FOR_ICMS:
          fieldBuilder.buildEdmTypeField(
            'ReferencedFiscalDocumentModel02SalesTaxCodeForICMS',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BrazilParameters)
      };
    }

    return this._schema;
  }
}
