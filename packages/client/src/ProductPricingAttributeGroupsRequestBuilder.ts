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
import { ProductPricingAttributeGroups } from './ProductPricingAttributeGroups';

/**
 * Request builder class for operations supported on the {@link ProductPricingAttributeGroups} entity.
 */
export class ProductPricingAttributeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPricingAttributeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPricingAttributeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPricingAttributeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPricingAttributeGroups<T>, T> {
    return new GetAllRequestBuilder<ProductPricingAttributeGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductPricingAttributeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPricingAttributeGroups`.
   */
  create(
    entity: ProductPricingAttributeGroups<T>
  ): CreateRequestBuilder<ProductPricingAttributeGroups<T>, T> {
    return new CreateRequestBuilder<ProductPricingAttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPricingAttributeGroups` entity based on its keys.
   * @param name Key property. See {@link ProductPricingAttributeGroups.name}.
   * @returns A request builder for creating requests to retrieve one `ProductPricingAttributeGroups` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPricingAttributeGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProductPricingAttributeGroups<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPricingAttributeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPricingAttributeGroups`.
   */
  update(
    entity: ProductPricingAttributeGroups<T>
  ): UpdateRequestBuilder<ProductPricingAttributeGroups<T>, T> {
    return new UpdateRequestBuilder<ProductPricingAttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductPricingAttributeGroups`.
   * @param name Key property. See {@link ProductPricingAttributeGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPricingAttributeGroups`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<ProductPricingAttributeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPricingAttributeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPricingAttributeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPricingAttributeGroups<T>
  ): DeleteRequestBuilder<ProductPricingAttributeGroups<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<ProductPricingAttributeGroups<T>, T> {
    return new DeleteRequestBuilder<ProductPricingAttributeGroups<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ProductPricingAttributeGroups
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
