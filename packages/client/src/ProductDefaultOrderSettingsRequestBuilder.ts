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
import { ProductDefaultOrderSettings } from './ProductDefaultOrderSettings';

/**
 * Request builder class for operations supported on the {@link ProductDefaultOrderSettings} entity.
 */
export class ProductDefaultOrderSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductDefaultOrderSettings<T>, T> {
  /**
   * Returns a request builder for querying all `ProductDefaultOrderSettings` entities.
   * @returns A request builder for creating requests to retrieve all `ProductDefaultOrderSettings` entities.
   */
  getAll(): GetAllRequestBuilder<ProductDefaultOrderSettings<T>, T> {
    return new GetAllRequestBuilder<ProductDefaultOrderSettings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductDefaultOrderSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductDefaultOrderSettings`.
   */
  create(
    entity: ProductDefaultOrderSettings<T>
  ): CreateRequestBuilder<ProductDefaultOrderSettings<T>, T> {
    return new CreateRequestBuilder<ProductDefaultOrderSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductDefaultOrderSettings` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductDefaultOrderSettings.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductDefaultOrderSettings.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductDefaultOrderSettings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductDefaultOrderSettings<T>, T> {
    return new GetByKeyRequestBuilder<ProductDefaultOrderSettings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductDefaultOrderSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductDefaultOrderSettings`.
   */
  update(
    entity: ProductDefaultOrderSettings<T>
  ): UpdateRequestBuilder<ProductDefaultOrderSettings<T>, T> {
    return new UpdateRequestBuilder<ProductDefaultOrderSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductDefaultOrderSettings`.
   * @param dataAreaId Key property. See {@link ProductDefaultOrderSettings.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductDefaultOrderSettings.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductDefaultOrderSettings`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<ProductDefaultOrderSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductDefaultOrderSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductDefaultOrderSettings` by taking the entity as a parameter.
   */
  delete(
    entity: ProductDefaultOrderSettings<T>
  ): DeleteRequestBuilder<ProductDefaultOrderSettings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<ProductDefaultOrderSettings<T>, T> {
    return new DeleteRequestBuilder<ProductDefaultOrderSettings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductDefaultOrderSettings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
