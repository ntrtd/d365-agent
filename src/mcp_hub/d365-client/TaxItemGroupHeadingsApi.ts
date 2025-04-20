/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxItemGroupHeadings } from './TaxItemGroupHeadings';
import { TaxItemGroupHeadingsRequestBuilder } from './TaxItemGroupHeadingsRequestBuilder';
import { VendInvoiceJournalLinesApi } from './VendInvoiceJournalLinesApi';
import { LedgerJournalCdsLinesApi } from './LedgerJournalCdsLinesApi';
import { AssetLeaseLedgerJournalLinesApi } from './AssetLeaseLedgerJournalLinesApi';
import { CustomerPaymentJournalLinesApi } from './CustomerPaymentJournalLinesApi';
import { LedgerJournalLinesApi } from './LedgerJournalLinesApi';
import { FreeTextInvoiceLinesApi } from './FreeTextInvoiceLinesApi';
import { VendorPaymentJournalFeesApi } from './VendorPaymentJournalFeesApi';
import { CustomerPaymentJournalFeesApi } from './CustomerPaymentJournalFeesApi';
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
export class TaxItemGroupHeadingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxItemGroupHeadings<DeSerializersT>, DeSerializersT>
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
  ): TaxItemGroupHeadingsApi<DeSerializersT> {
    return new TaxItemGroupHeadingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLineItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ITEM_SALES_TAX_GROUP: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineCdsItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_ITEM_SALES_TAX_GROUP: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ITEM_SALES_TAX_GROUP: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineTaxItemGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_ITEM_GROUP_ENTITY: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineEntityItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ENTITY_ITEM_SALES_TAX_GROUP: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceLineTaxItemGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_TAX_ITEM_GROUP: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_FEE: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_FEE: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendInvoiceJournalLinesApi<DeSerializersT>,
      LedgerJournalCdsLinesApi<DeSerializersT>,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>,
      CustomerPaymentJournalLinesApi<DeSerializersT>,
      LedgerJournalLinesApi<DeSerializersT>,
      FreeTextInvoiceLinesApi<DeSerializersT>,
      VendorPaymentJournalFeesApi<DeSerializersT>,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VEND_INVOICE_JOURNAL_LINE_ITEM_SALES_TAX_GROUP: new OneToManyLink(
        'VendInvoiceJournalLineItemSalesTaxGroup',
        this,
        linkedApis[0]
      ),
      LEDGER_JOURNAL_LINE_CDS_ITEM_SALES_TAX_GROUP: new OneToManyLink(
        'LedgerJournalLineCDSItemSalesTaxGroup',
        this,
        linkedApis[1]
      ),
      LEDGER_JOURNAL_LINE_ITEM_SALES_TAX_GROUP: new OneToManyLink(
        'LedgerJournalLineItemSalesTaxGroup',
        this,
        linkedApis[2]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_ITEM_GROUP_ENTITY: new OneToManyLink(
        'CustomerPaymentJournalLineTaxItemGroupEntity',
        this,
        linkedApis[3]
      ),
      LEDGER_JOURNAL_LINE_ENTITY_ITEM_SALES_TAX_GROUP: new OneToManyLink(
        'LedgerJournalLineEntityItemSalesTaxGroup',
        this,
        linkedApis[4]
      ),
      FREE_TEXT_INVOICE_LINE_TAX_ITEM_GROUP: new OneToManyLink(
        'FreeTextInvoiceLineTaxItemGroup',
        this,
        linkedApis[5]
      ),
      VENDOR_PAYMENT_JOURNAL_FEE: new OneToManyLink(
        'VendorPaymentJournalFee',
        this,
        linkedApis[6]
      ),
      CUSTOMER_PAYMENT_JOURNAL_FEE: new OneToManyLink(
        'CustomerPaymentJournalFee',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = TaxItemGroupHeadings;

  requestBuilder(): TaxItemGroupHeadingsRequestBuilder<DeSerializersT> {
    return new TaxItemGroupHeadingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxItemGroupHeadings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxItemGroupHeadings<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxItemGroupHeadings<DeSerializersT>,
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
    typeof TaxItemGroupHeadings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxItemGroupHeadings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxItemGroupHeadings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      TaxItemGroupHeadings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      TaxItemGroupHeadings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLineItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_ITEM_SALES_TAX_GROUP: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineCdsItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_ITEM_SALES_TAX_GROUP: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ITEM_SALES_TAX_GROUP: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineTaxItemGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_ITEM_GROUP_ENTITY: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineEntityItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ENTITY_ITEM_SALES_TAX_GROUP: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceLineTaxItemGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_TAX_ITEM_GROUP: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_FEE: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_FEE: OneToManyLink<
      TaxItemGroupHeadings<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxItemGroupHeadings<DeSerializers>>;
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
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxItemGroupHeadings)
      };
    }

    return this._schema;
  }
}
