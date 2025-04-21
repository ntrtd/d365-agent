/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FreightInvoiceHeaders } from './FreightInvoiceHeaders';
import { FreightInvoiceHeadersRequestBuilder } from './FreightInvoiceHeadersRequestBuilder';
import { FreightInvoiceLinesApi } from './FreightInvoiceLinesApi';
import { TmsInvoiceStatus } from './TmsInvoiceStatus';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class FreightInvoiceHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FreightInvoiceHeaders<DeSerializersT>, DeSerializersT>
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
  ): FreightInvoiceHeadersApi<DeSerializersT> {
    return new FreightInvoiceHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link freightInvoiceLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_INVOICE_LINE: OneToManyLink<
      FreightInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      FreightInvoiceLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FreightInvoiceLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FREIGHT_INVOICE_LINE: new OneToManyLink(
        'FreightInvoiceLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = FreightInvoiceHeaders;

  requestBuilder(): FreightInvoiceHeadersRequestBuilder<DeSerializersT> {
    return new FreightInvoiceHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FreightInvoiceHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FreightInvoiceHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FreightInvoiceHeaders<DeSerializersT>,
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
    typeof FreightInvoiceHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FreightInvoiceHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNAL_INVOICE_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSPORTATION_DISTANCE_UNIT_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_STATUS: EnumField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      TmsInvoiceStatus,
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TRAILER_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RELATED_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRO_NUMBER_CODE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FREIGHT_HELD_UNTIL_DATE_TIME: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FREIGHT_WEIGHT_UNIT_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_VOYAGE_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LAST_CYCLE_COUNTING_DATE_TIME: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_VESSEL_NAME: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_FREIGHT_WEIGHT: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_QUOTE_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REFERENCE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCAC_CODE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESTINATION_COUNTRY_REGION_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_SHIPMENT_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVOICE_AUTOMATICALLY_MATCHED: EnumField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_RELATED_ORDER_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE_TIME: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_COSIGNEE_NAME: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_BOOKING_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_FREIGHT_QUANTITY: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_ROUTE_CODE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_DISTANCE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_BILL_OF_LADING_ID: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AMOUNT: OrderableEdmTypeField<
      FreightInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freightInvoiceLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_INVOICE_LINE: OneToManyLink<
      FreightInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      FreightInvoiceLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FreightInvoiceHeaders<DeSerializers>>;
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
         * Static representation of the {@link transportationDistanceUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DISTANCE_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'TransportationDistanceUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_STATUS: fieldBuilder.buildEnumField(
          'InvoiceStatus',
          TmsInvoiceStatus,
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
         * Static representation of the {@link defaultTrailerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TRAILER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultTrailerNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultShippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultShippingCarrierServiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultRelatedAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RELATED_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultRelatedAccountNumber',
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
         * Static representation of the {@link defaultFreightHeldUntilDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FREIGHT_HELD_UNTIL_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DefaultFreightHeldUntilDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cashDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscountAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link defaultVoyageNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VOYAGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultVoyageNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentTermsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultLastCycleCountingDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LAST_CYCLE_COUNTING_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DefaultLastCycleCountingDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
          true
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
         * Static representation of the {@link defaultVesselName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VESSEL_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultVesselName',
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
         * Static representation of the {@link totalFreightWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_FREIGHT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'TotalFreightWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalQuoteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_QUOTE_ID: fieldBuilder.buildEdmTypeField(
          'OriginalQuoteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REFERENCE: fieldBuilder.buildEdmTypeField(
          'VendorReference',
          'Edm.String',
          true
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
         * Static representation of the {@link scacCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCAC_CODE: fieldBuilder.buildEdmTypeField(
          'SCACCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link defaultShipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'DefaultShipmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayeeVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInvoiceAutomaticallyMatched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVOICE_AUTOMATICALLY_MATCHED: fieldBuilder.buildEnumField(
          'IsInvoiceAutomaticallyMatched',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultRelatedOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RELATED_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultRelatedOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DueDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ID: fieldBuilder.buildEdmTypeField(
          'PaymentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultCosigneeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COSIGNEE_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultCosigneeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultBookingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BOOKING_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultBookingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalFreightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_FREIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TotalFreightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceNumber',
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
         * Static representation of the {@link defaultShippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'DefaultShippingCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReferenceNumber',
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
         * Static representation of the {@link defaultBillOfLadingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BILL_OF_LADING_ID: fieldBuilder.buildEdmTypeField(
          'DefaultBillOfLadingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
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
         * Static representation of the {@link invoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FreightInvoiceHeaders)
      };
    }

    return this._schema;
  }
}
