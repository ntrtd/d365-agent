/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ApplicantCertificates } from './ApplicantCertificates';

/**
 * Request builder class for operations supported on the {@link ApplicantCertificates} entity.
 */
export class ApplicantCertificatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicantCertificates<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicantCertificates` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicantCertificates` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicantCertificates<T>, T> {
    return new GetAllRequestBuilder<ApplicantCertificates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApplicantCertificates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicantCertificates`.
   */
  create(
    entity: ApplicantCertificates<T>
  ): CreateRequestBuilder<ApplicantCertificates<T>, T> {
    return new CreateRequestBuilder<ApplicantCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicantCertificates` entity based on its keys.
   * @param applicantId Key property. See {@link ApplicantCertificates.applicantId}.
   * @param certificateTypeId Key property. See {@link ApplicantCertificates.certificateTypeId}.
   * @param startDate Key property. See {@link ApplicantCertificates.startDate}.
   * @returns A request builder for creating requests to retrieve one `ApplicantCertificates` entity based on its keys.
   */
  getByKey(
    applicantId: DeserializedType<T, 'Edm.String'>,
    certificateTypeId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ApplicantCertificates<T>, T> {
    return new GetByKeyRequestBuilder<ApplicantCertificates<T>, T>(
      this.entityApi,
      {
        ApplicantId: applicantId,
        CertificateTypeId: certificateTypeId,
        StartDate: startDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicantCertificates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicantCertificates`.
   */
  update(
    entity: ApplicantCertificates<T>
  ): UpdateRequestBuilder<ApplicantCertificates<T>, T> {
    return new UpdateRequestBuilder<ApplicantCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicantCertificates`.
   * @param applicantId Key property. See {@link ApplicantCertificates.applicantId}.
   * @param certificateTypeId Key property. See {@link ApplicantCertificates.certificateTypeId}.
   * @param startDate Key property. See {@link ApplicantCertificates.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantCertificates`.
   */
  delete(
    applicantId: string,
    certificateTypeId: string,
    startDate: Moment
  ): DeleteRequestBuilder<ApplicantCertificates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicantCertificates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantCertificates` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicantCertificates<T>
  ): DeleteRequestBuilder<ApplicantCertificates<T>, T>;
  delete(
    applicantIdOrEntity: any,
    certificateTypeId?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<ApplicantCertificates<T>, T> {
    return new DeleteRequestBuilder<ApplicantCertificates<T>, T>(
      this.entityApi,
      applicantIdOrEntity instanceof ApplicantCertificates
        ? applicantIdOrEntity
        : {
            ApplicantId: applicantIdOrEntity!,
            CertificateTypeId: certificateTypeId!,
            StartDate: startDate!
          }
    );
  }
}
