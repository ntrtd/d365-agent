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
import type { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { NoYes } from './NoYes';
import { WmsLocationType } from './WmsLocationType';
import { WhsLocationStatus } from './WhsLocationStatus';
import {
  RouteCardProductionJournalEntries,
  RouteCardProductionJournalEntriesType
} from './RouteCardProductionJournalEntries';
import {
  ItemCoverageSettings,
  ItemCoverageSettingsType
} from './ItemCoverageSettings';
import {
  WarehouseWorkPolicyLocations,
  WarehouseWorkPolicyLocationsType
} from './WarehouseWorkPolicyLocations';
import {
  CycleCountingWarehouseWorkLinesV2,
  CycleCountingWarehouseWorkLinesV2Type
} from './CycleCountingWarehouseWorkLinesV2';
import { WarehouseAisles, WarehouseAislesType } from './WarehouseAisles';
import { WarehouseZones, WarehouseZonesType } from './WarehouseZones';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  ItemArrivalJournalLinesV2,
  ItemArrivalJournalLinesV2Type
} from './ItemArrivalJournalLinesV2';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
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
  AssetMaintenanceWorkOrderLineProductJournals,
  AssetMaintenanceWorkOrderLineProductJournalsType
} from './AssetMaintenanceWorkOrderLineProductJournals';
import {
  CycleCountingWarehouseWorkLinesV3,
  CycleCountingWarehouseWorkLinesV3Type
} from './CycleCountingWarehouseWorkLinesV3';
import {
  ItemArrivalJournalHeadersV2,
  ItemArrivalJournalHeadersV2Type
} from './ItemArrivalJournalHeadersV2';
import {
  CycleCountingWarehouseWorkLines,
  CycleCountingWarehouseWorkLinesType
} from './CycleCountingWarehouseWorkLines';

/**
 * This class represents the entity "WarehouseLocations" of service "d365_metadata".
 */
export class WarehouseLocations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WarehouseLocationsType<T>
{
  /**
   * Technical entity name for WarehouseLocations.
   */
  static override _entityName = 'WarehouseLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseLocations entity.
   */
  static _keys = ['dataAreaId', 'WarehouseId', 'WarehouseLocationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Location Id.
   */
  declare warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Generate Check Digits.
   * @nullable
   */
  declare generateCheckDigits?: NoYes | null;
  /**
   * Is Location Activity Date Time Maintained.
   * @nullable
   */
  declare isLocationActivityDateTimeMaintained?: NoYes | null;
  /**
   * Is Default Production Input Warehouse Location.
   * @nullable
   */
  declare isDefaultProductionInputWarehouseLocation?: NoYes | null;
  /**
   * Third Additional Warehouse Zone Id.
   * @nullable
   */
  declare thirdAdditionalWarehouseZoneId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Default Kanban Finished Goods Warehouse Location.
   * @nullable
   */
  declare isDefaultKanbanFinishedGoodsWarehouseLocation?: NoYes | null;
  /**
   * Warehouse Location Type.
   * @nullable
   */
  declare warehouseLocationType?: WmsLocationType | null;
  /**
   * Shelf Id.
   */
  declare shelfId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Activity Date Time.
   */
  declare lastActivityDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Default Production Finished Goods Warehouse Location.
   * @nullable
   */
  declare isDefaultProductionFinishedGoodsWarehouseLocation?: NoYes | null;
  /**
   * Input Warehouse Location Blocking Cause Id.
   * @nullable
   */
  declare inputWarehouseLocationBlockingCauseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Number In Location.
   * @nullable
   */
  declare itemNumberInLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Retail Store Return Warehouse Location.
   * @nullable
   */
  declare isDefaultRetailStoreReturnWarehouseLocation?: NoYes | null;
  /**
   * Is Default Issue Warehouse Location.
   * @nullable
   */
  declare isDefaultIssueWarehouseLocation?: NoYes | null;
  /**
   * Warehouse Aisle Id.
   * @nullable
   */
  declare warehouseAisleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bin Id.
   */
  declare binId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Check Digits.
   * @nullable
   */
  declare checkDigits?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Additional Warehouse Zone Id.
   * @nullable
   */
  declare secondAdditionalWarehouseZoneId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Location Profile Id.
   * @nullable
   */
  declare warehouseLocationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Shipment Maintenance Warehouse Location.
   * @nullable
   */
  declare isDefaultShipmentMaintenanceWarehouseLocation?: NoYes | null;
  /**
   * Input Store Area Id.
   * @nullable
   */
  declare inputStoreAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Depth.
   */
  declare physicalDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Default Credit Only Return Warehouse Location.
   * @nullable
   */
  declare isDefaultCreditOnlyReturnWarehouseLocation?: NoYes | null;
  /**
   * Warehouse Zone Id.
   * @nullable
   */
  declare warehouseZoneId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picking Store Area Id.
   * @nullable
   */
  declare pickingStoreAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Sorting Warehouse Location.
   * @nullable
   */
  declare isDefaultSortingWarehouseLocation?: NoYes | null;
  /**
   * Is Default Receipt Warehouse Location.
   * @nullable
   */
  declare isDefaultReceiptWarehouseLocation?: NoYes | null;
  /**
   * Last Counted Utc Date Time.
   */
  declare lastCountedUtcDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Aging Date.
   */
  declare agingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Destination Warehouse Location Id.
   * @nullable
   */
  declare destinationWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Physical Width.
   */
  declare physicalWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location Status.
   * @nullable
   */
  declare locationStatus?: WhsLocationStatus | null;
  /**
   * Is Default Quality Maintenance Warehouse Location.
   * @nullable
   */
  declare isDefaultQualityMaintenanceWarehouseLocation?: NoYes | null;
  /**
   * Physical Maximum Storage Volume.
   */
  declare physicalMaximumStorageVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Height Above Ground.
   */
  declare physicalHeightAboveGround: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Sort Order Code Manual.
   * @nullable
   */
  declare isSortOrderCodeManual?: NoYes | null;
  /**
   * Rack Id.
   */
  declare rackId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sort Order Code.
   */
  declare sortOrderCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Physical Maximum Storage Weight.
   */
  declare physicalMaximumStorageWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Default Final Shipment Warehouse Location.
   * @nullable
   */
  declare isDefaultFinalShipmentWarehouseLocation?: NoYes | null;
  /**
   * Is Default Retail Store Warehouse Location.
   * @nullable
   */
  declare isDefaultRetailStoreWarehouseLocation?: NoYes | null;
  /**
   * First Additional Warehouse Zone Id.
   * @nullable
   */
  declare firstAdditionalWarehouseZoneId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Warehouse Location Id Manual.
   * @nullable
   */
  declare isWarehouseLocationIdManual?: NoYes | null;
  /**
   * Is Item In Location Maintained.
   * @nullable
   */
  declare isItemInLocationMaintained?: NoYes | null;
  /**
   * Physical Height.
   */
  declare physicalHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Output Warehouse Location Blocking Cause Id.
   * @nullable
   */
  declare outputWarehouseLocationBlockingCauseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Location Status Maintained.
   * @nullable
   */
  declare isLocationStatusMaintained?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RouteCardProductionJournalEntries} entity.
   */
  declare routeCardProductionJournalEntries: RouteCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ItemCoverageSettings} entity.
   */
  declare itemCoverageSettings: ItemCoverageSettings<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseWorkPolicyLocations} entity.
   */
  declare warehouseWorkPolicyLocations: WarehouseWorkPolicyLocations<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLinesV2} entity.
   */
  declare cycleCountingWarehouseWorkLinesV2: CycleCountingWarehouseWorkLinesV2<T>[];
  /**
   * One-to-one navigation property to the {@link WarehouseAisles} entity.
   */
  declare warehouseAisle?: WarehouseAisles<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  declare destinationWarehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-many navigation property to the {@link WarehouseLocations} entity.
   */
  declare warehouseLocations: WarehouseLocations<T>[];
  /**
   * One-to-one navigation property to the {@link WarehouseZones} entity.
   */
  declare secondAdditionalWarehouseZone?: WarehouseZones<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseZones} entity.
   */
  declare firstAdditionalWarehouseZone?: WarehouseZones<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseZones} entity.
   */
  declare thirdAdditionalWarehouseZone?: WarehouseZones<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseZones} entity.
   */
  declare warehouseZone?: WarehouseZones<T> | null;
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalLinesV2} entity.
   */
  declare itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
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
  declare maintenanceAssetBillOfMaterialsWarehouseLocation: AssetMaintenanceAssetBillOfMaterialsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineProductJournals} entity.
   */
  declare workOrderLineProductConsumptionLinesStorageProductWarehouseLocation: AssetMaintenanceWorkOrderLineProductJournals<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLinesV3} entity.
   */
  declare cycleCountingWarehouseWorkLinesV3: CycleCountingWarehouseWorkLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalHeadersV2} entity.
   */
  declare itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLines} entity.
   */
  declare cycleCountingWarehouseWorkLines: CycleCountingWarehouseWorkLines<T>[];

  constructor(_entityApi: WarehouseLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warehouseId: DeserializedType<T, 'Edm.String'>;
  warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  generateCheckDigits?: NoYes | null;
  isLocationActivityDateTimeMaintained?: NoYes | null;
  isDefaultProductionInputWarehouseLocation?: NoYes | null;
  thirdAdditionalWarehouseZoneId?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultKanbanFinishedGoodsWarehouseLocation?: NoYes | null;
  warehouseLocationType?: WmsLocationType | null;
  shelfId: DeserializedType<T, 'Edm.Int32'>;
  lastActivityDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDefaultProductionFinishedGoodsWarehouseLocation?: NoYes | null;
  inputWarehouseLocationBlockingCauseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  itemNumberInLocation?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultRetailStoreReturnWarehouseLocation?: NoYes | null;
  isDefaultIssueWarehouseLocation?: NoYes | null;
  warehouseAisleId?: DeserializedType<T, 'Edm.String'> | null;
  binId: DeserializedType<T, 'Edm.Int32'>;
  checkDigits?: DeserializedType<T, 'Edm.String'> | null;
  secondAdditionalWarehouseZoneId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultShipmentMaintenanceWarehouseLocation?: NoYes | null;
  inputStoreAreaId?: DeserializedType<T, 'Edm.String'> | null;
  physicalDepth: DeserializedType<T, 'Edm.Decimal'>;
  isDefaultCreditOnlyReturnWarehouseLocation?: NoYes | null;
  warehouseZoneId?: DeserializedType<T, 'Edm.String'> | null;
  pickingStoreAreaId?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultSortingWarehouseLocation?: NoYes | null;
  isDefaultReceiptWarehouseLocation?: NoYes | null;
  lastCountedUtcDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  destinationWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  physicalWidth: DeserializedType<T, 'Edm.Decimal'>;
  locationStatus?: WhsLocationStatus | null;
  isDefaultQualityMaintenanceWarehouseLocation?: NoYes | null;
  physicalMaximumStorageVolume: DeserializedType<T, 'Edm.Decimal'>;
  physicalHeightAboveGround: DeserializedType<T, 'Edm.Decimal'>;
  isSortOrderCodeManual?: NoYes | null;
  rackId: DeserializedType<T, 'Edm.Int32'>;
  sortOrderCode: DeserializedType<T, 'Edm.Int32'>;
  physicalMaximumStorageWeight: DeserializedType<T, 'Edm.Decimal'>;
  isDefaultFinalShipmentWarehouseLocation?: NoYes | null;
  isDefaultRetailStoreWarehouseLocation?: NoYes | null;
  firstAdditionalWarehouseZoneId?: DeserializedType<T, 'Edm.String'> | null;
  isWarehouseLocationIdManual?: NoYes | null;
  isItemInLocationMaintained?: NoYes | null;
  physicalHeight: DeserializedType<T, 'Edm.Decimal'>;
  outputWarehouseLocationBlockingCauseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isLocationStatusMaintained?: NoYes | null;
  routeCardProductionJournalEntries: RouteCardProductionJournalEntriesType<T>[];
  itemCoverageSettings: ItemCoverageSettingsType<T>[];
  warehouseWorkPolicyLocations: WarehouseWorkPolicyLocationsType<T>[];
  cycleCountingWarehouseWorkLinesV2: CycleCountingWarehouseWorkLinesV2Type<T>[];
  warehouseAisle?: WarehouseAislesType<T> | null;
  destinationWarehouseLocation?: WarehouseLocationsType<T> | null;
  warehouseLocations: WarehouseLocationsType<T>[];
  secondAdditionalWarehouseZone?: WarehouseZonesType<T> | null;
  warehouse?: WarehousesType<T> | null;
  firstAdditionalWarehouseZone?: WarehouseZonesType<T> | null;
  thirdAdditionalWarehouseZone?: WarehouseZonesType<T> | null;
  warehouseZone?: WarehouseZonesType<T> | null;
  itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2Type<T>[];
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  productionPickingListJournalEntries: ProductionPickingListJournalEntriesType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  maintenanceAssetBillOfMaterialsWarehouseLocation: AssetMaintenanceAssetBillOfMaterialsV2Type<T>[];
  workOrderLineProductConsumptionLinesStorageProductWarehouseLocation: AssetMaintenanceWorkOrderLineProductJournalsType<T>[];
  cycleCountingWarehouseWorkLinesV3: CycleCountingWarehouseWorkLinesV3Type<T>[];
  itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2Type<T>[];
  cycleCountingWarehouseWorkLines: CycleCountingWarehouseWorkLinesType<T>[];
}
