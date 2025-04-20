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
import type { SubBillDeferralDeferrableItemsApi } from './SubBillDeferralDeferrableItemsApi';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { InventPostingItemCode } from './InventPostingItemCode';

/**
 * This class represents the entity "SubBillDeferralDeferrableItemsCollection" of service "d365_metadata".
 */
export class SubBillDeferralDeferrableItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralDeferrableItemsType<T>
{
  /**
   * Technical entity name for SubBillDeferralDeferrableItems.
   */
  static override _entityName = 'SubBillDeferralDeferrableItemsCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralDeferrableItems entity.
   */
  static _keys = [
    'dataAreaId',
    'TransactionType',
    'ItemRelation',
    'ItemCode',
    'CategoryRelation'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: SubBillDeferralTransactionType | null;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Code.
   * @nullable
   */
  declare itemCode?: InventPostingItemCode | null;
  /**
   * Category Relation.
   */
  declare categoryRelation: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: SubBillDeferralDeferrableItemsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralDeferrableItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionType?: SubBillDeferralTransactionType | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  itemCode?: InventPostingItemCode | null;
  categoryRelation: DeserializedType<T, 'Edm.String'>;
}
