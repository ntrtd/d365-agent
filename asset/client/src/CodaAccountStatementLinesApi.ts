/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CodaAccountStatementLines } from './CodaAccountStatementLines';
import { CodaAccountStatementLinesRequestBuilder } from './CodaAccountStatementLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { PaymentStub } from './PaymentStub';
import { BankCodaTransactionType } from './BankCodaTransactionType';
import { MessageType } from './MessageType';
import { BankCodaSettlementType } from './BankCodaSettlementType';
import { BankCodaLedgerJournalAcType } from './BankCodaLedgerJournalAcType';
import { GlobalisationCode } from './GlobalisationCode';
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
export class CodaAccountStatementLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CodaAccountStatementLines<DeSerializersT>, DeSerializersT>
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
  ): CodaAccountStatementLinesApi<DeSerializersT> {
    return new CodaAccountStatementLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CodaAccountStatementLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CodaAccountStatementLines;

  requestBuilder(): CodaAccountStatementLinesRequestBuilder<DeSerializersT> {
    return new CodaAccountStatementLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CodaAccountStatementLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CodaAccountStatementLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CodaAccountStatementLines<DeSerializersT>,
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
    typeof CodaAccountStatementLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CodaAccountStatementLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GUID: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CUSTOMER_REFERENCE: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_LINKED: EnumField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSOCIATED_PAYMENT_ATTACHMENT: EnumField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    BANK_REFERENCE_NUMBER: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPPOSITE_PARTY_CITY: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_OR_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_ACCOUNTING_CURRENCY: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HAS_PROCESS_ERRORS: EnumField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      BankCodaTransactionType,
      true,
      true
    >;
    DATE_1: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT_IMPORTED: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPPOSITE_PARTY_INTERNAL_CODES: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_TYPE: EnumField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      MessageType,
      true,
      true
    >;
    OPPOSITE_PARTY_ADDRESS: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPPOSITE_PARTY_NAME: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STATEMENT_DATE: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPLETED: EnumField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLEMENT_TYPE: EnumField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      BankCodaSettlementType,
      true,
      true
    >;
    TRANSACTION_GROUP: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DETAIL: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      BankCodaLedgerJournalAcType,
      true,
      true
    >;
    BANK_CODA_ACCOUNT_STATEMENT_LINES_1_LINE_ID: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    GLOBALISATION_ID: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_STATEMENT: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GLOBALIZATION_CODA: EnumField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      GlobalisationCode,
      true,
      true
    >;
    TRANSACTION_CATEGORY: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_BANK_REFERENCE_NUMBER: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CodaAccountStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CodaAccountStatementLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CodaAccountStatementLines<DeSerializers>>;
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
         * Static representation of the {@link guid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUID: fieldBuilder.buildEdmTypeField('GUID', 'Edm.Guid', false),
        /**
         * Static representation of the {@link customerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CustomerReference',
          'Edm.String',
          true
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
         * Static representation of the {@link transaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION: fieldBuilder.buildEdmTypeField(
          'Transaction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountLinked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_LINKED: fieldBuilder.buildEnumField(
          'CashDiscountLinked',
          NoYes,
          true
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
         * Static representation of the {@link message} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE: fieldBuilder.buildEdmTypeField('Message', 'Edm.String', true),
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
         * Static representation of the {@link associatedPaymentAttachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATED_PAYMENT_ATTACHMENT: fieldBuilder.buildEnumField(
          'AssociatedPaymentAttachment',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link bankReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BankReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oppositePartyCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPPOSITE_PARTY_CITY: fieldBuilder.buildEdmTypeField(
          'OppositePartyCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerOrVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_OR_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerOrVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInAccountingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_ACCOUNTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInAccountingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hasProcessErrors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_PROCESS_ERRORS: fieldBuilder.buildEnumField(
          'HasProcessErrors',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          BankCodaTransactionType,
          true
        ),
        /**
         * Static representation of the {@link date1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_1: fieldBuilder.buildEdmTypeField(
          'Date1',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amountImported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IMPORTED: fieldBuilder.buildEdmTypeField(
          'AmountImported',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link oppositePartyInternalCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPPOSITE_PARTY_INTERNAL_CODES: fieldBuilder.buildEdmTypeField(
          'OppositePartyInternalCodes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_TYPE: fieldBuilder.buildEnumField(
          'MessageType',
          MessageType,
          true
        ),
        /**
         * Static representation of the {@link oppositePartyAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPPOSITE_PARTY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'OppositePartyAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oppositePartyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPPOSITE_PARTY_NAME: fieldBuilder.buildEdmTypeField(
          'OppositePartyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link bankStatementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'BankStatementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link completed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED: fieldBuilder.buildEnumField('Completed', NoYes, true),
        /**
         * Static representation of the {@link settlementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_TYPE: fieldBuilder.buildEnumField(
          'SettlementType',
          BankCodaSettlementType,
          true
        ),
        /**
         * Static representation of the {@link transactionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_GROUP: fieldBuilder.buildEdmTypeField(
          'TransactionGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link detail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL: fieldBuilder.buildEdmTypeField('Detail', 'Edm.String', true),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          BankCodaLedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link bankCodaAccountStatementLines1LineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODA_ACCOUNT_STATEMENT_LINES_1_LINE_ID:
          fieldBuilder.buildEdmTypeField(
            'BankCodaAccountStatementLines1_LineId',
            'Edm.Guid',
            false
          ),
        /**
         * Static representation of the {@link globalisationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBALISATION_ID: fieldBuilder.buildEdmTypeField(
          'GlobalisationId',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link bankStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT: fieldBuilder.buildEdmTypeField(
          'BankStatement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link globalizationCoda} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBALIZATION_CODA: fieldBuilder.buildEnumField(
          'GlobalizationCODA',
          GlobalisationCode,
          true
        ),
        /**
         * Static representation of the {@link transactionCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CATEGORY: fieldBuilder.buildEdmTypeField(
          'TransactionCategory',
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
         * Static representation of the {@link externalBankReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_BANK_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExternalBankReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BankAccountNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CodaAccountStatementLines)
      };
    }

    return this._schema;
  }
}
