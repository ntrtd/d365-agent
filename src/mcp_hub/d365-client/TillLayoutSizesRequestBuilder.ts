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
import { TillLayoutSizes } from './TillLayoutSizes';

/**
 * Request builder class for operations supported on the {@link TillLayoutSizes} entity.
 */
export class TillLayoutSizesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TillLayoutSizes<T>, T> {
  /**
   * Returns a request builder for querying all `TillLayoutSizes` entities.
   * @returns A request builder for creating requests to retrieve all `TillLayoutSizes` entities.
   */
  getAll(): GetAllRequestBuilder<TillLayoutSizes<T>, T> {
    return new GetAllRequestBuilder<TillLayoutSizes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TillLayoutSizes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TillLayoutSizes`.
   */
  create(
    entity: TillLayoutSizes<T>
  ): CreateRequestBuilder<TillLayoutSizes<T>, T> {
    return new CreateRequestBuilder<TillLayoutSizes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TillLayoutSizes` entity based on its keys.
   * @param layoutSizeId Key property. See {@link TillLayoutSizes.layoutSizeId}.
   * @returns A request builder for creating requests to retrieve one `TillLayoutSizes` entity based on its keys.
   */
  getByKey(
    layoutSizeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TillLayoutSizes<T>, T> {
    return new GetByKeyRequestBuilder<TillLayoutSizes<T>, T>(this.entityApi, {
      LayoutSizeId: layoutSizeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TillLayoutSizes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TillLayoutSizes`.
   */
  update(
    entity: TillLayoutSizes<T>
  ): UpdateRequestBuilder<TillLayoutSizes<T>, T> {
    return new UpdateRequestBuilder<TillLayoutSizes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TillLayoutSizes`.
   * @param layoutSizeId Key property. See {@link TillLayoutSizes.layoutSizeId}.
   * @returns A request builder for creating requests that delete an entity of type `TillLayoutSizes`.
   */
  delete(layoutSizeId: string): DeleteRequestBuilder<TillLayoutSizes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TillLayoutSizes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TillLayoutSizes` by taking the entity as a parameter.
   */
  delete(
    entity: TillLayoutSizes<T>
  ): DeleteRequestBuilder<TillLayoutSizes<T>, T>;
  delete(
    layoutSizeIdOrEntity: any
  ): DeleteRequestBuilder<TillLayoutSizes<T>, T> {
    return new DeleteRequestBuilder<TillLayoutSizes<T>, T>(
      this.entityApi,
      layoutSizeIdOrEntity instanceof TillLayoutSizes
        ? layoutSizeIdOrEntity
        : { LayoutSizeId: layoutSizeIdOrEntity! }
    );
  }
}
