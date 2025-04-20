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
import { ServiceCodes } from './ServiceCodes';

/**
 * Request builder class for operations supported on the {@link ServiceCodes} entity.
 */
export class ServiceCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCodes<T>, T> {
    return new GetAllRequestBuilder<ServiceCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCodes`.
   */
  create(entity: ServiceCodes<T>): CreateRequestBuilder<ServiceCodes<T>, T> {
    return new CreateRequestBuilder<ServiceCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ServiceCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ServiceCodes.dataAreaId}.
   * @param serviceCode Key property. See {@link ServiceCodes.serviceCode}.
   * @returns A request builder for creating requests to retrieve one `ServiceCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceCodes<T>, T> {
    return new GetByKeyRequestBuilder<ServiceCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ServiceCode: serviceCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCodes`.
   */
  update(entity: ServiceCodes<T>): UpdateRequestBuilder<ServiceCodes<T>, T> {
    return new UpdateRequestBuilder<ServiceCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCodes`.
   * @param dataAreaId Key property. See {@link ServiceCodes.dataAreaId}.
   * @param serviceCode Key property. See {@link ServiceCodes.serviceCode}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCodes`.
   */
  delete(
    dataAreaId: string,
    serviceCode: string
  ): DeleteRequestBuilder<ServiceCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCodes` by taking the entity as a parameter.
   */
  delete(entity: ServiceCodes<T>): DeleteRequestBuilder<ServiceCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceCode?: string
  ): DeleteRequestBuilder<ServiceCodes<T>, T> {
    return new DeleteRequestBuilder<ServiceCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ServiceCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceCode: serviceCode!
          }
    );
  }
}
