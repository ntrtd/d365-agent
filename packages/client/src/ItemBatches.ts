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
import type { ItemBatchesApi } from './ItemBatchesApi';
import { NoYes } from './NoYes';
import {
  RouteCardProductionJournalEntries,
  RouteCardProductionJournalEntriesType
} from './RouteCardProductionJournalEntries';
import {
  ItemBatchAttributeValuesV2,
  ItemBatchAttributeValuesV2Type
} from './ItemBatchAttributeValuesV2';
import {
  JobCardProductionJournalEntries,
  JobCardProductionJournalEntriesType
} from './JobCardProductionJournalEntries';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import { CatchWeightTags, CatchWeightTagsType } from './CatchWeightTags';
import {
  ProductionPickingListJournalEntries,
  ProductionPickingListJournalEntriesType
} from './ProductionPickingListJournalEntries';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  AssetMaintenanceAssetBillOfMaterialsV2,
  AssetMaintenanceAssetBillOfMaterialsV2Type
} from './AssetMaintenanceAssetBillOfMaterialsV2';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  ReportAsFinishedProductionJournalEntries,
  ReportAsFinishedProductionJournalEntriesType
} from './ReportAsFinishedProductionJournalEntries';

/**
 * This class represents the entity "ItemBatches" of service "d365_metadata".
 */
export class ItemBatches<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ItemBatchesType<T>
{
  /**
   * Technical entity name for ItemBatches.
   */
  static override _entityName = 'ItemBatches';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemBatches entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber', 'BatchNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Batch Number.
   */
  declare batchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Vendor Origin Country Region Id.
   * @nullable
   */
  declare primaryVendorOriginCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Best Before Date.
   */
  declare bestBeforeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Batch Disposition Code.
   * @nullable
   */
  declare batchDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Batch Number.
   * @nullable
   */
  declare vendorBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Batch Date.
   */
  declare vendorBatchDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Manufacturing Date.
   */
  declare manufacturingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Manufacturing Date Vendor Batch Date.
   * @nullable
   */
  declare isManufacturingDateVendorBatchDate?: NoYes | null;
  /**
   * Batch Description.
   * @nullable
   */
  declare batchDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Batch Attributes Inherited.
   * @nullable
   */
  declare areBatchAttributesInherited?: NoYes | null;
  /**
   * Vendor Expiration Date.
   */
  declare vendorExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Expiration Date Vendor Expiration Date.
   * @nullable
   */
  declare isExpirationDateVendorExpirationDate?: NoYes | null;
  /**
   * Batch Expiration Date.
   */
  declare batchExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Are Shelf Life Dates Inherited.
   * @nullable
   */
  declare areShelfLifeDatesInherited?: NoYes | null;
  /**
   * Shelf Life Advice Date.
   */
  declare shelfLifeAdviceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Secondary Vendor Origin Country Region Id.
   * @nullable
   */
  declare secondaryVendorOriginCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Most Recent Test Date.
   */
  declare mostRecentTestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Batch Consolidated.
   * @nullable
   */
  declare isBatchConsolidated?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RouteCardProductionJournalEntries} entity.
   */
  declare routeCardProductionJournalEntries: RouteCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ItemBatchAttributeValuesV2} entity.
   */
  declare itemBatchAttributeValues: ItemBatchAttributeValuesV2<T>[];
  /**
   * One-to-many navigation property to the {@link JobCardProductionJournalEntries} entity.
   */
  declare jobCardProductionJournalEntries: JobCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link CatchWeightTags} entity.
   */
  declare catchWeightTags: CatchWeightTags<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionPickingListJournalEntries} entity.
   */
  declare productionPickingListJournalEntries: ProductionPickingListJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetBillOfMaterialsV2} entity.
   */
  declare maintenanceAssetBillOfMaterialsItemBatch: AssetMaintenanceAssetBillOfMaterialsV2<T>[];
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare primaryVendorOriginCountryRegion?: AddressCountryRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-many navigation property to the {@link ReportAsFinishedProductionJournalEntries} entity.
   */
  declare reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntries<T>[];

  constructor(_entityApi: ItemBatchesApi<T>) {
    super(_entityApi);
  }
}

export interface ItemBatchesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  batchNumber: DeserializedType<T, 'Edm.String'>;
  primaryVendorOriginCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  bestBeforeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  batchDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorBatchDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  manufacturingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isManufacturingDateVendorBatchDate?: NoYes | null;
  batchDescription?: DeserializedType<T, 'Edm.String'> | null;
  areBatchAttributesInherited?: NoYes | null;
  vendorExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isExpirationDateVendorExpirationDate?: NoYes | null;
  batchExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  areShelfLifeDatesInherited?: NoYes | null;
  shelfLifeAdviceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  secondaryVendorOriginCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  mostRecentTestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isBatchConsolidated?: NoYes | null;
  routeCardProductionJournalEntries: RouteCardProductionJournalEntriesType<T>[];
  itemBatchAttributeValues: ItemBatchAttributeValuesV2Type<T>[];
  jobCardProductionJournalEntries: JobCardProductionJournalEntriesType<T>[];
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  catchWeightTags: CatchWeightTagsType<T>[];
  productionPickingListJournalEntries: ProductionPickingListJournalEntriesType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  maintenanceAssetBillOfMaterialsItemBatch: AssetMaintenanceAssetBillOfMaterialsV2Type<T>[];
  primaryVendorOriginCountryRegion?: AddressCountryRegionsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntriesType<T>[];
}
