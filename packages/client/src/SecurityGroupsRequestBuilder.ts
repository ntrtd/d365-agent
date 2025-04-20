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
import { SecurityGroups } from './SecurityGroups';

/**
 * Request builder class for operations supported on the {@link SecurityGroups} entity.
 */
export class SecurityGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecurityGroups<T>, T> {
  /**
   * Returns a request builder for querying all `SecurityGroups` entities.
   * @returns A request builder for creating requests to retrieve all `SecurityGroups` entities.
   */
  getAll(): GetAllRequestBuilder<SecurityGroups<T>, T> {
    return new GetAllRequestBuilder<SecurityGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecurityGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecurityGroups`.
   */
  create(
    entity: SecurityGroups<T>
  ): CreateRequestBuilder<SecurityGroups<T>, T> {
    return new CreateRequestBuilder<SecurityGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecurityGroups` entity based on its keys.
   * @param userId Key property. See {@link SecurityGroups.userId}.
   * @returns A request builder for creating requests to retrieve one `SecurityGroups` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecurityGroups<T>, T> {
    return new GetByKeyRequestBuilder<SecurityGroups<T>, T>(this.entityApi, {
      UserId: userId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SecurityGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecurityGroups`.
   */
  update(
    entity: SecurityGroups<T>
  ): UpdateRequestBuilder<SecurityGroups<T>, T> {
    return new UpdateRequestBuilder<SecurityGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecurityGroups`.
   * @param userId Key property. See {@link SecurityGroups.userId}.
   * @returns A request builder for creating requests that delete an entity of type `SecurityGroups`.
   */
  delete(userId: string): DeleteRequestBuilder<SecurityGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecurityGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecurityGroups` by taking the entity as a parameter.
   */
  delete(entity: SecurityGroups<T>): DeleteRequestBuilder<SecurityGroups<T>, T>;
  delete(userIdOrEntity: any): DeleteRequestBuilder<SecurityGroups<T>, T> {
    return new DeleteRequestBuilder<SecurityGroups<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof SecurityGroups
        ? userIdOrEntity
        : { UserId: userIdOrEntity! }
    );
  }
}
