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
import { AssetMaintenanceJobTypeHourForecastsV2 } from './AssetMaintenanceJobTypeHourForecastsV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypeHourForecastsV2} entity.
 */
export class AssetMaintenanceJobTypeHourForecastsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTypeHourForecastsV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypeHourForecastsV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypeHourForecastsV2` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobTypeHourForecastsV2<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceJobTypeHourForecastsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypeHourForecastsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypeHourForecastsV2`.
   */
  create(
    entity: AssetMaintenanceJobTypeHourForecastsV2<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTypeHourForecastsV2<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceJobTypeHourForecastsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypeHourForecastsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeHourForecastsV2.dataAreaId}.
   * @param forecastTransId Key property. See {@link AssetMaintenanceJobTypeHourForecastsV2.forecastTransId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypeHourForecastsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    forecastTransId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTypeHourForecastsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceJobTypeHourForecastsV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ForecastTransId: forecastTransId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypeHourForecastsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypeHourForecastsV2`.
   */
  update(
    entity: AssetMaintenanceJobTypeHourForecastsV2<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTypeHourForecastsV2<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceJobTypeHourForecastsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeHourForecastsV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeHourForecastsV2.dataAreaId}.
   * @param forecastTransId Key property. See {@link AssetMaintenanceJobTypeHourForecastsV2.forecastTransId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeHourForecastsV2`.
   */
  delete(
    dataAreaId: string,
    forecastTransId: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeHourForecastsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeHourForecastsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeHourForecastsV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypeHourForecastsV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeHourForecastsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    forecastTransId?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeHourForecastsV2<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceJobTypeHourForecastsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTypeHourForecastsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ForecastTransId: forecastTransId!
          }
    );
  }
}
