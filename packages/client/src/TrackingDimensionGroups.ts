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
import type { TrackingDimensionGroupsApi } from './TrackingDimensionGroupsApi';
import { NoYes } from './NoYes';
import { WhsWhenToCapture } from './WhsWhenToCapture';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  DvReleasedProducts,
  DvReleasedProductsType
} from './DvReleasedProducts';
import {
  AssetMaintenanceReleasedProducts,
  AssetMaintenanceReleasedProductsType
} from './AssetMaintenanceReleasedProducts';

/**
 * This class represents the entity "TrackingDimensionGroups" of service "d365_metadata".
 */
export class TrackingDimensionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrackingDimensionGroupsType<T>
{
  /**
   * Technical entity name for TrackingDimensionGroups.
   */
  static override _entityName = 'TrackingDimensionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrackingDimensionGroups entity.
   */
  static _keys = ['GroupName'];
  /**
   * Group Name.
   */
  declare groupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Primary Stocking Enabled For Batch Number.
   * @nullable
   */
  declare isPrimaryStockingEnabledForBatchNumber?: NoYes | null;
  /**
   * Is Coverage Plan Enabled For Batch Number.
   * @nullable
   */
  declare isCoveragePlanEnabledForBatchNumber?: NoYes | null;
  /**
   * Is Blank Issue Allowed For Batch Number.
   * @nullable
   */
  declare isBlankIssueAllowedForBatchNumber?: NoYes | null;
  /**
   * Is Sales Price By Batch Number.
   * @nullable
   */
  declare isSalesPriceByBatchNumber?: NoYes | null;
  /**
   * Is Purchase Price By Serial Number.
   * @nullable
   */
  declare isPurchasePriceBySerialNumber?: NoYes | null;
  /**
   * Group Description.
   * @nullable
   */
  declare groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Inventory Owner Active.
   * @nullable
   */
  declare isInventoryOwnerActive?: NoYes | null;
  /**
   * Is Coverage Plan Enabled For Serial Number.
   * @nullable
   */
  declare isCoveragePlanEnabledForSerialNumber?: NoYes | null;
  /**
   * Is Serial Number Active.
   * @nullable
   */
  declare isSerialNumberActive?: NoYes | null;
  /**
   * Is Blank Receipt Allowed For Batch Number.
   * @nullable
   */
  declare isBlankReceiptAllowedForBatchNumber?: NoYes | null;
  /**
   * Is Financial Inventory Enabled For Serial Number.
   * @nullable
   */
  declare isFinancialInventoryEnabledForSerialNumber?: NoYes | null;
  /**
   * Is Serial Number Enabled For Sales Process.
   * @nullable
   */
  declare isSerialNumberEnabledForSalesProcess?: NoYes | null;
  /**
   * Is Serial Number Enabled For Production Consumption Process.
   * @nullable
   */
  declare isSerialNumberEnabledForProductionConsumptionProcess?: NoYes | null;
  /**
   * Is Financial Inventory Enabled For Batch Number.
   * @nullable
   */
  declare isFinancialInventoryEnabledForBatchNumber?: NoYes | null;
  /**
   * Is Sales Price By Serial Number.
   * @nullable
   */
  declare isSalesPriceBySerialNumber?: NoYes | null;
  /**
   * Serial Number Capturing Operation.
   * @nullable
   */
  declare serialNumberCapturingOperation?: WhsWhenToCapture | null;
  /**
   * Is Blank Issue Allowed For Serial Number.
   * @nullable
   */
  declare isBlankIssueAllowedForSerialNumber?: NoYes | null;
  /**
   * Is Physical Inventory Enabled For Serial Number.
   * @nullable
   */
  declare isPhysicalInventoryEnabledForSerialNumber?: NoYes | null;
  /**
   * Is Batch Number Active.
   * @nullable
   */
  declare isBatchNumberActive?: NoYes | null;
  /**
   * Is Serial Number Control Enabled.
   * @nullable
   */
  declare isSerialNumberControlEnabled?: NoYes | null;
  /**
   * Is Primary Stocking Enabled For Serial Number.
   * @nullable
   */
  declare isPrimaryStockingEnabledForSerialNumber?: NoYes | null;
  /**
   * Is Purchase Price By Batch Number.
   * @nullable
   */
  declare isPurchasePriceByBatchNumber?: NoYes | null;
  /**
   * Is Physical Inventory Enabled For Batch Number.
   * @nullable
   */
  declare isPhysicalInventoryEnabledForBatchNumber?: NoYes | null;
  /**
   * Is Blank Receipt Allowed For Serial Number.
   * @nullable
   */
  declare isBlankReceiptAllowedForSerialNumber?: NoYes | null;
  /**
   * Is Coverage Plan Enabled For Inventory Profile.
   * @nullable
   */
  declare isCoveragePlanEnabledForInventoryProfile?: NoYes | null;
  /**
   * Is Gtd Active.
   * @nullable
   */
  declare isGtdActive?: NoYes | null;
  /**
   * Is Inventory Profile Active.
   * @nullable
   */
  declare isInventoryProfileActive?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link ProductsV2} entity.
   */
  declare products: ProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link DvReleasedProducts} entity.
   */
  declare dvReleasedProducts: DvReleasedProducts<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceReleasedProducts} entity.
   */
  declare entAssetReleasedProductsTrackingDimensionGroup: AssetMaintenanceReleasedProducts<T>[];

  constructor(_entityApi: TrackingDimensionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface TrackingDimensionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupName: DeserializedType<T, 'Edm.String'>;
  isPrimaryStockingEnabledForBatchNumber?: NoYes | null;
  isCoveragePlanEnabledForBatchNumber?: NoYes | null;
  isBlankIssueAllowedForBatchNumber?: NoYes | null;
  isSalesPriceByBatchNumber?: NoYes | null;
  isPurchasePriceBySerialNumber?: NoYes | null;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  isInventoryOwnerActive?: NoYes | null;
  isCoveragePlanEnabledForSerialNumber?: NoYes | null;
  isSerialNumberActive?: NoYes | null;
  isBlankReceiptAllowedForBatchNumber?: NoYes | null;
  isFinancialInventoryEnabledForSerialNumber?: NoYes | null;
  isSerialNumberEnabledForSalesProcess?: NoYes | null;
  isSerialNumberEnabledForProductionConsumptionProcess?: NoYes | null;
  isFinancialInventoryEnabledForBatchNumber?: NoYes | null;
  isSalesPriceBySerialNumber?: NoYes | null;
  serialNumberCapturingOperation?: WhsWhenToCapture | null;
  isBlankIssueAllowedForSerialNumber?: NoYes | null;
  isPhysicalInventoryEnabledForSerialNumber?: NoYes | null;
  isBatchNumberActive?: NoYes | null;
  isSerialNumberControlEnabled?: NoYes | null;
  isPrimaryStockingEnabledForSerialNumber?: NoYes | null;
  isPurchasePriceByBatchNumber?: NoYes | null;
  isPhysicalInventoryEnabledForBatchNumber?: NoYes | null;
  isBlankReceiptAllowedForSerialNumber?: NoYes | null;
  isCoveragePlanEnabledForInventoryProfile?: NoYes | null;
  isGtdActive?: NoYes | null;
  isInventoryProfileActive?: NoYes | null;
  products: ProductsV2Type<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  dvReleasedProducts: DvReleasedProductsType<T>[];
  entAssetReleasedProductsTrackingDimensionGroup: AssetMaintenanceReleasedProductsType<T>[];
}
