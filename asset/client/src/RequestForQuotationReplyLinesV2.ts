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
import type { RequestForQuotationReplyLinesV2Api } from './RequestForQuotationReplyLinesV2Api';
import { PurchRfqStatus } from './PurchRfqStatus';
import { NoYes } from './NoYes';
import { PurchRfqLineItemType } from './PurchRfqLineItemType';
import { AssetTransTypePurch } from './AssetTransTypePurch';
import { Timezone } from './Timezone';
import { PurchRfqType } from './PurchRfqType';

/**
 * This class represents the entity "RequestForQuotationReplyLinesV2" of service "d365_metadata".
 */
export class RequestForQuotationReplyLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RequestForQuotationReplyLinesV2Type<T>
{
  /**
   * Technical entity name for RequestForQuotationReplyLinesV2.
   */
  static override _entityName = 'RequestForQuotationReplyLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RequestForQuotationReplyLinesV2 entity.
   */
  static _keys = ['dataAreaId', 'RFQNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Number.
   */
  declare rfqNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Vendor Reason Code.
   * @nullable
   */
  declare lineVendorReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resulting Purchase Order Number.
   * @nullable
   */
  declare resultingPurchaseOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Asset Value Model Id.
   * @nullable
   */
  declare assetValueModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Status.
   * @nullable
   */
  declare lineStatus?: PurchRfqStatus | null;
  /**
   * Rfq Reply Line Effective Date.
   */
  declare rfqReplyLineEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Procurement Lead Time Days.
   */
  declare procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Multiline Discount Amount.
   */
  declare multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rfq Case Planned Order Requirement Plan Id.
   * @nullable
   */
  declare rfqCasePlannedOrderRequirementPlanId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Name.
   * @nullable
   */
  declare itemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Planned Purchase Order Number.
   * @nullable
   */
  declare plannedPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Quantity.
   */
  declare purchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Rfq Line Accepted.
   * @nullable
   */
  declare isRfqLineAccepted?: NoYes | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rfq Reply Line Expiration Date.
   */
  declare rfqReplyLineExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Sales Price.
   */
  declare projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Vendor Reason Comment.
   * @nullable
   */
  declare lineVendorReasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template Legal Entity Party Number.
   * @nullable
   */
  declare accountingDistributionTemplateLegalEntityPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: PurchRfqLineItemType | null;
  /**
   * Multiline Discount Percentage.
   */
  declare multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Transaction Id.
   * @nullable
   */
  declare projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset Number.
   * @nullable
   */
  declare fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Sales Currency Code.
   * @nullable
   */
  declare projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Quantity.
   */
  declare requestedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fixed Asset Transaction Type.
   * @nullable
   */
  declare fixedAssetTransactionType?: AssetTransTypePurch | null;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catch Weight Quantity.
   */
  declare catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Is Rfq Reply Line Selected.
   * @nullable
   */
  declare isRfqReplyLineSelected?: NoYes | null;
  /**
   * Is Procurement Using Working Days.
   * @nullable
   */
  declare isProcurementUsingWorkingDays?: NoYes | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Case Line Line Number.
   */
  declare rfqCaseLineLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Project Sales Unit Symbol.
   * @nullable
   */
  declare projectSalesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Alternate Product.
   * @nullable
   */
  declare isAlternateProduct?: NoYes | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Delivery Date.
   */
  declare confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Line Property Id.
   * @nullable
   */
  declare projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Group Code.
   * @nullable
   */
  declare projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Item Group Code.
   * @nullable
   */
  declare projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address City In Kana.
   * @nullable
   */
  declare deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Rfq Purchase Order Type.
   * @nullable
   */
  declare defaultRfqPurchaseOrderType?: PurchRfqType | null;
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
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Accounting Distribution Template Name.
   * @nullable
   */
  declare accountingDistributionTemplateName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rfq Case Line Expiration Date Time.
   */
  declare rfqCaseLineExpirationDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template Legal Entity Id.
   * @nullable
   */
  declare accountingDistributionTemplateLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Resulting Purchase Agreement Id.
   * @nullable
   */
  declare resultingPurchaseAgreementId?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: RequestForQuotationReplyLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface RequestForQuotationReplyLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineVendorReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  resultingPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  assetValueModelId?: DeserializedType<T, 'Edm.String'> | null;
  lineStatus?: PurchRfqStatus | null;
  rfqReplyLineEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  rfqCasePlannedOrderRequirementPlanId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  plannedPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isRfqLineAccepted?: NoYes | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  rfqReplyLineExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  lineVendorReasonComment?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplateLegalEntityPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isDeliveryAddressPrivate?: NoYes | null;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: PurchRfqLineItemType | null;
  multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  requestedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetTransactionType?: AssetTransTypePurch | null;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  isRfqReplyLineSelected?: NoYes | null;
  isProcurementUsingWorkingDays?: NoYes | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  rfqCaseLineLineNumber: DeserializedType<T, 'Edm.Int64'>;
  deliveryAddressTimeZone?: Timezone | null;
  projectSalesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  isAlternateProduct?: NoYes | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultRfqPurchaseOrderType?: PurchRfqType | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  rfqCaseNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  accountingDistributionTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  rfqCaseLineExpirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplateLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  resultingPurchaseAgreementId?: DeserializedType<T, 'Edm.String'> | null;
}
