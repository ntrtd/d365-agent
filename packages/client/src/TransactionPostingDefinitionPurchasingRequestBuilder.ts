/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { TransactionPostingDefinitionPurchasing } from './TransactionPostingDefinitionPurchasing';
import { PurchasingTransactionType } from './PurchasingTransactionType';
import { TableGroupCategoryAll } from './TableGroupCategoryAll';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link TransactionPostingDefinitionPurchasing} entity.
 */
export class TransactionPostingDefinitionPurchasingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionPostingDefinitionPurchasing<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionPostingDefinitionPurchasing` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionPostingDefinitionPurchasing` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionPostingDefinitionPurchasing<T>, T> {
    return new GetAllRequestBuilder<
      TransactionPostingDefinitionPurchasing<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransactionPostingDefinitionPurchasing` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionPostingDefinitionPurchasing`.
   */
  create(
    entity: TransactionPostingDefinitionPurchasing<T>
  ): CreateRequestBuilder<TransactionPostingDefinitionPurchasing<T>, T> {
    return new CreateRequestBuilder<
      TransactionPostingDefinitionPurchasing<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TransactionPostingDefinitionPurchasing` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionPurchasing.dataAreaId}.
   * @param purchasingTransactionType Key property. See {@link TransactionPostingDefinitionPurchasing.purchasingTransactionType}.
   * @param itemCodeTableGroupCategoryAll Key property. See {@link TransactionPostingDefinitionPurchasing.itemCodeTableGroupCategoryAll}.
   * @param accountCodeTableGroupAll Key property. See {@link TransactionPostingDefinitionPurchasing.accountCodeTableGroupAll}.
   * @param itemRelation Key property. See {@link TransactionPostingDefinitionPurchasing.itemRelation}.
   * @param accountRelation Key property. See {@link TransactionPostingDefinitionPurchasing.accountRelation}.
   * @returns A request builder for creating requests to retrieve one `TransactionPostingDefinitionPurchasing` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchasingTransactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.PurchasingTransactionType'
    >,
    itemCodeTableGroupCategoryAll: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupCategoryAll'
    >,
    accountCodeTableGroupAll: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>,
    accountRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionPostingDefinitionPurchasing<T>, T> {
    return new GetByKeyRequestBuilder<
      TransactionPostingDefinitionPurchasing<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      PurchasingTransactionType: purchasingTransactionType,
      ItemCodeTableGroupCategoryAll: itemCodeTableGroupCategoryAll,
      AccountCodeTableGroupAll: accountCodeTableGroupAll,
      ItemRelation: itemRelation,
      AccountRelation: accountRelation
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionPostingDefinitionPurchasing`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionPostingDefinitionPurchasing`.
   */
  update(
    entity: TransactionPostingDefinitionPurchasing<T>
  ): UpdateRequestBuilder<TransactionPostingDefinitionPurchasing<T>, T> {
    return new UpdateRequestBuilder<
      TransactionPostingDefinitionPurchasing<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionPurchasing`.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionPurchasing.dataAreaId}.
   * @param purchasingTransactionType Key property. See {@link TransactionPostingDefinitionPurchasing.purchasingTransactionType}.
   * @param itemCodeTableGroupCategoryAll Key property. See {@link TransactionPostingDefinitionPurchasing.itemCodeTableGroupCategoryAll}.
   * @param accountCodeTableGroupAll Key property. See {@link TransactionPostingDefinitionPurchasing.accountCodeTableGroupAll}.
   * @param itemRelation Key property. See {@link TransactionPostingDefinitionPurchasing.itemRelation}.
   * @param accountRelation Key property. See {@link TransactionPostingDefinitionPurchasing.accountRelation}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionPurchasing`.
   */
  delete(
    dataAreaId: string,
    purchasingTransactionType: PurchasingTransactionType,
    itemCodeTableGroupCategoryAll: TableGroupCategoryAll,
    accountCodeTableGroupAll: TableGroupAll,
    itemRelation: string,
    accountRelation: string
  ): DeleteRequestBuilder<TransactionPostingDefinitionPurchasing<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionPurchasing`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionPurchasing` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionPostingDefinitionPurchasing<T>
  ): DeleteRequestBuilder<TransactionPostingDefinitionPurchasing<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchasingTransactionType?: PurchasingTransactionType,
    itemCodeTableGroupCategoryAll?: TableGroupCategoryAll,
    accountCodeTableGroupAll?: TableGroupAll,
    itemRelation?: string,
    accountRelation?: string
  ): DeleteRequestBuilder<TransactionPostingDefinitionPurchasing<T>, T> {
    return new DeleteRequestBuilder<
      TransactionPostingDefinitionPurchasing<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionPostingDefinitionPurchasing
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchasingTransactionType: purchasingTransactionType!,
            ItemCodeTableGroupCategoryAll: itemCodeTableGroupCategoryAll!,
            AccountCodeTableGroupAll: accountCodeTableGroupAll!,
            ItemRelation: itemRelation!,
            AccountRelation: accountRelation!
          }
    );
  }
}
