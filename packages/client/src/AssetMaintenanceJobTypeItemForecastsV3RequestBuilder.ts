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
import { AssetMaintenanceJobTypeItemForecastsV3 } from './AssetMaintenanceJobTypeItemForecastsV3';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypeItemForecastsV3} entity.
 */
export class AssetMaintenanceJobTypeItemForecastsV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTypeItemForecastsV3<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypeItemForecastsV3` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypeItemForecastsV3` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobTypeItemForecastsV3<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceJobTypeItemForecastsV3<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypeItemForecastsV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypeItemForecastsV3`.
   */
  create(
    entity: AssetMaintenanceJobTypeItemForecastsV3<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTypeItemForecastsV3<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceJobTypeItemForecastsV3<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypeItemForecastsV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV3.dataAreaId}.
   * @param forecastEntryNumber Key property. See {@link AssetMaintenanceJobTypeItemForecastsV3.forecastEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypeItemForecastsV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    forecastEntryNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTypeItemForecastsV3<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceJobTypeItemForecastsV3<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ForecastEntryNumber: forecastEntryNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypeItemForecastsV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypeItemForecastsV3`.
   */
  update(
    entity: AssetMaintenanceJobTypeItemForecastsV3<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTypeItemForecastsV3<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceJobTypeItemForecastsV3<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeItemForecastsV3`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV3.dataAreaId}.
   * @param forecastEntryNumber Key property. See {@link AssetMaintenanceJobTypeItemForecastsV3.forecastEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeItemForecastsV3`.
   */
  delete(
    dataAreaId: string,
    forecastEntryNumber: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeItemForecastsV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeItemForecastsV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeItemForecastsV3` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypeItemForecastsV3<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeItemForecastsV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    forecastEntryNumber?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeItemForecastsV3<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceJobTypeItemForecastsV3<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTypeItemForecastsV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ForecastEntryNumber: forecastEntryNumber!
          }
    );
  }
}
