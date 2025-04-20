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
import { ClassificationGroups } from './ClassificationGroups';

/**
 * Request builder class for operations supported on the {@link ClassificationGroups} entity.
 */
export class ClassificationGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClassificationGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ClassificationGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ClassificationGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ClassificationGroups<T>, T> {
    return new GetAllRequestBuilder<ClassificationGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ClassificationGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClassificationGroups`.
   */
  create(
    entity: ClassificationGroups<T>
  ): CreateRequestBuilder<ClassificationGroups<T>, T> {
    return new CreateRequestBuilder<ClassificationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClassificationGroups` entity based on its keys.
   * @param classGroupCode Key property. See {@link ClassificationGroups.classGroupCode}.
   * @returns A request builder for creating requests to retrieve one `ClassificationGroups` entity based on its keys.
   */
  getByKey(
    classGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ClassificationGroups<T>, T> {
    return new GetByKeyRequestBuilder<ClassificationGroups<T>, T>(
      this.entityApi,
      { ClassGroupCode: classGroupCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ClassificationGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClassificationGroups`.
   */
  update(
    entity: ClassificationGroups<T>
  ): UpdateRequestBuilder<ClassificationGroups<T>, T> {
    return new UpdateRequestBuilder<ClassificationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClassificationGroups`.
   * @param classGroupCode Key property. See {@link ClassificationGroups.classGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `ClassificationGroups`.
   */
  delete(
    classGroupCode: string
  ): DeleteRequestBuilder<ClassificationGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClassificationGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClassificationGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ClassificationGroups<T>
  ): DeleteRequestBuilder<ClassificationGroups<T>, T>;
  delete(
    classGroupCodeOrEntity: any
  ): DeleteRequestBuilder<ClassificationGroups<T>, T> {
    return new DeleteRequestBuilder<ClassificationGroups<T>, T>(
      this.entityApi,
      classGroupCodeOrEntity instanceof ClassificationGroups
        ? classGroupCodeOrEntity
        : { ClassGroupCode: classGroupCodeOrEntity! }
    );
  }
}
