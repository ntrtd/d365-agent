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
import type { PurchaseRequisitionLinesV2Api } from './PurchaseRequisitionLinesV2Api';
import { PurchReqRequisitionStatus } from './PurchReqRequisitionStatus';
import { NoYes } from './NoYes';
import { PurchReqLineType } from './PurchReqLineType';
import { PurchReqRfqRequirement } from './PurchReqRfqRequirement';
import { Timezone } from './Timezone';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { Projects, ProjectsType } from './Projects';
import {
  PurchaseRequisitionHeaders,
  PurchaseRequisitionHeadersType
} from './PurchaseRequisitionHeaders';

/**
 * This class represents the entity "PurchaseRequisitionLinesV2" of service "d365_metadata".
 */
export class PurchaseRequisitionLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseRequisitionLinesV2Type<T>
{
  /**
   * Technical entity name for PurchaseRequisitionLinesV2.
   */
  static override _entityName = 'PurchaseRequisitionLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseRequisitionLinesV2 entity.
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
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Sales Unit Symbol.
   * @nullable
   */
  declare projectSalesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Status.
   * @nullable
   */
  declare lineStatus?: PurchReqRequisitionStatus | null;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template Name.
   * @nullable
   */
  declare accountingDistributionTemplateName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Buying Legal Entity Id.
   * @nullable
   */
  declare buyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery City In Kana.
   * @nullable
   */
  declare deliveryCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Street In Kana.
   * @nullable
   */
  declare deliveryStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Partial Delivery Prevented.
   * @nullable
   */
  declare isPartialDeliveryPrevented?: NoYes | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * Business Justification Details.
   * @nullable
   */
  declare businessJustificationDetails?: DeserializedType<
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
   * Project Line Property Id.
   * @nullable
   */
  declare projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requisitioner Personnel Number.
   * @nullable
   */
  declare requisitionerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Reservation Line Number.
   */
  declare budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: PurchReqLineType | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Fixed Asset Rule Qualifier Option Name.
   * @nullable
   */
  declare fixedAssetRuleQualifierOptionName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Attention Information.
   * @nullable
   */
  declare deliveryAttentionInformation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Project Sales Currency Code.
   * @nullable
   */
  declare projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Operating Unit Number.
   * @nullable
   */
  declare receivingOperatingUnitNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Prepayment Required.
   * @nullable
   */
  declare isPrepaymentRequired?: NoYes | null;
  /**
   * Pre Payment Details.
   * @nullable
   */
  declare prePaymentDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Requirement Level.
   * @nullable
   */
  declare rfqRequirementLevel?: PurchReqRfqRequirement | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
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
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Date.
   */
  declare requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Business Justification Code.
   * @nullable
   */
  declare businessJustificationCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Budget Reservation Document Number.
   * @nullable
   */
  declare budgetReservationDocumentNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Asset Reason Code.
   * @nullable
   */
  declare fixedAssetReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Sales Price.
   */
  declare projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Purchase Quantity.
   */
  declare requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseRequisitionHeaders} entity.
   */
  declare purchaseRequisitionHeader?: PurchaseRequisitionHeaders<T> | null;

  constructor(_entityApi: PurchaseRequisitionLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface PurchaseRequisitionLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  requisitionNumber: DeserializedType<T, 'Edm.String'>;
  requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  projectSalesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  lineStatus?: PurchReqRequisitionStatus | null;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  buyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  isPartialDeliveryPrevented?: NoYes | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  businessJustificationDetails?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  requisitionerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: PurchReqLineType | null;
  isDeliveryAddressPrivate?: NoYes | null;
  fixedAssetRuleQualifierOptionName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAttentionInformation?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  receivingOperatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  isPrepaymentRequired?: NoYes | null;
  prePaymentDetails?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  rfqRequirementLevel?: PurchReqRfqRequirement | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  businessJustificationCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  fixedAssetGroupId?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  budgetReservationDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  fixedAssetReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  project?: ProjectsType<T> | null;
  purchaseRequisitionHeader?: PurchaseRequisitionHeadersType<T> | null;
}
