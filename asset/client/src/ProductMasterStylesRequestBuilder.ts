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
import { ProductMasterStyles } from './ProductMasterStyles';

/**
 * Request builder class for operations supported on the {@link ProductMasterStyles} entity.
 */
export class ProductMasterStylesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasterStyles<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasterStyles` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasterStyles` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasterStyles<T>, T> {
    return new GetAllRequestBuilder<ProductMasterStyles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductMasterStyles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasterStyles`.
   */
  create(
    entity: ProductMasterStyles<T>
  ): CreateRequestBuilder<ProductMasterStyles<T>, T> {
    return new CreateRequestBuilder<ProductMasterStyles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMasterStyles` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductMasterStyles.productMasterNumber}.
   * @param productStyleId Key property. See {@link ProductMasterStyles.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `ProductMasterStyles` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasterStyles<T>, T> {
    return new GetByKeyRequestBuilder<ProductMasterStyles<T>, T>(
      this.entityApi,
      {
        ProductMasterNumber: productMasterNumber,
        ProductStyleId: productStyleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasterStyles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasterStyles`.
   */
  update(
    entity: ProductMasterStyles<T>
  ): UpdateRequestBuilder<ProductMasterStyles<T>, T> {
    return new UpdateRequestBuilder<ProductMasterStyles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasterStyles`.
   * @param productMasterNumber Key property. See {@link ProductMasterStyles.productMasterNumber}.
   * @param productStyleId Key property. See {@link ProductMasterStyles.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterStyles`.
   */
  delete(
    productMasterNumber: string,
    productStyleId: string
  ): DeleteRequestBuilder<ProductMasterStyles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasterStyles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterStyles` by taking the entity as a parameter.
   */
  delete(
    entity: ProductMasterStyles<T>
  ): DeleteRequestBuilder<ProductMasterStyles<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productStyleId?: string
  ): DeleteRequestBuilder<ProductMasterStyles<T>, T> {
    return new DeleteRequestBuilder<ProductMasterStyles<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductMasterStyles
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
