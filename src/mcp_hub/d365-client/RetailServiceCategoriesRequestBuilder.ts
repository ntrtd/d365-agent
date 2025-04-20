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
import { RetailServiceCategories } from './RetailServiceCategories';

/**
 * Request builder class for operations supported on the {@link RetailServiceCategories} entity.
 */
export class RetailServiceCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailServiceCategories<T>, T> {
  /**
   * Returns a request builder for querying all `RetailServiceCategories` entities.
   * @returns A request builder for creating requests to retrieve all `RetailServiceCategories` entities.
   */
  getAll(): GetAllRequestBuilder<RetailServiceCategories<T>, T> {
    return new GetAllRequestBuilder<RetailServiceCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailServiceCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailServiceCategories`.
   */
  create(
    entity: RetailServiceCategories<T>
  ): CreateRequestBuilder<RetailServiceCategories<T>, T> {
    return new CreateRequestBuilder<RetailServiceCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailServiceCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailServiceCategories.dataAreaId}.
   * @param serviceCategory Key property. See {@link RetailServiceCategories.serviceCategory}.
   * @returns A request builder for creating requests to retrieve one `RetailServiceCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceCategory: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailServiceCategories<T>, T> {
    return new GetByKeyRequestBuilder<RetailServiceCategories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ServiceCategory: serviceCategory
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailServiceCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailServiceCategories`.
   */
  update(
    entity: RetailServiceCategories<T>
  ): UpdateRequestBuilder<RetailServiceCategories<T>, T> {
    return new UpdateRequestBuilder<RetailServiceCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailServiceCategories`.
   * @param dataAreaId Key property. See {@link RetailServiceCategories.dataAreaId}.
   * @param serviceCategory Key property. See {@link RetailServiceCategories.serviceCategory}.
   * @returns A request builder for creating requests that delete an entity of type `RetailServiceCategories`.
   */
  delete(
    dataAreaId: string,
    serviceCategory: string
  ): DeleteRequestBuilder<RetailServiceCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailServiceCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailServiceCategories` by taking the entity as a parameter.
   */
  delete(
    entity: RetailServiceCategories<T>
  ): DeleteRequestBuilder<RetailServiceCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceCategory?: string
  ): DeleteRequestBuilder<RetailServiceCategories<T>, T> {
    return new DeleteRequestBuilder<RetailServiceCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailServiceCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceCategory: serviceCategory!
          }
    );
  }
}
