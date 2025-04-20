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
import { CustomerPricingAttributeGroups } from './CustomerPricingAttributeGroups';

/**
 * Request builder class for operations supported on the {@link CustomerPricingAttributeGroups} entity.
 */
export class CustomerPricingAttributeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPricingAttributeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPricingAttributeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPricingAttributeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPricingAttributeGroups<T>, T> {
    return new GetAllRequestBuilder<CustomerPricingAttributeGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPricingAttributeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPricingAttributeGroups`.
   */
  create(
    entity: CustomerPricingAttributeGroups<T>
  ): CreateRequestBuilder<CustomerPricingAttributeGroups<T>, T> {
    return new CreateRequestBuilder<CustomerPricingAttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPricingAttributeGroups` entity based on its keys.
   * @param name Key property. See {@link CustomerPricingAttributeGroups.name}.
   * @returns A request builder for creating requests to retrieve one `CustomerPricingAttributeGroups` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPricingAttributeGroups<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPricingAttributeGroups<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPricingAttributeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPricingAttributeGroups`.
   */
  update(
    entity: CustomerPricingAttributeGroups<T>
  ): UpdateRequestBuilder<CustomerPricingAttributeGroups<T>, T> {
    return new UpdateRequestBuilder<CustomerPricingAttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPricingAttributeGroups`.
   * @param name Key property. See {@link CustomerPricingAttributeGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPricingAttributeGroups`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<CustomerPricingAttributeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPricingAttributeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPricingAttributeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPricingAttributeGroups<T>
  ): DeleteRequestBuilder<CustomerPricingAttributeGroups<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<CustomerPricingAttributeGroups<T>, T> {
    return new DeleteRequestBuilder<CustomerPricingAttributeGroups<T>, T>(
      this.entityApi,
      nameOrEntity instanceof CustomerPricingAttributeGroups
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
