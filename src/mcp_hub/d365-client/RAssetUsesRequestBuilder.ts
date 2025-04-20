/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { RAssetUses } from './RAssetUses';

/**
 * Request builder class for operations supported on the {@link RAssetUses} entity.
 */
export class RAssetUsesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetUses<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetUses` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetUses` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetUses<T>, T> {
    return new GetAllRequestBuilder<RAssetUses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetUses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetUses`.
   */
  create(entity: RAssetUses<T>): CreateRequestBuilder<RAssetUses<T>, T> {
    return new CreateRequestBuilder<RAssetUses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RAssetUses` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetUses.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link RAssetUses.faInventoryNumber}.
   * @param period Key property. See {@link RAssetUses.period}.
   * @returns A request builder for creating requests to retrieve one `RAssetUses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faInventoryNumber: DeserializedType<T, 'Edm.String'>,
    period: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<RAssetUses<T>, T> {
    return new GetByKeyRequestBuilder<RAssetUses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FAInventoryNumber: faInventoryNumber,
      Period: period
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetUses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetUses`.
   */
  update(entity: RAssetUses<T>): UpdateRequestBuilder<RAssetUses<T>, T> {
    return new UpdateRequestBuilder<RAssetUses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetUses`.
   * @param dataAreaId Key property. See {@link RAssetUses.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link RAssetUses.faInventoryNumber}.
   * @param period Key property. See {@link RAssetUses.period}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetUses`.
   */
  delete(
    dataAreaId: string,
    faInventoryNumber: string,
    period: Moment
  ): DeleteRequestBuilder<RAssetUses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetUses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetUses` by taking the entity as a parameter.
   */
  delete(entity: RAssetUses<T>): DeleteRequestBuilder<RAssetUses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faInventoryNumber?: string,
    period?: Moment
  ): DeleteRequestBuilder<RAssetUses<T>, T> {
    return new DeleteRequestBuilder<RAssetUses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetUses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FAInventoryNumber: faInventoryNumber!,
            Period: period!
          }
    );
  }
}
