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
import { ProductReleasePolicies } from './ProductReleasePolicies';

/**
 * Request builder class for operations supported on the {@link ProductReleasePolicies} entity.
 */
export class ProductReleasePoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductReleasePolicies<T>, T> {
  /**
   * Returns a request builder for querying all `ProductReleasePolicies` entities.
   * @returns A request builder for creating requests to retrieve all `ProductReleasePolicies` entities.
   */
  getAll(): GetAllRequestBuilder<ProductReleasePolicies<T>, T> {
    return new GetAllRequestBuilder<ProductReleasePolicies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductReleasePolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductReleasePolicies`.
   */
  create(
    entity: ProductReleasePolicies<T>
  ): CreateRequestBuilder<ProductReleasePolicies<T>, T> {
    return new CreateRequestBuilder<ProductReleasePolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductReleasePolicies` entity based on its keys.
   * @param policyName Key property. See {@link ProductReleasePolicies.policyName}.
   * @returns A request builder for creating requests to retrieve one `ProductReleasePolicies` entity based on its keys.
   */
  getByKey(
    policyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductReleasePolicies<T>, T> {
    return new GetByKeyRequestBuilder<ProductReleasePolicies<T>, T>(
      this.entityApi,
      { PolicyName: policyName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductReleasePolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductReleasePolicies`.
   */
  update(
    entity: ProductReleasePolicies<T>
  ): UpdateRequestBuilder<ProductReleasePolicies<T>, T> {
    return new UpdateRequestBuilder<ProductReleasePolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductReleasePolicies`.
   * @param policyName Key property. See {@link ProductReleasePolicies.policyName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductReleasePolicies`.
   */
  delete(
    policyName: string
  ): DeleteRequestBuilder<ProductReleasePolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductReleasePolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductReleasePolicies` by taking the entity as a parameter.
   */
  delete(
    entity: ProductReleasePolicies<T>
  ): DeleteRequestBuilder<ProductReleasePolicies<T>, T>;
  delete(
    policyNameOrEntity: any
  ): DeleteRequestBuilder<ProductReleasePolicies<T>, T> {
    return new DeleteRequestBuilder<ProductReleasePolicies<T>, T>(
      this.entityApi,
      policyNameOrEntity instanceof ProductReleasePolicies
        ? policyNameOrEntity
        : { PolicyName: policyNameOrEntity! }
    );
  }
}
