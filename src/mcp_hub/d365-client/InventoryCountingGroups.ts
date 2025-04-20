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
import type { InventoryCountingGroupsApi } from './InventoryCountingGroupsApi';
import { InventCountCode } from './InventCountCode';

/**
 * This class represents the entity "InventoryCountingGroups" of service "d365_metadata".
 */
export class InventoryCountingGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryCountingGroupsType<T>
{
  /**
   * Technical entity name for InventoryCountingGroups.
   */
  static override _entityName = 'InventoryCountingGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryCountingGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counting Journal Inclusion Code.
   * @nullable
   */
  declare countingJournalInclusionCode?: InventCountCode | null;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counting Period Days.
   */
  declare countingPeriodDays: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: InventoryCountingGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryCountingGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  countingJournalInclusionCode?: InventCountCode | null;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  countingPeriodDays: DeserializedType<T, 'Edm.Int32'>;
}
