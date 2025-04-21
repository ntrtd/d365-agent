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
import { DistinctProducts } from './DistinctProducts';

/**
 * Request builder class for operations supported on the {@link DistinctProducts} entity.
 */
export class DistinctProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DistinctProducts<T>, T> {
  /**
   * Returns a request builder for querying all `DistinctProducts` entities.
   * @returns A request builder for creating requests to retrieve all `DistinctProducts` entities.
   */
  getAll(): GetAllRequestBuilder<DistinctProducts<T>, T> {
    return new GetAllRequestBuilder<DistinctProducts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DistinctProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DistinctProducts`.
   */
  create(
    entity: DistinctProducts<T>
  ): CreateRequestBuilder<DistinctProducts<T>, T> {
    return new CreateRequestBuilder<DistinctProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DistinctProducts` entity based on its keys.
   * @param productNumber Key property. See {@link DistinctProducts.productNumber}.
   * @returns A request builder for creating requests to retrieve one `DistinctProducts` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DistinctProducts<T>, T> {
    return new GetByKeyRequestBuilder<DistinctProducts<T>, T>(this.entityApi, {
      ProductNumber: productNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DistinctProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DistinctProducts`.
   */
  update(
    entity: DistinctProducts<T>
  ): UpdateRequestBuilder<DistinctProducts<T>, T> {
    return new UpdateRequestBuilder<DistinctProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DistinctProducts`.
   * @param productNumber Key property. See {@link DistinctProducts.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DistinctProducts`.
   */
  delete(productNumber: string): DeleteRequestBuilder<DistinctProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DistinctProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DistinctProducts` by taking the entity as a parameter.
   */
  delete(
    entity: DistinctProducts<T>
  ): DeleteRequestBuilder<DistinctProducts<T>, T>;
  delete(
    productNumberOrEntity: any
  ): DeleteRequestBuilder<DistinctProducts<T>, T> {
    return new DeleteRequestBuilder<DistinctProducts<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof DistinctProducts
        ? productNumberOrEntity
        : { ProductNumber: productNumberOrEntity! }
    );
  }
}
