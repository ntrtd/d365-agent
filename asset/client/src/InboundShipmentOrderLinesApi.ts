/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderLines } from './InboundShipmentOrderLines';
import { InboundShipmentOrderLinesRequestBuilder } from './InboundShipmentOrderLinesRequestBuilder';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { InboundShipmentOrderHeadersApi } from './InboundShipmentOrderHeadersApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
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
export class InboundShipmentOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InboundShipmentOrderLines<DeSerializersT>, DeSerializersT>
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
  ): InboundShipmentOrderLinesApi<DeSerializersT> {
    return new InboundShipmentOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      InboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_HEADER: OneToOneLink<
      InboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      InboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UnitsOfMeasureApi<DeSerializersT>,
      InboundShipmentOrderHeadersApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      UNIT_OF_MEASURE: new OneToOneLink('UnitOfMeasure', this, linkedApis[0]),
      INBOUND_SHIPMENT_ORDER_HEADER: new OneToOneLink(
        'InboundShipmentOrderHeader',
        this,
        linkedApis[1]
      ),
      PRODUCT: new OneToOneLink('Product', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = InboundShipmentOrderLines;

  requestBuilder(): InboundShipmentOrderLinesRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderLines<DeSerializersT>,
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
    typeof InboundShipmentOrderLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXPECTED_QUANTITY: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_INVENTORY_OWNER_ID: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_LINE_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIVED_HANDLING_QUANTITY: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNER_ITEM_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASED_QUANTITY: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDERDELIVERY_PERECENTAGE: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WEIGHT_UNIT_SYMBOL: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_HANDLING_QUANTITY: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_UNIT_SYMBOL: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_REFERENCE: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_ORDERED_QUANTITY: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVED_WEIGHT: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HANDLING_UNIT_SYMBOL: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_INVENTORY_STATUS: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CROSS_DOCK_SOURCE_ID: OrderableEdmTypeField<
      InboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      InboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_HEADER: OneToOneLink<
      InboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      InboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundShipmentOrderLines<DeSerializers>>;
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemOrderLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link expectedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ExpectedQuantity',
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
         * Static representation of the {@link overdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'OverdeliveryPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link consignerLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsignerLineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receivedHandlingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_HANDLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReceivedHandlingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consignerItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsignerItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releasedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReleasedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inboundShipmentOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'InboundShipmentOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link underdeliveryPerecentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDERDELIVERY_PERECENTAGE: fieldBuilder.buildEdmTypeField(
          'UnderdeliveryPerecentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link remainingHandlingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_HANDLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingHandlingQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link expectedUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ExpectedUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ConsignerReference',
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
         * Static representation of the {@link remainingOrderedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_ORDERED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingOrderedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivedWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ReceivedWeight',
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
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderedInventoryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_INVENTORY_STATUS: fieldBuilder.buildEdmTypeField(
          'OrderedInventoryStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crossDockSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_DOCK_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'CrossDockSourceId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundShipmentOrderLines)
      };
    }

    return this._schema;
  }
}
