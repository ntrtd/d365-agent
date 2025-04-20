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
import { EducationDisciplines } from './EducationDisciplines';

/**
 * Request builder class for operations supported on the {@link EducationDisciplines} entity.
 */
export class EducationDisciplinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EducationDisciplines<T>, T> {
  /**
   * Returns a request builder for querying all `EducationDisciplines` entities.
   * @returns A request builder for creating requests to retrieve all `EducationDisciplines` entities.
   */
  getAll(): GetAllRequestBuilder<EducationDisciplines<T>, T> {
    return new GetAllRequestBuilder<EducationDisciplines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EducationDisciplines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EducationDisciplines`.
   */
  create(
    entity: EducationDisciplines<T>
  ): CreateRequestBuilder<EducationDisciplines<T>, T> {
    return new CreateRequestBuilder<EducationDisciplines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EducationDisciplines` entity based on its keys.
   * @param educationDiscipline Key property. See {@link EducationDisciplines.educationDiscipline}.
   * @returns A request builder for creating requests to retrieve one `EducationDisciplines` entity based on its keys.
   */
  getByKey(
    educationDiscipline: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EducationDisciplines<T>, T> {
    return new GetByKeyRequestBuilder<EducationDisciplines<T>, T>(
      this.entityApi,
      { EducationDiscipline: educationDiscipline }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EducationDisciplines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EducationDisciplines`.
   */
  update(
    entity: EducationDisciplines<T>
  ): UpdateRequestBuilder<EducationDisciplines<T>, T> {
    return new UpdateRequestBuilder<EducationDisciplines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EducationDisciplines`.
   * @param educationDiscipline Key property. See {@link EducationDisciplines.educationDiscipline}.
   * @returns A request builder for creating requests that delete an entity of type `EducationDisciplines`.
   */
  delete(
    educationDiscipline: string
  ): DeleteRequestBuilder<EducationDisciplines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EducationDisciplines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EducationDisciplines` by taking the entity as a parameter.
   */
  delete(
    entity: EducationDisciplines<T>
  ): DeleteRequestBuilder<EducationDisciplines<T>, T>;
  delete(
    educationDisciplineOrEntity: any
  ): DeleteRequestBuilder<EducationDisciplines<T>, T> {
    return new DeleteRequestBuilder<EducationDisciplines<T>, T>(
      this.entityApi,
      educationDisciplineOrEntity instanceof EducationDisciplines
        ? educationDisciplineOrEntity
        : { EducationDiscipline: educationDisciplineOrEntity! }
    );
  }
}
