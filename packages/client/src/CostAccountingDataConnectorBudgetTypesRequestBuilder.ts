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
import { CostAccountingDataConnectorBudgetTypes } from './CostAccountingDataConnectorBudgetTypes';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorBudgetTypes} entity.
 */
export class CostAccountingDataConnectorBudgetTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorBudgetTypes<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorBudgetTypes` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorBudgetTypes` entities.
   */
  getAll(): GetAllRequestBuilder<CostAccountingDataConnectorBudgetTypes<T>, T> {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorBudgetTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorBudgetTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorBudgetTypes`.
   */
  create(
    entity: CostAccountingDataConnectorBudgetTypes<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorBudgetTypes<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorBudgetTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorBudgetTypes` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorBudgetTypes.dataConnectorSystemInstanceSurrogateKey}.
   * @param name Key property. See {@link CostAccountingDataConnectorBudgetTypes.name}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorBudgetTypes` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorBudgetTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorBudgetTypes<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorBudgetTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorBudgetTypes`.
   */
  update(
    entity: CostAccountingDataConnectorBudgetTypes<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorBudgetTypes<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorBudgetTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorBudgetTypes`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorBudgetTypes.dataConnectorSystemInstanceSurrogateKey}.
   * @param name Key property. See {@link CostAccountingDataConnectorBudgetTypes.name}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorBudgetTypes`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    name: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorBudgetTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorBudgetTypes` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorBudgetTypes<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetTypes<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetTypes<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorBudgetTypes<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorBudgetTypes
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            Name: name!
          }
    );
  }
}
