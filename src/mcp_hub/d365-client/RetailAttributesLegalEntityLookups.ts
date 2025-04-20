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
import type { RetailAttributesLegalEntityLookupsApi } from './RetailAttributesLegalEntityLookupsApi';
import { NoYes } from './NoYes';
import { Abc } from './Abc';
import { PdsVendorCheckItem } from './PdsVendorCheckItem';
import { RetailPriceKeyingRequirement } from './RetailPriceKeyingRequirement';
import { SalesPriceModelBasic } from './SalesPriceModelBasic';
import { RetailQtyKeyingRequirement } from './RetailQtyKeyingRequirement';
import { ItemNumAlternative } from './ItemNumAlternative';
import { SalesPriceModel } from './SalesPriceModel';

/**
 * This class represents the entity "RetailAttributesLegalEntityLookups" of service "d365_metadata".
 */
export class RetailAttributesLegalEntityLookups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailAttributesLegalEntityLookupsType<T>
{
  /**
   * Technical entity name for RetailAttributesLegalEntityLookups.
   */
  static override _entityName = 'RetailAttributesLegalEntityLookups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailAttributesLegalEntityLookups entity.
   */
  static _keys = ['CategoryHierarchyName', 'CategoryName', 'LegalEntity'];
  /**
   * Category Hierarchy Name.
   */
  declare categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Start Date.
   */
  declare salesStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Life From.
   */
  declare retailLifeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Bar Code Use Ean Standard.
   * @nullable
   */
  declare retailBarCodeUseEanStandard?: NoYes | null;
  /**
   * Sales Alt Invent Size Id.
   * @nullable
   */
  declare salesAltInventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Date Blocked.
   */
  declare retailDateBlocked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Multi Line Discount.
   * @nullable
   */
  declare salesMultiLineDiscount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Date To Activate Item.
   */
  declare retailDateToActivateItem: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inventory Underdelivery Pct.
   */
  declare inventoryUnderdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Underdelivery Pct.
   */
  declare salesUnderdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Price.
   */
  declare inventoryPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Site Id.
   * @nullable
   */
  declare siteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Comparison Unit Symbol.
   * @nullable
   */
  declare baseComparisonUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Percent Markup.
   */
  declare salesPercentMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Inter Company Blocked.
   * @nullable
   */
  declare salesInterCompanyBlocked?: NoYes | null;
  /**
   * Sales Alt Invent Color Id.
   * @nullable
   */
  declare salesAltInventColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Counting.
   * @nullable
   */
  declare groupCounting?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Weight.
   */
  declare netWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Buyer Group Id.
   * @nullable
   */
  declare itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Markup.
   */
  declare purchaseMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Vend Rebate Group Id.
   * @nullable
   */
  declare itemVendRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Markup.
   */
  declare inventoryMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Serial Num Group Id.
   * @nullable
   */
  declare serialNumGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Date To Be Blocked.
   */
  declare retailDateToBeBlocked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales End Date.
   */
  declare salesEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Total Discount.
   * @nullable
   */
  declare salesTotalDiscount?: NoYes | null;
  /**
   * Purchase Multi Line Disc.
   * @nullable
   */
  declare purchaseMultiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Item Group.
   * @nullable
   */
  declare groupItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Model.
   * @nullable
   */
  declare purchModel?: NoYes | null;
  /**
   * Sales Contribution Ratio.
   */
  declare salesContributionRatio: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Policy Number.
   * @nullable
   */
  declare returnPolicyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Installment Eligible.
   * @nullable
   */
  declare salesInstallmentEligible?: NoYes | null;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Allocate Markup.
   * @nullable
   */
  declare inventoryAllocateMarkup?: NoYes | null;
  /**
   * Sales Retail Inventory Availability Level Profile.
   * @nullable
   */
  declare salesRetailInventoryAvailabilityLevelProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tara Weight.
   */
  declare taraWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Abc Tie Up.
   * @nullable
   */
  declare abcTieUp?: Abc | null;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Model.
   * @nullable
   */
  declare costModel?: NoYes | null;
  /**
   * Inventory Price Unit.
   */
  declare inventoryPriceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Price Date.
   */
  declare purchasePriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Gross Depth.
   */
  declare grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Pds Pricing Precision.
   */
  declare purchasePdsPricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Supp Item Group Id.
   * @nullable
   */
  declare salesSuppItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Markup Quantity.
   */
  declare salesPriceMarkupQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Ftc Exempt.
   * @nullable
   */
  declare salesFtcExempt?: NoYes | null;
  /**
   * Sales Continuity Schedule Id.
   * @nullable
   */
  declare salesContinuityScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Price Date.
   */
  declare inventoryPriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Group Coverage.
   * @nullable
   */
  declare groupCoverage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price Sales.
   */
  declare unitPriceSales: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Warehouse.
   * @nullable
   */
  declare inventoryWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase End Disc.
   * @nullable
   */
  declare purchaseEndDisc?: NoYes | null;
  /**
   * Purchase Allocate Markup.
   * @nullable
   */
  declare purchaseAllocateMarkup?: NoYes | null;
  /**
   * Packaging Group Id.
   * @nullable
   */
  declare packagingGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Markup Group Id.
   * @nullable
   */
  declare purchaseMarkupGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Group Id.
   * @nullable
   */
  declare costGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Volume.
   */
  declare unitVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Underdelivery Pct.
   */
  declare purchaseUnderdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Supp Item Group Id.
   * @nullable
   */
  declare purchaseSuppItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Pos Must Key In Comment.
   * @nullable
   */
  declare retailPosMustKeyInComment?: NoYes | null;
  /**
   * Abc Value.
   * @nullable
   */
  declare abcValue?: Abc | null;
  /**
   * Replenishment Rule.
   * @nullable
   */
  declare replenishmentRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Pds Freight Allocation Group Id.
   * @nullable
   */
  declare salesPdsFreightAllocationGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pds Vendor Check Item.
   * @nullable
   */
  declare pdsVendorCheckItem?: PdsVendorCheckItem | null;
  /**
   * Sales Pds Item Rebate Group Id.
   * @nullable
   */
  declare salesPdsItemRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Inter Company Blocked.
   * @nullable
   */
  declare purchaseInterCompanyBlocked?: NoYes | null;
  /**
   * Sales Price Date.
   */
  declare salesPriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Line Disc.
   * @nullable
   */
  declare purchaseLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Inventory Model.
   * @nullable
   */
  declare groupInventoryModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Pos Keying In Price.
   * @nullable
   */
  declare retailPosKeyingInPrice?: RetailPriceKeyingRequirement | null;
  /**
   * Tax Packaging Qty.
   */
  declare taxPackagingQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Blocked At Register.
   * @nullable
   */
  declare retailBlockedAtRegister?: NoYes | null;
  /**
   * Retail Pos Disallow Discount.
   * @nullable
   */
  declare retailPosDisallowDiscount?: NoYes | null;
  /**
   * Sales Markup Group Id.
   * @nullable
   */
  declare salesMarkupGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Abc Revenue.
   * @nullable
   */
  declare abcRevenue?: Abc | null;
  /**
   * Wms Arrival Handling Time.
   */
  declare wmsArrivalHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Pos Disallow Manual Discount.
   * @nullable
   */
  declare retailPosDisallowManualDiscount?: NoYes | null;
  /**
   * Sales Price Markup.
   */
  declare salesPriceMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Price Tolerance Group Id.
   * @nullable
   */
  declare itemPriceToleranceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Warehouse.
   * @nullable
   */
  declare salesWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Pos Allow Negative Quantity.
   * @nullable
   */
  declare retailPosAllowNegativeQuantity?: NoYes | null;
  /**
   * Sales Base Price Model.
   * @nullable
   */
  declare salesBasePriceModel?: SalesPriceModelBasic | null;
  /**
   * Sales Alt Item Id.
   * @nullable
   */
  declare salesAltItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Code.
   */
  declare sortCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Alt Config Id.
   * @nullable
   */
  declare salesAltConfigId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Price Qty.
   */
  declare inventoryPriceQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Life To.
   */
  declare retailLifeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Gross Width.
   */
  declare grossWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Warehouse.
   * @nullable
   */
  declare purchaseWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Allow Price Adjust.
   * @nullable
   */
  declare salesAllowPriceAdjust?: NoYes | null;
  /**
   * Reservation Hierarchy Name.
   * @nullable
   */
  declare reservationHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Legal Entity.
   * @nullable
   */
  declare itemLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Abc Contribution Margin.
   * @nullable
   */
  declare abcContributionMargin?: Abc | null;
  /**
   * Item Sales Tax Group Sales.
   * @nullable
   */
  declare itemSalesTaxGroupSales?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Shelf Label.
   * @nullable
   */
  declare reportShelfLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Overdelivery Pct.
   */
  declare salesOverdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Print Variants Shelf Labels.
   * @nullable
   */
  declare retailPrintVariantsShelfLabels?: NoYes | null;
  /**
   * Sales Commision Group Id.
   * @nullable
   */
  declare salesCommisionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Num Group Id.
   * @nullable
   */
  declare batchNumGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Pos Is Zero Price Valid.
   * @nullable
   */
  declare retailPosIsZeroPriceValid?: NoYes | null;
  /**
   * Purchase Overdelivery Pct.
   */
  declare purchaseOverdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Report Item Label.
   * @nullable
   */
  declare reportItemLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Pos Is Scale Item.
   * @nullable
   */
  declare retailPosIsScaleItem?: NoYes | null;
  /**
   * Primary Vendor Id.
   * @nullable
   */
  declare primaryVendorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Of Materials Unit Symbol.
   * @nullable
   */
  declare billOfMaterialsUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Season Code.
   * @nullable
   */
  declare retailSeasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Overdelivery Pct.
   */
  declare inventoryOverdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Line Discount.
   * @nullable
   */
  declare salesLineDiscount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bar Code Setup.
   * @nullable
   */
  declare barCodeSetup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Retail Inventory Availability Buffer.
   */
  declare salesRetailInventoryAvailabilityBuffer: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Sales Alt Invent Style Id.
   * @nullable
   */
  declare salesAltInventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Allocate Markup.
   * @nullable
   */
  declare salesAllocateMarkup?: NoYes | null;
  /**
   * Sales Pds Pricing Precision.
   */
  declare salesPdsPricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Pos Keying In Quantity.
   * @nullable
   */
  declare retailPosKeyingInQuantity?: RetailQtyKeyingRequirement | null;
  /**
   * Sales Use Alt Item Id.
   * @nullable
   */
  declare salesUseAltItemId?: ItemNumAlternative | null;
  /**
   * Item Sales Tax Group Purchase.
   * @nullable
   */
  declare itemSalesTaxGroupPurchase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price Qty.
   */
  declare purchasePriceQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price Model.
   * @nullable
   */
  declare salesPriceModel?: SalesPriceModel | null;
  /**
   * Gross Height.
   */
  declare grossHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailAttributesLegalEntityLookupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailAttributesLegalEntityLookupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  salesStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailLifeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailBarCodeUseEanStandard?: NoYes | null;
  salesAltInventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  retailDateBlocked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesMultiLineDiscount?: DeserializedType<T, 'Edm.String'> | null;
  retailDateToActivateItem: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventoryUnderdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  salesUnderdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  inventoryPrice: DeserializedType<T, 'Edm.Decimal'>;
  siteId?: DeserializedType<T, 'Edm.String'> | null;
  baseComparisonUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  salesPercentMarkup: DeserializedType<T, 'Edm.Decimal'>;
  salesInterCompanyBlocked?: NoYes | null;
  salesAltInventColorId?: DeserializedType<T, 'Edm.String'> | null;
  groupCounting?: DeserializedType<T, 'Edm.String'> | null;
  netWeight: DeserializedType<T, 'Edm.Decimal'>;
  itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseMarkup: DeserializedType<T, 'Edm.Decimal'>;
  itemVendRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryMarkup: DeserializedType<T, 'Edm.Decimal'>;
  serialNumGroupId?: DeserializedType<T, 'Edm.String'> | null;
  retailDateToBeBlocked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesTotalDiscount?: NoYes | null;
  purchaseMultiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  groupItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  purchModel?: NoYes | null;
  salesContributionRatio: DeserializedType<T, 'Edm.Decimal'>;
  returnPolicyNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesInstallmentEligible?: NoYes | null;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  inventoryAllocateMarkup?: NoYes | null;
  salesRetailInventoryAvailabilityLevelProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taraWeight: DeserializedType<T, 'Edm.Decimal'>;
  abcTieUp?: Abc | null;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  costModel?: NoYes | null;
  inventoryPriceUnit: DeserializedType<T, 'Edm.Decimal'>;
  purchasePriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  purchasePdsPricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  salesSuppItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceMarkupQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesFtcExempt?: NoYes | null;
  salesContinuityScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryPriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  groupCoverage?: DeserializedType<T, 'Edm.String'> | null;
  unitPriceSales: DeserializedType<T, 'Edm.Decimal'>;
  inventoryWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  purchaseEndDisc?: NoYes | null;
  purchaseAllocateMarkup?: NoYes | null;
  packagingGroupId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseMarkupGroupId?: DeserializedType<T, 'Edm.String'> | null;
  costGroupId?: DeserializedType<T, 'Edm.String'> | null;
  unitVolume: DeserializedType<T, 'Edm.Decimal'>;
  purchaseUnderdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  purchaseSuppItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  retailPosMustKeyInComment?: NoYes | null;
  abcValue?: Abc | null;
  replenishmentRule?: DeserializedType<T, 'Edm.String'> | null;
  salesPdsFreightAllocationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  pdsVendorCheckItem?: PdsVendorCheckItem | null;
  salesPdsItemRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseInterCompanyBlocked?: NoYes | null;
  salesPriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  groupInventoryModel?: DeserializedType<T, 'Edm.String'> | null;
  retailPosKeyingInPrice?: RetailPriceKeyingRequirement | null;
  taxPackagingQty: DeserializedType<T, 'Edm.Decimal'>;
  retailBlockedAtRegister?: NoYes | null;
  retailPosDisallowDiscount?: NoYes | null;
  salesMarkupGroupId?: DeserializedType<T, 'Edm.String'> | null;
  abcRevenue?: Abc | null;
  wmsArrivalHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  retailPosDisallowManualDiscount?: NoYes | null;
  salesPriceMarkup: DeserializedType<T, 'Edm.Decimal'>;
  itemPriceToleranceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  salesWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  retailPosAllowNegativeQuantity?: NoYes | null;
  salesBasePriceModel?: SalesPriceModelBasic | null;
  salesAltItemId?: DeserializedType<T, 'Edm.String'> | null;
  sortCode: DeserializedType<T, 'Edm.Int32'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesAltConfigId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryPriceQty: DeserializedType<T, 'Edm.Decimal'>;
  retailLifeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  grossWidth: DeserializedType<T, 'Edm.Decimal'>;
  purchaseWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  salesAllowPriceAdjust?: NoYes | null;
  reservationHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  itemLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  abcContributionMargin?: Abc | null;
  itemSalesTaxGroupSales?: DeserializedType<T, 'Edm.String'> | null;
  reportShelfLabel?: DeserializedType<T, 'Edm.String'> | null;
  salesOverdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  retailPrintVariantsShelfLabels?: NoYes | null;
  salesCommisionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  batchNumGroupId?: DeserializedType<T, 'Edm.String'> | null;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  retailPosIsZeroPriceValid?: NoYes | null;
  purchaseOverdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  reportItemLabel?: DeserializedType<T, 'Edm.String'> | null;
  retailPosIsScaleItem?: NoYes | null;
  primaryVendorId?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialsUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  retailSeasonCode?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOverdeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  salesLineDiscount?: DeserializedType<T, 'Edm.String'> | null;
  barCodeSetup?: DeserializedType<T, 'Edm.String'> | null;
  salesRetailInventoryAvailabilityBuffer: DeserializedType<T, 'Edm.Decimal'>;
  salesAltInventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  salesAllocateMarkup?: NoYes | null;
  salesPdsPricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  retailPosKeyingInQuantity?: RetailQtyKeyingRequirement | null;
  salesUseAltItemId?: ItemNumAlternative | null;
  itemSalesTaxGroupPurchase?: DeserializedType<T, 'Edm.String'> | null;
  purchasePriceQty: DeserializedType<T, 'Edm.Decimal'>;
  salesPriceModel?: SalesPriceModel | null;
  grossHeight: DeserializedType<T, 'Edm.Decimal'>;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
}
