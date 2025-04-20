/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderUpdates } from './InboundShipmentOrderUpdates';
import { InboundShipmentOrderUpdatesRequestBuilder } from './InboundShipmentOrderUpdatesRequestBuilder';
import { InboundShipmentOrderLineUpdatesApi } from './InboundShipmentOrderLineUpdatesApi';
import { WhsInboundShipmentOrderOriginLinkType } from './WhsInboundShipmentOrderOriginLinkType';
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
export class InboundShipmentOrderUpdatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InboundShipmentOrderUpdates<DeSerializersT>, DeSerializersT>
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
  ): InboundShipmentOrderUpdatesApi<DeSerializersT> {
    return new InboundShipmentOrderUpdatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentOrderLineUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_LINE_UPDATE: OneToManyLink<
      InboundShipmentOrderUpdates<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLineUpdatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InboundShipmentOrderLineUpdatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INBOUND_SHIPMENT_ORDER_LINE_UPDATE: new OneToManyLink(
        'InboundShipmentOrderLineUpdate',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InboundShipmentOrderUpdates;

  requestBuilder(): InboundShipmentOrderUpdatesRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderUpdatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderUpdates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderUpdates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderUpdates<DeSerializersT>,
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
    typeof InboundShipmentOrderUpdates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderUpdates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_UPDATE_ID: OrderableEdmTypeField<
      InboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_ORIGIN_ID: OrderableEdmTypeField<
      InboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_RECEIPT_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_RECEIPT_DATE_TIME: OrderableEdmTypeField<
      InboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLANNED_DELIVERY_DATE_TIME: OrderableEdmTypeField<
      InboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLANNED_RECEIPT_DATE_TIME: OrderableEdmTypeField<
      InboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_ORIGIN_LINK_TYPE: EnumField<
      InboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      WhsInboundShipmentOrderOriginLinkType,
      true,
      true
    >;
    PROCESSING_STATUS: EnumField<
      InboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      WhsEwShipmentOrderUpdateStatus,
      true,
      true
    >;
    SHIPMENT_RECEIPT_DOCUMENT_DATE: OrderableEdmTypeField<
      InboundShipmentOrderUpdates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentOrderLineUpdate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_LINE_UPDATE: OneToManyLink<
      InboundShipmentOrderUpdates<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLineUpdatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundShipmentOrderUpdates<DeSerializers>>;
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
         * Static representation of the {@link shipmentReceiptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_RECEIPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipmentReceiptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualReceiptDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_RECEIPT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ActualReceiptDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link plannedReceiptDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_RECEIPT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PlannedReceiptDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inboundShipmentOrderOriginLinkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_ORIGIN_LINK_TYPE: fieldBuilder.buildEnumField(
          'InboundShipmentOrderOriginLinkType',
          WhsInboundShipmentOrderOriginLinkType,
          true
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
         * Static representation of the {@link shipmentReceiptDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_RECEIPT_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'ShipmentReceiptDocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundShipmentOrderUpdates)
      };
    }

    return this._schema;
  }
}
