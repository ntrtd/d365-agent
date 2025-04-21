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
import type { ProductVersionsApi } from './ProductVersionsApi';
import {
  RouteCardProductionJournalEntries,
  RouteCardProductionJournalEntriesType
} from './RouteCardProductionJournalEntries';
import {
  ProductAllocationLines,
  ProductAllocationLinesType
} from './ProductAllocationLines';
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
  ItemArrivalJournalLinesV2,
  ItemArrivalJournalLinesV2Type
} from './ItemArrivalJournalLinesV2';
import {
  JobCardProductionJournalEntries,
  JobCardProductionJournalEntriesType
} from './JobCardProductionJournalEntries';
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
  ProductMasterVersions,
  ProductMasterVersionsType
} from './ProductMasterVersions';
import {
  BillOfMaterialsVersionsV3,
  BillOfMaterialsVersionsV3Type
} from './BillOfMaterialsVersionsV3';
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
  CdsReleasedDistinctProducts,
  CdsReleasedDistinctProductsType
} from './CdsReleasedDistinctProducts';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  AssetMaintenanceReleasedProducts,
  AssetMaintenanceReleasedProductsType
} from './AssetMaintenanceReleasedProducts';
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
  DvReleasedDistinctProducts,
  DvReleasedDistinctProductsType
} from './DvReleasedDistinctProducts';
import {
  BillOfMaterialsVersionsV4,
  BillOfMaterialsVersionsV4Type
} from './BillOfMaterialsVersionsV4';
import { FormulaVersionsV2, FormulaVersionsV2Type } from './FormulaVersionsV2';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';
import {
  ProductAllocationLinesV2,
  ProductAllocationLinesV2Type
} from './ProductAllocationLinesV2';
import {
  ReportAsFinishedProductionJournalEntries,
  ReportAsFinishedProductionJournalEntriesType
} from './ReportAsFinishedProductionJournalEntries';
import {
  ReleasedProductVariantExternalCodesV2,
  ReleasedProductVariantExternalCodesV2Type
} from './ReleasedProductVariantExternalCodesV2';

/**
 * This class represents the entity "ProductVersions" of service "d365_metadata".
 */
export class ProductVersions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductVersionsType<T>
{
  /**
   * Technical entity name for ProductVersions.
   */
  static override _entityName = 'ProductVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductVersions entity.
   */
  static _keys = ['VersionId'];
  /**
   * Version Id.
   */
  declare versionId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link RouteCardProductionJournalEntries} entity.
   */
  declare routeCardProductionJournalEntries: RouteCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ProductAllocationLines} entity.
   */
  declare productAllocationLines: ProductAllocationLines<T>[];
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
   * One-to-many navigation property to the {@link ItemArrivalJournalLinesV2} entity.
   */
  declare itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link JobCardProductionJournalEntries} entity.
   */
  declare jobCardProductionJournalEntries: JobCardProductionJournalEntries<T>[];
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
   * One-to-many navigation property to the {@link ProductMasterVersions} entity.
   */
  declare productMasterVersions: ProductMasterVersions<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV3} entity.
   */
  declare billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3<T>[];
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
   * One-to-one navigation property to the {@link CdsReleasedDistinctProducts} entity.
   */
  declare cdsReleasedDistinctProducts?: CdsReleasedDistinctProducts<T> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceReleasedProducts} entity.
   */
  declare entAssetReleasedProductsAlternativeProductVersion: AssetMaintenanceReleasedProducts<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceReleasedProducts} entity.
   */
  declare entAssetReleasedProductsDefaultProductVersion: AssetMaintenanceReleasedProducts<T>[];
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
   * One-to-one navigation property to the {@link DvReleasedDistinctProducts} entity.
   */
  declare dvReleasedDistinctProducts?: DvReleasedDistinctProducts<T> | null;
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV4} entity.
   */
  declare billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4<T>[];
  /**
   * One-to-many navigation property to the {@link FormulaVersionsV2} entity.
   */
  declare formulaVersions: FormulaVersionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare currentVersionReplacingEngineeringChangeOrderProducts: EngineeringChangeOrderProducts<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare newVersionIntroducingEngineeringChangeOrderProducts: EngineeringChangeOrderProducts<T>[];
  /**
   * One-to-many navigation property to the {@link ProductAllocationLinesV2} entity.
   */
  declare productAllocationLinesV2: ProductAllocationLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link ReportAsFinishedProductionJournalEntries} entity.
   */
  declare reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariantExternalCodesV2} entity.
   */
  declare releasedProductVariantExternalCodesV2: ReleasedProductVariantExternalCodesV2<T>[];

  constructor(_entityApi: ProductVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  versionId: DeserializedType<T, 'Edm.String'>;
  routeCardProductionJournalEntries: RouteCardProductionJournalEntriesType<T>[];
  productAllocationLines: ProductAllocationLinesType<T>[];
  productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3Type<T>[];
  bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLinesType<T>[];
  cycleCountingWarehouseWorkLinesV2: CycleCountingWarehouseWorkLinesV2Type<T>[];
  itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2Type<T>[];
  jobCardProductionJournalEntries: JobCardProductionJournalEntriesType<T>[];
  bundleSalesInvoiceLines: BundleSalesInvoiceLinesType<T>[];
  catchWeightTags: CatchWeightTagsType<T>[];
  inventoryTagCountingJournalLines: InventoryTagCountingJournalLinesType<T>[];
  productionPickingListJournalEntries: ProductionPickingListJournalEntriesType<T>[];
  productMasterVersions: ProductMasterVersionsType<T>[];
  billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3Type<T>[];
  bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLinesType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  productBarcodesV2: ProductBarcodeAssociationsType<T>[];
  cdsReleasedDistinctProducts?: CdsReleasedDistinctProductsType<T> | null;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  entAssetReleasedProductsAlternativeProductVersion: AssetMaintenanceReleasedProductsType<T>[];
  entAssetReleasedProductsDefaultProductVersion: AssetMaintenanceReleasedProductsType<T>[];
  cycleCountingWarehouseWorkLinesV3: CycleCountingWarehouseWorkLinesV3Type<T>[];
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
  productBarcodesV3: ProductBarcodesV3Type<T>[];
  dvReleasedDistinctProducts?: DvReleasedDistinctProductsType<T> | null;
  billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4Type<T>[];
  formulaVersions: FormulaVersionsV2Type<T>[];
  currentVersionReplacingEngineeringChangeOrderProducts: EngineeringChangeOrderProductsType<T>[];
  newVersionIntroducingEngineeringChangeOrderProducts: EngineeringChangeOrderProductsType<T>[];
  productAllocationLinesV2: ProductAllocationLinesV2Type<T>[];
  reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntriesType<T>[];
  releasedProductVariantExternalCodesV2: ReleasedProductVariantExternalCodesV2Type<T>[];
}
