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
import { ResourceSetups } from './ResourceSetups';

/**
 * Request builder class for operations supported on the {@link ResourceSetups} entity.
 */
export class ResourceSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ResourceSetups<T>, T> {
  /**
   * Returns a request builder for querying all `ResourceSetups` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceSetups` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceSetups<T>, T> {
    return new GetAllRequestBuilder<ResourceSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ResourceSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceSetups`.
   */
  create(
    entity: ResourceSetups<T>
  ): CreateRequestBuilder<ResourceSetups<T>, T> {
    return new CreateRequestBuilder<ResourceSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ResourceSetups` entity based on its keys.
   * @param resourceLegalEntityDataArea Key property. See {@link ResourceSetups.resourceLegalEntityDataArea}.
   * @param resourceId Key property. See {@link ResourceSetups.resourceId}.
   * @returns A request builder for creating requests to retrieve one `ResourceSetups` entity based on its keys.
   */
  getByKey(
    resourceLegalEntityDataArea: DeserializedType<T, 'Edm.String'>,
    resourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ResourceSetups<T>, T> {
    return new GetByKeyRequestBuilder<ResourceSetups<T>, T>(this.entityApi, {
      ResourceLegalEntityDataArea: resourceLegalEntityDataArea,
      ResourceId: resourceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceSetups`.
   */
  update(
    entity: ResourceSetups<T>
  ): UpdateRequestBuilder<ResourceSetups<T>, T> {
    return new UpdateRequestBuilder<ResourceSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceSetups`.
   * @param resourceLegalEntityDataArea Key property. See {@link ResourceSetups.resourceLegalEntityDataArea}.
   * @param resourceId Key property. See {@link ResourceSetups.resourceId}.
   * @returns A request builder for creating requests that delete an entity of type `ResourceSetups`.
   */
  delete(
    resourceLegalEntityDataArea: string,
    resourceId: string
  ): DeleteRequestBuilder<ResourceSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceSetups` by taking the entity as a parameter.
   */
  delete(entity: ResourceSetups<T>): DeleteRequestBuilder<ResourceSetups<T>, T>;
  delete(
    resourceLegalEntityDataAreaOrEntity: any,
    resourceId?: string
  ): DeleteRequestBuilder<ResourceSetups<T>, T> {
    return new DeleteRequestBuilder<ResourceSetups<T>, T>(
      this.entityApi,
      resourceLegalEntityDataAreaOrEntity instanceof ResourceSetups
        ? resourceLegalEntityDataAreaOrEntity
        : {
            ResourceLegalEntityDataArea: resourceLegalEntityDataAreaOrEntity!,
            ResourceId: resourceId!
          }
    );
  }
}
