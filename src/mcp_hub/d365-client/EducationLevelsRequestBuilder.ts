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
import { EducationLevels } from './EducationLevels';

/**
 * Request builder class for operations supported on the {@link EducationLevels} entity.
 */
export class EducationLevelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EducationLevels<T>, T> {
  /**
   * Returns a request builder for querying all `EducationLevels` entities.
   * @returns A request builder for creating requests to retrieve all `EducationLevels` entities.
   */
  getAll(): GetAllRequestBuilder<EducationLevels<T>, T> {
    return new GetAllRequestBuilder<EducationLevels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EducationLevels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EducationLevels`.
   */
  create(
    entity: EducationLevels<T>
  ): CreateRequestBuilder<EducationLevels<T>, T> {
    return new CreateRequestBuilder<EducationLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EducationLevels` entity based on its keys.
   * @param educationLevelId Key property. See {@link EducationLevels.educationLevelId}.
   * @returns A request builder for creating requests to retrieve one `EducationLevels` entity based on its keys.
   */
  getByKey(
    educationLevelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EducationLevels<T>, T> {
    return new GetByKeyRequestBuilder<EducationLevels<T>, T>(this.entityApi, {
      EducationLevelId: educationLevelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EducationLevels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EducationLevels`.
   */
  update(
    entity: EducationLevels<T>
  ): UpdateRequestBuilder<EducationLevels<T>, T> {
    return new UpdateRequestBuilder<EducationLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EducationLevels`.
   * @param educationLevelId Key property. See {@link EducationLevels.educationLevelId}.
   * @returns A request builder for creating requests that delete an entity of type `EducationLevels`.
   */
  delete(educationLevelId: string): DeleteRequestBuilder<EducationLevels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EducationLevels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EducationLevels` by taking the entity as a parameter.
   */
  delete(
    entity: EducationLevels<T>
  ): DeleteRequestBuilder<EducationLevels<T>, T>;
  delete(
    educationLevelIdOrEntity: any
  ): DeleteRequestBuilder<EducationLevels<T>, T> {
    return new DeleteRequestBuilder<EducationLevels<T>, T>(
      this.entityApi,
      educationLevelIdOrEntity instanceof EducationLevels
        ? educationLevelIdOrEntity
        : { EducationLevelId: educationLevelIdOrEntity! }
    );
  }
}
