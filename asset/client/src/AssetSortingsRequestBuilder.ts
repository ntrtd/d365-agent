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
import { AssetSortings } from './AssetSortings';
import { AssetSortValue } from './AssetSortValue';

/**
 * Request builder class for operations supported on the {@link AssetSortings} entity.
 */
export class AssetSortingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetSortings<T>, T> {
  /**
   * Returns a request builder for querying all `AssetSortings` entities.
   * @returns A request builder for creating requests to retrieve all `AssetSortings` entities.
   */
  getAll(): GetAllRequestBuilder<AssetSortings<T>, T> {
    return new GetAllRequestBuilder<AssetSortings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetSortings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetSortings`.
   */
  create(entity: AssetSortings<T>): CreateRequestBuilder<AssetSortings<T>, T> {
    return new CreateRequestBuilder<AssetSortings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetSortings` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetSortings.dataAreaId}.
   * @param sorting Key property. See {@link AssetSortings.sorting}.
   * @param identification Key property. See {@link AssetSortings.identification}.
   * @returns A request builder for creating requests to retrieve one `AssetSortings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sorting: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.AssetSortValue'
    >,
    identification: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetSortings<T>, T> {
    return new GetByKeyRequestBuilder<AssetSortings<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Sorting: sorting,
      Identification: identification
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetSortings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetSortings`.
   */
  update(entity: AssetSortings<T>): UpdateRequestBuilder<AssetSortings<T>, T> {
    return new UpdateRequestBuilder<AssetSortings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetSortings`.
   * @param dataAreaId Key property. See {@link AssetSortings.dataAreaId}.
   * @param sorting Key property. See {@link AssetSortings.sorting}.
   * @param identification Key property. See {@link AssetSortings.identification}.
   * @returns A request builder for creating requests that delete an entity of type `AssetSortings`.
   */
  delete(
    dataAreaId: string,
    sorting: AssetSortValue,
    identification: string
  ): DeleteRequestBuilder<AssetSortings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetSortings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetSortings` by taking the entity as a parameter.
   */
  delete(entity: AssetSortings<T>): DeleteRequestBuilder<AssetSortings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sorting?: AssetSortValue,
    identification?: string
  ): DeleteRequestBuilder<AssetSortings<T>, T> {
    return new DeleteRequestBuilder<AssetSortings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetSortings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Sorting: sorting!,
            Identification: identification!
          }
    );
  }
}
