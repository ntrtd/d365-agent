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
import { RetailTillLayoutImageZones } from './RetailTillLayoutImageZones';

/**
 * Request builder class for operations supported on the {@link RetailTillLayoutImageZones} entity.
 */
export class RetailTillLayoutImageZonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTillLayoutImageZones<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTillLayoutImageZones` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTillLayoutImageZones` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTillLayoutImageZones<T>, T> {
    return new GetAllRequestBuilder<RetailTillLayoutImageZones<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTillLayoutImageZones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTillLayoutImageZones`.
   */
  create(
    entity: RetailTillLayoutImageZones<T>
  ): CreateRequestBuilder<RetailTillLayoutImageZones<T>, T> {
    return new CreateRequestBuilder<RetailTillLayoutImageZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTillLayoutImageZones` entity based on its keys.
   * @param layoutId Key property. See {@link RetailTillLayoutImageZones.layoutId}.
   * @param deviceType Key property. See {@link RetailTillLayoutImageZones.deviceType}.
   * @param zoneId Key property. See {@link RetailTillLayoutImageZones.zoneId}.
   * @param pictureId Key property. See {@link RetailTillLayoutImageZones.pictureId}.
   * @param layoutSizeId Key property. See {@link RetailTillLayoutImageZones.layoutSizeId}.
   * @returns A request builder for creating requests to retrieve one `RetailTillLayoutImageZones` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>,
    deviceType: DeserializedType<T, 'Edm.Int32'>,
    zoneId: DeserializedType<T, 'Edm.String'>,
    pictureId: DeserializedType<T, 'Edm.Int32'>,
    layoutSizeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTillLayoutImageZones<T>, T> {
    return new GetByKeyRequestBuilder<RetailTillLayoutImageZones<T>, T>(
      this.entityApi,
      {
        LayoutId: layoutId,
        DeviceType: deviceType,
        ZoneId: zoneId,
        PictureId: pictureId,
        LayoutSizeId: layoutSizeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTillLayoutImageZones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTillLayoutImageZones`.
   */
  update(
    entity: RetailTillLayoutImageZones<T>
  ): UpdateRequestBuilder<RetailTillLayoutImageZones<T>, T> {
    return new UpdateRequestBuilder<RetailTillLayoutImageZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutImageZones`.
   * @param layoutId Key property. See {@link RetailTillLayoutImageZones.layoutId}.
   * @param deviceType Key property. See {@link RetailTillLayoutImageZones.deviceType}.
   * @param zoneId Key property. See {@link RetailTillLayoutImageZones.zoneId}.
   * @param pictureId Key property. See {@link RetailTillLayoutImageZones.pictureId}.
   * @param layoutSizeId Key property. See {@link RetailTillLayoutImageZones.layoutSizeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutImageZones`.
   */
  delete(
    layoutId: string,
    deviceType: number,
    zoneId: string,
    pictureId: number,
    layoutSizeId: string
  ): DeleteRequestBuilder<RetailTillLayoutImageZones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutImageZones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutImageZones` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTillLayoutImageZones<T>
  ): DeleteRequestBuilder<RetailTillLayoutImageZones<T>, T>;
  delete(
    layoutIdOrEntity: any,
    deviceType?: number,
    zoneId?: string,
    pictureId?: number,
    layoutSizeId?: string
  ): DeleteRequestBuilder<RetailTillLayoutImageZones<T>, T> {
    return new DeleteRequestBuilder<RetailTillLayoutImageZones<T>, T>(
      this.entityApi,
      layoutIdOrEntity instanceof RetailTillLayoutImageZones
        ? layoutIdOrEntity
        : {
            LayoutId: layoutIdOrEntity!,
            DeviceType: deviceType!,
            ZoneId: zoneId!,
            PictureId: pictureId!,
            LayoutSizeId: layoutSizeId!
          }
    );
  }
}
