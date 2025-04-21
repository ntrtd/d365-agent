/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentOrderLines } from './OutboundShipmentOrderLines';
import { OutboundShipmentOrderLinesRequestBuilder } from './OutboundShipmentOrderLinesRequestBuilder';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { OutboundShipmentOrderHeadersApi } from './OutboundShipmentOrderHeadersApi';
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
export class OutboundShipmentOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OutboundShipmentOrderLines<DeSerializersT>, DeSerializersT>
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
  ): OutboundShipmentOrderLinesApi<DeSerializersT> {
    return new OutboundShipmentOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      OutboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      OutboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link outboundShipmentOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADER: OneToOneLink<
      OutboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UnitsOfMeasureApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      UNIT_OF_MEASURE: new OneToOneLink('UnitOfMeasure', this, linkedApis[0]),
      PRODUCT: new OneToOneLink('Product', this, linkedApis[1]),
      OUTBOUND_SHIPMENT_ORDER_HEADER: new OneToOneLink(
        'OutboundShipmentOrderHeader',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = OutboundShipmentOrderLines;

  requestBuilder(): OutboundShipmentOrderLinesRequestBuilder<DeSerializersT> {
    return new OutboundShipmentOrderLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentOrderLines<DeSerializersT>,
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
    typeof OutboundShipmentOrderLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPED_HANDLING_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SELLABLE_DAYS: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_SYSTEM_INVENTORY_OWNER_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ITEM_DESCRIPTION: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_UNIT_SYMBOL: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASED_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_HANDLING_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WEIGHT_UNIT_SYMBOL: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_LINE_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_REFERENCE: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ITEM_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_ORDERED_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERED_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HANDLING_UNIT_SYMBOL: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPED_WEIGHT: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_INVENTORY_STATUS: OrderableEdmTypeField<
      OutboundShipmentOrderLines<DeSerializers>,
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
      OutboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      OutboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link outboundShipmentOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADER: OneToOneLink<
      OutboundShipmentOrderLines<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OutboundShipmentOrderLines<DeSerializers>>;
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
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippedHandlingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_HANDLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ShippedHandlingQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link overdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'OverdeliveryPercentage',
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
         * Static representation of the {@link sellableDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELLABLE_DAYS: fieldBuilder.buildEdmTypeField(
          'SellableDays',
          'Edm.Int32',
          false
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
         * Static representation of the {@link consigneeItemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ConsigneeItemDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderedUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'OrderedUnitSymbol',
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
         * Static representation of the {@link remainingHandlingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_HANDLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingHandlingQuantity',
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
         * Static representation of the {@link consigneeLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsigneeLineNumber',
          'Edm.Int32',
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
         * Static representation of the {@link outboundShipmentOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OutboundShipmentOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ConsigneeReference',
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
         * Static representation of the {@link consigneeItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsigneeItemNumber',
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
         * Static representation of the {@link orderedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OrderedQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link shippedWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ShippedWeight',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link underdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'UnderdeliveryPercentage',
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
         * Static representation of the {@link orderedInventoryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_INVENTORY_STATUS: fieldBuilder.buildEdmTypeField(
          'OrderedInventoryStatus',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OutboundShipmentOrderLines)
      };
    }

    return this._schema;
  }
}
