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
import { AssetMaintenanceJobTrades } from './AssetMaintenanceJobTrades';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTrades} entity.
 */
export class AssetMaintenanceJobTradesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTrades<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTrades` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTrades` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobTrades<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceJobTrades<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTrades` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTrades`.
   */
  create(
    entity: AssetMaintenanceJobTrades<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTrades<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceJobTrades<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTrades` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTrades.dataAreaId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTrades.jobTradeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTrades` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    jobTradeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTrades<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceJobTrades<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JobTradeId: jobTradeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTrades`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTrades`.
   */
  update(
    entity: AssetMaintenanceJobTrades<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTrades<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceJobTrades<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTrades`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTrades.dataAreaId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTrades.jobTradeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTrades`.
   */
  delete(
    dataAreaId: string,
    jobTradeId: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTrades<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTrades`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTrades` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTrades<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTrades<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    jobTradeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTrades<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceJobTrades<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTrades
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JobTradeId: jobTradeId!
          }
    );
  }
}
