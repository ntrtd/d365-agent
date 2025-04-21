/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedProductMastersV2 } from './ReleasedProductMastersV2';
import { ReleasedProductMastersV2RequestBuilder } from './ReleasedProductMastersV2RequestBuilder';
import { ReleasedProductVariantsApi } from './ReleasedProductVariantsApi';
import { ProductMastersApi } from './ProductMastersApi';
import { ProductNumberIdentifiedReleasedProductVariantsApi } from './ProductNumberIdentifiedReleasedProductVariantsApi';
import { ProductTranslationsApi } from './ProductTranslationsApi';
import { ReleasedProductVariantsV2Api } from './ReleasedProductVariantsV2Api';
import { NoYes } from './NoYes';
import { Abc } from './Abc';
import { WhsAllowMaterialOverPick } from './WhsAllowMaterialOverPick';
import { PmfProductType } from './PmfProductType';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';
import { SalesPriceModel } from './SalesPriceModel';
import { InventBatchMergeDateCalculationMethod } from './InventBatchMergeDateCalculationMethod';
import { PdsVendorCheckItem } from './PdsVendorCheckItem';
import { ProdFlushingPrincipItem } from './ProdFlushingPrincipItem';
import { PdsPotencyAttribRecordingEnum } from './PdsPotencyAttribRecordingEnum';
import { RetailPriceKeyingRequirement } from './RetailPriceKeyingRequirement';
import { EcoResProductType } from './EcoResProductType';
import { FiTaxationOriginBr } from './FiTaxationOriginBr';
import { ItemNumAlternative } from './ItemNumAlternative';
import { SalesPriceModelBasic } from './SalesPriceModelBasic';
import { RetailQtyKeyingRequirement } from './RetailQtyKeyingRequirement';
import { ReqPoType } from './ReqPoType';
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
export class ReleasedProductMastersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReleasedProductMastersV2<DeSerializersT>, DeSerializersT>
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
  ): ReleasedProductMastersV2Api<DeSerializersT> {
    return new ReleasedProductMastersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT: OneToManyLink<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANTS: OneToManyLink<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TRANSLATION: OneToManyLink<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT,
      ProductTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_V_2: OneToManyLink<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReleasedProductVariantsApi<DeSerializersT>,
      ProductMastersApi<DeSerializersT>,
      ProductNumberIdentifiedReleasedProductVariantsApi<DeSerializersT>,
      ProductTranslationsApi<DeSerializersT>,
      ReleasedProductVariantsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT_VARIANT: new OneToManyLink(
        'ReleasedProductVariant',
        this,
        linkedApis[0]
      ),
      PRODUCT_MASTER: new OneToOneLink('ProductMaster', this, linkedApis[1]),
      RELEASED_PRODUCT_VARIANTS: new OneToManyLink(
        'ReleasedProductVariants',
        this,
        linkedApis[2]
      ),
      PRODUCT_TRANSLATION: new OneToManyLink(
        'ProductTranslation',
        this,
        linkedApis[3]
      ),
      RELEASED_PRODUCT_VARIANT_V_2: new OneToManyLink(
        'ReleasedProductVariantV2',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = ReleasedProductMastersV2;

  requestBuilder(): ReleasedProductMastersV2RequestBuilder<DeSerializersT> {
    return new ReleasedProductMastersV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReleasedProductMastersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedProductMastersV2<DeSerializersT>,
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
    typeof ReleasedProductMastersV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedProductMastersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PHANTOM: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PURCHASE_PRICE_INCLUDING_CHARGES: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_FISCAL_CLASSIFICATION_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARGIN_ABC_CODE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    IS_ICMS_TAX_APPLIED_ON_SERVICE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_AND_RECEIVING_SORT_ORDER_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCTION_CONSUMPTION_WIDTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALTERNATIVE_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RAW_MATERIAL_PICKING_PRINCIPLE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      WhsAllowMaterialOverPick,
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_DEPTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_MODEL_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_PRODUCT_HEIGHT: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALTERNATIVE_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SALES_WITHHOLDING_TAX_CALCULATED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_VOLUME: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRACKING_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_FORMULA_ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_MOBILE_DEVICE_DESCRIPTION_LINE_1: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_MOBILE_DEVICE_DESCRIPTION_LINE_2: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ITEM_WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_UNIT_COST_PRODUCT_VARIANT_SPECIFIC: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_POS_REGISTRATION_QUANTITY_NEGATIVE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POS_REGISTRATION_PLANNED_BLOCKED_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SELL_END_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_PURCHASE_WITHHOLDING_TAX_CALCULATED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXEMPT_FROM_AUTOMATIC_NOTIFICATION_AND_CANCELLATION: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_TYPE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      PmfProductType,
      true,
      true
    >;
    NET_PRODUCT_WEIGHT: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_POOL_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_SUPPLEMENTARY_PRODUCT_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_PRICING_PRECISION: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BOM_UNIT_SYMBOL: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_CALCULATION_CONTRIBUTION_RATIO: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SELF_CHECKOUT_REGISTRATION_BLOCKED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATCH_WEIGHT_UNIT_SYMBOL: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_INVOICE_LINE_MATCHING_POLICY: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyWithNotSetOption,
      true,
      true
    >;
    SELL_START_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PHYSICAL_DIMENSION_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRYING_COST_ABC_CODE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    COST_CALCULATION_BOM_LEVEL: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSFER_ORDER_OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_CONVERSION_SEQUENCE_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_PICKING_WORKBENCH_APPLY_BOXING_LOGIC: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIXED_SALES_PRICE_CHARGES: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DELIVERED_DIRECTLY: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_GST_RELIEF_CATEGORY_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SCALE_PRODUCT: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_PURCHASE_PRICE_CHARGES: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_UNIT_COST_INCLUDING_CHARGES: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_START_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE_CALCULATION_MODEL: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      SalesPriceModel,
      true,
      true
    >;
    ARRIVAL_HANDLING_TIME: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INTRASTAT_COMMODITY_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_TRANSPORTATION_MANAGEMENT_PROCESSES_ENABLED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SHIP_ALONE_ENABLED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_DENSITY_CONVERSION_FACTOR: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_PRICE_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_PRICING_PRECISION: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PURCHASE_CHARGES_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ABC_CODE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    VARIABLE_SCRAP_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_COST_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MAXIMUM_PICK_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALTERNATIVE_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE_SETUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SALES_PRICE_INCLUDING_CHARGES: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_PRICE_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_CHARGE_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTINUITY_SCHEDULE_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_COST_CHARGES: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_LINE_DISCOUNT_PRODUCT_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POS_REGISTRATION_ACTIVATION_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MAXIMUM_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_LIFE_CYCLE_VALID_TO_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERVICE_FISCAL_INFORMATION_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_SUPPLEMENTARY_PRODUCT_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_TOTAL_PURCHASE_DISCOUNT_CALCULATION_INCLUDE_PRODUCT: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACK_SIZE_CATEGORY_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CHARGES_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BATCH_MERGE_DATE_CALCULATION_METHOD: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      InventBatchMergeDateCalculationMethod,
      true,
      true
    >;
    SALES_MULTILINE_DISCOUNT_PRODUCT_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_PRICE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_CHARGE_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INTERCOMPANY_PURCHASE_USAGE_BLOCKED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DISCOUNT_POS_REGISTRATION_PROHIBITED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BEST_BEFORE_PERIOD_DAYS: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PURCHASE_OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUYER_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NECESSARY_PRODUCTION_WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_GST_RELIEF_CATEGORY_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVED_VENDOR_CHECK_METHOD: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      PdsVendorCheckItem,
      true,
      true
    >;
    SALES_REBATE_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_RESERVATION_HIERARCHY_NAME: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLUSHING_PRINCIPLE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      ProdFlushingPrincipItem,
      true,
      true
    >;
    SALES_PRICE_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    YIELD_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TARE_PRODUCT_WEIGHT: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPROXIMATE_SALES_TAX_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKING_DUTY_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_LINE_DISCOUNT_PRODUCT_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_INVENTORY_ISSUE_AUTOMATICALLY_REPORT_AS_FINISHED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_FISCAL_INFORMATION_TYPE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKAGE_HANDLING_TIME: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GROSS_PRODUCT_WIDTH: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHELF_LIFE_PERIOD_DAYS: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_ORDER_UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_RECEIVING_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POS_REGISTRATION_BLOCKED_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MUST_KEY_IN_COMMENT_AT_POS_REGISTER: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSTANT_SCRAP_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POTENCY_BASE_ATTRIBUTE_VALUE_ENTRY_EVENT: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      PdsPotencyAttribRecordingEnum,
      true,
      true
    >;
    KEY_IN_PRICE_REQUIREMENTS_AT_POS_REGISTER: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      RetailPriceKeyingRequirement,
      true,
      true
    >;
    INTRASTAT_CHARGE_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_COVERAGE_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POTENCY_BASE_ATTIBUTE_TARGET_VALUE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_INTERCOMPANY_SALES_USAGE_BLOCKED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACKING_MATERIAL_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_REBATE_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_LEVEL: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PURCHASE_ITEM_WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ZERO_PRICE_POS_REGISTRATION_ALLOWED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_CHARGES_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_UNIT_COST_AUTOMATICALLY_UPDATED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIRECT_DELIVERY_WAREHOUSE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAXATION_ORIGIN: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      FiTaxationOriginBr,
      true,
      true
    >;
    IS_VARIANT_SHELF_LABELS_PRINTING_ENABLED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_USAGE_CONDITION: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      ItemNumAlternative,
      true,
      true
    >;
    SALES_PRICE_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WILL_TOTAL_SALES_DISCOUNT_CALCULATION_INCLUDE_PRODUCT: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_PRICE_TOLERANCE_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INSTALLMENT_ELIGIBLE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BASE_SALES_PRICE_SOURCE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      SalesPriceModelBasic,
      true,
      true
    >;
    SERIAL_NUMBER_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_LIFE_CYCLE_VALID_FROM_DATE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_FISCAL_CLASSIFICATION_EXCEPTION_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NGP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEY_IN_QUANTITY_REQUIREMENTS_AT_POS_REGISTER: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      RetailQtyKeyingRequirement,
      true,
      true
    >;
    PRODUCTION_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ORDER_TYPE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      ReqPoType,
      true,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_HEIGHT_CONVERSION_FACTOR: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTINUITY_EVENT_DURATION: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_POS_REGISTRATION_BLOCKED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BATCH_NUMBER_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GROSS_DEPTH: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVENUE_ABC_CODE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    PACKAGE_CLASS_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_GST_RELIEF_CATEGORY_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_CALCULATION_CHARGES_PERCENTAGE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_MULTILINE_DISCOUNT_PRODUCT_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_WORK_CENTER_PICKING_ALLOW_NEGATIVE_INVENTORY: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_LIFE_CYCLE_SEASON_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RESTRICTED_FOR_COUPONS: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SALES_PRICE_ADJUSTMENT_ALLOWED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PURCHASE_PRICE_AUTOMATICALLY_UPDATED: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_INVENTORY_RECEIPT_IGNORE_FLUSHING_PRINCIPLE: EnumField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST_QUANTITY: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FREIGHT_ALLOCATION_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPARISON_PRICE_BASE_UNIT_SYMBOL: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CALCULATION_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHELF_ADVICE_PERIOD_DAYS: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORIGIN_STATE_ID: OrderableEdmTypeField<
      ReleasedProductMastersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT: OneToManyLink<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANTS: OneToManyLink<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TRANSLATION: OneToManyLink<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT,
      ProductTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_V_2: OneToManyLink<
      ReleasedProductMastersV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReleasedProductMastersV2<DeSerializers>>;
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
         * Static representation of the {@link isPhantom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PHANTOM: fieldBuilder.buildEnumField('IsPhantom', NoYes, true),
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
         * Static representation of the {@link itemFiscalClassificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_FISCAL_CLASSIFICATION_CODE: fieldBuilder.buildEdmTypeField(
          'ItemFiscalClassificationCode',
          'Edm.String',
          true
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
         * Static representation of the {@link isIcmsTaxAppliedOnService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ICMS_TAX_APPLIED_ON_SERVICE: fieldBuilder.buildEnumField(
          'IsICMSTaxAppliedOnService',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shippingAndReceivingSortOrderCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_AND_RECEIVING_SORT_ORDER_CODE: fieldBuilder.buildEdmTypeField(
          'ShippingAndReceivingSortOrderCode',
          'Edm.Int32',
          false
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
         * Static representation of the {@link alternativeProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductSizeId',
          'Edm.String',
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
         * Static representation of the {@link defaultProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemModelGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_MODEL_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemModelGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link alternativeProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductVersionId',
          'Edm.String',
          true
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
         * Static representation of the {@link productVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VOLUME: fieldBuilder.buildEdmTypeField(
          'ProductVolume',
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
         * Static representation of the {@link purchaseSalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PurchaseSalesTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planningFormulaItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_FORMULA_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'PlanningFormulaItemNumber',
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
         * Static representation of the {@link salesItemWithholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ITEM_WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesItemWithholdingTaxGroupCode',
          'Edm.String',
          true
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
         * Static representation of the {@link isPosRegistrationQuantityNegative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POS_REGISTRATION_QUANTITY_NEGATIVE: fieldBuilder.buildEnumField(
          'IsPOSRegistrationQuantityNegative',
          NoYes,
          true
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
         * Static representation of the {@link sellEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELL_END_DATE: fieldBuilder.buildEdmTypeField(
          'SellEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isPurchaseWithholdingTaxCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_WITHHOLDING_TAX_CALCULATED: fieldBuilder.buildEnumField(
          'IsPurchaseWithholdingTaxCalculated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CommissionProductGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link productionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_TYPE: fieldBuilder.buildEnumField(
          'ProductionType',
          PmfProductType,
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
         * Static representation of the {@link productionPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_POOL_ID: fieldBuilder.buildEdmTypeField(
          'ProductionPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesSupplementaryProductProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SUPPLEMENTARY_PRODUCT_PRODUCT_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'SalesSupplementaryProductProductGroupId',
            'Edm.String',
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
         * Static representation of the {@link purchasePricingPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICING_PRECISION: fieldBuilder.buildEdmTypeField(
          'PurchasePricingPrecision',
          'Edm.Int32',
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
         * Static representation of the {@link isSelfCheckoutRegistrationBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SELF_CHECKOUT_REGISTRATION_BLOCKED: fieldBuilder.buildEnumField(
          'IsSelfCheckoutRegistrationBlocked',
          NoYes,
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
         * Static representation of the {@link vendorInvoiceLineMatchingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE_LINE_MATCHING_POLICY: fieldBuilder.buildEnumField(
          'VendorInvoiceLineMatchingPolicy',
          PurchMatchingPolicyWithNotSetOption,
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
         * Static representation of the {@link physicalDimensionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_DIMENSION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PhysicalDimensionGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link costCalculationBomLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CALCULATION_BOM_LEVEL: fieldBuilder.buildEdmTypeField(
          'CostCalculationBOMLevel',
          'Edm.Int32',
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
         * Static representation of the {@link unitConversionSequenceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_CONVERSION_SEQUENCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'UnitConversionSequenceGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link fixedSalesPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_SALES_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedSalesPriceCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isDeliveredDirectly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERED_DIRECTLY: fieldBuilder.buildEnumField(
          'IsDeliveredDirectly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesGstReliefCategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_GST_RELIEF_CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'SalesGSTReliefCategoryCode',
          'Edm.String',
          true
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
         * Static representation of the {@link alternativeProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductColorId',
          'Edm.String',
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
         * Static representation of the {@link isUnitCostIncludingCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_UNIT_COST_INCLUDING_CHARGES: fieldBuilder.buildEnumField(
          'IsUnitCostIncludingCharges',
          NoYes,
          true
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
         * Static representation of the {@link salesPriceCalculationModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_CALCULATION_MODEL: fieldBuilder.buildEnumField(
          'SalesPriceCalculationModel',
          SalesPriceModel,
          true
        ),
        /**
         * Static representation of the {@link arrivalHandlingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARRIVAL_HANDLING_TIME: fieldBuilder.buildEdmTypeField(
          'ArrivalHandlingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link intrastatCommodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_COMMODITY_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatCommodityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areTransportationManagementProcessesEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_TRANSPORTATION_MANAGEMENT_PROCESSES_ENABLED:
          fieldBuilder.buildEnumField(
            'AreTransportationManagementProcessesEnabled',
            NoYes,
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
         * Static representation of the {@link purchasePriceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_DATE: fieldBuilder.buildEdmTypeField(
          'PurchasePriceDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link purchaseChargesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CHARGES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchaseChargesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProductSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ABC_CODE: fieldBuilder.buildEnumField('ValueABCCode', Abc, true),
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
         * Static representation of the {@link unitCostDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST_DATE: fieldBuilder.buildEdmTypeField(
          'UnitCostDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link alternativeProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcodeSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'BarcodeSetupId',
          'Edm.String',
          true
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
         * Static representation of the {@link purchasePriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchasePriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseChargeProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CHARGE_PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseChargeProductGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link continuityScheduleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUITY_SCHEDULE_ID: fieldBuilder.buildEdmTypeField(
          'ContinuityScheduleId',
          'Edm.String',
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
         * Static representation of the {@link costGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CostGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesLineDiscountProductGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LINE_DISCOUNT_PRODUCT_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesLineDiscountProductGroupCode',
          'Edm.String',
          true
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
         * Static representation of the {@link maximumCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productLifeCycleValidToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LIFE_CYCLE_VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ProductLifeCycleValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link serviceFiscalInformationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_FISCAL_INFORMATION_CODE: fieldBuilder.buildEdmTypeField(
          'ServiceFiscalInformationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseSupplementaryProductProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_SUPPLEMENTARY_PRODUCT_PRODUCT_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'PurchaseSupplementaryProductProductGroupId',
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
         * Static representation of the {@link packSizeCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_SIZE_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'PackSizeCategoryId',
          'Edm.String',
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
         * Static representation of the {@link batchMergeDateCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_MERGE_DATE_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'BatchMergeDateCalculationMethod',
          InventBatchMergeDateCalculationMethod,
          true
        ),
        /**
         * Static representation of the {@link salesMultilineDiscountProductGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MULTILINE_DISCOUNT_PRODUCT_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'SalesMultilineDiscountProductGroupCode',
            'Edm.String',
            true
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
         * Static representation of the {@link salesChargeProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CHARGE_PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesChargeProductGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link alternativeProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductConfigurationId',
          'Edm.String',
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
         * Static representation of the {@link isDiscountPosRegistrationProhibited} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISCOUNT_POS_REGISTRATION_PROHIBITED: fieldBuilder.buildEnumField(
          'IsDiscountPOSRegistrationProhibited',
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
         * Static representation of the {@link purchaseOverdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_OVERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'PurchaseOverdeliveryPercentage',
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
         * Static representation of the {@link salesUnderdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNDERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SalesUnderdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link buyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BuyerGroupId',
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
         * Static representation of the {@link inventoryGstReliefCategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_GST_RELIEF_CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'InventoryGSTReliefCategoryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvedVendorCheckMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_VENDOR_CHECK_METHOD: fieldBuilder.buildEnumField(
          'ApprovedVendorCheckMethod',
          PdsVendorCheckItem,
          true
        ),
        /**
         * Static representation of the {@link salesRebateProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REBATE_PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesRebateProductGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryReservationHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_RESERVATION_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'InventoryReservationHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link flushingPrinciple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLUSHING_PRINCIPLE: fieldBuilder.buildEnumField(
          'FlushingPrinciple',
          ProdFlushingPrincipItem,
          true
        ),
        /**
         * Static representation of the {@link salesPriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesPriceQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link tareProductWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARE_PRODUCT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'TareProductWeight',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link packingDutyQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_DUTY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PackingDutyQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseLineDiscountProductGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_LINE_DISCOUNT_PRODUCT_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'PurchaseLineDiscountProductGroupCode',
            'Edm.String',
            true
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
         * Static representation of the {@link productFiscalInformationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_FISCAL_INFORMATION_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductFiscalInformationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packageHandlingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_HANDLING_TIME: fieldBuilder.buildEdmTypeField(
          'PackageHandlingTime',
          'Edm.Int32',
          false
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
         * Static representation of the {@link shelfLifePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_LIFE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'ShelfLifePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductVersionId',
          'Edm.String',
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
         * Static representation of the {@link defaultReceivingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RECEIVING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'DefaultReceivingQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link mustKeyInCommentAtPosRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUST_KEY_IN_COMMENT_AT_POS_REGISTER: fieldBuilder.buildEnumField(
          'MustKeyInCommentAtPOSRegister',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductStyleId',
          'Edm.String',
          true
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
         * Static representation of the {@link potencyBaseAttributeValueEntryEvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POTENCY_BASE_ATTRIBUTE_VALUE_ENTRY_EVENT: fieldBuilder.buildEnumField(
          'PotencyBaseAttributeValueEntryEvent',
          PdsPotencyAttribRecordingEnum,
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
         * Static representation of the {@link intrastatChargePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_CHARGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'IntrastatChargePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productCoverageGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COVERAGE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductCoverageGroupId',
          'Edm.String',
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
         * Static representation of the {@link isIntercompanySalesUsageBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTERCOMPANY_SALES_USAGE_BLOCKED: fieldBuilder.buildEnumField(
          'IsIntercompanySalesUsageBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link packingMaterialGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_MATERIAL_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PackingMaterialGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseRebateProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REBATE_PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseRebateProductGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
          'Edm.String',
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
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OriginCountryRegionId',
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
         * Static representation of the {@link bomLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_LEVEL: fieldBuilder.buildEdmTypeField(
          'BOMLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link purchaseItemWithholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ITEM_WITHHOLDING_TAX_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'PurchaseItemWithholdingTaxGroupCode',
            'Edm.String',
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
         * Static representation of the {@link costChargesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CHARGES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CostChargesQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link defaultDirectDeliveryWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIRECT_DELIVERY_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'DefaultDirectDeliveryWarehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTaxationOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAXATION_ORIGIN: fieldBuilder.buildEnumField(
          'ProductTaxationOrigin',
          FiTaxationOriginBr,
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
         * Static representation of the {@link unitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST: fieldBuilder.buildEdmTypeField(
          'UnitCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeProductUsageCondition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_USAGE_CONDITION: fieldBuilder.buildEnumField(
          'AlternativeProductUsageCondition',
          ItemNumAlternative,
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
         * Static representation of the {@link purchasePriceToleranceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_TOLERANCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PurchasePriceToleranceGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link baseSalesPriceSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_SALES_PRICE_SOURCE: fieldBuilder.buildEnumField(
          'BaseSalesPriceSource',
          SalesPriceModelBasic,
          true
        ),
        /**
         * Static representation of the {@link serialNumberGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SerialNumberGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productLifeCycleValidFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LIFE_CYCLE_VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ProductLifeCycleValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemFiscalClassificationExceptionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_FISCAL_CLASSIFICATION_EXCEPTION_CODE:
          fieldBuilder.buildEdmTypeField(
            'ItemFiscalClassificationExceptionCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link ngpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NGP_CODE: fieldBuilder.buildEdmTypeField('NGPCode', 'Edm.Int32', false),
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
         * Static representation of the {@link productionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ORDER_TYPE: fieldBuilder.buildEnumField(
          'DefaultOrderType',
          ReqPoType,
          true
        ),
        /**
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link continuityEventDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUITY_EVENT_DURATION: fieldBuilder.buildEdmTypeField(
          'ContinuityEventDuration',
          'Edm.Int32',
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
         * Static representation of the {@link batchNumberGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_NUMBER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'BatchNumberGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductSizeId',
          'Edm.String',
          true
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
         * Static representation of the {@link grossDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_DEPTH: fieldBuilder.buildEdmTypeField(
          'GrossDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revenueAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_ABC_CODE: fieldBuilder.buildEnumField(
          'RevenueABCCode',
          Abc,
          true
        ),
        /**
         * Static representation of the {@link packageClassId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_CLASS_ID: fieldBuilder.buildEdmTypeField(
          'PackageClassId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseGstReliefCategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_GST_RELIEF_CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'PurchaseGSTReliefCategoryCode',
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
         * Static representation of the {@link purchaseMultilineDiscountProductGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_MULTILINE_DISCOUNT_PRODUCT_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'PurchaseMultilineDiscountProductGroupCode',
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
         * Static representation of the {@link productLifeCycleSeasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LIFE_CYCLE_SEASON_CODE: fieldBuilder.buildEdmTypeField(
          'ProductLifeCycleSeasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesSalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesSalesTaxItemGroupCode',
          'Edm.String',
          true
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
         * Static representation of the {@link isSalesPriceAdjustmentAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_PRICE_ADJUSTMENT_ALLOWED: fieldBuilder.buildEnumField(
          'IsSalesPriceAdjustmentAllowed',
          NoYes,
          true
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
         * Static representation of the {@link minimumCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumCatchWeightQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link freightAllocationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_ALLOCATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'FreightAllocationGroupId',
          'Edm.String',
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
         * Static representation of the {@link costCalculationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CALCULATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CostCalculationGroupId',
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
         * Static representation of the {@link originStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_STATE_ID: fieldBuilder.buildEdmTypeField(
          'OriginStateId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReleasedProductMastersV2)
      };
    }

    return this._schema;
  }
}
