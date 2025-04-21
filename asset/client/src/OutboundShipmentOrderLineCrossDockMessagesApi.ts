/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentOrderLineCrossDockMessages } from './OutboundShipmentOrderLineCrossDockMessages';
import { OutboundShipmentOrderLineCrossDockMessagesRequestBuilder } from './OutboundShipmentOrderLineCrossDockMessagesRequestBuilder';
import { OutboundShipmentOrderLineMessagesApi } from './OutboundShipmentOrderLineMessagesApi';
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
export class OutboundShipmentOrderLineCrossDockMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializersT>,
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
  ): OutboundShipmentOrderLineCrossDockMessagesApi<DeSerializersT> {
    return new OutboundShipmentOrderLineCrossDockMessagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link outboundShipmentOrderLineMessage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINE_MESSAGE: OneToOneLink<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineMessagesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OutboundShipmentOrderLineMessagesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      OUTBOUND_SHIPMENT_ORDER_LINE_MESSAGE: new OneToOneLink(
        'OutboundShipmentOrderLineMessage',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = OutboundShipmentOrderLineCrossDockMessages;

  requestBuilder(): OutboundShipmentOrderLineCrossDockMessagesRequestBuilder<DeSerializersT> {
    return new OutboundShipmentOrderLineCrossDockMessagesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentOrderLineCrossDockMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentOrderLineCrossDockMessages<DeSerializersT>,
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
    typeof OutboundShipmentOrderLineCrossDockMessages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentOrderLineCrossDockMessages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_LINE_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CROSS_DOCK_SOURCE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_LINE_REQUESTED_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link outboundShipmentOrderLineMessage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINE_MESSAGE: OneToOneLink<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineMessagesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      OutboundShipmentOrderLineCrossDockMessages<DeSerializers>
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
         * Static representation of the {@link orderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageId',
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
         * Static representation of the {@link crossDockSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_DOCK_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'CrossDockSourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceLineRequestedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_LINE_REQUESTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SourceLineRequestedQuantity',
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
          OutboundShipmentOrderLineCrossDockMessages
        )
      };
    }

    return this._schema;
  }
}
