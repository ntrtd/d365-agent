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
import type { ProductionPickingListJournalEntriesApi } from './ProductionPickingListJournalEntriesApi';
import { NoYes } from './NoYes';
import { ProdJournalType } from './ProdJournalType';
import { ProdErrorCause } from './ProdErrorCause';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import { Warehouses, WarehousesType } from './Warehouses';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
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
 * This class represents the entity "ProductionPickingListJournalEntries" of service "d365_metadata".
 */
export class ProductionPickingListJournalEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductionPickingListJournalEntriesType<T>
{
  /**
   * Technical entity name for ProductionPickingListJournalEntries.
   */
  static override _entityName = 'ProductionPickingListJournalEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductionPickingListJournalEntries entity.
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
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Scrap Bom Quantity.
   */
  declare scrapBomQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Date.
   */
  declare consumptionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consumption Bom Quantity.
   */
  declare consumptionBomQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Order Number.
   * @nullable
   */
  declare productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Group Code.
   * @nullable
   */
  declare projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Catch Weight Quantity.
   */
  declare consumptionCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Inventory Quantity.
   */
  declare consumptionInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Description.
   * @nullable
   */
  declare journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Transaction Id.
   * @nullable
   */
  declare projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: ProdJournalType | null;
  /**
   * Is Consumption Ended.
   * @nullable
   */
  declare isConsumptionEnded?: NoYes | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bom Unit Symbol.
   * @nullable
   */
  declare bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Number.
   * @nullable
   */
  declare positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation Number.
   */
  declare operationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Project Sales Price.
   */
  declare projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Consumption Returned.
   * @nullable
   */
  declare isConsumptionReturned?: NoYes | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Lot Id.
   * @nullable
   */
  declare inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Item Group Code.
   * @nullable
   */
  declare projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Production Picking List Posting Reduce To Available Quantity.
   * @nullable
   */
  declare willProductionPickingListPostingReduceToAvailableQuantity?: NoYes | null;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Cause.
   * @nullable
   */
  declare errorCause?: ProdErrorCause | null;
  /**
   * Proposal Catch Weight Quantity.
   */
  declare proposalCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proposal Inventory Quantity.
   */
  declare proposalInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proposal Bom Quantity.
   */
  declare proposalBomQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Voucher Number.
   * @nullable
   */
  declare projectVoucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted User Id.
   * @nullable
   */
  declare postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Sales Currency Code.
   * @nullable
   */
  declare projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Unit Cost.
   */
  declare projectUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Cost Amount.
   */
  declare projectCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  declare warehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
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

  constructor(_entityApi: ProductionPickingListJournalEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductionPickingListJournalEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  isPosted?: NoYes | null;
  scrapBomQuantity: DeserializedType<T, 'Edm.Decimal'>;
  consumptionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionBomQuantity: DeserializedType<T, 'Edm.Decimal'>;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  journalType?: ProdJournalType | null;
  isConsumptionEnded?: NoYes | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  operationNumber: DeserializedType<T, 'Edm.Int32'>;
  projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  isConsumptionReturned?: NoYes | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  willProductionPickingListPostingReduceToAvailableQuantity?: NoYes | null;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  errorCause?: ProdErrorCause | null;
  proposalCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  proposalInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  proposalBomQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectVoucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  projectUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  warehouse?: WarehousesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  itemBatch?: ItemBatchesType<T> | null;
  productionSite?: OperationalSitesType<T> | null;
  productSize?: ProductSizesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productStyle?: ProductStylesType<T> | null;
  productionOrderHeader?: ProductionOrderHeadersType<T> | null;
}
