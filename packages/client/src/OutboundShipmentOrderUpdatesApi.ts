/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentOrderUpdates } from './OutboundShipmentOrderUpdates';
import { OutboundShipmentOrderUpdatesRequestBuilder } from './OutboundShipmentOrderUpdatesRequestBuilder';
import { OutboundShipmentOrderLineUpdatesApi } from './OutboundShipmentOrderLineUpdatesApi';
import { WhsEwShipmentOrderUpdateStatus } from './WhsEwShipmentOrderUpdateStatus';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class OutboundShipmentOrderUpdatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OutboundShipmentOrderUpdates<DeSerializersT>, DeSerializersT>
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
  ): OutboundShipmentOrderUpdatesApi<DeSerializersT> {
    return new OutboundShipmentOrderUpdatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderLineUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINE_UPDATE: OneToManyLink<
      OutboundShipmentOrderUpdates<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineUpdatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OutboundShipmentOrderLineUpdatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      OUTBOUND_SHIPMENT_ORDER_LINE_UPDATE: new OneToManyLink(
        'OutboundShipmentOrderLineUpdate',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = OutboundShipmentOrderUpdates;

  requestBuilder(): OutboundShipmentOrderUpdatesRequestBuilder<DeSerializersT> {
    return new OutboundShipmentOrderUpdatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentOrderUpdates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentOrderUpdates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentOrderUpdates<DeSerializersT>,
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
    typeof OutboundShipmentOrderUpdates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentOrderUpdates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_UPDATE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_ORIGIN_ID: OrderableEdmTypeField<
      OutboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTUAL_SHIPPING_DATE_TIME: OrderableEdmTypeField<
      OutboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PACKING_SLIP_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_DELIVERY_DATE_TIME: OrderableEdmTypeField<
      OutboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESSING_STATUS: EnumField<
      OutboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      WhsEwShipmentOrderUpdateStatus,
      true,
      true
    >;
    TRANSPORTATION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_SLIP_DOCUMENT_DATE: OrderableEdmTypeField<
      OutboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLANNED_SHIPPING_DATE_TIME: OrderableEdmTypeField<
      OutboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderLineUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINE_UPDATE: OneToManyLink<
      OutboundShipmentOrderUpdates<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineUpdatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OutboundShipmentOrderUpdates<DeSerializers>>;
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
         * Static representation of the {@link actualShippingDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_SHIPPING_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ActualShippingDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link packingSlipNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_NUMBER: fieldBuilder.buildEdmTypeField(
          'PackingSlipNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedDeliveryDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_DELIVERY_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PlannedDeliveryDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link processingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'ProcessingStatus',
          WhsEwShipmentOrderUpdateStatus,
          true
        ),
        /**
         * Static representation of the {@link transportationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_ID: fieldBuilder.buildEdmTypeField(
          'TransportationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingSlipDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'PackingSlipDocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link plannedShippingDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_SHIPPING_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PlannedShippingDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OutboundShipmentOrderUpdates)
      };
    }

    return this._schema;
  }
}
