/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GeneralLedgerCustInvoiceJournalHeaders } from './GeneralLedgerCustInvoiceJournalHeaders';
import { GeneralLedgerCustInvoiceJournalHeadersRequestBuilder } from './GeneralLedgerCustInvoiceJournalHeadersRequestBuilder';
import { GeneralLedgerCustInvoiceJournalLinesApi } from './GeneralLedgerCustInvoiceJournalLinesApi';
import { NoYes } from './NoYes';
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
export class GeneralLedgerCustInvoiceJournalHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializersT>,
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
  ): GeneralLedgerCustInvoiceJournalHeadersApi<DeSerializersT> {
    return new GeneralLedgerCustInvoiceJournalHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link custInvoiceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE: OneToManyLink<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CUST_INVOICE_JOURNAL_LINE: new OneToManyLink(
        'CustInvoiceJournalLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = GeneralLedgerCustInvoiceJournalHeaders;

  requestBuilder(): GeneralLedgerCustInvoiceJournalHeadersRequestBuilder<DeSerializersT> {
    return new GeneralLedgerCustInvoiceJournalHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GeneralLedgerCustInvoiceJournalHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GeneralLedgerCustInvoiceJournalHeaders<DeSerializersT>,
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
    typeof GeneralLedgerCustInvoiceJournalHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GeneralLedgerCustInvoiceJournalHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_POSTED: EnumField<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custInvoiceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE: OneToManyLink<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      GeneralLedgerCustInvoiceJournalHeaders<DeSerializers>
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
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTED: fieldBuilder.buildEnumField('IsPosted', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GeneralLedgerCustInvoiceJournalHeaders)
      };
    }

    return this._schema;
  }
}
