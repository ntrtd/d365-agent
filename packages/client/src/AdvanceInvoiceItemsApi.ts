/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdvanceInvoiceItems } from './AdvanceInvoiceItems';
import { AdvanceInvoiceItemsRequestBuilder } from './AdvanceInvoiceItemsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class AdvanceInvoiceItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AdvanceInvoiceItems<DeSerializersT>, DeSerializersT>
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
  ): AdvanceInvoiceItemsApi<DeSerializersT> {
    return new AdvanceInvoiceItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AdvanceInvoiceItems;

  requestBuilder(): AdvanceInvoiceItemsRequestBuilder<DeSerializersT> {
    return new AdvanceInvoiceItemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AdvanceInvoiceItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AdvanceInvoiceItems<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AdvanceInvoiceItems<DeSerializersT>,
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
    typeof AdvanceInvoiceItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AdvanceInvoiceItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_REC_ID: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORIGINAL_ITEM_NAME: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_SALES_PRICE_EXCL_TAX: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_ITEM_ID: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_LINE_AMOUNT_EXCL_TAX: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_SALES_UNIT: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_TAX_AMOUNT: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_LINE_AMOUNT_INCL_TAX: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_TAX_CODE: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_QTY: OrderableEdmTypeField<
      AdvanceInvoiceItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AdvanceInvoiceItems<DeSerializers>>;
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
         * Static representation of the {@link parentRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'ParentRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link originalItemName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_ITEM_NAME: fieldBuilder.buildEdmTypeField(
          'OriginalItemName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalSalesPriceExclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_SALES_PRICE_EXCL_TAX: fieldBuilder.buildEdmTypeField(
          'OriginalSalesPriceExclTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'OriginalItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalLineAmountExclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_LINE_AMOUNT_EXCL_TAX: fieldBuilder.buildEdmTypeField(
          'OriginalLineAmountExclTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalSalesUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_SALES_UNIT: fieldBuilder.buildEdmTypeField(
          'OriginalSalesUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OriginalTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalLineAmountInclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_LINE_AMOUNT_INCL_TAX: fieldBuilder.buildEdmTypeField(
          'OriginalLineAmountInclTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'OriginalTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link originalQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_QTY: fieldBuilder.buildEdmTypeField(
          'OriginalQty',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AdvanceInvoiceItems)
      };
    }

    return this._schema;
  }
}
