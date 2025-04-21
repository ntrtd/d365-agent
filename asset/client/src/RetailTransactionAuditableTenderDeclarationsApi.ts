/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionAuditableTenderDeclarations } from './RetailTransactionAuditableTenderDeclarations';
import { RetailTransactionAuditableTenderDeclarationsRequestBuilder } from './RetailTransactionAuditableTenderDeclarationsRequestBuilder';
import { RetailEntryStatus } from './RetailEntryStatus';
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
export class RetailTransactionAuditableTenderDeclarationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionAuditableTenderDeclarations<DeSerializersT>,
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
  ): RetailTransactionAuditableTenderDeclarationsApi<DeSerializersT> {
    return new RetailTransactionAuditableTenderDeclarationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionAuditableTenderDeclarations;

  requestBuilder(): RetailTransactionAuditableTenderDeclarationsRequestBuilder<DeSerializersT> {
    return new RetailTransactionAuditableTenderDeclarationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionAuditableTenderDeclarations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionAuditableTenderDeclarations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionAuditableTenderDeclarations<DeSerializersT>,
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
    typeof RetailTransactionAuditableTenderDeclarations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionAuditableTenderDeclarations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTER_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY_CURRENCY_EXCHANGE_RATE: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_CURRENCY_EXCHANGE_RATE: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_IN_COMPANY_CURRENCY: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_CHANNEL_CURRENCY: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANNEL_CURRENCY: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OPERATOR_ID: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_STATEMENT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TIME: OrderableEdmTypeField<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionAuditableTenderDeclarations<DeSerializers>
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
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
         * Static representation of the {@link registerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegisterNumber',
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
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
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'TransactionStatus',
          RetailEntryStatus,
          true
        ),
        /**
         * Static representation of the {@link amountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInTransactionCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link companyCurrencyExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CURRENCY_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'CompanyCurrencyExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransactionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignCurrencyExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_CURRENCY_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ForeignCurrencyExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountInCompanyCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_COMPANY_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInCompanyCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'statementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInChannelCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_CHANNEL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInChannelCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link headerStoreNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'HeaderStoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'PaymentMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link channelCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ChannelCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'StatementNumber',
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
         * Static representation of the {@link operatorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATOR_ID: fieldBuilder.buildEdmTypeField(
          'OperatorID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'HeaderStatementNumber',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RetailTransactionAuditableTenderDeclarations
        )
      };
    }

    return this._schema;
  }
}
