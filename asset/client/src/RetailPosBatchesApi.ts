/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailPosBatches } from './RetailPosBatches';
import { RetailPosBatchesRequestBuilder } from './RetailPosBatchesRequestBuilder';
import { RetailPosBatchStatus } from './RetailPosBatchStatus';
import { RetailEodShiftValidationErrorCode } from './RetailEodShiftValidationErrorCode';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RetailPosBatchesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailPosBatches<DeSerializersT>, DeSerializersT>
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
  ): RetailPosBatchesApi<DeSerializersT> {
    return new RetailPosBatchesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailPosBatches;

  requestBuilder(): RetailPosBatchesRequestBuilder<DeSerializersT> {
    return new RetailPosBatchesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailPosBatches<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailPosBatches<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailPosBatches<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailPosBatches, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailPosBatches,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_UNIT_NUMBER: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BATCH_SHIFT_ID: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CLOSE_DATE: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTIONS_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSE_DATE_TIME_UTC: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CLOSED_AT_REGISTER_NUMBER: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDED_AMOUNT_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ERROR_CODE_EDIT_USER: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAID_TO_ACCOUNT_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURNS_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATUS: EnumField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      RetailPosBatchStatus,
      true,
      true
    >;
    SHIFT_RETURNS_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOIDS_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHARGE_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIFT_SALES_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ERROR_CODE_DATE_TIME: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERVICES_SOLD_QUANTITY: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_COPIES_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ZERO_SALES_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETURNS_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    START_DATE_TIME_UTC: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GIFT_CARDS_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_OVERRIDE_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATOR_ID: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NO_SALE_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEMS_SOLD: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRAINING_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRAINING_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATION_NUMBER: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIPT_COPIES_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_GRAND_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ERROR: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED_AT_BATCH_ID: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURNS_GRAND_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOIDED_SALES_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CLOSE_TIME: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUSPENDED_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_TOTAL_AMOUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ERROR_CODE: EnumField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      RetailEodShiftValidationErrorCode,
      true,
      true
    >;
    HAS_PENDING_OFFLINE_TRANSACTIONS: EnumField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_CASH_OUT_TOTAL: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUSPENDED_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_SALES_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOGONS_COUNT: OrderableEdmTypeField<
      RetailPosBatches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailPosBatches<DeSerializers>>;
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
         * Static representation of the {@link operationUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperationUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link batchShiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_SHIFT_ID: fieldBuilder.buildEdmTypeField(
          'BatchShiftId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link closeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_DATE: fieldBuilder.buildEdmTypeField(
          'CloseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transactionsCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTIONS_COUNT: fieldBuilder.buildEdmTypeField(
          'TransactionsCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link closeDateTimeUtc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_DATE_TIME_UTC: fieldBuilder.buildEdmTypeField(
          'CloseDateTimeUtc',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link closedAtRegisterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_AT_REGISTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ClosedAtRegisterNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundedAmountTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDED_AMOUNT_TOTAL: fieldBuilder.buildEdmTypeField(
          'RoundedAmountTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TOTAL: fieldBuilder.buildEdmTypeField(
          'TaxTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_COUNT: fieldBuilder.buildEdmTypeField(
          'SalesCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link errorCodeEditUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CODE_EDIT_USER: fieldBuilder.buildEdmTypeField(
          'ErrorCodeEditUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paidToAccountTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_TO_ACCOUNT_TOTAL: fieldBuilder.buildEdmTypeField(
          'PaidToAccountTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnsCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURNS_COUNT: fieldBuilder.buildEdmTypeField(
          'ReturnsCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailPosBatchStatus,
          true
        ),
        /**
         * Static representation of the {@link shiftReturnsTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_RETURNS_TOTAL: fieldBuilder.buildEdmTypeField(
          'ShiftReturnsTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voidsCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOIDS_COUNT: fieldBuilder.buildEdmTypeField(
          'VoidsCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link chargeTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_TOTAL: fieldBuilder.buildEdmTypeField(
          'ChargeTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shiftSalesTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_SALES_TOTAL: fieldBuilder.buildEdmTypeField(
          'ShiftSalesTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link errorCodeDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CODE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ErrorCodeDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link servicesSoldQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICES_SOLD_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ServicesSoldQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiptCopiesTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_COPIES_TOTAL: fieldBuilder.buildEdmTypeField(
          'ReceiptCopiesTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link zeroSalesCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZERO_SALES_COUNT: fieldBuilder.buildEdmTypeField(
          'ZeroSalesCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link returnsTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURNS_TOTAL: fieldBuilder.buildEdmTypeField(
          'ReturnsTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link startDateTimeUtc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_TIME_UTC: fieldBuilder.buildEdmTypeField(
          'StartDateTimeUtc',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link giftCardsTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARDS_TOTAL: fieldBuilder.buildEdmTypeField(
          'GiftCardsTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceOverrideTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_OVERRIDE_TOTAL: fieldBuilder.buildEdmTypeField(
          'PriceOverrideTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operatorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATOR_ID: fieldBuilder.buildEdmTypeField(
          'OperatorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link noSaleCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_SALE_COUNT: fieldBuilder.buildEdmTypeField(
          'NoSaleCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link itemsSold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMS_SOLD: fieldBuilder.buildEdmTypeField(
          'ItemsSold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link trainingCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAINING_COUNT: fieldBuilder.buildEdmTypeField(
          'TrainingCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link trainingTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAINING_TOTAL: fieldBuilder.buildEdmTypeField(
          'TrainingTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link locationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'LocationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receiptCopiesCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_COPIES_COUNT: fieldBuilder.buildEdmTypeField(
          'ReceiptCopiesCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesGrandTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_GRAND_TOTAL: fieldBuilder.buildEdmTypeField(
          'SalesGrandTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link error} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR: fieldBuilder.buildEdmTypeField('Error', 'Edm.String', true),
        /**
         * Static representation of the {@link closedAtBatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_AT_BATCH_ID: fieldBuilder.buildEdmTypeField(
          'ClosedAtBatchId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnsGrandTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURNS_GRAND_TOTAL: fieldBuilder.buildEdmTypeField(
          'ReturnsGrandTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voidedSalesTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOIDED_SALES_TOTAL: fieldBuilder.buildEdmTypeField(
          'VoidedSalesTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link closeTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_TIME: fieldBuilder.buildEdmTypeField(
          'CloseTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link suspendedTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUSPENDED_TOTAL: fieldBuilder.buildEdmTypeField(
          'SuspendedTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountTotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountTotalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link errorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CODE: fieldBuilder.buildEnumField(
          'ErrorCode',
          RetailEodShiftValidationErrorCode,
          true
        ),
        /**
         * Static representation of the {@link hasPendingOfflineTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_PENDING_OFFLINE_TRANSACTIONS: fieldBuilder.buildEnumField(
          'HasPendingOfflineTransactions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TOTAL: fieldBuilder.buildEdmTypeField(
          'SalesTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link organizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardCashOutTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_CASH_OUT_TOTAL: fieldBuilder.buildEdmTypeField(
          'GiftCardCashOutTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link suspendedCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUSPENDED_COUNT: fieldBuilder.buildEdmTypeField(
          'SuspendedCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customerSalesCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_SALES_COUNT: fieldBuilder.buildEdmTypeField(
          'CustomerSalesCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link logonsCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGONS_COUNT: fieldBuilder.buildEdmTypeField(
          'LogonsCount',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailPosBatches)
      };
    }

    return this._schema;
  }
}
