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
import { CostAccountingDataConnectorDataTransfers } from './CostAccountingDataConnectorDataTransfers';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorDataTransfers} entity.
 */
export class CostAccountingDataConnectorDataTransfersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorDataTransfers<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorDataTransfers` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorDataTransfers` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorDataTransfers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorDataTransfers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorDataTransfers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorDataTransfers`.
   */
  create(
    entity: CostAccountingDataConnectorDataTransfers<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorDataTransfers<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorDataTransfers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorDataTransfers` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorDataTransfers.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorDataTransfers.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorDataTransfers` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorDataTransfers<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorDataTransfers<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      SurrogateKey: surrogateKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorDataTransfers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorDataTransfers`.
   */
  update(
    entity: CostAccountingDataConnectorDataTransfers<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorDataTransfers<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorDataTransfers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorDataTransfers`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorDataTransfers.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorDataTransfers.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorDataTransfers`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    surrogateKey: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorDataTransfers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorDataTransfers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorDataTransfers` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorDataTransfers<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorDataTransfers<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    surrogateKey?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorDataTransfers<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorDataTransfers<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorDataTransfers
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            SurrogateKey: surrogateKey!
          }
    );
  }
}
