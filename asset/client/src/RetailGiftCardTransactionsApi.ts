/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailGiftCardTransactions } from './RetailGiftCardTransactions';
import { RetailGiftCardTransactionsRequestBuilder } from './RetailGiftCardTransactionsRequestBuilder';
import { RetailGiftCardsApi } from './RetailGiftCardsApi';
import { RetailTransactionsApi } from './RetailTransactionsApi';
import { RetailGiftCardOperation } from './RetailGiftCardOperation';
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
export class RetailGiftCardTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailGiftCardTransactions<DeSerializersT>, DeSerializersT>
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
  ): RetailGiftCardTransactionsApi<DeSerializersT> {
    return new RetailGiftCardTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailGiftCard} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_GIFT_CARD: OneToOneLink<
      RetailGiftCardTransactions<DeSerializersT>,
      DeSerializersT,
      RetailGiftCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION: OneToOneLink<
      RetailGiftCardTransactions<DeSerializersT>,
      DeSerializersT,
      RetailTransactionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailGiftCardsApi<DeSerializersT>,
      RetailTransactionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_GIFT_CARD: new OneToOneLink('RetailGiftCard', this, linkedApis[0]),
      RETAIL_TRANSACTION: new OneToOneLink(
        'RetailTransaction',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailGiftCardTransactions;

  requestBuilder(): RetailGiftCardTransactionsRequestBuilder<DeSerializersT> {
    return new RetailGiftCardTransactionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailGiftCardTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailGiftCardTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailGiftCardTransactions<DeSerializersT>,
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
    typeof RetailGiftCardTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailGiftCardTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_NUMBER: OrderableEdmTypeField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MCR_INVOICE_ACCOUNT: OrderableEdmTypeField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAFF_ID: OrderableEdmTypeField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION: EnumField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      RetailGiftCardOperation,
      true,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_CHANNEL_TABLE_RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      RetailGiftCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailGiftCard} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_GIFT_CARD: OneToOneLink<
      RetailGiftCardTransactions<DeSerializersT>,
      DeSerializersT,
      RetailGiftCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION: OneToOneLink<
      RetailGiftCardTransactions<DeSerializersT>,
      DeSerializersT,
      RetailTransactionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailGiftCardTransactions<DeSerializers>>;
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
         * Static representation of the {@link cardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'CardNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link mcrInvoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'MCRInvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link staffId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_ID: fieldBuilder.buildEdmTypeField('StaffId', 'Edm.String', true),
        /**
         * Static representation of the {@link operation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION: fieldBuilder.buildEnumField(
          'Operation',
          RetailGiftCardOperation,
          true
        ),
        /**
         * Static representation of the {@link receiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'ReceiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'TerminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link retailChannelTableRetailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_TABLE_RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelTable_RetailChannelId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailGiftCardTransactions)
      };
    }

    return this._schema;
  }
}
