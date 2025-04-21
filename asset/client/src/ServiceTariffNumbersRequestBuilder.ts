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
import { ServiceTariffNumbers } from './ServiceTariffNumbers';

/**
 * Request builder class for operations supported on the {@link ServiceTariffNumbers} entity.
 */
export class ServiceTariffNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceTariffNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceTariffNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceTariffNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceTariffNumbers<T>, T> {
    return new GetAllRequestBuilder<ServiceTariffNumbers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceTariffNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceTariffNumbers`.
   */
  create(
    entity: ServiceTariffNumbers<T>
  ): CreateRequestBuilder<ServiceTariffNumbers<T>, T> {
    return new CreateRequestBuilder<ServiceTariffNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceTariffNumbers` entity based on its keys.
   * @param dataAreaId Key property. See {@link ServiceTariffNumbers.dataAreaId}.
   * @param serviceTariffNumber Key property. See {@link ServiceTariffNumbers.serviceTariffNumber}.
   * @returns A request builder for creating requests to retrieve one `ServiceTariffNumbers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceTariffNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceTariffNumbers<T>, T> {
    return new GetByKeyRequestBuilder<ServiceTariffNumbers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ServiceTariffNumber: serviceTariffNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceTariffNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceTariffNumbers`.
   */
  update(
    entity: ServiceTariffNumbers<T>
  ): UpdateRequestBuilder<ServiceTariffNumbers<T>, T> {
    return new UpdateRequestBuilder<ServiceTariffNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceTariffNumbers`.
   * @param dataAreaId Key property. See {@link ServiceTariffNumbers.dataAreaId}.
   * @param serviceTariffNumber Key property. See {@link ServiceTariffNumbers.serviceTariffNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceTariffNumbers`.
   */
  delete(
    dataAreaId: string,
    serviceTariffNumber: string
  ): DeleteRequestBuilder<ServiceTariffNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceTariffNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceTariffNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceTariffNumbers<T>
  ): DeleteRequestBuilder<ServiceTariffNumbers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceTariffNumber?: string
  ): DeleteRequestBuilder<ServiceTariffNumbers<T>, T> {
    return new DeleteRequestBuilder<ServiceTariffNumbers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ServiceTariffNumbers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceTariffNumber: serviceTariffNumber!
          }
    );
  }
}
