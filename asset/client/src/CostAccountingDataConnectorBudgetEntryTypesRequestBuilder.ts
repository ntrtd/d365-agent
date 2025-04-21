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
import { CostAccountingDataConnectorBudgetEntryTypes } from './CostAccountingDataConnectorBudgetEntryTypes';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorBudgetEntryTypes} entity.
 */
export class CostAccountingDataConnectorBudgetEntryTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorBudgetEntryTypes<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorBudgetEntryTypes` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorBudgetEntryTypes` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorBudgetEntryTypes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorBudgetEntryTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorBudgetEntryTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorBudgetEntryTypes`.
   */
  create(
    entity: CostAccountingDataConnectorBudgetEntryTypes<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorBudgetEntryTypes<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorBudgetEntryTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorBudgetEntryTypes` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorBudgetEntryTypes.dataConnectorSystemInstanceSurrogateKey}.
   * @param name Key property. See {@link CostAccountingDataConnectorBudgetEntryTypes.name}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorBudgetEntryTypes` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorBudgetEntryTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorBudgetEntryTypes<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorBudgetEntryTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorBudgetEntryTypes`.
   */
  update(
    entity: CostAccountingDataConnectorBudgetEntryTypes<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorBudgetEntryTypes<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorBudgetEntryTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorBudgetEntryTypes`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorBudgetEntryTypes.dataConnectorSystemInstanceSurrogateKey}.
   * @param name Key property. See {@link CostAccountingDataConnectorBudgetEntryTypes.name}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorBudgetEntryTypes`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    name: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetEntryTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorBudgetEntryTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorBudgetEntryTypes` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorBudgetEntryTypes<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetEntryTypes<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetEntryTypes<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorBudgetEntryTypes<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorBudgetEntryTypes
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            Name: name!
          }
    );
  }
}
