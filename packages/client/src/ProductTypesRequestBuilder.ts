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
import { ProductTypes } from './ProductTypes';

/**
 * Request builder class for operations supported on the {@link ProductTypes} entity.
 */
export class ProductTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ProductTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ProductTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ProductTypes<T>, T> {
    return new GetAllRequestBuilder<ProductTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductTypes`.
   */
  create(entity: ProductTypes<T>): CreateRequestBuilder<ProductTypes<T>, T> {
    return new CreateRequestBuilder<ProductTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductTypes.dataAreaId}.
   * @param productType Key property. See {@link ProductTypes.productType}.
   * @returns A request builder for creating requests to retrieve one `ProductTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductTypes<T>, T> {
    return new GetByKeyRequestBuilder<ProductTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProductType: productType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductTypes`.
   */
  update(entity: ProductTypes<T>): UpdateRequestBuilder<ProductTypes<T>, T> {
    return new UpdateRequestBuilder<ProductTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductTypes`.
   * @param dataAreaId Key property. See {@link ProductTypes.dataAreaId}.
   * @param productType Key property. See {@link ProductTypes.productType}.
   * @returns A request builder for creating requests that delete an entity of type `ProductTypes`.
   */
  delete(
    dataAreaId: string,
    productType: string
  ): DeleteRequestBuilder<ProductTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductTypes` by taking the entity as a parameter.
   */
  delete(entity: ProductTypes<T>): DeleteRequestBuilder<ProductTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productType?: string
  ): DeleteRequestBuilder<ProductTypes<T>, T> {
    return new DeleteRequestBuilder<ProductTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductType: productType!
          }
    );
  }
}
