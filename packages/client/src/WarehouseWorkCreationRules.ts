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
import type { WarehouseWorkCreationRulesApi } from './WarehouseWorkCreationRulesApi';
import { WhsWorkTransType } from './WhsWorkTransType';
import { WhsWorkCreationMethod } from './WhsWorkCreationMethod';
import {
  WarehouseWorkPolicies,
  WarehouseWorkPoliciesType
} from './WarehouseWorkPolicies';

/**
 * This class represents the entity "WarehouseWorkCreationRules" of service "d365_metadata".
 */
export class WarehouseWorkCreationRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseWorkCreationRulesType<T>
{
  /**
   * Technical entity name for WarehouseWorkCreationRules.
   */
  static override _entityName = 'WarehouseWorkCreationRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseWorkCreationRules entity.
   */
  static _keys = ['dataAreaId', 'WorkPolicyName', 'WorkOrderType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Policy Name.
   */
  declare workPolicyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Type.
   * @nullable
   */
  declare workOrderType?: WhsWorkTransType | null;
  /**
   * Work Creation Method.
   * @nullable
   */
  declare workCreationMethod?: WhsWorkCreationMethod | null;
  /**
   * Cross Docking Opportunity Policy Name.
   * @nullable
   */
  declare crossDockingOpportunityPolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link WarehouseWorkPolicies} entity.
   */
  declare warehouseWorkPolicy?: WarehouseWorkPolicies<T> | null;

  constructor(_entityApi: WarehouseWorkCreationRulesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseWorkCreationRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workPolicyName: DeserializedType<T, 'Edm.String'>;
  workOrderType?: WhsWorkTransType | null;
  workCreationMethod?: WhsWorkCreationMethod | null;
  crossDockingOpportunityPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkPolicy?: WarehouseWorkPoliciesType<T> | null;
}
