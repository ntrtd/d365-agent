/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentOrderMessages } from './OutboundShipmentOrderMessages';
import { OutboundShipmentOrderMessagesRequestBuilder } from './OutboundShipmentOrderMessagesRequestBuilder';
import { OutboundShipmentOrderDocumentAttachmentMessagesApi } from './OutboundShipmentOrderDocumentAttachmentMessagesApi';
import { OutboundShipmentOrderLineMessagesApi } from './OutboundShipmentOrderLineMessagesApi';
import { WhsShipmentOrderMessageProcessingStatus } from './WhsShipmentOrderMessageProcessingStatus';
import { Timezone } from './Timezone';
import { WhsOutboundShipmentOrderReservationAtImportPolicy } from './WhsOutboundShipmentOrderReservationAtImportPolicy';
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
export class OutboundShipmentOrderMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OutboundShipmentOrderMessages<DeSerializersT>, DeSerializersT>
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
  ): OutboundShipmentOrderMessagesApi<DeSerializersT> {
    return new OutboundShipmentOrderMessagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderDocumentAttachmentMessage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_DOCUMENT_ATTACHMENT_MESSAGE: OneToManyLink<
      OutboundShipmentOrderMessages<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderDocumentAttachmentMessagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link lines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LINES: OneToManyLink<
      OutboundShipmentOrderMessages<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineMessagesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OutboundShipmentOrderDocumentAttachmentMessagesApi<DeSerializersT>,
      OutboundShipmentOrderLineMessagesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OUTBOUND_SHIPMENT_ORDER_DOCUMENT_ATTACHMENT_MESSAGE: new OneToManyLink(
        'OutboundShipmentOrderDocumentAttachmentMessage',
        this,
        linkedApis[0]
      ),
      LINES: new OneToManyLink('Lines', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = OutboundShipmentOrderMessages;

  requestBuilder(): OutboundShipmentOrderMessagesRequestBuilder<DeSerializersT> {
    return new OutboundShipmentOrderMessagesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentOrderMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentOrderMessages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentOrderMessages<DeSerializersT>,
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
    typeof OutboundShipmentOrderMessages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentOrderMessages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIVER_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_ROUTE_PLAN_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET_IN_KANA: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CITY: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COUNTY: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_COUNTRY_REGION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ORIGIN: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ZIP_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_SHIPPING_PERIOD_START: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVER_EMAIL: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_CONTACT_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_TRANSPORTATION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COUNTRY_REGION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TYPE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_FROM_WAREHOUSE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_STATUS: EnumField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      WhsShipmentOrderMessageProcessingStatus,
      true,
      true
    >;
    REQUESTED_DELIVERY_PERIOD_END: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVER_CITY: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_MODE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STATE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_EMAIL: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_TIME_ZONE: EnumField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    REQUESTED_DELIVERY_PERIOD_START: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSIGNEE_POST_BOX: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_BROKER_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STATE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ACCOUNT_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_LONGITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVER_ZIP_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_COUNTY: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET_IN_KANA: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_DISTRICT: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_DISTRICT: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_CHANNEL: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_LATITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNEE_TIME_ZONE: EnumField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    RECEIVER_LONGITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_SHIPPING_PERIOD_END: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIPPING_CARRIER_SERVICE_GROUP_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_POST_BOX: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_TELEPHONE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_LATITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNEE_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_TELEPHONE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_REFERENCE: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_CITY_IN_KANA: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CITY_IN_KANA: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CONTACT_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVATION_AT_IMPORT_POLICY: EnumField<
      OutboundShipmentOrderMessages<DeSerializers>,
      DeSerializersT,
      WhsOutboundShipmentOrderReservationAtImportPolicy,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderDocumentAttachmentMessage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_DOCUMENT_ATTACHMENT_MESSAGE: OneToManyLink<
      OutboundShipmentOrderMessages<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderDocumentAttachmentMessagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link lines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LINES: OneToManyLink<
      OutboundShipmentOrderMessages<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineMessagesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OutboundShipmentOrderMessages<DeSerializers>>;
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
         * Static representation of the {@link receiverName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_NAME: fieldBuilder.buildEdmTypeField(
          'ReceiverName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationRoutePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_ROUTE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'TransportationRoutePlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_STREET: fieldBuilder.buildEdmTypeField(
          'ConsigneeStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ReceiverStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_CITY: fieldBuilder.buildEdmTypeField(
          'ConsigneeCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_COUNTY: fieldBuilder.buildEdmTypeField(
          'ReceiverCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ConsigneeCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsigneeStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneePurchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsigneePurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_NAME: fieldBuilder.buildEdmTypeField(
          'ConsigneeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ORIGIN: fieldBuilder.buildEdmTypeField(
          'OrderOrigin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ConsigneeZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedShippingPeriodStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIPPING_PERIOD_START: fieldBuilder.buildEdmTypeField(
          'RequestedShippingPeriodStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link receiverEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_EMAIL: fieldBuilder.buildEdmTypeField(
          'ReceiverEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverContactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ReceiverContactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedTransportationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_TRANSPORTATION_ID: fieldBuilder.buildEdmTypeField(
          'PlannedTransportationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ReceiverCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TYPE: fieldBuilder.buildEdmTypeField(
          'OrderType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipFromWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FROM_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ShipFromWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'ProcessingStatus',
          WhsShipmentOrderMessageProcessingStatus,
          true
        ),
        /**
         * Static representation of the {@link requestedDeliveryPeriodEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DELIVERY_PERIOD_END: fieldBuilder.buildEdmTypeField(
          'RequestedDeliveryPeriodEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link receiverCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_CITY: fieldBuilder.buildEdmTypeField(
          'ReceiverCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_MODE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STATE: fieldBuilder.buildEdmTypeField(
          'ReceiverState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_EMAIL: fieldBuilder.buildEdmTypeField(
          'ConsigneeEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_TIME_ZONE: fieldBuilder.buildEnumField(
          'ReceiverTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link requestedDeliveryPeriodStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DELIVERY_PERIOD_START: fieldBuilder.buildEdmTypeField(
          'RequestedDeliveryPeriodStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consigneePostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ConsigneePostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STREET: fieldBuilder.buildEdmTypeField(
          'ReceiverStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationBrokerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_BROKER_ID: fieldBuilder.buildEdmTypeField(
          'TransportationBrokerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_STATE: fieldBuilder.buildEdmTypeField(
          'ConsigneeState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsigneeAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'ConsigneeLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiverZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ReceiverZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_COUNTY: fieldBuilder.buildEdmTypeField(
          'ConsigneeCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ConsigneeStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverDistrict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_DISTRICT: fieldBuilder.buildEdmTypeField(
          'ReceiverDistrict',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeDistrict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_DISTRICT: fieldBuilder.buildEdmTypeField(
          'ConsigneeDistrict',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceiverStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderChannel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_CHANNEL: fieldBuilder.buildEdmTypeField(
          'OrderChannel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_LATITUDE: fieldBuilder.buildEdmTypeField(
          'ReceiverLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consigneeTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_TIME_ZONE: fieldBuilder.buildEnumField(
          'ConsigneeTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link receiverLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'ReceiverLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestedShippingPeriodEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIPPING_PERIOD_END: fieldBuilder.buildEdmTypeField(
          'RequestedShippingPeriodEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shippingCarrierServiceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ReceiverPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverTelephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_TELEPHONE: fieldBuilder.buildEdmTypeField(
          'ReceiverTelephone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverBuildingComplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_BUILDING_COMPLEMENT: fieldBuilder.buildEdmTypeField(
          'ReceiverBuildingComplement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_LATITUDE: fieldBuilder.buildEdmTypeField(
          'ConsigneeLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consigneeBuildingComplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_BUILDING_COMPLEMENT: fieldBuilder.buildEdmTypeField(
          'ConsigneeBuildingComplement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeTelephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_TELEPHONE: fieldBuilder.buildEdmTypeField(
          'ConsigneeTelephone',
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
         * Static representation of the {@link receiverCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ReceiverCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ConsigneeCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeContactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ConsigneeContactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reservationAtImportPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_AT_IMPORT_POLICY: fieldBuilder.buildEnumField(
          'ReservationAtImportPolicy',
          WhsOutboundShipmentOrderReservationAtImportPolicy,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OutboundShipmentOrderMessages)
      };
    }

    return this._schema;
  }
}
