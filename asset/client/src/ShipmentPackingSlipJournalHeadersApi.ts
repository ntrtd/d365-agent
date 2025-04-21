/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipmentPackingSlipJournalHeaders } from './ShipmentPackingSlipJournalHeaders';
import { ShipmentPackingSlipJournalHeadersRequestBuilder } from './ShipmentPackingSlipJournalHeadersRequestBuilder';
import { DeliveryTermsApi } from './DeliveryTermsApi';
import { WarehousesApi } from './WarehousesApi';
import { ShippingCarrierServicesApi } from './ShippingCarrierServicesApi';
import { WarehouseIntegrationSourceSystemsApi } from './WarehouseIntegrationSourceSystemsApi';
import { OutboundLoadHeadersApi } from './OutboundLoadHeadersApi';
import { ShippingCarriersApi } from './ShippingCarriersApi';
import { OutboundShipmentHeadersApi } from './OutboundShipmentHeadersApi';
import { ShipmentPackingSlipJournalLinesApi } from './ShipmentPackingSlipJournalLinesApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
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
export class ShipmentPackingSlipJournalHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShipmentPackingSlipJournalHeaders<DeSerializersT>, DeSerializersT>
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
  ): ShipmentPackingSlipJournalHeadersApi<DeSerializersT> {
    return new ShipmentPackingSlipJournalHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_WAREHOUSE: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link load} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      OutboundLoadHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_LINES: OneToManyLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DeliveryTermsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ShippingCarrierServicesApi<DeSerializersT>,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>,
      OutboundLoadHeadersApi<DeSerializersT>,
      ShippingCarriersApi<DeSerializersT>,
      OutboundShipmentHeadersApi<DeSerializersT>,
      ShipmentPackingSlipJournalLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DELIVERY_TERMS: new OneToOneLink('DeliveryTerms', this, linkedApis[0]),
      SHIPPING_WAREHOUSE: new OneToOneLink(
        'ShippingWarehouse',
        this,
        linkedApis[1]
      ),
      SHIPPING_CARRIER_SERVICE: new OneToOneLink(
        'ShippingCarrierService',
        this,
        linkedApis[2]
      ),
      SOURCE_SYSTEM: new OneToOneLink('SourceSystem', this, linkedApis[3]),
      LOAD: new OneToOneLink('Load', this, linkedApis[4]),
      SHIPPING_CARRIER: new OneToOneLink(
        'ShippingCarrier',
        this,
        linkedApis[5]
      ),
      SHIPMENT: new OneToOneLink('Shipment', this, linkedApis[6]),
      SHIPMENT_PACKING_SLIP_JOURNAL_LINES: new OneToManyLink(
        'ShipmentPackingSlipJournalLines',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = ShipmentPackingSlipJournalHeaders;

  requestBuilder(): ShipmentPackingSlipJournalHeadersRequestBuilder<DeSerializersT> {
    return new ShipmentPackingSlipJournalHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ShipmentPackingSlipJournalHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipmentPackingSlipJournalHeaders<DeSerializersT>,
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
    typeof ShipmentPackingSlipJournalHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipmentPackingSlipJournalHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_PACKING_SLIP_VERSION_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIVER_NAME: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET_IN_KANA: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CITY: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COUNTY: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_NAME: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ZIP_CODE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_FROM_WAREHOUSE_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_CITY: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STATE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_TIME_ZONE: EnumField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CONSIGNEE_POST_BOX: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STATE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_LONGITUDE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPMENT_PACKING_SLIP_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_ZIP_CODE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_COUNTY: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET_IN_KANA: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_DISTRICT: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNEE_DISTRICT: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_LATITUDE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNEE_TIME_ZONE: EnumField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    RECEIVER_LONGITUDE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVER_POST_BOX: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_LATITUDE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNEE_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSIGNEE_REFERENCE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVER_CITY_IN_KANA: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CITY_IN_KANA: OrderableEdmTypeField<
      ShipmentPackingSlipJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_WAREHOUSE: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link load} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      OutboundLoadHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT: OneToOneLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_LINES: OneToManyLink<
      ShipmentPackingSlipJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ShipmentPackingSlipJournalHeaders<DeSerializers>>;
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
         * Static representation of the {@link shipmentPackingSlipVersionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_PACKING_SLIP_VERSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipmentPackingSlipVersionNumber',
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
         * Static representation of the {@link consigneeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_NAME: fieldBuilder.buildEdmTypeField(
          'ConsigneeName',
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
         * Static representation of the {@link receiverCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ReceiverCountryRegionId',
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
         * Static representation of the {@link loadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ID: fieldBuilder.buildEdmTypeField('LoadId', 'Edm.String', true),
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
         * Static representation of the {@link shipFromWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FROM_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ShipFromWarehouseId',
          'Edm.String',
          true
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
         * Static representation of the {@link receiverState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STATE: fieldBuilder.buildEdmTypeField(
          'ReceiverState',
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
         * Static representation of the {@link shipmentPackingSlipNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_PACKING_SLIP_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipmentPackingSlipNumber',
          'Edm.String',
          true
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
          'Edm.Int64',
          false
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
         * Static representation of the {@link receiverStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceiverStreetNumber',
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
         * Static representation of the {@link receiverPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ReceiverPostBox',
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
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
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
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShipmentPackingSlipJournalHeaders)
      };
    }

    return this._schema;
  }
}
