/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplyForecastEntries } from './SupplyForecastEntries';
import { SupplyForecastEntriesRequestBuilder } from './SupplyForecastEntriesRequestBuilder';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { VendorsV2Api } from './VendorsV2Api';
import { OperationalSitesApi } from './OperationalSitesApi';
import { RouteHeadersApi } from './RouteHeadersApi';
import { ForecastModelsApi } from './ForecastModelsApi';
import { WarehousesApi } from './WarehousesApi';
import { ProductGroupsApi } from './ProductGroupsApi';
import { BillOfMaterialsHeadersApi } from './BillOfMaterialsHeadersApi';
import { CurrenciesApi } from './CurrenciesApi';
import { VendorGroupsApi } from './VendorGroupsApi';
import { BudgetAllocateMethod } from './BudgetAllocateMethod';
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
export class SupplyForecastEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SupplyForecastEntries<DeSerializersT>, DeSerializersT>
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
  ): SupplyForecastEntriesApi<DeSerializersT> {
    return new SupplyForecastEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link quantityUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUANTITY_UNIT_OF_MEASURE: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_SITE: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link forecastModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORECAST_MODEL: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      ForecastModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_GROUP: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      ProductGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_HEADER: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link pricingCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICING_CURRENCY: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_GROUP: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UnitsOfMeasureApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      RouteHeadersApi<DeSerializersT>,
      ForecastModelsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ProductGroupsApi<DeSerializersT>,
      BillOfMaterialsHeadersApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      VendorGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      QUANTITY_UNIT_OF_MEASURE: new OneToOneLink(
        'QuantityUnitOfMeasure',
        this,
        linkedApis[0]
      ),
      VENDOR: new OneToOneLink('Vendor', this, linkedApis[1]),
      RECEIVING_SITE: new OneToOneLink('ReceivingSite', this, linkedApis[2]),
      ROUTE_HEADER: new OneToOneLink('RouteHeader', this, linkedApis[3]),
      FORECAST_MODEL: new OneToOneLink('ForecastModel', this, linkedApis[4]),
      RECEIVING_WAREHOUSE: new OneToOneLink(
        'ReceivingWarehouse',
        this,
        linkedApis[5]
      ),
      PRODUCT_GROUP: new OneToOneLink('ProductGroup', this, linkedApis[6]),
      BILL_OF_MATERIALS_HEADER: new OneToOneLink(
        'BillOfMaterialsHeader',
        this,
        linkedApis[7]
      ),
      PRICING_CURRENCY: new OneToOneLink(
        'PricingCurrency',
        this,
        linkedApis[8]
      ),
      VENDOR_GROUP: new OneToOneLink('VendorGroup', this, linkedApis[9])
    };
    return this;
  }

  entityConstructor = SupplyForecastEntries;

  requestBuilder(): SupplyForecastEntriesRequestBuilder<DeSerializersT> {
    return new SupplyForecastEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SupplyForecastEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SupplyForecastEntries<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SupplyForecastEntries<DeSerializersT>,
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
    typeof SupplyForecastEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SupplyForecastEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORECAST_ENTRY_NUMBER: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECASTED_INVENTORY_QUANTITY: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_ALLOCATION_KEY_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_BATCH_NUMBER: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECASTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATCH_WEIGHT_UNIT_SYMBOL: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_START_DATE: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_SITE_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_PRICE_QUANTITY: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_GROUP_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICING_CURRENCY_CODE: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECASTED_UNIT_PRICE: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_MODEL_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECASTED_QUANTITY: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORECAST_ALLOCATION_METHOD: EnumField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      BudgetAllocateMethod,
      true,
      true
    >;
    FORECASTED_AMOUNT: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOM_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      SupplyForecastEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link quantityUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUANTITY_UNIT_OF_MEASURE: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_SITE: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link forecastModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORECAST_MODEL: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      ForecastModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_GROUP: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      ProductGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_HEADER: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link pricingCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICING_CURRENCY: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_GROUP: OneToOneLink<
      SupplyForecastEntries<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SupplyForecastEntries<DeSerializers>>;
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
         * Static representation of the {@link forecastEntryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_ENTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ForecastEntryNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forecastedInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECASTED_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ForecastedInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productAllocationKeyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ALLOCATION_KEY_ID: fieldBuilder.buildEdmTypeField(
          'ProductAllocationKeyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'QuantityUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_ID: fieldBuilder.buildEdmTypeField('RouteId', 'Edm.String', true),
        /**
         * Static representation of the {@link forecastedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECASTED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ForecastedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
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
         * Static representation of the {@link forecastStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_START_DATE: fieldBuilder.buildEdmTypeField(
          'ForecastStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingSiteId',
          'Edm.String',
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
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorGroupId',
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
        /**
         * Static representation of the {@link pricingCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'PricingCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forecastedUnitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECASTED_UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'ForecastedUnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forecastModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ForecastModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forecastedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECASTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ForecastedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link forecastAllocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'ForecastAllocationMethod',
          BudgetAllocateMethod,
          true
        ),
        /**
         * Static representation of the {@link forecastedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECASTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ForecastedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ID: fieldBuilder.buildEdmTypeField('BOMId', 'Edm.String', true),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SupplyForecastEntries)
      };
    }

    return this._schema;
  }
}
