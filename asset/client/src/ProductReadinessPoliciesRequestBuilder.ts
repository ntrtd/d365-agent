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
import { ProductReadinessPolicies } from './ProductReadinessPolicies';

/**
 * Request builder class for operations supported on the {@link ProductReadinessPolicies} entity.
 */
export class ProductReadinessPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductReadinessPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `ProductReadinessPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `ProductReadinessPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<ProductReadinessPolicies<T>, T> {
    return new GetAllRequestBuilder<ProductReadinessPolicies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductReadinessPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductReadinessPolicies`.
   */
  create(
    entity: ProductReadinessPolicies<T>
  ): CreateRequestBuilder<ProductReadinessPolicies<T>, T> {
    return new CreateRequestBuilder<ProductReadinessPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductReadinessPolicies` entity based on its keys.
   * @param policyName Key property. See {@link ProductReadinessPolicies.policyName}.
   * @returns A request builder for creating requests to retrieve one `ProductReadinessPolicies` entity based on its keys.
   */
  getByKey(
    policyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductReadinessPolicies<T>, T> {
    return new GetByKeyRequestBuilder<ProductReadinessPolicies<T>, T>(
      this.entityApi,
      { PolicyName: policyName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductReadinessPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductReadinessPolicies`.
   */
  update(
    entity: ProductReadinessPolicies<T>
  ): UpdateRequestBuilder<ProductReadinessPolicies<T>, T> {
    return new UpdateRequestBuilder<ProductReadinessPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductReadinessPolicies`.
   * @param policyName Key property. See {@link ProductReadinessPolicies.policyName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductReadinessPolicies`.
   */
  delete(
    policyName: string
  ): DeleteRequestBuilder<ProductReadinessPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductReadinessPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductReadinessPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: ProductReadinessPolicies<T>
  ): DeleteRequestBuilder<ProductReadinessPolicies<T>, T>;
  delete(
    policyNameOrEntity: any
  ): DeleteRequestBuilder<ProductReadinessPolicies<T>, T> {
    return new DeleteRequestBuilder<ProductReadinessPolicies<T>, T>(
      this.entityApi,
      policyNameOrEntity instanceof ProductReadinessPolicies
        ? policyNameOrEntity
        : { PolicyName: policyNameOrEntity! }
    );
  }
}
