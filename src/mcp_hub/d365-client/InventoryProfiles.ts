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
import type { InventoryProfilesApi } from './InventoryProfilesApi';
import { NoYes } from './NoYes';
import { AlcoholActivityTypeRu } from './AlcoholActivityTypeRu';
import { StockInTransitRu } from './StockInTransitRu';
import { InventProfileTypeRu } from './InventProfileTypeRu';

/**
 * This class represents the entity "InventoryProfiles" of service "d365_metadata".
 */
export class InventoryProfiles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InventoryProfilesType<T>
{
  /**
   * Technical entity name for InventoryProfiles.
   */
  static override _entityName = 'InventoryProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryProfiles entity.
   */
  static _keys = ['dataAreaId', 'InventoryProfileId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Profile Id.
   */
  declare inventoryProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Initialize Dimension.
   * @nullable
   */
  declare initializeDimension?: NoYes | null;
  /**
   * Alcohol Activity Type.
   * @nullable
   */
  declare alcoholActivityType?: AlcoholActivityTypeRu | null;
  /**
   * Prohibit Misc Charges.
   * @nullable
   */
  declare prohibitMiscCharges?: NoYes | null;
  /**
   * Split Customer Invoice.
   * @nullable
   */
  declare splitCustomerInvoice?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prohibit Cost Adjustment.
   * @nullable
   */
  declare prohibitCostAdjustment?: NoYes | null;
  /**
   * Control Dimension In Purchase Order.
   * @nullable
   */
  declare controlDimensionInPurchaseOrder?: NoYes | null;
  /**
   * Selection Skip.
   * @nullable
   */
  declare selectionSkip?: NoYes | null;
  /**
   * Control Dimension In Sales Order.
   * @nullable
   */
  declare controlDimensionInSalesOrder?: NoYes | null;
  /**
   * Matching Priority.
   */
  declare matchingPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Kind Of Inventory.
   * @nullable
   */
  declare kindOfInventory?: StockInTransitRu | null;
  /**
   * Kind Of Activity.
   * @nullable
   */
  declare kindOfActivity?: InventProfileTypeRu | null;

  constructor(_entityApi: InventoryProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryProfileId: DeserializedType<T, 'Edm.String'>;
  initializeDimension?: NoYes | null;
  alcoholActivityType?: AlcoholActivityTypeRu | null;
  prohibitMiscCharges?: NoYes | null;
  splitCustomerInvoice?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  prohibitCostAdjustment?: NoYes | null;
  controlDimensionInPurchaseOrder?: NoYes | null;
  selectionSkip?: NoYes | null;
  controlDimensionInSalesOrder?: NoYes | null;
  matchingPriority: DeserializedType<T, 'Edm.Decimal'>;
  kindOfInventory?: StockInTransitRu | null;
  kindOfActivity?: InventProfileTypeRu | null;
}
