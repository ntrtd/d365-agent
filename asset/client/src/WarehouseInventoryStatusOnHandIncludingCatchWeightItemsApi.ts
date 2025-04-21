/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseInventoryStatusOnHandIncludingCatchWeightItems } from './WarehouseInventoryStatusOnHandIncludingCatchWeightItems';
import { WarehouseInventoryStatusOnHandIncludingCatchWeightItemsRequestBuilder } from './WarehouseInventoryStatusOnHandIncludingCatchWeightItemsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class WarehouseInventoryStatusOnHandIncludingCatchWeightItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializersT>,
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
  ): WarehouseInventoryStatusOnHandIncludingCatchWeightItemsApi<DeSerializersT> {
    return new WarehouseInventoryStatusOnHandIncludingCatchWeightItemsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WarehouseInventoryStatusOnHandIncludingCatchWeightItems;

  requestBuilder(): WarehouseInventoryStatusOnHandIncludingCatchWeightItemsRequestBuilder<DeSerializersT> {
    return new WarehouseInventoryStatusOnHandIncludingCatchWeightItemsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializersT>,
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
    typeof WarehouseInventoryStatusOnHandIncludingCatchWeightItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseInventoryStatusOnHandIncludingCatchWeightItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_WAREHOUSE_ID: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AVAILABLE_ON_HAND_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AVAILABLE_ON_HAND_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ON_HAND_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESERVED_ON_HAND_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AVAILABLE_ORDERED_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AVAILABLE_ORDERED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ON_ORDER_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESERVED_ORDERED_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESERVED_ORDERED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ON_HAND_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESERVED_ON_HAND_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ARE_WAREHOUSE_MANAGEMENT_PROCESSES_USED: EnumField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDERED_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_AVAILABLE_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ON_ORDER_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_AVAILABLE_QUANTITY: OrderableEdmTypeField<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<DeSerializers>
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
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
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryWarehouseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link availableOnHandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_ON_HAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'AvailableOnHandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link availableOnHandCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_ON_HAND_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'AvailableOnHandCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onHandCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HAND_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OnHandCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reservedOnHandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_ON_HAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReservedOnHandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link availableOrderedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_ORDERED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'AvailableOrderedQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link availableOrderedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_ORDERED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'AvailableOrderedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onOrderCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ORDER_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OnOrderCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OrderedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reservedOrderedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_ORDERED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReservedOrderedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reservedOrderedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_ORDERED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReservedOrderedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onHandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OnHandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reservedOnHandCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_ON_HAND_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReservedOnHandCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link areWarehouseManagementProcessesUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_WAREHOUSE_MANAGEMENT_PROCESSES_USED: fieldBuilder.buildEnumField(
          'AreWarehouseManagementProcessesUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OrderedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalAvailableCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AVAILABLE_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TotalAvailableCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OnOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalAvailableQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AVAILABLE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TotalAvailableQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          WarehouseInventoryStatusOnHandIncludingCatchWeightItems
        )
      };
    }

    return this._schema;
  }
}
