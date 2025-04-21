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
import { TransactionPostingDefinitionBudgets } from './TransactionPostingDefinitionBudgets';
import { BudgetTransactionType } from './BudgetTransactionType';

/**
 * Request builder class for operations supported on the {@link TransactionPostingDefinitionBudgets} entity.
 */
export class TransactionPostingDefinitionBudgetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionPostingDefinitionBudgets<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionPostingDefinitionBudgets` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionPostingDefinitionBudgets` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionPostingDefinitionBudgets<T>, T> {
    return new GetAllRequestBuilder<TransactionPostingDefinitionBudgets<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionPostingDefinitionBudgets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionPostingDefinitionBudgets`.
   */
  create(
    entity: TransactionPostingDefinitionBudgets<T>
  ): CreateRequestBuilder<TransactionPostingDefinitionBudgets<T>, T> {
    return new CreateRequestBuilder<TransactionPostingDefinitionBudgets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionPostingDefinitionBudgets` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionBudgets.dataAreaId}.
   * @param budgetCodeRelationName Key property. See {@link TransactionPostingDefinitionBudgets.budgetCodeRelationName}.
   * @param budgetType Key property. See {@link TransactionPostingDefinitionBudgets.budgetType}.
   * @returns A request builder for creating requests to retrieve one `TransactionPostingDefinitionBudgets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    budgetCodeRelationName: DeserializedType<T, 'Edm.String'>,
    budgetType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetTransactionType'
    >
  ): GetByKeyRequestBuilder<TransactionPostingDefinitionBudgets<T>, T> {
    return new GetByKeyRequestBuilder<
      TransactionPostingDefinitionBudgets<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BudgetCodeRelationName: budgetCodeRelationName,
      BudgetType: budgetType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionPostingDefinitionBudgets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionPostingDefinitionBudgets`.
   */
  update(
    entity: TransactionPostingDefinitionBudgets<T>
  ): UpdateRequestBuilder<TransactionPostingDefinitionBudgets<T>, T> {
    return new UpdateRequestBuilder<TransactionPostingDefinitionBudgets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionBudgets`.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionBudgets.dataAreaId}.
   * @param budgetCodeRelationName Key property. See {@link TransactionPostingDefinitionBudgets.budgetCodeRelationName}.
   * @param budgetType Key property. See {@link TransactionPostingDefinitionBudgets.budgetType}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionBudgets`.
   */
  delete(
    dataAreaId: string,
    budgetCodeRelationName: string,
    budgetType: BudgetTransactionType
  ): DeleteRequestBuilder<TransactionPostingDefinitionBudgets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionBudgets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionBudgets` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionPostingDefinitionBudgets<T>
  ): DeleteRequestBuilder<TransactionPostingDefinitionBudgets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    budgetCodeRelationName?: string,
    budgetType?: BudgetTransactionType
  ): DeleteRequestBuilder<TransactionPostingDefinitionBudgets<T>, T> {
    return new DeleteRequestBuilder<TransactionPostingDefinitionBudgets<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionPostingDefinitionBudgets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BudgetCodeRelationName: budgetCodeRelationName!,
            BudgetType: budgetType!
          }
    );
  }
}
