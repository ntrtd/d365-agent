/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { AssetMaintenanceAssetRounds } from './AssetMaintenanceAssetRounds';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetRounds} entity.
 */
export class AssetMaintenanceAssetRoundsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetRounds<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetRounds` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetRounds` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetRounds<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetRounds<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetRounds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetRounds`.
   */
  create(
    entity: AssetMaintenanceAssetRounds<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetRounds<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetRounds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetRounds` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetRounds.dataAreaId}.
   * @param roundId Key property. See {@link AssetMaintenanceAssetRounds.roundId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceAssetRounds.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetRounds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    roundId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetRounds<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetRounds<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RoundId: roundId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetRounds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetRounds`.
   */
  update(
    entity: AssetMaintenanceAssetRounds<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetRounds<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetRounds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetRounds`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetRounds.dataAreaId}.
   * @param roundId Key property. See {@link AssetMaintenanceAssetRounds.roundId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceAssetRounds.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetRounds`.
   */
  delete(
    dataAreaId: string,
    roundId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceAssetRounds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetRounds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetRounds` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetRounds<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetRounds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    roundId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceAssetRounds<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetRounds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetRounds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoundId: roundId!,
            LineNumber: lineNumber!
          }
    );
  }
}
