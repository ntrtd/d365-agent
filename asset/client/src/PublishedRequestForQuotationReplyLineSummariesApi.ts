/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PublishedRequestForQuotationReplyLineSummaries } from './PublishedRequestForQuotationReplyLineSummaries';
import { PublishedRequestForQuotationReplyLineSummariesRequestBuilder } from './PublishedRequestForQuotationReplyLineSummariesRequestBuilder';
import { PurchRfqReplyStatusPsn } from './PurchRfqReplyStatusPsn';
import { NoYes } from './NoYes';
import { PurchRfqStatus } from './PurchRfqStatus';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PublishedRequestForQuotationReplyLineSummariesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializersT>,
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
  ): PublishedRequestForQuotationReplyLineSummariesApi<DeSerializersT> {
    return new PublishedRequestForQuotationReplyLineSummariesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PublishedRequestForQuotationReplyLineSummaries;

  requestBuilder(): PublishedRequestForQuotationReplyLineSummariesRequestBuilder<DeSerializersT> {
    return new PublishedRequestForQuotationReplyLineSummariesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PublishedRequestForQuotationReplyLineSummaries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PublishedRequestForQuotationReplyLineSummaries<DeSerializersT>,
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
    typeof PublishedRequestForQuotationReplyLineSummaries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PublishedRequestForQuotationReplyLineSummaries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_CASE_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_VENDOR_SCORE: OrderableEdmTypeField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VENDOR_REPLY_STATUS: EnumField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      PurchRfqReplyStatusPsn,
      true,
      true
    >;
    TOTAL_VENDOR_SCORE_COMMENT: OrderableEdmTypeField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BID_AWARDED: EnumField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HIGHEST_RFQ_STATUS: EnumField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      PurchRfqStatus,
      true,
      true
    >;
    LOWEST_RFQ_STATUS: EnumField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      PurchRfqStatus,
      true,
      true
    >;
    RFQ_CASE_REQUESTING_WORKER_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      PublishedRequestForQuotationReplyLineSummaries<DeSerializers>
    >;
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
         * Static representation of the {@link rfqNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFQNumber',
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
         * Static representation of the {@link vendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'VendorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalVendorScore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_VENDOR_SCORE: fieldBuilder.buildEdmTypeField(
          'TotalVendorScore',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link vendorReplyStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REPLY_STATUS: fieldBuilder.buildEnumField(
          'VendorReplyStatus',
          PurchRfqReplyStatusPsn,
          true
        ),
        /**
         * Static representation of the {@link totalVendorScoreComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_VENDOR_SCORE_COMMENT: fieldBuilder.buildEdmTypeField(
          'TotalVendorScoreComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBidAwarded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BID_AWARDED: fieldBuilder.buildEnumField(
          'IsBidAwarded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link highestRfqStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIGHEST_RFQ_STATUS: fieldBuilder.buildEnumField(
          'HighestRFQStatus',
          PurchRfqStatus,
          true
        ),
        /**
         * Static representation of the {@link lowestRfqStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWEST_RFQ_STATUS: fieldBuilder.buildEnumField(
          'LowestRFQStatus',
          PurchRfqStatus,
          true
        ),
        /**
         * Static representation of the {@link rfqCaseRequestingWorkerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CASE_REQUESTING_WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'RFQCaseRequestingWorkerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          PublishedRequestForQuotationReplyLineSummaries
        )
      };
    }

    return this._schema;
  }
}
