/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipmentPackingSlipTransactionDimensions } from './ShipmentPackingSlipTransactionDimensions';
import { ShipmentPackingSlipTransactionDimensionsRequestBuilder } from './ShipmentPackingSlipTransactionDimensionsRequestBuilder';
import { ShipmentPackingSlipJournalLinesApi } from './ShipmentPackingSlipJournalLinesApi';
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
export class ShipmentPackingSlipTransactionDimensionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ShipmentPackingSlipTransactionDimensions<DeSerializersT>,
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
  ): ShipmentPackingSlipTransactionDimensionsApi<DeSerializersT> {
    return new ShipmentPackingSlipTransactionDimensionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link shipmentPackingSlipJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_LINE: OneToOneLink<
      ShipmentPackingSlipTransactionDimensions<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ShipmentPackingSlipJournalLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SHIPMENT_PACKING_SLIP_JOURNAL_LINE: new OneToOneLink(
        'ShipmentPackingSlipJournalLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ShipmentPackingSlipTransactionDimensions;

  requestBuilder(): ShipmentPackingSlipTransactionDimensionsRequestBuilder<DeSerializersT> {
    return new ShipmentPackingSlipTransactionDimensionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ShipmentPackingSlipTransactionDimensions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShipmentPackingSlipTransactionDimensions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipmentPackingSlipTransactionDimensions<DeSerializersT>,
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
    typeof ShipmentPackingSlipTransactionDimensions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipmentPackingSlipTransactionDimensions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_PACKING_SLIP_VERSION_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_INVENTORY_OWNER_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_PACKING_SLIP_JOURNAL: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_SYSTEM_ITEM_MASTER_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT_UNIT_SYMBOL: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_PACKING_SLIP_TRANS: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HANDLING_QUANTITY: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HANDLING_UNIT_SYMBOL: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_SITE_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipmentPackingSlipJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_LINE: OneToOneLink<
      ShipmentPackingSlipTransactionDimensions<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ShipmentPackingSlipTransactionDimensions<DeSerializers>
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
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shipmentPackingSlipVersionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_PACKING_SLIP_VERSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipmentPackingSlipVersionNumber',
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
          true
        ),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
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
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemInventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemInventoryOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderedInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'OrderedInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipmentPackingSlipJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_PACKING_SLIP_JOURNAL: fieldBuilder.buildEdmTypeField(
          'ShipmentPackingSlipJournal',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemItemMasterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_MASTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemMasterNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link weightUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'WeightUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipmentPackingSlipTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_PACKING_SLIP_TRANS: fieldBuilder.buildEdmTypeField(
          'ShipmentPackingSlipTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemNumber',
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
         * Static representation of the {@link shippingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link handlingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'HandlingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shippingWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ShippingWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link handlingUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLING_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'HandlingUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingSiteId',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', ShipmentPackingSlipTransactionDimensions)
      };
    }

    return this._schema;
  }
}
