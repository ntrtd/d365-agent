/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseWorkLines } from './WarehouseWorkLines';
import { WarehouseWorkLinesRequestBuilder } from './WarehouseWorkLinesRequestBuilder';
import { WarehouseWorkHeadersApi } from './WarehouseWorkHeadersApi';
import { NoYes } from './NoYes';
import { WhsWorkStatus } from './WhsWorkStatus';
import { WhsWorkType } from './WhsWorkType';
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
export class WarehouseWorkLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WarehouseWorkLines<DeSerializersT>, DeSerializersT>
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
  ): WarehouseWorkLinesApi<DeSerializersT> {
    return new WarehouseWorkLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link warehouseWorkHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_HEADER: OneToOneLink<
      WarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WarehouseWorkHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_WORK_HEADER: new OneToOneLink(
        'WarehouseWorkHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WarehouseWorkLines;

  requestBuilder(): WarehouseWorkLinesRequestBuilder<DeSerializersT> {
    return new WarehouseWorkLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarehouseWorkLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WarehouseWorkLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseWorkLines<DeSerializersT>,
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
    typeof WarehouseWorkLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseWorkLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_WORK_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_LINE_NUMBER: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_WORK_LINE_MANDATORY: EnumField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SORT_ORDER_CODE: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_ORDER_NUMBER: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_WORK_CLOSED_DATE_TIME: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_WAREHOUSE_MOBILE_DEVICE_USER_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_WORK_QUANTITY: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAREHOUSE_ZONE_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_PROCESSING_TIME_SECONDS: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HANDLING_QUANTITY: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_PACKING_TOTE_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATED_PROCESSING_TIME_SECONDS: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WORK_EXECUTION_STOPPED: EnumField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_WORK_STATUS: EnumField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      WhsWorkStatus,
      true,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_QUANTITY: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORK_QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_WORK_PROCESSING_START_DATE_TIME: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WAREHOUSE_WORK_TYPE: EnumField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      WhsWorkType,
      true,
      true
    >;
    FEFO_ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_HANDLING_QUANTITY: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTRA_HANDLING_QUANTITY: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTAINER_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REPLENISHMENT_NEEDED: EnumField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAPTURED_WEIGHT: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_LINE_PAIR_ID: OrderableEdmTypeField<
      WarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseWorkHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_HEADER: OneToOneLink<
      WarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseWorkLines<DeSerializers>>;
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
         * Static representation of the {@link warehouseWorkId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isWorkLineMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORK_LINE_MANDATORY: fieldBuilder.buildEnumField(
          'IsWorkLineMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sortOrderCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_ORDER_CODE: fieldBuilder.buildEdmTypeField(
          'SortOrderCode',
          'Edm.Int32',
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
         * Static representation of the {@link sourceOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceOrderNumber',
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
         * Static representation of the {@link warehouseWorkClosedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_CLOSED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkClosedDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link processingWarehouseMobileDeviceUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_WAREHOUSE_MOBILE_DEVICE_USER_ID:
          fieldBuilder.buildEdmTypeField(
            'ProcessingWarehouseMobileDeviceUserId',
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
         * Static representation of the {@link remainingWorkQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_WORK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingWorkQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warehouseZoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ZONE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseZoneId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualProcessingTimeSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_PROCESSING_TIME_SECONDS: fieldBuilder.buildEdmTypeField(
          'ActualProcessingTimeSeconds',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link originalPackingToteLicensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_PACKING_TOTE_LICENSE_PLATE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'OriginalPackingToteLicensePlateNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link estimatedProcessingTimeSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_PROCESSING_TIME_SECONDS: fieldBuilder.buildEdmTypeField(
          'EstimatedProcessingTimeSeconds',
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
         * Static representation of the {@link isWorkExecutionStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORK_EXECUTION_STOPPED: fieldBuilder.buildEnumField(
          'IsWorkExecutionStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_STATUS: fieldBuilder.buildEnumField(
          'WarehouseWorkStatus',
          WhsWorkStatus,
          true
        ),
        /**
         * Static representation of the {@link loadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ID: fieldBuilder.buildEdmTypeField('LoadId', 'Edm.String', true),
        /**
         * Static representation of the {@link shipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'ShipmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'WorkQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workQuantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'WorkQuantityUnitSymbol',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
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
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkProcessingStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_PROCESSING_START_DATE_TIME:
          fieldBuilder.buildEdmTypeField(
            'WarehouseWorkProcessingStartDateTime',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link warehouseWorkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_TYPE: fieldBuilder.buildEnumField(
          'WarehouseWorkType',
          WhsWorkType,
          true
        ),
        /**
         * Static representation of the {@link fefoItemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEFO_ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'FEFOItemBatchNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingHandlingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_HANDLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingHandlingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link extraHandlingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTRA_HANDLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ExtraHandlingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link containerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTAINER_ID: fieldBuilder.buildEdmTypeField(
          'ContainerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReplenishmentNeeded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REPLENISHMENT_NEEDED: fieldBuilder.buildEnumField(
          'IsReplenishmentNeeded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link capturedWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_WEIGHT: fieldBuilder.buildEdmTypeField(
          'CapturedWeight',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link workLinePairId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_LINE_PAIR_ID: fieldBuilder.buildEdmTypeField(
          'WorkLinePairId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseWorkLines)
      };
    }

    return this._schema;
  }
}
