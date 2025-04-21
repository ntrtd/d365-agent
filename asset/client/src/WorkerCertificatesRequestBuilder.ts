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
import { WorkerCertificates } from './WorkerCertificates';

/**
 * Request builder class for operations supported on the {@link WorkerCertificates} entity.
 */
export class WorkerCertificatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerCertificates<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerCertificates` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerCertificates` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerCertificates<T>, T> {
    return new GetAllRequestBuilder<WorkerCertificates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerCertificates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerCertificates`.
   */
  create(
    entity: WorkerCertificates<T>
  ): CreateRequestBuilder<WorkerCertificates<T>, T> {
    return new CreateRequestBuilder<WorkerCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerCertificates` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerCertificates.personnelNumber}.
   * @param certificateTypeId Key property. See {@link WorkerCertificates.certificateTypeId}.
   * @param startDate Key property. See {@link WorkerCertificates.startDate}.
   * @returns A request builder for creating requests to retrieve one `WorkerCertificates` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    certificateTypeId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerCertificates<T>, T> {
    return new GetByKeyRequestBuilder<WorkerCertificates<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        CertificateTypeId: certificateTypeId,
        StartDate: startDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerCertificates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerCertificates`.
   */
  update(
    entity: WorkerCertificates<T>
  ): UpdateRequestBuilder<WorkerCertificates<T>, T> {
    return new UpdateRequestBuilder<WorkerCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerCertificates`.
   * @param personnelNumber Key property. See {@link WorkerCertificates.personnelNumber}.
   * @param certificateTypeId Key property. See {@link WorkerCertificates.certificateTypeId}.
   * @param startDate Key property. See {@link WorkerCertificates.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerCertificates`.
   */
  delete(
    personnelNumber: string,
    certificateTypeId: string,
    startDate: Moment
  ): DeleteRequestBuilder<WorkerCertificates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerCertificates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerCertificates` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerCertificates<T>
  ): DeleteRequestBuilder<WorkerCertificates<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    certificateTypeId?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<WorkerCertificates<T>, T> {
    return new DeleteRequestBuilder<WorkerCertificates<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerCertificates
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            CertificateTypeId: certificateTypeId!,
            StartDate: startDate!
          }
    );
  }
}
