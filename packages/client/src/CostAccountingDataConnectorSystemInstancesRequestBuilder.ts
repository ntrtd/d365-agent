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
import { CostAccountingDataConnectorSystemInstances } from './CostAccountingDataConnectorSystemInstances';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorSystemInstances} entity.
 */
export class CostAccountingDataConnectorSystemInstancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorSystemInstances<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorSystemInstances` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorSystemInstances` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorSystemInstances<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorSystemInstances<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorSystemInstances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorSystemInstances`.
   */
  create(
    entity: CostAccountingDataConnectorSystemInstances<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorSystemInstances<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorSystemInstances<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorSystemInstances` entity based on its keys.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorSystemInstances.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorSystemInstances` entity based on its keys.
   */
  getByKey(
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorSystemInstances<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorSystemInstances<T>,
      T
    >(this.entityApi, { SurrogateKey: surrogateKey });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorSystemInstances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorSystemInstances`.
   */
  update(
    entity: CostAccountingDataConnectorSystemInstances<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorSystemInstances<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorSystemInstances<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorSystemInstances`.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorSystemInstances.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorSystemInstances`.
   */
  delete(
    surrogateKey: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorSystemInstances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorSystemInstances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorSystemInstances` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorSystemInstances<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorSystemInstances<T>, T>;
  delete(
    surrogateKeyOrEntity: any
  ): DeleteRequestBuilder<CostAccountingDataConnectorSystemInstances<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorSystemInstances<T>,
      T
    >(
      this.entityApi,
      surrogateKeyOrEntity instanceof CostAccountingDataConnectorSystemInstances
        ? surrogateKeyOrEntity
        : { SurrogateKey: surrogateKeyOrEntity! }
    );
  }
}
