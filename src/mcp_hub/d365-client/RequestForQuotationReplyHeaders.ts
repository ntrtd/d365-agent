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
import type { RequestForQuotationReplyHeadersApi } from './RequestForQuotationReplyHeadersApi';
import { NoYes } from './NoYes';
import { PurchRfqBidType } from './PurchRfqBidType';
import { PurchRfqStatus } from './PurchRfqStatus';
import { PurchRfqType } from './PurchRfqType';
import { Timezone } from './Timezone';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "RequestForQuotationReplyHeaders" of service "d365_metadata".
 */
export class RequestForQuotationReplyHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RequestForQuotationReplyHeadersType<T>
{
  /**
   * Technical entity name for RequestForQuotationReplyHeaders.
   */
  static override _entityName = 'RequestForQuotationReplyHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RequestForQuotationReplyHeaders entity.
   */
  static _keys = ['dataAreaId', 'RFQNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Number.
   */
  declare rfqNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Cash Discount Code.
   * @nullable
   */
  declare vendorCashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resulting Purchase Agreement Expiration Date.
   */
  declare resultingPurchaseAgreementExpirationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Number Sequence Group Id.
   * @nullable
   */
  declare numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Rfq Accepted.
   * @nullable
   */
  declare isRfqAccepted?: NoYes | null;
  /**
   * Rfq Bid Type.
   * @nullable
   */
  declare rfqBidType?: PurchRfqBidType | null;
  /**
   * Requested Delivery Date.
   */
  declare requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requesting Worker Personnel Number.
   * @nullable
   */
  declare requestingWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multi Line Discount Vendor Group Code.
   * @nullable
   */
  declare multiLineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rfq Reply Url Address.
   * @nullable
   */
  declare rfqReplyUrlAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Vendor Group Id.
   * @nullable
   */
  declare chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Percentage.
   */
  declare totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Vendor Group Code.
   * @nullable
   */
  declare priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Ordering Worker Personnel Number.
   * @nullable
   */
  declare orderingWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Reason Code.
   * @nullable
   */
  declare vendorReasonCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vendor Reply Submission Date Time.
   */
  declare vendorReplySubmissionDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Score Rank.
   */
  declare rfqScoreRank: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vendor Email Address.
   * @nullable
   */
  declare vendorEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
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
   * Requesting Department Name.
   * @nullable
   */
  declare requestingDepartmentName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Buyer Group Id.
   * @nullable
   */
  declare buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Name.
   * @nullable
   */
  declare rfqName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Schedule Name.
   * @nullable
   */
  declare paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Solicitation Type Name.
   * @nullable
   */
  declare rfqSolicitationTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Legal Entity Id.
   * @nullable
   */
  declare accountingDistributionLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Rfq Bid In Progress.
   * @nullable
   */
  declare isRfqBidInProgress?: NoYes | null;
  /**
   * Resulting Purchase Order Number.
   * @nullable
   */
  declare resultingPurchaseOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ship Calendar Id.
   * @nullable
   */
  declare shipCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template Legal Entity Party Number.
   * @nullable
   */
  declare accountingDistributionTemplateLegalEntityPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Resulting Purchase Agreement Effective Date.
   */
  declare resultingPurchaseAgreementEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Order Reference.
   * @nullable
   */
  declare vendorOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Highest Rfq Status.
   * @nullable
   */
  declare highestRfqStatus?: PurchRfqStatus | null;
  /**
   * Vendor Payment Method Specification Name.
   * @nullable
   */
  declare vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Total Rfq Score.
   */
  declare totalRfqScore: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Rfq Case Title.
   * @nullable
   */
  declare rfqCaseTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lowest Rfq Status.
   * @nullable
   */
  declare lowestRfqStatus?: PurchRfqStatus | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Case Number.
   * @nullable
   */
  declare rfqCaseNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rfq Type.
   * @nullable
   */
  declare rfqType?: PurchRfqType | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Rfq Sealed.
   * @nullable
   */
  declare isRfqSealed?: NoYes | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template Id.
   * @nullable
   */
  declare accountingDistributionTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Expiration Date Time.
   */
  declare rfqExpirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Reason Comment.
   * @nullable
   */
  declare vendorReasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Method Name.
   * @nullable
   */
  declare vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resulting Purchase Agreement Id.
   * @nullable
   */
  declare resultingPurchaseAgreementId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Discount Vendor Group Code.
   * @nullable
   */
  declare lineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Phone Number.
   * @nullable
   */
  declare contactPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bid Submitting Person Party Number.
   * @nullable
   */
  declare bidSubmittingPersonPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Vendor Group Code.
   * @nullable
   */
  declare totalDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: RequestForQuotationReplyHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface RequestForQuotationReplyHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqNumber: DeserializedType<T, 'Edm.String'>;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  vendorCashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  resultingPurchaseAgreementExpirationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isRfqAccepted?: NoYes | null;
  rfqBidType?: PurchRfqBidType | null;
  requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  requestingWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  multiLineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  rfqReplyUrlAddress?: DeserializedType<T, 'Edm.String'> | null;
  chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  orderingWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorReplySubmissionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  rfqScoreRank: DeserializedType<T, 'Edm.Int32'>;
  vendorEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  requestingDepartmentName?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  rfqName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  rfqSolicitationTypeName?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  arePricesIncludingSalesTax?: NoYes | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  isRfqBidInProgress?: NoYes | null;
  resultingPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  shipCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplateLegalEntityPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  overrideSalesTax?: NoYes | null;
  resultingPurchaseAgreementEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  vendorOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  highestRfqStatus?: PurchRfqStatus | null;
  vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  totalRfqScore: DeserializedType<T, 'Edm.Int32'>;
  rfqCaseTitle?: DeserializedType<T, 'Edm.String'> | null;
  lowestRfqStatus?: PurchRfqStatus | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  rfqCaseNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  rfqType?: PurchRfqType | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isRfqSealed?: NoYes | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  rfqExpirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorReasonComment?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  resultingPurchaseAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  contactPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  bidSubmittingPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
