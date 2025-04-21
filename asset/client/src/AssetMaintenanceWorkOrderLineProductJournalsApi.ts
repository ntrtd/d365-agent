/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderLineProductJournals } from './AssetMaintenanceWorkOrderLineProductJournals';
import { AssetMaintenanceWorkOrderLineProductJournalsRequestBuilder } from './AssetMaintenanceWorkOrderLineProductJournalsRequestBuilder';
import { OperationalSitesV2Api } from './OperationalSitesV2Api';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { WarehousesApi } from './WarehousesApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductSizesApi } from './ProductSizesApi';
import { NoYes } from './NoYes';
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
export class AssetMaintenanceWorkOrderLineProductJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLineProductJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link storageProductSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STORAGE_PRODUCT_SITE: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      OperationalSitesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link storageProductWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STORAGE_PRODUCT_WAREHOUSE_LOCATION: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link storageProductWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STORAGE_PRODUCT_WAREHOUSE: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OperationalSitesV2Api<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductSizesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      STORAGE_PRODUCT_SITE: new OneToOneLink(
        'StorageProductSite',
        this,
        linkedApis[0]
      ),
      STORAGE_PRODUCT_WAREHOUSE_LOCATION: new OneToOneLink(
        'StorageProductWarehouseLocation',
        this,
        linkedApis[1]
      ),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[2]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[3]),
      STORAGE_PRODUCT_WAREHOUSE: new OneToOneLink(
        'StorageProductWarehouse',
        this,
        linkedApis[4]
      ),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[5]
      ),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderLineProductJournals;

  requestBuilder(): AssetMaintenanceWorkOrderLineProductJournalsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLineProductJournalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderLineProductJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderLineProductJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_JOB_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_CONSUMPTION_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONSUMPTION_LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_SITE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACKING_BATCH_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_6: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_9: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_4: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_3: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LINE_POSTED: EnumField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DIMENSION_8: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_MARKUP: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DIMENSION_1: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_7: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_10: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DIMENSION_11: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_12: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_WAREHOUSE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRACKING_SERIAL_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_5: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONSUMPTION_UNIT_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_2: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link storageProductSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STORAGE_PRODUCT_SITE: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      OperationalSitesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link storageProductWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STORAGE_PRODUCT_WAREHOUSE_LOCATION: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link storageProductWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STORAGE_PRODUCT_WAREHOUSE: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderLineProductJournals<DeSerializers>
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
         * Static representation of the {@link workOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workOrderJobNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_JOB_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkOrderJobNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link productConsumptionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONSUMPTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductConsumptionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConsumptionLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONSUMPTION_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductConsumptionLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', false),
        /**
         * Static representation of the {@link storageSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_SITE_ID: fieldBuilder.buildEdmTypeField(
          'StorageSiteId',
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
         * Static representation of the {@link trackingBatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_BATCH_ID: fieldBuilder.buildEdmTypeField(
          'TrackingBatchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_6: fieldBuilder.buildEdmTypeField(
          'InventDimension6',
          'Edm.String',
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
         * Static representation of the {@link inventDimension9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_9: fieldBuilder.buildEdmTypeField(
          'InventDimension9',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_4: fieldBuilder.buildEdmTypeField(
          'InventDimension4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_3: fieldBuilder.buildEdmTypeField(
          'InventDimension3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isLinePosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LINE_POSTED: fieldBuilder.buildEnumField(
          'IsLinePosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDimension8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_8: fieldBuilder.buildEdmTypeField(
          'InventDimension8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_MARKUP: fieldBuilder.buildEdmTypeField(
          'CostMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDimension1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_1: fieldBuilder.buildEdmTypeField(
          'InventDimension1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_7: fieldBuilder.buildEdmTypeField(
          'InventDimension7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_10: fieldBuilder.buildEdmTypeField(
          'InventDimension10',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDimension11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_11: fieldBuilder.buildEdmTypeField(
          'InventDimension11',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_12: fieldBuilder.buildEdmTypeField(
          'InventDimension12',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storageWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'StorageWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PRICE: fieldBuilder.buildEdmTypeField(
          'CostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link trackingSerialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'TrackingSerialId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_5: fieldBuilder.buildEdmTypeField(
          'InventDimension5',
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
         * Static representation of the {@link productConsumptionUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONSUMPTION_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'ProductConsumptionUnitID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_2: fieldBuilder.buildEdmTypeField(
          'InventDimension2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
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
        /**
         * Static representation of the {@link storageWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'StorageWarehouseLocationId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceWorkOrderLineProductJournals
        )
      };
    }

    return this._schema;
  }
}
