/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallCenterRefundCheckSettlements } from './CallCenterRefundCheckSettlements';
import { CallCenterRefundCheckSettlementsRequestBuilder } from './CallCenterRefundCheckSettlementsRequestBuilder';
import { McrrcSettlementStatus } from './McrrcSettlementStatus';
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
export class CallCenterRefundCheckSettlementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CallCenterRefundCheckSettlements<DeSerializersT>, DeSerializersT>
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
  ): CallCenterRefundCheckSettlementsApi<DeSerializersT> {
    return new CallCenterRefundCheckSettlementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CallCenterRefundCheckSettlements;

  requestBuilder(): CallCenterRefundCheckSettlementsRequestBuilder<DeSerializersT> {
    return new CallCenterRefundCheckSettlementsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CallCenterRefundCheckSettlements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CallCenterRefundCheckSettlements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CallCenterRefundCheckSettlements<DeSerializersT>,
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
    typeof CallCenterRefundCheckSettlements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CallCenterRefundCheckSettlements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_JOURNAL_VOUCHER: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_JOURNAL_TRANSATION_LINE_NUMBER: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_JOURNAL_NUMBER: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLEMENT_AMOUNT: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_PAYMENT_LINE_NUMBER: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFUND_CHECK_AUTHORIZATION_LINE_NUMBER: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLEMENT_STATUS: EnumField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      McrrcSettlementStatus,
      true,
      true
    >;
    SETTLEMENT_DATE_TIME: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_BATCH_ID: OrderableEdmTypeField<
      CallCenterRefundCheckSettlements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CallCenterRefundCheckSettlements<DeSerializers>>;
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
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField(
          'SalesId',
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
         * Static representation of the {@link ledgerJournalVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_JOURNAL_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerJournalVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerJournalTransationLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_JOURNAL_TRANSATION_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LedgerJournalTransationLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'LedgerJournalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settlementAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SettlementAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerPaymentLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link refundCheckAuthorizationLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFUND_CHECK_AUTHORIZATION_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'RefundCheckAuthorizationLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link settlementStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_STATUS: fieldBuilder.buildEnumField(
          'SettlementStatus',
          McrrcSettlementStatus,
          true
        ),
        /**
         * Static representation of the {@link settlementDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SettlementDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transactionBatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_BATCH_ID: fieldBuilder.buildEdmTypeField(
          'TransactionBatchId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CallCenterRefundCheckSettlements)
      };
    }

    return this._schema;
  }
}
