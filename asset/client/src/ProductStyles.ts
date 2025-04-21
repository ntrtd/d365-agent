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
import type { ProductStylesApi } from './ProductStylesApi';
import {
  RouteCardProductionJournalEntries,
  RouteCardProductionJournalEntriesType
} from './RouteCardProductionJournalEntries';
import {
  ProductAllocationLines,
  ProductAllocationLinesType
} from './ProductAllocationLines';
import {
  ReleasedProductVariantExternalCodes,
  ReleasedProductVariantExternalCodesType
} from './ReleasedProductVariantExternalCodes';
import {
  ProductSpecificOrderSettingsV3,
  ProductSpecificOrderSettingsV3Type
} from './ProductSpecificOrderSettingsV3';
import {
  BundleSalesOrderConfirmationBundleParentLines,
  BundleSalesOrderConfirmationBundleParentLinesType
} from './BundleSalesOrderConfirmationBundleParentLines';
import {
  CycleCountingWarehouseWorkLinesV2,
  CycleCountingWarehouseWorkLinesV2Type
} from './CycleCountingWarehouseWorkLinesV2';
import {
  ProductSpecificOrderSettingsV2,
  ProductSpecificOrderSettingsV2Type
} from './ProductSpecificOrderSettingsV2';
import {
  ItemArrivalJournalLinesV2,
  ItemArrivalJournalLinesV2Type
} from './ItemArrivalJournalLinesV2';
import {
  JobCardProductionJournalEntries,
  JobCardProductionJournalEntriesType
} from './JobCardProductionJournalEntries';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  ProductMasterStyles,
  ProductMasterStylesType
} from './ProductMasterStyles';
import {
  BundleSalesInvoiceLines,
  BundleSalesInvoiceLinesType
} from './BundleSalesInvoiceLines';
import { CatchWeightTags, CatchWeightTagsType } from './CatchWeightTags';
import {
  InventoryTagCountingJournalLines,
  InventoryTagCountingJournalLinesType
} from './InventoryTagCountingJournalLines';
import {
  ProductionPickingListJournalEntries,
  ProductionPickingListJournalEntriesType
} from './ProductionPickingListJournalEntries';
import {
  BillOfMaterialsVersionsV3,
  BillOfMaterialsVersionsV3Type
} from './BillOfMaterialsVersionsV3';
import {
  ProductStyleGroupLines,
  ProductStyleGroupLinesType
} from './ProductStyleGroupLines';
import { ProductBarcodes, ProductBarcodesType } from './ProductBarcodes';
import {
  BundleSalesInvoiceBundleParentLines,
  BundleSalesInvoiceBundleParentLinesType
} from './BundleSalesInvoiceBundleParentLines';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  ProductBarcodeAssociations,
  ProductBarcodeAssociationsType
} from './ProductBarcodeAssociations';
import {
  MonthlyCostStatementEntries,
  MonthlyCostStatementEntriesType
} from './MonthlyCostStatementEntries';
import {
  AssetMaintenanceAssetBillOfMaterialsV2,
  AssetMaintenanceAssetBillOfMaterialsV2Type
} from './AssetMaintenanceAssetBillOfMaterialsV2';
import {
  CdsReleasedDistinctProducts,
  CdsReleasedDistinctProductsType
} from './CdsReleasedDistinctProducts';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  ReleasedEngineeringProductVersions,
  ReleasedEngineeringProductVersionsType
} from './ReleasedEngineeringProductVersions';
import {
  AssetMaintenanceReleasedProducts,
  AssetMaintenanceReleasedProductsType
} from './AssetMaintenanceReleasedProducts';
import {
  AssetMaintenanceWorkOrderLineProductJournals,
  AssetMaintenanceWorkOrderLineProductJournalsType
} from './AssetMaintenanceWorkOrderLineProductJournals';
import { FormulaVersions, FormulaVersionsType } from './FormulaVersions';
import {
  CycleCountingWarehouseWorkLinesV3,
  CycleCountingWarehouseWorkLinesV3Type
} from './CycleCountingWarehouseWorkLinesV3';
import {
  BundleSalesOrderConfirmationLines,
  BundleSalesOrderConfirmationLinesType
} from './BundleSalesOrderConfirmationLines';
import { ProductBarcodesV3, ProductBarcodesV3Type } from './ProductBarcodesV3';
import {
  BillOfMaterialsVersionsV2,
  BillOfMaterialsVersionsV2Type
} from './BillOfMaterialsVersionsV2';
import {
  OrderCommittedLicensePlateReservations,
  OrderCommittedLicensePlateReservationsType
} from './OrderCommittedLicensePlateReservations';
import {
  DvReleasedDistinctProducts,
  DvReleasedDistinctProductsType
} from './DvReleasedDistinctProducts';
import {
  BillOfMaterialsVersionsV4,
  BillOfMaterialsVersionsV4Type
} from './BillOfMaterialsVersionsV4';
import {
  ProductAllocationLinesV2,
  ProductAllocationLinesV2Type
} from './ProductAllocationLinesV2';
import {
  CycleCountingWarehouseWorkLines,
  CycleCountingWarehouseWorkLinesType
} from './CycleCountingWarehouseWorkLines';
import {
  ReportAsFinishedProductionJournalEntries,
  ReportAsFinishedProductionJournalEntriesType
} from './ReportAsFinishedProductionJournalEntries';
import {
  RebateAndDeductionsAgreementDateSetupCriterionItems,
  RebateAndDeductionsAgreementDateSetupCriterionItemsType
} from './RebateAndDeductionsAgreementDateSetupCriterionItems';
import {
  ReleasedProductVariantExternalCodesV2,
  ReleasedProductVariantExternalCodesV2Type
} from './ReleasedProductVariantExternalCodesV2';

/**
 * This class represents the entity "ProductStyles" of service "d365_metadata".
 */
export class ProductStyles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductStylesType<T>
{
  /**
   * Technical entity name for ProductStyles.
   */
  static override _entityName = 'ProductStyles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductStyles entity.
   */
  static _keys = ['StyleId'];
  /**
   * Style Id.
   */
  declare styleId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link RouteCardProductionJournalEntries} entity.
   */
  declare routeCardProductionJournalEntries: RouteCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ProductAllocationLines} entity.
   */
  declare productAllocationLines: ProductAllocationLines<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariantExternalCodes} entity.
   */
  declare releasedProductVariantExternalCodes: ReleasedProductVariantExternalCodes<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSpecificOrderSettingsV3} entity.
   */
  declare productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationBundleParentLines} entity.
   */
  declare bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLinesV2} entity.
   */
  declare cycleCountingWarehouseWorkLinesV2: CycleCountingWarehouseWorkLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSpecificOrderSettingsV2} entity.
   */
  declare productSpecificOrderSettingsV2: ProductSpecificOrderSettingsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalLinesV2} entity.
   */
  declare itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link JobCardProductionJournalEntries} entity.
   */
  declare jobCardProductionJournalEntries: JobCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterStyles} entity.
   */
  declare productMasterStyles: ProductMasterStyles<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceLines} entity.
   */
  declare bundleSalesInvoiceLines: BundleSalesInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link CatchWeightTags} entity.
   */
  declare catchWeightTags: CatchWeightTags<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryTagCountingJournalLines} entity.
   */
  declare inventoryTagCountingJournalLines: InventoryTagCountingJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionPickingListJournalEntries} entity.
   */
  declare productionPickingListJournalEntries: ProductionPickingListJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV3} entity.
   */
  declare billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3<T>[];
  /**
   * One-to-many navigation property to the {@link ProductStyleGroupLines} entity.
   */
  declare productStyleGroupLines: ProductStyleGroupLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductBarcodes} entity.
   */
  declare productBarcodes: ProductBarcodes<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceBundleParentLines} entity.
   */
  declare bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ProductBarcodeAssociations} entity.
   */
  declare productBarcodesV2: ProductBarcodeAssociations<T>[];
  /**
   * One-to-many navigation property to the {@link MonthlyCostStatementEntries} entity.
   */
  declare costMontlyStatementEntries: MonthlyCostStatementEntries<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetBillOfMaterialsV2} entity.
   */
  declare maintenanceAssetBillOfMaterialsProductStyle: AssetMaintenanceAssetBillOfMaterialsV2<T>[];
  /**
   * One-to-many navigation property to the {@link CdsReleasedDistinctProducts} entity.
   */
  declare cdsReleasedDistinctProducts: CdsReleasedDistinctProducts<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedEngineeringProductVersions} entity.
   */
  declare releasedEngineeringProductVersions: ReleasedEngineeringProductVersions<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceReleasedProducts} entity.
   */
  declare entAssetReleasedProductsAlternativeProductStyle: AssetMaintenanceReleasedProducts<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineProductJournals} entity.
   */
  declare workOrderLineProductConsumptionLinesProductStyle: AssetMaintenanceWorkOrderLineProductJournals<T>[];
  /**
   * One-to-many navigation property to the {@link FormulaVersions} entity.
   */
  declare formulaVersions: FormulaVersions<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLinesV3} entity.
   */
  declare cycleCountingWarehouseWorkLinesV3: CycleCountingWarehouseWorkLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationLines} entity.
   */
  declare bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductBarcodesV3} entity.
   */
  declare productBarcodesV3: ProductBarcodesV3<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV2} entity.
   */
  declare billOfMaterialsVersionsV2: BillOfMaterialsVersionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link OrderCommittedLicensePlateReservations} entity.
   */
  declare orderCommittedLicensePlateReservations: OrderCommittedLicensePlateReservations<T>[];
  /**
   * One-to-many navigation property to the {@link DvReleasedDistinctProducts} entity.
   */
  declare dvReleasedDistinctProducts: DvReleasedDistinctProducts<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV4} entity.
   */
  declare billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4<T>[];
  /**
   * One-to-many navigation property to the {@link ProductAllocationLinesV2} entity.
   */
  declare productAllocationLinesV2: ProductAllocationLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLines} entity.
   */
  declare cycleCountingWarehouseWorkLines: CycleCountingWarehouseWorkLines<T>[];
  /**
   * One-to-many navigation property to the {@link ReportAsFinishedProductionJournalEntries} entity.
   */
  declare reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionsAgreementDateSetupCriterionItems} entity.
   */
  declare rebateAndDeductionsAgreementHeaderDateSetupCriterionItems: RebateAndDeductionsAgreementDateSetupCriterionItems<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariantExternalCodesV2} entity.
   */
  declare releasedProductVariantExternalCodesV2: ReleasedProductVariantExternalCodesV2<T>[];

  constructor(_entityApi: ProductStylesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductStylesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  styleId: DeserializedType<T, 'Edm.String'>;
  routeCardProductionJournalEntries: RouteCardProductionJournalEntriesType<T>[];
  productAllocationLines: ProductAllocationLinesType<T>[];
  releasedProductVariantExternalCodes: ReleasedProductVariantExternalCodesType<T>[];
  productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3Type<T>[];
  bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLinesType<T>[];
  cycleCountingWarehouseWorkLinesV2: CycleCountingWarehouseWorkLinesV2Type<T>[];
  productSpecificOrderSettingsV2: ProductSpecificOrderSettingsV2Type<T>[];
  itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2Type<T>[];
  jobCardProductionJournalEntries: JobCardProductionJournalEntriesType<T>[];
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  productMasterStyles: ProductMasterStylesType<T>[];
  bundleSalesInvoiceLines: BundleSalesInvoiceLinesType<T>[];
  catchWeightTags: CatchWeightTagsType<T>[];
  inventoryTagCountingJournalLines: InventoryTagCountingJournalLinesType<T>[];
  productionPickingListJournalEntries: ProductionPickingListJournalEntriesType<T>[];
  billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3Type<T>[];
  productStyleGroupLines: ProductStyleGroupLinesType<T>[];
  productBarcodes: ProductBarcodesType<T>[];
  bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLinesType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  productBarcodesV2: ProductBarcodeAssociationsType<T>[];
  costMontlyStatementEntries: MonthlyCostStatementEntriesType<T>[];
  maintenanceAssetBillOfMaterialsProductStyle: AssetMaintenanceAssetBillOfMaterialsV2Type<T>[];
  cdsReleasedDistinctProducts: CdsReleasedDistinctProductsType<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  releasedEngineeringProductVersions: ReleasedEngineeringProductVersionsType<T>[];
  entAssetReleasedProductsAlternativeProductStyle: AssetMaintenanceReleasedProductsType<T>[];
  workOrderLineProductConsumptionLinesProductStyle: AssetMaintenanceWorkOrderLineProductJournalsType<T>[];
  formulaVersions: FormulaVersionsType<T>[];
  cycleCountingWarehouseWorkLinesV3: CycleCountingWarehouseWorkLinesV3Type<T>[];
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
  productBarcodesV3: ProductBarcodesV3Type<T>[];
  billOfMaterialsVersionsV2: BillOfMaterialsVersionsV2Type<T>[];
  orderCommittedLicensePlateReservations: OrderCommittedLicensePlateReservationsType<T>[];
  dvReleasedDistinctProducts: DvReleasedDistinctProductsType<T>[];
  billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4Type<T>[];
  productAllocationLinesV2: ProductAllocationLinesV2Type<T>[];
  cycleCountingWarehouseWorkLines: CycleCountingWarehouseWorkLinesType<T>[];
  reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntriesType<T>[];
  rebateAndDeductionsAgreementHeaderDateSetupCriterionItems: RebateAndDeductionsAgreementDateSetupCriterionItemsType<T>[];
  releasedProductVariantExternalCodesV2: ReleasedProductVariantExternalCodesV2Type<T>[];
}
