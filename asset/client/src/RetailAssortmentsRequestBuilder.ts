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
import { RetailAssortments } from './RetailAssortments';

/**
 * Request builder class for operations supported on the {@link RetailAssortments} entity.
 */
export class RetailAssortmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailAssortments<T>, T> {
  /**
   * Returns a request builder for querying all `RetailAssortments` entities.
   * @returns A request builder for creating requests to retrieve all `RetailAssortments` entities.
   */
  getAll(): GetAllRequestBuilder<RetailAssortments<T>, T> {
    return new GetAllRequestBuilder<RetailAssortments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailAssortments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailAssortments`.
   */
  create(
    entity: RetailAssortments<T>
  ): CreateRequestBuilder<RetailAssortments<T>, T> {
    return new CreateRequestBuilder<RetailAssortments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailAssortments` entity based on its keys.
   * @param assortmentId Key property. See {@link RetailAssortments.assortmentId}.
   * @returns A request builder for creating requests to retrieve one `RetailAssortments` entity based on its keys.
   */
  getByKey(
    assortmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailAssortments<T>, T> {
    return new GetByKeyRequestBuilder<RetailAssortments<T>, T>(this.entityApi, {
      AssortmentID: assortmentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailAssortments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailAssortments`.
   */
  update(
    entity: RetailAssortments<T>
  ): UpdateRequestBuilder<RetailAssortments<T>, T> {
    return new UpdateRequestBuilder<RetailAssortments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailAssortments`.
   * @param assortmentId Key property. See {@link RetailAssortments.assortmentId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailAssortments`.
   */
  delete(assortmentId: string): DeleteRequestBuilder<RetailAssortments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailAssortments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailAssortments` by taking the entity as a parameter.
   */
  delete(
    entity: RetailAssortments<T>
  ): DeleteRequestBuilder<RetailAssortments<T>, T>;
  delete(
    assortmentIdOrEntity: any
  ): DeleteRequestBuilder<RetailAssortments<T>, T> {
    return new DeleteRequestBuilder<RetailAssortments<T>, T>(
      this.entityApi,
      assortmentIdOrEntity instanceof RetailAssortments
        ? assortmentIdOrEntity
        : { AssortmentID: assortmentIdOrEntity! }
    );
  }
}
