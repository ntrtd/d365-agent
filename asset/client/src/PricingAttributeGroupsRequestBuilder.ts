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
import { PricingAttributeGroups } from './PricingAttributeGroups';

/**
 * Request builder class for operations supported on the {@link PricingAttributeGroups} entity.
 */
export class PricingAttributeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PricingAttributeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `PricingAttributeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `PricingAttributeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<PricingAttributeGroups<T>, T> {
    return new GetAllRequestBuilder<PricingAttributeGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PricingAttributeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PricingAttributeGroups`.
   */
  create(
    entity: PricingAttributeGroups<T>
  ): CreateRequestBuilder<PricingAttributeGroups<T>, T> {
    return new CreateRequestBuilder<PricingAttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PricingAttributeGroups` entity based on its keys.
   * @param name Key property. See {@link PricingAttributeGroups.name}.
   * @returns A request builder for creating requests to retrieve one `PricingAttributeGroups` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PricingAttributeGroups<T>, T> {
    return new GetByKeyRequestBuilder<PricingAttributeGroups<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PricingAttributeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PricingAttributeGroups`.
   */
  update(
    entity: PricingAttributeGroups<T>
  ): UpdateRequestBuilder<PricingAttributeGroups<T>, T> {
    return new UpdateRequestBuilder<PricingAttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PricingAttributeGroups`.
   * @param name Key property. See {@link PricingAttributeGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `PricingAttributeGroups`.
   */
  delete(name: string): DeleteRequestBuilder<PricingAttributeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PricingAttributeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PricingAttributeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: PricingAttributeGroups<T>
  ): DeleteRequestBuilder<PricingAttributeGroups<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<PricingAttributeGroups<T>, T> {
    return new DeleteRequestBuilder<PricingAttributeGroups<T>, T>(
      this.entityApi,
      nameOrEntity instanceof PricingAttributeGroups
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
