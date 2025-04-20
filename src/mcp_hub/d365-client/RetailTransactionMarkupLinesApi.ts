/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionMarkupLines } from './RetailTransactionMarkupLines';
import { RetailTransactionMarkupLinesRequestBuilder } from './RetailTransactionMarkupLinesRequestBuilder';
import { NoYes } from './NoYes';
import { MarkupCategory } from './MarkupCategory';
import { ItcCategoryIn } from './ItcCategoryIn';
import { MarkupModuleType } from './MarkupModuleType';
import { ServiceCategoryIn } from './ServiceCategoryIn';
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
export class RetailTransactionMarkupLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTransactionMarkupLines<DeSerializersT>, DeSerializersT>
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
  ): RetailTransactionMarkupLinesApi<DeSerializersT> {
    return new RetailTransactionMarkupLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionMarkupLines;

  requestBuilder(): RetailTransactionMarkupLinesRequestBuilder<DeSerializersT> {
    return new RetailTransactionMarkupLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionMarkupLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionMarkupLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionMarkupLines<DeSerializersT>,
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
    typeof RetailTransactionMarkupLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionMarkupLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_AMOUNT_EXCLUSIVE: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HSN_CODE: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT: EnumField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKUP_AUTO_TABLE_REC_ID: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ACCOUNTING_CODE: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP_CATEGORY_TYPE: EnumField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    MARKUP_VALUE: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_RATE_TYPE: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITC_CATEGORY: EnumField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      ItcCategoryIn,
      true,
      true
    >;
    IS_OVERRIDDEN_LINE: EnumField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NON_GST: EnumField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATED_AMOUNT: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MODULE_TYPE: EnumField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      MarkupModuleType,
      true,
      true
    >;
    MARKUP_CODE: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_INCLUSIVE: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KEEP: EnumField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_CATEGORY: EnumField<
      RetailTransactionMarkupLines<DeSerializers>,
      DeSerializersT,
      ServiceCategoryIn,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransactionMarkupLines<DeSerializers>>;
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
         * Static representation of the {@link salesLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxAmountExclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_EXCLUSIVE: fieldBuilder.buildEdmTypeField(
          'TaxAmountExclusive',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hsnCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HSN_CODE: fieldBuilder.buildEdmTypeField('HSNCode', 'Edm.String', true),
        /**
         * Static representation of the {@link itemTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT: fieldBuilder.buildEnumField('Exempt', NoYes, true),
        /**
         * Static representation of the {@link markupAutoTableRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_AUTO_TABLE_REC_ID: fieldBuilder.buildEdmTypeField(
          'MarkupAutoTableRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link store} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE: fieldBuilder.buildEdmTypeField('Store', 'Edm.String', true),
        /**
         * Static representation of the {@link serviceAccountingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ACCOUNTING_CODE: fieldBuilder.buildEdmTypeField(
          'ServiceAccountingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markupCategoryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CATEGORY_TYPE: fieldBuilder.buildEnumField(
          'MarkupCategoryType',
          MarkupCategory,
          true
        ),
        /**
         * Static representation of the {@link markupValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_VALUE: fieldBuilder.buildEdmTypeField(
          'MarkupValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'TaxRateType',
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
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itcCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITC_CATEGORY: fieldBuilder.buildEnumField(
          'ITCCategory',
          ItcCategoryIn,
          true
        ),
        /**
         * Static representation of the {@link isOverriddenLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OVERRIDDEN_LINE: fieldBuilder.buildEnumField(
          'IsOverriddenLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nonGst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_GST: fieldBuilder.buildEnumField('NonGST', NoYes, true),
        /**
         * Static representation of the {@link taxExemptPriceInclusiveReductionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'TaxExemptPriceInclusiveReductionAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link calculatedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CalculatedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link moduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_TYPE: fieldBuilder.buildEnumField(
          'ModuleType',
          MarkupModuleType,
          true
        ),
        /**
         * Static representation of the {@link markupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CODE: fieldBuilder.buildEdmTypeField(
          'MarkupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmountInclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_INCLUSIVE: fieldBuilder.buildEdmTypeField(
          'TaxAmountInclusive',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link taxExemptPriceInclusiveOriginalPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE:
          fieldBuilder.buildEdmTypeField(
            'TaxExemptPriceInclusiveOriginalPrice',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link keep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP: fieldBuilder.buildEnumField('Keep', NoYes, true),
        /**
         * Static representation of the {@link serviceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CATEGORY: fieldBuilder.buildEnumField(
          'ServiceCategory',
          ServiceCategoryIn,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionMarkupLines)
      };
    }

    return this._schema;
  }
}
