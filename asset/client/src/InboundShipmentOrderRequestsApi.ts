/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderRequests } from './InboundShipmentOrderRequests';
import { InboundShipmentOrderRequestsRequestBuilder } from './InboundShipmentOrderRequestsRequestBuilder';
import { InboundShipmentOrderLineRequestsApi } from './InboundShipmentOrderLineRequestsApi';
import { Timezone } from './Timezone';
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
export class InboundShipmentOrderRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InboundShipmentOrderRequests<DeSerializersT>, DeSerializersT>
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
  ): InboundShipmentOrderRequestsApi<DeSerializersT> {
    return new InboundShipmentOrderRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link lines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LINES: OneToManyLink<
      InboundShipmentOrderRequests<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLineRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InboundShipmentOrderLineRequestsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LINES: new OneToManyLink('Lines', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = InboundShipmentOrderRequests;

  requestBuilder(): InboundShipmentOrderRequestsRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderRequests<DeSerializersT>,
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
    typeof InboundShipmentOrderRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_REQUEST_ID: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSIGNER_STATE: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_POST_BOX: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STATE: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_CITY_IN_KANA: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_SHIPMENT_ORDER_ORIGIN_ID: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_NAME: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_CONTACT_NAME: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_POST_BOX: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_LONGITUDE: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNER_STREET: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_DISTRICT: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNER_COUNTRY_REGION_ID: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_ZIP_CODE: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STREET_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_CONTACT_EMAIL: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_COUNTRY_REGION_ID: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_LATITUDE: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNED_RECEIPT_PERIOD_START: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSIGNER_NAME: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_CITY_IN_KANA: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STREET: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_COUNTY: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_CITY: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_DISTRICT: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNER_STREET_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_LONGITUDE: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNER_COUNTY: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_REFERENCE: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STREET_IN_KANA: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_TIME_ZONE: EnumField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    SENDER_LATITUDE: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNER_CONTACT_PHONE: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_RECEIPT_PERIOD_END: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSIGNER_STREET_IN_KANA: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_VERSION: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONSIGNER_TIME_ZONE: EnumField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CONSIGNER_CITY: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_ZIP_CODE: OrderableEdmTypeField<
      InboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link lines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LINES: OneToManyLink<
      InboundShipmentOrderRequests<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLineRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundShipmentOrderRequests<DeSerializers>>;
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
         * Static representation of the {@link inboundShipmentOrderRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'InboundShipmentOrderRequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link consignerState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_STATE: fieldBuilder.buildEdmTypeField(
          'ConsignerState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ConsignerPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_STATE: fieldBuilder.buildEdmTypeField(
          'SenderState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'SenderCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inboundShipmentOrderOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'InboundShipmentOrderOriginId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_NAME: fieldBuilder.buildEdmTypeField(
          'SenderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerContactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ConsignerContactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_POST_BOX: fieldBuilder.buildEdmTypeField(
          'SenderPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'ConsignerLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consignerStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_STREET: fieldBuilder.buildEdmTypeField(
          'ConsignerStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'ConsignerBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerDistrict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_DISTRICT: fieldBuilder.buildEdmTypeField(
          'ConsignerDistrict',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link consignerCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ConsignerCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ConsignerZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsignerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'SenderStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerContactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'ConsignerContactEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'SenderCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_LATITUDE: fieldBuilder.buildEdmTypeField(
          'ConsignerLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plannedReceiptPeriodStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_RECEIPT_PERIOD_START: fieldBuilder.buildEdmTypeField(
          'PlannedReceiptPeriodStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consignerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_NAME: fieldBuilder.buildEdmTypeField(
          'ConsignerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ConsignerCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_STREET: fieldBuilder.buildEdmTypeField(
          'SenderStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_COUNTY: fieldBuilder.buildEdmTypeField(
          'SenderCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_CITY: fieldBuilder.buildEdmTypeField(
          'SenderCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderDistrict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_DISTRICT: fieldBuilder.buildEdmTypeField(
          'SenderDistrict',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link consignerStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsignerStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'SenderLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consignerCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_COUNTY: fieldBuilder.buildEdmTypeField(
          'ConsignerCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'SenderBuildingCompliment',
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
         * Static representation of the {@link senderStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'SenderStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_TIME_ZONE: fieldBuilder.buildEnumField(
          'SenderTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link senderLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_LATITUDE: fieldBuilder.buildEdmTypeField(
          'SenderLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consignerContactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'ConsignerContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedReceiptPeriodEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_RECEIPT_PERIOD_END: fieldBuilder.buildEdmTypeField(
          'PlannedReceiptPeriodEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consignerStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ConsignerStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_VERSION: fieldBuilder.buildEdmTypeField(
          'RequestVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link consignerTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_TIME_ZONE: fieldBuilder.buildEnumField(
          'ConsignerTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link consignerCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_CITY: fieldBuilder.buildEdmTypeField(
          'ConsignerCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'SenderZipCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundShipmentOrderRequests)
      };
    }

    return this._schema;
  }
}
