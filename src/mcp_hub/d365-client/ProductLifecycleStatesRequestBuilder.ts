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
import { ProductLifecycleStates } from './ProductLifecycleStates';

/**
 * Request builder class for operations supported on the {@link ProductLifecycleStates} entity.
 */
export class ProductLifecycleStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductLifecycleStates<T>, T> {
  /**
   * Returns a request builder for querying all `ProductLifecycleStates` entities.
   * @returns A request builder for creating requests to retrieve all `ProductLifecycleStates` entities.
   */
  getAll(): GetAllRequestBuilder<ProductLifecycleStates<T>, T> {
    return new GetAllRequestBuilder<ProductLifecycleStates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductLifecycleStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductLifecycleStates`.
   */
  create(
    entity: ProductLifecycleStates<T>
  ): CreateRequestBuilder<ProductLifecycleStates<T>, T> {
    return new CreateRequestBuilder<ProductLifecycleStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductLifecycleStates` entity based on its keys.
   * @param lifecycleStateId Key property. See {@link ProductLifecycleStates.lifecycleStateId}.
   * @returns A request builder for creating requests to retrieve one `ProductLifecycleStates` entity based on its keys.
   */
  getByKey(
    lifecycleStateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductLifecycleStates<T>, T> {
    return new GetByKeyRequestBuilder<ProductLifecycleStates<T>, T>(
      this.entityApi,
      { LifecycleStateId: lifecycleStateId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductLifecycleStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductLifecycleStates`.
   */
  update(
    entity: ProductLifecycleStates<T>
  ): UpdateRequestBuilder<ProductLifecycleStates<T>, T> {
    return new UpdateRequestBuilder<ProductLifecycleStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductLifecycleStates`.
   * @param lifecycleStateId Key property. See {@link ProductLifecycleStates.lifecycleStateId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductLifecycleStates`.
   */
  delete(
    lifecycleStateId: string
  ): DeleteRequestBuilder<ProductLifecycleStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductLifecycleStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductLifecycleStates` by taking the entity as a parameter.
   */
  delete(
    entity: ProductLifecycleStates<T>
  ): DeleteRequestBuilder<ProductLifecycleStates<T>, T>;
  delete(
    lifecycleStateIdOrEntity: any
  ): DeleteRequestBuilder<ProductLifecycleStates<T>, T> {
    return new DeleteRequestBuilder<ProductLifecycleStates<T>, T>(
      this.entityApi,
      lifecycleStateIdOrEntity instanceof ProductLifecycleStates
        ? lifecycleStateIdOrEntity
        : { LifecycleStateId: lifecycleStateIdOrEntity! }
    );
  }
}
