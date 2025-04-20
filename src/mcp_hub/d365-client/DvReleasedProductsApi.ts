/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DvReleasedProducts } from './DvReleasedProducts';
import { DvReleasedProductsRequestBuilder } from './DvReleasedProductsRequestBuilder';
import { ProductSpecificOrderSettingsV3Api } from './ProductSpecificOrderSettingsV3Api';
import { ProductSpecificOrderSettingsV2Api } from './ProductSpecificOrderSettingsV2Api';
import { ProductDefaultOrderSettingsApi } from './ProductDefaultOrderSettingsApi';
import { TrackingDimensionGroupsApi } from './TrackingDimensionGroupsApi';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { VendorsV2Api } from './VendorsV2Api';
import { ProductsV2Api } from './ProductsV2Api';
import { AllProductsApi } from './AllProductsApi';
import { DvReleasedDistinctProductsApi } from './DvReleasedDistinctProductsApi';
import { NoYes } from './NoYes';
import { ScaleIndicatorBr } from './ScaleIndicatorBr';
import { PdsPotencyAttribRecordingEnum } from './PdsPotencyAttribRecordingEnum';
import { WhsAllowMaterialOverPick } from './WhsAllowMaterialOverPick';
import { RetailQtyKeyingRequirement } from './RetailQtyKeyingRequirement';
import { Abc } from './Abc';
import { EcoResFieldServiceProductType } from './EcoResFieldServiceProductType';
import { EcoResProductType } from './EcoResProductType';
import { RetailPriceKeyingRequirement } from './RetailPriceKeyingRequirement';
import { SalesPriceModel } from './SalesPriceModel';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DvReleasedProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DvReleasedProducts<DeSerializersT>, DeSerializersT>
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
  ): DvReleasedProductsApi<DeSerializersT> {
    return new DvReleasedProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: OneToManyLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: OneToManyLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productDefaultOrderSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DEFAULT_ORDER_SETTINGS: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductDefaultOrderSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link trackingDimensionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRACKING_DIMENSION_GROUP: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      TrackingDimensionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeReleasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_RELEASED_PRODUCT_V_2: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToManyLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bomUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BOM_UNIT_OF_MEASURE: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link primaryVendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_VENDOR_V_2: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_V_2: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_DISTINCT_PRODUCTS: OneToManyLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      DvReleasedDistinctProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductSpecificOrderSettingsV3Api<DeSerializersT>,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>,
      ProductDefaultOrderSettingsApi<DeSerializersT>,
      TrackingDimensionGroupsApi<DeSerializersT>,
      DvReleasedProductsApi<DeSerializersT>,
      DvReleasedProductsApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      ProductsV2Api<DeSerializersT>,
      AllProductsApi<DeSerializersT>,
      DvReleasedDistinctProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: new OneToManyLink(
        'ProductSpecificOrderSettingsV3',
        this,
        linkedApis[0]
      ),
      PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: new OneToManyLink(
        'ProductSpecificOrderSettingsV2',
        this,
        linkedApis[1]
      ),
      PRODUCT_DEFAULT_ORDER_SETTINGS: new OneToOneLink(
        'ProductDefaultOrderSettings',
        this,
        linkedApis[2]
      ),
      TRACKING_DIMENSION_GROUP: new OneToOneLink(
        'TrackingDimensionGroup',
        this,
        linkedApis[3]
      ),
      ALTERNATIVE_RELEASED_PRODUCT_V_2: new OneToOneLink(
        'AlternativeReleasedProductV2',
        this,
        linkedApis[4]
      ),
      DV_RELEASED_PRODUCTS: new OneToManyLink(
        'DVReleasedProducts',
        this,
        linkedApis[5]
      ),
      BOM_UNIT_OF_MEASURE: new OneToOneLink(
        'BOMUnitOfMeasure',
        this,
        linkedApis[6]
      ),
      PRIMARY_VENDOR_V_2: new OneToOneLink(
        'PrimaryVendorV2',
        this,
        linkedApis[7]
      ),
      PRODUCT_V_2: new OneToOneLink('ProductV2', this, linkedApis[8]),
      EVERY_PRODUCT: new OneToOneLink('EveryProduct', this, linkedApis[9]),
      DV_RELEASED_DISTINCT_PRODUCTS: new OneToManyLink(
        'DVReleasedDistinctProducts',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = DvReleasedProducts;

  requestBuilder(): DvReleasedProductsRequestBuilder<DeSerializersT> {
    return new DvReleasedProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DvReleasedProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DvReleasedProducts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DvReleasedProducts<DeSerializersT>,
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
    typeof DvReleasedProducts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DvReleasedProducts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSFER_ORDER_OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_WIDTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PURCHASE_PRICE_AUTOMATICALLY_UPDATED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSFER_ORDER_UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_TOTAL_PURCHASE_DISCOUNT_CALCULATION_INCLUDE_PRODUCT: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_VARIANT_SHELF_LABELS_PRINTING_ENABLED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NECESSARY_PRODUCTION_WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SELF_CHECKOUT_REGISTRATION_BLOCKED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNIT_COST_DATE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_INVENTORY_ISSUE_AUTOMATICALLY_REPORT_AS_FINISHED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_VOLUME: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TARE_PRODUCT_WEIGHT: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PHANTOM: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VARIABLE_SCRAP_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_UNIT_COST_INCLUDING_CHARGES: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_PICKING_WORKBENCH_APPLY_BOXING_LOGIC: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ZERO_PRICE_POS_REGISTRATION_ALLOWED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_CHARGE_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SCALE_PRODUCT: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STORAGE_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHELF_ADVICE_PERIOD_DAYS: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MUST_KEY_IN_COMMENT_AT_POS_REGISTER: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_UNIT_COST_AUTOMATICALLY_UPDATED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POTENCY_BASE_ATTIBUTE_TARGET_VALUE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_RECEIVING_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_CONSUMPTION_DENSITY_CONVERSION_FACTOR: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_PRICING_PRECISION: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UNIT_COST_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_RESTRICTED_FOR_COUPONS: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCALE_INDICATOR: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      ScaleIndicatorBr,
      true,
      true
    >;
    SELL_START_DATE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSTANT_SCRAP_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKING_DUTY_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SALES_PRICE_INCLUDING_CHARGES: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_TOTAL_SALES_DISCOUNT_CALCULATION_INCLUDE_PRODUCT: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POTENCY_BASE_ATTRIBUTE_VALUE_ENTRY_EVENT: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      PdsPotencyAttribRecordingEnum,
      true,
      true
    >;
    SALES_CHARGES_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE_CALCULATION_CONTRIBUTION_RATIO: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SALES_PRICE_ADJUSTMENT_ALLOWED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_CALCULATION_CHARGES_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GROSS_PRODUCT_HEIGHT: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POS_REGISTRATION_PLANNED_BLOCKED_DATE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_PRICE_DATE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_INTERCOMPANY_PURCHASE_USAGE_BLOCKED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHELF_LIFE_PERIOD_DAYS: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCTION_CONSUMPTION_HEIGHT_CONVERSION_FACTOR: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOM_UNIT_SYMBOL: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_PRICE_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_PRICE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DISCOUNT_POS_REGISTRATION_PROHIBITED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRACKING_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_SALES_PRICE_CHARGES: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_ITEM_NUMBER: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PURCHASE_PRICE_INCLUDING_CHARGES: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SHIP_ALONE_ENABLED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RAW_MATERIAL_PICKING_PRINCIPLE: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      WhsAllowMaterialOverPick,
      true,
      true
    >;
    IS_STOCKED_PRODUCT: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIXED_PURCHASE_PRICE_CHARGES: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_DATE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_POS_REGISTRATION_QUANTITY_NEGATIVE: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_PICK_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_CHARGES_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_INSTALLMENT_ELIGIBLE: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    KEY_IN_QUANTITY_REQUIREMENTS_AT_POS_REGISTER: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      RetailQtyKeyingRequirement,
      true,
      true
    >;
    IS_INTERCOMPANY_SALES_USAGE_BLOCKED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    YIELD_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SALES_WITHHOLDING_TAX_CALCULATED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BEST_BEFORE_PERIOD_DAYS: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_MANUAL_DISCOUNT_POS_REGISTRATION_PROHIBITED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROSS_DEPTH: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CATCH_WEIGHT_PRODUCT: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIXED_COST_CHARGES: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARRYING_COST_ABC_CODE: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_POS_REGISTRATION_BLOCKED: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POS_REGISTRATION_BLOCKED_DATE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_EXEMPT_FROM_AUTOMATIC_NOTIFICATION_AND_CANCELLATION: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIELD_SERVICE_PRODUCT_TYPE: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      EcoResFieldServiceProductType,
      true,
      true
    >;
    COMPARISON_PRICE_BASE_UNIT_SYMBOL: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_WORK_CENTER_PICKING_ALLOW_NEGATIVE_INVENTORY: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    KEY_IN_PRICE_REQUIREMENTS_AT_POS_REGISTER: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      RetailPriceKeyingRequirement,
      true,
      true
    >;
    APPROXIMATE_SALES_TAX_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POS_REGISTRATION_ACTIVATION_DATE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WILL_INVENTORY_RECEIPT_IGNORE_FLUSHING_PRINCIPLE: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_PRODUCT_WEIGHT: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_CHARGES_QUANTITY: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE_CALCULATION_MODEL: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      SalesPriceModel,
      true,
      true
    >;
    SALES_OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICING_PRECISION: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MARGIN_ABC_CODE: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    CATCH_WEIGHT_UNIT_SYMBOL: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_MOBILE_DEVICE_DESCRIPTION_LINE_1: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_MOBILE_DEVICE_DESCRIPTION_LINE_2: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_DEPTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_UNIT_COST_PRODUCT_VARIANT_SPECIFIC: EnumField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROSS_PRODUCT_WIDTH: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_START_DATE: OrderableEdmTypeField<
      DvReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: OneToManyLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: OneToManyLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productDefaultOrderSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DEFAULT_ORDER_SETTINGS: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductDefaultOrderSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link trackingDimensionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRACKING_DIMENSION_GROUP: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      TrackingDimensionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeReleasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_RELEASED_PRODUCT_V_2: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToManyLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bomUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BOM_UNIT_OF_MEASURE: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link primaryVendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_VENDOR_V_2: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_V_2: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_DISTINCT_PRODUCTS: OneToManyLink<
      DvReleasedProducts<DeSerializersT>,
      DeSerializersT,
      DvReleasedDistinctProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DvReleasedProducts<DeSerializers>>;
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transferOrderOverdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_OVERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TransferOrderOverdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'SalesUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionConsumptionWidthConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_WIDTH_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionWidthConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link isPurchasePriceAutomaticallyUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_PRICE_AUTOMATICALLY_UPDATED: fieldBuilder.buildEnumField(
          'IsPurchasePriceAutomaticallyUpdated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transferOrderUnderdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_UNDERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TransferOrderUnderdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link willTotalPurchaseDiscountCalculationIncludeProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_TOTAL_PURCHASE_DISCOUNT_CALCULATION_INCLUDE_PRODUCT:
          fieldBuilder.buildEnumField(
            'WillTotalPurchaseDiscountCalculationIncludeProduct',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isVariantShelfLabelsPrintingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VARIANT_SHELF_LABELS_PRINTING_ENABLED: fieldBuilder.buildEnumField(
          'IsVariantShelfLabelsPrintingEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'ProductDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link necessaryProductionWorkingTimeSchedulingPropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NECESSARY_PRODUCTION_WORKING_TIME_SCHEDULING_PROPERTY_ID:
          fieldBuilder.buildEdmTypeField(
            'NecessaryProductionWorkingTimeSchedulingPropertyId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isSelfCheckoutRegistrationBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SELF_CHECKOUT_REGISTRATION_BLOCKED: fieldBuilder.buildEnumField(
          'IsSelfCheckoutRegistrationBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link unitCostDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST_DATE: fieldBuilder.buildEdmTypeField(
          'UnitCostDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchaseUnderdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNDERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'PurchaseUnderdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link willInventoryIssueAutomaticallyReportAsFinished} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INVENTORY_ISSUE_AUTOMATICALLY_REPORT_AS_FINISHED:
          fieldBuilder.buildEnumField(
            'WillInventoryIssueAutomaticallyReportAsFinished',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link productVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VOLUME: fieldBuilder.buildEdmTypeField(
          'ProductVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tareProductWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARE_PRODUCT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'TareProductWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPhantom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PHANTOM: fieldBuilder.buildEnumField('IsPhantom', NoYes, true),
        /**
         * Static representation of the {@link variableScrapPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_SCRAP_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'VariableScrapPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isUnitCostIncludingCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_UNIT_COST_INCLUDING_CHARGES: fieldBuilder.buildEnumField(
          'IsUnitCostIncludingCharges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link minimumCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link willPickingWorkbenchApplyBoxingLogic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PICKING_WORKBENCH_APPLY_BOXING_LOGIC: fieldBuilder.buildEnumField(
          'WillPickingWorkbenchApplyBoxingLogic',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isZeroPricePosRegistrationAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ZERO_PRICE_POS_REGISTRATION_ALLOWED: fieldBuilder.buildEnumField(
          'IsZeroPricePOSRegistrationAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatChargePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_CHARGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'IntrastatChargePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isScaleProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SCALE_PRODUCT: fieldBuilder.buildEnumField(
          'IsScaleProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link storageDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'StorageDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shelfAdvicePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_ADVICE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'ShelfAdvicePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mustKeyInCommentAtPosRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUST_KEY_IN_COMMENT_AT_POS_REGISTER: fieldBuilder.buildEnumField(
          'MustKeyInCommentAtPOSRegister',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isUnitCostAutomaticallyUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_UNIT_COST_AUTOMATICALLY_UPDATED: fieldBuilder.buildEnumField(
          'IsUnitCostAutomaticallyUpdated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link potencyBaseAttibuteTargetValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POTENCY_BASE_ATTIBUTE_TARGET_VALUE: fieldBuilder.buildEdmTypeField(
          'PotencyBaseAttibuteTargetValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultReceivingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RECEIVING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'DefaultReceivingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productionConsumptionDensityConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_DENSITY_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionDensityConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link purchasePricingPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICING_PRECISION: fieldBuilder.buildEdmTypeField(
          'PurchasePricingPrecision',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link unitCostQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST_QUANTITY: fieldBuilder.buildEdmTypeField(
          'UnitCostQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isRestrictedForCoupons} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RESTRICTED_FOR_COUPONS: fieldBuilder.buildEnumField(
          'IsRestrictedForCoupons',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scaleIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCALE_INDICATOR: fieldBuilder.buildEnumField(
          'ScaleIndicator',
          ScaleIndicatorBr,
          true
        ),
        /**
         * Static representation of the {@link sellStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELL_START_DATE: fieldBuilder.buildEdmTypeField(
          'SellStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link constantScrapQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTANT_SCRAP_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConstantScrapQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link packingDutyQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_DUTY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PackingDutyQuantity',
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
         * Static representation of the {@link isSalesPriceIncludingCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_PRICE_INCLUDING_CHARGES: fieldBuilder.buildEnumField(
          'IsSalesPriceIncludingCharges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willTotalSalesDiscountCalculationIncludeProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_TOTAL_SALES_DISCOUNT_CALCULATION_INCLUDE_PRODUCT:
          fieldBuilder.buildEnumField(
            'WillTotalSalesDiscountCalculationIncludeProduct',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link potencyBaseAttributeValueEntryEvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POTENCY_BASE_ATTRIBUTE_VALUE_ENTRY_EVENT: fieldBuilder.buildEnumField(
          'PotencyBaseAttributeValueEntryEvent',
          PdsPotencyAttribRecordingEnum,
          true
        ),
        /**
         * Static representation of the {@link salesChargesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CHARGES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesChargesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesPriceCalculationContributionRatio} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_CALCULATION_CONTRIBUTION_RATIO:
          fieldBuilder.buildEdmTypeField(
            'SalesPriceCalculationContributionRatio',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link isSalesPriceAdjustmentAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_PRICE_ADJUSTMENT_ALLOWED: fieldBuilder.buildEnumField(
          'IsSalesPriceAdjustmentAllowed',
          NoYes,
          true
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
        /**
         * Static representation of the {@link salesPriceCalculationChargesPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_CALCULATION_CHARGES_PERCENTAGE:
          fieldBuilder.buildEdmTypeField(
            'SalesPriceCalculationChargesPercentage',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link grossProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'GrossProductHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link posRegistrationPlannedBlockedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_REGISTRATION_PLANNED_BLOCKED_DATE: fieldBuilder.buildEdmTypeField(
          'POSRegistrationPlannedBlockedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchasePriceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_DATE: fieldBuilder.buildEdmTypeField(
          'PurchasePriceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isIntercompanyPurchaseUsageBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTERCOMPANY_PURCHASE_USAGE_BLOCKED: fieldBuilder.buildEnumField(
          'IsIntercompanyPurchaseUsageBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shelfLifePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_LIFE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'ShelfLifePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productionConsumptionHeightConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_HEIGHT_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionHeightConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link bomUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BOMUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchasePriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchasePriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchasePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE: fieldBuilder.buildEdmTypeField(
          'PurchasePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isDiscountPosRegistrationProhibited} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISCOUNT_POS_REGISTRATION_PROHIBITED: fieldBuilder.buildEnumField(
          'IsDiscountPOSRegistrationProhibited',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseOverdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_OVERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'PurchaseOverdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link trackingDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'TrackingDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedSalesPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_SALES_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedSalesPriceCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'AlternativeItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPurchasePriceIncludingCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_PRICE_INCLUDING_CHARGES: fieldBuilder.buildEnumField(
          'IsPurchasePriceIncludingCharges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isShipAloneEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHIP_ALONE_ENABLED: fieldBuilder.buildEnumField(
          'IsShipAloneEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rawMaterialPickingPrinciple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RAW_MATERIAL_PICKING_PRINCIPLE: fieldBuilder.buildEnumField(
          'RawMaterialPickingPrinciple',
          WhsAllowMaterialOverPick,
          true
        ),
        /**
         * Static representation of the {@link isStockedProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STOCKED_PRODUCT: fieldBuilder.buildEnumField(
          'IsStockedProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fixedPurchasePriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PURCHASE_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedPurchasePriceCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPriceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_DATE: fieldBuilder.buildEdmTypeField(
          'SalesPriceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isPosRegistrationQuantityNegative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POS_REGISTRATION_QUANTITY_NEGATIVE: fieldBuilder.buildEnumField(
          'IsPOSRegistrationQuantityNegative',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumPickQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PICK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumPickQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseChargesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CHARGES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchaseChargesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link primaryVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesUnderdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNDERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SalesUnderdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isInstallmentEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INSTALLMENT_ELIGIBLE: fieldBuilder.buildEnumField(
          'IsInstallmentEligible',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link keyInQuantityRequirementsAtPosRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_IN_QUANTITY_REQUIREMENTS_AT_POS_REGISTER:
          fieldBuilder.buildEnumField(
            'KeyInQuantityRequirementsAtPOSRegister',
            RetailQtyKeyingRequirement,
            true
          ),
        /**
         * Static representation of the {@link isIntercompanySalesUsageBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTERCOMPANY_SALES_USAGE_BLOCKED: fieldBuilder.buildEnumField(
          'IsIntercompanySalesUsageBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link yieldPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YIELD_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'YieldPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isSalesWithholdingTaxCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_WITHHOLDING_TAX_CALCULATED: fieldBuilder.buildEnumField(
          'IsSalesWithholdingTaxCalculated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bestBeforePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEST_BEFORE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'BestBeforePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isManualDiscountPosRegistrationProhibited} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MANUAL_DISCOUNT_POS_REGISTRATION_PROHIBITED:
          fieldBuilder.buildEnumField(
            'IsManualDiscountPOSRegistrationProhibited',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link grossDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_DEPTH: fieldBuilder.buildEdmTypeField(
          'GrossDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isCatchWeightProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATCH_WEIGHT_PRODUCT: fieldBuilder.buildEnumField(
          'IsCatchWeightProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fixedCostCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_COST_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedCostCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link carryingCostAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRYING_COST_ABC_CODE: fieldBuilder.buildEnumField(
          'CarryingCostABCCode',
          Abc,
          true
        ),
        /**
         * Static representation of the {@link unitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST: fieldBuilder.buildEdmTypeField(
          'UnitCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPosRegistrationBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POS_REGISTRATION_BLOCKED: fieldBuilder.buildEnumField(
          'IsPOSRegistrationBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link posRegistrationBlockedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_REGISTRATION_BLOCKED_DATE: fieldBuilder.buildEdmTypeField(
          'POSRegistrationBlockedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isExemptFromAutomaticNotificationAndCancellation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT_FROM_AUTOMATIC_NOTIFICATION_AND_CANCELLATION:
          fieldBuilder.buildEnumField(
            'IsExemptFromAutomaticNotificationAndCancellation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link fieldServiceProductType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_SERVICE_PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'FieldServiceProductType',
          EcoResFieldServiceProductType,
          true
        ),
        /**
         * Static representation of the {@link comparisonPriceBaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPARISON_PRICE_BASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ComparisonPriceBaseUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'InventoryUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willWorkCenterPickingAllowNegativeInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_WORK_CENTER_PICKING_ALLOW_NEGATIVE_INVENTORY:
          fieldBuilder.buildEnumField(
            'WillWorkCenterPickingAllowNegativeInventory',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          EcoResProductType,
          true
        ),
        /**
         * Static representation of the {@link keyInPriceRequirementsAtPosRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_IN_PRICE_REQUIREMENTS_AT_POS_REGISTER: fieldBuilder.buildEnumField(
          'KeyInPriceRequirementsAtPOSRegister',
          RetailPriceKeyingRequirement,
          true
        ),
        /**
         * Static representation of the {@link approximateSalesTaxPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROXIMATE_SALES_TAX_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ApproximateSalesTaxPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link posRegistrationActivationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_REGISTRATION_ACTIVATION_DATE: fieldBuilder.buildEdmTypeField(
          'POSRegistrationActivationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link willInventoryReceiptIgnoreFlushingPrinciple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INVENTORY_RECEIPT_IGNORE_FLUSHING_PRINCIPLE:
          fieldBuilder.buildEnumField(
            'WillInventoryReceiptIgnoreFlushingPrinciple',
            NoYes,
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
         * Static representation of the {@link netProductWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PRODUCT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'NetProductWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costChargesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CHARGES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CostChargesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesPriceCalculationModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_CALCULATION_MODEL: fieldBuilder.buildEnumField(
          'SalesPriceCalculationModel',
          SalesPriceModel,
          true
        ),
        /**
         * Static representation of the {@link salesOverdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OVERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SalesOverdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesPricingPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICING_PRECISION: fieldBuilder.buildEdmTypeField(
          'SalesPricingPrecision',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link marginAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARGIN_ABC_CODE: fieldBuilder.buildEnumField(
          'MarginABCCode',
          Abc,
          true
        ),
        /**
         * Static representation of the {@link catchWeightUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'CatchWeightUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseMobileDeviceDescriptionLine1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_MOBILE_DEVICE_DESCRIPTION_LINE_1:
          fieldBuilder.buildEdmTypeField(
            'WarehouseMobileDeviceDescriptionLine1',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link warehouseMobileDeviceDescriptionLine2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_MOBILE_DEVICE_DESCRIPTION_LINE_2:
          fieldBuilder.buildEdmTypeField(
            'WarehouseMobileDeviceDescriptionLine2',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link productionConsumptionDepthConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_DEPTH_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionDepthConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link isUnitCostProductVariantSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_UNIT_COST_PRODUCT_VARIANT_SPECIFIC: fieldBuilder.buildEnumField(
          'IsUnitCostProductVariantSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link grossProductWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField(
          'GrossProductWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_START_DATE: fieldBuilder.buildEdmTypeField(
          'ShipStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DvReleasedProducts)
      };
    }

    return this._schema;
  }
}
