/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderLineInventDimUpdates } from './InboundShipmentOrderLineInventDimUpdates';
import { InboundShipmentOrderLineInventDimUpdatesRequestBuilder } from './InboundShipmentOrderLineInventDimUpdatesRequestBuilder';
import { InboundShipmentOrderLineUpdatesApi } from './InboundShipmentOrderLineUpdatesApi';
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
export class InboundShipmentOrderLineInventDimUpdatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
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
  ): InboundShipmentOrderLineInventDimUpdatesApi<DeSerializersT> {
    return new InboundShipmentOrderLineInventDimUpdatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderLineUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_LINE_UPDATE: OneToOneLink<
      InboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLineUpdatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InboundShipmentOrderLineUpdatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INBOUND_SHIPMENT_ORDER_LINE_UPDATE: new OneToOneLink(
        'InboundShipmentOrderLineUpdate',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InboundShipmentOrderLineInventDimUpdates;

  requestBuilder(): InboundShipmentOrderLineInventDimUpdatesRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderLineInventDimUpdatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
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
    typeof InboundShipmentOrderLineInventDimUpdates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderLineInventDimUpdates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_UPDATE_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_ORIGIN_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_LINE_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVED_QUANTITY: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_DISPOSITION_CODE: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderLineUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_LINE_UPDATE: OneToOneLink<
      InboundShipmentOrderLineInventDimUpdates<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLineUpdatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      InboundShipmentOrderLineInventDimUpdates<DeSerializers>
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
         * Static representation of the {@link inboundShipmentOrderUpdateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_UPDATE_ID: fieldBuilder.buildEdmTypeField(
          'InboundShipmentOrderUpdateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inboundShipmentOrderOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'InboundShipmentOrderOriginId',
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
         * Static representation of the {@link receivedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReceivedQuantity',
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
         * Static representation of the {@link orderedInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'OrderedInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemDispositionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_DISPOSITION_CODE: fieldBuilder.buildEdmTypeField(
          'SourceSystemDispositionCode',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', InboundShipmentOrderLineInventDimUpdates)
      };
    }

    return this._schema;
  }
}
