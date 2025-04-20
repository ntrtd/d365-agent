/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { SalesQuotationHeadersV2Api } from './SalesQuotationHeadersV2Api';
import { NoYes } from './NoYes';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { BankLgDocumentType } from './BankLgDocumentType';
import { SettlementType } from './SettlementType';
import { Listcode } from './Listcode';
import { SalesQuotationStatus } from './SalesQuotationStatus';
import { Timezone } from './Timezone';
import { SalesQuotationCreationMethod } from './SalesQuotationCreationMethod';
import {
  SalesQuotationLines,
  SalesQuotationLinesType
} from './SalesQuotationLines';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "SalesQuotationHeadersV2" of service "d365_metadata".
 */
export class SalesQuotationHeadersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesQuotationHeadersV2Type<T>
{
  /**
   * Technical entity name for SalesQuotationHeadersV2.
   */
  static override _entityName = 'SalesQuotationHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesQuotationHeadersV2 entity.
   */
  static _keys = ['dataAreaId', 'SalesQuotationNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Quotation Number.
   */
  declare salesQuotationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Document Operation Type Id.
   * @nullable
   */
  declare fiscalDocumentOperationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Quotation Template Name.
   * @nullable
   */
  declare salesQuotationTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Street.
   * @nullable
   */
  declare invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Campaign Id.
   * @nullable
   */
  declare campaignId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Customer Final User.
   * @nullable
   */
  declare isCustomerFinalUser?: NoYes | null;
  /**
   * Sales Quotation Name.
   * @nullable
   */
  declare salesQuotationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Shipping Site Id.
   * @nullable
   */
  declare defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Invoice Address Private.
   * @nullable
   */
  declare isInvoiceAddressPrivate?: NoYes | null;
  /**
   * Sales Quotation Type Id.
   * @nullable
   */
  declare salesQuotationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Document Introduction Name.
   * @nullable
   */
  declare quotationDocumentIntroductionName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quotation Responsible Personnel Number.
   * @nullable
   */
  declare quotationResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Generated Sales Order Number.
   * @nullable
   */
  declare generatedSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tele Marketing Call List Id.
   * @nullable
   */
  declare teleMarketingCallListId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Group Id.
   * @nullable
   */
  declare numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Origin Code.
   * @nullable
   */
  declare salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Latitude.
   */
  declare invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Payment Financial Interest Code.
   * @nullable
   */
  declare customerPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Address Street In Kana.
   * @nullable
   */
  declare invoiceAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Percentage.
   */
  declare cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order Pool Id.
   * @nullable
   */
  declare salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Discount Customer Group Code.
   * @nullable
   */
  declare totalDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requesting Customer Account Number.
   * @nullable
   */
  declare requestingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Order Promising Method.
   * @nullable
   */
  declare salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Total Discount Percentage.
   */
  declare totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Expiry Date.
   */
  declare salesQuotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Skip Opportunity Creation Prompt.
   * @nullable
   */
  declare skipOpportunityCreationPrompt?: NoYes | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Customer Group Code.
   * @nullable
   */
  declare multilineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Document Type.
   * @nullable
   */
  declare bankDocumentType?: BankLgDocumentType | null;
  /**
   * Sales Quotation Follow Up Date.
   */
  declare salesQuotationFollowUpDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Address State Id.
   * @nullable
   */
  declare invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Method Specification Name.
   * @nullable
   */
  declare customerPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Commission Customer Group Id.
   * @nullable
   */
  declare commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Follow Up Activity.
   * @nullable
   */
  declare quotationFollowUpActivity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Reason Code.
   * @nullable
   */
  declare quotationReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Total Tax Amount.
   */
  declare quotationTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address Country Region Id.
   * @nullable
   */
  declare invoiceAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Street In Kana.
   * @nullable
   */
  declare deliveryAddressStreetInKana?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quotation Document Title Name.
   * @nullable
   */
  declare quotationDocumentTitleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Customer Group Id.
   * @nullable
   */
  declare chargeCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Street Number.
   * @nullable
   */
  declare invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Are Totals Calculated.
   * @nullable
   */
  declare areTotalsCalculated?: NoYes | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formatted Invoice Address.
   * @nullable
   */
  declare formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Reason.
   * @nullable
   */
  declare exportReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Country Region Iso Code.
   * @nullable
   */
  declare invoiceAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Intrastat Transaction Code.
   * @nullable
   */
  declare intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Agreement Id.
   * @nullable
   */
  declare serviceAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Sales Representative Group Id.
   * @nullable
   */
  declare commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Transaction Settlement Type.
   * @nullable
   */
  declare customerTransactionSettlementType?: SettlementType | null;
  /**
   * Invoice Address City In Kana.
   * @nullable
   */
  declare invoiceAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Total Discount Amount.
   */
  declare quotationTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Date Requested.
   */
  declare receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Intrastat Statistics Procedure Code.
   * @nullable
   */
  declare intrastatStatisticsProcedureCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Prospect Id.
   * @nullable
   */
  declare prospectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Due Date.
   */
  declare fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Longitude.
   */
  declare invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address City.
   * @nullable
   */
  declare invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Post Box.
   * @nullable
   */
  declare invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Sales List Code.
   * @nullable
   */
  declare euSalesListCode?: Listcode | null;
  /**
   * Invoice Address District Name.
   * @nullable
   */
  declare invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Status.
   * @nullable
   */
  declare salesQuotationStatus?: SalesQuotationStatus | null;
  /**
   * Quotation Total Amount.
   */
  declare quotationTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quotation Header Tax Amount.
   */
  declare quotationHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Quotation Template Group Id.
   * @nullable
   */
  declare salesQuotationTemplateGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Sales Quotation Template Active.
   * @nullable
   */
  declare isSalesQuotationTemplateActive?: NoYes | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City In Kana.
   * @nullable
   */
  declare deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Posting Profile Id.
   * @nullable
   */
  declare customerPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quotation Document Conclusion Name.
   * @nullable
   */
  declare quotationDocumentConclusionName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Address Zip Code.
   * @nullable
   */
  declare invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Default Shipping Warehouse Id.
   * @nullable
   */
  declare defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Taker Personnel Number.
   * @nullable
   */
  declare quotationTakerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Header Creation Method.
   * @nullable
   */
  declare salesQuotationHeaderCreationMethod?: SalesQuotationCreationMethod | null;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Transport Mode Code.
   * @nullable
   */
  declare intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customers Reference.
   * @nullable
   */
  declare customersReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Time Zone.
   * @nullable
   */
  declare invoiceAddressTimeZone?: Timezone | null;
  /**
   * Opportunity Id.
   * @nullable
   */
  declare opportunityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address County Id.
   * @nullable
   */
  declare invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Total Charges Amount.
   */
  declare quotationTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Customer Group Code.
   * @nullable
   */
  declare lineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Intrastat Port Id.
   * @nullable
   */
  declare intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Confirmation Date.
   */
  declare salesQuotationConfirmationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Customer Payment Fine Code.
   * @nullable
   */
  declare customerPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Building Compliment.
   * @nullable
   */
  declare invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Customer Group Code.
   * @nullable
   */
  declare priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Reason Code.
   * @nullable
   */
  declare deliveryReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Fixed Exchange Rate.
   */
  declare reportingCurrencyFixedExchangeRate: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Operating Unit Party Number.
   * @nullable
   */
  declare operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Method Name.
   * @nullable
   */
  declare customerPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Id.
   * @nullable
   */
  declare salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Exchange Rate.
   */
  declare fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Skip Global Unified Pricing Calculation.
   * @nullable
   */
  declare skipGlobalUnifiedPricingCalculation?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link SalesQuotationLines} entity.
   */
  declare salesQuotationLines: SalesQuotationLines<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: SalesQuotationHeadersV2Api<T>) {
    super(_entityApi);
  }
}

export interface SalesQuotationHeadersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesQuotationNumber: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentOperationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  campaignId?: DeserializedType<T, 'Edm.String'> | null;
  isCustomerFinalUser?: NoYes | null;
  salesQuotationName?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  isInvoiceAddressPrivate?: NoYes | null;
  salesQuotationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  quotationDocumentIntroductionName?: DeserializedType<T, 'Edm.String'> | null;
  quotationResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  generatedSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  teleMarketingCallListId?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  customerPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  invoiceAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  requestingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  skipOpportunityCreationPrompt?: NoYes | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  bankDocumentType?: BankLgDocumentType | null;
  salesQuotationFollowUpDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  quotationFollowUpActivity?: DeserializedType<T, 'Edm.String'> | null;
  quotationReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  quotationTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  quotationDocumentTitleName?: DeserializedType<T, 'Edm.String'> | null;
  chargeCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  areTotalsCalculated?: NoYes | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  exportReason?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  serviceAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  arePricesIncludingSalesTax?: NoYes | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  customerTransactionSettlementType?: SettlementType | null;
  invoiceAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  quotationTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  intrastatStatisticsProcedureCode?: DeserializedType<T, 'Edm.String'> | null;
  prospectId?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  euSalesListCode?: Listcode | null;
  invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationStatus?: SalesQuotationStatus | null;
  quotationTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  quotationHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesQuotationTemplateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isSalesQuotationTemplateActive?: NoYes | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  customerPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  quotationDocumentConclusionName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  quotationTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationHeaderCreationMethod?: SalesQuotationCreationMethod | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  customersReference?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressTimeZone?: Timezone | null;
  opportunityId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  quotationTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationConfirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyFixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  skipGlobalUnifiedPricingCalculation?: NoYes | null;
  salesQuotationLines: SalesQuotationLinesType<T>[];
  dimensionSet?: DimensionSetsType<T> | null;
}
