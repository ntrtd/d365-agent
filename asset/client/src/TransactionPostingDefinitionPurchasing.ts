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
import type { TransactionPostingDefinitionPurchasingApi } from './TransactionPostingDefinitionPurchasingApi';
import { PurchasingTransactionType } from './PurchasingTransactionType';
import { TableGroupCategoryAll } from './TableGroupCategoryAll';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "TransactionPostingDefinitionPurchasing" of service "d365_metadata".
 */
export class TransactionPostingDefinitionPurchasing<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionPostingDefinitionPurchasingType<T>
{
  /**
   * Technical entity name for TransactionPostingDefinitionPurchasing.
   */
  static override _entityName = 'TransactionPostingDefinitionPurchasing';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionPostingDefinitionPurchasing entity.
   */
  static _keys = [
    'dataAreaId',
    'PurchasingTransactionType',
    'ItemCodeTableGroupCategoryAll',
    'AccountCodeTableGroupAll',
    'ItemRelation',
    'AccountRelation'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Transaction Type.
   * @nullable
   */
  declare purchasingTransactionType?: PurchasingTransactionType | null;
  /**
   * Item Code Table Group Category All.
   * @nullable
   */
  declare itemCodeTableGroupCategoryAll?: TableGroupCategoryAll | null;
  /**
   * Account Code Table Group All.
   * @nullable
   */
  declare accountCodeTableGroupAll?: TableGroupAll | null;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Relation.
   * @nullable
   */
  declare categoryRelation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Definition Id.
   * @nullable
   */
  declare postingDefinitionId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransactionPostingDefinitionPurchasingApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionPostingDefinitionPurchasingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchasingTransactionType?: PurchasingTransactionType | null;
  itemCodeTableGroupCategoryAll?: TableGroupCategoryAll | null;
  accountCodeTableGroupAll?: TableGroupAll | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  categoryRelation?: DeserializedType<T, 'Edm.String'> | null;
  postingDefinitionId?: DeserializedType<T, 'Edm.String'> | null;
}
