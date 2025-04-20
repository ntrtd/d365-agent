/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QrBillIntegrations } from './QrBillIntegrations';
import { QrBillIntegrationsRequestBuilder } from './QrBillIntegrationsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class QrBillIntegrationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<QrBillIntegrations<DeSerializersT>, DeSerializersT>
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
  ): QrBillIntegrationsApi<DeSerializersT> {
    return new QrBillIntegrationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = QrBillIntegrations;

  requestBuilder(): QrBillIntegrationsRequestBuilder<DeSerializersT> {
    return new QrBillIntegrationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    QrBillIntegrations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<QrBillIntegrations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    QrBillIntegrations<DeSerializersT>,
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
    typeof QrBillIntegrations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        QrBillIntegrations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORT_EXECUTION_ID: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QR_REFERENCE_TYPE: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CREDITOR_ADDRESS_TYPE: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_REFERENCE: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CREDITOR_TOWN: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CREDITOR_COUNTRY: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_UNSTRUCTURED_MESSAGE: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_BANK_ACCOUNT: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CREDITOR_IBAN: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QR_BILL_INFORMATION: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CREDITOR_ADDR_STREET: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CREDITOR_ADDR_LINE_2: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CREDITOR_ADDR_LINE_1: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_TERM_ID: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_ID: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_AMOUNT: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_CODE: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CREDITOR_BUILDING_NUMBER: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CREDITOR_POSTAL_CODE: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QR_ALTERNATIVE_PARAMETER_2: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CREDITOR_NAME: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_ALTERNATIVE_PARAMETER_1: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QR_CURRENCY: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUMBER: OrderableEdmTypeField<
      QrBillIntegrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<QrBillIntegrations<DeSerializers>>;
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
         * Static representation of the {@link importExecutionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_EXECUTION_ID: fieldBuilder.buildEdmTypeField(
          'ImportExecutionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link qrReferenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_REFERENCE_TYPE: fieldBuilder.buildEdmTypeField(
          'QRReferenceType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCreditorAddressType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CREDITOR_ADDRESS_TYPE: fieldBuilder.buildEdmTypeField(
          'QRCreditorAddressType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_REFERENCE: fieldBuilder.buildEdmTypeField(
          'QRReference',
          'Edm.String',
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
         * Static representation of the {@link qrCreditorTown} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CREDITOR_TOWN: fieldBuilder.buildEdmTypeField(
          'QRCreditorTown',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCreditorCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CREDITOR_COUNTRY: fieldBuilder.buildEdmTypeField(
          'QRCreditorCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrUnstructuredMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_UNSTRUCTURED_MESSAGE: fieldBuilder.buildEdmTypeField(
          'QRUnstructuredMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorBankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCreditorIban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CREDITOR_IBAN: fieldBuilder.buildEdmTypeField(
          'QRCreditorIBAN',
          'Edm.String',
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
         * Static representation of the {@link qrBillInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_BILL_INFORMATION: fieldBuilder.buildEdmTypeField(
          'QRBillInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCreditorAddrStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CREDITOR_ADDR_STREET: fieldBuilder.buildEdmTypeField(
          'QRCreditorAddrStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCreditorAddrLine2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CREDITOR_ADDR_LINE_2: fieldBuilder.buildEdmTypeField(
          'QRCreditorAddrLine2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCreditorAddrLine1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CREDITOR_ADDR_LINE_1: fieldBuilder.buildEdmTypeField(
          'QRCreditorAddrLine1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_TERM_ID: fieldBuilder.buildEdmTypeField(
          'PaymTermId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ID: fieldBuilder.buildEdmTypeField('PaymId', 'Edm.String', true),
        /**
         * Static representation of the {@link qrAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_AMOUNT: fieldBuilder.buildEdmTypeField(
          'QRAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCreditorBuildingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CREDITOR_BUILDING_NUMBER: fieldBuilder.buildEdmTypeField(
          'QRCreditorBuildingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCreditorPostalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CREDITOR_POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'QRCreditorPostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link qrAlternativeParameter2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_ALTERNATIVE_PARAMETER_2: fieldBuilder.buildEdmTypeField(
          'QRAlternativeParameter2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCreditorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CREDITOR_NAME: fieldBuilder.buildEdmTypeField(
          'QRCreditorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrAlternativeParameter1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_ALTERNATIVE_PARAMETER_1: fieldBuilder.buildEdmTypeField(
          'QRAlternativeParameter1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qrCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QR_CURRENCY: fieldBuilder.buildEdmTypeField(
          'QRCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VATNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', QrBillIntegrations)
      };
    }

    return this._schema;
  }
}
