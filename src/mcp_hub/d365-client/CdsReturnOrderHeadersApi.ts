/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsReturnOrderHeaders } from './CdsReturnOrderHeaders';
import { CdsReturnOrderHeadersRequestBuilder } from './CdsReturnOrderHeadersRequestBuilder';
import { CdsReturnOrderLinesApi } from './CdsReturnOrderLinesApi';
import { SalesStatus } from './SalesStatus';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { ReturnStatusHeader } from './ReturnStatusHeader';
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
export class CdsReturnOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsReturnOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): CdsReturnOrderHeadersApi<DeSerializersT> {
    return new CdsReturnOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link cdsReturnOrderLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_RETURN_ORDER_LINE: OneToManyLink<
      CdsReturnOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CdsReturnOrderLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CdsReturnOrderLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CDS_RETURN_ORDER_LINE: new OneToManyLink(
        'CDSReturnOrderLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CdsReturnOrderHeaders;

  requestBuilder(): CdsReturnOrderHeadersRequestBuilder<DeSerializersT> {
    return new CdsReturnOrderHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsReturnOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CdsReturnOrderHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsReturnOrderHeaders<DeSerializersT>,
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
    typeof CdsReturnOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsReturnOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETURN_ORDER_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RETURN_SITE_ID: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMERS_ORDER_REFERENCE: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_STREET: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ORDER_STATUS: EnumField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      SalesStatus,
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_TIME_ZONE: EnumField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    IS_RETURN_PROCESSING_STOPPED: EnumField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TOTAL_CHARGES_AMOUNT: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RETURN_ADDRESS_ORDER_SPECIFIC: EnumField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_NAME: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RMA_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_STATE_ID: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_STATUS: EnumField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      ReturnStatusHeader,
      true,
      true
    >;
    ORDER_TOTAL_AMOUNT: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_RETURN_REASON_CODE: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_RETURN_ADDRESS: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_POSTAL_ADDRESS_REC_ID: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_RETURN_ADDRESS_PRIVATE: EnumField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_REQUISITION_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_CITY: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_LATITUDE: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_DEADLINE: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETURN_ADDRESS_POST_BOX: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RETURN_WAREHOUSE_ID: OrderableEdmTypeField<
      CdsReturnOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsReturnOrderLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_RETURN_ORDER_LINE: OneToManyLink<
      CdsReturnOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CdsReturnOrderLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsReturnOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link returnOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderTotalTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TOTAL_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderTotalTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ReturnAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultReturnSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RETURN_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultReturnSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customersOrderReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMERS_ORDER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CustomersOrderReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'ReturnAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ORDER_STATUS: fieldBuilder.buildEnumField(
          'ReturnOrderStatus',
          SalesStatus,
          true
        ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'ReturnAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link isReturnProcessingStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETURN_PROCESSING_STOPPED: fieldBuilder.buildEnumField(
          'IsReturnProcessingStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link returnAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderTotalChargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TOTAL_CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderTotalChargesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ReturnAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReturnAddressOrderSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETURN_ADDRESS_ORDER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsReturnAddressOrderSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link returnAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'ReturnAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'ReturnAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rmaNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RMA_NUMBER: fieldBuilder.buildEdmTypeField(
          'RMANumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'ReturnAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_STATUS: fieldBuilder.buildEnumField(
          'ReturnStatus',
          ReturnStatusHeader,
          true
        ),
        /**
         * Static representation of the {@link orderTotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderTotalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerReturnReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_RETURN_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerReturnReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedReturnAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_RETURN_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedReturnAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnPostalAddressRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_POSTAL_ADDRESS_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReturnPostalAddressRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link totalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isReturnAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETURN_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsReturnAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerRequisitionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REQUISITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerRequisitionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ReturnAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'ReturnAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'ReturnAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ReturnAddressDescription',
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
         * Static representation of the {@link returnDeadline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DEADLINE: fieldBuilder.buildEdmTypeField(
          'ReturnDeadline',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link returnAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ReturnAddressPostBox',
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
         * Static representation of the {@link returnAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'ReturnAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link defaultReturnWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RETURN_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultReturnWarehouseId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsReturnOrderHeaders)
      };
    }

    return this._schema;
  }
}
