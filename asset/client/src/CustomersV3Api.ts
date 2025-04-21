/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomersV3 } from './CustomersV3';
import { CustomersV3RequestBuilder } from './CustomersV3RequestBuilder';
import { TransportationAppointmentsApi } from './TransportationAppointmentsApi';
import { OpenSalesMultiLineDiscountJournalLinesApi } from './OpenSalesMultiLineDiscountJournalLinesApi';
import { OpenSalesPriceJournalLinesApi } from './OpenSalesPriceJournalLinesApi';
import { CustomerProductDescriptionsApi } from './CustomerProductDescriptionsApi';
import { SalesAutomaticSalesDocumentHeaderTaxChargesApi } from './SalesAutomaticSalesDocumentHeaderTaxChargesApi';
import { OpenSalesPriceJournalLinesV2Api } from './OpenSalesPriceJournalLinesV2Api';
import { OpenSalesTotalDiscountJournalLinesApi } from './OpenSalesTotalDiscountJournalLinesApi';
import { OnlineChannelV2SApi } from './OnlineChannelV2SApi';
import { PeriodChargeRuleCustomersApi } from './PeriodChargeRuleCustomersApi';
import { SalesAgreementConfirmationsApi } from './SalesAgreementConfirmationsApi';
import { FixedAssetBooksV2Api } from './FixedAssetBooksV2Api';
import { FreightBillDetailsApi } from './FreightBillDetailsApi';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { WarehousesApi } from './WarehousesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { SalesAgreementsApi } from './SalesAgreementsApi';
import { FreeTextInvoiceHeadersApi } from './FreeTextInvoiceHeadersApi';
import { CustomerAttachmentsV2Api } from './CustomerAttachmentsV2Api';
import { TradeAllowanceAgreementMerchandisingEventLumpSumsApi } from './TradeAllowanceAgreementMerchandisingEventLumpSumsApi';
import { OpenSalesLineDiscountJournalLinesApi } from './OpenSalesLineDiscountJournalLinesApi';
import { AssetMaintenanceWorkOrderParentProjectsV2Api } from './AssetMaintenanceWorkOrderParentProjectsV2Api';
import { CustomerAttachmentsApi } from './CustomerAttachmentsApi';
import { RetailCallCentersApi } from './RetailCallCentersApi';
import { D365SalesQuotationHeadersApi } from './D365SalesQuotationHeadersApi';
import { TradeAllowanceAgreementHeadersApi } from './TradeAllowanceAgreementHeadersApi';
import { FixedAssetValueModelsApi } from './FixedAssetValueModelsApi';
import { ServiceOrderHeadersApi } from './ServiceOrderHeadersApi';
import { OnlineChannelsApi } from './OnlineChannelsApi';
import { WriteOffFinancialReasonsSetupsApi } from './WriteOffFinancialReasonsSetupsApi';
import { CustomerPriorityClassificationGroupApi } from './CustomerPriorityClassificationGroupApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { CustomerProductDescriptionsV2Api } from './CustomerProductDescriptionsV2Api';
import { CustomerRebateAndDeductionsGroupAssignmentsApi } from './CustomerRebateAndDeductionsGroupAssignmentsApi';
import { CdsFreeTextInvoiceHeadersApi } from './CdsFreeTextInvoiceHeadersApi';
import { OpenSalesPostageDiscountJournalLinesApi } from './OpenSalesPostageDiscountJournalLinesApi';
import { RetailStoresApi } from './RetailStoresApi';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
import { NoYes } from './NoYes';
import { InvoiceOrderAccount } from './InvoiceOrderAccount';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { Timezone } from './Timezone';
import { PaymentStub } from './PaymentStub';
import { CreditCardCvc } from './CreditCardCvc';
import { CustomerTypeIn } from './CustomerTypeIn';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { CustVendorBlocked } from './CustVendorBlocked';
import { CustAccountStatement } from './CustAccountStatement';
import { FederalNonFederalIndicatorCode } from './FederalNonFederalIndicatorCode';
import { McrsoAllocPriority } from './McrsoAllocPriority';
import { CreditCardAddressVerification } from './CreditCardAddressVerification';
import { RetailReceiptOptionBase } from './RetailReceiptOptionBase';
import { MonthsOfYear } from './MonthsOfYear';
import { SalesInvoicePostingTypeRu } from './SalesInvoicePostingTypeRu';
import { CustWhtContributionTypeBr } from './CustWhtContributionTypeBr';
import { Abc } from './Abc';
import { CustCollectionLetterCode } from './CustCollectionLetterCode';
import { Gender } from './Gender';
import { CreditCardAddressVerificationLevel } from './CreditCardAddressVerificationLevel';
import { PanStatusIn } from './PanStatusIn';
import { CompanyTypeMx } from './CompanyTypeMx';
import { UseCashDisc } from './UseCashDisc';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
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
export class CustomersV3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomersV3<DeSerializersT>, DeSerializersT>
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
  ): CustomersV3Api<DeSerializersT> {
    return new CustomersV3Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link transportationAppointments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_APPOINTMENTS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      TransportationAppointmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesMultiLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_MULTI_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesMultiLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerProductDescriptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PRODUCT_DESCRIPTIONS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerProductDescriptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesChargeCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_CUSTOMERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesTotalDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_TOTAL_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesTotalDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_V_2: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OnlineChannelV2SApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_CUSTOMERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2CustomerAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_CUSTOMER_ASSET: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freightBillDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_BILL_DETAILS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      FreightBillDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderCustAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_CUST_ACCOUNT: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderInvoiceAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_INVOICE_ACCOUNT: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerAttachmentsV2Entity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_ATTACHMENTS_V_2_ENTITY: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerAttachmentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventLumpSums} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProjectsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerAttachmentsEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_ATTACHMENTS_ENTITY: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link d365SalesQuotationHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    D_365_SALES_QUOTATION_HEADER: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      D365SalesQuotationHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_CUSTOMERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_CUSTOMER: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link writeOffFinancialReasonsSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WRITE_OFF_FINANCIAL_REASONS_SETUP: OneToOneLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      WriteOffFinancialReasonsSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPriorityClassificationGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PRIORITY_CLASSIFICATION_GROUP_ENTITY: OneToOneLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerPriorityClassificationGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerProductDescriptionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PRODUCT_DESCRIPTIONS_V_2: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerProductDescriptionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerRebateAndDeductionsGroupAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ASSIGNMENTS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerRebateAndDeductionsGroupAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPostageDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_POSTAGE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesPostageDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billingCustomerMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILLING_CUSTOMER_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TransportationAppointmentsApi<DeSerializersT>,
      OpenSalesMultiLineDiscountJournalLinesApi<DeSerializersT>,
      OpenSalesPriceJournalLinesApi<DeSerializersT>,
      CustomerProductDescriptionsApi<DeSerializersT>,
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>,
      OpenSalesTotalDiscountJournalLinesApi<DeSerializersT>,
      OnlineChannelV2SApi<DeSerializersT>,
      PeriodChargeRuleCustomersApi<DeSerializersT>,
      SalesAgreementConfirmationsApi<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      FreightBillDetailsApi<DeSerializersT>,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      SalesAgreementsApi<DeSerializersT>,
      FreeTextInvoiceHeadersApi<DeSerializersT>,
      FreeTextInvoiceHeadersApi<DeSerializersT>,
      CustomerAttachmentsV2Api<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>,
      CustomerAttachmentsApi<DeSerializersT>,
      RetailCallCentersApi<DeSerializersT>,
      D365SalesQuotationHeadersApi<DeSerializersT>,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>,
      ServiceOrderHeadersApi<DeSerializersT>,
      OnlineChannelsApi<DeSerializersT>,
      WriteOffFinancialReasonsSetupsApi<DeSerializersT>,
      CustomerPriorityClassificationGroupApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      CustomerProductDescriptionsV2Api<DeSerializersT>,
      CustomerRebateAndDeductionsGroupAssignmentsApi<DeSerializersT>,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>,
      OpenSalesPostageDiscountJournalLinesApi<DeSerializersT>,
      RetailStoresApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TRANSPORTATION_APPOINTMENTS: new OneToManyLink(
        'TransportationAppointments',
        this,
        linkedApis[0]
      ),
      OPEN_SALES_MULTI_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesMultiLineDiscountJournalLine',
        this,
        linkedApis[1]
      ),
      OPEN_SALES_PRICE_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesPriceJournalLine',
        this,
        linkedApis[2]
      ),
      CUSTOMER_PRODUCT_DESCRIPTIONS: new OneToManyLink(
        'CustomerProductDescriptions',
        this,
        linkedApis[3]
      ),
      SALES_CHARGE_CUSTOMERS: new OneToManyLink(
        'SalesChargeCustomers',
        this,
        linkedApis[4]
      ),
      OPEN_SALES_PRICE_JOURNAL_LINE_V_2: new OneToManyLink(
        'OpenSalesPriceJournalLineV2',
        this,
        linkedApis[5]
      ),
      OPEN_SALES_TOTAL_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesTotalDiscountJournalLine',
        this,
        linkedApis[6]
      ),
      ONLINE_CHANNEL_V_2: new OneToManyLink(
        'OnlineChannelV2',
        this,
        linkedApis[7]
      ),
      PERIOD_CHARGE_RULE_CUSTOMERS: new OneToManyLink(
        'PeriodChargeRuleCustomers',
        this,
        linkedApis[8]
      ),
      SALES_AGREEMENT_CONFIRMATION_HEADERS: new OneToManyLink(
        'SalesAgreementConfirmationHeaders',
        this,
        linkedApis[9]
      ),
      ASSET_BOOK_V_2_CUSTOMER_ASSET: new OneToManyLink(
        'AssetBookV2CustomerAsset',
        this,
        linkedApis[10]
      ),
      FREIGHT_BILL_DETAILS: new OneToManyLink(
        'FreightBillDetails',
        this,
        linkedApis[11]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[12]
      ),
      WAREHOUSES: new OneToManyLink('Warehouses', this, linkedApis[13]),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[14]
      ),
      SALES_AGREEMENT_HEADERS: new OneToManyLink(
        'SalesAgreementHeaders',
        this,
        linkedApis[15]
      ),
      FREE_TEXT_INVOICE_HEADER_CUST_ACCOUNT: new OneToManyLink(
        'FreeTextInvoiceHeaderCustAccount',
        this,
        linkedApis[16]
      ),
      FREE_TEXT_INVOICE_HEADER_INVOICE_ACCOUNT: new OneToManyLink(
        'FreeTextInvoiceHeaderInvoiceAccount',
        this,
        linkedApis[17]
      ),
      CUSTOMER_ATTACHMENTS_V_2_ENTITY: new OneToManyLink(
        'CustomerAttachmentsV2Entity',
        this,
        linkedApis[18]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS:
        new OneToManyLink(
          'TradeAllowanceAgreementMerchandisingEventLumpSums',
          this,
          linkedApis[19]
        ),
      OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesLineDiscountJournalLine',
        this,
        linkedApis[20]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: new OneToManyLink(
        'AssetMaintenanceWorkOrderParentProjectsV2',
        this,
        linkedApis[21]
      ),
      CUSTOMER_ATTACHMENTS_ENTITY: new OneToManyLink(
        'CustomerAttachmentsEntity',
        this,
        linkedApis[22]
      ),
      RETAIL_CALL_CENTER: new OneToManyLink(
        'RetailCallCenter',
        this,
        linkedApis[23]
      ),
      D_365_SALES_QUOTATION_HEADER: new OneToManyLink(
        'D365SalesQuotationHeader',
        this,
        linkedApis[24]
      ),
      TRADE_ALLOWANCE_AGREEMENT_CUSTOMERS: new OneToManyLink(
        'TradeAllowanceAgreementCustomers',
        this,
        linkedApis[25]
      ),
      VALUE_MODEL_CUSTOMER: new OneToManyLink(
        'ValueModelCustomer',
        this,
        linkedApis[26]
      ),
      SERVICE_ORDER_HEADERS: new OneToManyLink(
        'ServiceOrderHeaders',
        this,
        linkedApis[27]
      ),
      ONLINE_CHANNEL: new OneToManyLink('OnlineChannel', this, linkedApis[28]),
      WRITE_OFF_FINANCIAL_REASONS_SETUP: new OneToOneLink(
        'WriteOffFinancialReasonsSetup',
        this,
        linkedApis[29]
      ),
      CUSTOMER_PRIORITY_CLASSIFICATION_GROUP_ENTITY: new OneToOneLink(
        'CustomerPriorityClassificationGroupEntity',
        this,
        linkedApis[30]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[31]),
      CUSTOMER_PRODUCT_DESCRIPTIONS_V_2: new OneToManyLink(
        'CustomerProductDescriptionsV2',
        this,
        linkedApis[32]
      ),
      CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ASSIGNMENTS: new OneToManyLink(
        'CustomerRebateAndDeductionsGroupAssignments',
        this,
        linkedApis[33]
      ),
      CDS_FREE_TEXT_INVOICE_HEADERS: new OneToManyLink(
        'CDSFreeTextInvoiceHeaders',
        this,
        linkedApis[34]
      ),
      OPEN_SALES_POSTAGE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesPostageDiscountJournalLine',
        this,
        linkedApis[35]
      ),
      RETAIL_STORE: new OneToManyLink('RetailStore', this, linkedApis[36]),
      BILLING_CUSTOMER_MAINTENANCE_WORK_ORDER_HEADERS: new OneToManyLink(
        'BillingCustomer_MaintenanceWorkOrderHeaders',
        this,
        linkedApis[37]
      )
    };
    return this;
  }

  entityConstructor = CustomersV3;

  requestBuilder(): CustomersV3RequestBuilder<DeSerializersT> {
    return new CustomersV3RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomersV3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomersV3<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustomersV3<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustomersV3, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CustomersV3, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_BRAZILIAN_CNPJ_OR_CPF: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TYPE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_EXTENSION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FUEL_SURCHARGE_APPLIED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_FINE_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_COUNTY_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      InvoiceOrderAccount,
      true,
      true
    >;
    PACKING_MATERIAL_FEE_LICENSE_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_PRESENCE_TYPE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      EfDocPresenceTypeBr,
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_IS_IM: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_CITY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FINAL_USER: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_SUFRAMA_DISCOUNT_PI_SAND_COFINS: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_STREET: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURP_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_TITLE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_SEGMENT_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SERVICE_DELIVERY_ADDRESS_BASED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_TIME_ZONE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    SALES_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_IS_MOBILE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_RECORD_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TCS_GROUP: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_AUTO_CREATE_ORDERS: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OF_BUSINESS_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE_PROJ_INVOICE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    ORGANIZATION_PHONETIC_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_CVC: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      CreditCardCvc,
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GIRO_TYPE_ACCOUNT_STATEMENT: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    CALCULATE_WITHHOLDING_TAX: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ELECTRONIC_INVOICE_EAN: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_FREIGHT_ZONE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BIRTH_PLACE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_INITIALS: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_E_COMMERCE_OPERATOR: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_PRIMARY_ADDRESS: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE_COLLECTIONLETTER: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    ORDER_ENTRY_DEADLINE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGNER_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_IS_ASN_GENERATED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_TYPE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      CustomerTypeIn,
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FREIGHT_ACCRUED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARTY_STATE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_NOTES: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTIONS_CONTACT_PERSON_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_MARITAL_STATUS: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      DirPersonMaritalStatus,
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHEDULE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_PURPOSE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    INVOICE_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_CHILDREN_NAMES: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_RESIDENT: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_MODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HOLD_STATUS: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      CustVendorBlocked,
      true,
      true
    >;
    ACCOUNT_STATEMENT: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      CustAccountStatement,
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IRS_1099_C_INDICATOR: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    E_INVOICE_REGISTER: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FRENCH_SIRET: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_DAY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_NIT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEDERAL_INDICATOR: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      FederalNonFederalIndicatorCode,
      true,
      true
    >;
    EMPLOYEE_RESPONSIBLE_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_YEAR: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_RECORD_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_REFERENCE_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CURRENCY_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      McrsoAllocPriority,
      true,
      true
    >;
    IS_SALES_TAX_INCLUDED_IN_PRICES: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BRAZILIAN_CNPJ_OR_CPF: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_FACTORING_ACCOUNT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_FIRST_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_CCM: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_EMAIL: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TDS_GROUP: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTI_LINE_DISCOUNT_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_DAY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLEMENTARY_ITEM_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WITHHOLDING_TAX_CALCULATED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_RECORD_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESS_BOOKS: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_PURPOSE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULFILLMENT_POLICY_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DISTRICT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSOLIDATION_DAY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_EXPRESS_BILL_OF_LADING_ACCEPTED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_ADDRESS_VERIFICATION: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      CreditCardAddressVerification,
      true,
      true
    >;
    INVOICE_ADDRESS_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_ON_ACCOUNT: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EXCLUDED_FROM_COLLECTION_FEE_CALCULATION: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_PAYMENT_FINANCIAL_INTEREST_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TRANSACTION_POSTED_AS_SHIPMENT: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EXTERNALLY_MAINTAINED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LIMIT_IS_MANDATORY: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_TERMS_BASE_DAYS: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FISCAL_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNOWN_AS: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BANK_ACCOUNT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_IE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERENTIAL_CUSTOMER: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_RECORD_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RECEIPT_OPTION: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      RetailReceiptOptionBase,
      true,
      true
    >;
    ADDRESS_BRAZILIAN_IE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_MONTH: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_EXTENSION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_PURPOSE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_SALE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_POSTING_TYPE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      SalesInvoicePostingTypeRu,
      true,
      true
    >;
    CREDIT_CARD_ADDRESS_VERIFICATION_IS_AUTHORIZATION_VOIDED_ON_FAILURE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_STATE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_CALENDAR: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_INSCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_LAST_NAME_PREFIX: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_RETURN_TAX_GROUP: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_WITHHOLDING_CONTRIBUTION_TYPE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      CustWhtContributionTypeBr,
      true,
      true
    >;
    IS_ELECTRONIC_INVOICE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FEDERAL_AGENCY_LOCATION_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE_FREE_TEXT_INVOICE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    DELIVERY_ADDRESS_VALID_TO: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERSON_PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_ABC_CODE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    BRAZILIAN_CNAE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAF_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISCOUNT_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CASH_DISCOUNT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTION_LETTER_CODE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      CustCollectionLetterCode,
      true,
      true
    >;
    E_INVOICE_ATTACHMENT: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MERCHANT_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_RATING: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARTY_COUNTRY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LATITUDE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_IN_SUFRAMA_REGION: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INCOMING_FISCAL_DOCUMENT_GENERATED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_MEMO: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELIEF_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXCLUDED_FROM_INTEREST_CHARGE_CALCULATION: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATISTICS_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_POOL_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ORDER_NUMBER_REFERENCE_USED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_CLASSIFICATION_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FEDERAL_COMMENTS: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GENDER: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      Gender,
      true,
      true
    >;
    PAYMENT_TERMS: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_POSTBOX: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_SUBSEGMENT_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REBATE_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_OUTBOUND_SHIPMENT_PROCESSING_POLICY_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_RECORD_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_ICMS_CONTRIBUTOR: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_VALID_TO: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    INVOICE_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_CARD_ADDRESS_VERIFICATION_LEVEL: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      CreditCardAddressVerificationLevel,
      true,
      true
    >;
    WAREHOUSE_IS_ENTIRE_SHIPMENT_FILLED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACKING_DUTY_LICENSE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONAL_REGISTRY_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ALLOW_CREATE_INDIRECT_ORDER_LINES: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_PURPOSE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGES_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_STATUS: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      PanStatusIn,
      true,
      true
    >;
    COMMISSION_SALES_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_PURPOSE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_LAST_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ID_TYPE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESIDENCE_FOREIGN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFC_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_HOBBIES: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ONE_TIME_CUSTOMER: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOREIGN_CUSTOMER: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_TMA_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORGANIZATION_NUMBER_OF_EMPLOYEES: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMPANY_TYPE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      CompanyTypeMx,
      true,
      true
    >;
    CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE_INTEREST_NOTE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_REASON: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_REGISTRATION_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_USE_CASH_DISCOUNT: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      UseCashDisc,
      true,
      true
    >;
    DISCOUNT_PRICE_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUFRAMA_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORITY_OFFICE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX_PURPOSE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CHAIN: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BRAZILIAN_INSSCEI: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_DESCRIPTION: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATURE_OF_ASSESSEE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NatureOfAssesseeIn,
      true,
      true
    >;
    WRITEOFF_REASON: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_MIDDLE_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PHONETIC_LAST_NAME: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PURCH_REQUEST_USED: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PUBLIC_SECTOR_IT: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAT_REGISTRATION_NAME_MX: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_REGIME_CODE_MX: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFDI_TEMPORARY_EXPORT_MX: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SIMPLIFIED_PRIMARY_ADDRESS: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SIMPLIFIED_DELIVERY_ADDRESS: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SIMPLIFIED_INVOICE_ADDRESS: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CRED_MAN_ELIGIBLE_CREDIT_LIMIT_CURRENCY: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRED_MAN_CUST_CREDIT_MAX_ALT: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CRED_MAN_STATUS_REASON_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRED_MAN_ELIGIBLE_CREDIT_MAX: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CRED_MAN_CUST_UNLIMITED_CREDIT: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CRED_MAN_ELIGIBLE_CREDIT_LIMIT_DATE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CRED_MAN_WITH_AGENCY: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CRED_MAN_CREDIT_LIMIT_DATE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CRED_MAN_NEXT_SCHED_REVIEW_DATE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CRED_MAN_LAST_REVIEW_DATE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CRED_MAN_CUSTOMER_SINCE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CRED_MAN_TITLE_HELD: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CRED_MAN_EXCLUDE: EnumField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CRED_MAN_BUSINESS_STARTED: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CRED_MAN_NOTES: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRED_MAN_COLLECTION_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRED_MAN_GROUP_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRED_MAN_ACCOUNT_STATUS_ID: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRED_MAN_CREDIT_LIMIT_EXPIRY_DATE: OrderableEdmTypeField<
      CustomersV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transportationAppointments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_APPOINTMENTS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      TransportationAppointmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesMultiLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_MULTI_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesMultiLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerProductDescriptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PRODUCT_DESCRIPTIONS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerProductDescriptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesChargeCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_CUSTOMERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesTotalDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_TOTAL_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesTotalDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_V_2: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OnlineChannelV2SApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_CUSTOMERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2CustomerAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_CUSTOMER_ASSET: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freightBillDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_BILL_DETAILS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      FreightBillDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderCustAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_CUST_ACCOUNT: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderInvoiceAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_INVOICE_ACCOUNT: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerAttachmentsV2Entity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_ATTACHMENTS_V_2_ENTITY: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerAttachmentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventLumpSums} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProjectsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerAttachmentsEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_ATTACHMENTS_ENTITY: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link d365SalesQuotationHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    D_365_SALES_QUOTATION_HEADER: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      D365SalesQuotationHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_CUSTOMERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_CUSTOMER: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link writeOffFinancialReasonsSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WRITE_OFF_FINANCIAL_REASONS_SETUP: OneToOneLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      WriteOffFinancialReasonsSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPriorityClassificationGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PRIORITY_CLASSIFICATION_GROUP_ENTITY: OneToOneLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerPriorityClassificationGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerProductDescriptionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PRODUCT_DESCRIPTIONS_V_2: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerProductDescriptionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerRebateAndDeductionsGroupAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ASSIGNMENTS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CustomerRebateAndDeductionsGroupAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPostageDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_POSTAGE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      OpenSalesPostageDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billingCustomerMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILLING_CUSTOMER_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      CustomersV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomersV3<DeSerializers>>;
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
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
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
         * Static representation of the {@link partyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'PartyType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFuelSurchargeApplied} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FUEL_SURCHARGE_APPLIED: fieldBuilder.buildEnumField(
          'IsFuelSurchargeApplied',
          NoYes,
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
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerPaymentFineCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FINE_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentFineCode',
          'Edm.String',
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
         * Static representation of the {@link invoiceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS: fieldBuilder.buildEnumField(
          'InvoiceAddress',
          InvoiceOrderAccount,
          true
        ),
        /**
         * Static representation of the {@link packingMaterialFeeLicenseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_MATERIAL_FEE_LICENSE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PackingMaterialFeeLicenseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionPresenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_PRESENCE_TYPE: fieldBuilder.buildEnumField(
          'TransactionPresenceType',
          EfDocPresenceTypeBr,
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailIsIm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_IS_IM: fieldBuilder.buildEnumField(
          'PrimaryContactEmailIsIM',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFinalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINAL_USER: fieldBuilder.buildEnumField('IsFinalUser', NoYes, true),
        /**
         * Static representation of the {@link primaryContactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasSuframaDiscountPiSandCofins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_SUFRAMA_DISCOUNT_PI_SAND_COFINS: fieldBuilder.buildEnumField(
          'HasSuframaDiscountPISandCOFINS',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link curpNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURP_NUMBER: fieldBuilder.buildEdmTypeField(
          'CURPNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemCustomerGroupId',
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
         * Static representation of the {@link salesSegmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SEGMENT_ID: fieldBuilder.buildEdmTypeField(
          'SalesSegmentId',
          'Edm.String',
          true
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
         * Static representation of the {@link primaryContactTelexDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'InvoiceAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link salesAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebookDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneIsMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_IS_MOBILE: fieldBuilder.buildEnumField(
          'PrimaryContactPhoneIsMobile',
          NoYes,
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
         * Static representation of the {@link tcsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_GROUP: fieldBuilder.buildEdmTypeField(
          'TCSGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyAutoCreateOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_AUTO_CREATE_ORDERS: fieldBuilder.buildEnumField(
          'InterCompanyAutoCreateOrders',
          NoYes,
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
         * Static representation of the {@link giroTypeProjInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_PROJ_INVOICE: fieldBuilder.buildEnumField(
          'GiroTypeProjInvoice',
          PaymentStub,
          true
        ),
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
         * Static representation of the {@link creditCardCvc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_CVC: fieldBuilder.buildEnumField(
          'CreditCardCVC',
          CreditCardCvc,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DeliveryAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link deliveryAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link giroTypeAccountStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_ACCOUNT_STATEMENT: fieldBuilder.buildEnumField(
          'GiroTypeAccountStatement',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link calculateWithholdingTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_WITHHOLDING_TAX: fieldBuilder.buildEnumField(
          'CalculateWithholdingTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link electronicInvoiceEan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_INVOICE_EAN: fieldBuilder.buildEdmTypeField(
          'ElectronicInvoiceEAN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryFreightZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_FREIGHT_ZONE: fieldBuilder.buildEdmTypeField(
          'DeliveryFreightZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFax',
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
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link defaultECommerceOperator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_E_COMMERCE_OPERATOR: fieldBuilder.buildEdmTypeField(
          'DefaultECommerceOperator',
          'Edm.String',
          true
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
         * Static representation of the {@link fullPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroTypeCollectionletter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_COLLECTIONLETTER: fieldBuilder.buildEnumField(
          'GiroTypeCollectionletter',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link orderEntryDeadline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ENTRY_DEADLINE: fieldBuilder.buildEdmTypeField(
          'OrderEntryDeadline',
          'Edm.String',
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
         * Static representation of the {@link warehouseIsAsnGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_IS_ASN_GENERATED: fieldBuilder.buildEnumField(
          'WarehouseIsASNGenerated',
          NoYes,
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
         * Static representation of the {@link customerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TYPE: fieldBuilder.buildEnumField(
          'CustomerType',
          CustomerTypeIn,
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedIn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFreightAccrued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FREIGHT_ACCRUED: fieldBuilder.buildEnumField(
          'IsFreightAccrued',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link partyState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_STATE: fieldBuilder.buildEdmTypeField(
          'PartyState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link centralBankPurposeNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_NOTES: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionsContactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'CollectionsContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressBuildingComplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BUILDING_COMPLEMENT: fieldBuilder.buildEdmTypeField(
          'AddressBuildingComplement',
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
         * Static representation of the {@link paymentSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'PaymentSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE: fieldBuilder.buildEnumField('GiroType', PaymentStub, true),
        /**
         * Static representation of the {@link invoiceAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressDescription',
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
         * Static representation of the {@link deliveryTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS: fieldBuilder.buildEdmTypeField(
          'DeliveryTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroup',
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
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'PaymentMethod',
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
         * Static representation of the {@link deliveryMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE: fieldBuilder.buildEdmTypeField(
          'DeliveryMode',
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
         * Static representation of the {@link accountStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STATEMENT: fieldBuilder.buildEnumField(
          'AccountStatement',
          CustAccountStatement,
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
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
         * Static representation of the {@link irs1099CIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IRS_1099_C_INDICATOR: fieldBuilder.buildEnumField(
          'IRS1099CIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eInvoiceRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_REGISTER: fieldBuilder.buildEnumField(
          'EInvoiceRegister',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link frenchSiret} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRENCH_SIRET: fieldBuilder.buildEdmTypeField(
          'FrenchSiret',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DAY: fieldBuilder.buildEdmTypeField(
          'PaymentDay',
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
         * Static representation of the {@link federalIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_INDICATOR: fieldBuilder.buildEnumField(
          'FederalIndicator',
          FederalNonFederalIndicatorCode,
          true
        ),
        /**
         * Static representation of the {@link employeeResponsibleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_RESPONSIBLE_NUMBER: fieldBuilder.buildEdmTypeField(
          'EmployeeResponsibleNumber',
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
         * Static representation of the {@link defaultInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailDescription',
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
         * Static representation of the {@link primaryContactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhone',
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
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCounty',
          'Edm.String',
          true
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
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'SalesCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEnumField(
          'Priority',
          McrsoAllocPriority,
          true
        ),
        /**
         * Static representation of the {@link isSalesTaxIncludedInPrices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_TAX_INCLUDED_IN_PRICES: fieldBuilder.buildEnumField(
          'IsSalesTaxIncludedInPrices',
          NoYes,
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
         * Static representation of the {@link paymentFactoringAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FACTORING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentFactoringAccount',
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
         * Static representation of the {@link primaryContactTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterDescription',
          'Edm.String',
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
         * Static representation of the {@link brazilianCcm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_CCM: fieldBuilder.buildEdmTypeField(
          'BrazilianCCM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_EMAIL: fieldBuilder.buildEdmTypeField(
          'ReceiptEmail',
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
         * Static representation of the {@link multiLineDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LINE_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'MultiLineDiscountCode',
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
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplementaryItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLEMENTARY_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SupplementaryItemGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link paymentSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION: fieldBuilder.buildEdmTypeField(
          'PaymentSpecification',
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
         * Static representation of the {@link addressBooks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOKS: fieldBuilder.buildEdmTypeField(
          'AddressBooks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fulfillmentPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULFILLMENT_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'FulfillmentPolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesDistrict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DISTRICT: fieldBuilder.buildEdmTypeField(
          'SalesDistrict',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consolidationDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATION_DAY: fieldBuilder.buildEdmTypeField(
          'ConsolidationDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isExpressBillOfLadingAccepted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPRESS_BILL_OF_LADING_ACCEPTED: fieldBuilder.buildEnumField(
          'IsExpressBillOfLadingAccepted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditCardAddressVerification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ADDRESS_VERIFICATION: fieldBuilder.buildEnumField(
          'CreditCardAddressVerification',
          CreditCardAddressVerification,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressBuildingComplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_BUILDING_COMPLEMENT: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressBuildingComplement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowOnAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_ON_ACCOUNT: fieldBuilder.buildEnumField(
          'AllowOnAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isExcludedFromCollectionFeeCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXCLUDED_FROM_COLLECTION_FEE_CALCULATION:
          fieldBuilder.buildEnumField(
            'IsExcludedFromCollectionFeeCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link customerPaymentFinancialInterestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FINANCIAL_INTEREST_CODE:
          fieldBuilder.buildEdmTypeField(
            'CustomerPaymentFinancialInterestCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isTransactionPostedAsShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSACTION_POSTED_AS_SHIPMENT: fieldBuilder.buildEnumField(
          'IsTransactionPostedAsShipment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isExternallyMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXTERNALLY_MAINTAINED: fieldBuilder.buildEnumField(
          'IsExternallyMaintained',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditLimitIsMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_IS_MANDATORY: fieldBuilder.buildEnumField(
          'CreditLimitIsMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentTermsBaseDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_BASE_DAYS: fieldBuilder.buildEdmTypeField(
          'PaymentTermsBaseDays',
          'Edm.Int32',
          false
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
         * Static representation of the {@link knownAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS: fieldBuilder.buildEdmTypeField('KnownAs', 'Edm.String', true),
        /**
         * Static representation of the {@link primaryContactTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentBankAccount',
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
         * Static representation of the {@link preferentialCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERENTIAL_CUSTOMER: fieldBuilder.buildEnumField(
          'PreferentialCustomer',
          NoYes,
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
         * Static representation of the {@link receiptOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_OPTION: fieldBuilder.buildEnumField(
          'ReceiptOption',
          RetailReceiptOptionBase,
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
         * Static representation of the {@link primaryContactPhoneExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhonePurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhonePurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exportSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_SALE: fieldBuilder.buildEnumField('ExportSale', NoYes, true),
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
         * Static representation of the {@link invoicePostingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_POSTING_TYPE: fieldBuilder.buildEnumField(
          'InvoicePostingType',
          SalesInvoicePostingTypeRu,
          true
        ),
        /**
         * Static representation of the {@link creditCardAddressVerificationIsAuthorizationVoidedOnFailure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ADDRESS_VERIFICATION_IS_AUTHORIZATION_VOIDED_ON_FAILURE:
          fieldBuilder.buildEnumField(
            'CreditCardAddressVerificationIsAuthorizationVoidedOnFailure',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link invoiceAddressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_CALENDAR: fieldBuilder.buildEdmTypeField(
          'ReceiptCalendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressState',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link salesReturnTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_RETURN_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesReturnTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerWithholdingContributionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_WITHHOLDING_CONTRIBUTION_TYPE: fieldBuilder.buildEnumField(
          'CustomerWithholdingContributionType',
          CustWhtContributionTypeBr,
          true
        ),
        /**
         * Static representation of the {@link isElectronicInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ELECTRONIC_INVOICE: fieldBuilder.buildEnumField(
          'IsElectronicInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link federalAgencyLocationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_AGENCY_LOCATION_CODE: fieldBuilder.buildEdmTypeField(
          'FederalAgencyLocationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroTypeFreeTextInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_FREE_TEXT_INVOICE: fieldBuilder.buildEnumField(
          'GiroTypeFreeTextInvoice',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressValidTo',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link totalDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountCode',
          'Edm.String',
          true
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
         * Static representation of the {@link paymentCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CASH_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentCashDiscount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionLetterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_CODE: fieldBuilder.buildEnumField(
          'CollectionLetterCode',
          CustCollectionLetterCode,
          true
        ),
        /**
         * Static representation of the {@link eInvoiceAttachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_ATTACHMENT: fieldBuilder.buildEnumField(
          'EInvoiceAttachment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link merchantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT_ID: fieldBuilder.buildEdmTypeField(
          'MerchantID',
          'Edm.String',
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
         * Static representation of the {@link primaryContactFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebook',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressBuildingComplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_BUILDING_COMPLEMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressBuildingComplement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'LineDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link partyCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_COUNTRY: fieldBuilder.buildEdmTypeField(
          'PartyCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isInSuframaRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_IN_SUFRAMA_REGION: fieldBuilder.buildEnumField(
          'IsInSuframaRegion',
          NoYes,
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
         * Static representation of the {@link salesMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MEMO: fieldBuilder.buildEdmTypeField(
          'SalesMemo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reliefGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIEF_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ReliefGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isExcludedFromInterestChargeCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXCLUDED_FROM_INTEREST_CHARGE_CALCULATION:
          fieldBuilder.buildEnumField(
            'IsExcludedFromInterestChargeCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link statisticsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'StatisticsGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_POOL_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOrderNumberReferenceUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ORDER_NUMBER_REFERENCE_USED: fieldBuilder.buildEnumField(
          'IsOrderNumberReferenceUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'CustClassificationId',
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
         * Static representation of the {@link federalComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_COMMENTS: fieldBuilder.buildEdmTypeField(
          'FederalComments',
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
         * Static representation of the {@link paymentTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS: fieldBuilder.buildEdmTypeField(
          'PaymentTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressPostbox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_POSTBOX: fieldBuilder.buildEdmTypeField(
          'AddressPostbox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesSubsegmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SUBSEGMENT_ID: fieldBuilder.buildEdmTypeField(
          'SalesSubsegmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerRebateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseOutboundShipmentProcessingPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_OUTBOUND_SHIPMENT_PROCESSING_POLICY_NAME:
          fieldBuilder.buildEdmTypeField(
            'WarehouseOutboundShipmentProcessingPolicyName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
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
         * Static representation of the {@link isIcmsContributor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ICMS_CONTRIBUTOR: fieldBuilder.buildEnumField(
          'IsICMSContributor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressValidFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link creditCardAddressVerificationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ADDRESS_VERIFICATION_LEVEL: fieldBuilder.buildEnumField(
          'CreditCardAddressVerificationLevel',
          CreditCardAddressVerificationLevel,
          true
        ),
        /**
         * Static representation of the {@link warehouseIsEntireShipmentFilled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_IS_ENTIRE_SHIPMENT_FILLED: fieldBuilder.buildEnumField(
          'WarehouseIsEntireShipmentFilled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link packingDutyLicense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_DUTY_LICENSE: fieldBuilder.buildEdmTypeField(
          'PackingDutyLicense',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nationalRegistryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONAL_REGISTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'NationalRegistryNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', true),
        /**
         * Static representation of the {@link isAllowCreateIndirectOrderLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_CREATE_INDIRECT_ORDER_LINES: fieldBuilder.buildEnumField(
          'IsAllowCreateIndirectOrderLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargesGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargesGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link panStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_STATUS: fieldBuilder.buildEnumField('PanStatus', PanStatusIn, true),
        /**
         * Static representation of the {@link commissionSalesGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_SALES_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CommissionSalesGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxPurpose',
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
         * Static representation of the {@link paymentIdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ID_TYPE: fieldBuilder.buildEdmTypeField(
          'PaymentIdType',
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
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
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
         * Static representation of the {@link rfcNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFCNumber',
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
         * Static representation of the {@link invoiceAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOneTimeCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_CUSTOMER: fieldBuilder.buildEnumField(
          'IsOneTimeCustomer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link foreignCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_CUSTOMER: fieldBuilder.buildEnumField(
          'ForeignCustomer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerTmaGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TMA_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerTMAGroupId',
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
         * Static representation of the {@link organizationNumberOfEmployees} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER_OF_EMPLOYEES: fieldBuilder.buildEdmTypeField(
          'OrganizationNumberOfEmployees',
          'Edm.Int32',
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
         * Static representation of the {@link customerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroTypeInterestNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_INTEREST_NOTE: fieldBuilder.buildEnumField(
          'GiroTypeInterestNote',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_REASON: fieldBuilder.buildEdmTypeField(
          'DeliveryReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxRegistrationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGISTRATION_ID: fieldBuilder.buildEdmTypeField(
          'TaxRegistrationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentUseCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_USE_CASH_DISCOUNT: fieldBuilder.buildEnumField(
          'PaymentUseCashDiscount',
          UseCashDisc,
          true
        ),
        /**
         * Static representation of the {@link discountPriceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PRICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'DiscountPriceGroupId',
          'Edm.String',
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
         * Static representation of the {@link suframaNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFRAMA_NUMBER: fieldBuilder.buildEdmTypeField(
          'SuframaNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link identificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'IdentificationNumber',
          'Edm.String',
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
         * Static representation of the {@link authorityOffice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORITY_OFFICE: fieldBuilder.buildEdmTypeField(
          'AuthorityOffice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelexPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebookPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyChain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CHAIN: fieldBuilder.buildEdmTypeField(
          'CompanyChain',
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
         * Static representation of the {@link commissionCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CommissionCustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxDescription',
          'Edm.String',
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
         * Static representation of the {@link writeoffReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITEOFF_REASON: fieldBuilder.buildEdmTypeField(
          'WriteoffReason',
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
         * Static representation of the {@link invoiceAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressLocationId',
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
         * Static representation of the {@link personPhoneticLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticLastName',
          'Edm.String',
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
         * Static representation of the {@link isPurchRequestUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCH_REQUEST_USED: fieldBuilder.buildEnumField(
          'IsPurchRequestUsed',
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
         * Static representation of the {@link satRegistrationNameMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_REGISTRATION_NAME_MX: fieldBuilder.buildEdmTypeField(
          'SATRegistrationName_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxRegimeCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGIME_CODE_MX: fieldBuilder.buildEdmTypeField(
          'TaxRegimeCode_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfdiTemporaryExportMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDI_TEMPORARY_EXPORT_MX: fieldBuilder.buildEnumField(
          'CFDITemporaryExport_MX',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSimplifiedPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SIMPLIFIED_PRIMARY_ADDRESS: fieldBuilder.buildEnumField(
          'IsSimplifiedPrimaryAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSimplifiedDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SIMPLIFIED_DELIVERY_ADDRESS: fieldBuilder.buildEnumField(
          'IsSimplifiedDeliveryAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSimplifiedInvoiceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SIMPLIFIED_INVOICE_ADDRESS: fieldBuilder.buildEnumField(
          'IsSimplifiedInvoiceAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link credManEligibleCreditLimitCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_ELIGIBLE_CREDIT_LIMIT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CredManEligibleCreditLimitCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link credManCustCreditMaxAlt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_CUST_CREDIT_MAX_ALT: fieldBuilder.buildEdmTypeField(
          'CredManCustCreditMaxAlt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link credManStatusReasonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_STATUS_REASON_ID: fieldBuilder.buildEdmTypeField(
          'CredManStatusReasonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link credManEligibleCreditMax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_ELIGIBLE_CREDIT_MAX: fieldBuilder.buildEdmTypeField(
          'CredManEligibleCreditMax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link credManCustUnlimitedCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_CUST_UNLIMITED_CREDIT: fieldBuilder.buildEnumField(
          'CredManCustUnlimitedCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link credManEligibleCreditLimitDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_ELIGIBLE_CREDIT_LIMIT_DATE: fieldBuilder.buildEdmTypeField(
          'CredManEligibleCreditLimitDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link credManWithAgency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_WITH_AGENCY: fieldBuilder.buildEnumField(
          'CredManWithAgency',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link credManCreditLimitDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_CREDIT_LIMIT_DATE: fieldBuilder.buildEdmTypeField(
          'CredManCreditLimitDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link credManNextSchedReviewDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_NEXT_SCHED_REVIEW_DATE: fieldBuilder.buildEdmTypeField(
          'CredManNextSchedReviewDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link credManLastReviewDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_LAST_REVIEW_DATE: fieldBuilder.buildEdmTypeField(
          'CredManLastReviewDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link credManCustomerSince} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_CUSTOMER_SINCE: fieldBuilder.buildEdmTypeField(
          'CredManCustomerSince',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link credManTitleHeld} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_TITLE_HELD: fieldBuilder.buildEnumField(
          'CredManTitleHeld',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link credManExclude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_EXCLUDE: fieldBuilder.buildEnumField(
          'CredManExclude',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link credManBusinessStarted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_BUSINESS_STARTED: fieldBuilder.buildEdmTypeField(
          'CredManBusinessStarted',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link credManNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_NOTES: fieldBuilder.buildEdmTypeField(
          'CredManNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link credManCollectionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_COLLECTION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CredManCollectionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link credManGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CredManGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link credManAccountStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_ACCOUNT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'CredManAccountStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link credManCreditLimitExpiryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_CREDIT_LIMIT_EXPIRY_DATE: fieldBuilder.buildEdmTypeField(
          'CredManCreditLimitExpiryDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomersV3)
      };
    }

    return this._schema;
  }
}
