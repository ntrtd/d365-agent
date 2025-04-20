/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDiscountLines } from './RetailDiscountLines';
import { RetailDiscountLinesRequestBuilder } from './RetailDiscountLinesRequestBuilder';
import { RetailDiscountsApi } from './RetailDiscountsApi';
import { ShippingThresholdDiscountsApi } from './ShippingThresholdDiscountsApi';
import { RetailDealPriceDiscountPctBase } from './RetailDealPriceDiscountPctBase';
import { RetailDiscountOfferLineDiscMethodBase } from './RetailDiscountOfferLineDiscMethodBase';
import { RetailDiscountThresholdLineDiscountMethodBase } from './RetailDiscountThresholdLineDiscountMethodBase';
import { NoYes } from './NoYes';
import { RetailOfferLineDiscountMethodBaseN1 } from './RetailOfferLineDiscountMethodBaseN1';
import { RetailDiscountLineIncludeExcludeTypeBase } from './RetailDiscountLineIncludeExcludeTypeBase';
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
export class RetailDiscountLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailDiscountLines<DeSerializersT>, DeSerializersT>
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
  ): RetailDiscountLinesApi<DeSerializersT> {
    return new RetailDiscountLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_DISCOUNT: OneToOneLink<
      RetailDiscountLines<DeSerializersT>,
      DeSerializersT,
      RetailDiscountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingThresholdDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_THRESHOLD_DISCOUNT: OneToOneLink<
      RetailDiscountLines<DeSerializersT>,
      DeSerializersT,
      ShippingThresholdDiscountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailDiscountsApi<DeSerializersT>,
      ShippingThresholdDiscountsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_DISCOUNT: new OneToOneLink('RetailDiscount', this, linkedApis[0]),
      SHIPPING_THRESHOLD_DISCOUNT: new OneToOneLink(
        'ShippingThresholdDiscount',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailDiscountLines;

  requestBuilder(): RetailDiscountLinesRequestBuilder<DeSerializersT> {
    return new RetailDiscountLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailDiscountLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailDiscountLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDiscountLines<DeSerializersT>,
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
    typeof RetailDiscountLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDiscountLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFER_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIX_AND_MATCH_DISCOUNT_TYPE: EnumField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailDealPriceDiscountPctBase,
      true,
      true
    >;
    MIX_AND_MATCH_LINE_GROUP: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_PRICE: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFER_DISCOUNT_METHOD: EnumField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailDiscountOfferLineDiscMethodBase,
      true,
      true
    >;
    STYLE: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_APPLYING_LINE_DISCOUNT_METHOD: EnumField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailDiscountThresholdLineDiscountMethodBase,
      true,
      true
    >;
    IS_DISCOUNT_APPLYING_LINE: EnumField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFER_PRICE_N_1: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MIX_AND_MATCH_NUMBER_OF_ITEMS_NEEDED: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    THRESHOLD_LINE_QUANTITY_LIMIT: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFER_DISCOUNT_METHOD_N_1: EnumField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailOfferLineDiscountMethodBaseN1,
      true,
      true
    >;
    COLOR: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_PRICE_INCL_TAX_N_1: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_TYPE: EnumField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailDiscountLineIncludeExcludeTypeBase,
      true,
      true
    >;
    THRESHOLD_TIER_AMOUNT: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT_OR_VALUE: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONFIG_ID: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_DISCOUNT: OneToOneLink<
      RetailDiscountLines<DeSerializersT>,
      DeSerializersT,
      RetailDiscountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingThresholdDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_THRESHOLD_DISCOUNT: OneToOneLink<
      RetailDiscountLines<DeSerializersT>,
      DeSerializersT,
      ShippingThresholdDiscountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailDiscountLines<DeSerializers>>;
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
         * Static representation of the {@link offerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_ID: fieldBuilder.buildEdmTypeField(
          'OfferId',
          'Edm.String',
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
         * Static representation of the {@link offerDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'OfferDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link mixAndMatchDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'MixAndMatchDiscountType',
          RetailDealPriceDiscountPctBase,
          true
        ),
        /**
         * Static representation of the {@link mixAndMatchLineGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_LINE_GROUP: fieldBuilder.buildEdmTypeField(
          'MixAndMatchLineGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasureSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offerPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_PRICE: fieldBuilder.buildEdmTypeField(
          'OfferPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link offerDiscountMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_DISCOUNT_METHOD: fieldBuilder.buildEnumField(
          'OfferDiscountMethod',
          RetailDiscountOfferLineDiscMethodBase,
          true
        ),
        /**
         * Static representation of the {@link style} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE: fieldBuilder.buildEdmTypeField('Style', 'Edm.String', true),
        /**
         * Static representation of the {@link thresholdApplyingLineDiscountMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_APPLYING_LINE_DISCOUNT_METHOD: fieldBuilder.buildEnumField(
          'ThresholdApplyingLineDiscountMethod',
          RetailDiscountThresholdLineDiscountMethodBase,
          true
        ),
        /**
         * Static representation of the {@link isDiscountApplyingLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISCOUNT_APPLYING_LINE: fieldBuilder.buildEnumField(
          'IsDiscountApplyingLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link offerPriceN1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_PRICE_N_1: fieldBuilder.buildEdmTypeField(
          'OfferPriceN1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mixAndMatchNumberOfItemsNeeded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_NUMBER_OF_ITEMS_NEEDED: fieldBuilder.buildEdmTypeField(
          'MixAndMatchNumberOfItemsNeeded',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link thresholdLineQuantityLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_LINE_QUANTITY_LIMIT: fieldBuilder.buildEdmTypeField(
          'ThresholdLineQuantityLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link offerDiscountMethodN1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_DISCOUNT_METHOD_N_1: fieldBuilder.buildEnumField(
          'OfferDiscountMethodN1',
          RetailOfferLineDiscountMethodBaseN1,
          true
        ),
        /**
         * Static representation of the {@link color} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR: fieldBuilder.buildEdmTypeField('Color', 'Edm.String', true),
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
         * Static representation of the {@link offerPriceInclTaxN1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_PRICE_INCL_TAX_N_1: fieldBuilder.buildEdmTypeField(
          'OfferPriceInclTaxN1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          RetailDiscountLineIncludeExcludeTypeBase,
          true
        ),
        /**
         * Static representation of the {@link thresholdTierAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_TIER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ThresholdTierAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountPercentOrValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENT_OR_VALUE: fieldBuilder.buildEdmTypeField(
          'DiscountPercentOrValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link configId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'ConfigId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.String', true),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offerDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OfferDiscountAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDiscountLines)
      };
    }

    return this._schema;
  }
}
