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
import { CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers } from './CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers} entity.
 */
export class CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers`.
   */
  create(
    entity: CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>
  ): CreateRequestBuilder<
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers.dataConnectorSystemInstanceSurrogateKey}.
   * @param budgetEntrySourceIdentifier Key property. See {@link CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers.budgetEntrySourceIdentifier}.
   * @param dataConnectorCostObjectDimensionName Key property. See {@link CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers.dataConnectorCostObjectDimensionName}.
   * @param costObjectDimensionMemberName Key property. See {@link CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers.costObjectDimensionMemberName}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    budgetEntrySourceIdentifier: DeserializedType<T, 'Edm.String'>,
    dataConnectorCostObjectDimensionName: DeserializedType<T, 'Edm.String'>,
    costObjectDimensionMemberName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      BudgetEntrySourceIdentifier: budgetEntrySourceIdentifier,
      DataConnectorCostObjectDimensionName:
        dataConnectorCostObjectDimensionName,
      CostObjectDimensionMemberName: costObjectDimensionMemberName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers`.
   */
  update(
    entity: CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>
  ): UpdateRequestBuilder<
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers.dataConnectorSystemInstanceSurrogateKey}.
   * @param budgetEntrySourceIdentifier Key property. See {@link CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers.budgetEntrySourceIdentifier}.
   * @param dataConnectorCostObjectDimensionName Key property. See {@link CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers.dataConnectorCostObjectDimensionName}.
   * @param costObjectDimensionMemberName Key property. See {@link CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers.costObjectDimensionMemberName}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    budgetEntrySourceIdentifier: string,
    dataConnectorCostObjectDimensionName: string,
    costObjectDimensionMemberName: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
    T
  >;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    budgetEntrySourceIdentifier?: string,
    dataConnectorCostObjectDimensionName?: string,
    costObjectDimensionMemberName?: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            BudgetEntrySourceIdentifier: budgetEntrySourceIdentifier!,
            DataConnectorCostObjectDimensionName:
              dataConnectorCostObjectDimensionName!,
            CostObjectDimensionMemberName: costObjectDimensionMemberName!
          }
    );
  }
}
