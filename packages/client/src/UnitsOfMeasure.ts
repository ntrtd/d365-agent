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
import type { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { UnitOfMeasureCodeSymbol } from './UnitOfMeasureCodeSymbol';
import { UnitOfMeasureClass } from './UnitOfMeasureClass';
import { NoYes } from './NoYes';
import { UnitOfMeasureSystemOfUnits } from './UnitOfMeasureSystemOfUnits';
import {
  SupplyForecastEntries,
  SupplyForecastEntriesType
} from './SupplyForecastEntries';
import {
  PhysicalProductDimensionDetails,
  PhysicalProductDimensionDetailsType
} from './PhysicalProductDimensionDetails';
import {
  BundleSalesOrderConfirmationBundleParentLines,
  BundleSalesOrderConfirmationBundleParentLinesType
} from './BundleSalesOrderConfirmationBundleParentLines';
import {
  PurchaseAgreementConfirmationLines,
  PurchaseAgreementConfirmationLinesType
} from './PurchaseAgreementConfirmationLines';
import {
  RetailInternalOrganizationProductAttributeValues2,
  RetailInternalOrganizationProductAttributeValues2Type
} from './RetailInternalOrganizationProductAttributeValues2';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  BundleSalesInvoiceLines,
  BundleSalesInvoiceLinesType
} from './BundleSalesInvoiceLines';
import {
  UnitOfMeasureTranslations,
  UnitOfMeasureTranslationsType
} from './UnitOfMeasureTranslations';
import {
  ProductUnitOfMeasureConversions,
  ProductUnitOfMeasureConversionsType
} from './ProductUnitOfMeasureConversions';
import {
  OutboundShipmentOrderLines,
  OutboundShipmentOrderLinesType
} from './OutboundShipmentOrderLines';
import {
  TradeAllowanceAgreementMerchandisingEventBillBackLines,
  TradeAllowanceAgreementMerchandisingEventBillBackLinesType
} from './TradeAllowanceAgreementMerchandisingEventBillBackLines';
import {
  SalesAgreementConfirmationLines,
  SalesAgreementConfirmationLinesType
} from './SalesAgreementConfirmationLines';
import {
  SalesAgreementLines,
  SalesAgreementLinesType
} from './SalesAgreementLines';
import {
  PeriodChargeRuleLineCustomers,
  PeriodChargeRuleLineCustomersType
} from './PeriodChargeRuleLineCustomers';
import {
  BundleSalesInvoiceBundleParentLines,
  BundleSalesInvoiceBundleParentLinesType
} from './BundleSalesInvoiceBundleParentLines';
import {
  PurchaseAgreementLines,
  PurchaseAgreementLinesType
} from './PurchaseAgreementLines';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  ClmIntegrationPurchaseAgreementLines,
  ClmIntegrationPurchaseAgreementLinesType
} from './ClmIntegrationPurchaseAgreementLines';
import {
  DvReleasedProducts,
  DvReleasedProductsType
} from './DvReleasedProducts';
import {
  TradeAllowanceAgreementMerchandisingEventProducts,
  TradeAllowanceAgreementMerchandisingEventProductsType
} from './TradeAllowanceAgreementMerchandisingEventProducts';
import {
  WarehouseReplenishmentTemplateUnitOfMeasureRestrictions,
  WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsType
} from './WarehouseReplenishmentTemplateUnitOfMeasureRestrictions';
import {
  TradeAllowanceAgreementHeaders,
  TradeAllowanceAgreementHeadersType
} from './TradeAllowanceAgreementHeaders';
import {
  BundleSalesOrderConfirmationLines,
  BundleSalesOrderConfirmationLinesType
} from './BundleSalesOrderConfirmationLines';
import {
  RetailCatalogInternalOrganizationProductAttributeValues2,
  RetailCatalogInternalOrganizationProductAttributeValues2Type
} from './RetailCatalogInternalOrganizationProductAttributeValues2';
import {
  TradeAllowanceAgreementMerchandisingEventProductsV2,
  TradeAllowanceAgreementMerchandisingEventProductsV2Type
} from './TradeAllowanceAgreementMerchandisingEventProductsV2';
import {
  ServiceAgreementLines,
  ServiceAgreementLinesType
} from './ServiceAgreementLines';
import {
  TradeAllowanceAgreementProductsV2,
  TradeAllowanceAgreementProductsV2Type
} from './TradeAllowanceAgreementProductsV2';
import {
  TradeAllowanceAgreementProducts,
  TradeAllowanceAgreementProductsType
} from './TradeAllowanceAgreementProducts';
import {
  ClmIntegrationReleasedProducts,
  ClmIntegrationReleasedProductsType
} from './ClmIntegrationReleasedProducts';
import {
  InboundShipmentOrderLines,
  InboundShipmentOrderLinesType
} from './InboundShipmentOrderLines';
import {
  RebateAndDeductionsAgreementDateSetupCriterionItems,
  RebateAndDeductionsAgreementDateSetupCriterionItemsType
} from './RebateAndDeductionsAgreementDateSetupCriterionItems';

/**
 * This class represents the entity "UnitsOfMeasure" of service "d365_metadata".
 */
export class UnitsOfMeasure<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UnitsOfMeasureType<T>
{
  /**
   * Technical entity name for UnitsOfMeasure.
   */
  static override _entityName = 'UnitsOfMeasure';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UnitsOfMeasure entity.
   */
  static _keys = ['UnitSymbol'];
  /**
   * Unit Symbol.
   */
  declare unitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Unit Symbol Assignment.
   * @nullable
   */
  declare fixedUnitSymbolAssignment?: UnitOfMeasureCodeSymbol | null;
  /**
   * Unit Class.
   * @nullable
   */
  declare unitClass?: UnitOfMeasureClass | null;
  /**
   * Is Base Unit.
   * @nullable
   */
  declare isBaseUnit?: NoYes | null;
  /**
   * Decimal Precision.
   */
  declare decimalPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is System Unit.
   * @nullable
   */
  declare isSystemUnit?: NoYes | null;
  /**
   * Is Fixed Unit Symbol Assigned.
   * @nullable
   */
  declare isFixedUnitSymbolAssigned?: NoYes | null;
  /**
   * Unit Description.
   * @nullable
   */
  declare unitDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Of Units.
   * @nullable
   */
  declare systemOfUnits?: UnitOfMeasureSystemOfUnits | null;
  /**
   * National Code.
   * @nullable
   */
  declare nationalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SupplyForecastEntries} entity.
   */
  declare supplyForecastEntries: SupplyForecastEntries<T>[];
  /**
   * One-to-many navigation property to the {@link PhysicalProductDimensionDetails} entity.
   */
  declare physicalProductDimensionDetails: PhysicalProductDimensionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link PhysicalProductDimensionDetails} entity.
   */
  declare volumeAssigningPhysicalProductDimensionDetails: PhysicalProductDimensionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link PhysicalProductDimensionDetails} entity.
   */
  declare massAssigningPhysicalProductDimensionDetails: PhysicalProductDimensionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link PhysicalProductDimensionDetails} entity.
   */
  declare lengthAssigningPhysicalProductDimensionDetails: PhysicalProductDimensionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationBundleParentLines} entity.
   */
  declare bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementConfirmationLines} entity.
   */
  declare purchaseAgreementLinesV2: PurchaseAgreementConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailInternalOrganizationProductAttributeValues2} entity.
   */
  declare retailInternalOrganizationProductAttributeValue2: RetailInternalOrganizationProductAttributeValues2<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceLines} entity.
   */
  declare bundleSalesInvoiceLines: BundleSalesInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link UnitOfMeasureTranslations} entity.
   */
  declare unitOfMeasureTranslations: UnitOfMeasureTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link ProductUnitOfMeasureConversions} entity.
   */
  declare fromUnitOfMeasureConversions: ProductUnitOfMeasureConversions<T>[];
  /**
   * One-to-many navigation property to the {@link ProductUnitOfMeasureConversions} entity.
   */
  declare toUnitOfMeasureConversions: ProductUnitOfMeasureConversions<T>[];
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderLines} entity.
   */
  declare outboundShipmentOrderLines: OutboundShipmentOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventBillBackLines} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventBillBackLines: TradeAllowanceAgreementMerchandisingEventBillBackLines<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmationLines} entity.
   */
  declare salesAgreementConfirmationLines: SalesAgreementConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementLines} entity.
   */
  declare salesAgreementLines: SalesAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link PeriodChargeRuleLineCustomers} entity.
   */
  declare periodChargeRuleLineCustomers: PeriodChargeRuleLineCustomers<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceBundleParentLines} entity.
   */
  declare bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementLines} entity.
   */
  declare purchaseAgreementLine: PurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreementLines} entity.
   */
  declare clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link DvReleasedProducts} entity.
   */
  declare dvReleasedProducts: DvReleasedProducts<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventProducts} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventProducts: TradeAllowanceAgreementMerchandisingEventProducts<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseReplenishmentTemplateUnitOfMeasureRestrictions} entity.
   */
  declare warehouseReplenishmentTemplateUnitOfMeasureRestrictions: WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementHeaders} entity.
   */
  declare tradeAllowanceAgreementHeaders: TradeAllowanceAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationLines} entity.
   */
  declare bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogInternalOrganizationProductAttributeValues2} entity.
   */
  declare retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventProductsV2} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventProductsV2: TradeAllowanceAgreementMerchandisingEventProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementLines} entity.
   */
  declare serviceAgreementLines: ServiceAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementProductsV2} entity.
   */
  declare tradeAllowanceAgreementProductsV2: TradeAllowanceAgreementProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementProducts} entity.
   */
  declare tradeAllowanceAgreementProducts: TradeAllowanceAgreementProducts<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationReleasedProducts} entity.
   */
  declare clmIntegrationReleasedProducts: ClmIntegrationReleasedProducts<T>[];
  /**
   * One-to-many navigation property to the {@link InboundShipmentOrderLines} entity.
   */
  declare inboundShipmentOrderLines: InboundShipmentOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionsAgreementDateSetupCriterionItems} entity.
   */
  declare rebateAndDeductionsAgreementHeaderDateSetupCriterionItems: RebateAndDeductionsAgreementDateSetupCriterionItems<T>[];

  constructor(_entityApi: UnitsOfMeasureApi<T>) {
    super(_entityApi);
  }
}

export interface UnitsOfMeasureType<
  T extends DeSerializers = DefaultDeSerializers
> {
  unitSymbol: DeserializedType<T, 'Edm.String'>;
  fixedUnitSymbolAssignment?: UnitOfMeasureCodeSymbol | null;
  unitClass?: UnitOfMeasureClass | null;
  isBaseUnit?: NoYes | null;
  decimalPrecision: DeserializedType<T, 'Edm.Int32'>;
  isSystemUnit?: NoYes | null;
  isFixedUnitSymbolAssigned?: NoYes | null;
  unitDescription?: DeserializedType<T, 'Edm.String'> | null;
  systemOfUnits?: UnitOfMeasureSystemOfUnits | null;
  nationalCode?: DeserializedType<T, 'Edm.String'> | null;
  supplyForecastEntries: SupplyForecastEntriesType<T>[];
  physicalProductDimensionDetails: PhysicalProductDimensionDetailsType<T>[];
  volumeAssigningPhysicalProductDimensionDetails: PhysicalProductDimensionDetailsType<T>[];
  massAssigningPhysicalProductDimensionDetails: PhysicalProductDimensionDetailsType<T>[];
  lengthAssigningPhysicalProductDimensionDetails: PhysicalProductDimensionDetailsType<T>[];
  bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLinesType<T>[];
  purchaseAgreementLinesV2: PurchaseAgreementConfirmationLinesType<T>[];
  retailInternalOrganizationProductAttributeValue2: RetailInternalOrganizationProductAttributeValues2Type<T>[];
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  bundleSalesInvoiceLines: BundleSalesInvoiceLinesType<T>[];
  unitOfMeasureTranslations: UnitOfMeasureTranslationsType<T>[];
  fromUnitOfMeasureConversions: ProductUnitOfMeasureConversionsType<T>[];
  toUnitOfMeasureConversions: ProductUnitOfMeasureConversionsType<T>[];
  outboundShipmentOrderLines: OutboundShipmentOrderLinesType<T>[];
  tradeAllowanceAgreementMerchandisingEventBillBackLines: TradeAllowanceAgreementMerchandisingEventBillBackLinesType<T>[];
  salesAgreementConfirmationLines: SalesAgreementConfirmationLinesType<T>[];
  salesAgreementLines: SalesAgreementLinesType<T>[];
  periodChargeRuleLineCustomers: PeriodChargeRuleLineCustomersType<T>[];
  bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLinesType<T>[];
  purchaseAgreementLine: PurchaseAgreementLinesType<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLinesType<T>[];
  dvReleasedProducts: DvReleasedProductsType<T>[];
  tradeAllowanceAgreementMerchandisingEventProducts: TradeAllowanceAgreementMerchandisingEventProductsType<T>[];
  warehouseReplenishmentTemplateUnitOfMeasureRestrictions: WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsType<T>[];
  tradeAllowanceAgreementHeaders: TradeAllowanceAgreementHeadersType<T>[];
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
  retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2Type<T>[];
  tradeAllowanceAgreementMerchandisingEventProductsV2: TradeAllowanceAgreementMerchandisingEventProductsV2Type<T>[];
  serviceAgreementLines: ServiceAgreementLinesType<T>[];
  tradeAllowanceAgreementProductsV2: TradeAllowanceAgreementProductsV2Type<T>[];
  tradeAllowanceAgreementProducts: TradeAllowanceAgreementProductsType<T>[];
  clmIntegrationReleasedProducts: ClmIntegrationReleasedProductsType<T>[];
  inboundShipmentOrderLines: InboundShipmentOrderLinesType<T>[];
  rebateAndDeductionsAgreementHeaderDateSetupCriterionItems: RebateAndDeductionsAgreementDateSetupCriterionItemsType<T>[];
}
