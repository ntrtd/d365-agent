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
import { WarehouseZones } from './WarehouseZones';

/**
 * Request builder class for operations supported on the {@link WarehouseZones} entity.
 */
export class WarehouseZonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseZones<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseZones` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseZones` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseZones<T>, T> {
    return new GetAllRequestBuilder<WarehouseZones<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseZones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseZones`.
   */
  create(
    entity: WarehouseZones<T>
  ): CreateRequestBuilder<WarehouseZones<T>, T> {
    return new CreateRequestBuilder<WarehouseZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseZones` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseZones.dataAreaId}.
   * @param zoneId Key property. See {@link WarehouseZones.zoneId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseZones` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    zoneId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseZones<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseZones<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ZoneId: zoneId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseZones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseZones`.
   */
  update(
    entity: WarehouseZones<T>
  ): UpdateRequestBuilder<WarehouseZones<T>, T> {
    return new UpdateRequestBuilder<WarehouseZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseZones`.
   * @param dataAreaId Key property. See {@link WarehouseZones.dataAreaId}.
   * @param zoneId Key property. See {@link WarehouseZones.zoneId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseZones`.
   */
  delete(
    dataAreaId: string,
    zoneId: string
  ): DeleteRequestBuilder<WarehouseZones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseZones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseZones` by taking the entity as a parameter.
   */
  delete(entity: WarehouseZones<T>): DeleteRequestBuilder<WarehouseZones<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    zoneId?: string
  ): DeleteRequestBuilder<WarehouseZones<T>, T> {
    return new DeleteRequestBuilder<WarehouseZones<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseZones
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ZoneId: zoneId!
          }
    );
  }
}
