/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FreightInvoiceLinesV2 } from './FreightInvoiceLinesV2';
import { FreightInvoiceLinesV2RequestBuilder } from './FreightInvoiceLinesV2RequestBuilder';
import { FreightInvoiceHeadersV2Api } from './FreightInvoiceHeadersV2Api';
import { TmsInvoiceLineStatus } from './TmsInvoiceLineStatus';
import { NoYes } from './NoYes';
import { TmsLineType } from './TmsLineType';
import { TmsDirection } from './TmsDirection';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FreightInvoiceLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FreightInvoiceLinesV2<DeSerializersT>, DeSerializersT>
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
  ): FreightInvoiceLinesV2Api<DeSerializersT> {
    return new FreightInvoiceLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link freightInvoiceHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_INVOICE_HEADER_V_2: OneToOneLink<
      FreightInvoiceLinesV2<DeSerializersT>,
      DeSerializersT,
      FreightInvoiceHeadersV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FreightInvoiceHeadersV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FREIGHT_INVOICE_HEADER_V_2: new OneToOneLink(
        'FreightInvoiceHeaderV2',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = FreightInvoiceLinesV2;

  requestBuilder(): FreightInvoiceLinesV2RequestBuilder<DeSerializersT> {
    return new FreightInvoiceLinesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FreightInvoiceLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FreightInvoiceLinesV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FreightInvoiceLinesV2<DeSerializersT>,
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
    typeof FreightInvoiceLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FreightInvoiceLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNAL_INVOICE_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_STATUS: EnumField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      TmsInvoiceLineStatus,
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LINE_HEADER_CHARGE: EnumField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FREIGHT_QUANTITY: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACKING_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_BILL_TYPE_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRO_NUMBER_CODE: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_WEIGHT_UNIT_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_HELD_UNTIL_DATE_TIME: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSPORTATION_BILLING_GROUP_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAILER_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOOKING_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESTINATION_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      TmsLineType,
      true,
      true
    >;
    LAST_CYCLE_COUNTING_DATE_TIME: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOYAGE_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_WEIGHT: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIRECTION: EnumField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      TmsDirection,
      true,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_COUNTRY_REGION_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COSIGNEE_NAME: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATED_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VESSEL_NAME: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_LINE_2: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_ROUTE_CODE: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_DISTANCE: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_LINE_1: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_LADING_ID: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATED_ORDER_NUMBER: OrderableEdmTypeField<
      FreightInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freightInvoiceHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_INVOICE_HEADER_V_2: OneToOneLink<
      FreightInvoiceLinesV2<DeSerializersT>,
      DeSerializersT,
      FreightInvoiceHeadersV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FreightInvoiceLinesV2<DeSerializers>>;
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
         * Static representation of the {@link internalInvoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InternalInvoiceNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_STATUS: fieldBuilder.buildEnumField(
          'LineStatus',
          TmsInvoiceLineStatus,
          true
        ),
        /**
         * Static representation of the {@link invoiceVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isLineHeaderCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LINE_HEADER_CHARGE: fieldBuilder.buildEnumField(
          'IsLineHeaderCharge',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link freightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FreightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
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
         * Static representation of the {@link trackingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrackingNumber',
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
         * Static representation of the {@link freightBillTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_BILL_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FreightBillTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link proNumberCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRO_NUMBER_CODE: fieldBuilder.buildEdmTypeField(
          'ProNumberCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightWeightUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_WEIGHT_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'FreightWeightUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightHeldUntilDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_HELD_UNTIL_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'FreightHeldUntilDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transportationBillingGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_BILLING_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TransportationBillingGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link trailerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAILER_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrailerNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bookingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOKING_NUMBER: fieldBuilder.buildEdmTypeField(
          'BookingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link destinationCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'DestinationCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField('LineType', TmsLineType, true),
        /**
         * Static representation of the {@link lastCycleCountingDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CYCLE_COUNTING_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastCycleCountingDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link freightWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'FreightWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link direction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECTION: fieldBuilder.buildEnumField('Direction', TmsDirection, true),
        /**
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DestinationCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cosigneeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSIGNEE_NAME: fieldBuilder.buildEdmTypeField(
          'CosigneeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
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
         * Static representation of the {@link relatedAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'RelatedAccountNumber',
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
        /**
         * Static representation of the {@link descriptionLine2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_LINE_2: fieldBuilder.buildEdmTypeField(
          'DescriptionLine2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationRouteCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_ROUTE_CODE: fieldBuilder.buildEdmTypeField(
          'TransportationRouteCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationDistance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DISTANCE: fieldBuilder.buildEdmTypeField(
          'TransportationDistance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'ExternalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionLine1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_LINE_1: fieldBuilder.buildEdmTypeField(
          'DescriptionLine1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfLadingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_LADING_ID: fieldBuilder.buildEdmTypeField(
          'BillOfLadingId',
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
         * Static representation of the {@link relatedOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'RelatedOrderNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FreightInvoiceLinesV2)
      };
    }

    return this._schema;
  }
}
