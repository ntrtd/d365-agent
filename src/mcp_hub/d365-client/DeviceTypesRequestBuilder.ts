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
import { DeviceTypes } from './DeviceTypes';

/**
 * Request builder class for operations supported on the {@link DeviceTypes} entity.
 */
export class DeviceTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeviceTypes<T>, T> {
  /**
   * Returns a request builder for querying all `DeviceTypes` entities.
   * @returns A request builder for creating requests to retrieve all `DeviceTypes` entities.
   */
  getAll(): GetAllRequestBuilder<DeviceTypes<T>, T> {
    return new GetAllRequestBuilder<DeviceTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeviceTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeviceTypes`.
   */
  create(entity: DeviceTypes<T>): CreateRequestBuilder<DeviceTypes<T>, T> {
    return new CreateRequestBuilder<DeviceTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DeviceTypes` entity based on its keys.
   * @param type Key property. See {@link DeviceTypes.type}.
   * @returns A request builder for creating requests to retrieve one `DeviceTypes` entity based on its keys.
   */
  getByKey(
    type: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DeviceTypes<T>, T> {
    return new GetByKeyRequestBuilder<DeviceTypes<T>, T>(this.entityApi, {
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DeviceTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeviceTypes`.
   */
  update(entity: DeviceTypes<T>): UpdateRequestBuilder<DeviceTypes<T>, T> {
    return new UpdateRequestBuilder<DeviceTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DeviceTypes`.
   * @param type Key property. See {@link DeviceTypes.type}.
   * @returns A request builder for creating requests that delete an entity of type `DeviceTypes`.
   */
  delete(type: number): DeleteRequestBuilder<DeviceTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeviceTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeviceTypes` by taking the entity as a parameter.
   */
  delete(entity: DeviceTypes<T>): DeleteRequestBuilder<DeviceTypes<T>, T>;
  delete(typeOrEntity: any): DeleteRequestBuilder<DeviceTypes<T>, T> {
    return new DeleteRequestBuilder<DeviceTypes<T>, T>(
      this.entityApi,
      typeOrEntity instanceof DeviceTypes
        ? typeOrEntity
        : { Type: typeOrEntity! }
    );
  }
}
