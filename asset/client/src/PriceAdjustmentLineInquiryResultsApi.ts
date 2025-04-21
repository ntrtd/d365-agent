/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceAdjustmentLineInquiryResults } from './PriceAdjustmentLineInquiryResults';
import { PriceAdjustmentLineInquiryResultsRequestBuilder } from './PriceAdjustmentLineInquiryResultsRequestBuilder';
import { RetailOfferLineDiscountMethodBaseN1 } from './RetailOfferLineDiscountMethodBaseN1';
import { RetailDiscountLineIncludeExcludeTypeBase } from './RetailDiscountLineIncludeExcludeTypeBase';
import { GupGroupAll } from './GupGroupAll';
import { NoYes } from './NoYes';
import { GupPriceTermCalculateMethod } from './GupPriceTermCalculateMethod';
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
export class PriceAdjustmentLineInquiryResultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PriceAdjustmentLineInquiryResults<DeSerializersT>, DeSerializersT>
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
  ): PriceAdjustmentLineInquiryResultsApi<DeSerializersT> {
    return new PriceAdjustmentLineInquiryResultsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PriceAdjustmentLineInquiryResults;

  requestBuilder(): PriceAdjustmentLineInquiryResultsRequestBuilder<DeSerializersT> {
    return new PriceAdjustmentLineInquiryResultsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PriceAdjustmentLineInquiryResults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PriceAdjustmentLineInquiryResults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PriceAdjustmentLineInquiryResults<DeSerializersT>,
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
    typeof PriceAdjustmentLineInquiryResults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PriceAdjustmentLineInquiryResults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNTED_SALE_PRICE_INCLUDING_TAX: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STYLE: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_11: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMBINATION_LINE_STRUCTURE: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_NUMBER: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_METHOD_N_1: EnumField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      RetailOfferLineDiscountMethodBaseN1,
      true,
      true
    >;
    LINE_13: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_LIMIT: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_15: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_ITEM_GROUP: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_TYPE: EnumField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      RetailDiscountLineIncludeExcludeTypeBase,
      true,
      true
    >;
    DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYMBOL: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_7: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_6: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_5: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_4: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_3: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_2: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_1: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PRICE_N_1: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_9: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_8: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIGURATION: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PRICE: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_10: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT_OR_VALUE: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_PRICING_GROUP_CODE: EnumField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      GupGroupAll,
      true,
      true
    >;
    SITE: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_APPLIES_TO_ALL: EnumField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_12: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_METHOD: EnumField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      GupPriceTermCalculateMethod,
      true,
      true
    >;
    LINE_14: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNER: OrderableEdmTypeField<
      PriceAdjustmentLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PriceAdjustmentLineInquiryResults<DeSerializers>>;
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
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
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
         * Static representation of the {@link discountedSalePriceIncludingTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNTED_SALE_PRICE_INCLUDING_TAX: fieldBuilder.buildEdmTypeField(
          'DiscountedSalePriceIncludingTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link style} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE: fieldBuilder.buildEdmTypeField('Style', 'Edm.String', true),
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
         * Static representation of the {@link line11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_11: fieldBuilder.buildEdmTypeField('Line11', 'Edm.String', true),
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
         * Static representation of the {@link combinationLineStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINATION_LINE_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'CombinationLineStructure',
          'Edm.String',
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
         * Static representation of the {@link batchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'BatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountMethodN1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_METHOD_N_1: fieldBuilder.buildEnumField(
          'DiscountMethodN1',
          RetailOfferLineDiscountMethodBaseN1,
          true
        ),
        /**
         * Static representation of the {@link line13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_13: fieldBuilder.buildEdmTypeField('Line13', 'Edm.String', true),
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
         * Static representation of the {@link line15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_15: fieldBuilder.buildEdmTypeField('Line15', 'Edm.String', true),
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
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          RetailDiscountLineIncludeExcludeTypeBase,
          true
        ),
        /**
         * Static representation of the {@link discountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link symbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYMBOL: fieldBuilder.buildEdmTypeField('Symbol', 'Edm.String', true),
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
         * Static representation of the {@link discountPriceN1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PRICE_N_1: fieldBuilder.buildEdmTypeField(
          'DiscountPriceN1',
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
         * Static representation of the {@link line9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_9: fieldBuilder.buildEdmTypeField('Line9', 'Edm.String', true),
        /**
         * Static representation of the {@link line8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_8: fieldBuilder.buildEdmTypeField('Line8', 'Edm.String', true),
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
         * Static representation of the {@link discountPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PRICE: fieldBuilder.buildEdmTypeField(
          'DiscountPrice',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link line10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_10: fieldBuilder.buildEdmTypeField('Line10', 'Edm.String', true),
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
         * Static representation of the {@link linePricingGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRICING_GROUP_CODE: fieldBuilder.buildEnumField(
          'LinePricingGroupCode',
          GupGroupAll,
          true
        ),
        /**
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
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
         * Static representation of the {@link calculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'CalculationMethod',
          GupPriceTermCalculateMethod,
          true
        ),
        /**
         * Static representation of the {@link line14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_14: fieldBuilder.buildEdmTypeField('Line14', 'Edm.String', true),
        /**
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEdmTypeField('Owner', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PriceAdjustmentLineInquiryResults)
      };
    }

    return this._schema;
  }
}
