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
import { RetailTillLayouts } from './RetailTillLayouts';

/**
 * Request builder class for operations supported on the {@link RetailTillLayouts} entity.
 */
export class RetailTillLayoutsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTillLayouts<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTillLayouts` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTillLayouts` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTillLayouts<T>, T> {
    return new GetAllRequestBuilder<RetailTillLayouts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTillLayouts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTillLayouts`.
   */
  create(
    entity: RetailTillLayouts<T>
  ): CreateRequestBuilder<RetailTillLayouts<T>, T> {
    return new CreateRequestBuilder<RetailTillLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTillLayouts` entity based on its keys.
   * @param layoutId Key property. See {@link RetailTillLayouts.layoutId}.
   * @returns A request builder for creating requests to retrieve one `RetailTillLayouts` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTillLayouts<T>, T> {
    return new GetByKeyRequestBuilder<RetailTillLayouts<T>, T>(this.entityApi, {
      LayoutId: layoutId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTillLayouts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTillLayouts`.
   */
  update(
    entity: RetailTillLayouts<T>
  ): UpdateRequestBuilder<RetailTillLayouts<T>, T> {
    return new UpdateRequestBuilder<RetailTillLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayouts`.
   * @param layoutId Key property. See {@link RetailTillLayouts.layoutId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayouts`.
   */
  delete(layoutId: string): DeleteRequestBuilder<RetailTillLayouts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayouts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayouts` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTillLayouts<T>
  ): DeleteRequestBuilder<RetailTillLayouts<T>, T>;
  delete(layoutIdOrEntity: any): DeleteRequestBuilder<RetailTillLayouts<T>, T> {
    return new DeleteRequestBuilder<RetailTillLayouts<T>, T>(
      this.entityApi,
      layoutIdOrEntity instanceof RetailTillLayouts
        ? layoutIdOrEntity
        : { LayoutId: layoutIdOrEntity! }
    );
  }
}
