/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailGiftCards } from './RetailGiftCards';
import { RetailGiftCardsRequestBuilder } from './RetailGiftCardsRequestBuilder';
import { RetailGiftCardTransactionsApi } from './RetailGiftCardTransactionsApi';
import { GiftCardTransactionsV2Api } from './GiftCardTransactionsV2Api';
import { NoYes } from './NoYes';
import { McrGiftCardType } from './McrGiftCardType';
import { RetailGiftCardStatus } from './RetailGiftCardStatus';
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
export class RetailGiftCardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailGiftCards<DeSerializersT>, DeSerializersT>
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
  ): RetailGiftCardsApi<DeSerializersT> {
    return new RetailGiftCardsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailGiftCardTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_GIFT_CARD_TRANSACTIONS: OneToManyLink<
      RetailGiftCards<DeSerializersT>,
      DeSerializersT,
      RetailGiftCardTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link giftCardTransactionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GIFT_CARD_TRANSACTION_V_2: OneToManyLink<
      RetailGiftCards<DeSerializersT>,
      DeSerializersT,
      GiftCardTransactionsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailGiftCardTransactionsApi<DeSerializersT>,
      GiftCardTransactionsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_GIFT_CARD_TRANSACTIONS: new OneToManyLink(
        'RetailGiftCardTransactions',
        this,
        linkedApis[0]
      ),
      GIFT_CARD_TRANSACTION_V_2: new OneToManyLink(
        'GiftCardTransactionV2',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailGiftCards;

  requestBuilder(): RetailGiftCardsRequestBuilder<DeSerializersT> {
    return new RetailGiftCardsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailGiftCards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailGiftCards<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailGiftCards<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailGiftCards, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailGiftCards,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTRY_ID: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MINIMUM_RELOAD_IN_ACCOUNTING_CURRENCY: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACE_VALUE: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESERVED_BY_TRANSACTION_ID: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RESERVED: EnumField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESERVED_BY_RETAIL_CHANNEL: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVED_BY_RETAIL_TERMINAL: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALL_CENTER_GIFT_CARD_TYPE: EnumField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      McrGiftCardType,
      true,
      true
    >;
    MAXIMUM_BALANCE_IN_ACCOUNTING_CURRENCY: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NON_RELOADABLE: EnumField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATUS: EnumField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      RetailGiftCardStatus,
      true,
      true
    >;
    EXPIRY_DATE: OrderableEdmTypeField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ONE_TIME_REDEMPTION: EnumField<
      RetailGiftCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailGiftCardTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_GIFT_CARD_TRANSACTIONS: OneToManyLink<
      RetailGiftCards<DeSerializersT>,
      DeSerializersT,
      RetailGiftCardTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link giftCardTransactionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GIFT_CARD_TRANSACTION_V_2: OneToManyLink<
      RetailGiftCards<DeSerializersT>,
      DeSerializersT,
      GiftCardTransactionsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailGiftCards<DeSerializers>>;
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
         * Static representation of the {@link entryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_ID: fieldBuilder.buildEdmTypeField(
          'EntryId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link minimumReloadInAccountingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_RELOAD_IN_ACCOUNTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'MinimumReloadInAccountingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
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
         * Static representation of the {@link faceValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACE_VALUE: fieldBuilder.buildEdmTypeField(
          'FaceValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reservedByTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_BY_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'ReservedByTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReserved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RESERVED: fieldBuilder.buildEnumField('IsReserved', NoYes, true),
        /**
         * Static representation of the {@link reservedByRetailChannel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_BY_RETAIL_CHANNEL: fieldBuilder.buildEdmTypeField(
          'ReservedByRetailChannel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reservedByRetailTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_BY_RETAIL_TERMINAL: fieldBuilder.buildEdmTypeField(
          'ReservedByRetailTerminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link callCenterGiftCardType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALL_CENTER_GIFT_CARD_TYPE: fieldBuilder.buildEnumField(
          'CallCenterGiftCardType',
          McrGiftCardType,
          true
        ),
        /**
         * Static representation of the {@link maximumBalanceInAccountingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_BALANCE_IN_ACCOUNTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'MaximumBalanceInAccountingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nonReloadable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_RELOADABLE: fieldBuilder.buildEnumField(
          'NonReloadable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailGiftCardStatus,
          true
        ),
        /**
         * Static representation of the {@link expiryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRY_DATE: fieldBuilder.buildEdmTypeField(
          'ExpiryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link oneTimeRedemption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_REDEMPTION: fieldBuilder.buildEnumField(
          'OneTimeRedemption',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailGiftCards)
      };
    }

    return this._schema;
  }
}
