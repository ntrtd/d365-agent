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
import type { CdsPurchaseRequisitionLinesV2Api } from './CdsPurchaseRequisitionLinesV2Api';
import { PurchReqRequisitionStatus } from './PurchReqRequisitionStatus';
import { NoYes } from './NoYes';
import { PurchReqRfqRequirement } from './PurchReqRfqRequirement';
import { PurchReqLineType } from './PurchReqLineType';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "CDSPurchaseRequisitionLinesV2" of service "d365_metadata".
 */
export class CdsPurchaseRequisitionLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsPurchaseRequisitionLinesV2Type<T>
{
  /**
   * Technical entity name for CdsPurchaseRequisitionLinesV2.
   */
  static override _entityName = 'CDSPurchaseRequisitionLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsPurchaseRequisitionLinesV2 entity.
   */
  static _keys = ['RequisitionNumber', 'RequisitionLineNumber'];
  /**
   * Requisition Number.
   */
  declare requisitionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Requisition Line Number.
   */
  declare requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fixed Asset Rule Qualifier Option Name.
   * @nullable
   */
  declare fixedAssetRuleQualifierOptionName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Buying Legal Entity Id.
   * @nullable
   */
  declare buyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Justification Details.
   * @nullable
   */
  declare businessJustificationDetails?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Status.
   * @nullable
   */
  declare lineStatus?: PurchReqRequisitionStatus | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Prepayment Required.
   * @nullable
   */
  declare isPrepaymentRequired?: NoYes | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pre Payment Details.
   * @nullable
   */
  declare prePaymentDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requisitioner Personnel Number.
   * @nullable
   */
  declare requisitionerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Partial Delivery Prevented.
   * @nullable
   */
  declare isPartialDeliveryPrevented?: NoYes | null;
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
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Attention Information.
   * @nullable
   */
  declare deliveryAttentionInformation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Operating Unit Party Number.
   * @nullable
   */
  declare receivingOperatingUnitPartyNumber?: DeserializedType<
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
   * Delivery City In Kana.
   * @nullable
   */
  declare deliveryCityInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rfq Requirement Level.
   * @nullable
   */
  declare rfqRequirementLevel?: PurchReqRfqRequirement | null;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
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
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
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
  declare lineType?: PurchReqLineType | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Budget Reservation Document Number.
   * @nullable
   */
  declare budgetReservationDocumentNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Budget Reservation Line Number.
   */
  declare budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Date.
   */
  declare requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Street In Kana.
   * @nullable
   */
  declare deliveryStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Procurement Product Category Hierarchy Name.
   * @nullable
   */
  declare procurementProductCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Requested Purchase Quantity.
   */
  declare requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset Reason Code.
   * @nullable
   */
  declare fixedAssetReasonCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Business Justification Code.
   * @nullable
   */
  declare businessJustificationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
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
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Asset Group Id.
   * @nullable
   */
  declare fixedAssetGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accounting Distribution Template Name.
   * @nullable
   */
  declare accountingDistributionTemplateName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CdsPurchaseRequisitionLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface CdsPurchaseRequisitionLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  requisitionNumber: DeserializedType<T, 'Edm.String'>;
  requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>;
  fixedAssetRuleQualifierOptionName?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  buyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  businessJustificationDetails?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  lineStatus?: PurchReqRequisitionStatus | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  isPrepaymentRequired?: NoYes | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  prePaymentDetails?: DeserializedType<T, 'Edm.String'> | null;
  requisitionerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  isPartialDeliveryPrevented?: NoYes | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAttentionInformation?: DeserializedType<T, 'Edm.String'> | null;
  receivingOperatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  rfqRequirementLevel?: PurchReqRfqRequirement | null;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isDeliveryAddressPrivate?: NoYes | null;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: PurchReqLineType | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  budgetReservationDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  url?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  procurementProductCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressTimeZone?: Timezone | null;
  projectSalesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  businessJustificationCode?: DeserializedType<T, 'Edm.String'> | null;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  fixedAssetGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
}
