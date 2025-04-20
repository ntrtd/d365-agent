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
import type { CostFlowAssumptionPoliciesApi } from './CostFlowAssumptionPoliciesApi';
import { NoYes } from './NoYes';
import { InventModel } from './InventModel';
import { InventoryPolicies, InventoryPoliciesType } from './InventoryPolicies';

/**
 * This class represents the entity "CostFlowAssumptionPolicies" of service "d365_metadata".
 */
export class CostFlowAssumptionPolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostFlowAssumptionPoliciesType<T>
{
  /**
   * Technical entity name for CostFlowAssumptionPolicies.
   */
  static override _entityName = 'CostFlowAssumptionPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostFlowAssumptionPolicies entity.
   */
  static _keys = ['dataAreaId', 'PolicyId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Id.
   */
  declare policyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Unit Cost Including Physically Updated Inventory.
   * @nullable
   */
  declare isUnitCostIncludingPhysicallyUpdatedInventory?: NoYes | null;
  /**
   * Will Sales Delivery Process Post Deferred Revenue.
   * @nullable
   */
  declare willSalesDeliveryProcessPostDeferredRevenue?: NoYes | null;
  /**
   * Policy Name.
   * @nullable
   */
  declare policyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Model.
   * @nullable
   */
  declare inventoryModel?: InventModel | null;
  /**
   * Is Financial Inventory Posted.
   * @nullable
   */
  declare isFinancialInventoryPosted?: NoYes | null;
  /**
   * Is Physical Inventory Posted.
   * @nullable
   */
  declare isPhysicalInventoryPosted?: NoYes | null;
  /**
   * Is Fixed Receipt Price Used.
   * @nullable
   */
  declare isFixedReceiptPriceUsed?: NoYes | null;
  /**
   * Is Stocked Product.
   * @nullable
   */
  declare isStockedProduct?: NoYes | null;
  /**
   * Will Product Receipt Processing Accrue Liability.
   * @nullable
   */
  declare willProductReceiptProcessingAccrueLiability?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link InventoryPolicies} entity.
   */
  declare inventoryPolicy?: InventoryPolicies<T> | null;

  constructor(_entityApi: CostFlowAssumptionPoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface CostFlowAssumptionPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyId: DeserializedType<T, 'Edm.String'>;
  isUnitCostIncludingPhysicallyUpdatedInventory?: NoYes | null;
  willSalesDeliveryProcessPostDeferredRevenue?: NoYes | null;
  policyName?: DeserializedType<T, 'Edm.String'> | null;
  inventoryModel?: InventModel | null;
  isFinancialInventoryPosted?: NoYes | null;
  isPhysicalInventoryPosted?: NoYes | null;
  isFixedReceiptPriceUsed?: NoYes | null;
  isStockedProduct?: NoYes | null;
  willProductReceiptProcessingAccrueLiability?: NoYes | null;
  inventoryPolicy?: InventoryPoliciesType<T> | null;
}
