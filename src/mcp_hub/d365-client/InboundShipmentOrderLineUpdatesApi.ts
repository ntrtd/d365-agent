/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderLineUpdates } from './InboundShipmentOrderLineUpdates';
import { InboundShipmentOrderLineUpdatesRequestBuilder } from './InboundShipmentOrderLineUpdatesRequestBuilder';
import { InboundShipmentOrderLineInventDimUpdatesApi } from './InboundShipmentOrderLineInventDimUpdatesApi';
import { InboundShipmentOrderUpdatesApi } from './InboundShipmentOrderUpdatesApi';
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
export class InboundShipmentOrderLineUpdatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InboundShipmentOrderLineUpdates<DeSerializersT>, DeSerializersT>
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
  ): InboundShipmentOrderLineUpdatesApi<DeSerializersT> {
    return new InboundShipmentOrderLineUpdatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderLineInventDimUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_LINE_INVENT_DIM_UPDATE: OneToOneLink<
      InboundShipmentOrderLineUpdates<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLineInventDimUpdatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_UPDATE: OneToOneLink<
      InboundShipmentOrderLineUpdates<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderUpdatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InboundShipmentOrderLineInventDimUpdatesApi<DeSerializersT>,
      InboundShipmentOrderUpdatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INBOUND_SHIPMENT_ORDER_LINE_INVENT_DIM_UPDATE: new OneToOneLink(
        'InboundShipmentOrderLineInventDimUpdate',
        this,
        linkedApis[0]
      ),
      INBOUND_SHIPMENT_ORDER_UPDATE: new OneToOneLink(
        'InboundShipmentOrderUpdate',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = InboundShipmentOrderLineUpdates;

  requestBuilder(): InboundShipmentOrderLineUpdatesRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderLineUpdatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderLineUpdates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderLineUpdates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderLineUpdates<DeSerializersT>,
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
    typeof InboundShipmentOrderLineUpdates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderLineUpdates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_UPDATE_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_ORIGIN_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_LINE_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ORDERED_QUANTITY: OrderableEdmTypeField<
      InboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERED_UNIT_SYMBOL: OrderableEdmTypeField<
      InboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVED_QUANTITY: OrderableEdmTypeField<
      InboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_QUANTITY: OrderableEdmTypeField<
      InboundShipmentOrderLineUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderLineInventDimUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_LINE_INVENT_DIM_UPDATE: OneToOneLink<
      InboundShipmentOrderLineUpdates<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLineInventDimUpdatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_UPDATE: OneToOneLink<
      InboundShipmentOrderLineUpdates<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderUpdatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundShipmentOrderLineUpdates<DeSerializers>>;
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
         * Static representation of the {@link receivedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReceivedQuantity',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundShipmentOrderLineUpdates)
      };
    }

    return this._schema;
  }
}
