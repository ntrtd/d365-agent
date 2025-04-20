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
import type { WarehouseWorkCreationRulesV2Api } from './WarehouseWorkCreationRulesV2Api';
import { WhsWorkTransType } from './WhsWorkTransType';
import { WhsWorkProcess } from './WhsWorkProcess';
import { WhsWorkCreationMethod } from './WhsWorkCreationMethod';
import {
  WarehouseWorkPolicies,
  WarehouseWorkPoliciesType
} from './WarehouseWorkPolicies';

/**
 * This class represents the entity "WarehouseWorkCreationRulesV2" of service "d365_metadata".
 */
export class WarehouseWorkCreationRulesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseWorkCreationRulesV2Type<T>
{
  /**
   * Technical entity name for WarehouseWorkCreationRulesV2.
   */
  static override _entityName = 'WarehouseWorkCreationRulesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseWorkCreationRulesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkPolicyName',
    'WorkOrderType',
    'WorkProcess'
  ];
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
   * Work Process.
   * @nullable
   */
  declare workProcess?: WhsWorkProcess | null;
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

  constructor(_entityApi: WarehouseWorkCreationRulesV2Api<T>) {
    super(_entityApi);
  }
}

export interface WarehouseWorkCreationRulesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workPolicyName: DeserializedType<T, 'Edm.String'>;
  workOrderType?: WhsWorkTransType | null;
  workProcess?: WhsWorkProcess | null;
  workCreationMethod?: WhsWorkCreationMethod | null;
  crossDockingOpportunityPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkPolicy?: WarehouseWorkPoliciesType<T> | null;
}
