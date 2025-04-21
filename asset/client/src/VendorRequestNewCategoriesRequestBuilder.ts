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
import { VendorRequestNewCategories } from './VendorRequestNewCategories';

/**
 * Request builder class for operations supported on the {@link VendorRequestNewCategories} entity.
 */
export class VendorRequestNewCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorRequestNewCategories<T>, T> {
  /**
   * Returns a request builder for querying all `VendorRequestNewCategories` entities.
   * @returns A request builder for creating requests to retrieve all `VendorRequestNewCategories` entities.
   */
  getAll(): GetAllRequestBuilder<VendorRequestNewCategories<T>, T> {
    return new GetAllRequestBuilder<VendorRequestNewCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorRequestNewCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorRequestNewCategories`.
   */
  create(
    entity: VendorRequestNewCategories<T>
  ): CreateRequestBuilder<VendorRequestNewCategories<T>, T> {
    return new CreateRequestBuilder<VendorRequestNewCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorRequestNewCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorRequestNewCategories.dataAreaId}.
   * @param requestId Key property. See {@link VendorRequestNewCategories.requestId}.
   * @returns A request builder for creating requests to retrieve one `VendorRequestNewCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorRequestNewCategories<T>, T> {
    return new GetByKeyRequestBuilder<VendorRequestNewCategories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorRequestNewCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorRequestNewCategories`.
   */
  update(
    entity: VendorRequestNewCategories<T>
  ): UpdateRequestBuilder<VendorRequestNewCategories<T>, T> {
    return new UpdateRequestBuilder<VendorRequestNewCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorRequestNewCategories`.
   * @param dataAreaId Key property. See {@link VendorRequestNewCategories.dataAreaId}.
   * @param requestId Key property. See {@link VendorRequestNewCategories.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorRequestNewCategories`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<VendorRequestNewCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorRequestNewCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorRequestNewCategories` by taking the entity as a parameter.
   */
  delete(
    entity: VendorRequestNewCategories<T>
  ): DeleteRequestBuilder<VendorRequestNewCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<VendorRequestNewCategories<T>, T> {
    return new DeleteRequestBuilder<VendorRequestNewCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorRequestNewCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
