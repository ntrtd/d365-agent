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
import { AssetMaintenanceRounds } from './AssetMaintenanceRounds';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRounds} entity.
 */
export class AssetMaintenanceRoundsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceRounds<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRounds` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRounds` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceRounds<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceRounds<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRounds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRounds`.
   */
  create(
    entity: AssetMaintenanceRounds<T>
  ): CreateRequestBuilder<AssetMaintenanceRounds<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceRounds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRounds` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRounds.dataAreaId}.
   * @param roundId Key property. See {@link AssetMaintenanceRounds.roundId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRounds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    roundId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceRounds<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceRounds<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RoundId: roundId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRounds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRounds`.
   */
  update(
    entity: AssetMaintenanceRounds<T>
  ): UpdateRequestBuilder<AssetMaintenanceRounds<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceRounds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRounds`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRounds.dataAreaId}.
   * @param roundId Key property. See {@link AssetMaintenanceRounds.roundId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRounds`.
   */
  delete(
    dataAreaId: string,
    roundId: string
  ): DeleteRequestBuilder<AssetMaintenanceRounds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRounds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRounds` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRounds<T>
  ): DeleteRequestBuilder<AssetMaintenanceRounds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    roundId?: string
  ): DeleteRequestBuilder<AssetMaintenanceRounds<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceRounds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceRounds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoundId: roundId!
          }
    );
  }
}
