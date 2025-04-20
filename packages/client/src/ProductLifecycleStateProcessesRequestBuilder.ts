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
import { ProductLifecycleStateProcesses } from './ProductLifecycleStateProcesses';

/**
 * Request builder class for operations supported on the {@link ProductLifecycleStateProcesses} entity.
 */
export class ProductLifecycleStateProcessesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductLifecycleStateProcesses<T>, T> {
  /**
   * Returns a request builder for querying all `ProductLifecycleStateProcesses` entities.
   * @returns A request builder for creating requests to retrieve all `ProductLifecycleStateProcesses` entities.
   */
  getAll(): GetAllRequestBuilder<ProductLifecycleStateProcesses<T>, T> {
    return new GetAllRequestBuilder<ProductLifecycleStateProcesses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductLifecycleStateProcesses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductLifecycleStateProcesses`.
   */
  create(
    entity: ProductLifecycleStateProcesses<T>
  ): CreateRequestBuilder<ProductLifecycleStateProcesses<T>, T> {
    return new CreateRequestBuilder<ProductLifecycleStateProcesses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductLifecycleStateProcesses` entity based on its keys.
   * @param productLifecycleStateId Key property. See {@link ProductLifecycleStateProcesses.productLifecycleStateId}.
   * @param processName Key property. See {@link ProductLifecycleStateProcesses.processName}.
   * @returns A request builder for creating requests to retrieve one `ProductLifecycleStateProcesses` entity based on its keys.
   */
  getByKey(
    productLifecycleStateId: DeserializedType<T, 'Edm.String'>,
    processName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductLifecycleStateProcesses<T>, T> {
    return new GetByKeyRequestBuilder<ProductLifecycleStateProcesses<T>, T>(
      this.entityApi,
      {
        ProductLifecycleStateId: productLifecycleStateId,
        ProcessName: processName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductLifecycleStateProcesses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductLifecycleStateProcesses`.
   */
  update(
    entity: ProductLifecycleStateProcesses<T>
  ): UpdateRequestBuilder<ProductLifecycleStateProcesses<T>, T> {
    return new UpdateRequestBuilder<ProductLifecycleStateProcesses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductLifecycleStateProcesses`.
   * @param productLifecycleStateId Key property. See {@link ProductLifecycleStateProcesses.productLifecycleStateId}.
   * @param processName Key property. See {@link ProductLifecycleStateProcesses.processName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductLifecycleStateProcesses`.
   */
  delete(
    productLifecycleStateId: string,
    processName: string
  ): DeleteRequestBuilder<ProductLifecycleStateProcesses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductLifecycleStateProcesses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductLifecycleStateProcesses` by taking the entity as a parameter.
   */
  delete(
    entity: ProductLifecycleStateProcesses<T>
  ): DeleteRequestBuilder<ProductLifecycleStateProcesses<T>, T>;
  delete(
    productLifecycleStateIdOrEntity: any,
    processName?: string
  ): DeleteRequestBuilder<ProductLifecycleStateProcesses<T>, T> {
    return new DeleteRequestBuilder<ProductLifecycleStateProcesses<T>, T>(
      this.entityApi,
      productLifecycleStateIdOrEntity instanceof ProductLifecycleStateProcesses
        ? productLifecycleStateIdOrEntity
        : {
            ProductLifecycleStateId: productLifecycleStateIdOrEntity!,
            ProcessName: processName!
          }
    );
  }
}
