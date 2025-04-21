/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GiftCardTransactionsV2 } from './GiftCardTransactionsV2';
import { GiftCardTransactionsV2RequestBuilder } from './GiftCardTransactionsV2RequestBuilder';
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
export class GiftCardTransactionsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GiftCardTransactionsV2<DeSerializersT>, DeSerializersT>
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
  ): GiftCardTransactionsV2Api<DeSerializersT> {
    return new GiftCardTransactionsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailGiftCard} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_GIFT_CARD: OneToOneLink<
      GiftCardTransactionsV2<DeSerializersT>,
      DeSerializersT,
      RetailGiftCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION: OneToOneLink<
      GiftCardTransactionsV2<DeSerializersT>,
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

  entityConstructor = GiftCardTransactionsV2;

  requestBuilder(): GiftCardTransactionsV2RequestBuilder<DeSerializersT> {
    return new GiftCardTransactionsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GiftCardTransactionsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GiftCardTransactionsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GiftCardTransactionsV2<DeSerializersT>,
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
    typeof GiftCardTransactionsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GiftCardTransactionsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_NUMBER: OrderableEdmTypeField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION: EnumField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      RetailGiftCardOperation,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STAFF: OrderableEdmTypeField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_CHANNEL_TABLE_RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMINAL_NUMBER: OrderableEdmTypeField<
      GiftCardTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailGiftCard} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_GIFT_CARD: OneToOneLink<
      GiftCardTransactionsV2<DeSerializersT>,
      DeSerializersT,
      RetailGiftCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION: OneToOneLink<
      GiftCardTransactionsV2<DeSerializersT>,
      DeSerializersT,
      RetailTransactionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GiftCardTransactionsV2<DeSerializers>>;
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
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.String',
          false
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
         * Static representation of the {@link receiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'ReceiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link staff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF: fieldBuilder.buildEdmTypeField('Staff', 'Edm.String', true),
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
         * Static representation of the {@link terminalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'TerminalNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GiftCardTransactionsV2)
      };
    }

    return this._schema;
  }
}
