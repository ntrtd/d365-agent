/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentOrderLineUpdates } from './OutboundShipmentOrderLineUpdates';
import { OutboundShipmentOrderLineUpdatesRequestBuilder } from './OutboundShipmentOrderLineUpdatesRequestBuilder';
import { OutboundShipmentOrderUpdatesApi } from './OutboundShipmentOrderUpdatesApi';
import { OutboundShipmentOrderLineInventDimUpdatesApi } from './OutboundShipmentOrderLineInventDimUpdatesApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class OutboundShipmentOrderLineUpdatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OutboundShipmentOrderLineUpdates<DeSerializersT>, DeSerializersT>
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
  ): OutboundShipmentOrderLineUpdatesApi<DeSerializersT> {
    return new OutboundShipmentOrderLineUpdatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link outboundShipmentOrderUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_UPDATE: OneToOneLink<
      OutboundShipmentOrderLineUpdates<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderUpdatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderLineInventDimUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINE_INVENT_DIM_UPDATE: OneToManyLink<
      OutboundShipmentOrderLineUpdates<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineInventDimUpdatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OutboundShipmentOrderUpdatesApi<DeSerializersT>,
      OutboundShipmentOrderLineInventDimUpdatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OUTBOUND_SHIPMENT_ORDER_UPDATE: new OneToOneLink(
        'OutboundShipmentOrderUpdate',
        this,
        linkedApis[0]
      ),
      OUTBOUND_SHIPMENT_ORDER_LINE_INVENT_DIM_UPDATE: new OneToManyLink(
        'OutboundShipmentOrderLineInventDimUpdate',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = OutboundShipmentOrderLineUpdates;

  requestBuilder(): OutboundShipmentOrderLineUpdatesRequestBuilder<DeSerializersT> {
    return new OutboundShipmentOrderLineUpdatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentOrderLineUpdates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentOrderLineUpdates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentOrderLineUpdates<DeSerializersT>,
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
    typeof OutboundShipmentOrderLineUpdates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentOrderLineUpdates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_UPDATE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_ORIGIN_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_LINE_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TOTAL_SHIPPED_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERED_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERED_UNIT_SYMBOL: OrderableEdmTypeField<
      OutboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_PICKED_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link outboundShipmentOrderUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_UPDATE: OneToOneLink<
      OutboundShipmentOrderLineUpdates<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderUpdatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderLineInventDimUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINE_INVENT_DIM_UPDATE: OneToManyLink<
      OutboundShipmentOrderLineUpdates<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineInventDimUpdatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OutboundShipmentOrderLineUpdates<DeSerializers>>;
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
         * Static representation of the {@link totalShippedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_SHIPPED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TotalShippedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remainingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingQuantity',
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
         * Static representation of the {@link orderedUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'OrderedUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalPickedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PICKED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TotalPickedQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OutboundShipmentOrderLineUpdates)
      };
    }

    return this._schema;
  }
}
