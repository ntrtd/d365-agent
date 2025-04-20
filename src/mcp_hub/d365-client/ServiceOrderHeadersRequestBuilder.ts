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
import { ServiceOrderHeaders } from './ServiceOrderHeaders';

/**
 * Request builder class for operations supported on the {@link ServiceOrderHeaders} entity.
 */
export class ServiceOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<ServiceOrderHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderHeaders`.
   */
  create(
    entity: ServiceOrderHeaders<T>
  ): CreateRequestBuilder<ServiceOrderHeaders<T>, T> {
    return new CreateRequestBuilder<ServiceOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ServiceOrderHeaders.dataAreaId}.
   * @param serviceOrderNumber Key property. See {@link ServiceOrderHeaders.serviceOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ServiceOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ServiceOrderNumber: serviceOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceOrderHeaders`.
   */
  update(
    entity: ServiceOrderHeaders<T>
  ): UpdateRequestBuilder<ServiceOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<ServiceOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderHeaders`.
   * @param dataAreaId Key property. See {@link ServiceOrderHeaders.dataAreaId}.
   * @param serviceOrderNumber Key property. See {@link ServiceOrderHeaders.serviceOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    serviceOrderNumber: string
  ): DeleteRequestBuilder<ServiceOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrderHeaders<T>
  ): DeleteRequestBuilder<ServiceOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceOrderNumber?: string
  ): DeleteRequestBuilder<ServiceOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<ServiceOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ServiceOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceOrderNumber: serviceOrderNumber!
          }
    );
  }
}
