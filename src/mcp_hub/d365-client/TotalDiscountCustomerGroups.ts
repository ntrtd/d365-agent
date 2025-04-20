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
import type { TotalDiscountCustomerGroupsApi } from './TotalDiscountCustomerGroupsApi';
import {
  OpenSalesTotalDiscountJournalLines,
  OpenSalesTotalDiscountJournalLinesType
} from './OpenSalesTotalDiscountJournalLines';

/**
 * This class represents the entity "TotalDiscountCustomerGroups" of service "d365_metadata".
 */
export class TotalDiscountCustomerGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TotalDiscountCustomerGroupsType<T>
{
  /**
   * Technical entity name for TotalDiscountCustomerGroups.
   */
  static override _entityName = 'TotalDiscountCustomerGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TotalDiscountCustomerGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Code.
   */
  declare groupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OpenSalesTotalDiscountJournalLines} entity.
   */
  declare openSalesTotalDiscountJournalLine: OpenSalesTotalDiscountJournalLines<T>[];

  constructor(_entityApi: TotalDiscountCustomerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface TotalDiscountCustomerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  openSalesTotalDiscountJournalLine: OpenSalesTotalDiscountJournalLinesType<T>[];
}
