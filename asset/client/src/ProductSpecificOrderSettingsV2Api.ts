/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSpecificOrderSettingsV2 } from './ProductSpecificOrderSettingsV2';
import { ProductSpecificOrderSettingsV2RequestBuilder } from './ProductSpecificOrderSettingsV2RequestBuilder';
import { DvReleasedProductsApi } from './DvReleasedProductsApi';
import { WarehousesApi } from './WarehousesApi';
import { OperationalSitesApi } from './OperationalSitesApi';
import { ProductSizesApi } from './ProductSizesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { NoYes } from './NoYes';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
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
export class ProductSpecificOrderSettingsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductSpecificOrderSettingsV2<DeSerializersT>, DeSerializersT>
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
  ): ProductSpecificOrderSettingsV2Api<DeSerializersT> {
    return new ProductSpecificOrderSettingsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dvReleasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCT: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link procurementWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCUREMENT_WAREHOUSE: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DvReleasedProductsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DV_RELEASED_PRODUCT: new OneToOneLink(
        'DVReleasedProduct',
        this,
        linkedApis[0]
      ),
      PROCUREMENT_WAREHOUSE: new OneToOneLink(
        'ProcurementWarehouse',
        this,
        linkedApis[1]
      ),
      OPERATIONAL_SITE: new OneToOneLink(
        'OperationalSite',
        this,
        linkedApis[2]
      ),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[3]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[4]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[5]),
      RELEASED_PRODUCT: new OneToOneLink('ReleasedProduct', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = ProductSpecificOrderSettingsV2;

  requestBuilder(): ProductSpecificOrderSettingsV2RequestBuilder<DeSerializersT> {
    return new ProductSpecificOrderSettingsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductSpecificOrderSettingsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductSpecificOrderSettingsV2<DeSerializersT>,
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
    typeof ProductSpecificOrderSettingsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductSpecificOrderSettingsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATIONAL_SITE_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_INVENTORY_SITE_MANDATORY: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_ATP_BACKWARD_DEMAND_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_SALES_SITE_MANDATORY: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ATP_BACKWARD_SUPPLY_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROCUREMENT_LEAD_TIME_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_ORDER_PROMISING_METHOD: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    ARE_INVENTORY_DEFAULT_ORDER_SETTINGS_OVERRIDDEN: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INVENTORY_WAREHOUSE_MANDATORY: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SALES_WAREHOUSE_MANDATORY: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ATP_BACKWARD_DEMAND_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_ATP_DELAYED_DEMAND_OFFSET_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_PROCUREMENT_SITE_MANDATORY: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROCUREMENT_WAREHOUSE_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_SALES_DEFAULT_ORDER_SETTINGS_OVERRIDDEN: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_PROCUREMENT_DEFAULT_ORDER_SETTINGS_OVERRIDDEN: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_ATP_DELAYED_SUPPLY_OFFSET_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_SALES_ATP_INCLUDING_PLANNED_ORDERS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INVENTORY_WAREHOUSE_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_SALES_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STANDARD_PROCUREMENT_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_INVENTORY_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_SALES_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_INVENTORY_PROCESSING_STOPPED: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_LEAD_TIME_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STANDARD_SALES_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STANDARD_INVENTORY_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ATP_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENTORY_ATP_BACKWARD_SUPPLY_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_DEFAULT_PROCUREMENT_STORAGE_DIMENSION_OVERRIDDEN: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROCUREMENT_SITE_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_ATP_DELAYED_DEMAND_OFFSET_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_LEAD_TIME_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_INVENTORY_USING_WORKING_DAYS: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_SETTINGS_RANK: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_DEFAULT_SALES_STORAGE_DIMENSION_OVERRIDDEN: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROCUREMENT_QUANTITY_MULTIPLES: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_PROCUREMENT_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_QUANTITY_MULTIPLES: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SALES_LEAD_TIME_OVERRIDDEN: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PROCUREMENT_USING_WORKING_DAYS: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_PROCUREMENT_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_INVENTORY_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PROCUREMENT_PROCESSINGSTOPPED: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SALES_PROCESSING_STOPPED: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_WAREHOUSE_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_QUANTITY_MULTIPLES: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ATP_DELAYED_SUPPLY_OFFSET_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_DEFAULT_INVENTORY_STORAGE_DIMENSION_OVERRIDDEN: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PROCUREMENT_WAREHOUSE_MANDATORY: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_SITE_ID: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_ORDER_PROMISING_METHOD: EnumField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    IS_INVENTORY_ATP_INCLUDING_PLANNED_ORDERS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INVENTORY_ATP_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductSpecificOrderSettingsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dvReleasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCT: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link procurementWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCUREMENT_WAREHOUSE: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      ProductSpecificOrderSettingsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductSpecificOrderSettingsV2<DeSerializers>>;
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
         * Static representation of the {@link operationalSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONAL_SITE_ID: fieldBuilder.buildEdmTypeField(
          'OperationalSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isInventorySiteMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_SITE_MANDATORY: fieldBuilder.buildEnumField(
          'IsInventorySiteMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryAtpBackwardDemandTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ATP_BACKWARD_DEMAND_TIME_FENCE_DAYS:
          fieldBuilder.buildEdmTypeField(
            'InventoryATPBackwardDemandTimeFenceDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link isSalesSiteMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_SITE_MANDATORY: fieldBuilder.buildEnumField(
          'IsSalesSiteMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesAtpBackwardSupplyTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ATP_BACKWARD_SUPPLY_TIME_FENCE_DAYS:
          fieldBuilder.buildEdmTypeField(
            'SalesATPBackwardSupplyTimeFenceDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link procurementLeadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'ProcurementLeadTimeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesOrderPromisingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_PROMISING_METHOD: fieldBuilder.buildEnumField(
          'SalesOrderPromisingMethod',
          SalesDeliveryDateControlType,
          true
        ),
        /**
         * Static representation of the {@link areInventoryDefaultOrderSettingsOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_INVENTORY_DEFAULT_ORDER_SETTINGS_OVERRIDDEN:
          fieldBuilder.buildEnumField(
            'AreInventoryDefaultOrderSettingsOverridden',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isInventoryWarehouseMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_WAREHOUSE_MANDATORY: fieldBuilder.buildEnumField(
          'IsInventoryWarehouseMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSalesWarehouseMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_WAREHOUSE_MANDATORY: fieldBuilder.buildEnumField(
          'IsSalesWarehouseMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesAtpBackwardDemandTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ATP_BACKWARD_DEMAND_TIME_FENCE_DAYS:
          fieldBuilder.buildEdmTypeField(
            'SalesATPBackwardDemandTimeFenceDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link salesAtpDelayedDemandOffsetDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ATP_DELAYED_DEMAND_OFFSET_DAYS: fieldBuilder.buildEdmTypeField(
          'SalesATPDelayedDemandOffsetDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isProcurementSiteMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUREMENT_SITE_MANDATORY: fieldBuilder.buildEnumField(
          'IsProcurementSiteMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link procurementWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ProcurementWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areSalesDefaultOrderSettingsOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_SALES_DEFAULT_ORDER_SETTINGS_OVERRIDDEN:
          fieldBuilder.buildEnumField(
            'AreSalesDefaultOrderSettingsOverridden',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link areProcurementDefaultOrderSettingsOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PROCUREMENT_DEFAULT_ORDER_SETTINGS_OVERRIDDEN:
          fieldBuilder.buildEnumField(
            'AreProcurementDefaultOrderSettingsOverridden',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link inventoryAtpDelayedSupplyOffsetDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ATP_DELAYED_SUPPLY_OFFSET_DAYS:
          fieldBuilder.buildEdmTypeField(
            'InventoryATPDelayedSupplyOffsetDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link isSalesAtpIncludingPlannedOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_ATP_INCLUDING_PLANNED_ORDERS: fieldBuilder.buildEdmTypeField(
          'IsSalesATPIncludingPlannedOrders',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inventoryWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumSalesOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_SALES_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumSalesOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link standardProcurementOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_PROCUREMENT_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StandardProcurementOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumInventoryOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_INVENTORY_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumInventoryOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumSalesOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_SALES_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumSalesOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isInventoryProcessingStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_PROCESSING_STOPPED: fieldBuilder.buildEnumField(
          'IsInventoryProcessingStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryLeadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'InventoryLeadTimeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link standardSalesOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_SALES_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StandardSalesOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link standardInventoryOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_INVENTORY_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StandardInventoryOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesAtpTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ATP_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'SalesATPTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link inventoryAtpBackwardSupplyTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ATP_BACKWARD_SUPPLY_TIME_FENCE_DAYS:
          fieldBuilder.buildEdmTypeField(
            'InventoryATPBackwardSupplyTimeFenceDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link isDefaultProcurementStorageDimensionOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_PROCUREMENT_STORAGE_DIMENSION_OVERRIDDEN:
          fieldBuilder.buildEnumField(
            'IsDefaultProcurementStorageDimensionOverridden',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link procurementSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProcurementSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryAtpDelayedDemandOffsetDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ATP_DELAYED_DEMAND_OFFSET_DAYS:
          fieldBuilder.buildEdmTypeField(
            'InventoryATPDelayedDemandOffsetDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link salesLeadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'SalesLeadTimeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isInventoryUsingWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_USING_WORKING_DAYS: fieldBuilder.buildEnumField(
          'IsInventoryUsingWorkingDays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderSettingsRank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_SETTINGS_RANK: fieldBuilder.buildEdmTypeField(
          'OrderSettingsRank',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isDefaultSalesStorageDimensionOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_SALES_STORAGE_DIMENSION_OVERRIDDEN:
          fieldBuilder.buildEnumField(
            'IsDefaultSalesStorageDimensionOverridden',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link procurementQuantityMultiples} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_QUANTITY_MULTIPLES: fieldBuilder.buildEdmTypeField(
          'ProcurementQuantityMultiples',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumProcurementOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_PROCUREMENT_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumProcurementOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesQuantityMultiples} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUANTITY_MULTIPLES: fieldBuilder.buildEdmTypeField(
          'SalesQuantityMultiples',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isSalesLeadTimeOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_LEAD_TIME_OVERRIDDEN: fieldBuilder.buildEnumField(
          'IsSalesLeadTimeOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isProcurementUsingWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUREMENT_USING_WORKING_DAYS: fieldBuilder.buildEnumField(
          'IsProcurementUsingWorkingDays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumProcurementOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PROCUREMENT_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumProcurementOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumInventoryOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_INVENTORY_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumInventoryOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isProcurementProcessingstopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUREMENT_PROCESSINGSTOPPED: fieldBuilder.buildEnumField(
          'IsProcurementProcessingstopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSalesProcessingStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_PROCESSING_STOPPED: fieldBuilder.buildEnumField(
          'IsSalesProcessingStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'SalesWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryQuantityMultiples} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_QUANTITY_MULTIPLES: fieldBuilder.buildEdmTypeField(
          'InventoryQuantityMultiples',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesAtpDelayedSupplyOffsetDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ATP_DELAYED_SUPPLY_OFFSET_DAYS: fieldBuilder.buildEdmTypeField(
          'SalesATPDelayedSupplyOffsetDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isDefaultInventoryStorageDimensionOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_INVENTORY_STORAGE_DIMENSION_OVERRIDDEN:
          fieldBuilder.buildEnumField(
            'IsDefaultInventoryStorageDimensionOverridden',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isProcurementWarehouseMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUREMENT_WAREHOUSE_MANDATORY: fieldBuilder.buildEnumField(
          'IsProcurementWarehouseMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SITE_ID: fieldBuilder.buildEdmTypeField(
          'SalesSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryOrderPromisingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ORDER_PROMISING_METHOD: fieldBuilder.buildEnumField(
          'InventoryOrderPromisingMethod',
          SalesDeliveryDateControlType,
          true
        ),
        /**
         * Static representation of the {@link isInventoryAtpIncludingPlannedOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_ATP_INCLUDING_PLANNED_ORDERS:
          fieldBuilder.buildEdmTypeField(
            'IsInventoryATPIncludingPlannedOrders',
            'Edm.Boolean',
            false
          ),
        /**
         * Static representation of the {@link inventoryAtpTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ATP_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'InventoryATPTimeFenceDays',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductSpecificOrderSettingsV2)
      };
    }

    return this._schema;
  }
}
