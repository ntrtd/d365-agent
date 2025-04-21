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
import { EducationInstitutions } from './EducationInstitutions';

/**
 * Request builder class for operations supported on the {@link EducationInstitutions} entity.
 */
export class EducationInstitutionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EducationInstitutions<T>, T> {
  /**
   * Returns a request builder for querying all `EducationInstitutions` entities.
   * @returns A request builder for creating requests to retrieve all `EducationInstitutions` entities.
   */
  getAll(): GetAllRequestBuilder<EducationInstitutions<T>, T> {
    return new GetAllRequestBuilder<EducationInstitutions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EducationInstitutions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EducationInstitutions`.
   */
  create(
    entity: EducationInstitutions<T>
  ): CreateRequestBuilder<EducationInstitutions<T>, T> {
    return new CreateRequestBuilder<EducationInstitutions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EducationInstitutions` entity based on its keys.
   * @param institution Key property. See {@link EducationInstitutions.institution}.
   * @returns A request builder for creating requests to retrieve one `EducationInstitutions` entity based on its keys.
   */
  getByKey(
    institution: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EducationInstitutions<T>, T> {
    return new GetByKeyRequestBuilder<EducationInstitutions<T>, T>(
      this.entityApi,
      { Institution: institution }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EducationInstitutions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EducationInstitutions`.
   */
  update(
    entity: EducationInstitutions<T>
  ): UpdateRequestBuilder<EducationInstitutions<T>, T> {
    return new UpdateRequestBuilder<EducationInstitutions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EducationInstitutions`.
   * @param institution Key property. See {@link EducationInstitutions.institution}.
   * @returns A request builder for creating requests that delete an entity of type `EducationInstitutions`.
   */
  delete(
    institution: string
  ): DeleteRequestBuilder<EducationInstitutions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EducationInstitutions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EducationInstitutions` by taking the entity as a parameter.
   */
  delete(
    entity: EducationInstitutions<T>
  ): DeleteRequestBuilder<EducationInstitutions<T>, T>;
  delete(
    institutionOrEntity: any
  ): DeleteRequestBuilder<EducationInstitutions<T>, T> {
    return new DeleteRequestBuilder<EducationInstitutions<T>, T>(
      this.entityApi,
      institutionOrEntity instanceof EducationInstitutions
        ? institutionOrEntity
        : { Institution: institutionOrEntity! }
    );
  }
}
