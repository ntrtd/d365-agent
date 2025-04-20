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
import { ClassroomGroups } from './ClassroomGroups';

/**
 * Request builder class for operations supported on the {@link ClassroomGroups} entity.
 */
export class ClassroomGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClassroomGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ClassroomGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ClassroomGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ClassroomGroups<T>, T> {
    return new GetAllRequestBuilder<ClassroomGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ClassroomGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClassroomGroups`.
   */
  create(
    entity: ClassroomGroups<T>
  ): CreateRequestBuilder<ClassroomGroups<T>, T> {
    return new CreateRequestBuilder<ClassroomGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClassroomGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ClassroomGroups.dataAreaId}.
   * @param classroomGroupId Key property. See {@link ClassroomGroups.classroomGroupId}.
   * @returns A request builder for creating requests to retrieve one `ClassroomGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    classroomGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ClassroomGroups<T>, T> {
    return new GetByKeyRequestBuilder<ClassroomGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ClassroomGroupId: classroomGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ClassroomGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClassroomGroups`.
   */
  update(
    entity: ClassroomGroups<T>
  ): UpdateRequestBuilder<ClassroomGroups<T>, T> {
    return new UpdateRequestBuilder<ClassroomGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClassroomGroups`.
   * @param dataAreaId Key property. See {@link ClassroomGroups.dataAreaId}.
   * @param classroomGroupId Key property. See {@link ClassroomGroups.classroomGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `ClassroomGroups`.
   */
  delete(
    dataAreaId: string,
    classroomGroupId: string
  ): DeleteRequestBuilder<ClassroomGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClassroomGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClassroomGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ClassroomGroups<T>
  ): DeleteRequestBuilder<ClassroomGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    classroomGroupId?: string
  ): DeleteRequestBuilder<ClassroomGroups<T>, T> {
    return new DeleteRequestBuilder<ClassroomGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ClassroomGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ClassroomGroupId: classroomGroupId!
          }
    );
  }
}
