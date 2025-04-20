/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankClientPayments } from './BankClientPayments';
import { BankClientPaymentsRequestBuilder } from './BankClientPaymentsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { BankClientPaymentDirectionRu } from './BankClientPaymentDirectionRu';
import { NoYes } from './NoYes';
import { ModuleCustVend } from './ModuleCustVend';
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
export class BankClientPaymentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankClientPayments<DeSerializersT>, DeSerializersT>
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
  ): BankClientPaymentsApi<DeSerializersT> {
    return new BankClientPaymentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BankClientPayments<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BankClientPayments;

  requestBuilder(): BankClientPaymentsRequestBuilder<DeSerializersT> {
    return new BankClientPaymentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankClientPayments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BankClientPayments<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankClientPayments<DeSerializersT>,
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
    typeof BankClientPayments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankClientPayments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_DIRECTION: EnumField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      BankClientPaymentDirectionRu,
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYEE_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UCI: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_EXCHANGE_RATE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYER_BANK_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUITTANCE_TIME: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPAYMENT_JOURNAL_VOUCHER: EnumField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_OF_CONVERSION: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUITTANCE_CONTENT: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE: EnumField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTERAGENT_TYPE: EnumField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      ModuleCustVend,
      true,
      true
    >;
    PURPOSE_TEXT: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_NUMBER_LOCKING: EnumField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYER_BANK_ADDRESS: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYEE_BANK_ADDRESS: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMBIGUOUS_TEXT: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECIPIENT: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_CORR_ACCOUNT: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_BIC: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TYPE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYER: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUITTANCE_DATE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR: EnumField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTERAGENT: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYER_BANK_BIC: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYER_BANK_CORR_ACCOUNT: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYER_BANK_NAME: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_NAME: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_ID: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_INN: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHDRAWAL_DATE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYER_INN: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR_CAUSE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYER_REGISTRY_REASON_CODE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_REGISTRY_REASON_CODE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_DATE: OrderableEdmTypeField<
      BankClientPayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BankClientPayments<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankClientPayments<DeSerializers>>;
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
         * Static representation of the {@link paymentDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DIRECTION: fieldBuilder.buildEnumField(
          'PaymentDirection',
          BankClientPaymentDirectionRu,
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayerAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link payeeAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayeeAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link uci} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UCI: fieldBuilder.buildEdmTypeField('UCI', 'Edm.String', true),
        /**
         * Static representation of the {@link bankExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'BankExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link payerBankAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYER_BANK_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayerBankAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quittanceTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUITTANCE_TIME: fieldBuilder.buildEdmTypeField(
          'QuittanceTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prepaymentJournalVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_JOURNAL_VOUCHER: fieldBuilder.buildEnumField(
          'PrepaymentJournalVoucher',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currencyOfConversion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_OF_CONVERSION: fieldBuilder.buildEdmTypeField(
          'CurrencyOfConversion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quittanceContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUITTANCE_CONTENT: fieldBuilder.buildEdmTypeField(
          'QuittanceContent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link include} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE: fieldBuilder.buildEnumField('Include', NoYes, true),
        /**
         * Static representation of the {@link counteragentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTERAGENT_TYPE: fieldBuilder.buildEnumField(
          'CounteragentType',
          ModuleCustVend,
          true
        ),
        /**
         * Static representation of the {@link purposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'PurposeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementNumberLocking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NUMBER_LOCKING: fieldBuilder.buildEnumField(
          'AgreementNumberLocking',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link payerBankAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYER_BANK_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PayerBankAddress',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link payeeBankAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PayeeBankAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ambiguousText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMBIGUOUS_TEXT: fieldBuilder.buildEdmTypeField(
          'AmbiguousText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recipient} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECIPIENT: fieldBuilder.buildEdmTypeField(
          'Recipient',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankCorrAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_CORR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PayeeBankCorrAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayeeBankAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankBic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_BIC: fieldBuilder.buildEdmTypeField(
          'PayeeBankBIC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'DocumentType',
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
         * Static representation of the {@link bankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'BankTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYER: fieldBuilder.buildEdmTypeField('Payer', 'Edm.String', true),
        /**
         * Static representation of the {@link quittanceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUITTANCE_DATE: fieldBuilder.buildEdmTypeField(
          'QuittanceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link error} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR: fieldBuilder.buildEnumField('Error', NoYes, true),
        /**
         * Static representation of the {@link counteragent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTERAGENT: fieldBuilder.buildEdmTypeField(
          'Counteragent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payerBankBic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYER_BANK_BIC: fieldBuilder.buildEdmTypeField(
          'PayerBankBIC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link payerBankCorrAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYER_BANK_CORR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PayerBankCorrAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payerBankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYER_BANK_NAME: fieldBuilder.buildEdmTypeField(
          'PayerBankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_NAME: fieldBuilder.buildEdmTypeField(
          'PayeeBankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'AgreementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeInn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_INN: fieldBuilder.buildEdmTypeField(
          'PayeeINN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withdrawalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHDRAWAL_DATE: fieldBuilder.buildEdmTypeField(
          'WithdrawalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payerInn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYER_INN: fieldBuilder.buildEdmTypeField(
          'PayerINN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link errorCause} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CAUSE: fieldBuilder.buildEdmTypeField(
          'ErrorCause',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payerRegistryReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYER_REGISTRY_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'PayerRegistryReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeRegistryReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_REGISTRY_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'PayeeRegistryReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'ReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankClientPayments)
      };
    }

    return this._schema;
  }
}
