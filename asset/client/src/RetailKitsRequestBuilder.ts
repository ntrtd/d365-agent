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
import { RetailKits } from './RetailKits';

/**
 * Request builder class for operations supported on the {@link RetailKits} entity.
 */
export class RetailKitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailKits<T>, T> {
  /**
   * Returns a request builder for querying all `RetailKits` entities.
   * @returns A request builder for creating requests to retrieve all `RetailKits` entities.
   */
  getAll(): GetAllRequestBuilder<RetailKits<T>, T> {
    return new GetAllRequestBuilder<RetailKits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailKits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailKits`.
   */
  create(entity: RetailKits<T>): CreateRequestBuilder<RetailKits<T>, T> {
    return new CreateRequestBuilder<RetailKits<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailKits` entity based on its keys.
   * @param kitProductNumber Key property. See {@link RetailKits.kitProductNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailKits` entity based on its keys.
   */
  getByKey(
    kitProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailKits<T>, T> {
    return new GetByKeyRequestBuilder<RetailKits<T>, T>(this.entityApi, {
      KitProductNumber: kitProductNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailKits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailKits`.
   */
  update(entity: RetailKits<T>): UpdateRequestBuilder<RetailKits<T>, T> {
    return new UpdateRequestBuilder<RetailKits<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailKits`.
   * @param kitProductNumber Key property. See {@link RetailKits.kitProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailKits`.
   */
  delete(kitProductNumber: string): DeleteRequestBuilder<RetailKits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailKits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailKits` by taking the entity as a parameter.
   */
  delete(entity: RetailKits<T>): DeleteRequestBuilder<RetailKits<T>, T>;
  delete(
    kitProductNumberOrEntity: any
  ): DeleteRequestBuilder<RetailKits<T>, T> {
    return new DeleteRequestBuilder<RetailKits<T>, T>(
      this.entityApi,
      kitProductNumberOrEntity instanceof RetailKits
        ? kitProductNumberOrEntity
        : { KitProductNumber: kitProductNumberOrEntity! }
    );
  }
}
