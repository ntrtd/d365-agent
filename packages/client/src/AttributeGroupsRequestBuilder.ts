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
import { AttributeGroups } from './AttributeGroups';

/**
 * Request builder class for operations supported on the {@link AttributeGroups} entity.
 */
export class AttributeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AttributeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `AttributeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AttributeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AttributeGroups<T>, T> {
    return new GetAllRequestBuilder<AttributeGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AttributeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AttributeGroups`.
   */
  create(
    entity: AttributeGroups<T>
  ): CreateRequestBuilder<AttributeGroups<T>, T> {
    return new CreateRequestBuilder<AttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AttributeGroups` entity based on its keys.
   * @param groupName Key property. See {@link AttributeGroups.groupName}.
   * @returns A request builder for creating requests to retrieve one `AttributeGroups` entity based on its keys.
   */
  getByKey(
    groupName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AttributeGroups<T>, T> {
    return new GetByKeyRequestBuilder<AttributeGroups<T>, T>(this.entityApi, {
      GroupName: groupName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AttributeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AttributeGroups`.
   */
  update(
    entity: AttributeGroups<T>
  ): UpdateRequestBuilder<AttributeGroups<T>, T> {
    return new UpdateRequestBuilder<AttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AttributeGroups`.
   * @param groupName Key property. See {@link AttributeGroups.groupName}.
   * @returns A request builder for creating requests that delete an entity of type `AttributeGroups`.
   */
  delete(groupName: string): DeleteRequestBuilder<AttributeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AttributeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AttributeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AttributeGroups<T>
  ): DeleteRequestBuilder<AttributeGroups<T>, T>;
  delete(groupNameOrEntity: any): DeleteRequestBuilder<AttributeGroups<T>, T> {
    return new DeleteRequestBuilder<AttributeGroups<T>, T>(
      this.entityApi,
      groupNameOrEntity instanceof AttributeGroups
        ? groupNameOrEntity
        : { GroupName: groupNameOrEntity! }
    );
  }
}
