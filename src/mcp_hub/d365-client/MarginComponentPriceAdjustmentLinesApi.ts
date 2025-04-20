/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MarginComponentPriceAdjustmentLines } from './MarginComponentPriceAdjustmentLines';
import { MarginComponentPriceAdjustmentLinesRequestBuilder } from './MarginComponentPriceAdjustmentLinesRequestBuilder';
import { GupPriceTermCalculateMethod } from './GupPriceTermCalculateMethod';
import { GupGroupAll } from './GupGroupAll';
import { RetailDiscountLineIncludeExcludeTypeBase } from './RetailDiscountLineIncludeExcludeTypeBase';
import { NoYes } from './NoYes';
import { GupPricingRuleExclusionType } from './GupPricingRuleExclusionType';
import { RetailOfferLineDiscountMethodBaseN1 } from './RetailOfferLineDiscountMethodBaseN1';
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
export class MarginComponentPriceAdjustmentLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MarginComponentPriceAdjustmentLines<DeSerializersT>,
      DeSerializersT
    >
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
  ): MarginComponentPriceAdjustmentLinesApi<DeSerializersT> {
    return new MarginComponentPriceAdjustmentLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MarginComponentPriceAdjustmentLines;

  requestBuilder(): MarginComponentPriceAdjustmentLinesRequestBuilder<DeSerializersT> {
    return new MarginComponentPriceAdjustmentLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MarginComponentPriceAdjustmentLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MarginComponentPriceAdjustmentLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MarginComponentPriceAdjustmentLines<DeSerializersT>,
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
    typeof MarginComponentPriceAdjustmentLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MarginComponentPriceAdjustmentLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATION_METHOD: EnumField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      GupPriceTermCalculateMethod,
      true,
      true
    >;
    COLOR: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT_OR_VALUE: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_PRICE_N_1: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_13: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYMBOL: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_7: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_6: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_5: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_4: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITE: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_3: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_2: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_1: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_12: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_9: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_8: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_TYPE: EnumField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      GupGroupAll,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      RetailDiscountLineIncludeExcludeTypeBase,
      true,
      true
    >;
    LINE_15: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNER: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PRICE: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_14: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_11: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIGURATION: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_APPLIES_TO_ALL: EnumField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMBINATION_LINE_STRUCTURE: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_10: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STYLE: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_EXCLUSION_TYPE: EnumField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      GupPricingRuleExclusionType,
      true,
      true
    >;
    DISCOUNTED_SALE_PRICE_INCLUDING_TAX: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_METHOD_N_1: EnumField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      RetailOfferLineDiscountMethodBaseN1,
      true,
      true
    >;
    LICENSE_PLATE: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_EXCLUSION: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_NUMBER: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<MarginComponentPriceAdjustmentLines<DeSerializers>>;
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
         * Static representation of the {@link calculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'CalculationMethod',
          GupPriceTermCalculateMethod,
          true
        ),
        /**
         * Static representation of the {@link color} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR: fieldBuilder.buildEdmTypeField('Color', 'Edm.String', true),
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
         * Static representation of the {@link priceAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'PriceAttributeGroupName',
          'Edm.String',
          true
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
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
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
         * Static representation of the {@link discountPriceN1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PRICE_N_1: fieldBuilder.buildEdmTypeField(
          'DiscountPriceN1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link line13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_13: fieldBuilder.buildEdmTypeField('Line13', 'Edm.String', true),
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
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
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
         * Static representation of the {@link line12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_12: fieldBuilder.buildEdmTypeField('Line12', 'Edm.String', true),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.String', true),
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
         * Static representation of the {@link priceAttributeGroupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_TYPE: fieldBuilder.buildEnumField(
          'PriceAttributeGroupType',
          GupGroupAll,
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
         * Static representation of the {@link line15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_15: fieldBuilder.buildEdmTypeField('Line15', 'Edm.String', true),
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
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEdmTypeField('Owner', 'Edm.String', true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link line14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_14: fieldBuilder.buildEdmTypeField('Line14', 'Edm.String', true),
        /**
         * Static representation of the {@link line11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_11: fieldBuilder.buildEdmTypeField('Line11', 'Edm.String', true),
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
         * Static representation of the {@link inventoryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS: fieldBuilder.buildEdmTypeField(
          'InventoryStatus',
          'Edm.String',
          true
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
         * Static representation of the {@link combinationLineStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINATION_LINE_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'CombinationLineStructure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link line10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_10: fieldBuilder.buildEdmTypeField('Line10', 'Edm.String', true),
        /**
         * Static representation of the {@link style} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE: fieldBuilder.buildEdmTypeField('Style', 'Edm.String', true),
        /**
         * Static representation of the {@link lineExclusionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_EXCLUSION_TYPE: fieldBuilder.buildEnumField(
          'LineExclusionType',
          GupPricingRuleExclusionType,
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
         * Static representation of the {@link discountMethodN1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_METHOD_N_1: fieldBuilder.buildEnumField(
          'DiscountMethodN1',
          RetailOfferLineDiscountMethodBaseN1,
          true
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
         * Static representation of the {@link lineExclusion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_EXCLUSION: fieldBuilder.buildEdmTypeField(
          'LineExclusion',
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
         * Static representation of the {@link discountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DiscountPercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MarginComponentPriceAdjustmentLines)
      };
    }

    return this._schema;
  }
}
