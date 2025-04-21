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
import { AssetSpecialDepreciationAllowances } from './AssetSpecialDepreciationAllowances';

/**
 * Request builder class for operations supported on the {@link AssetSpecialDepreciationAllowances} entity.
 */
export class AssetSpecialDepreciationAllowancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetSpecialDepreciationAllowances<T>, T> {
  /**
   * Returns a request builder for querying all `AssetSpecialDepreciationAllowances` entities.
   * @returns A request builder for creating requests to retrieve all `AssetSpecialDepreciationAllowances` entities.
   */
  getAll(): GetAllRequestBuilder<AssetSpecialDepreciationAllowances<T>, T> {
    return new GetAllRequestBuilder<AssetSpecialDepreciationAllowances<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetSpecialDepreciationAllowances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetSpecialDepreciationAllowances`.
   */
  create(
    entity: AssetSpecialDepreciationAllowances<T>
  ): CreateRequestBuilder<AssetSpecialDepreciationAllowances<T>, T> {
    return new CreateRequestBuilder<AssetSpecialDepreciationAllowances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetSpecialDepreciationAllowances` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetSpecialDepreciationAllowances.dataAreaId}.
   * @param specialDepreciationAllowanceId Key property. See {@link AssetSpecialDepreciationAllowances.specialDepreciationAllowanceId}.
   * @returns A request builder for creating requests to retrieve one `AssetSpecialDepreciationAllowances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    specialDepreciationAllowanceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetSpecialDepreciationAllowances<T>, T> {
    return new GetByKeyRequestBuilder<AssetSpecialDepreciationAllowances<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SpecialDepreciationAllowanceId: specialDepreciationAllowanceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetSpecialDepreciationAllowances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetSpecialDepreciationAllowances`.
   */
  update(
    entity: AssetSpecialDepreciationAllowances<T>
  ): UpdateRequestBuilder<AssetSpecialDepreciationAllowances<T>, T> {
    return new UpdateRequestBuilder<AssetSpecialDepreciationAllowances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetSpecialDepreciationAllowances`.
   * @param dataAreaId Key property. See {@link AssetSpecialDepreciationAllowances.dataAreaId}.
   * @param specialDepreciationAllowanceId Key property. See {@link AssetSpecialDepreciationAllowances.specialDepreciationAllowanceId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetSpecialDepreciationAllowances`.
   */
  delete(
    dataAreaId: string,
    specialDepreciationAllowanceId: string
  ): DeleteRequestBuilder<AssetSpecialDepreciationAllowances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetSpecialDepreciationAllowances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetSpecialDepreciationAllowances` by taking the entity as a parameter.
   */
  delete(
    entity: AssetSpecialDepreciationAllowances<T>
  ): DeleteRequestBuilder<AssetSpecialDepreciationAllowances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    specialDepreciationAllowanceId?: string
  ): DeleteRequestBuilder<AssetSpecialDepreciationAllowances<T>, T> {
    return new DeleteRequestBuilder<AssetSpecialDepreciationAllowances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetSpecialDepreciationAllowances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SpecialDepreciationAllowanceId: specialDepreciationAllowanceId!
          }
    );
  }
}
