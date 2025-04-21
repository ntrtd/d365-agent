/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorsV2 } from './VendorsV2';
import { VendorsV2RequestBuilder } from './VendorsV2RequestBuilder';
import { ItemCoverageSettingsApi } from './ItemCoverageSettingsApi';
import { TransportationAppointmentsApi } from './TransportationAppointmentsApi';
import { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { EmploymentContractorsApi } from './EmploymentContractorsApi';
import { PurchaseOrderResponseLinesApi } from './PurchaseOrderResponseLinesApi';
import { VendorDocumentAttachmentsApi } from './VendorDocumentAttachmentsApi';
import { FormulaLinesV2Api } from './FormulaLinesV2Api';
import { PurchaseAgreementConfirmationLinesApi } from './PurchaseAgreementConfirmationLinesApi';
import { PurchaseOrderConfirmationLinesApi } from './PurchaseOrderConfirmationLinesApi';
import { OpenPurchaseMultiLineDiscountJournalLinesApi } from './OpenPurchaseMultiLineDiscountJournalLinesApi';
import { PurchaseOrderResponseHeadersApi } from './PurchaseOrderResponseHeadersApi';
import { FixedAssetBooksV2Api } from './FixedAssetBooksV2Api';
import { VendorProductDescriptionsV2Api } from './VendorProductDescriptionsV2Api';
import { ItemArrivalJournalLinesV2Api } from './ItemArrivalJournalLinesV2Api';
import { FreightBillDetailsApi } from './FreightBillDetailsApi';
import { BillOfMaterialsLinesV2Api } from './BillOfMaterialsLinesV2Api';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { VendInvoicePriceTolerancesApi } from './VendInvoicePriceTolerancesApi';
import { PurchaseOrderConfirmationHeadersApi } from './PurchaseOrderConfirmationHeadersApi';
import { WarehousesApi } from './WarehousesApi';
import { OpenPurchasePriceJournalLinesApi } from './OpenPurchasePriceJournalLinesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { VendorRebateAndDeductionsGroupAssignmentsApi } from './VendorRebateAndDeductionsGroupAssignmentsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { TradeAllowanceAgreementMerchandisingEventLumpSumsApi } from './TradeAllowanceAgreementMerchandisingEventLumpSumsApi';
import { DvReleasedProductsApi } from './DvReleasedProductsApi';
import { VendorBankAccountsApi } from './VendorBankAccountsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProductApprovedVendorsApi } from './ProductApprovedVendorsApi';
import { ItemArrivalJournalHeadersV2Api } from './ItemArrivalJournalHeadersV2Api';
import { OpenPurchaseLineDiscountJournalLinesApi } from './OpenPurchaseLineDiscountJournalLinesApi';
import { OpenPurchasePriceJournalLinesV2Api } from './OpenPurchasePriceJournalLinesV2Api';
import { VendorProductDescriptionsApi } from './VendorProductDescriptionsApi';
import { BillOfMaterialsLinesV3Api } from './BillOfMaterialsLinesV3Api';
import { OpenPurchaseTotalDiscountJournalLinesApi } from './OpenPurchaseTotalDiscountJournalLinesApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { PurchaseOrderHeadersV2Api } from './PurchaseOrderHeadersV2Api';
import { PlannedOrdersApi } from './PlannedOrdersApi';
import { VendVendorCollaborationType } from './VendVendorCollaborationType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { NoYes } from './NoYes';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { TaxIdType } from './TaxIdType';
import { InvestorType } from './InvestorType';
import { TaxWithholdVendorTypeTh } from './TaxWithholdVendorTypeTh';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';
import { CustVendorBlocked } from './CustVendorBlocked';
import { RetailSalesPriceRoundingBase } from './RetailSalesPriceRoundingBase';
import { Timezone } from './Timezone';
import { MonthsOfYear } from './MonthsOfYear';
import { VendorTypeMx } from './VendorTypeMx';
import { VendCisStatus } from './VendCisStatus';
import { UseCashDisc } from './UseCashDisc';
import { Abc } from './Abc';
import { Gender } from './Gender';
import { Tax1099Type } from './Tax1099Type';
import { PanStatusIn } from './PanStatusIn';
import { VatPartnerKindRu } from './VatPartnerKindRu';
import { Tax1099NameChoice } from './Tax1099NameChoice';
import { CompanyTypeMx } from './CompanyTypeMx';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { RetailRoundingTypeBase } from './RetailRoundingTypeBase';
import { RetailVendTypeBase } from './RetailVendTypeBase';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
import { ItmVendType } from './ItmVendType';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorsV2<DeSerializersT>, DeSerializersT>
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
  ): VendorsV2Api<DeSerializersT> {
    return new VendorsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link itemCoverageSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_COVERAGE_SETTINGS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ItemCoverageSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transportationAppointments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_APPOINTMENTS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      TransportationAppointmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentContractor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_CONTRACTOR: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      EmploymentContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderResponseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_RESPONSE_LINES: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderResponseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorDocumentAttachmentEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_DOCUMENT_ATTACHMENT_ENTITY: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendorDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link formulaLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORMULA_LINES_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      FormulaLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_CONFIRMATION_LINES: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseMultiLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_MULTI_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseMultiLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderResponseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_RESPONSE_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderResponseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2VendorsAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_VENDORS_ASSET: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorProductDescriptionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PRODUCT_DESCRIPTIONS_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendorProductDescriptionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freightBillDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_BILL_DETAILS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      FreightBillDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoicePriceTolerance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_PRICE_TOLERANCE: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendInvoicePriceTolerancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_CONFIRMATION_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderConfirmationHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorRebateAndDeductionsGroupAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_REBATE_AND_DEDUCTIONS_GROUP_ASSIGNMENTS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendorRebateAndDeductionsGroupAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEventLumpSums} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS: OneToOneLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_BANK_ACCOUNTS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendorBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productApprovedVendors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_APPROVED_VENDORS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ProductApprovedVendorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorProductDescriptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PRODUCT_DESCRIPTIONS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendorProductDescriptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES_3: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseTotalDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_TOTAL_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseTotalDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemCoverageSettingsApi<DeSerializersT>,
      TransportationAppointmentsApi<DeSerializersT>,
      SupplyForecastEntriesApi<DeSerializersT>,
      EmploymentContractorsApi<DeSerializersT>,
      PurchaseOrderResponseLinesApi<DeSerializersT>,
      VendorDocumentAttachmentsApi<DeSerializersT>,
      FormulaLinesV2Api<DeSerializersT>,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>,
      PurchaseOrderConfirmationLinesApi<DeSerializersT>,
      OpenPurchaseMultiLineDiscountJournalLinesApi<DeSerializersT>,
      PurchaseOrderResponseHeadersApi<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      VendorProductDescriptionsV2Api<DeSerializersT>,
      ItemArrivalJournalLinesV2Api<DeSerializersT>,
      FreightBillDetailsApi<DeSerializersT>,
      BillOfMaterialsLinesV2Api<DeSerializersT>,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      VendInvoicePriceTolerancesApi<DeSerializersT>,
      PurchaseOrderConfirmationHeadersApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      OpenPurchasePriceJournalLinesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      VendorRebateAndDeductionsGroupAssignmentsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>,
      DvReleasedProductsApi<DeSerializersT>,
      VendorBankAccountsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ProductApprovedVendorsApi<DeSerializersT>,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>,
      OpenPurchasePriceJournalLinesV2Api<DeSerializersT>,
      VendorProductDescriptionsApi<DeSerializersT>,
      BillOfMaterialsLinesV3Api<DeSerializersT>,
      OpenPurchaseTotalDiscountJournalLinesApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>,
      PurchaseOrderHeadersV2Api<DeSerializersT>,
      PlannedOrdersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM_COVERAGE_SETTINGS: new OneToManyLink(
        'ItemCoverageSettings',
        this,
        linkedApis[0]
      ),
      TRANSPORTATION_APPOINTMENTS: new OneToManyLink(
        'TransportationAppointments',
        this,
        linkedApis[1]
      ),
      SUPPLY_FORECAST_ENTRIES: new OneToManyLink(
        'SupplyForecastEntries',
        this,
        linkedApis[2]
      ),
      EMPLOYMENT_CONTRACTOR: new OneToManyLink(
        'EmploymentContractor',
        this,
        linkedApis[3]
      ),
      PURCHASE_ORDER_RESPONSE_LINES: new OneToManyLink(
        'PurchaseOrderResponseLines',
        this,
        linkedApis[4]
      ),
      VENDOR_DOCUMENT_ATTACHMENT_ENTITY: new OneToManyLink(
        'VendorDocumentAttachmentEntity',
        this,
        linkedApis[5]
      ),
      FORMULA_LINES_V_2: new OneToManyLink(
        'FormulaLinesV2',
        this,
        linkedApis[6]
      ),
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[7]
      ),
      PURCHASE_AGREEMENT_CONFIRMATION_HEADERS: new OneToManyLink(
        'PurchaseAgreementConfirmationHeaders',
        this,
        linkedApis[8]
      ),
      PURCHASE_ORDER_CONFIRMATION_LINES: new OneToManyLink(
        'PurchaseOrderConfirmationLines',
        this,
        linkedApis[9]
      ),
      OPEN_PURCHASE_MULTI_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchaseMultiLineDiscountJournalLine',
        this,
        linkedApis[10]
      ),
      PURCHASE_ORDER_RESPONSE_HEADERS: new OneToManyLink(
        'PurchaseOrderResponseHeaders',
        this,
        linkedApis[11]
      ),
      ASSET_BOOK_V_2_VENDORS_ASSET: new OneToManyLink(
        'AssetBookV2VendorsAsset',
        this,
        linkedApis[12]
      ),
      VENDOR_PRODUCT_DESCRIPTIONS_V_2: new OneToManyLink(
        'VendorProductDescriptionsV2',
        this,
        linkedApis[13]
      ),
      ITEM_ARRIVAL_JOURNAL_LINES_V_2: new OneToManyLink(
        'ItemArrivalJournalLinesV2',
        this,
        linkedApis[14]
      ),
      FREIGHT_BILL_DETAILS: new OneToManyLink(
        'FreightBillDetails',
        this,
        linkedApis[15]
      ),
      BILL_OF_MATERIALS_LINES: new OneToManyLink(
        'BillOfMaterialsLines',
        this,
        linkedApis[16]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[17]
      ),
      VEND_INVOICE_PRICE_TOLERANCE: new OneToManyLink(
        'VendInvoicePriceTolerance',
        this,
        linkedApis[18]
      ),
      PURCHASE_ORDER_CONFIRMATION_HEADERS: new OneToManyLink(
        'PurchaseOrderConfirmationHeaders',
        this,
        linkedApis[19]
      ),
      WAREHOUSES: new OneToManyLink('Warehouses', this, linkedApis[20]),
      OPEN_PURCHASE_PRICE_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchasePriceJournalLine',
        this,
        linkedApis[21]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[22]
      ),
      VENDOR_REBATE_AND_DEDUCTIONS_GROUP_ASSIGNMENTS: new OneToManyLink(
        'VendorRebateAndDeductionsGroupAssignments',
        this,
        linkedApis[23]
      ),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[24]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS: new OneToOneLink(
        'TradeAllowanceAgreementMerchandisingEventLumpSums',
        this,
        linkedApis[25]
      ),
      DV_RELEASED_PRODUCTS: new OneToManyLink(
        'DVReleasedProducts',
        this,
        linkedApis[26]
      ),
      VENDOR_BANK_ACCOUNTS: new OneToManyLink(
        'VendorBankAccounts',
        this,
        linkedApis[27]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[28]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[29]),
      PRODUCT_APPROVED_VENDORS: new OneToManyLink(
        'ProductApprovedVendors',
        this,
        linkedApis[30]
      ),
      ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: new OneToManyLink(
        'ItemArrivalJournalHeadersV2',
        this,
        linkedApis[31]
      ),
      OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchaseLineDiscountJournalLine',
        this,
        linkedApis[32]
      ),
      OPEN_PURCHASE_PRICE_JOURNAL_LINE_V_2: new OneToManyLink(
        'OpenPurchasePriceJournalLineV2',
        this,
        linkedApis[33]
      ),
      VENDOR_PRODUCT_DESCRIPTIONS: new OneToManyLink(
        'VendorProductDescriptions',
        this,
        linkedApis[34]
      ),
      BILL_OF_MATERIALS_LINES_3: new OneToManyLink(
        'BillOfMaterialsLines3',
        this,
        linkedApis[35]
      ),
      OPEN_PURCHASE_TOTAL_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchaseTotalDiscountJournalLine',
        this,
        linkedApis[36]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[37]
      ),
      PURCHASE_ORDER_HEADER_V_2: new OneToManyLink(
        'PurchaseOrderHeaderV2',
        this,
        linkedApis[38]
      ),
      PLANNED_ORDERS: new OneToManyLink('PlannedOrders', this, linkedApis[39])
    };
    return this;
  }

  entityConstructor = VendorsV2;

  requestBuilder(): VendorsV2RequestBuilder<DeSerializersT> {
    return new VendorsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorsV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VendorsV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VendorsV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VendorsV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_BRAZILIAN_CNPJ_OR_CPF: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PORTAL_COLLABORATION_METHOD: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      VendVendorCollaborationType,
      true,
      true
    >;
    BARCODE_NUMBER_SEQUENCE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PRICE_TOLERANCE_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIZE_ID_PREFIX: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STYLE_ID_PREFIX: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_OFFSET_ACCOUNT_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    BIRTH_COUNTY_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_PURPOSE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_SEGMENT_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SSI_VALIDITY_DATE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_PARTY_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DELIVERY_MODE_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNS_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_INVOICE_DECLARATION_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OWNER_DISABLED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_DUNS_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_VENDOR_LOCALLY_OWNED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_POST_BOX: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_TITLE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_YEAR: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_SERVICE_DELIVERY_ADDRESS_BASED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_OPERATION_PRESENCE_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      EfDocPresenceTypeBr,
      true,
      true
    >;
    ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TRANSACTION_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PRODUCT_HIERARCHY_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ZAKAT_SERVICE_TYPE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_RECORD_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFAULT_OFFSET_LEDGER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_PHONE_NUMBER_MOBILE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TCS_GROUP: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OF_BUSINESS_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GTA_VENDOR: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORGANIZATION_PHONETIC_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ORGANIZATION_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TWITTER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_GST_COMPOSITION_SCHEME_ENABLED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_1099_ID_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      TaxIdType,
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ETHNIC_ORIGIN_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_PLACE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PURCHASE_CONSUMED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_INITIALS: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_CONSOLIDATION_DAY_OF_MONTH: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL_PURPOSE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OID_INVESTOR_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      InvestorType,
      true,
      true
    >;
    FOREIGNER_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_SUPPLEMENTARY_PRODUCT_VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CHANGE_MANAGEMENT_ACTIVATED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_SEARCH_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CHAIN_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_PURPOSE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_VENDOR_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      TaxWithholdVendorTypeTh,
      true,
      true
    >;
    CIS_UNIQUE_TAX_PAYER_REFERENCE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PURCHASE_SITE_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_MARITAL_STATUS: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      DirPersonMaritalStatus,
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_FINANCIAL_INTEREST_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SSI_VENDOR: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_INVOICE_LINE_MATCHING_POLICY: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyWithNotSetOption,
      true,
      true
    >;
    BANK_ORDER_OF_PAYMENT: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_COMPANY_REGISTRATION_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_INCOME_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CHANGE_MANGEMENT_OVERRIDE_BY_VENDOR_ALLOWED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_PAYMENT_DAY_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_CHILDREN_NAMES: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_RESIDENT: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIOT_COUNTRY_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HOLD_STATUS: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      CustVendorBlocked,
      true,
      true
    >;
    IS_ONE_TIME_VENDOR: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMERCIAL_REGISTER_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_EMPLOYEE_AMOUNT: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_TELEX_DESCRIPTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_WORK_CALENDAR_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_METHOD: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_NIT: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_RECEIPTS_LIST_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_PRICES_INCLUDING_SALES_TAX: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ZAKAT_REGISTRATION_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_BOX_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_EXTENSION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_YEAR: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_ROUNDING: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      RetailSalesPriceRoundingBase,
      true,
      true
    >;
    WILL_INVOICE_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REPORTING_TAX_1099: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RFC_FEDERAL_TAX_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    NATIONALITY: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMERCIAL_REGISTER_SECTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_RECORD_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAN_REFERENCE_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_OPERATION_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_PROFILE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_CNPJ_OR_CPF: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_DOING_BUSINESS_AS_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SERVICE_VETERAN_OWNED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_FIRST_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_CCM: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TDS_GROUP: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL_DESCRIPTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZAKAT_FILE_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NATIONAL_REGISTRY_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_DAY: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_WITHHOLDING_TAX_CALCULATED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_VENDOR_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PERSON_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_RECORD_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPOSITION_SCHEME: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_BIRTH_MONTH: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    ADDRESS_BOOKS: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIQUE_POPULATION_REGISTRY_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MINORITY_OWNED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTILINE_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_EXTENSION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OID_NOMINEE_DETAILS: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIOT_VENDOR_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      VendorTypeMx,
      true,
      true
    >;
    PRIMARY_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACTORING_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_VERIFICATION_DATE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSIP_IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STRUCTURE_DEPARTMENT: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEARING_PERIOD_PAYMENT_TERMS_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_DAY: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SERVICE_CATEGORY: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUYER_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_IE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_RECORD_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FOREIGN_VENDOR_TAX_REGISTRATION_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BRAZILIAN_IE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_MONTH: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    PRIMARY_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_POINT_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_STATUS: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      VendCisStatus,
      true,
      true
    >;
    PRODUCT_DESCRIPTION_VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_PURCHASE_ORDER_INCLUDE_PRICES_AND_AMOUNTS: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CASH_DISCOUNT_USAGE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      UseCashDisc,
      true,
      true
    >;
    BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AGENT: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATE_INSCRIPTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_LAST_NAME_PREFIX: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONAL_REGISTRY_NUMBER_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_ABC_CODE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    BRAZILIAN_CNAE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAF_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_REBATE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIRET_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_EXCEPTION_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_PURCHASE_ORDER_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_W_9_CHECKING_ENABLED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_RATING: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_FINE_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_W_9_RECEIVED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_VENDOR_PAYING_BANK_PAYMENT_FEE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_FACEBOOK: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INCOMING_FISCAL_DOCUMENT_GENERATED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_HOLD_RELEASE_DATE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_TWITTER_PURPOSE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_FEDERAL_TAX_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_EMAIL_ADDRESS_PURPOSE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_FEE_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GENDER: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      Gender,
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PURCHASE_ORDER_CHANGE_REQUEST_OVERRIDE_ALLOWED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_NATIONAL_INSURANCE_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PROCUMENT_WAREHOUSE_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_PRIMARY_ADDRESS: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR_ID_PREFIX: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSIP_DETAILS: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_RECORD_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ICMS_CONTRIBUTOR: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_PERSONAL_SUFFIX: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_FOREIGN_ENTITY: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_1099_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      Tax1099Type,
      true,
      true
    >;
    PAN_STATUS: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      PanStatusIn,
      true,
      true
    >;
    SEPARATE_DIVISION_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_CONTROL: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PARTNER_KIND: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      VatPartnerKindRu,
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_SUBSEGMENT_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SMALL_BUSINESS: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_KNOWN_AS_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_LAST_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_EXCHANGE_RATE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CUSIP_IDENTIFICATION_NUMBER_APPLICABLE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESIDENCE_FOREIGN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX_PURPOSE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_HOBBIES: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_NAME_TO_USE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      Tax1099NameChoice,
      true,
      true
    >;
    MAIN_CONTACT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      CompanyTypeMx,
      true,
      true
    >;
    COMMERCIAL_REGISTER_INSET_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PERSONAL_TITLE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PARTY_TYPE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIOT_OPERATION_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    CREATE_BARCODE_IF_NEEDED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_POINT_ROUNDING_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      RetailRoundingTypeBase,
      true,
      true
    >;
    IS_PRIMARY_EMAIL_ADDRESS_IM_ENABLED: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_VENDOR_LOCATED_IN_HUB_ZONE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FLAGGED_WITH_SECOND_TIN: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SPECIFICATION_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_VENDOR: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_SHIP_CALENDAR_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      RetailVendTypeBase,
      true,
      true
    >;
    PERSON_PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WOMAN_OWNER: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HAS_ONLY_TAKEN_BIDS: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_PURCHASE_ORDER_POOL_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERENTIAL_VENDOR: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_TOTAL_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BRAZILIAN_INSSCEI: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_VERIFICATION_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_PROFILE_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    NATURE_OF_ASSESSEE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NatureOfAssesseeIn,
      true,
      true
    >;
    UPS_FREIGHT_ZONE: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_MIDDLE_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_PRODUCT_RECEIPT_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_PHONETIC_LAST_NAME: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUBCONTRACTOR: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TAXATION_OVER_PAYROLL_BR: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PUBLIC_SECTOR_IT: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_AGENT_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_OVER_UNDERDELIVERY_TOLERANCE_GROUP_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TRANSPORTATION_SERVICES_PROVIDER: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_VENDOR_TYPE: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      ItmVendType,
      true,
      true
    >;
    VENDOR_COST_TYPE_GROUP: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FROM_SHIPPING_PORT_ID: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_IMPORT_COSTING_VENDOR: EnumField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemCoverageSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_COVERAGE_SETTINGS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ItemCoverageSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transportationAppointments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_APPOINTMENTS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      TransportationAppointmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentContractor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_CONTRACTOR: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      EmploymentContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderResponseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_RESPONSE_LINES: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderResponseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorDocumentAttachmentEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_DOCUMENT_ATTACHMENT_ENTITY: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendorDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link formulaLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORMULA_LINES_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      FormulaLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_CONFIRMATION_LINES: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseMultiLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_MULTI_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseMultiLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderResponseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_RESPONSE_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderResponseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2VendorsAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_VENDORS_ASSET: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorProductDescriptionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PRODUCT_DESCRIPTIONS_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendorProductDescriptionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freightBillDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_BILL_DETAILS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      FreightBillDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoicePriceTolerance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_PRICE_TOLERANCE: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendInvoicePriceTolerancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_CONFIRMATION_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderConfirmationHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorRebateAndDeductionsGroupAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_REBATE_AND_DEDUCTIONS_GROUP_ASSIGNMENTS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendorRebateAndDeductionsGroupAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEventLumpSums} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS: OneToOneLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_BANK_ACCOUNTS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendorBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productApprovedVendors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_APPROVED_VENDORS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ProductApprovedVendorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorProductDescriptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PRODUCT_DESCRIPTIONS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      VendorProductDescriptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES_3: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseTotalDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_TOTAL_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseTotalDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_V_2: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      VendorsV2<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorsV2<DeSerializers>>;
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
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressBrazilianCnpjOrCpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BRAZILIAN_CNPJ_OR_CPF: fieldBuilder.buildEdmTypeField(
          'AddressBrazilianCNPJOrCPF',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPortalCollaborationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PORTAL_COLLABORATION_METHOD: fieldBuilder.buildEnumField(
          'VendorPortalCollaborationMethod',
          VendVendorCollaborationType,
          true
        ),
        /**
         * Static representation of the {@link barcodeNumberSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_NUMBER_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'BarcodeNumberSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPriceToleranceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PRICE_TOLERANCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorPriceToleranceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sizeIdPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_ID_PREFIX: fieldBuilder.buildEdmTypeField(
          'SizeIdPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link styleIdPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE_ID_PREFIX: fieldBuilder.buildEdmTypeField(
          'StyleIdPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultOffsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'DefaultOffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link birthCountyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_COUNTY_CODE: fieldBuilder.buildEdmTypeField(
          'BirthCountyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessSegmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_SEGMENT_CODE: fieldBuilder.buildEdmTypeField(
          'BusinessSegmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ssiValidityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SSI_VALIDITY_DATE: fieldBuilder.buildEdmTypeField(
          'SSIValidityDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendorPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDeliveryModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DELIVERY_MODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultDeliveryModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DUNSNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorInvoiceDeclarationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE_DECLARATION_ID: fieldBuilder.buildEdmTypeField(
          'VendorInvoiceDeclarationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOwnerDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OWNER_DISABLED: fieldBuilder.buildEnumField(
          'IsOwnerDisabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorDUNSNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isVendorLocallyOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VENDOR_LOCALLY_OWNED: fieldBuilder.buildEnumField(
          'IsVendorLocallyOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'AddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personProfessionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personBirthYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_YEAR: fieldBuilder.buildEdmTypeField(
          'PersonBirthYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isServiceDeliveryAddressBased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_DELIVERY_ADDRESS_BASED: fieldBuilder.buildEnumField(
          'IsServiceDeliveryAddressBased',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalOperationPresenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_OPERATION_PRESENCE_TYPE: fieldBuilder.buildEnumField(
          'FiscalOperationPresenceType',
          EfDocPresenceTypeBr,
          true
        ),
        /**
         * Static representation of the {@link addressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'AddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentTransactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentTransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorProductHierarchyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PRODUCT_HIERARCHY_ID: fieldBuilder.buildEdmTypeField(
          'VendorProductHierarchyId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link zakatServiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_SERVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'ZakatServiceType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link defaultOffsetLedgerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OFFSET_LEDGER_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultOffsetLedgerAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isPrimaryPhoneNumberMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_PHONE_NUMBER_MOBILE: fieldBuilder.buildEnumField(
          'IsPrimaryPhoneNumberMobile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tcsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_GROUP: fieldBuilder.buildEdmTypeField(
          'TCSGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineOfBusinessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_OF_BUSINESS_ID: fieldBuilder.buildEdmTypeField(
          'LineOfBusinessId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gtaVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GTA_VENDOR: fieldBuilder.buildEnumField('GTAVendor', NoYes, true),
        /**
         * Static representation of the {@link organizationPhoneticName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_PHONETIC_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationPhoneticName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorOrganizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'VendorOrganizationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isGstCompositionSchemeEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_GST_COMPOSITION_SCHEME_ENABLED: fieldBuilder.buildEnumField(
          'IsGSTCompositionSchemeEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tax1099IdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_ID_TYPE: fieldBuilder.buildEnumField(
          'Tax1099IdType',
          TaxIdType,
          true
        ),
        /**
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ethnicOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNIC_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'EthnicOriginId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthPlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_PLACE: fieldBuilder.buildEdmTypeField(
          'BirthPlace',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPurchaseConsumed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_CONSUMED: fieldBuilder.buildEnumField(
          'IsPurchaseConsumed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personInitials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_INITIALS: fieldBuilder.buildEdmTypeField(
          'PersonInitials',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderConsolidationDayOfMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_CONSOLIDATION_DAY_OF_MONTH:
          fieldBuilder.buildEdmTypeField(
            'PurchaseOrderConsolidationDayOfMonth',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link centralBankPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryUrlPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryURLPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oidInvestorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OID_INVESTOR_TYPE: fieldBuilder.buildEnumField(
          'OIDInvestorType',
          InvestorType,
          true
        ),
        /**
         * Static representation of the {@link foreignerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGNER_ID: fieldBuilder.buildEdmTypeField(
          'ForeignerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultSupplementaryProductVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SUPPLEMENTARY_PRODUCT_VENDOR_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'DefaultSupplementaryProductVendorGroupId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isChangeManagementActivated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CHANGE_MANAGEMENT_ACTIVATED: fieldBuilder.buildEnumField(
          'IsChangeManagementActivated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'VendorSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyChainName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CHAIN_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyChainName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumberPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxVendorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_VENDOR_TYPE: fieldBuilder.buildEnumField(
          'WithholdingTaxVendorType',
          TaxWithholdVendorTypeTh,
          true
        ),
        /**
         * Static representation of the {@link cisUniqueTaxPayerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_UNIQUE_TAX_PAYER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CISUniqueTaxPayerReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPurchaseSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PURCHASE_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultPurchaseSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personMaritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_MARITAL_STATUS: fieldBuilder.buildEnumField(
          'PersonMaritalStatus',
          DirPersonMaritalStatus,
          true
        ),
        /**
         * Static representation of the {@link addressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPaymentFinancialInterestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_FINANCIAL_INTEREST_CODE: fieldBuilder.buildEdmTypeField(
          'VendorPaymentFinancialInterestCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ssiVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SSI_VENDOR: fieldBuilder.buildEnumField('SSIVendor', NoYes, true),
        /**
         * Static representation of the {@link vendorInvoiceLineMatchingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE_LINE_MATCHING_POLICY: fieldBuilder.buildEnumField(
          'VendorInvoiceLineMatchingPolicy',
          PurchMatchingPolicyWithNotSetOption,
          true
        ),
        /**
         * Static representation of the {@link bankOrderOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ORDER_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'BankOrderOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cisCompanyRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_COMPANY_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CISCompanyRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentIncomeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_INCOME_CODE: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentIncomeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isChangeMangementOverrideByVendorAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CHANGE_MANGEMENT_OVERRIDE_BY_VENDOR_ALLOWED:
          fieldBuilder.buildEnumField(
            'IsChangeMangementOverrideByVendorAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultPaymentDayName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_DAY_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentDayName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personChildrenNames} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_CHILDREN_NAMES: fieldBuilder.buildEdmTypeField(
          'PersonChildrenNames',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignResident} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_RESIDENT: fieldBuilder.buildEnumField(
          'ForeignResident',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link diotCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIOT_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'DIOTCountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personProfessionalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onHoldStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HOLD_STATUS: fieldBuilder.buildEnumField(
          'OnHoldStatus',
          CustVendorBlocked,
          true
        ),
        /**
         * Static representation of the {@link isOneTimeVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_VENDOR: fieldBuilder.buildEnumField(
          'IsOneTimeVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link commercialRegisterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_REGISTER_NAME: fieldBuilder.buildEdmTypeField(
          'CommercialRegisterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationEmployeeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_EMPLOYEE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrganizationEmployeeAmount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link primaryTelexDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryTelexDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseWorkCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_WORK_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseWorkCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryLinkedInPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedInPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_CODE: fieldBuilder.buildEdmTypeField(
          'DestinationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD: fieldBuilder.buildEdmTypeField(
          'RoundingMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianNit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_NIT: fieldBuilder.buildEdmTypeField(
          'BrazilianNIT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willReceiptsListProcessingSummaryUpdatePurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_RECEIPTS_LIST_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER:
          fieldBuilder.buildEnumField(
            'WillReceiptsListProcessingSummaryUpdatePurchaseOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link arePricesIncludingSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PRICES_INCLUDING_SALES_TAX: fieldBuilder.buildEnumField(
          'ArePricesIncludingSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link zakatRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ZakatRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099BoxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_BOX_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099BoxId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personAnniversaryYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_YEAR: fieldBuilder.buildEdmTypeField(
          'PersonAnniversaryYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link primaryLinkedInDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedInDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPriceRounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_ROUNDING: fieldBuilder.buildEnumField(
          'SalesPriceRounding',
          RetailSalesPriceRoundingBase,
          true
        ),
        /**
         * Static representation of the {@link willInvoiceProcessingSummaryUpdatePurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INVOICE_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER:
          fieldBuilder.buildEnumField(
            'WillInvoiceProcessingSummaryUpdatePurchaseOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReportingTax1099} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REPORTING_TAX_1099: fieldBuilder.buildEnumField(
          'IsReportingTax1099',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rfcFederalTaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC_FEDERAL_TAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFCFederalTaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'AddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link nationality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALITY: fieldBuilder.buildEdmTypeField(
          'Nationality',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commercialRegisterSection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_REGISTER_SECTION: fieldBuilder.buildEdmTypeField(
          'CommercialRegisterSection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link panReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PANReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxOperationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OPERATION_CODE: fieldBuilder.buildEdmTypeField(
          'TaxOperationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PROFILE: fieldBuilder.buildEdmTypeField(
          'InventoryProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianCnpjOrCpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_CNPJ_OR_CPF: fieldBuilder.buildEdmTypeField(
          'BrazilianCNPJOrCPF',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link panNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_NUMBER: fieldBuilder.buildEdmTypeField(
          'PANNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099DoingBusinessAsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_DOING_BUSINESS_AS_NAME: fieldBuilder.buildEdmTypeField(
          'Tax1099DoingBusinessAsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isServiceVeteranOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_VETERAN_OWNED: fieldBuilder.buildEnumField(
          'IsServiceVeteranOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianCcm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_CCM: fieldBuilder.buildEdmTypeField(
          'BrazilianCCM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tdsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_GROUP: fieldBuilder.buildEdmTypeField(
          'TDSGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryURLDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zakatFileNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_FILE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ZakatFileNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isNationalRegistryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NATIONAL_REGISTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ISNationalRegistryNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personAnniversaryDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_DAY: fieldBuilder.buildEdmTypeField(
          'PersonAnniversaryDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isWithholdingTaxCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WITHHOLDING_TAX_CALCULATED: fieldBuilder.buildEnumField(
          'IsWithholdingTaxCalculated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultVendorPaymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VENDOR_PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultVendorPaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'AddressRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link compositionScheme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPOSITION_SCHEME: fieldBuilder.buildEnumField(
          'CompositionScheme',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personBirthMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_MONTH: fieldBuilder.buildEnumField(
          'PersonBirthMonth',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link addressBooks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOKS: fieldBuilder.buildEdmTypeField(
          'AddressBooks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uniquePopulationRegistryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_POPULATION_REGISTRY_CODE: fieldBuilder.buildEdmTypeField(
          'UniquePopulationRegistryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isMinorityOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MINORITY_OWNED: fieldBuilder.buildEnumField(
          'IsMinorityOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link multilineDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oidNomineeDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OID_NOMINEE_DETAILS: fieldBuilder.buildEdmTypeField(
          'OIDNomineeDetails',
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
         * Static representation of the {@link diotVendorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIOT_VENDOR_TYPE: fieldBuilder.buildEnumField(
          'DIOTVendorType',
          VendorTypeMx,
          true
        ),
        /**
         * Static representation of the {@link primaryTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitterDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link factoringVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTORING_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'FactoringVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cisVerificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_VERIFICATION_DATE: fieldBuilder.buildEdmTypeField(
          'CISVerificationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cusipIdentificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSIP_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CUSIPIdentificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link structureDepartment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRUCTURE_DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'StructureDepartment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clearingPeriodPaymentTermsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_PERIOD_PAYMENT_TERMS_ID: fieldBuilder.buildEdmTypeField(
          'ClearingPeriodPaymentTermsId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personBirthDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_DAY: fieldBuilder.buildEdmTypeField(
          'PersonBirthDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link serviceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ServiceCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link buyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BuyerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CODE: fieldBuilder.buildEdmTypeField(
          'FiscalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianIe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_IE: fieldBuilder.buildEdmTypeField(
          'BrazilianIE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link foreignVendorTaxRegistrationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_VENDOR_TAX_REGISTRATION_ID: fieldBuilder.buildEdmTypeField(
          'ForeignVendorTaxRegistrationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressBrazilianIe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BRAZILIAN_IE: fieldBuilder.buildEdmTypeField(
          'AddressBrazilianIE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personAnniversaryMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_MONTH: fieldBuilder.buildEnumField(
          'PersonAnniversaryMonth',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link primaryFacebookDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebookDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pricePointGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_POINT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PricePointGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ID: fieldBuilder.buildEdmTypeField(
          'PaymentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cisStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_STATUS: fieldBuilder.buildEnumField(
          'CISStatus',
          VendCisStatus,
          true
        ),
        /**
         * Static representation of the {@link productDescriptionVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductDescriptionVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willPurchaseOrderIncludePricesAndAmounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PURCHASE_ORDER_INCLUDE_PRICES_AND_AMOUNTS:
          fieldBuilder.buildEnumField(
            'WillPurchaseOrderIncludePricesAndAmounts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultCashDiscountUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CASH_DISCOUNT_USAGE: fieldBuilder.buildEnumField(
          'DefaultCashDiscountUsage',
          UseCashDisc,
          true
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
         * Static representation of the {@link taxAgent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AGENT: fieldBuilder.buildEnumField('TaxAgent', NoYes, true),
        /**
         * Static representation of the {@link stateInscription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_INSCRIPTION: fieldBuilder.buildEdmTypeField(
          'StateInscription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personLastNamePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'PersonLastNamePrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentScheduleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_SCHEDULE_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentScheduleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personPhoneticMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nationalRegistryNumberId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONAL_REGISTRY_NUMBER_ID: fieldBuilder.buildEdmTypeField(
          'NationalRegistryNumberId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFacebookPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebookPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'LineDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_ABC_CODE: fieldBuilder.buildEnumField(
          'OrganizationABCCode',
          Abc,
          true
        ),
        /**
         * Static representation of the {@link brazilianCnae} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_CNAE: fieldBuilder.buildEdmTypeField(
          'BrazilianCNAE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nafCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAF_CODE: fieldBuilder.buildEdmTypeField('NAFCode', 'Edm.String', true),
        /**
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'AddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryLinkedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedIn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseRebateVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REBATE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseRebateVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link siretNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIRET_NUMBER: fieldBuilder.buildEdmTypeField(
          'SiretNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorExceptionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_EXCEPTION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorExceptionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willPurchaseOrderProcessingSummaryUpdatePurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PURCHASE_ORDER_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER:
          fieldBuilder.buildEnumField(
            'WillPurchaseOrderProcessingSummaryUpdatePurchaseOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isW9CheckingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_W_9_CHECKING_ENABLED: fieldBuilder.buildEnumField(
          'IsW9CheckingEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditRating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_RATING: fieldBuilder.buildEdmTypeField(
          'CreditRating',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPaymentFineCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_FINE_CODE: fieldBuilder.buildEdmTypeField(
          'VendorPaymentFineCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isW9Received} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_W_9_RECEIVED: fieldBuilder.buildEnumField(
          'IsW9Received',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link chargeVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargeVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isVendorPayingBankPaymentFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VENDOR_PAYING_BANK_PAYMENT_FEE: fieldBuilder.buildEnumField(
          'IsVendorPayingBankPaymentFee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebook',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isIncomingFiscalDocumentGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INCOMING_FISCAL_DOCUMENT_GENERATED: fieldBuilder.buildEnumField(
          'IsIncomingFiscalDocumentGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link ourAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OurAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorHoldReleaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_HOLD_RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'VendorHoldReleaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link primaryTwitterPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitterPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099FederalTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_FEDERAL_TAX_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099FederalTaxId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link primaryEmailAddressPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddressPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentFeeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FEE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PaymentFeeGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'AddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personGender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_GENDER: fieldBuilder.buildEnumField(
          'PersonGender',
          Gender,
          true
        ),
        /**
         * Static representation of the {@link primaryEmailAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPurchaseOrderChangeRequestOverrideAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_ORDER_CHANGE_REQUEST_OVERRIDE_ALLOWED:
          fieldBuilder.buildEnumField(
            'IsPurchaseOrderChangeRequestOverrideAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultDeliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultDeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX: fieldBuilder.buildEdmTypeField(
          'PrimaryTelex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PriceVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cisNationalInsuranceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_NATIONAL_INSURANCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CISNationalInsuranceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProcumentWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PROCUMENT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProcumentWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentTermsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link colorIdPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR_ID_PREFIX: fieldBuilder.buildEdmTypeField(
          'ColorIdPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cusipDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSIP_DETAILS: fieldBuilder.buildEdmTypeField(
          'CUSIPDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link enterpriseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTERPRISE_NUMBER: fieldBuilder.buildEdmTypeField(
          'EnterpriseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isIcmsContributor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ICMS_CONTRIBUTOR: fieldBuilder.buildEnumField(
          'IsICMSContributor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personPersonalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PERSONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonPersonalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT: fieldBuilder.buildEdmTypeField(
          'CreditLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isForeignEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FOREIGN_ENTITY: fieldBuilder.buildEnumField(
          'IsForeignEntity',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tax1099Type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_TYPE: fieldBuilder.buildEnumField(
          'Tax1099Type',
          Tax1099Type,
          true
        ),
        /**
         * Static representation of the {@link panStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_STATUS: fieldBuilder.buildEnumField('PANStatus', PanStatusIn, true),
        /**
         * Static representation of the {@link separateDivisionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATE_DIVISION_ID: fieldBuilder.buildEdmTypeField(
          'SeparateDivisionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_CONTROL: fieldBuilder.buildEdmTypeField(
          'NameControl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxPartnerKind} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PARTNER_KIND: fieldBuilder.buildEnumField(
          'TaxPartnerKind',
          VatPartnerKindRu,
          true
        ),
        /**
         * Static representation of the {@link centralBankPurposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessSubsegmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_SUBSEGMENT_CODE: fieldBuilder.buildEdmTypeField(
          'BusinessSubsegmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSmallBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SMALL_BUSINESS: fieldBuilder.buildEnumField(
          'IsSmallBusiness',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorKnownAsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_KNOWN_AS_NAME: fieldBuilder.buildEdmTypeField(
          'VendorKnownAsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'AddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCHANGE_RATE: fieldBuilder.buildEnumField(
          'FixedExchangeRate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCusipIdentificationNumberApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CUSIP_IDENTIFICATION_NUMBER_APPLICABLE: fieldBuilder.buildEnumField(
          'IsCUSIPIdentificationNumberApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'BankAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link residenceForeignCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESIDENCE_FOREIGN_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ResidenceForeignCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTelexPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryTelexPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personHobbies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_HOBBIES: fieldBuilder.buildEdmTypeField(
          'PersonHobbies',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099NameToUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_NAME_TO_USE: fieldBuilder.buildEnumField(
          'Tax1099NameToUse',
          Tax1099NameChoice,
          true
        ),
        /**
         * Static representation of the {@link mainContactPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_CONTACT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'MainContactPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link companyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TYPE: fieldBuilder.buildEnumField(
          'CompanyType',
          CompanyTypeMx,
          true
        ),
        /**
         * Static representation of the {@link commercialRegisterInsetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_REGISTER_INSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'CommercialRegisterInsetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personPersonalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PERSONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonPersonalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPartyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'VendorPartyType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link diotOperationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIOT_OPERATION_TYPE: fieldBuilder.buildEnumField(
          'DIOTOperationType',
          VendorOperationTypeMx,
          true
        ),
        /**
         * Static representation of the {@link createBarcodeIfNeeded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_BARCODE_IF_NEEDED: fieldBuilder.buildEnumField(
          'CreateBarcodeIfNeeded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link pricePointRoundingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_POINT_ROUNDING_TYPE: fieldBuilder.buildEnumField(
          'PricePointRoundingType',
          RetailRoundingTypeBase,
          true
        ),
        /**
         * Static representation of the {@link isPrimaryEmailAddressImEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_EMAIL_ADDRESS_IM_ENABLED: fieldBuilder.buildEnumField(
          'IsPrimaryEmailAddressIMEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isVendorLocatedInHubZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VENDOR_LOCATED_IN_HUB_ZONE: fieldBuilder.buildEnumField(
          'IsVendorLocatedInHUBZone',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isFlaggedWithSecondTin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FLAGGED_WITH_SECOND_TIN: fieldBuilder.buildEnumField(
          'IsFlaggedWithSecondTIN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSpecificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'PaymentSpecificationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_VENDOR: fieldBuilder.buildEnumField(
          'ForeignVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseShipCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_SHIP_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseShipCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_TYPE: fieldBuilder.buildEnumField(
          'VendorType',
          RetailVendTypeBase,
          true
        ),
        /**
         * Static representation of the {@link personPhoneticFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWomanOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WOMAN_OWNER: fieldBuilder.buildEnumField(
          'IsWomanOwner',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hasOnlyTakenBids} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_ONLY_TAKEN_BIDS: fieldBuilder.buildEnumField(
          'HasOnlyTakenBids',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultPurchaseOrderPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PURCHASE_ORDER_POOL_ID: fieldBuilder.buildEdmTypeField(
          'DefaultPurchaseOrderPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preferentialVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERENTIAL_VENDOR: fieldBuilder.buildEnumField(
          'PreferentialVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultTotalDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TOTAL_DISCOUNT_VENDOR_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'DefaultTotalDiscountVendorGroupCode',
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
         * Static representation of the {@link brazilianInsscei} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_INSSCEI: fieldBuilder.buildEdmTypeField(
          'BrazilianINSSCEI',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cisVerificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_VERIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CISVerificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryProfileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PROFILE_TYPE: fieldBuilder.buildEnumField(
          'InventoryProfileType',
          InventProfileTypeRu,
          true
        ),
        /**
         * Static representation of the {@link natureOfAssessee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_ASSESSEE: fieldBuilder.buildEnumField(
          'NatureOfAssessee',
          NatureOfAssesseeIn,
          true
        ),
        /**
         * Static representation of the {@link upsFreightZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPS_FREIGHT_ZONE: fieldBuilder.buildEdmTypeField(
          'UPSFreightZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'PersonMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willProductReceiptProcessingSummaryUpdatePurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RECEIPT_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER:
          fieldBuilder.buildEnumField(
            'WillProductReceiptProcessingSummaryUpdatePurchaseOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link personPhoneticLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSubcontractor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBCONTRACTOR: fieldBuilder.buildEnumField(
          'IsSubcontractor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTaxationOverPayrollBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAXATION_OVER_PAYROLL_BR: fieldBuilder.buildEnumField(
          'IsTaxationOverPayroll_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPublicSectorIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PUBLIC_SECTOR_IT: fieldBuilder.buildEnumField(
          'IsPublicSector_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultAgentVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_AGENT_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultAgentVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorOverUnderdeliveryToleranceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_OVER_UNDERDELIVERY_TOLERANCE_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'VendorOverUnderdeliveryToleranceGroupId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isTransportationServicesProvider} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSPORTATION_SERVICES_PROVIDER: fieldBuilder.buildEnumField(
          'IsTransportationServicesProvider',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shippingVendorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_VENDOR_TYPE: fieldBuilder.buildEnumField(
          'ShippingVendorType',
          ItmVendType,
          true
        ),
        /**
         * Static representation of the {@link vendorCostTypeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_COST_TYPE_GROUP: fieldBuilder.buildEdmTypeField(
          'VendorCostTypeGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultFromShippingPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FROM_SHIPPING_PORT_ID: fieldBuilder.buildEdmTypeField(
          'DefaultFromShippingPortId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isImportCostingVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_IMPORT_COSTING_VENDOR: fieldBuilder.buildEnumField(
          'IsImportCostingVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shippingVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingVendorAccountNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorsV2)
      };
    }

    return this._schema;
  }
}
