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
import { EducationDegrees } from './EducationDegrees';

/**
 * Request builder class for operations supported on the {@link EducationDegrees} entity.
 */
export class EducationDegreesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EducationDegrees<T>, T> {
  /**
   * Returns a request builder for querying all `EducationDegrees` entities.
   * @returns A request builder for creating requests to retrieve all `EducationDegrees` entities.
   */
  getAll(): GetAllRequestBuilder<EducationDegrees<T>, T> {
    return new GetAllRequestBuilder<EducationDegrees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EducationDegrees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EducationDegrees`.
   */
  create(
    entity: EducationDegrees<T>
  ): CreateRequestBuilder<EducationDegrees<T>, T> {
    return new CreateRequestBuilder<EducationDegrees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EducationDegrees` entity based on its keys.
   * @param levelOfEducation Key property. See {@link EducationDegrees.levelOfEducation}.
   * @returns A request builder for creating requests to retrieve one `EducationDegrees` entity based on its keys.
   */
  getByKey(
    levelOfEducation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EducationDegrees<T>, T> {
    return new GetByKeyRequestBuilder<EducationDegrees<T>, T>(this.entityApi, {
      LevelOfEducation: levelOfEducation
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EducationDegrees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EducationDegrees`.
   */
  update(
    entity: EducationDegrees<T>
  ): UpdateRequestBuilder<EducationDegrees<T>, T> {
    return new UpdateRequestBuilder<EducationDegrees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EducationDegrees`.
   * @param levelOfEducation Key property. See {@link EducationDegrees.levelOfEducation}.
   * @returns A request builder for creating requests that delete an entity of type `EducationDegrees`.
   */
  delete(
    levelOfEducation: string
  ): DeleteRequestBuilder<EducationDegrees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EducationDegrees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EducationDegrees` by taking the entity as a parameter.
   */
  delete(
    entity: EducationDegrees<T>
  ): DeleteRequestBuilder<EducationDegrees<T>, T>;
  delete(
    levelOfEducationOrEntity: any
  ): DeleteRequestBuilder<EducationDegrees<T>, T> {
    return new DeleteRequestBuilder<EducationDegrees<T>, T>(
      this.entityApi,
      levelOfEducationOrEntity instanceof EducationDegrees
        ? levelOfEducationOrEntity
        : { LevelOfEducation: levelOfEducationOrEntity! }
    );
  }
}
