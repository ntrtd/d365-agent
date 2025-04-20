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
import { ProductColors } from './ProductColors';

/**
 * Request builder class for operations supported on the {@link ProductColors} entity.
 */
export class ProductColorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductColors<T>, T> {
  /**
   * Returns a request builder for querying all `ProductColors` entities.
   * @returns A request builder for creating requests to retrieve all `ProductColors` entities.
   */
  getAll(): GetAllRequestBuilder<ProductColors<T>, T> {
    return new GetAllRequestBuilder<ProductColors<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductColors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductColors`.
   */
  create(entity: ProductColors<T>): CreateRequestBuilder<ProductColors<T>, T> {
    return new CreateRequestBuilder<ProductColors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductColors` entity based on its keys.
   * @param colorId Key property. See {@link ProductColors.colorId}.
   * @returns A request builder for creating requests to retrieve one `ProductColors` entity based on its keys.
   */
  getByKey(
    colorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductColors<T>, T> {
    return new GetByKeyRequestBuilder<ProductColors<T>, T>(this.entityApi, {
      ColorId: colorId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductColors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductColors`.
   */
  update(entity: ProductColors<T>): UpdateRequestBuilder<ProductColors<T>, T> {
    return new UpdateRequestBuilder<ProductColors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductColors`.
   * @param colorId Key property. See {@link ProductColors.colorId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductColors`.
   */
  delete(colorId: string): DeleteRequestBuilder<ProductColors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductColors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductColors` by taking the entity as a parameter.
   */
  delete(entity: ProductColors<T>): DeleteRequestBuilder<ProductColors<T>, T>;
  delete(colorIdOrEntity: any): DeleteRequestBuilder<ProductColors<T>, T> {
    return new DeleteRequestBuilder<ProductColors<T>, T>(
      this.entityApi,
      colorIdOrEntity instanceof ProductColors
        ? colorIdOrEntity
        : { ColorId: colorIdOrEntity! }
    );
  }
}
