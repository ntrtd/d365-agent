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
import { RetailDevices } from './RetailDevices';

/**
 * Request builder class for operations supported on the {@link RetailDevices} entity.
 */
export class RetailDevicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDevices<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDevices` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDevices` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDevices<T>, T> {
    return new GetAllRequestBuilder<RetailDevices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailDevices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDevices`.
   */
  create(entity: RetailDevices<T>): CreateRequestBuilder<RetailDevices<T>, T> {
    return new CreateRequestBuilder<RetailDevices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDevices` entity based on its keys.
   * @param deviceId Key property. See {@link RetailDevices.deviceId}.
   * @returns A request builder for creating requests to retrieve one `RetailDevices` entity based on its keys.
   */
  getByKey(
    deviceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailDevices<T>, T> {
    return new GetByKeyRequestBuilder<RetailDevices<T>, T>(this.entityApi, {
      DeviceId: deviceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDevices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDevices`.
   */
  update(entity: RetailDevices<T>): UpdateRequestBuilder<RetailDevices<T>, T> {
    return new UpdateRequestBuilder<RetailDevices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDevices`.
   * @param deviceId Key property. See {@link RetailDevices.deviceId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDevices`.
   */
  delete(deviceId: string): DeleteRequestBuilder<RetailDevices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDevices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDevices` by taking the entity as a parameter.
   */
  delete(entity: RetailDevices<T>): DeleteRequestBuilder<RetailDevices<T>, T>;
  delete(deviceIdOrEntity: any): DeleteRequestBuilder<RetailDevices<T>, T> {
    return new DeleteRequestBuilder<RetailDevices<T>, T>(
      this.entityApi,
      deviceIdOrEntity instanceof RetailDevices
        ? deviceIdOrEntity
        : { DeviceId: deviceIdOrEntity! }
    );
  }
}
