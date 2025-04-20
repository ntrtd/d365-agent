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
import type { RequestForQuotationJournalHeadersApi } from './RequestForQuotationJournalHeadersApi';
import { NoYes } from './NoYes';
import { PurchRfqType } from './PurchRfqType';
import { Timezone } from './Timezone';
import { PurchRfqStatus } from './PurchRfqStatus';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "RequestForQuotationJournalHeaders" of service "d365_metadata".
 */
export class RequestForQuotationJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RequestForQuotationJournalHeadersType<T>
{
  /**
   * Technical entity name for RequestForQuotationJournalHeaders.
   */
  static override _entityName = 'RequestForQuotationJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RequestForQuotationJournalHeaders entity.
   */
  static _keys = [
    'dataAreaId',
    'RFQNumber',
    'RFQJournalDate',
    'InternalRFQJournalNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Number.
   */
  declare rfqNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Journal Date.
   */
  declare rfqJournalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Internal Rfq Journal Number.
   */
  declare internalRfqJournalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Quotation Reply Line External Item Number Displayed.
   * @nullable
   */
  declare isQuotationReplyLineExternalItemNumberDisplayed?: NoYes | null;
  /**
   * Total Discount Percentage.
   */
  declare totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Method Specification Name.
   * @nullable
   */
  declare vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Quotation Reply Line External Item Description Displayed.
   * @nullable
   */
  declare isQuotationReplyLineExternalItemDescriptionDisplayed?: NoYes | null;
  /**
   * Resulting Purchase Document Type.
   * @nullable
   */
  declare resultingPurchaseDocumentType?: PurchRfqType | null;
  /**
   * Rfq Name.
   * @nullable
   */
  declare rfqName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Cash Discount Code.
   * @nullable
   */
  declare vendorCashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Agreement Id.
   * @nullable
   */
  declare purchaseAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Number Sequence Group Id.
   * @nullable
   */
  declare numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Quotation Reply Line Documentation Displayed.
   * @nullable
   */
  declare isQuotationReplyLineDocumentationDisplayed?: NoYes | null;
  /**
   * Vendor Email Address.
   * @nullable
   */
  declare vendorEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Round Off Amount.
   */
  declare totalRoundOffAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Quotation Reply Line Price Quantity Displayed.
   * @nullable
   */
  declare isQuotationReplyLinePriceQuantityDisplayed?: NoYes | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Quotation Reply Line Multiline Discount Amount Displayed.
   * @nullable
   */
  declare isQuotationReplyLineMultilineDiscountAmountDisplayed?: NoYes | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Order Number.
   * @nullable
   */
  declare purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Method Name.
   * @nullable
   */
  declare vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Quotation Reply Line Delivery Date Displayed.
   * @nullable
   */
  declare isQuotationReplyLineDeliveryDateDisplayed?: NoYes | null;
  /**
   * Payment Schedule Name.
   * @nullable
   */
  declare paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Quotation Reply Line Valid From Date Displayed.
   * @nullable
   */
  declare isQuotationReplyLineValidFromDateDisplayed?: NoYes | null;
  /**
   * Is Quotation Reply Header Currency Code Displayed.
   * @nullable
   */
  declare isQuotationReplyHeaderCurrencyCodeDisplayed?: NoYes | null;
  /**
   * Is Quotation Reply Header Documentation Displayed.
   * @nullable
   */
  declare isQuotationReplyHeaderDocumentationDisplayed?: NoYes | null;
  /**
   * Is Quotation Reply Line Multiline Discount Percentage Displayed.
   * @nullable
   */
  declare isQuotationReplyLineMultilineDiscountPercentageDisplayed?: NoYes | null;
  /**
   * Tax Group Code.
   * @nullable
   */
  declare taxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Vendor Group Code.
   * @nullable
   */
  declare multilineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Quotation Reply Line Unit Symbol Displayed.
   * @nullable
   */
  declare isQuotationReplyLineUnitSymbolDisplayed?: NoYes | null;
  /**
   * Bid Unsealing Person Party Number.
   * @nullable
   */
  declare bidUnsealingPersonPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Quotation Reply Header Payment Terms Displayed.
   * @nullable
   */
  declare isQuotationReplyHeaderPaymentTermsDisplayed?: NoYes | null;
  /**
   * Is Quotation Reply Line Working Days Displayed.
   * @nullable
   */
  declare isQuotationReplyLineWorkingDaysDisplayed?: NoYes | null;
  /**
   * Total Charge Amount.
   */
  declare totalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Date.
   */
  declare deliveryAddressDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Quotation Reply Line Line Discount Amount Displayed.
   * @nullable
   */
  declare isQuotationReplyLineLineDiscountAmountDisplayed?: NoYes | null;
  /**
   * Requesting Worker Personnel Number.
   * @nullable
   */
  declare requestingWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Quotation Reply Header Delivery Date Displayed.
   * @nullable
   */
  declare isQuotationReplyHeaderDeliveryDateDisplayed?: NoYes | null;
  /**
   * Is Reply Sheet Included.
   * @nullable
   */
  declare isReplySheetIncluded?: NoYes | null;
  /**
   * Is Quotation Reply Header Total Discount Percentage Displayed.
   * @nullable
   */
  declare isQuotationReplyHeaderTotalDiscountPercentageDisplayed?: NoYes | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bid Submitting Person Party Number.
   * @nullable
   */
  declare bidSubmittingPersonPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Vendor Reason Code.
   * @nullable
   */
  declare vendorReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Phone Number.
   * @nullable
   */
  declare contactPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Quotation Reply Header Delivery Terms Displayed.
   * @nullable
   */
  declare isQuotationReplyHeaderDeliveryTermsDisplayed?: NoYes | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Quotation Reply Line Lead Time Displayed.
   * @nullable
   */
  declare isQuotationReplyLineLeadTimeDisplayed?: NoYes | null;
  /**
   * Total Balance.
   */
  declare totalBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rfq Expiration Date Time.
   */
  declare rfqExpirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Resulting Purchase Agreement Effective Date.
   */
  declare resultingPurchaseAgreementEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Is Quotation Reply Header Valid From Date Displayed.
   * @nullable
   */
  declare isQuotationReplyHeaderValidFromDateDisplayed?: NoYes | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Quotation Reply Header Purchase Charge Displayed.
   * @nullable
   */
  declare isQuotationReplyHeaderPurchaseChargeDisplayed?: NoYes | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Quotation Reply Line Purchase Charge Displayed.
   * @nullable
   */
  declare isQuotationReplyLinePurchaseChargeDisplayed?: NoYes | null;
  /**
   * Resulting Purchase Agreement Expiration Date.
   */
  declare resultingPurchaseAgreementExpirationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Is Quotation Reply Line Discount Percent Displayed.
   * @nullable
   */
  declare isQuotationReplyLineDiscountPercentDisplayed?: NoYes | null;
  /**
   * Charge Vendor Group Id.
   * @nullable
   */
  declare chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordering Worker Personnel Number.
   * @nullable
   */
  declare orderingWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Quotation Reply Header Vend Reference Displayed.
   * @nullable
   */
  declare isQuotationReplyHeaderVendReferenceDisplayed?: NoYes | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Vendor Group Code.
   * @nullable
   */
  declare priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Status.
   * @nullable
   */
  declare rfqStatus?: PurchRfqStatus | null;
  /**
   * Delivery Address City In Kana.
   * @nullable
   */
  declare deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Quotation Reply Header Valid To Date Displayed.
   * @nullable
   */
  declare isQuotationReplyHeaderValidToDateDisplayed?: NoYes | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Case Number.
   * @nullable
   */
  declare rfqCaseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Reason Comment.
   * @nullable
   */
  declare vendorReasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street In Kana.
   * @nullable
   */
  declare deliveryAddressStreetInKana?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Order Reference.
   * @nullable
   */
  declare vendorOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Prices Displayed.
   * @nullable
   */
  declare arePricesDisplayed?: NoYes | null;
  /**
   * Total Line Discount Amount.
   */
  declare totalLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Quotation Reply Line Valid To Date Displayed.
   * @nullable
   */
  declare isQuotationReplyLineValidToDateDisplayed?: NoYes | null;
  /**
   * Is Quotation Reply Line Quantity Displayed.
   * @nullable
   */
  declare isQuotationReplyLineQuantityDisplayed?: NoYes | null;
  /**
   * Buyer Group Id.
   * @nullable
   */
  declare buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Rfq Amount.
   */
  declare totalRfqAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: RequestForQuotationJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface RequestForQuotationJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqNumber: DeserializedType<T, 'Edm.String'>;
  rfqJournalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  internalRfqJournalNumber: DeserializedType<T, 'Edm.String'>;
  isQuotationReplyLineExternalItemNumberDisplayed?: NoYes | null;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isQuotationReplyLineExternalItemDescriptionDisplayed?: NoYes | null;
  resultingPurchaseDocumentType?: PurchRfqType | null;
  rfqName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendorCashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyLineDocumentationDisplayed?: NoYes | null;
  vendorEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  totalRoundOffAmount: DeserializedType<T, 'Edm.Decimal'>;
  isQuotationReplyLinePriceQuantityDisplayed?: NoYes | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyLineMultilineDiscountAmountDisplayed?: NoYes | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyLineDeliveryDateDisplayed?: NoYes | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  isQuotationReplyLineValidFromDateDisplayed?: NoYes | null;
  isQuotationReplyHeaderCurrencyCodeDisplayed?: NoYes | null;
  isQuotationReplyHeaderDocumentationDisplayed?: NoYes | null;
  isQuotationReplyLineMultilineDiscountPercentageDisplayed?: NoYes | null;
  taxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyLineUnitSymbolDisplayed?: NoYes | null;
  bidUnsealingPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyHeaderPaymentTermsDisplayed?: NoYes | null;
  isQuotationReplyLineWorkingDaysDisplayed?: NoYes | null;
  totalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isQuotationReplyLineLineDiscountAmountDisplayed?: NoYes | null;
  requestingWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyHeaderDeliveryDateDisplayed?: NoYes | null;
  isReplySheetIncluded?: NoYes | null;
  isQuotationReplyHeaderTotalDiscountPercentageDisplayed?: NoYes | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  bidSubmittingPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  vendorReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  contactPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyHeaderDeliveryTermsDisplayed?: NoYes | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyLineLeadTimeDisplayed?: NoYes | null;
  totalBalance: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  arePricesIncludingSalesTax?: NoYes | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  rfqExpirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressTimeZone?: Timezone | null;
  resultingPurchaseAgreementEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  isQuotationReplyHeaderValidFromDateDisplayed?: NoYes | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyHeaderPurchaseChargeDisplayed?: NoYes | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyLinePurchaseChargeDisplayed?: NoYes | null;
  resultingPurchaseAgreementExpirationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  isQuotationReplyLineDiscountPercentDisplayed?: NoYes | null;
  chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  orderingWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyHeaderVendReferenceDisplayed?: NoYes | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  rfqStatus?: PurchRfqStatus | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  isQuotationReplyHeaderValidToDateDisplayed?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  rfqCaseNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorReasonComment?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  vendorOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  arePricesDisplayed?: NoYes | null;
  totalLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  isQuotationReplyLineValidToDateDisplayed?: NoYes | null;
  isQuotationReplyLineQuantityDisplayed?: NoYes | null;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  totalRfqAmount: DeserializedType<T, 'Edm.Decimal'>;
  worker?: WorkersType<T> | null;
}
