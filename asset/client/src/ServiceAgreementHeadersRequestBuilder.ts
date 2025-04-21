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
import { ServiceAgreementHeaders } from './ServiceAgreementHeaders';

/**
 * Request builder class for operations supported on the {@link ServiceAgreementHeaders} entity.
 */
export class ServiceAgreementHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceAgreementHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceAgreementHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceAgreementHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceAgreementHeaders<T>, T> {
    return new GetAllRequestBuilder<ServiceAgreementHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceAgreementHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceAgreementHeaders`.
   */
  create(
    entity: ServiceAgreementHeaders<T>
  ): CreateRequestBuilder<ServiceAgreementHeaders<T>, T> {
    return new CreateRequestBuilder<ServiceAgreementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceAgreementHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ServiceAgreementHeaders.dataAreaId}.
   * @param serviceAgreementId Key property. See {@link ServiceAgreementHeaders.serviceAgreementId}.
   * @returns A request builder for creating requests to retrieve one `ServiceAgreementHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceAgreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceAgreementHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ServiceAgreementHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ServiceAgreementId: serviceAgreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceAgreementHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceAgreementHeaders`.
   */
  update(
    entity: ServiceAgreementHeaders<T>
  ): UpdateRequestBuilder<ServiceAgreementHeaders<T>, T> {
    return new UpdateRequestBuilder<ServiceAgreementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceAgreementHeaders`.
   * @param dataAreaId Key property. See {@link ServiceAgreementHeaders.dataAreaId}.
   * @param serviceAgreementId Key property. See {@link ServiceAgreementHeaders.serviceAgreementId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceAgreementHeaders`.
   */
  delete(
    dataAreaId: string,
    serviceAgreementId: string
  ): DeleteRequestBuilder<ServiceAgreementHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceAgreementHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceAgreementHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceAgreementHeaders<T>
  ): DeleteRequestBuilder<ServiceAgreementHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceAgreementId?: string
  ): DeleteRequestBuilder<ServiceAgreementHeaders<T>, T> {
    return new DeleteRequestBuilder<ServiceAgreementHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ServiceAgreementHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceAgreementId: serviceAgreementId!
          }
    );
  }
}
