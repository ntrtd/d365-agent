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
import { DistinctProductOrVariant } from './DistinctProductOrVariant';

/**
 * Request builder class for operations supported on the {@link DistinctProductOrVariant} entity.
 */
export class DistinctProductOrVariantRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DistinctProductOrVariant<T>, T> {
  /**
   * Returns a request builder for querying all `DistinctProductOrVariant` entities.
   * @returns A request builder for creating requests to retrieve all `DistinctProductOrVariant` entities.
   */
  getAll(): GetAllRequestBuilder<DistinctProductOrVariant<T>, T> {
    return new GetAllRequestBuilder<DistinctProductOrVariant<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DistinctProductOrVariant` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DistinctProductOrVariant`.
   */
  create(
    entity: DistinctProductOrVariant<T>
  ): CreateRequestBuilder<DistinctProductOrVariant<T>, T> {
    return new CreateRequestBuilder<DistinctProductOrVariant<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DistinctProductOrVariant` entity based on its keys.
   * @param productNumber Key property. See {@link DistinctProductOrVariant.productNumber}.
   * @returns A request builder for creating requests to retrieve one `DistinctProductOrVariant` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DistinctProductOrVariant<T>, T> {
    return new GetByKeyRequestBuilder<DistinctProductOrVariant<T>, T>(
      this.entityApi,
      { ProductNumber: productNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DistinctProductOrVariant`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DistinctProductOrVariant`.
   */
  update(
    entity: DistinctProductOrVariant<T>
  ): UpdateRequestBuilder<DistinctProductOrVariant<T>, T> {
    return new UpdateRequestBuilder<DistinctProductOrVariant<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DistinctProductOrVariant`.
   * @param productNumber Key property. See {@link DistinctProductOrVariant.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DistinctProductOrVariant`.
   */
  delete(
    productNumber: string
  ): DeleteRequestBuilder<DistinctProductOrVariant<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DistinctProductOrVariant`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DistinctProductOrVariant` by taking the entity as a parameter.
   */
  delete(
    entity: DistinctProductOrVariant<T>
  ): DeleteRequestBuilder<DistinctProductOrVariant<T>, T>;
  delete(
    productNumberOrEntity: any
  ): DeleteRequestBuilder<DistinctProductOrVariant<T>, T> {
    return new DeleteRequestBuilder<DistinctProductOrVariant<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof DistinctProductOrVariant
        ? productNumberOrEntity
        : { ProductNumber: productNumberOrEntity! }
    );
  }
}
