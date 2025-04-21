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
import type { CostGroupsApi } from './CostGroupsApi';
import { NoYes } from './NoYes';
import { CostGroupBehavior } from './CostGroupBehavior';
import { CostGroupType } from './CostGroupType';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "CostGroups" of service "d365_metadata".
 */
export class CostGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CostGroupsType<T>
{
  /**
   * Technical entity name for CostGroups.
   */
  static override _entityName = 'CostGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostGroups entity.
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
   * Is Default Cost Group.
   * @nullable
   */
  declare isDefaultCostGroup?: NoYes | null;
  /**
   * Cost Behaviour.
   * @nullable
   */
  declare costBehaviour?: CostGroupBehavior | null;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Group Type.
   * @nullable
   */
  declare costGroupType?: CostGroupType | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: CostGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CostGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  isDefaultCostGroup?: NoYes | null;
  costBehaviour?: CostGroupBehavior | null;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  costGroupType?: CostGroupType | null;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
