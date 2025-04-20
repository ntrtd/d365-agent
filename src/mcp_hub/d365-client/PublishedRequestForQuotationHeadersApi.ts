/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PublishedRequestForQuotationHeaders } from './PublishedRequestForQuotationHeaders';
import { PublishedRequestForQuotationHeadersRequestBuilder } from './PublishedRequestForQuotationHeadersRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { NoYes } from './NoYes';
import { PurchRfqBidType } from './PurchRfqBidType';
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
export class PublishedRequestForQuotationHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PublishedRequestForQuotationHeaders<DeSerializersT>,
      DeSerializersT
    >
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
  ): PublishedRequestForQuotationHeadersApi<DeSerializersT> {
    return new PublishedRequestForQuotationHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PublishedRequestForQuotationHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [WorkersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PublishedRequestForQuotationHeaders;

  requestBuilder(): PublishedRequestForQuotationHeadersRequestBuilder<DeSerializersT> {
    return new PublishedRequestForQuotationHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PublishedRequestForQuotationHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PublishedRequestForQuotationHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PublishedRequestForQuotationHeaders<DeSerializersT>,
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
    typeof PublishedRequestForQuotationHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PublishedRequestForQuotationHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_CASE_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_CANCELLATION_REASON_DESCRIPTION: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_CANCELLATION_DATE_TIME: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ARE_ALTERNATE_PRODUCTS_ALLOWED: EnumField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RFQ_EXPIRATION_DATE_TIME: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_DELIVERY_DATE: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RFQ_SOLICITATION_TYPE_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_BID_TYPE: EnumField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      PurchRfqBidType,
      true,
      true
    >;
    ARE_ONLY_INVITED_VENDOR_BIDS_ALLOWED: EnumField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RFQ_CASE_TITLE: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTING_DEPARTMENT_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTER_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PublishedRequestForQuotationHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PublishedRequestForQuotationHeaders<DeSerializers>>;
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
         * Static representation of the {@link rfqCaseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFQCaseNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rfqCancellationReasonDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CANCELLATION_REASON_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RFQCancellationReasonDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfqCancellationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CANCELLATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'RFQCancellationDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link areAlternateProductsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_ALTERNATE_PRODUCTS_ALLOWED: fieldBuilder.buildEnumField(
          'AreAlternateProductsAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rfqExpirationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_EXPIRATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'RFQExpirationDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link rfqDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'RFQDeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link rfqSolicitationTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_SOLICITATION_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'RFQSolicitationTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfqBidType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_BID_TYPE: fieldBuilder.buildEnumField(
          'RFQBidType',
          PurchRfqBidType,
          true
        ),
        /**
         * Static representation of the {@link areOnlyInvitedVendorBidsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_ONLY_INVITED_VENDOR_BIDS_ALLOWED: fieldBuilder.buildEnumField(
          'AreOnlyInvitedVendorBidsAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rfqCaseTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CASE_TITLE: fieldBuilder.buildEdmTypeField(
          'RFQCaseTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestingDepartmentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTING_DEPARTMENT_NAME: fieldBuilder.buildEdmTypeField(
          'RequestingDepartmentName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requesterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER_NAME: fieldBuilder.buildEdmTypeField(
          'RequesterName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PublishedRequestForQuotationHeaders)
      };
    }

    return this._schema;
  }
}
