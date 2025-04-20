/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductDefaultOrderSettings } from './ProductDefaultOrderSettings';
import { ProductDefaultOrderSettingsRequestBuilder } from './ProductDefaultOrderSettingsRequestBuilder';
import { DvReleasedProductsApi } from './DvReleasedProductsApi';
import { WarehousesApi } from './WarehousesApi';
import { OperationalSitesApi } from './OperationalSitesApi';
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
export class ProductDefaultOrderSettingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductDefaultOrderSettings<DeSerializersT>, DeSerializersT>
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
  ): ProductDefaultOrderSettingsApi<DeSerializersT> {
    return new ProductDefaultOrderSettingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dvReleasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCT: OneToOneLink<
      ProductDefaultOrderSettings<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link procurementWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCUREMENT_WAREHOUSE: OneToOneLink<
      ProductDefaultOrderSettings<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link procurementSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCUREMENT_SITE: OneToOneLink<
      ProductDefaultOrderSettings<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      ProductDefaultOrderSettings<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DvReleasedProductsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
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
      PROCUREMENT_SITE: new OneToOneLink(
        'ProcurementSite',
        this,
        linkedApis[2]
      ),
      RELEASED_PRODUCT: new OneToOneLink('ReleasedProduct', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ProductDefaultOrderSettings;

  requestBuilder(): ProductDefaultOrderSettingsRequestBuilder<DeSerializersT> {
    return new ProductDefaultOrderSettingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductDefaultOrderSettings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductDefaultOrderSettings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductDefaultOrderSettings<DeSerializersT>,
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
    typeof ProductDefaultOrderSettings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductDefaultOrderSettings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_SALES_PROCESSING_STOPPED: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_SALES_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PROCUREMENT_WAREHOUSE_MANDATORY: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROCUREMENT_SITE_ID: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_SALES_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCUREMENT_LEAD_TIME_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAXIMUM_INVENTORY_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_ATP_BACKWARD_DEMAND_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_QUANTITY_MULTIPLES: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCUREMENT_WAREHOUSE_ID: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_LEAD_TIME_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PROCUREMENT_PROCESSINGSTOPPED: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROCUREMENT_QUANTITY_MULTIPLES: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ATP_DELAYED_DEMAND_OFFSET_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_INVENTORY_ATP_INCLUDING_PLANNED_ORDERS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    STANDARD_PROCUREMENT_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ATP_BACKWARD_DEMAND_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_SALES_SITE_MANDATORY: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INVENTORY_PROCESSING_STOPPED: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SALES_ATP_INCLUDING_PLANNED_ORDERS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    MINIMUM_PROCUREMENT_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_INVENTORY_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ATP_DELAYED_SUPPLY_OFFSET_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STANDARD_INVENTORY_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_LEAD_TIME_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_SITE_ID: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_ATP_DELAYED_DEMAND_OFFSET_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENTORY_ORDER_PROMISING_METHOD: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    MAXIMUM_PROCUREMENT_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ORDER_PROMISING_METHOD: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    INVENTORY_ATP_DELAYED_SUPPLY_OFFSET_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_INVENTORY_USING_WORKING_DAYS: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STANDARD_SALES_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_ATP_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENTORY_ATP_BACKWARD_SUPPLY_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_ATP_BACKWARD_SUPPLY_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENTORY_QUANTITY_MULTIPLES: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SALES_WAREHOUSE_MANDATORY: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SALES_LEAD_TIME_OVERRIDDEN: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ATP_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_PROCUREMENT_USING_WORKING_DAYS: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_INVENTORY_ORDER_PROMISING_DEFAULTS_OVERRIDDEN: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PROCUREMENT_SITE_MANDATORY: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_WAREHOUSE_ID: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_SALES_ORDER_PROMISING_DEFAULTS_OVERRIDDEN: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INVENTORY_WAREHOUSE_MANDATORY: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INVENTORY_SITE_MANDATORY: EnumField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_DIMENSION_ID: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_WAREHOUSE_ID: OrderableEdmTypeField<
      ProductDefaultOrderSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dvReleasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCT: OneToOneLink<
      ProductDefaultOrderSettings<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link procurementWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCUREMENT_WAREHOUSE: OneToOneLink<
      ProductDefaultOrderSettings<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link procurementSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCUREMENT_SITE: OneToOneLink<
      ProductDefaultOrderSettings<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      ProductDefaultOrderSettings<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductDefaultOrderSettings<DeSerializers>>;
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
         * Static representation of the {@link isSalesProcessingStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_PROCESSING_STOPPED: fieldBuilder.buildEnumField(
          'IsSalesProcessingStopped',
          NoYes,
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
         * Static representation of the {@link isProcurementWarehouseMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUREMENT_WAREHOUSE_MANDATORY: fieldBuilder.buildEnumField(
          'IsProcurementWarehouseMandatory',
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
         * Static representation of the {@link minimumSalesOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_SALES_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumSalesOrderQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link maximumInventoryOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_INVENTORY_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumInventoryOrderQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link salesQuantityMultiples} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUANTITY_MULTIPLES: fieldBuilder.buildEdmTypeField(
          'SalesQuantityMultiples',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link inventoryLeadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'InventoryLeadTimeDays',
          'Edm.Int32',
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
         * Static representation of the {@link isProcurementProcessingstopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUREMENT_PROCESSINGSTOPPED: fieldBuilder.buildEnumField(
          'IsProcurementProcessingstopped',
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
         * Static representation of the {@link salesAtpDelayedDemandOffsetDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ATP_DELAYED_DEMAND_OFFSET_DAYS: fieldBuilder.buildEdmTypeField(
          'SalesATPDelayedDemandOffsetDays',
          'Edm.Int32',
          false
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
         * Static representation of the {@link standardProcurementOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_PROCUREMENT_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StandardProcurementOrderQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link isSalesSiteMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_SITE_MANDATORY: fieldBuilder.buildEnumField(
          'IsSalesSiteMandatory',
          NoYes,
          true
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
         * Static representation of the {@link isSalesAtpIncludingPlannedOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_ATP_INCLUDING_PLANNED_ORDERS: fieldBuilder.buildEdmTypeField(
          'IsSalesATPIncludingPlannedOrders',
          'Edm.Boolean',
          false
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
         * Static representation of the {@link minimumInventoryOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_INVENTORY_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumInventoryOrderQuantity',
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
         * Static representation of the {@link standardInventoryOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_INVENTORY_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StandardInventoryOrderQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link salesSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SITE_ID: fieldBuilder.buildEdmTypeField(
          'SalesSiteId',
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
         * Static representation of the {@link inventoryOrderPromisingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ORDER_PROMISING_METHOD: fieldBuilder.buildEnumField(
          'InventoryOrderPromisingMethod',
          SalesDeliveryDateControlType,
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
         * Static representation of the {@link salesOrderPromisingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_PROMISING_METHOD: fieldBuilder.buildEnumField(
          'SalesOrderPromisingMethod',
          SalesDeliveryDateControlType,
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
         * Static representation of the {@link isInventoryUsingWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_USING_WORKING_DAYS: fieldBuilder.buildEnumField(
          'IsInventoryUsingWorkingDays',
          NoYes,
          true
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
         * Static representation of the {@link inventoryAtpTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ATP_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'InventoryATPTimeFenceDays',
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
         * Static representation of the {@link inventoryQuantityMultiples} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_QUANTITY_MULTIPLES: fieldBuilder.buildEdmTypeField(
          'InventoryQuantityMultiples',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link isSalesLeadTimeOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_LEAD_TIME_OVERRIDDEN: fieldBuilder.buildEnumField(
          'IsSalesLeadTimeOverridden',
          NoYes,
          true
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
         * Static representation of the {@link isProcurementUsingWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUREMENT_USING_WORKING_DAYS: fieldBuilder.buildEnumField(
          'IsProcurementUsingWorkingDays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link areInventoryOrderPromisingDefaultsOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_INVENTORY_ORDER_PROMISING_DEFAULTS_OVERRIDDEN:
          fieldBuilder.buildEnumField(
            'AreInventoryOrderPromisingDefaultsOverridden',
            NoYes,
            true
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
         * Static representation of the {@link inventWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'InventWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areSalesOrderPromisingDefaultsOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_SALES_ORDER_PROMISING_DEFAULTS_OVERRIDDEN:
          fieldBuilder.buildEnumField(
            'AreSalesOrderPromisingDefaultsOverridden',
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
         * Static representation of the {@link isInventorySiteMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_SITE_MANDATORY: fieldBuilder.buildEnumField(
          'IsInventorySiteMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryDimensionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_DIMENSION_ID: fieldBuilder.buildEdmTypeField(
          'InventoryDimensionId',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductDefaultOrderSettings)
      };
    }

    return this._schema;
  }
}
