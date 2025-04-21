/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderHeaders } from './InboundShipmentOrderHeaders';
import { InboundShipmentOrderHeadersRequestBuilder } from './InboundShipmentOrderHeadersRequestBuilder';
import { WarehouseIntegrationSourceSystemsApi } from './WarehouseIntegrationSourceSystemsApi';
import { WarehousesApi } from './WarehousesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { InboundShipmentOrderLinesApi } from './InboundShipmentOrderLinesApi';
import { WhsInboundShipmentType } from './WhsInboundShipmentType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class InboundShipmentOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InboundShipmentOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): InboundShipmentOrderHeadersApi<DeSerializersT> {
    return new InboundShipmentOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      InboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE: OneToOneLink<
      InboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      InboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_LINES: OneToManyLink<
      InboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      InboundShipmentOrderLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SOURCE_SYSTEM: new OneToOneLink('SourceSystem', this, linkedApis[0]),
      RECEIVING_WAREHOUSE: new OneToOneLink(
        'ReceivingWarehouse',
        this,
        linkedApis[1]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[2]
      ),
      INBOUND_SHIPMENT_ORDER_LINES: new OneToManyLink(
        'InboundShipmentOrderLines',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = InboundShipmentOrderHeaders;

  requestBuilder(): InboundShipmentOrderHeadersRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderHeaders<DeSerializersT>,
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
    typeof InboundShipmentOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ORDER_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSIGNER_EMAIL: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_STATE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_POST_BOX: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STATE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_SHIPMENT_TYPE: EnumField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      WhsInboundShipmentType,
      true,
      true
    >;
    ORDER_ORIGIN: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_NAME: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_CONTACT_NAME: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_POST_BOX: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_LONGITUDE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNER_STREET: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_CHANNEL: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_DISTRICT: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SENDER_CITYIN_KANA: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_COUNTRY_REGION_ID: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_ZIP_CODE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STREET_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_COUNTRY_REGION_ID: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_LATITUDE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNED_RECEIPT_PERIOD_START: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSIGNER_NAME: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_CITY_IN_KANA: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STREET: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_COUNTY: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ORDER_TYPE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_CITY: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_DISTRICT: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNER_TELEPHONE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_STREET_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_LONGITUDE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNER_COUNTY: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_REFERENCE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ORDER_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STREET_IN_KANA: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_TIME_ZONE: EnumField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    SENDER_LATITUDE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNED_RECEIPT_PERIOD_END: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSIGNER_STREET_IN_KANA: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_TIME_ZONE: EnumField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CONSIGNER_CITY: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_ZIP_CODE: OrderableEdmTypeField<
      InboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      InboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE: OneToOneLink<
      InboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      InboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_LINES: OneToManyLink<
      InboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundShipmentOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link inboundShipmentOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'InboundShipmentOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link consignerEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_EMAIL: fieldBuilder.buildEdmTypeField(
          'ConsignerEmail',
          'Edm.String',
          true
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
         * Static representation of the {@link inboundShipmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_TYPE: fieldBuilder.buildEnumField(
          'InboundShipmentType',
          WhsInboundShipmentType,
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
         * Static representation of the {@link orderChannel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_CHANNEL: fieldBuilder.buildEdmTypeField(
          'OrderChannel',
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
         * Static representation of the {@link senderCityinKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_CITYIN_KANA: fieldBuilder.buildEdmTypeField(
          'SenderCityinKana',
          'Edm.String',
          true
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
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
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
         * Static representation of the {@link sourceSystemOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ORDER_TYPE: fieldBuilder.buildEdmTypeField(
          'SourceSystemOrderType',
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
         * Static representation of the {@link consignerTelephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_TELEPHONE: fieldBuilder.buildEdmTypeField(
          'ConsignerTelephone',
          'Edm.String',
          true
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
         * Static representation of the {@link sourceSystemOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemOrderNumber',
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
        ALL_FIELDS: new AllFields('*', InboundShipmentOrderHeaders)
      };
    }

    return this._schema;
  }
}
