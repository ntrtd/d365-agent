/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxGroups } from './TaxGroups';
import { TaxGroupsRequestBuilder } from './TaxGroupsRequestBuilder';
import { VendInvoiceJournalLinesApi } from './VendInvoiceJournalLinesApi';
import { LedgerJournalCdsLinesApi } from './LedgerJournalCdsLinesApi';
import { CdsFreeTextInvoiceLinesApi } from './CdsFreeTextInvoiceLinesApi';
import { ProspectsApi } from './ProspectsApi';
import { PurchaseOrderLineChargesV2Api } from './PurchaseOrderLineChargesV2Api';
import { AssetLeaseLedgerJournalLinesApi } from './AssetLeaseLedgerJournalLinesApi';
import { CustomerPaymentJournalLinesApi } from './CustomerPaymentJournalLinesApi';
import { VendorGroupsApi } from './VendorGroupsApi';
import { GroupRetailTaxFiltersApi } from './GroupRetailTaxFiltersApi';
import { LedgerJournalLinesApi } from './LedgerJournalLinesApi';
import { FreeTextInvoiceLinesApi } from './FreeTextInvoiceLinesApi';
import { PurchaseOrderHeaderChargesApi } from './PurchaseOrderHeaderChargesApi';
import { VendorPaymentJournalFeesApi } from './VendorPaymentJournalFeesApi';
import { VendorInvoiceHeaderChargesApi } from './VendorInvoiceHeaderChargesApi';
import { CustomerPaymentJournalFeesApi } from './CustomerPaymentJournalFeesApi';
import { TaxGroupDatasApi } from './TaxGroupDatasApi';
import { InventOperationalSiteCurrentPostalAddressesApi } from './InventOperationalSiteCurrentPostalAddressesApi';
import { NoYes } from './NoYes';
import { FillSalesDateW } from './FillSalesDateW';
import { FillVatDueDateW } from './FillVatDueDateW';
import { TaxPrintDetail } from './TaxPrintDetail';
import { TaxGroupRounding } from './TaxGroupRounding';
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
export class TaxGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxGroups<DeSerializersT>, DeSerializersT>
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
  ): TaxGroupsApi<DeSerializersT> {
    return new TaxGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLineSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_SALES_TAX_GROUP: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineCdsSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_SALES_TAX_GROUP: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_LINES: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLineCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINE_CHARGES: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLineChargesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_SALES_TAX_GROUP: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineTaxGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_GROUP_ENTITY: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_GROUPS: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link groupRetailTaxFilter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GROUP_RETAIL_TAX_FILTER: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      GroupRetailTaxFiltersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineEntitySalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ENTITY_SALES_TAX_GROUP: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceLineTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_TAX_GROUP: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_CHARGES: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_FEE: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoiceHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICE_HEADER_CHARGES: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_FEE: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxGroupData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP_DATA: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      TaxGroupDatasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteCurrentPostalAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendInvoiceJournalLinesApi<DeSerializersT>,
      LedgerJournalCdsLinesApi<DeSerializersT>,
      CdsFreeTextInvoiceLinesApi<DeSerializersT>,
      ProspectsApi<DeSerializersT>,
      PurchaseOrderLineChargesV2Api<DeSerializersT>,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>,
      CustomerPaymentJournalLinesApi<DeSerializersT>,
      VendorGroupsApi<DeSerializersT>,
      GroupRetailTaxFiltersApi<DeSerializersT>,
      LedgerJournalLinesApi<DeSerializersT>,
      FreeTextInvoiceLinesApi<DeSerializersT>,
      PurchaseOrderHeaderChargesApi<DeSerializersT>,
      VendorPaymentJournalFeesApi<DeSerializersT>,
      VendorInvoiceHeaderChargesApi<DeSerializersT>,
      CustomerPaymentJournalFeesApi<DeSerializersT>,
      TaxGroupDatasApi<DeSerializersT>,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VEND_INVOICE_JOURNAL_LINE_SALES_TAX_GROUP: new OneToManyLink(
        'VendInvoiceJournalLineSalesTaxGroup',
        this,
        linkedApis[0]
      ),
      LEDGER_JOURNAL_LINE_CDS_SALES_TAX_GROUP: new OneToManyLink(
        'LedgerJournalLineCDSSalesTaxGroup',
        this,
        linkedApis[1]
      ),
      CDS_FREE_TEXT_INVOICE_LINES: new OneToManyLink(
        'CDSFreeTextInvoiceLines',
        this,
        linkedApis[2]
      ),
      PROSPECTS: new OneToManyLink('Prospects', this, linkedApis[3]),
      PURCHASE_ORDER_LINE_CHARGES: new OneToManyLink(
        'PurchaseOrderLineCharges',
        this,
        linkedApis[4]
      ),
      LEDGER_JOURNAL_LINE_SALES_TAX_GROUP: new OneToManyLink(
        'LedgerJournalLineSalesTaxGroup',
        this,
        linkedApis[5]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_GROUP_ENTITY: new OneToManyLink(
        'CustomerPaymentJournalLineTaxGroupEntity',
        this,
        linkedApis[6]
      ),
      VENDOR_GROUPS: new OneToManyLink('VendorGroups', this, linkedApis[7]),
      GROUP_RETAIL_TAX_FILTER: new OneToManyLink(
        'GroupRetailTaxFilter',
        this,
        linkedApis[8]
      ),
      LEDGER_JOURNAL_LINE_ENTITY_SALES_TAX_GROUP: new OneToManyLink(
        'LedgerJournalLineEntitySalesTaxGroup',
        this,
        linkedApis[9]
      ),
      FREE_TEXT_INVOICE_LINE_TAX_GROUP: new OneToManyLink(
        'FreeTextInvoiceLineTaxGroup',
        this,
        linkedApis[10]
      ),
      PURCHASE_ORDER_HEADER_CHARGES: new OneToManyLink(
        'PurchaseOrderHeaderCharges',
        this,
        linkedApis[11]
      ),
      VENDOR_PAYMENT_JOURNAL_FEE: new OneToManyLink(
        'VendorPaymentJournalFee',
        this,
        linkedApis[12]
      ),
      INVOICE_HEADER_CHARGES: new OneToManyLink(
        'InvoiceHeaderCharges',
        this,
        linkedApis[13]
      ),
      CUSTOMER_PAYMENT_JOURNAL_FEE: new OneToManyLink(
        'CustomerPaymentJournalFee',
        this,
        linkedApis[14]
      ),
      TAX_GROUP_DATA: new OneToManyLink('TaxGroupData', this, linkedApis[15]),
      OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: new OneToManyLink(
        'OperationalSiteCurrentPostalAddresses',
        this,
        linkedApis[16]
      )
    };
    return this;
  }

  entityConstructor = TaxGroups;

  requestBuilder(): TaxGroupsRequestBuilder<DeSerializersT> {
    return new TaxGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_GROUP_CODE: OrderableEdmTypeField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CRITERIA_CITY_ID: OrderableEdmTypeField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CRITERIA_COUNTY_ID: OrderableEdmTypeField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_REVERSE_ON_CASH_DISCOUNT: EnumField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CRITERIA_COUNTRY_ID: OrderableEdmTypeField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATORY_SALES_DATE_W: EnumField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FILL_SALES_DATE_W: EnumField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      FillSalesDateW,
      true,
      true
    >;
    DEFAULT_CRITERIA_ZIP_CODE_ID: OrderableEdmTypeField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_TRADE_W: EnumField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_OF_VAT_REGISTER_FILLING: EnumField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      FillVatDueDateW,
      true,
      true
    >;
    INVOICE_PRINT_DETAILS: EnumField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      TaxPrintDetail,
      true,
      true
    >;
    ROUNDING_BY: EnumField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      TaxGroupRounding,
      true,
      true
    >;
    DEFAULT_CRITERIA_STATE_ID: OrderableEdmTypeField<
      TaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLineSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_SALES_TAX_GROUP: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineCdsSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_SALES_TAX_GROUP: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_LINES: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLineCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINE_CHARGES: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLineChargesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_SALES_TAX_GROUP: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineTaxGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_TAX_GROUP_ENTITY: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_GROUPS: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link groupRetailTaxFilter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GROUP_RETAIL_TAX_FILTER: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      GroupRetailTaxFiltersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineEntitySalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ENTITY_SALES_TAX_GROUP: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceLineTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_TAX_GROUP: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_CHARGES: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_FEE: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoiceHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICE_HEADER_CHARGES: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_FEE: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxGroupData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP_DATA: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      TaxGroupDatasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteCurrentPostalAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: OneToManyLink<
      TaxGroups<DeSerializersT>,
      DeSerializersT,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxGroups<DeSerializers>>;
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
         * Static representation of the {@link taxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TaxGroupCode',
          'Edm.String',
          false
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
         * Static representation of the {@link defaultCriteriaCityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CRITERIA_CITY_ID: fieldBuilder.buildEdmTypeField(
          'DefaultCriteriaCityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultCriteriaCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CRITERIA_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DefaultCriteriaCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxReverseOnCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REVERSE_ON_CASH_DISCOUNT: fieldBuilder.buildEnumField(
          'TaxReverseOnCashDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultCriteriaCountryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CRITERIA_COUNTRY_ID: fieldBuilder.buildEdmTypeField(
          'DefaultCriteriaCountryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mandatorySalesDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_SALES_DATE_W: fieldBuilder.buildEnumField(
          'MandatorySalesDate_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fillSalesDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILL_SALES_DATE_W: fieldBuilder.buildEnumField(
          'FillSalesDate_W',
          FillSalesDateW,
          true
        ),
        /**
         * Static representation of the {@link defaultCriteriaZipCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CRITERIA_ZIP_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultCriteriaZipCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euTradeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_TRADE_W: fieldBuilder.buildEnumField('EUTrade_W', NoYes, true),
        /**
         * Static representation of the {@link dateOfVatRegisterFilling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_VAT_REGISTER_FILLING: fieldBuilder.buildEnumField(
          'DateOfVATRegisterFilling',
          FillVatDueDateW,
          true
        ),
        /**
         * Static representation of the {@link invoicePrintDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PRINT_DETAILS: fieldBuilder.buildEnumField(
          'InvoicePrintDetails',
          TaxPrintDetail,
          true
        ),
        /**
         * Static representation of the {@link roundingBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_BY: fieldBuilder.buildEnumField(
          'RoundingBy',
          TaxGroupRounding,
          true
        ),
        /**
         * Static representation of the {@link defaultCriteriaStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CRITERIA_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultCriteriaStateId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxGroups)
      };
    }

    return this._schema;
  }
}
