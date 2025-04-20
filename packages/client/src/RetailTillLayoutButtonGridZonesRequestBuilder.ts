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
import { RetailTillLayoutButtonGridZones } from './RetailTillLayoutButtonGridZones';

/**
 * Request builder class for operations supported on the {@link RetailTillLayoutButtonGridZones} entity.
 */
export class RetailTillLayoutButtonGridZonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTillLayoutButtonGridZones<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTillLayoutButtonGridZones` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTillLayoutButtonGridZones` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTillLayoutButtonGridZones<T>, T> {
    return new GetAllRequestBuilder<RetailTillLayoutButtonGridZones<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTillLayoutButtonGridZones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTillLayoutButtonGridZones`.
   */
  create(
    entity: RetailTillLayoutButtonGridZones<T>
  ): CreateRequestBuilder<RetailTillLayoutButtonGridZones<T>, T> {
    return new CreateRequestBuilder<RetailTillLayoutButtonGridZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTillLayoutButtonGridZones` entity based on its keys.
   * @param layoutId Key property. See {@link RetailTillLayoutButtonGridZones.layoutId}.
   * @param deviceType Key property. See {@link RetailTillLayoutButtonGridZones.deviceType}.
   * @param zoneId Key property. See {@link RetailTillLayoutButtonGridZones.zoneId}.
   * @param buttonGridId Key property. See {@link RetailTillLayoutButtonGridZones.buttonGridId}.
   * @param layoutSizeId Key property. See {@link RetailTillLayoutButtonGridZones.layoutSizeId}.
   * @returns A request builder for creating requests to retrieve one `RetailTillLayoutButtonGridZones` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>,
    deviceType: DeserializedType<T, 'Edm.Int32'>,
    zoneId: DeserializedType<T, 'Edm.String'>,
    buttonGridId: DeserializedType<T, 'Edm.String'>,
    layoutSizeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTillLayoutButtonGridZones<T>, T> {
    return new GetByKeyRequestBuilder<RetailTillLayoutButtonGridZones<T>, T>(
      this.entityApi,
      {
        LayoutId: layoutId,
        DeviceType: deviceType,
        ZoneId: zoneId,
        ButtonGridId: buttonGridId,
        LayoutSizeId: layoutSizeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTillLayoutButtonGridZones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTillLayoutButtonGridZones`.
   */
  update(
    entity: RetailTillLayoutButtonGridZones<T>
  ): UpdateRequestBuilder<RetailTillLayoutButtonGridZones<T>, T> {
    return new UpdateRequestBuilder<RetailTillLayoutButtonGridZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutButtonGridZones`.
   * @param layoutId Key property. See {@link RetailTillLayoutButtonGridZones.layoutId}.
   * @param deviceType Key property. See {@link RetailTillLayoutButtonGridZones.deviceType}.
   * @param zoneId Key property. See {@link RetailTillLayoutButtonGridZones.zoneId}.
   * @param buttonGridId Key property. See {@link RetailTillLayoutButtonGridZones.buttonGridId}.
   * @param layoutSizeId Key property. See {@link RetailTillLayoutButtonGridZones.layoutSizeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutButtonGridZones`.
   */
  delete(
    layoutId: string,
    deviceType: number,
    zoneId: string,
    buttonGridId: string,
    layoutSizeId: string
  ): DeleteRequestBuilder<RetailTillLayoutButtonGridZones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutButtonGridZones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutButtonGridZones` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTillLayoutButtonGridZones<T>
  ): DeleteRequestBuilder<RetailTillLayoutButtonGridZones<T>, T>;
  delete(
    layoutIdOrEntity: any,
    deviceType?: number,
    zoneId?: string,
    buttonGridId?: string,
    layoutSizeId?: string
  ): DeleteRequestBuilder<RetailTillLayoutButtonGridZones<T>, T> {
    return new DeleteRequestBuilder<RetailTillLayoutButtonGridZones<T>, T>(
      this.entityApi,
      layoutIdOrEntity instanceof RetailTillLayoutButtonGridZones
        ? layoutIdOrEntity
        : {
            LayoutId: layoutIdOrEntity!,
            DeviceType: deviceType!,
            ZoneId: zoneId!,
            ButtonGridId: buttonGridId!,
            LayoutSizeId: layoutSizeId!
          }
    );
  }
}
