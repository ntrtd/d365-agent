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
import type { InventDimSetupGridEntitiesApi } from './InventDimSetupGridEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventDimSetupGridEntities" of service "d365_metadata".
 */
export class InventDimSetupGridEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventDimSetupGridEntitiesType<T>
{
  /**
   * Technical entity name for InventDimSetupGridEntities.
   */
  static override _entityName = 'InventDimSetupGridEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventDimSetupGridEntities entity.
   */
  static _keys = ['dataAreaId', 'FieldID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Id.
   */
  declare fieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Show Grid Asset.
   * @nullable
   */
  declare showGridAsset?: NoYes | null;
  /**
   * Show Grid Prod Journal Bom.
   * @nullable
   */
  declare showGridProdJournalBom?: NoYes | null;
  /**
   * Purchase Order Lines.
   * @nullable
   */
  declare purchaseOrderLines?: NoYes | null;
  /**
   * Order Lines.
   * @nullable
   */
  declare orderLines?: NoYes | null;
  /**
   * Inventory Blocking.
   * @nullable
   */
  declare inventoryBlocking?: NoYes | null;
  /**
   * Quotation Lines Project.
   * @nullable
   */
  declare quotationLinesProject?: NoYes | null;
  /**
   * Order Event.
   * @nullable
   */
  declare orderEvent?: NoYes | null;
  /**
   * Inventory Ownership Change.
   * @nullable
   */
  declare inventoryOwnershipChange?: NoYes | null;
  /**
   * Inventory Transactions.
   * @nullable
   */
  declare inventoryTransactions?: NoYes | null;
  /**
   * Item Consumption.
   * @nullable
   */
  declare itemConsumption?: NoYes | null;
  /**
   * Item Arrival.
   * @nullable
   */
  declare itemArrival?: NoYes | null;
  /**
   * Counting.
   * @nullable
   */
  declare counting?: NoYes | null;
  /**
   * Certificate Of Analysis.
   * @nullable
   */
  declare certificateOfAnalysis?: NoYes | null;
  /**
   * Show Grid Prod Journal Production.
   * @nullable
   */
  declare showGridProdJournalProduction?: NoYes | null;
  /**
   * Non Conformances.
   * @nullable
   */
  declare nonConformances?: NoYes | null;
  /**
   * Prod Bomraf.
   * @nullable
   */
  declare prodBomraf?: NoYes | null;
  /**
   * Bills Of Materials.
   * @nullable
   */
  declare billsOfMaterials?: NoYes | null;
  /**
   * Shipment Item.
   * @nullable
   */
  declare shipmentItem?: NoYes | null;
  /**
   * Production Orders.
   * @nullable
   */
  declare productionOrders?: NoYes | null;
  /**
   * Movement.
   * @nullable
   */
  declare movement?: NoYes | null;
  /**
   * Quotation Lines.
   * @nullable
   */
  declare quotationLines?: NoYes | null;
  /**
   * Picking Workbench Batch.
   * @nullable
   */
  declare pickingWorkbenchBatch?: NoYes | null;
  /**
   * Inventory Adjustment.
   * @nullable
   */
  declare inventoryAdjustment?: NoYes | null;
  /**
   * Quality Orders.
   * @nullable
   */
  declare qualityOrders?: NoYes | null;
  /**
   * Picking Lines.
   * @nullable
   */
  declare pickingLines?: NoYes | null;
  /**
   * Production Input.
   * @nullable
   */
  declare productionInput?: NoYes | null;
  /**
   * Shipment Lines.
   * @nullable
   */
  declare shipmentLines?: NoYes | null;
  /**
   * Production Lines.
   * @nullable
   */
  declare productionLines?: NoYes | null;
  /**
   * Transfer Orders.
   * @nullable
   */
  declare transferOrders?: NoYes | null;
  /**
   * Transfers.
   * @nullable
   */
  declare transfers?: NoYes | null;
  /**
   * Consignment Replenishment Order Line.
   * @nullable
   */
  declare consignmentReplenishmentOrderLine?: NoYes | null;
  /**
   * Quarantine Orders.
   * @nullable
   */
  declare quarantineOrders?: NoYes | null;
  /**
   * Transport Lines.
   * @nullable
   */
  declare transportLines?: NoYes | null;

  constructor(_entityApi: InventDimSetupGridEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventDimSetupGridEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fieldId: DeserializedType<T, 'Edm.Int32'>;
  showGridAsset?: NoYes | null;
  showGridProdJournalBom?: NoYes | null;
  purchaseOrderLines?: NoYes | null;
  orderLines?: NoYes | null;
  inventoryBlocking?: NoYes | null;
  quotationLinesProject?: NoYes | null;
  orderEvent?: NoYes | null;
  inventoryOwnershipChange?: NoYes | null;
  inventoryTransactions?: NoYes | null;
  itemConsumption?: NoYes | null;
  itemArrival?: NoYes | null;
  counting?: NoYes | null;
  certificateOfAnalysis?: NoYes | null;
  showGridProdJournalProduction?: NoYes | null;
  nonConformances?: NoYes | null;
  prodBomraf?: NoYes | null;
  billsOfMaterials?: NoYes | null;
  shipmentItem?: NoYes | null;
  productionOrders?: NoYes | null;
  movement?: NoYes | null;
  quotationLines?: NoYes | null;
  pickingWorkbenchBatch?: NoYes | null;
  inventoryAdjustment?: NoYes | null;
  qualityOrders?: NoYes | null;
  pickingLines?: NoYes | null;
  productionInput?: NoYes | null;
  shipmentLines?: NoYes | null;
  productionLines?: NoYes | null;
  transferOrders?: NoYes | null;
  transfers?: NoYes | null;
  consignmentReplenishmentOrderLine?: NoYes | null;
  quarantineOrders?: NoYes | null;
  transportLines?: NoYes | null;
}
