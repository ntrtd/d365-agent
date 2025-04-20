/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessDocumentTaxTransactions } from './BusinessDocumentTaxTransactions';
import { BusinessDocumentTaxTransactionsRequestBuilder } from './BusinessDocumentTaxTransactionsRequestBuilder';
import { DocumentProjInvoiceCostLinesApi } from './DocumentProjInvoiceCostLinesApi';
import { DocumentProjInvoiceOnAccLinesApi } from './DocumentProjInvoiceOnAccLinesApi';
import { DocumentProjInvoiceRevenueLinesApi } from './DocumentProjInvoiceRevenueLinesApi';
import { BusinessDocumentSalesInvoiceLineItemsApi } from './BusinessDocumentSalesInvoiceLineItemsApi';
import { DocumentProjInvoiceItemLinesApi } from './DocumentProjInvoiceItemLinesApi';
import { DocumentProjectInvoiceBasesApi } from './DocumentProjectInvoiceBasesApi';
import { DocumentProjInvoiceEmplLinesApi } from './DocumentProjInvoiceEmplLinesApi';
import { BusinessDocumentMarkupTransactionsApi } from './BusinessDocumentMarkupTransactionsApi';
import { BusinessDocumentSalesInvoiceBasesApi } from './BusinessDocumentSalesInvoiceBasesApi';
import { NoYes } from './NoYes';
import { TaxExemptCodeReasonIt } from './TaxExemptCodeReasonIt';
import { TaxTypeIt } from './TaxTypeIt';
import { CountryRegionType } from './CountryRegionType';
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
export class BusinessDocumentTaxTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessDocumentTaxTransactions<DeSerializersT>, DeSerializersT>
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
  ): BusinessDocumentTaxTransactionsApi<DeSerializersT> {
    return new BusinessDocumentTaxTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link documentProjInvoiceCostLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_COST_LINE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceCostLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjInvoiceOnAccLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_ON_ACC_LINE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceOnAccLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjInvoiceRevenueLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_REVENUE_LINE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceRevenueLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceLineItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjInvoiceItemLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_ITEM_LINE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceItemLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjectInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJECT_INVOICE_BASE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjectInvoiceBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjInvoiceEmplLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_EMPL_LINE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceEmplLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentMarkupTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_MARKUP_TRANSACTION: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentMarkupTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DocumentProjInvoiceCostLinesApi<DeSerializersT>,
      DocumentProjInvoiceOnAccLinesApi<DeSerializersT>,
      DocumentProjInvoiceRevenueLinesApi<DeSerializersT>,
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>,
      DocumentProjInvoiceItemLinesApi<DeSerializersT>,
      DocumentProjectInvoiceBasesApi<DeSerializersT>,
      DocumentProjInvoiceEmplLinesApi<DeSerializersT>,
      BusinessDocumentMarkupTransactionsApi<DeSerializersT>,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DOCUMENT_PROJ_INVOICE_COST_LINE: new OneToOneLink(
        'DocumentProjInvoiceCostLine',
        this,
        linkedApis[0]
      ),
      DOCUMENT_PROJ_INVOICE_ON_ACC_LINE: new OneToOneLink(
        'DocumentProjInvoiceOnAccLine',
        this,
        linkedApis[1]
      ),
      DOCUMENT_PROJ_INVOICE_REVENUE_LINE: new OneToOneLink(
        'DocumentProjInvoiceRevenueLine',
        this,
        linkedApis[2]
      ),
      BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: new OneToOneLink(
        'BusinessDocumentSalesInvoiceLineItem',
        this,
        linkedApis[3]
      ),
      DOCUMENT_PROJ_INVOICE_ITEM_LINE: new OneToOneLink(
        'DocumentProjInvoiceItemLine',
        this,
        linkedApis[4]
      ),
      DOCUMENT_PROJECT_INVOICE_BASE: new OneToOneLink(
        'DocumentProjectInvoiceBase',
        this,
        linkedApis[5]
      ),
      DOCUMENT_PROJ_INVOICE_EMPL_LINE: new OneToOneLink(
        'DocumentProjInvoiceEmplLine',
        this,
        linkedApis[6]
      ),
      BUSINESS_DOCUMENT_MARKUP_TRANSACTION: new OneToOneLink(
        'BusinessDocumentMarkupTransaction',
        this,
        linkedApis[7]
      ),
      BUSINESS_DOCUMENT_SALES_INVOICE_BASE: new OneToOneLink(
        'BusinessDocumentSalesInvoiceBase',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = BusinessDocumentTaxTransactions;

  requestBuilder(): BusinessDocumentTaxTransactionsRequestBuilder<DeSerializersT> {
    return new BusinessDocumentTaxTransactionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BusinessDocumentTaxTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessDocumentTaxTransactions<DeSerializersT>,
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
    typeof BusinessDocumentTaxTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessDocumentTaxTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_TRANS_REC_ID: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_REVERSE_CHARGE: EnumField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXEMPT_CODE_REASON_IT: EnumField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      TaxExemptCodeReasonIt,
      true,
      true
    >;
    TAX_TYPE_STR_IT: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TAX_CODE: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT_REASON: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_DESCRIPTION: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_COUNTRY_REGION_TYPE_STR: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPLIT_PAYM_DIRECT_IT: EnumField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_TYPE_IT: EnumField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      TaxTypeIt,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_REGULATE_AMOUNT_CUR: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_COUNTRY_REGION_TYPE: EnumField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      CountryRegionType,
      true,
      true
    >;
    EXEMPT_CODE_REASON_STR_IT: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_REC_ID: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_RATE: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_AMOUNT: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TABLE_ID: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      BusinessDocumentTaxTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjInvoiceCostLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_COST_LINE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceCostLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjInvoiceOnAccLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_ON_ACC_LINE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceOnAccLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjInvoiceRevenueLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_REVENUE_LINE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceRevenueLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceLineItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjInvoiceItemLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_ITEM_LINE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceItemLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjectInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJECT_INVOICE_BASE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjectInvoiceBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjInvoiceEmplLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_EMPL_LINE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceEmplLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentMarkupTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_MARKUP_TRANSACTION: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentMarkupTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentTaxTransactions<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessDocumentTaxTransactions<DeSerializers>>;
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
         * Static representation of the {@link taxTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'TaxTransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isReverseCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVERSE_CHARGE: fieldBuilder.buildEnumField(
          'IsReverseCharge',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exemptCodeReasonIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_CODE_REASON_IT: fieldBuilder.buildEnumField(
          'ExemptCodeReason_IT',
          TaxExemptCodeReasonIt,
          true
        ),
        /**
         * Static representation of the {@link taxTypeStrIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE_STR_IT: fieldBuilder.buildEdmTypeField(
          'TaxTypeStr_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA: fieldBuilder.buildEdmTypeField(
          'DataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_REASON: fieldBuilder.buildEdmTypeField(
          'ExemptReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TaxDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxCountryRegionTypeStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COUNTRY_REGION_TYPE_STR: fieldBuilder.buildEdmTypeField(
          'TaxCountryRegionTypeStr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link splitPaymDirectIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_PAYM_DIRECT_IT: fieldBuilder.buildEnumField(
          'SplitPaymDirect_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxTypeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE_IT: fieldBuilder.buildEnumField('TaxType_IT', TaxTypeIt, true),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link sourceRegulateAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REGULATE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SourceRegulateAmountCur',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link taxCountryRegionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COUNTRY_REGION_TYPE: fieldBuilder.buildEnumField(
          'TaxCountryRegionType',
          CountryRegionType,
          true
        ),
        /**
         * Static representation of the {@link exemptCodeReasonStrIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_CODE_REASON_STR_IT: fieldBuilder.buildEdmTypeField(
          'ExemptCodeReasonStr_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SourceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE: fieldBuilder.buildEdmTypeField(
          'TaxRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link baseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        /**
         * Static representation of the {@link sourceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'SourceTableId',
          'Edm.Int32',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessDocumentTaxTransactions)
      };
    }

    return this._schema;
  }
}
