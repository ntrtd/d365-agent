/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceReportDatas } from './PriceReportDatas';
import { PriceReportDatasRequestBuilder } from './PriceReportDatasRequestBuilder';
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
export class PriceReportDatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PriceReportDatas<DeSerializersT>, DeSerializersT>
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
  ): PriceReportDatasApi<DeSerializersT> {
    return new PriceReportDatasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PriceReportDatas;

  requestBuilder(): PriceReportDatasRequestBuilder<DeSerializersT> {
    return new PriceReportDatasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PriceReportDatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PriceReportDatas<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PriceReportDatas<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PriceReportDatas, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PriceReportDatas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORT_ID: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BASE_PRICE: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATED_DISCOUNT: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_AMOUNT_LIST: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TA_JOURNAL_NUM: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_ID: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATED_MARGIN: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_OFFERS: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARGIN_OFFERS: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARGIN_AMOUNT_LIST: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      PriceReportDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PriceReportDatas<DeSerializers>>;
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
         * Static representation of the {@link reportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_ID: fieldBuilder.buildEdmTypeField(
          'ReportId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link basePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_PRICE: fieldBuilder.buildEdmTypeField(
          'BasePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calculatedDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'CalculatedDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountAmountList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT_LIST: fieldBuilder.buildEdmTypeField(
          'DiscountAmountList',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taJournalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TA_JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'TAJournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'VariantId',
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
         * Static representation of the {@link salesUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculatedMargin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_MARGIN: fieldBuilder.buildEdmTypeField(
          'CalculatedMargin',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountOffers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_OFFERS: fieldBuilder.buildEdmTypeField(
          'DiscountOffers',
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
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link marginOffers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARGIN_OFFERS: fieldBuilder.buildEdmTypeField(
          'MarginOffers',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link marginAmountList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARGIN_AMOUNT_LIST: fieldBuilder.buildEdmTypeField(
          'MarginAmountList',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
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
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PriceReportDatas)
      };
    }

    return this._schema;
  }
}
