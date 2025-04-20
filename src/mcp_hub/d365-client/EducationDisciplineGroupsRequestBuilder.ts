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
import { EducationDisciplineGroups } from './EducationDisciplineGroups';

/**
 * Request builder class for operations supported on the {@link EducationDisciplineGroups} entity.
 */
export class EducationDisciplineGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EducationDisciplineGroups<T>, T> {
  /**
   * Returns a request builder for querying all `EducationDisciplineGroups` entities.
   * @returns A request builder for creating requests to retrieve all `EducationDisciplineGroups` entities.
   */
  getAll(): GetAllRequestBuilder<EducationDisciplineGroups<T>, T> {
    return new GetAllRequestBuilder<EducationDisciplineGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EducationDisciplineGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EducationDisciplineGroups`.
   */
  create(
    entity: EducationDisciplineGroups<T>
  ): CreateRequestBuilder<EducationDisciplineGroups<T>, T> {
    return new CreateRequestBuilder<EducationDisciplineGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EducationDisciplineGroups` entity based on its keys.
   * @param educationId Key property. See {@link EducationDisciplineGroups.educationId}.
   * @param educationDisciplineCategoryId Key property. See {@link EducationDisciplineGroups.educationDisciplineCategoryId}.
   * @returns A request builder for creating requests to retrieve one `EducationDisciplineGroups` entity based on its keys.
   */
  getByKey(
    educationId: DeserializedType<T, 'Edm.String'>,
    educationDisciplineCategoryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EducationDisciplineGroups<T>, T> {
    return new GetByKeyRequestBuilder<EducationDisciplineGroups<T>, T>(
      this.entityApi,
      {
        EducationId: educationId,
        EducationDisciplineCategoryId: educationDisciplineCategoryId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EducationDisciplineGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EducationDisciplineGroups`.
   */
  update(
    entity: EducationDisciplineGroups<T>
  ): UpdateRequestBuilder<EducationDisciplineGroups<T>, T> {
    return new UpdateRequestBuilder<EducationDisciplineGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EducationDisciplineGroups`.
   * @param educationId Key property. See {@link EducationDisciplineGroups.educationId}.
   * @param educationDisciplineCategoryId Key property. See {@link EducationDisciplineGroups.educationDisciplineCategoryId}.
   * @returns A request builder for creating requests that delete an entity of type `EducationDisciplineGroups`.
   */
  delete(
    educationId: string,
    educationDisciplineCategoryId: string
  ): DeleteRequestBuilder<EducationDisciplineGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EducationDisciplineGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EducationDisciplineGroups` by taking the entity as a parameter.
   */
  delete(
    entity: EducationDisciplineGroups<T>
  ): DeleteRequestBuilder<EducationDisciplineGroups<T>, T>;
  delete(
    educationIdOrEntity: any,
    educationDisciplineCategoryId?: string
  ): DeleteRequestBuilder<EducationDisciplineGroups<T>, T> {
    return new DeleteRequestBuilder<EducationDisciplineGroups<T>, T>(
      this.entityApi,
      educationIdOrEntity instanceof EducationDisciplineGroups
        ? educationIdOrEntity
        : {
            EducationId: educationIdOrEntity!,
            EducationDisciplineCategoryId: educationDisciplineCategoryId!
          }
    );
  }
}
