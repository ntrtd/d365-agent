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
import { CourseGroups } from './CourseGroups';

/**
 * Request builder class for operations supported on the {@link CourseGroups} entity.
 */
export class CourseGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CourseGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CourseGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CourseGroups<T>, T> {
    return new GetAllRequestBuilder<CourseGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseGroups`.
   */
  create(entity: CourseGroups<T>): CreateRequestBuilder<CourseGroups<T>, T> {
    return new CreateRequestBuilder<CourseGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CourseGroups` entity based on its keys.
   * @param group Key property. See {@link CourseGroups.group}.
   * @returns A request builder for creating requests to retrieve one `CourseGroups` entity based on its keys.
   */
  getByKey(
    group: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseGroups<T>, T> {
    return new GetByKeyRequestBuilder<CourseGroups<T>, T>(this.entityApi, {
      Group: group
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CourseGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseGroups`.
   */
  update(entity: CourseGroups<T>): UpdateRequestBuilder<CourseGroups<T>, T> {
    return new UpdateRequestBuilder<CourseGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseGroups`.
   * @param group Key property. See {@link CourseGroups.group}.
   * @returns A request builder for creating requests that delete an entity of type `CourseGroups`.
   */
  delete(group: string): DeleteRequestBuilder<CourseGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseGroups` by taking the entity as a parameter.
   */
  delete(entity: CourseGroups<T>): DeleteRequestBuilder<CourseGroups<T>, T>;
  delete(groupOrEntity: any): DeleteRequestBuilder<CourseGroups<T>, T> {
    return new DeleteRequestBuilder<CourseGroups<T>, T>(
      this.entityApi,
      groupOrEntity instanceof CourseGroups
        ? groupOrEntity
        : { Group: groupOrEntity! }
    );
  }
}
