/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundLoadHeaders } from './InboundLoadHeaders';
import { InboundLoadHeadersRequestBuilder } from './InboundLoadHeadersRequestBuilder';
import { InboundShipmentHeadersApi } from './InboundShipmentHeadersApi';
import { LicensePlateReceivingRegistrationsHistoryApi } from './LicensePlateReceivingRegistrationsHistoryApi';
import { ShipmentReceiptJournalHeadersApi } from './ShipmentReceiptJournalHeadersApi';
import { NoYes } from './NoYes';
import { WhsReceivingCompletedLoadDeliveryPolicy } from './WhsReceivingCompletedLoadDeliveryPolicy';
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
export class InboundLoadHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InboundLoadHeaders<DeSerializersT>, DeSerializersT>
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
  ): InboundLoadHeadersApi<DeSerializersT> {
    return new InboundLoadHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_HEADER: OneToManyLink<
      InboundLoadHeaders<DeSerializersT>,
      DeSerializersT,
      InboundShipmentHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inbundLoadHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBUND_LOAD_HEADERS: OneToManyLink<
      InboundLoadHeaders<DeSerializersT>,
      DeSerializersT,
      LicensePlateReceivingRegistrationsHistoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      InboundLoadHeaders<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InboundShipmentHeadersApi<DeSerializersT>,
      LicensePlateReceivingRegistrationsHistoryApi<DeSerializersT>,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INBOUND_SHIPMENT_HEADER: new OneToManyLink(
        'InboundShipmentHeader',
        this,
        linkedApis[0]
      ),
      INBUND_LOAD_HEADERS: new OneToManyLink(
        'InbundLoadHeaders',
        this,
        linkedApis[1]
      ),
      SHIPMENT_RECIPT_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentReciptJournalHeaders',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = InboundLoadHeaders;

  requestBuilder(): InboundLoadHeadersRequestBuilder<DeSerializersT> {
    return new InboundLoadHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InboundLoadHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InboundLoadHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundLoadHeaders<DeSerializersT>,
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
    typeof InboundLoadHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundLoadHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTUAL_GROSS_WEIGHT: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CAR_REGISTRATION_STATE_ID: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LOAD_FLOOR_STACKED: EnumField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRACTOR_NUMBER: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_HEIGHT: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_CARRIER_GROUP_ID: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LOAD_SPLIT_SHIP_CONFIRM_ALLOWED: EnumField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOAD_EXTERNAL_REFERENCE_NUMBER: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAR_NUMBER: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER_ID: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MASTER_BILL_OF_LADING_ID: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAILER_NUMBER: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOYAGE_NUMBER: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_NET_WEIGHT: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTUAL_TARE_WEIGHT: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_ARRIVAL_DATE_TIME: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOAD_DEPTH: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVING_COMPLETED_DELIVERY_POLICY: EnumField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      WhsReceivingCompletedLoadDeliveryPolicy,
      true,
      true
    >;
    USER_DEFINED_FIELD_1: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_DEFINED_FIELD_2: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_DEFINED_FIELD_3: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRO_NUMBER: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_BOOKING_NUMBER: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_CODE: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSPECTION_SEAL_NUMBER: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_WIDTH: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SEAL_NUMBER: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VESSEL_NAME: OrderableEdmTypeField<
      InboundLoadHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_HEADER: OneToManyLink<
      InboundLoadHeaders<DeSerializersT>,
      DeSerializersT,
      InboundShipmentHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inbundLoadHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBUND_LOAD_HEADERS: OneToManyLink<
      InboundLoadHeaders<DeSerializersT>,
      DeSerializersT,
      LicensePlateReceivingRegistrationsHistoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      InboundLoadHeaders<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundLoadHeaders<DeSerializers>>;
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
         * Static representation of the {@link loadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ID: fieldBuilder.buildEdmTypeField('LoadId', 'Edm.String', false),
        /**
         * Static representation of the {@link actualGrossWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_GROSS_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ActualGrossWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link carRegistrationStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAR_REGISTRATION_STATE_ID: fieldBuilder.buildEdmTypeField(
          'CarRegistrationStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isLoadFloorStacked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LOAD_FLOOR_STACKED: fieldBuilder.buildEnumField(
          'IsLoadFloorStacked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tractorNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACTOR_NUMBER: fieldBuilder.buildEdmTypeField(
          'TractorNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_HEIGHT: fieldBuilder.buildEdmTypeField(
          'LoadHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shippingCarrierGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isLoadSplitShipConfirmAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LOAD_SPLIT_SHIP_CONFIRM_ALLOWED: fieldBuilder.buildEnumField(
          'IsLoadSplitShipConfirmAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link loadExternalReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_EXTERNAL_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoadExternalReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAR_NUMBER: fieldBuilder.buildEdmTypeField(
          'CarNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brokerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_ID: fieldBuilder.buildEdmTypeField(
          'BrokerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link masterBillOfLadingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASTER_BILL_OF_LADING_ID: fieldBuilder.buildEdmTypeField(
          'MasterBillOfLadingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trailerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAILER_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrailerNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voyageNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOYAGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'VoyageNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualNetWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_NET_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ActualNetWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link actualTareWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_TARE_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ActualTareWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link estimatedArrivalDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_ARRIVAL_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EstimatedArrivalDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link loadDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_DEPTH: fieldBuilder.buildEdmTypeField(
          'LoadDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivingCompletedDeliveryPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_COMPLETED_DELIVERY_POLICY: fieldBuilder.buildEnumField(
          'ReceivingCompletedDeliveryPolicy',
          WhsReceivingCompletedLoadDeliveryPolicy,
          true
        ),
        /**
         * Static representation of the {@link userDefinedField1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_DEFINED_FIELD_1: fieldBuilder.buildEdmTypeField(
          'UserDefinedField1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userDefinedField2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_DEFINED_FIELD_2: fieldBuilder.buildEdmTypeField(
          'UserDefinedField2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userDefinedField3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_DEFINED_FIELD_3: fieldBuilder.buildEdmTypeField(
          'UserDefinedField3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link proNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRO_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationBookingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_BOOKING_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransportationBookingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_CODE: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inspectionSealNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSPECTION_SEAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'InspectionSealNumber',
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
         * Static representation of the {@link loadWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_WIDTH: fieldBuilder.buildEdmTypeField(
          'LoadWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sealNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SealNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vesselName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VESSEL_NAME: fieldBuilder.buildEdmTypeField(
          'VesselName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundLoadHeaders)
      };
    }

    return this._schema;
  }
}
