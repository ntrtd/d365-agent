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
import { FixedAssetsV2 } from './FixedAssetsV2';

/**
 * Request builder class for operations supported on the {@link FixedAssetsV2} entity.
 */
export class FixedAssetsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedAssetsV2<T>, T> {
  /**
   * Returns a request builder for querying all `FixedAssetsV2` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssetsV2` entities.
   */
  getAll(): GetAllRequestBuilder<FixedAssetsV2<T>, T> {
    return new GetAllRequestBuilder<FixedAssetsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FixedAssetsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssetsV2`.
   */
  create(entity: FixedAssetsV2<T>): CreateRequestBuilder<FixedAssetsV2<T>, T> {
    return new CreateRequestBuilder<FixedAssetsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FixedAssetsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssetsV2.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link FixedAssetsV2.fixedAssetNumber}.
   * @returns A request builder for creating requests to retrieve one `FixedAssetsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fixedAssetNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FixedAssetsV2<T>, T> {
    return new GetByKeyRequestBuilder<FixedAssetsV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FixedAssetNumber: fixedAssetNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssetsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssetsV2`.
   */
  update(entity: FixedAssetsV2<T>): UpdateRequestBuilder<FixedAssetsV2<T>, T> {
    return new UpdateRequestBuilder<FixedAssetsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssetsV2`.
   * @param dataAreaId Key property. See {@link FixedAssetsV2.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link FixedAssetsV2.fixedAssetNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetsV2`.
   */
  delete(
    dataAreaId: string,
    fixedAssetNumber: string
  ): DeleteRequestBuilder<FixedAssetsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssetsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetsV2` by taking the entity as a parameter.
   */
  delete(entity: FixedAssetsV2<T>): DeleteRequestBuilder<FixedAssetsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fixedAssetNumber?: string
  ): DeleteRequestBuilder<FixedAssetsV2<T>, T> {
    return new DeleteRequestBuilder<FixedAssetsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedAssetsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FixedAssetNumber: fixedAssetNumber!
          }
    );
  }
}
