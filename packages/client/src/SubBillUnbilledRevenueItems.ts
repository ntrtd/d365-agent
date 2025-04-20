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
import type { SubBillUnbilledRevenueItemsApi } from './SubBillUnbilledRevenueItemsApi';
import { InventPostingItemCode } from './InventPostingItemCode';

/**
 * This class represents the entity "SubBillUnbilledRevenueItems" of service "d365_metadata".
 */
export class SubBillUnbilledRevenueItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillUnbilledRevenueItemsType<T>
{
  /**
   * Technical entity name for SubBillUnbilledRevenueItems.
   */
  static override _entityName = 'SubBillUnbilledRevenueItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillUnbilledRevenueItems entity.
   */
  static _keys = ['dataAreaId', 'ItemCode', 'ItemRelation'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Code.
   * @nullable
   */
  declare itemCode?: InventPostingItemCode | null;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: SubBillUnbilledRevenueItemsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillUnbilledRevenueItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemCode?: InventPostingItemCode | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
}
