/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PublishedRequestForQuotationAndReplyLines } from './PublishedRequestForQuotationAndReplyLines';
import { PublishedRequestForQuotationAndReplyLinesRequestBuilder } from './PublishedRequestForQuotationAndReplyLinesRequestBuilder';
import { NoYes } from './NoYes';
import { PurchRfqStatus } from './PurchRfqStatus';
import { PurchRfqLineItemType } from './PurchRfqLineItemType';
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
export class PublishedRequestForQuotationAndReplyLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PublishedRequestForQuotationAndReplyLines<DeSerializersT>,
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
  ): PublishedRequestForQuotationAndReplyLinesApi<DeSerializersT> {
    return new PublishedRequestForQuotationAndReplyLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PublishedRequestForQuotationAndReplyLines;

  requestBuilder(): PublishedRequestForQuotationAndReplyLinesRequestBuilder<DeSerializersT> {
    return new PublishedRequestForQuotationAndReplyLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PublishedRequestForQuotationAndReplyLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PublishedRequestForQuotationAndReplyLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PublishedRequestForQuotationAndReplyLines<DeSerializersT>,
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
    typeof PublishedRequestForQuotationAndReplyLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PublishedRequestForQuotationAndReplyLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPLY_LINE_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLY_MULTILINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLY_PURCHASE_QUANTITY: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLY_LINE_VALID_TO_DATE: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPLY_LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ALTERNATE_PRODUCT: EnumField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUESTED_PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RFQ_STATUS: EnumField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      PurchRfqStatus,
      true,
      true
    >;
    REPLY_PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLY_LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_PURCHASE_QUANTITY: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DESCRIPTION: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_MULTILINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLY_LINE_VALID_FROM_DATE: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPLY_LINE_AMOUNT: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_TYPE: EnumField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      PurchRfqLineItemType,
      true,
      true
    >;
    REPLY_LINE_LEAD_TIME: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RFQ_CASE_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIGHEST_RFQ_STATUS: EnumField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      PurchRfqStatus,
      true,
      true
    >;
    REPLY_LINE_WORKING_DAYS: EnumField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOWEST_RFQ_STATUS: EnumField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      PurchRfqStatus,
      true,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_CASE_REQUESTING_WORKER_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLY_MULTILINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_LINE_AMOUNT: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLY_FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLY_PURCHASE_PRICE: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLY_COMMENT: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_PURCHASE_PRICE: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_MULTILINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      PublishedRequestForQuotationAndReplyLines<DeSerializers>
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
         * Static representation of the {@link replyLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReplyLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replyMultilineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_MULTILINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReplyMultilineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replyPurchaseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_PURCHASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReplyPurchaseQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link replyLineValidToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_LINE_VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ReplyLineValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link replyLineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReplyLineDiscountAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link isAlternateProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALTERNATE_PRODUCT: fieldBuilder.buildEnumField(
          'IsAlternateProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requestedPurchaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_PURCHASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'RequestedPurchaseUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedLineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_LINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'RequestedLineDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rfqStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_STATUS: fieldBuilder.buildEnumField(
          'RFQStatus',
          PurchRfqStatus,
          true
        ),
        /**
         * Static representation of the {@link replyPurchaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_PURCHASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ReplyPurchaseUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replyLineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_LINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ReplyLineDiscountPercentage',
          'Edm.Decimal',
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
         * Static representation of the {@link requestedPurchaseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_PURCHASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RequestedPurchaseQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LineDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedFixedPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_FIXED_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'RequestedFixedPriceCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestedMultilineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_MULTILINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'RequestedMultilineDiscountPercentage',
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
         * Static representation of the {@link replyLineValidFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_LINE_VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ReplyLineValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link replyLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReplyLineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestedLineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RequestedLineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          PurchRfqLineItemType,
          true
        ),
        /**
         * Static representation of the {@link replyLineLeadTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_LINE_LEAD_TIME: fieldBuilder.buildEdmTypeField(
          'ReplyLineLeadTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link rfqCaseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFQCaseNumber',
          'Edm.String',
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
         * Static representation of the {@link replyLineWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_LINE_WORKING_DAYS: fieldBuilder.buildEnumField(
          'ReplyLineWorkingDays',
          NoYes,
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
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
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
         * Static representation of the {@link replyMultilineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_MULTILINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ReplyMultilineDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestedLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RequestedLineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replyFixedPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_FIXED_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'ReplyFixedPriceCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replyPurchasePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_PURCHASE_PRICE: fieldBuilder.buildEdmTypeField(
          'ReplyPurchasePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replyComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLY_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReplyComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedPurchasePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_PURCHASE_PRICE: fieldBuilder.buildEdmTypeField(
          'RequestedPurchasePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestedMultilineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_MULTILINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RequestedMultilineDiscountAmount',
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
          PublishedRequestForQuotationAndReplyLines
        )
      };
    }

    return this._schema;
  }
}
