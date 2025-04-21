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
import type { ReportAsFinishedProductionJournalEntriesApi } from './ReportAsFinishedProductionJournalEntriesApi';
import { PmfProductType } from './PmfProductType';
import { NoYes } from './NoYes';
import { ProdErrorCause } from './ProdErrorCause';
import { Warehouses, WarehousesType } from './Warehouses';
import { ItemBatches, ItemBatchesType } from './ItemBatches';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  ProductionOrderHeaders,
  ProductionOrderHeadersType
} from './ProductionOrderHeaders';

/**
 * This class represents the entity "ReportAsFinishedProductionJournalEntries" of service "d365_metadata".
 */
export class ReportAsFinishedProductionJournalEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReportAsFinishedProductionJournalEntriesType<T>
{
  /**
   * Technical entity name for ReportAsFinishedProductionJournalEntries.
   */
  static override _entityName = 'ReportAsFinishedProductionJournalEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReportAsFinishedProductionJournalEntries entity.
   */
  static _keys = ['dataAreaId', 'JournalNumber', 'JournalLineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Line Number.
   */
  declare journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Production Type.
   * @nullable
   */
  declare productionType?: PmfProductType | null;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Description.
   * @nullable
   */
  declare journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Number.
   * @nullable
   */
  declare voucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reported Good Catch Weight Quantity.
   */
  declare reportedGoodCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reported Good Inventory Quantity.
   */
  declare reportedGoodInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Received Inventory Status Id.
   * @nullable
   */
  declare receivedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Picking List Journal Number.
   * @nullable
   */
  declare productionPickingListJournalNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Production Order Number.
   * @nullable
   */
  declare productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reported Error Catch Weight Quantity.
   */
  declare reportedErrorCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Lot Id.
   * @nullable
   */
  declare inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report As Finished Date.
   */
  declare reportAsFinishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will As Finished Posting Accept Quantity Error.
   * @nullable
   */
  declare willAsFinishedPostingAcceptQuantityError?: NoYes | null;
  /**
   * Is Receipt Returned.
   * @nullable
   */
  declare isReceiptReturned?: NoYes | null;
  /**
   * Is Last Report As Finished.
   * @nullable
   */
  declare isLastReportAsFinished?: NoYes | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Cause.
   * @nullable
   */
  declare errorCause?: ProdErrorCause | null;
  /**
   * Reported Error Inventory Quantity.
   */
  declare reportedErrorInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Report As Finished Posting Automatically Post Picking List.
   * @nullable
   */
  declare willReportAsFinishedPostingAutomaticallyPostPickingList?: NoYes | null;
  /**
   * Posted User Id.
   * @nullable
   */
  declare postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemBatches} entity.
   */
  declare itemBatch?: ItemBatches<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare productionSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare productionOrderHeader?: ProductionOrderHeaders<T> | null;

  constructor(_entityApi: ReportAsFinishedProductionJournalEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface ReportAsFinishedProductionJournalEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productionType?: PmfProductType | null;
  isPosted?: NoYes | null;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  voucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  reportedGoodCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reportedGoodInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  productionPickingListJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
  productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  reportedErrorCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  reportAsFinishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  willAsFinishedPostingAcceptQuantityError?: NoYes | null;
  isReceiptReturned?: NoYes | null;
  isLastReportAsFinished?: NoYes | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  errorCause?: ProdErrorCause | null;
  reportedErrorInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  willReportAsFinishedPostingAutomaticallyPostPickingList?: NoYes | null;
  postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: WarehousesType<T> | null;
  itemBatch?: ItemBatchesType<T> | null;
  productionSite?: OperationalSitesType<T> | null;
  productSize?: ProductSizesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productStyle?: ProductStylesType<T> | null;
  productionOrderHeader?: ProductionOrderHeadersType<T> | null;
}
