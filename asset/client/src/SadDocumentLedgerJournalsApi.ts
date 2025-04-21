/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SadDocumentLedgerJournals } from './SadDocumentLedgerJournals';
import { SadDocumentLedgerJournalsRequestBuilder } from './SadDocumentLedgerJournalsRequestBuilder';
import { SadDocumentLineLedgerJournalsApi } from './SadDocumentLineLedgerJournalsApi';
import { SadDocumentInvoiceLedgerJournalsApi } from './SadDocumentInvoiceLedgerJournalsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SadDocumentLedgerJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SadDocumentLedgerJournals<DeSerializersT>, DeSerializersT>
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
  ): SadDocumentLedgerJournalsApi<DeSerializersT> {
    return new SadDocumentLedgerJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link sadDocumentLineLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_LINE_LEDGER_JOURNAL: OneToManyLink<
      SadDocumentLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentLineLedgerJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sadDocumentInvoiceLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_INVOICE_LEDGER_JOURNAL: OneToManyLink<
      SadDocumentLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentInvoiceLedgerJournalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SadDocumentLineLedgerJournalsApi<DeSerializersT>,
      SadDocumentInvoiceLedgerJournalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SAD_DOCUMENT_LINE_LEDGER_JOURNAL: new OneToManyLink(
        'SADDocumentLineLedgerJournal',
        this,
        linkedApis[0]
      ),
      SAD_DOCUMENT_INVOICE_LEDGER_JOURNAL: new OneToManyLink(
        'SADDocumentInvoiceLedgerJournal',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SadDocumentLedgerJournals;

  requestBuilder(): SadDocumentLedgerJournalsRequestBuilder<DeSerializersT> {
    return new SadDocumentLedgerJournalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SadDocumentLedgerJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SadDocumentLedgerJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SadDocumentLedgerJournals<DeSerializersT>,
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
    typeof SadDocumentLedgerJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SadDocumentLedgerJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAD_NUMBER: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAD_DATE: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_OF_VAT_REGISTER: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DUTY_GOVERNMENT: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MISC_PAYMENTS: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARRIER: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      SadDocumentLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sadDocumentLineLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_LINE_LEDGER_JOURNAL: OneToManyLink<
      SadDocumentLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentLineLedgerJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sadDocumentInvoiceLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_INVOICE_LEDGER_JOURNAL: OneToManyLink<
      SadDocumentLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentInvoiceLedgerJournalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SadDocumentLedgerJournals<DeSerializers>>;
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
         * Static representation of the {@link sadNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAD_NUMBER: fieldBuilder.buildEdmTypeField(
          'SADNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sadDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAD_DATE: fieldBuilder.buildEdmTypeField(
          'SADDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dateOfVatRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_VAT_REGISTER: fieldBuilder.buildEdmTypeField(
          'DateOfVATRegister',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dutyGovernment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUTY_GOVERNMENT: fieldBuilder.buildEdmTypeField(
          'DutyGovernment',
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
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link miscPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISC_PAYMENTS: fieldBuilder.buildEdmTypeField(
          'MiscPayments',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link carrier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER: fieldBuilder.buildEdmTypeField('Carrier', 'Edm.String', true),
        /**
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEdmTypeField(
          'Transport',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SadDocumentLedgerJournals)
      };
    }

    return this._schema;
  }
}
