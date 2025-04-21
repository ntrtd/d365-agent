/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionSafeTenderTrans } from './TransactionSafeTenderTrans';
import { TransactionSafeTenderTransRequestBuilder } from './TransactionSafeTenderTransRequestBuilder';
import { NoYes } from './NoYes';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailSafeStatusTypeBase } from './RetailSafeStatusTypeBase';
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
export class TransactionSafeTenderTransApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TransactionSafeTenderTrans<DeSerializersT>, DeSerializersT>
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
  ): TransactionSafeTenderTransApi<DeSerializersT> {
    return new TransactionSafeTenderTransApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionSafeTenderTrans;

  requestBuilder(): TransactionSafeTenderTransRequestBuilder<DeSerializersT> {
    return new TransactionSafeTenderTransRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransactionSafeTenderTrans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionSafeTenderTrans<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionSafeTenderTrans<DeSerializersT>,
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
    typeof TransactionSafeTenderTrans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionSafeTenderTrans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIFT: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_TENDERED: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_MSTPOS: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARD_TYPE_ID: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIFT_DATE: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TENDER_TYPE: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPLICATED: EnumField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHANGE_LINE: EnumField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CARD_OR_ACCOUNT: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CURRENCY: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STAFF: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MESSAGE_NUMBER: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT_TENDERED_POS: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAFE_STATUS_TYPE: EnumField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      RetailSafeStatusTypeBase,
      true,
      true
    >;
    MANAGERS_KEY_LIVE: EnumField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_TIME: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COUNTER: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CURRENCY_POS: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_MST: OrderableEdmTypeField<
      TransactionSafeTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TransactionSafeTenderTrans<DeSerializers>>;
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
         * Static representation of the {@link retailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
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
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'StatementId',
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
         * Static representation of the {@link shift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT: fieldBuilder.buildEdmTypeField('Shift', 'Edm.String', true),
        /**
         * Static representation of the {@link amountTendered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TENDERED: fieldBuilder.buildEdmTypeField(
          'AmountTendered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountMstpos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_MSTPOS: fieldBuilder.buildEdmTypeField(
          'AmountMSTPOS',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CardTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shiftDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_DATE: fieldBuilder.buildEdmTypeField(
          'ShiftDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link businessDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DATE: fieldBuilder.buildEdmTypeField(
          'BusinessDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link tenderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_TYPE: fieldBuilder.buildEdmTypeField(
          'TenderType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link replicated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATED: fieldBuilder.buildEnumField('Replicated', NoYes, true),
        /**
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'TransactionStatus',
          RetailEntryStatus,
          true
        ),
        /**
         * Static representation of the {@link amountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'AmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link changeLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_LINE: fieldBuilder.buildEnumField('ChangeLine', NoYes, true),
        /**
         * Static representation of the {@link cardOrAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_OR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CardOrAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link staff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF: fieldBuilder.buildEdmTypeField('Staff', 'Edm.String', true),
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
         * Static representation of the {@link messageNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'MessageNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link amountTenderedPos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TENDERED_POS: fieldBuilder.buildEdmTypeField(
          'AmountTenderedPOS',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link safeStatusType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFE_STATUS_TYPE: fieldBuilder.buildEnumField(
          'SafeStatusType',
          RetailSafeStatusTypeBase,
          true
        ),
        /**
         * Static representation of the {@link managersKeyLive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGERS_KEY_LIVE: fieldBuilder.buildEnumField(
          'ManagersKeyLive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transactionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TIME: fieldBuilder.buildEdmTypeField(
          'TransactionTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link counter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER: fieldBuilder.buildEdmTypeField(
          'Counter',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'StatementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountCurrencyPos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CURRENCY_POS: fieldBuilder.buildEdmTypeField(
          'AmountCurrencyPOS',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRateMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_MST: fieldBuilder.buildEdmTypeField(
          'ExchangeRateMST',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransactionSafeTenderTrans)
      };
    }

    return this._schema;
  }
}
