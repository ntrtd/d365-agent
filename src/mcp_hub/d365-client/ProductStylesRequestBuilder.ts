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
import { ProductStyles } from './ProductStyles';

/**
 * Request builder class for operations supported on the {@link ProductStyles} entity.
 */
export class ProductStylesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductStyles<T>, T> {
  /**
   * Returns a request builder for querying all `ProductStyles` entities.
   * @returns A request builder for creating requests to retrieve all `ProductStyles` entities.
   */
  getAll(): GetAllRequestBuilder<ProductStyles<T>, T> {
    return new GetAllRequestBuilder<ProductStyles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductStyles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductStyles`.
   */
  create(entity: ProductStyles<T>): CreateRequestBuilder<ProductStyles<T>, T> {
    return new CreateRequestBuilder<ProductStyles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductStyles` entity based on its keys.
   * @param styleId Key property. See {@link ProductStyles.styleId}.
   * @returns A request builder for creating requests to retrieve one `ProductStyles` entity based on its keys.
   */
  getByKey(
    styleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductStyles<T>, T> {
    return new GetByKeyRequestBuilder<ProductStyles<T>, T>(this.entityApi, {
      StyleId: styleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductStyles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductStyles`.
   */
  update(entity: ProductStyles<T>): UpdateRequestBuilder<ProductStyles<T>, T> {
    return new UpdateRequestBuilder<ProductStyles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductStyles`.
   * @param styleId Key property. See {@link ProductStyles.styleId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyles`.
   */
  delete(styleId: string): DeleteRequestBuilder<ProductStyles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductStyles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyles` by taking the entity as a parameter.
   */
  delete(entity: ProductStyles<T>): DeleteRequestBuilder<ProductStyles<T>, T>;
  delete(styleIdOrEntity: any): DeleteRequestBuilder<ProductStyles<T>, T> {
    return new DeleteRequestBuilder<ProductStyles<T>, T>(
      this.entityApi,
      styleIdOrEntity instanceof ProductStyles
        ? styleIdOrEntity
        : { StyleId: styleIdOrEntity! }
    );
  }
}
