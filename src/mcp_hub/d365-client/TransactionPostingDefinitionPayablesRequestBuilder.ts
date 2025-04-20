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
import { TransactionPostingDefinitionPayables } from './TransactionPostingDefinitionPayables';
import { AccountsPayableTransactionType } from './AccountsPayableTransactionType';
import { TableGroupCategoryAll } from './TableGroupCategoryAll';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link TransactionPostingDefinitionPayables} entity.
 */
export class TransactionPostingDefinitionPayablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionPostingDefinitionPayables<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionPostingDefinitionPayables` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionPostingDefinitionPayables` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionPostingDefinitionPayables<T>, T> {
    return new GetAllRequestBuilder<TransactionPostingDefinitionPayables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionPostingDefinitionPayables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionPostingDefinitionPayables`.
   */
  create(
    entity: TransactionPostingDefinitionPayables<T>
  ): CreateRequestBuilder<TransactionPostingDefinitionPayables<T>, T> {
    return new CreateRequestBuilder<TransactionPostingDefinitionPayables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionPostingDefinitionPayables` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionPayables.dataAreaId}.
   * @param accountsPayableTransactionType Key property. See {@link TransactionPostingDefinitionPayables.accountsPayableTransactionType}.
   * @param itemCodeTableGroupCategoryAll Key property. See {@link TransactionPostingDefinitionPayables.itemCodeTableGroupCategoryAll}.
   * @param accountCodeTableGroupAll Key property. See {@link TransactionPostingDefinitionPayables.accountCodeTableGroupAll}.
   * @param itemRelation Key property. See {@link TransactionPostingDefinitionPayables.itemRelation}.
   * @param accountRelation Key property. See {@link TransactionPostingDefinitionPayables.accountRelation}.
   * @returns A request builder for creating requests to retrieve one `TransactionPostingDefinitionPayables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountsPayableTransactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.AccountsPayableTransactionType'
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
  ): GetByKeyRequestBuilder<TransactionPostingDefinitionPayables<T>, T> {
    return new GetByKeyRequestBuilder<
      TransactionPostingDefinitionPayables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountsPayableTransactionType: accountsPayableTransactionType,
      ItemCodeTableGroupCategoryAll: itemCodeTableGroupCategoryAll,
      AccountCodeTableGroupAll: accountCodeTableGroupAll,
      ItemRelation: itemRelation,
      AccountRelation: accountRelation
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionPostingDefinitionPayables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionPostingDefinitionPayables`.
   */
  update(
    entity: TransactionPostingDefinitionPayables<T>
  ): UpdateRequestBuilder<TransactionPostingDefinitionPayables<T>, T> {
    return new UpdateRequestBuilder<TransactionPostingDefinitionPayables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionPayables`.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionPayables.dataAreaId}.
   * @param accountsPayableTransactionType Key property. See {@link TransactionPostingDefinitionPayables.accountsPayableTransactionType}.
   * @param itemCodeTableGroupCategoryAll Key property. See {@link TransactionPostingDefinitionPayables.itemCodeTableGroupCategoryAll}.
   * @param accountCodeTableGroupAll Key property. See {@link TransactionPostingDefinitionPayables.accountCodeTableGroupAll}.
   * @param itemRelation Key property. See {@link TransactionPostingDefinitionPayables.itemRelation}.
   * @param accountRelation Key property. See {@link TransactionPostingDefinitionPayables.accountRelation}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionPayables`.
   */
  delete(
    dataAreaId: string,
    accountsPayableTransactionType: AccountsPayableTransactionType,
    itemCodeTableGroupCategoryAll: TableGroupCategoryAll,
    accountCodeTableGroupAll: TableGroupAll,
    itemRelation: string,
    accountRelation: string
  ): DeleteRequestBuilder<TransactionPostingDefinitionPayables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionPayables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionPayables` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionPostingDefinitionPayables<T>
  ): DeleteRequestBuilder<TransactionPostingDefinitionPayables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountsPayableTransactionType?: AccountsPayableTransactionType,
    itemCodeTableGroupCategoryAll?: TableGroupCategoryAll,
    accountCodeTableGroupAll?: TableGroupAll,
    itemRelation?: string,
    accountRelation?: string
  ): DeleteRequestBuilder<TransactionPostingDefinitionPayables<T>, T> {
    return new DeleteRequestBuilder<TransactionPostingDefinitionPayables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionPostingDefinitionPayables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountsPayableTransactionType: accountsPayableTransactionType!,
            ItemCodeTableGroupCategoryAll: itemCodeTableGroupCategoryAll!,
            AccountCodeTableGroupAll: accountCodeTableGroupAll!,
            ItemRelation: itemRelation!,
            AccountRelation: accountRelation!
          }
    );
  }
}
