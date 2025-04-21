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
import { TillLayoutConfigurations } from './TillLayoutConfigurations';

/**
 * Request builder class for operations supported on the {@link TillLayoutConfigurations} entity.
 */
export class TillLayoutConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TillLayoutConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `TillLayoutConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `TillLayoutConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<TillLayoutConfigurations<T>, T> {
    return new GetAllRequestBuilder<TillLayoutConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TillLayoutConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TillLayoutConfigurations`.
   */
  create(
    entity: TillLayoutConfigurations<T>
  ): CreateRequestBuilder<TillLayoutConfigurations<T>, T> {
    return new CreateRequestBuilder<TillLayoutConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TillLayoutConfigurations` entity based on its keys.
   * @param layoutId Key property. See {@link TillLayoutConfigurations.layoutId}.
   * @param layoutSizeId Key property. See {@link TillLayoutConfigurations.layoutSizeId}.
   * @returns A request builder for creating requests to retrieve one `TillLayoutConfigurations` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>,
    layoutSizeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TillLayoutConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<TillLayoutConfigurations<T>, T>(
      this.entityApi,
      {
        LayoutId: layoutId,
        LayoutSizeId: layoutSizeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TillLayoutConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TillLayoutConfigurations`.
   */
  update(
    entity: TillLayoutConfigurations<T>
  ): UpdateRequestBuilder<TillLayoutConfigurations<T>, T> {
    return new UpdateRequestBuilder<TillLayoutConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TillLayoutConfigurations`.
   * @param layoutId Key property. See {@link TillLayoutConfigurations.layoutId}.
   * @param layoutSizeId Key property. See {@link TillLayoutConfigurations.layoutSizeId}.
   * @returns A request builder for creating requests that delete an entity of type `TillLayoutConfigurations`.
   */
  delete(
    layoutId: string,
    layoutSizeId: string
  ): DeleteRequestBuilder<TillLayoutConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TillLayoutConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TillLayoutConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: TillLayoutConfigurations<T>
  ): DeleteRequestBuilder<TillLayoutConfigurations<T>, T>;
  delete(
    layoutIdOrEntity: any,
    layoutSizeId?: string
  ): DeleteRequestBuilder<TillLayoutConfigurations<T>, T> {
    return new DeleteRequestBuilder<TillLayoutConfigurations<T>, T>(
      this.entityApi,
      layoutIdOrEntity instanceof TillLayoutConfigurations
        ? layoutIdOrEntity
        : {
            LayoutId: layoutIdOrEntity!,
            LayoutSizeId: layoutSizeId!
          }
    );
  }
}
