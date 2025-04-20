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
import { LocationTransferHistories } from './LocationTransferHistories';

/**
 * Request builder class for operations supported on the {@link LocationTransferHistories} entity.
 */
export class LocationTransferHistoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LocationTransferHistories<T>, T> {
  /**
   * Returns a request builder for querying all `LocationTransferHistories` entities.
   * @returns A request builder for creating requests to retrieve all `LocationTransferHistories` entities.
   */
  getAll(): GetAllRequestBuilder<LocationTransferHistories<T>, T> {
    return new GetAllRequestBuilder<LocationTransferHistories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LocationTransferHistories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LocationTransferHistories`.
   */
  create(
    entity: LocationTransferHistories<T>
  ): CreateRequestBuilder<LocationTransferHistories<T>, T> {
    return new CreateRequestBuilder<LocationTransferHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LocationTransferHistories` entity based on its keys.
   * @param dataAreaId Key property. See {@link LocationTransferHistories.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link LocationTransferHistories.fixedAssetNumber}.
   * @param id Key property. See {@link LocationTransferHistories.id}.
   * @returns A request builder for creating requests to retrieve one `LocationTransferHistories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fixedAssetNumber: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<LocationTransferHistories<T>, T> {
    return new GetByKeyRequestBuilder<LocationTransferHistories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FixedAssetNumber: fixedAssetNumber,
        Id: id
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LocationTransferHistories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LocationTransferHistories`.
   */
  update(
    entity: LocationTransferHistories<T>
  ): UpdateRequestBuilder<LocationTransferHistories<T>, T> {
    return new UpdateRequestBuilder<LocationTransferHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LocationTransferHistories`.
   * @param dataAreaId Key property. See {@link LocationTransferHistories.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link LocationTransferHistories.fixedAssetNumber}.
   * @param id Key property. See {@link LocationTransferHistories.id}.
   * @returns A request builder for creating requests that delete an entity of type `LocationTransferHistories`.
   */
  delete(
    dataAreaId: string,
    fixedAssetNumber: string,
    id: number
  ): DeleteRequestBuilder<LocationTransferHistories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LocationTransferHistories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LocationTransferHistories` by taking the entity as a parameter.
   */
  delete(
    entity: LocationTransferHistories<T>
  ): DeleteRequestBuilder<LocationTransferHistories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fixedAssetNumber?: string,
    id?: number
  ): DeleteRequestBuilder<LocationTransferHistories<T>, T> {
    return new DeleteRequestBuilder<LocationTransferHistories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LocationTransferHistories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FixedAssetNumber: fixedAssetNumber!,
            Id: id!
          }
    );
  }
}
