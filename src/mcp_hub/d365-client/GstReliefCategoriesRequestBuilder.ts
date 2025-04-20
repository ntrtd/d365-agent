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
import { GstReliefCategories } from './GstReliefCategories';

/**
 * Request builder class for operations supported on the {@link GstReliefCategories} entity.
 */
export class GstReliefCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GstReliefCategories<T>, T> {
  /**
   * Returns a request builder for querying all `GstReliefCategories` entities.
   * @returns A request builder for creating requests to retrieve all `GstReliefCategories` entities.
   */
  getAll(): GetAllRequestBuilder<GstReliefCategories<T>, T> {
    return new GetAllRequestBuilder<GstReliefCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GstReliefCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GstReliefCategories`.
   */
  create(
    entity: GstReliefCategories<T>
  ): CreateRequestBuilder<GstReliefCategories<T>, T> {
    return new CreateRequestBuilder<GstReliefCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GstReliefCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link GstReliefCategories.dataAreaId}.
   * @param reliefCategoryEntityKey Key property. See {@link GstReliefCategories.reliefCategoryEntityKey}.
   * @returns A request builder for creating requests to retrieve one `GstReliefCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reliefCategoryEntityKey: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<GstReliefCategories<T>, T> {
    return new GetByKeyRequestBuilder<GstReliefCategories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReliefCategoryEntityKey: reliefCategoryEntityKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GstReliefCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GstReliefCategories`.
   */
  update(
    entity: GstReliefCategories<T>
  ): UpdateRequestBuilder<GstReliefCategories<T>, T> {
    return new UpdateRequestBuilder<GstReliefCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GstReliefCategories`.
   * @param dataAreaId Key property. See {@link GstReliefCategories.dataAreaId}.
   * @param reliefCategoryEntityKey Key property. See {@link GstReliefCategories.reliefCategoryEntityKey}.
   * @returns A request builder for creating requests that delete an entity of type `GstReliefCategories`.
   */
  delete(
    dataAreaId: string,
    reliefCategoryEntityKey: string
  ): DeleteRequestBuilder<GstReliefCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GstReliefCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GstReliefCategories` by taking the entity as a parameter.
   */
  delete(
    entity: GstReliefCategories<T>
  ): DeleteRequestBuilder<GstReliefCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reliefCategoryEntityKey?: string
  ): DeleteRequestBuilder<GstReliefCategories<T>, T> {
    return new DeleteRequestBuilder<GstReliefCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GstReliefCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReliefCategoryEntityKey: reliefCategoryEntityKey!
          }
    );
  }
}
