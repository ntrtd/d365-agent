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
import { FixedAssets } from './FixedAssets';

/**
 * Request builder class for operations supported on the {@link FixedAssets} entity.
 */
export class FixedAssetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedAssets<T>, T> {
  /**
   * Returns a request builder for querying all `FixedAssets` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssets` entities.
   */
  getAll(): GetAllRequestBuilder<FixedAssets<T>, T> {
    return new GetAllRequestBuilder<FixedAssets<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FixedAssets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssets`.
   */
  create(entity: FixedAssets<T>): CreateRequestBuilder<FixedAssets<T>, T> {
    return new CreateRequestBuilder<FixedAssets<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FixedAssets` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssets.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link FixedAssets.fixedAssetNumber}.
   * @returns A request builder for creating requests to retrieve one `FixedAssets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fixedAssetNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FixedAssets<T>, T> {
    return new GetByKeyRequestBuilder<FixedAssets<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FixedAssetNumber: fixedAssetNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssets`.
   */
  update(entity: FixedAssets<T>): UpdateRequestBuilder<FixedAssets<T>, T> {
    return new UpdateRequestBuilder<FixedAssets<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssets`.
   * @param dataAreaId Key property. See {@link FixedAssets.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link FixedAssets.fixedAssetNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssets`.
   */
  delete(
    dataAreaId: string,
    fixedAssetNumber: string
  ): DeleteRequestBuilder<FixedAssets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssets` by taking the entity as a parameter.
   */
  delete(entity: FixedAssets<T>): DeleteRequestBuilder<FixedAssets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fixedAssetNumber?: string
  ): DeleteRequestBuilder<FixedAssets<T>, T> {
    return new DeleteRequestBuilder<FixedAssets<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedAssets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FixedAssetNumber: fixedAssetNumber!
          }
    );
  }
}
