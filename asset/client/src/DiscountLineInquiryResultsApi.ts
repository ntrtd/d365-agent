/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountLineInquiryResults } from './DiscountLineInquiryResults';
import { DiscountLineInquiryResultsRequestBuilder } from './DiscountLineInquiryResultsRequestBuilder';
import { GupGroupAll } from './GupGroupAll';
import { NoYes } from './NoYes';
import { RetailOfferLineDiscountMethodBaseN1 } from './RetailOfferLineDiscountMethodBaseN1';
import { RetailDiscountLineIncludeExcludeTypeBase } from './RetailDiscountLineIncludeExcludeTypeBase';
import { RetailDealPriceDiscountPctBase } from './RetailDealPriceDiscountPctBase';
import { RetailDiscountOfferLineDiscMethodBase } from './RetailDiscountOfferLineDiscMethodBase';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';
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
export class DiscountLineInquiryResultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DiscountLineInquiryResults<DeSerializersT>, DeSerializersT>
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
  ): DiscountLineInquiryResultsApi<DeSerializersT> {
    return new DiscountLineInquiryResultsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DiscountLineInquiryResults;

  requestBuilder(): DiscountLineInquiryResultsRequestBuilder<DeSerializersT> {
    return new DiscountLineInquiryResultsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscountLineInquiryResults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscountLineInquiryResults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscountLineInquiryResults<DeSerializersT>,
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
    typeof DiscountLineInquiryResults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscountLineInquiryResults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_PRICING_GROUP_CODE: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      GupGroupAll,
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_12: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_PRICE_N_1: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_APPLIES_TO_ALL: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_STATUS: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_PRICE: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OWNER: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISCOUNT_APPLYING_LINE: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_ITEM_GROUP: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MIX_AND_MATCH_LINE_GROUP: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAST_QUANTITY: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFER_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_10: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_7: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_6: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_15: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_5: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_4: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_3: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_DISCOUNT_METHOD_N_1: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      RetailOfferLineDiscountMethodBaseN1,
      true,
      true
    >;
    LINE_2: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_1: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_NUMBER: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_TIER_AMOUNT: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEAST_AMOUNT: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_TYPE: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      RetailDiscountLineIncludeExcludeTypeBase,
      true,
      true
    >;
    LINE_13: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIX_AND_MATCH_DISCOUNT_TYPE: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      RetailDealPriceDiscountPctBase,
      true,
      true
    >;
    OFFER_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_9: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIX_AND_MATCH_NUMBER_OF_ITEMS_NEEDED: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_8: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT_OR_VALUE: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_DISCOUNT_METHOD: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      RetailDiscountOfferLineDiscMethodBase,
      true,
      true
    >;
    CONFIGURATION: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_LIMIT: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LICENSE_PLATE: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISCOUNT_CODE_REQUIRED: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATUS: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      RetailDisabledEnabled,
      true,
      true
    >;
    SITE: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMBINATION_LINE_STRUCTURE: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_PRICE_INCL_TAX_N_1: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STYLE: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_LINE_DISCOUNT_METHOD: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      RetailDiscountThresholdLineDiscountMethodBase,
      true,
      true
    >;
    LINE_14: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_PRICE_INCL_TAX: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_MANDATORY: EnumField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_11: OrderableEdmTypeField<
      DiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DiscountLineInquiryResults<DeSerializers>>;
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
         * Static representation of the {@link linePricingGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRICING_GROUP_CODE: fieldBuilder.buildEnumField(
          'LinePricingGroupCode',
          GupGroupAll,
          true
        ),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.String', true),
        /**
         * Static representation of the {@link line12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_12: fieldBuilder.buildEdmTypeField('Line12', 'Edm.String', true),
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
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link color} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR: fieldBuilder.buildEdmTypeField('Color', 'Edm.String', true),
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
         * Static representation of the {@link unitAppliesToAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_APPLIES_TO_ALL: fieldBuilder.buildEnumField(
          'UnitAppliesToAll',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS: fieldBuilder.buildEdmTypeField(
          'InventoryStatus',
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
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEdmTypeField('Owner', 'Edm.String', true),
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
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'FreeItemGroup',
          'Edm.Int32',
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
         * Static representation of the {@link leastQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAST_QUANTITY: fieldBuilder.buildEdmTypeField(
          'LeastQuantity',
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
         * Static representation of the {@link unitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasureSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link line10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_10: fieldBuilder.buildEdmTypeField('Line10', 'Edm.String', true),
        /**
         * Static representation of the {@link line7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_7: fieldBuilder.buildEdmTypeField('Line7', 'Edm.String', true),
        /**
         * Static representation of the {@link line6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_6: fieldBuilder.buildEdmTypeField('Line6', 'Edm.String', true),
        /**
         * Static representation of the {@link line15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_15: fieldBuilder.buildEdmTypeField('Line15', 'Edm.String', true),
        /**
         * Static representation of the {@link line5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_5: fieldBuilder.buildEdmTypeField('Line5', 'Edm.String', true),
        /**
         * Static representation of the {@link line4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_4: fieldBuilder.buildEdmTypeField('Line4', 'Edm.String', true),
        /**
         * Static representation of the {@link line3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_3: fieldBuilder.buildEdmTypeField('Line3', 'Edm.String', true),
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
         * Static representation of the {@link line2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_2: fieldBuilder.buildEdmTypeField('Line2', 'Edm.String', true),
        /**
         * Static representation of the {@link line1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_1: fieldBuilder.buildEdmTypeField('Line1', 'Edm.String', true),
        /**
         * Static representation of the {@link batchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'BatchNumber',
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
         * Static representation of the {@link leastAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LeastAmount',
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
         * Static representation of the {@link line13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_13: fieldBuilder.buildEdmTypeField('Line13', 'Edm.String', true),
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
         * Static representation of the {@link offerDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OfferDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link line9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_9: fieldBuilder.buildEdmTypeField('Line9', 'Edm.String', true),
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
         * Static representation of the {@link line8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_8: fieldBuilder.buildEdmTypeField('Line8', 'Edm.String', true),
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link configuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIGURATION: fieldBuilder.buildEdmTypeField(
          'Configuration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantityLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_LIMIT: fieldBuilder.buildEdmTypeField(
          'QuantityLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link licensePlate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE: fieldBuilder.buildEdmTypeField(
          'LicensePlate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDiscountCodeRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISCOUNT_CODE_REQUIRED: fieldBuilder.buildEnumField(
          'IsDiscountCodeRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailDisabledEnabled,
          true
        ),
        /**
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
        /**
         * Static representation of the {@link combinationLineStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINATION_LINE_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'CombinationLineStructure',
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
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link style} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE: fieldBuilder.buildEdmTypeField('Style', 'Edm.String', true),
        /**
         * Static representation of the {@link thresholdLineDiscountMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_LINE_DISCOUNT_METHOD: fieldBuilder.buildEnumField(
          'ThresholdLineDiscountMethod',
          RetailDiscountThresholdLineDiscountMethodBase,
          true
        ),
        /**
         * Static representation of the {@link line14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_14: fieldBuilder.buildEdmTypeField('Line14', 'Edm.String', true),
        /**
         * Static representation of the {@link priceAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'PriceAttributeGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offerPriceInclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_PRICE_INCL_TAX: fieldBuilder.buildEdmTypeField(
          'OfferPriceInclTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MANDATORY: fieldBuilder.buildEnumField('IsMandatory', NoYes, true),
        /**
         * Static representation of the {@link line11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_11: fieldBuilder.buildEdmTypeField('Line11', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscountLineInquiryResults)
      };
    }

    return this._schema;
  }
}
