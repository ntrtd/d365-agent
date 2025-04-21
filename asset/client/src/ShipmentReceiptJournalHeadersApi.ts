/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipmentReceiptJournalHeaders } from './ShipmentReceiptJournalHeaders';
import { ShipmentReceiptJournalHeadersRequestBuilder } from './ShipmentReceiptJournalHeadersRequestBuilder';
import { ShipmentReceiptJournalLinesApi } from './ShipmentReceiptJournalLinesApi';
import { DeliveryTermsApi } from './DeliveryTermsApi';
import { ShippingCarrierServicesApi } from './ShippingCarrierServicesApi';
import { WarehouseIntegrationSourceSystemsApi } from './WarehouseIntegrationSourceSystemsApi';
import { InboundLoadHeadersApi } from './InboundLoadHeadersApi';
import { WarehousesApi } from './WarehousesApi';
import { ShippingCarriersApi } from './ShippingCarriersApi';
import { InboundShipmentHeadersApi } from './InboundShipmentHeadersApi';
import { WhsShipmentJourPostingStatus } from './WhsShipmentJourPostingStatus';
import { NoYes } from './NoYes';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ShipmentReceiptJournalHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShipmentReceiptJournalHeaders<DeSerializersT>, DeSerializersT>
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
  ): ShipmentReceiptJournalHeadersApi<DeSerializersT> {
    return new ShipmentReceiptJournalHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReceiptJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECEIPT_JOURNAL_LINES: OneToManyLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link load} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      InboundLoadHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      InboundShipmentHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ShipmentReceiptJournalLinesApi<DeSerializersT>,
      DeliveryTermsApi<DeSerializersT>,
      ShippingCarrierServicesApi<DeSerializersT>,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>,
      InboundLoadHeadersApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ShippingCarriersApi<DeSerializersT>,
      InboundShipmentHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SHIPMENT_RECEIPT_JOURNAL_LINES: new OneToManyLink(
        'ShipmentReceiptJournalLines',
        this,
        linkedApis[0]
      ),
      DELIVERY_TERMS: new OneToOneLink('DeliveryTerms', this, linkedApis[1]),
      SHIPPING_CARRIER_SERVICE: new OneToOneLink(
        'ShippingCarrierService',
        this,
        linkedApis[2]
      ),
      SOURCE_SYSTEM: new OneToOneLink('SourceSystem', this, linkedApis[3]),
      LOAD: new OneToOneLink('Load', this, linkedApis[4]),
      RECEIVING_WAREHOUSE: new OneToOneLink(
        'ReceivingWarehouse',
        this,
        linkedApis[5]
      ),
      SHIPPING_CARRIER: new OneToOneLink(
        'ShippingCarrier',
        this,
        linkedApis[6]
      ),
      SHIPMENT: new OneToOneLink('Shipment', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = ShipmentReceiptJournalHeaders;

  requestBuilder(): ShipmentReceiptJournalHeadersRequestBuilder<DeSerializersT> {
    return new ShipmentReceiptJournalHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ShipmentReceiptJournalHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipmentReceiptJournalHeaders<DeSerializersT>,
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
    typeof ShipmentReceiptJournalHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipmentReceiptJournalHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_RECEIPT_VERSION_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSIGNER_STATE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_POST_BOX: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STATE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_CITY_IN_KANA: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_NAME: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_POST_BOX: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSIGNER_LONGITUDE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNER_STREET: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_DISTRICT: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNER_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_ZIP_CODE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STREET_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_LATITUDE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_COMPLETED_PACKING_SLIP_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_STATUS: EnumField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      WhsShipmentJourPostingStatus,
      true,
      true
    >;
    CONSIGNER_NAME: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_CITY_IN_KANA: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_RECEIPT_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STREET: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_COUNTY: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_CITY: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_DISTRICT: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNER_STREET_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_LONGITUDE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNER_COUNTY: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_REFERENCE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_STREET_IN_KANA: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SENDER_TIME_ZONE: EnumField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    SENDER_LATITUDE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNER_STREET_IN_KANA: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_TIME_ZONE: EnumField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CONSIGNER_CITY: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_DATE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SENDER_ZIP_CODE: OrderableEdmTypeField<
      ShipmentReceiptJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReceiptJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECEIPT_JOURNAL_LINES: OneToManyLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link load} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      InboundLoadHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT: OneToOneLink<
      ShipmentReceiptJournalHeaders<DeSerializersT>,
      DeSerializersT,
      InboundShipmentHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ShipmentReceiptJournalHeaders<DeSerializers>>;
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
         * Static representation of the {@link shipmentReceiptVersionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_RECEIPT_VERSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipmentReceiptVersionNumber',
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
         * Static representation of the {@link shipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'ShipmentId',
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
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
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
         * Static representation of the {@link senderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_NAME: fieldBuilder.buildEdmTypeField(
          'SenderName',
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
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingCompletedPackingSlipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_COMPLETED_PACKING_SLIP_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingCompletedPackingSlipId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_STATUS: fieldBuilder.buildEnumField(
          'PostingStatus',
          WhsShipmentJourPostingStatus,
          true
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
         * Static representation of the {@link loadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ID: fieldBuilder.buildEdmTypeField('LoadId', 'Edm.String', true),
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
         * Static representation of the {@link shipmentReceiptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_RECEIPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipmentReceiptNumber',
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
         * Static representation of the {@link consignerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ConsignerReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderBuildingComplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_BUILDING_COMPLEMENT: fieldBuilder.buildEdmTypeField(
          'SenderBuildingComplement',
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
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
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
         * Static representation of the {@link consignerStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ConsignerStreetInKana',
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
         * Static representation of the {@link receiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'ReceiptDate',
          'Edm.DateTimeOffset',
          false
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
        ALL_FIELDS: new AllFields('*', ShipmentReceiptJournalHeaders)
      };
    }

    return this._schema;
  }
}
