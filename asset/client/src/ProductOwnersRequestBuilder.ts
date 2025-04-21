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
import { ProductOwners } from './ProductOwners';

/**
 * Request builder class for operations supported on the {@link ProductOwners} entity.
 */
export class ProductOwnersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductOwners<T>, T> {
  /**
   * Returns a request builder for querying all `ProductOwners` entities.
   * @returns A request builder for creating requests to retrieve all `ProductOwners` entities.
   */
  getAll(): GetAllRequestBuilder<ProductOwners<T>, T> {
    return new GetAllRequestBuilder<ProductOwners<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductOwners` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductOwners`.
   */
  create(entity: ProductOwners<T>): CreateRequestBuilder<ProductOwners<T>, T> {
    return new CreateRequestBuilder<ProductOwners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductOwners` entity based on its keys.
   * @param productOwnerId Key property. See {@link ProductOwners.productOwnerId}.
   * @returns A request builder for creating requests to retrieve one `ProductOwners` entity based on its keys.
   */
  getByKey(
    productOwnerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductOwners<T>, T> {
    return new GetByKeyRequestBuilder<ProductOwners<T>, T>(this.entityApi, {
      ProductOwnerId: productOwnerId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductOwners`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductOwners`.
   */
  update(entity: ProductOwners<T>): UpdateRequestBuilder<ProductOwners<T>, T> {
    return new UpdateRequestBuilder<ProductOwners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductOwners`.
   * @param productOwnerId Key property. See {@link ProductOwners.productOwnerId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductOwners`.
   */
  delete(productOwnerId: string): DeleteRequestBuilder<ProductOwners<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductOwners`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductOwners` by taking the entity as a parameter.
   */
  delete(entity: ProductOwners<T>): DeleteRequestBuilder<ProductOwners<T>, T>;
  delete(
    productOwnerIdOrEntity: any
  ): DeleteRequestBuilder<ProductOwners<T>, T> {
    return new DeleteRequestBuilder<ProductOwners<T>, T>(
      this.entityApi,
      productOwnerIdOrEntity instanceof ProductOwners
        ? productOwnerIdOrEntity
        : { ProductOwnerId: productOwnerIdOrEntity! }
    );
  }
}
