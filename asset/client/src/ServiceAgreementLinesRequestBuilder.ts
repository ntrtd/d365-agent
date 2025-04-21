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
import { ServiceAgreementLines } from './ServiceAgreementLines';

/**
 * Request builder class for operations supported on the {@link ServiceAgreementLines} entity.
 */
export class ServiceAgreementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceAgreementLines<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceAgreementLines` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceAgreementLines` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceAgreementLines<T>, T> {
    return new GetAllRequestBuilder<ServiceAgreementLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceAgreementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceAgreementLines`.
   */
  create(
    entity: ServiceAgreementLines<T>
  ): CreateRequestBuilder<ServiceAgreementLines<T>, T> {
    return new CreateRequestBuilder<ServiceAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceAgreementLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ServiceAgreementLines.dataAreaId}.
   * @param serviceAgreementId Key property. See {@link ServiceAgreementLines.serviceAgreementId}.
   * @param lineNumber Key property. See {@link ServiceAgreementLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ServiceAgreementLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ServiceAgreementLines<T>, T> {
    return new GetByKeyRequestBuilder<ServiceAgreementLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ServiceAgreementId: serviceAgreementId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceAgreementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceAgreementLines`.
   */
  update(
    entity: ServiceAgreementLines<T>
  ): UpdateRequestBuilder<ServiceAgreementLines<T>, T> {
    return new UpdateRequestBuilder<ServiceAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceAgreementLines`.
   * @param dataAreaId Key property. See {@link ServiceAgreementLines.dataAreaId}.
   * @param serviceAgreementId Key property. See {@link ServiceAgreementLines.serviceAgreementId}.
   * @param lineNumber Key property. See {@link ServiceAgreementLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceAgreementLines`.
   */
  delete(
    dataAreaId: string,
    serviceAgreementId: string,
    lineNumber: number
  ): DeleteRequestBuilder<ServiceAgreementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceAgreementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceAgreementLines` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceAgreementLines<T>
  ): DeleteRequestBuilder<ServiceAgreementLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceAgreementId?: string,
    lineNumber?: number
  ): DeleteRequestBuilder<ServiceAgreementLines<T>, T> {
    return new DeleteRequestBuilder<ServiceAgreementLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ServiceAgreementLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceAgreementId: serviceAgreementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
