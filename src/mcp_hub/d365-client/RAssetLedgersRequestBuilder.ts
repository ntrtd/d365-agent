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
import { RAssetLedgers } from './RAssetLedgers';

/**
 * Request builder class for operations supported on the {@link RAssetLedgers} entity.
 */
export class RAssetLedgersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetLedgers<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetLedgers` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetLedgers` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetLedgers<T>, T> {
    return new GetAllRequestBuilder<RAssetLedgers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetLedgers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetLedgers`.
   */
  create(entity: RAssetLedgers<T>): CreateRequestBuilder<RAssetLedgers<T>, T> {
    return new CreateRequestBuilder<RAssetLedgers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetLedgers` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetLedgers.dataAreaId}.
   * @param postingProfile Key property. See {@link RAssetLedgers.postingProfile}.
   * @returns A request builder for creating requests to retrieve one `RAssetLedgers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfile: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetLedgers<T>, T> {
    return new GetByKeyRequestBuilder<RAssetLedgers<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PostingProfile: postingProfile
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetLedgers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetLedgers`.
   */
  update(entity: RAssetLedgers<T>): UpdateRequestBuilder<RAssetLedgers<T>, T> {
    return new UpdateRequestBuilder<RAssetLedgers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetLedgers`.
   * @param dataAreaId Key property. See {@link RAssetLedgers.dataAreaId}.
   * @param postingProfile Key property. See {@link RAssetLedgers.postingProfile}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetLedgers`.
   */
  delete(
    dataAreaId: string,
    postingProfile: string
  ): DeleteRequestBuilder<RAssetLedgers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetLedgers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetLedgers` by taking the entity as a parameter.
   */
  delete(entity: RAssetLedgers<T>): DeleteRequestBuilder<RAssetLedgers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfile?: string
  ): DeleteRequestBuilder<RAssetLedgers<T>, T> {
    return new DeleteRequestBuilder<RAssetLedgers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetLedgers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingProfile: postingProfile!
          }
    );
  }
}
