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
import type { SubBillItemSetupsApi } from './SubBillItemSetupsApi';
import { InventPostingItemCode } from './InventPostingItemCode';

/**
 * This class represents the entity "SubBillItemSetups" of service "d365_metadata".
 */
export class SubBillItemSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SubBillItemSetupsType<T>
{
  /**
   * Technical entity name for SubBillItemSetups.
   */
  static override _entityName = 'SubBillItemSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillItemSetups entity.
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
  /**
   * Milestone Template.
   * @nullable
   */
  declare milestoneTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Support Item.
   * @nullable
   */
  declare supportItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Renewal Item.
   * @nullable
   */
  declare renewalItem?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SubBillItemSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillItemSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemCode?: InventPostingItemCode | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  milestoneTemplate?: DeserializedType<T, 'Edm.String'> | null;
  supportItem?: DeserializedType<T, 'Edm.String'> | null;
  renewalItem?: DeserializedType<T, 'Edm.String'> | null;
}
