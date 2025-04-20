/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetBillOfMaterialsV2 } from './AssetMaintenanceAssetBillOfMaterialsV2';
import { AssetMaintenanceAssetBillOfMaterialsV2RequestBuilder } from './AssetMaintenanceAssetBillOfMaterialsV2RequestBuilder';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { OperationalSitesV2Api } from './OperationalSitesV2Api';
import { AssetMaintenanceReleasedProductsApi } from './AssetMaintenanceReleasedProductsApi';
import { AssetMaintenanceUnplannedWorkOrderLinesApi } from './AssetMaintenanceUnplannedWorkOrderLinesApi';
import { AssetMaintenanceWorkOrderLinesV2Api } from './AssetMaintenanceWorkOrderLinesV2Api';
import { AssetMaintenanceRequestWorkOrderLinesApi } from './AssetMaintenanceRequestWorkOrderLinesApi';
import { ItemSerialNumbersApi } from './ItemSerialNumbersApi';
import { AssetMaintenancePlanWorkOrderLinesApi } from './AssetMaintenancePlanWorkOrderLinesApi';
import { ItemBatchesApi } from './ItemBatchesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { WarehousesApi } from './WarehousesApi';
import { ProductSizesApi } from './ProductSizesApi';
import { AssetMaintenanceRoundWorkOrderLinesApi } from './AssetMaintenanceRoundWorkOrderLinesApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceAssetBillOfMaterialsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
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
  ): AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT> {
    return new AssetMaintenanceAssetBillOfMaterialsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link billOfMaterialsMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      OperationalSitesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unplannedWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNPLANNED_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workOrderJobV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_JOB_V_2: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequestWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemSerialNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_SERIAL_NUMBER: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      ItemSerialNumbersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenancePlanWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PLAN_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRoundWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ROUND_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      OperationalSitesV2Api<DeSerializersT>,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>,
      ItemSerialNumbersApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      ItemBatchesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BILL_OF_MATERIALS_MAINTENANCE_ASSET: new OneToOneLink(
        'BillOfMaterialsMaintenanceAsset',
        this,
        linkedApis[0]
      ),
      OPERATIONAL_SITE: new OneToOneLink(
        'OperationalSite',
        this,
        linkedApis[1]
      ),
      PRODUCT: new OneToOneLink('Product', this, linkedApis[2]),
      UNPLANNED_WORK_ORDER_JOB: new OneToOneLink(
        'UnplannedWorkOrderJob',
        this,
        linkedApis[3]
      ),
      WORK_ORDER_JOB_V_2: new OneToOneLink(
        'WorkOrderJobV2',
        this,
        linkedApis[4]
      ),
      MAINTENANCE_REQUEST_WORK_ORDER_JOB: new OneToOneLink(
        'MaintenanceRequestWorkOrderJob',
        this,
        linkedApis[5]
      ),
      ITEM_SERIAL_NUMBER: new OneToOneLink(
        'ItemSerialNumber',
        this,
        linkedApis[6]
      ),
      MAINTENANCE_PLAN_WORK_ORDER_JOB: new OneToOneLink(
        'MaintenancePlanWorkOrderJob',
        this,
        linkedApis[7]
      ),
      ITEM_BATCH: new OneToOneLink('ItemBatch', this, linkedApis[8]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[9]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[10]),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[11]),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[12]),
      MAINTENANCE_ROUND_WORK_ORDER_JOB: new OneToOneLink(
        'MaintenanceRoundWorkOrderJob',
        this,
        linkedApis[13]
      ),
      WAREHOUSE_LOCATION: new OneToOneLink(
        'WarehouseLocation',
        this,
        linkedApis[14]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetBillOfMaterialsV2;

  requestBuilder(): AssetMaintenanceAssetBillOfMaterialsV2RequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetBillOfMaterialsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
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
    typeof AssetMaintenanceAssetBillOfMaterialsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetBillOfMaterialsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENTORY_ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_QUANTITY: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER_REPLACED_BY: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATIONAL_SITE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_WORK_ORDER_JOB_LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billOfMaterialsMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      OperationalSitesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unplannedWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNPLANNED_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workOrderJobV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_JOB_V_2: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequestWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemSerialNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_SERIAL_NUMBER: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      ItemSerialNumbersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenancePlanWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_PLAN_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRoundWorkOrderJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ROUND_WORK_ORDER_JOB: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceAssetBillOfMaterialsV2<DeSerializers>
    >;
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
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventoryItemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'InventoryItemBatchNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link billOfMaterialQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialQuantity',
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
         * Static representation of the {@link lineNumberReplacedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER_REPLACED_BY: fieldBuilder.buildEdmTypeField(
          'LineNumberReplacedBy',
          'Edm.Int64',
          false
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
         * Static representation of the {@link warehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operationalSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONAL_SITE_ID: fieldBuilder.buildEdmTypeField(
          'OperationalSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryItemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'InventoryItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maintenanceWorkOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceWorkOrderId',
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
         * Static representation of the {@link maintenanceWorkOrderJobLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_WORK_ORDER_JOB_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'MaintenanceWorkOrderJobLineNumber',
          'Edm.Int64',
          false
        ),
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
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetBillOfMaterialsV2)
      };
    }

    return this._schema;
  }
}
