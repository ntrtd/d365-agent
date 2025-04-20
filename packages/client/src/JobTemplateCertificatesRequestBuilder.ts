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
import { JobTemplateCertificates } from './JobTemplateCertificates';

/**
 * Request builder class for operations supported on the {@link JobTemplateCertificates} entity.
 */
export class JobTemplateCertificatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTemplateCertificates<T>, T> {
  /**
   * Returns a request builder for querying all `JobTemplateCertificates` entities.
   * @returns A request builder for creating requests to retrieve all `JobTemplateCertificates` entities.
   */
  getAll(): GetAllRequestBuilder<JobTemplateCertificates<T>, T> {
    return new GetAllRequestBuilder<JobTemplateCertificates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JobTemplateCertificates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTemplateCertificates`.
   */
  create(
    entity: JobTemplateCertificates<T>
  ): CreateRequestBuilder<JobTemplateCertificates<T>, T> {
    return new CreateRequestBuilder<JobTemplateCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobTemplateCertificates` entity based on its keys.
   * @param jobTemplateId Key property. See {@link JobTemplateCertificates.jobTemplateId}.
   * @param certificateTypeId Key property. See {@link JobTemplateCertificates.certificateTypeId}.
   * @returns A request builder for creating requests to retrieve one `JobTemplateCertificates` entity based on its keys.
   */
  getByKey(
    jobTemplateId: DeserializedType<T, 'Edm.String'>,
    certificateTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTemplateCertificates<T>, T> {
    return new GetByKeyRequestBuilder<JobTemplateCertificates<T>, T>(
      this.entityApi,
      {
        JobTemplateId: jobTemplateId,
        CertificateTypeId: certificateTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobTemplateCertificates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTemplateCertificates`.
   */
  update(
    entity: JobTemplateCertificates<T>
  ): UpdateRequestBuilder<JobTemplateCertificates<T>, T> {
    return new UpdateRequestBuilder<JobTemplateCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTemplateCertificates`.
   * @param jobTemplateId Key property. See {@link JobTemplateCertificates.jobTemplateId}.
   * @param certificateTypeId Key property. See {@link JobTemplateCertificates.certificateTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateCertificates`.
   */
  delete(
    jobTemplateId: string,
    certificateTypeId: string
  ): DeleteRequestBuilder<JobTemplateCertificates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTemplateCertificates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateCertificates` by taking the entity as a parameter.
   */
  delete(
    entity: JobTemplateCertificates<T>
  ): DeleteRequestBuilder<JobTemplateCertificates<T>, T>;
  delete(
    jobTemplateIdOrEntity: any,
    certificateTypeId?: string
  ): DeleteRequestBuilder<JobTemplateCertificates<T>, T> {
    return new DeleteRequestBuilder<JobTemplateCertificates<T>, T>(
      this.entityApi,
      jobTemplateIdOrEntity instanceof JobTemplateCertificates
        ? jobTemplateIdOrEntity
        : {
            JobTemplateId: jobTemplateIdOrEntity!,
            CertificateTypeId: certificateTypeId!
          }
    );
  }
}
