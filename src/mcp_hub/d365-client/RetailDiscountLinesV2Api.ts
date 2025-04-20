/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDiscountLinesV2 } from './RetailDiscountLinesV2';
import { RetailDiscountLinesV2RequestBuilder } from './RetailDiscountLinesV2RequestBuilder';
import { RetailDealPriceDiscountPctBase } from './RetailDealPriceDiscountPctBase';
import { RetailDiscountOfferLineDiscMethodBase } from './RetailDiscountOfferLineDiscMethodBase';
import { RetailDiscountLineIncludeExcludeTypeBase } from './RetailDiscountLineIncludeExcludeTypeBase';
import { NoYes } from './NoYes';
import { RetailOfferLineDiscountMethodBaseN1 } from './RetailOfferLineDiscountMethodBaseN1';
import { RetailDiscountThresholdLineDiscountMethodBase } from './RetailDiscountThresholdLineDiscountMethodBase';
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
export class RetailDiscountLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailDiscountLinesV2<DeSerializersT>, DeSerializersT>
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
  ): RetailDiscountLinesV2Api<DeSerializersT> {
    return new RetailDiscountLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailDiscountLinesV2;

  requestBuilder(): RetailDiscountLinesV2RequestBuilder<DeSerializersT> {
    return new RetailDiscountLinesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailDiscountLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailDiscountLinesV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDiscountLinesV2<DeSerializersT>,
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
    typeof RetailDiscountLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDiscountLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROP_VALUE_3: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_LINE_QUANTITY_LIMIT: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROP_VALUE_6: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIX_AND_MATCH_DISCOUNT_TYPE: EnumField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      RetailDealPriceDiscountPctBase,
      true,
      true
    >;
    MIX_AND_MATCH_NUMBER_OF_ITEMS_NEEDED: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROP_VALUE_2: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ECO_RES_STYLE_NAME: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT_OR_VALUE: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ECO_RES_SIZE_NAME: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DLV_MODE_CODE: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATALOG_ID: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_DISCOUNT_METHOD: EnumField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      RetailDiscountOfferLineDiscMethodBase,
      true,
      true
    >;
    OFFER_PRICE_INCL_TAX_N_1: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ECO_RES_CONFIGURATION_NAME: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      RetailDiscountLineIncludeExcludeTypeBase,
      true,
      true
    >;
    PROP_VALUE_9: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISCOUNT_APPLYING_LINE: EnumField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROP_VALUE_5: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_8: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ECO_RES_COLOR_NAME: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_1: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_4: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_PRICE: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MIX_AND_MATCH_LINE_GROUP: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_DISCOUNT_METHOD_N_1: EnumField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      RetailOfferLineDiscountMethodBaseN1,
      true,
      true
    >;
    PROP_VALUE_0: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_APPLYING_LINE_DISCOUNT_METHOD: EnumField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      RetailDiscountThresholdLineDiscountMethodBase,
      true,
      true
    >;
    OFFER_PRICE_N_1: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_TIER_AMOUNT: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROP_VALUE_7: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VARIANT_DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailDiscountLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailDiscountLinesV2<DeSerializers>>;
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
         * Static representation of the {@link propValue3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_3: fieldBuilder.buildEdmTypeField(
          'PropValue3',
          'Edm.String',
          true
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
         * Static representation of the {@link propValue6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_6: fieldBuilder.buildEdmTypeField(
          'PropValue6',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link mixAndMatchNumberOfItemsNeeded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_NUMBER_OF_ITEMS_NEEDED: fieldBuilder.buildEdmTypeField(
          'MixAndMatchNumberOfItemsNeeded',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link propValue2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_2: fieldBuilder.buildEdmTypeField(
          'PropValue2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ecoResStyleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_STYLE_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResStyleName',
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
         * Static representation of the {@link ecoResSizeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_SIZE_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResSizeName',
          'Edm.String',
          true
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
         * Static representation of the {@link unitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure_Symbol',
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
        /**
         * Static representation of the {@link dlvModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DlvMode_Code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link catalogId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_ID: fieldBuilder.buildEdmTypeField(
          'CatalogId',
          'Edm.String',
          true
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
         * Static representation of the {@link offerPriceInclTaxN1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_PRICE_INCL_TAX_N_1: fieldBuilder.buildEdmTypeField(
          'OfferPriceInclTaxN1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ecoResConfigurationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_CONFIGURATION_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResConfigurationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationId',
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
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          RetailDiscountLineIncludeExcludeTypeBase,
          true
        ),
        /**
         * Static representation of the {@link propValue9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_9: fieldBuilder.buildEdmTypeField(
          'PropValue9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link propValue5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_5: fieldBuilder.buildEdmTypeField(
          'PropValue5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_8: fieldBuilder.buildEdmTypeField(
          'PropValue8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ecoResColorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_COLOR_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResColorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_1: fieldBuilder.buildEdmTypeField(
          'PropValue1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_4: fieldBuilder.buildEdmTypeField(
          'PropValue4',
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
         * Static representation of the {@link mixAndMatchLineGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_LINE_GROUP: fieldBuilder.buildEdmTypeField(
          'MixAndMatchLineGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link propValue0} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_0: fieldBuilder.buildEdmTypeField(
          'PropValue0',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link offerPriceN1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_PRICE_N_1: fieldBuilder.buildEdmTypeField(
          'OfferPriceN1',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link thresholdTierAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_TIER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ThresholdTierAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link propValue7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_7: fieldBuilder.buildEdmTypeField(
          'PropValue7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVariantDisplayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductVariant_DisplayProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDiscountLinesV2)
      };
    }

    return this._schema;
  }
}
