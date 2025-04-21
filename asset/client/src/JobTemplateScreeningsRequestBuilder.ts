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
import { JobTemplateScreenings } from './JobTemplateScreenings';

/**
 * Request builder class for operations supported on the {@link JobTemplateScreenings} entity.
 */
export class JobTemplateScreeningsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTemplateScreenings<T>, T> {
  /**
   * Returns a request builder for querying all `JobTemplateScreenings` entities.
   * @returns A request builder for creating requests to retrieve all `JobTemplateScreenings` entities.
   */
  getAll(): GetAllRequestBuilder<JobTemplateScreenings<T>, T> {
    return new GetAllRequestBuilder<JobTemplateScreenings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JobTemplateScreenings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTemplateScreenings`.
   */
  create(
    entity: JobTemplateScreenings<T>
  ): CreateRequestBuilder<JobTemplateScreenings<T>, T> {
    return new CreateRequestBuilder<JobTemplateScreenings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobTemplateScreenings` entity based on its keys.
   * @param jobTemplateId Key property. See {@link JobTemplateScreenings.jobTemplateId}.
   * @param screeningTypeId Key property. See {@link JobTemplateScreenings.screeningTypeId}.
   * @returns A request builder for creating requests to retrieve one `JobTemplateScreenings` entity based on its keys.
   */
  getByKey(
    jobTemplateId: DeserializedType<T, 'Edm.String'>,
    screeningTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTemplateScreenings<T>, T> {
    return new GetByKeyRequestBuilder<JobTemplateScreenings<T>, T>(
      this.entityApi,
      {
        JobTemplateId: jobTemplateId,
        ScreeningTypeId: screeningTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobTemplateScreenings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTemplateScreenings`.
   */
  update(
    entity: JobTemplateScreenings<T>
  ): UpdateRequestBuilder<JobTemplateScreenings<T>, T> {
    return new UpdateRequestBuilder<JobTemplateScreenings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTemplateScreenings`.
   * @param jobTemplateId Key property. See {@link JobTemplateScreenings.jobTemplateId}.
   * @param screeningTypeId Key property. See {@link JobTemplateScreenings.screeningTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateScreenings`.
   */
  delete(
    jobTemplateId: string,
    screeningTypeId: string
  ): DeleteRequestBuilder<JobTemplateScreenings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTemplateScreenings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateScreenings` by taking the entity as a parameter.
   */
  delete(
    entity: JobTemplateScreenings<T>
  ): DeleteRequestBuilder<JobTemplateScreenings<T>, T>;
  delete(
    jobTemplateIdOrEntity: any,
    screeningTypeId?: string
  ): DeleteRequestBuilder<JobTemplateScreenings<T>, T> {
    return new DeleteRequestBuilder<JobTemplateScreenings<T>, T>(
      this.entityApi,
      jobTemplateIdOrEntity instanceof JobTemplateScreenings
        ? jobTemplateIdOrEntity
        : {
            JobTemplateId: jobTemplateIdOrEntity!,
            ScreeningTypeId: screeningTypeId!
          }
    );
  }
}
