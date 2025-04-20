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
import { ProductMasterColors } from './ProductMasterColors';

/**
 * Request builder class for operations supported on the {@link ProductMasterColors} entity.
 */
export class ProductMasterColorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasterColors<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasterColors` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasterColors` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasterColors<T>, T> {
    return new GetAllRequestBuilder<ProductMasterColors<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductMasterColors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasterColors`.
   */
  create(
    entity: ProductMasterColors<T>
  ): CreateRequestBuilder<ProductMasterColors<T>, T> {
    return new CreateRequestBuilder<ProductMasterColors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMasterColors` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductMasterColors.productMasterNumber}.
   * @param productColorId Key property. See {@link ProductMasterColors.productColorId}.
   * @returns A request builder for creating requests to retrieve one `ProductMasterColors` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasterColors<T>, T> {
    return new GetByKeyRequestBuilder<ProductMasterColors<T>, T>(
      this.entityApi,
      {
        ProductMasterNumber: productMasterNumber,
        ProductColorId: productColorId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasterColors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasterColors`.
   */
  update(
    entity: ProductMasterColors<T>
  ): UpdateRequestBuilder<ProductMasterColors<T>, T> {
    return new UpdateRequestBuilder<ProductMasterColors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasterColors`.
   * @param productMasterNumber Key property. See {@link ProductMasterColors.productMasterNumber}.
   * @param productColorId Key property. See {@link ProductMasterColors.productColorId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterColors`.
   */
  delete(
    productMasterNumber: string,
    productColorId: string
  ): DeleteRequestBuilder<ProductMasterColors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasterColors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterColors` by taking the entity as a parameter.
   */
  delete(
    entity: ProductMasterColors<T>
  ): DeleteRequestBuilder<ProductMasterColors<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productColorId?: string
  ): DeleteRequestBuilder<ProductMasterColors<T>, T> {
    return new DeleteRequestBuilder<ProductMasterColors<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductMasterColors
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductColorId: productColorId!
          }
    );
  }
}
