/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionBankedTenderTrans } from './TransactionBankedTenderTrans';
import { TransactionBankedTenderTransRequestBuilder } from './TransactionBankedTenderTransRequestBuilder';
import { NoYes } from './NoYes';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailBankedStatusTypeBase } from './RetailBankedStatusTypeBase';
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
export class TransactionBankedTenderTransApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TransactionBankedTenderTrans<DeSerializersT>, DeSerializersT>
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
  ): TransactionBankedTenderTransApi<DeSerializersT> {
    return new TransactionBankedTenderTransApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionBankedTenderTrans;

  requestBuilder(): TransactionBankedTenderTransRequestBuilder<DeSerializersT> {
    return new TransactionBankedTenderTransRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransactionBankedTenderTrans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionBankedTenderTrans<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionBankedTenderTrans<DeSerializersT>,
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
    typeof TransactionBankedTenderTrans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionBankedTenderTrans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIFT: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_TENDERED: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_MSTPOS: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARD_TYPE_ID: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIFT_DATE: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TENDER_TYPE: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPLICATED: EnumField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_BAG_NUMBER: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANKED_STATUS_TYPE: EnumField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      RetailBankedStatusTypeBase,
      true,
      true
    >;
    CHANGE_LINE: EnumField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CARD_OR_ACCOUNT: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CURRENCY: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STAFF: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MESSAGE_NUMBER: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT_TENDERED_POS: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANAGERS_KEY_LIVE: EnumField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_TIME: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COUNTER: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CURRENCY_POS: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_MST: OrderableEdmTypeField<
      TransactionBankedTenderTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TransactionBankedTenderTrans<DeSerializers>>;
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
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'StatementId',
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
         * Static representation of the {@link bankBagNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BAG_NUMBER: fieldBuilder.buildEdmTypeField(
          'BankBagNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankedStatusType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANKED_STATUS_TYPE: fieldBuilder.buildEnumField(
          'BankedStatusType',
          RetailBankedStatusTypeBase,
          true
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
        ALL_FIELDS: new AllFields('*', TransactionBankedTenderTrans)
      };
    }

    return this._schema;
  }
}
