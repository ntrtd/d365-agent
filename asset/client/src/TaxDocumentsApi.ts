/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxDocuments } from './TaxDocuments';
import { TaxDocumentsRequestBuilder } from './TaxDocumentsRequestBuilder';
import { TaxTypeW } from './TaxTypeW';
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
export class TaxDocumentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxDocuments<DeSerializersT>, DeSerializersT>
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
  ): TaxDocumentsApi<DeSerializersT> {
    return new TaxDocumentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxDocuments;

  requestBuilder(): TaxDocumentsRequestBuilder<DeSerializersT> {
    return new TaxDocumentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxDocuments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxDocuments<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxDocuments<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxDocuments, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxDocuments, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_DOCUMENT_NUMBER: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_VEND_TRANS_TABLE_ID: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_DOCUMENT_TRANSACTION_TAX_AMOUNT_IN_CURRENCY: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AMOUNT_IN_CURRENCY: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CREDIT_MEMO_TRANSACTION_TYPE_OF_TAX: EnumField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      TaxTypeW,
      true,
      true
    >;
    TAX_CREDIT_MEMO_DATE: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_CREDIT_MEMO_TRANSACTION_TAX_AMOUNT_IN_CURRENCY: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CREDIT_MEMO_TRANSACTION_TAX_VALUE: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_DOCUMENT_TRANSACTION_TAX_AMOUNT: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_DOCUMENT_DATE: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_DOCUMENT_TRANSACTION_AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_DOCUMENT_TRANSACTION_AMOUNT: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CREDIT_MEMO_TRANSACTION_AMOUNT: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_DOCUMENT_TRANSACTION_TYPE_OF_TAX: EnumField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      TaxTypeW,
      true,
      true
    >;
    TAX_DOCUMENT_TRANSACTION_TAX_VALUE: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CREDIT_MEMO_TRANSACTION_TAX_AMOUNT: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CREDIT_MEMO_NUMBER: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CREDIT_MEMO_TRANSACTION_AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      TaxDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TaxDocuments<DeSerializers>>;
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
         * Static representation of the {@link taxDocumentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxDocumentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link custVendTransTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_TRANS_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'CustVendTransTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxDocumentTransactionTaxAmountInCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DOCUMENT_TRANSACTION_TAX_AMOUNT_IN_CURRENCY:
          fieldBuilder.buildEdmTypeField(
            'TaxDocumentTransactionTaxAmountInCurrency',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link taxAmountInCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_IN_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TaxAmountInCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxCreditMemoTransactionTypeOfTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_MEMO_TRANSACTION_TYPE_OF_TAX: fieldBuilder.buildEnumField(
          'TaxCreditMemoTransactionTypeOfTax',
          TaxTypeW,
          true
        ),
        /**
         * Static representation of the {@link taxCreditMemoDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_MEMO_DATE: fieldBuilder.buildEdmTypeField(
          'TaxCreditMemoDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxCreditMemoTransactionTaxAmountInCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_MEMO_TRANSACTION_TAX_AMOUNT_IN_CURRENCY:
          fieldBuilder.buildEdmTypeField(
            'TaxCreditMemoTransactionTaxAmountInCurrency',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link taxCreditMemoTransactionTaxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_MEMO_TRANSACTION_TAX_VALUE: fieldBuilder.buildEdmTypeField(
          'TaxCreditMemoTransactionTaxValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxDocumentTransactionTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DOCUMENT_TRANSACTION_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxDocumentTransactionTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'TaxDocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxDocumentTransactionAmountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DOCUMENT_TRANSACTION_AMOUNT_IN_TRANSACTION_CURRENCY:
          fieldBuilder.buildEdmTypeField(
            'TaxDocumentTransactionAmountInTransactionCurrency',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link taxDocumentTransactionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DOCUMENT_TRANSACTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxDocumentTransactionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link taxCreditMemoTransactionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_MEMO_TRANSACTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxCreditMemoTransactionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxDocumentTransactionTypeOfTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DOCUMENT_TRANSACTION_TYPE_OF_TAX: fieldBuilder.buildEnumField(
          'TaxDocumentTransactionTypeOfTax',
          TaxTypeW,
          true
        ),
        /**
         * Static representation of the {@link taxDocumentTransactionTaxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DOCUMENT_TRANSACTION_TAX_VALUE: fieldBuilder.buildEdmTypeField(
          'TaxDocumentTransactionTaxValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link taxCreditMemoTransactionTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_MEMO_TRANSACTION_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxCreditMemoTransactionTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxCreditMemoNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_MEMO_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxCreditMemoNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxCreditMemoTransactionAmountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_MEMO_TRANSACTION_AMOUNT_IN_TRANSACTION_CURRENCY:
          fieldBuilder.buildEdmTypeField(
            'TaxCreditMemoTransactionAmountInTransactionCurrency',
            'Edm.Decimal',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxDocuments)
      };
    }

    return this._schema;
  }
}
