/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentHeaders } from './InboundShipmentHeaders';
import { InboundShipmentHeadersRequestBuilder } from './InboundShipmentHeadersRequestBuilder';
import { InboundLoadHeadersApi } from './InboundLoadHeadersApi';
import { LicensePlateReceivingRegistrationsHistoryApi } from './LicensePlateReceivingRegistrationsHistoryApi';
import { InboundLoadPackingStructuresApi } from './InboundLoadPackingStructuresApi';
import { ShipmentReceiptJournalHeadersApi } from './ShipmentReceiptJournalHeadersApi';
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
export class InboundShipmentHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InboundShipmentHeaders<DeSerializersT>, DeSerializersT>
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
  ): InboundShipmentHeadersApi<DeSerializersT> {
    return new InboundShipmentHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link inboundLoadHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_LOAD_HEADER: OneToOneLink<
      InboundShipmentHeaders<DeSerializersT>,
      DeSerializersT,
      InboundLoadHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_HEADERS: OneToManyLink<
      InboundShipmentHeaders<DeSerializersT>,
      DeSerializersT,
      LicensePlateReceivingRegistrationsHistoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_STRUCTURES: OneToManyLink<
      InboundShipmentHeaders<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      InboundShipmentHeaders<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InboundLoadHeadersApi<DeSerializersT>,
      LicensePlateReceivingRegistrationsHistoryApi<DeSerializersT>,
      InboundLoadPackingStructuresApi<DeSerializersT>,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INBOUND_LOAD_HEADER: new OneToOneLink(
        'InboundLoadHeader',
        this,
        linkedApis[0]
      ),
      INBOUND_SHIPMENT_HEADERS: new OneToManyLink(
        'InboundShipmentHeaders',
        this,
        linkedApis[1]
      ),
      SHIPMENT_PACKING_STRUCTURES: new OneToManyLink(
        'ShipmentPackingStructures',
        this,
        linkedApis[2]
      ),
      SHIPMENT_RECIPT_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentReciptJournalHeaders',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = InboundShipmentHeaders;

  requestBuilder(): InboundShipmentHeadersRequestBuilder<DeSerializersT> {
    return new InboundShipmentHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentHeaders<DeSerializersT>,
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
    typeof InboundShipmentHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_ID: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ADDRESS_STREET: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PACKING_SLIP_DOCUMENT_DATE: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_ADDRESS_CITY: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PACKING_SLIP_ID: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_SHIPMENT_ID: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ADDRESS_STATE_ID: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_LOAD_ID: OrderableEdmTypeField<
      InboundShipmentHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundLoadHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_LOAD_HEADER: OneToOneLink<
      InboundShipmentHeaders<DeSerializersT>,
      DeSerializersT,
      InboundLoadHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_HEADERS: OneToManyLink<
      InboundShipmentHeaders<DeSerializersT>,
      DeSerializersT,
      LicensePlateReceivingRegistrationsHistoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_STRUCTURES: OneToManyLink<
      InboundShipmentHeaders<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      InboundShipmentHeaders<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundShipmentHeaders<DeSerializers>>;
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
         * Static representation of the {@link shipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'ShipmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'VendorAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'VendorAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'VendorAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'VendorAddressStreetInKana',
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
         * Static representation of the {@link vendorAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'VendorAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPackingSlipDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PACKING_SLIP_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'VendorPackingSlipDocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendorAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'VendorAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPackingSlipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PACKING_SLIP_ID: fieldBuilder.buildEdmTypeField(
          'VendorPackingSlipId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'VendorAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorShipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'VendorShipmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'VendorAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inboundLoadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_LOAD_ID: fieldBuilder.buildEdmTypeField(
          'InboundLoadId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundShipmentHeaders)
      };
    }

    return this._schema;
  }
}
