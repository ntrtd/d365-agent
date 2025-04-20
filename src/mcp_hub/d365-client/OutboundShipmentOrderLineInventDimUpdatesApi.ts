/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentOrderLineInventDimUpdates } from './OutboundShipmentOrderLineInventDimUpdates';
import { OutboundShipmentOrderLineInventDimUpdatesRequestBuilder } from './OutboundShipmentOrderLineInventDimUpdatesRequestBuilder';
import { OutboundShipmentOrderLineUpdatesApi } from './OutboundShipmentOrderLineUpdatesApi';
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
export class OutboundShipmentOrderLineInventDimUpdatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
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
  ): OutboundShipmentOrderLineInventDimUpdatesApi<DeSerializersT> {
    return new OutboundShipmentOrderLineInventDimUpdatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link outboundShipmentOrderLineUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINE_UPDATE: OneToOneLink<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineUpdatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OutboundShipmentOrderLineUpdatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      OUTBOUND_SHIPMENT_ORDER_LINE_UPDATE: new OneToOneLink(
        'OutboundShipmentOrderLineUpdate',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = OutboundShipmentOrderLineInventDimUpdates;

  requestBuilder(): OutboundShipmentOrderLineInventDimUpdatesRequestBuilder<DeSerializersT> {
    return new OutboundShipmentOrderLineInventDimUpdatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
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
    typeof OutboundShipmentOrderLineInventDimUpdates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentOrderLineInventDimUpdates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_UPDATE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_ORIGIN_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_LINE_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPED_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKED_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link outboundShipmentOrderLineUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINE_UPDATE: OneToOneLink<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineUpdatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      OutboundShipmentOrderLineInventDimUpdates<DeSerializers>
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
         * Static representation of the {@link outboundShipmentOrderUpdateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_UPDATE_ID: fieldBuilder.buildEdmTypeField(
          'OutboundShipmentOrderUpdateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link outboundShipmentOrderOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'OutboundShipmentOrderOriginId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderLineNumber',
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
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ShippedQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PickedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitSymbol',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          OutboundShipmentOrderLineInventDimUpdates
        )
      };
    }

    return this._schema;
  }
}
