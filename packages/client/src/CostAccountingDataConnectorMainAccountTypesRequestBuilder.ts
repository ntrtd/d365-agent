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
import { CostAccountingDataConnectorMainAccountTypes } from './CostAccountingDataConnectorMainAccountTypes';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorMainAccountTypes} entity.
 */
export class CostAccountingDataConnectorMainAccountTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorMainAccountTypes<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorMainAccountTypes` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorMainAccountTypes` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorMainAccountTypes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorMainAccountTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorMainAccountTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorMainAccountTypes`.
   */
  create(
    entity: CostAccountingDataConnectorMainAccountTypes<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorMainAccountTypes<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorMainAccountTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorMainAccountTypes` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorMainAccountTypes.dataConnectorSystemInstanceSurrogateKey}.
   * @param name Key property. See {@link CostAccountingDataConnectorMainAccountTypes.name}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorMainAccountTypes` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorMainAccountTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorMainAccountTypes<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorMainAccountTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorMainAccountTypes`.
   */
  update(
    entity: CostAccountingDataConnectorMainAccountTypes<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorMainAccountTypes<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorMainAccountTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorMainAccountTypes`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorMainAccountTypes.dataConnectorSystemInstanceSurrogateKey}.
   * @param name Key property. See {@link CostAccountingDataConnectorMainAccountTypes.name}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorMainAccountTypes`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    name: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorMainAccountTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorMainAccountTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorMainAccountTypes` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorMainAccountTypes<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorMainAccountTypes<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorMainAccountTypes<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorMainAccountTypes<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorMainAccountTypes
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            Name: name!
          }
    );
  }
}
