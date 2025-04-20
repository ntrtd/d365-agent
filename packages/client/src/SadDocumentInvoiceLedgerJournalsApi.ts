/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SadDocumentInvoiceLedgerJournals } from './SadDocumentInvoiceLedgerJournals';
import { SadDocumentInvoiceLedgerJournalsRequestBuilder } from './SadDocumentInvoiceLedgerJournalsRequestBuilder';
import { SadDocumentLedgerJournalsApi } from './SadDocumentLedgerJournalsApi';
import { SadDocumentInvoiceLineLedgerJournalsApi } from './SadDocumentInvoiceLineLedgerJournalsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SadDocumentInvoiceLedgerJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SadDocumentInvoiceLedgerJournals<DeSerializersT>, DeSerializersT>
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
  ): SadDocumentInvoiceLedgerJournalsApi<DeSerializersT> {
    return new SadDocumentInvoiceLedgerJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link sadDocumentLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_LEDGER_JOURNAL: OneToOneLink<
      SadDocumentInvoiceLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentLedgerJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sadDocumentInvoiceLineLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_INVOICE_LINE_LEDGER_JOURNAL: OneToManyLink<
      SadDocumentInvoiceLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentInvoiceLineLedgerJournalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SadDocumentLedgerJournalsApi<DeSerializersT>,
      SadDocumentInvoiceLineLedgerJournalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SAD_DOCUMENT_LEDGER_JOURNAL: new OneToOneLink(
        'SADDocumentLedgerJournal',
        this,
        linkedApis[0]
      ),
      SAD_DOCUMENT_INVOICE_LINE_LEDGER_JOURNAL: new OneToManyLink(
        'SADDocumentInvoiceLineLedgerJournal',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SadDocumentInvoiceLedgerJournals;

  requestBuilder(): SadDocumentInvoiceLedgerJournalsRequestBuilder<DeSerializersT> {
    return new SadDocumentInvoiceLedgerJournalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SadDocumentInvoiceLedgerJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SadDocumentInvoiceLedgerJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SadDocumentInvoiceLedgerJournals<DeSerializersT>,
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
    typeof SadDocumentInvoiceLedgerJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SadDocumentInvoiceLedgerJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SadDocumentInvoiceLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAD_NUMBER: OrderableEdmTypeField<
      SadDocumentInvoiceLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAD_DATE: OrderableEdmTypeField<
      SadDocumentInvoiceLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      SadDocumentInvoiceLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      SadDocumentInvoiceLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      SadDocumentInvoiceLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sadDocumentLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_LEDGER_JOURNAL: OneToOneLink<
      SadDocumentInvoiceLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentLedgerJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sadDocumentInvoiceLineLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_INVOICE_LINE_LEDGER_JOURNAL: OneToManyLink<
      SadDocumentInvoiceLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentInvoiceLineLedgerJournalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SadDocumentInvoiceLedgerJournals<DeSerializers>>;
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
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', false),
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
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SadDocumentInvoiceLedgerJournals)
      };
    }

    return this._schema;
  }
}
