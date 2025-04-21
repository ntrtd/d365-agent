/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderLineItemForecasts } from './AssetMaintenanceWorkOrderLineItemForecasts';
import { AssetMaintenanceWorkOrderLineItemForecastsRequestBuilder } from './AssetMaintenanceWorkOrderLineItemForecastsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceWorkOrderLineItemForecastsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderLineItemForecastsApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLineItemForecastsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderLineItemForecasts;

  requestBuilder(): AssetMaintenanceWorkOrderLineItemForecastsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLineItemForecastsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderLineItemForecasts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderLineItemForecasts<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderLineItemForecasts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderLineItemForecasts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_LINE_PROPERTY_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_SITE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_WAREHOUSE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_QUANTITY: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_UNIT_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderLineItemForecasts<DeSerializers>
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
         * Static representation of the {@link projectLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectLinePropertyId',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link storageSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_SITE_ID: fieldBuilder.buildEdmTypeField(
          'StorageSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link storageLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'StorageLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link storageWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'StorageWarehouseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
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
         * Static representation of the {@link workOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkOrderLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'SalesUnitId',
          'Edm.String',
          false
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ModelId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceWorkOrderLineItemForecasts
        )
      };
    }

    return this._schema;
  }
}
