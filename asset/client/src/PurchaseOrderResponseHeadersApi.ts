/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderResponseHeaders } from './PurchaseOrderResponseHeaders';
import { PurchaseOrderResponseHeadersRequestBuilder } from './PurchaseOrderResponseHeadersRequestBuilder';
import { PurchaseOrderResponseLinesApi } from './PurchaseOrderResponseLinesApi';
import { VendorsV2Api } from './VendorsV2Api';
import { PurchaseOrderResponseState } from './PurchaseOrderResponseState';
import { ConsumptionState } from './ConsumptionState';
import { PurchStatus } from './PurchStatus';
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
export class PurchaseOrderResponseHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseOrderResponseHeaders<DeSerializersT>, DeSerializersT>
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
  ): PurchaseOrderResponseHeadersApi<DeSerializersT> {
    return new PurchaseOrderResponseHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderResponseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_RESPONSE_LINES: OneToManyLink<
      PurchaseOrderResponseHeaders<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderResponseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link orderVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_VENDOR: OneToOneLink<
      PurchaseOrderResponseHeaders<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseOrderResponseLinesApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_ORDER_RESPONSE_LINES: new OneToManyLink(
        'PurchaseOrderResponseLines',
        this,
        linkedApis[0]
      ),
      ORDER_VENDOR: new OneToOneLink('OrderVendor', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PurchaseOrderResponseHeaders;

  requestBuilder(): PurchaseOrderResponseHeadersRequestBuilder<DeSerializersT> {
    return new PurchaseOrderResponseHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderResponseHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseOrderResponseHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseOrderResponseHeaders<DeSerializersT>,
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
    typeof PurchaseOrderResponseHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderResponseHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_RESPONSE_LAST_MODIFICATION_DATE_TIME: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOTAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESPONDING_DATE_TIME: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_ORDER_DOCUMENT_REFERENCE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSE_NOTE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_ID: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSE_STATUS: EnumField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      PurchaseOrderResponseState,
      true,
      true
    >;
    RESPONSE_PROCESSING_STATE: EnumField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      ConsumptionState,
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_STATUS: EnumField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_SENT_DATE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESPONDING_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_ID: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_DELIVERY_DATE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_ORDER_REFERENCE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_DELIVERY_DATE: OrderableEdmTypeField<
      PurchaseOrderResponseHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderResponseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_RESPONSE_LINES: OneToManyLink<
      PurchaseOrderResponseHeaders<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderResponseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link orderVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_VENDOR: OneToOneLink<
      PurchaseOrderResponseHeaders<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseOrderResponseHeaders<DeSerializers>>;
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
         * Static representation of the {@link purchaseOrderResponseLastModificationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_RESPONSE_LAST_MODIFICATION_DATE_TIME:
          fieldBuilder.buildEdmTypeField(
            'PurchaseOrderResponseLastModificationDateTime',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link totalDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link respondingDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONDING_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'RespondingDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderDocumentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_DOCUMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderDocumentReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
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
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link responseNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_NOTE: fieldBuilder.buildEdmTypeField(
          'ResponseNote',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DeliveryAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link deliveryTermsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link responseStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_STATUS: fieldBuilder.buildEnumField(
          'ResponseStatus',
          PurchaseOrderResponseState,
          true
        ),
        /**
         * Static representation of the {@link responseProcessingState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_PROCESSING_STATE: fieldBuilder.buildEnumField(
          'ResponseProcessingState',
          ConsumptionState,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_STATUS: fieldBuilder.buildEnumField(
          'PurchaseOrderStatus',
          PurchStatus,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPaymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'VendorPaymentMethodName',
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
         * Static representation of the {@link purchaseOrderSentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_SENT_DATE: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderSentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveryAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDeliveryAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link respondingPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONDING_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'RespondingPersonPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link formattedDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DELIVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDeliveryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedDeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderVendorAccountNumber',
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
         * Static representation of the {@link deliveryAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendorOrderReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ORDER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'VendorOrderReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedDeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseOrderResponseHeaders)
      };
    }

    return this._schema;
  }
}
