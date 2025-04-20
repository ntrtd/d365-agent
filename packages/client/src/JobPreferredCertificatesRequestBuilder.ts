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
import { JobPreferredCertificates } from './JobPreferredCertificates';

/**
 * Request builder class for operations supported on the {@link JobPreferredCertificates} entity.
 */
export class JobPreferredCertificatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobPreferredCertificates<T>, T> {
  /**
   * Returns a request builder for querying all `JobPreferredCertificates` entities.
   * @returns A request builder for creating requests to retrieve all `JobPreferredCertificates` entities.
   */
  getAll(): GetAllRequestBuilder<JobPreferredCertificates<T>, T> {
    return new GetAllRequestBuilder<JobPreferredCertificates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JobPreferredCertificates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobPreferredCertificates`.
   */
  create(
    entity: JobPreferredCertificates<T>
  ): CreateRequestBuilder<JobPreferredCertificates<T>, T> {
    return new CreateRequestBuilder<JobPreferredCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobPreferredCertificates` entity based on its keys.
   * @param jobId Key property. See {@link JobPreferredCertificates.jobId}.
   * @param certificateTypeId Key property. See {@link JobPreferredCertificates.certificateTypeId}.
   * @returns A request builder for creating requests to retrieve one `JobPreferredCertificates` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    certificateTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobPreferredCertificates<T>, T> {
    return new GetByKeyRequestBuilder<JobPreferredCertificates<T>, T>(
      this.entityApi,
      {
        JobId: jobId,
        CertificateTypeId: certificateTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobPreferredCertificates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobPreferredCertificates`.
   */
  update(
    entity: JobPreferredCertificates<T>
  ): UpdateRequestBuilder<JobPreferredCertificates<T>, T> {
    return new UpdateRequestBuilder<JobPreferredCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobPreferredCertificates`.
   * @param jobId Key property. See {@link JobPreferredCertificates.jobId}.
   * @param certificateTypeId Key property. See {@link JobPreferredCertificates.certificateTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `JobPreferredCertificates`.
   */
  delete(
    jobId: string,
    certificateTypeId: string
  ): DeleteRequestBuilder<JobPreferredCertificates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobPreferredCertificates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobPreferredCertificates` by taking the entity as a parameter.
   */
  delete(
    entity: JobPreferredCertificates<T>
  ): DeleteRequestBuilder<JobPreferredCertificates<T>, T>;
  delete(
    jobIdOrEntity: any,
    certificateTypeId?: string
  ): DeleteRequestBuilder<JobPreferredCertificates<T>, T> {
    return new DeleteRequestBuilder<JobPreferredCertificates<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobPreferredCertificates
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            CertificateTypeId: certificateTypeId!
          }
    );
  }
}
