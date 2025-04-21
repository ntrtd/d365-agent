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
import { JobTemplateResponsibilities } from './JobTemplateResponsibilities';

/**
 * Request builder class for operations supported on the {@link JobTemplateResponsibilities} entity.
 */
export class JobTemplateResponsibilitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTemplateResponsibilities<T>, T> {
  /**
   * Returns a request builder for querying all `JobTemplateResponsibilities` entities.
   * @returns A request builder for creating requests to retrieve all `JobTemplateResponsibilities` entities.
   */
  getAll(): GetAllRequestBuilder<JobTemplateResponsibilities<T>, T> {
    return new GetAllRequestBuilder<JobTemplateResponsibilities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JobTemplateResponsibilities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTemplateResponsibilities`.
   */
  create(
    entity: JobTemplateResponsibilities<T>
  ): CreateRequestBuilder<JobTemplateResponsibilities<T>, T> {
    return new CreateRequestBuilder<JobTemplateResponsibilities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobTemplateResponsibilities` entity based on its keys.
   * @param jobTemplateId Key property. See {@link JobTemplateResponsibilities.jobTemplateId}.
   * @param areaOfResponsibilityId Key property. See {@link JobTemplateResponsibilities.areaOfResponsibilityId}.
   * @returns A request builder for creating requests to retrieve one `JobTemplateResponsibilities` entity based on its keys.
   */
  getByKey(
    jobTemplateId: DeserializedType<T, 'Edm.String'>,
    areaOfResponsibilityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTemplateResponsibilities<T>, T> {
    return new GetByKeyRequestBuilder<JobTemplateResponsibilities<T>, T>(
      this.entityApi,
      {
        JobTemplateId: jobTemplateId,
        AreaOfResponsibilityId: areaOfResponsibilityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobTemplateResponsibilities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTemplateResponsibilities`.
   */
  update(
    entity: JobTemplateResponsibilities<T>
  ): UpdateRequestBuilder<JobTemplateResponsibilities<T>, T> {
    return new UpdateRequestBuilder<JobTemplateResponsibilities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTemplateResponsibilities`.
   * @param jobTemplateId Key property. See {@link JobTemplateResponsibilities.jobTemplateId}.
   * @param areaOfResponsibilityId Key property. See {@link JobTemplateResponsibilities.areaOfResponsibilityId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateResponsibilities`.
   */
  delete(
    jobTemplateId: string,
    areaOfResponsibilityId: string
  ): DeleteRequestBuilder<JobTemplateResponsibilities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTemplateResponsibilities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateResponsibilities` by taking the entity as a parameter.
   */
  delete(
    entity: JobTemplateResponsibilities<T>
  ): DeleteRequestBuilder<JobTemplateResponsibilities<T>, T>;
  delete(
    jobTemplateIdOrEntity: any,
    areaOfResponsibilityId?: string
  ): DeleteRequestBuilder<JobTemplateResponsibilities<T>, T> {
    return new DeleteRequestBuilder<JobTemplateResponsibilities<T>, T>(
      this.entityApi,
      jobTemplateIdOrEntity instanceof JobTemplateResponsibilities
        ? jobTemplateIdOrEntity
        : {
            JobTemplateId: jobTemplateIdOrEntity!,
            AreaOfResponsibilityId: areaOfResponsibilityId!
          }
    );
  }
}
