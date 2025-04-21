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
import { UserLegealEntityMapBiEntities } from './UserLegealEntityMapBiEntities';

/**
 * Request builder class for operations supported on the {@link UserLegealEntityMapBiEntities} entity.
 */
export class UserLegealEntityMapBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserLegealEntityMapBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `UserLegealEntityMapBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `UserLegealEntityMapBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<UserLegealEntityMapBiEntities<T>, T> {
    return new GetAllRequestBuilder<UserLegealEntityMapBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UserLegealEntityMapBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserLegealEntityMapBiEntities`.
   */
  create(
    entity: UserLegealEntityMapBiEntities<T>
  ): CreateRequestBuilder<UserLegealEntityMapBiEntities<T>, T> {
    return new CreateRequestBuilder<UserLegealEntityMapBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UserLegealEntityMapBiEntities` entity based on its keys.
   * @param objectId Key property. See {@link UserLegealEntityMapBiEntities.objectId}.
   * @param organizationId Key property. See {@link UserLegealEntityMapBiEntities.organizationId}.
   * @returns A request builder for creating requests to retrieve one `UserLegealEntityMapBiEntities` entity based on its keys.
   */
  getByKey(
    objectId: DeserializedType<T, 'Edm.Guid'>,
    organizationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UserLegealEntityMapBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<UserLegealEntityMapBiEntities<T>, T>(
      this.entityApi,
      {
        ObjectId: objectId,
        OrganizationId: organizationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UserLegealEntityMapBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserLegealEntityMapBiEntities`.
   */
  update(
    entity: UserLegealEntityMapBiEntities<T>
  ): UpdateRequestBuilder<UserLegealEntityMapBiEntities<T>, T> {
    return new UpdateRequestBuilder<UserLegealEntityMapBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UserLegealEntityMapBiEntities`.
   * @param objectId Key property. See {@link UserLegealEntityMapBiEntities.objectId}.
   * @param organizationId Key property. See {@link UserLegealEntityMapBiEntities.organizationId}.
   * @returns A request builder for creating requests that delete an entity of type `UserLegealEntityMapBiEntities`.
   */
  delete(
    objectId: string,
    organizationId: string
  ): DeleteRequestBuilder<UserLegealEntityMapBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserLegealEntityMapBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserLegealEntityMapBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: UserLegealEntityMapBiEntities<T>
  ): DeleteRequestBuilder<UserLegealEntityMapBiEntities<T>, T>;
  delete(
    objectIdOrEntity: any,
    organizationId?: string
  ): DeleteRequestBuilder<UserLegealEntityMapBiEntities<T>, T> {
    return new DeleteRequestBuilder<UserLegealEntityMapBiEntities<T>, T>(
      this.entityApi,
      objectIdOrEntity instanceof UserLegealEntityMapBiEntities
        ? objectIdOrEntity
        : {
            ObjectId: objectIdOrEntity!,
            OrganizationId: organizationId!
          }
    );
  }
}
