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
import type { CdsInventoryOnHandEntriesApi } from './CdsInventoryOnHandEntriesApi';
import {
  CdsInventoryOnHandRequests,
  CdsInventoryOnHandRequestsType
} from './CdsInventoryOnHandRequests';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { Warehouses, WarehousesType } from './Warehouses';

/**
 * This class represents the entity "CDSInventoryOnHandEntries" of service "d365_metadata".
 */
export class CdsInventoryOnHandEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsInventoryOnHandEntriesType<T>
{
  /**
   * Technical entity name for CdsInventoryOnHandEntries.
   */
  static override _entityName = 'CDSInventoryOnHandEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsInventoryOnHandEntries entity.
   */
  static _keys = [
    'dataAreaId',
    'RequestId',
    'InventorySiteId',
    'InventoryWarehouseId',
    'ATPDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Site Id.
   */
  declare inventorySiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Warehouse Id.
   */
  declare inventoryWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Atp Date.
   */
  declare atpDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Order Quantity.
   */
  declare orderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Available Ordered Quantity.
   */
  declare availableOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Hand Quantity.
   */
  declare onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Atp Quantity.
   */
  declare atpQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Available On Hand Quantity.
   */
  declare availableOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Projected Issue Quantity.
   */
  declare projectedIssueQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Projected On Hand Quantity.
   */
  declare projectedOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Order Quantity.
   */
  declare onOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Available Quantity.
   */
  declare totalAvailableQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ordered Quantity.
   */
  declare orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unavailable On Hand Quantity.
   */
  declare unavailableOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Projected Receipt Quantity.
   */
  declare projectedReceiptQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reserved Ordered Quantity.
   */
  declare reservedOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reserved On Hand Quantity.
   */
  declare reservedOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link CdsInventoryOnHandRequests} entity.
   */
  declare cdsInventoryOnHandRequests?: CdsInventoryOnHandRequests<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare operationalSites?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouses?: Warehouses<T> | null;

  constructor(_entityApi: CdsInventoryOnHandEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsInventoryOnHandEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  inventorySiteId: DeserializedType<T, 'Edm.String'>;
  inventoryWarehouseId: DeserializedType<T, 'Edm.String'>;
  atpDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  orderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  availableOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  atpQuantity: DeserializedType<T, 'Edm.Decimal'>;
  availableOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectedIssueQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectedOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  onOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  totalAvailableQuantity: DeserializedType<T, 'Edm.Decimal'>;
  orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  unavailableOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectedReceiptQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reservedOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reservedOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  cdsInventoryOnHandRequests?: CdsInventoryOnHandRequestsType<T> | null;
  operationalSites?: OperationalSitesType<T> | null;
  warehouses?: WarehousesType<T> | null;
}
