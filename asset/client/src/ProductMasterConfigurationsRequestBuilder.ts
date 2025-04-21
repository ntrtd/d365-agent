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
import { ProductMasterConfigurations } from './ProductMasterConfigurations';

/**
 * Request builder class for operations supported on the {@link ProductMasterConfigurations} entity.
 */
export class ProductMasterConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasterConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasterConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasterConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasterConfigurations<T>, T> {
    return new GetAllRequestBuilder<ProductMasterConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductMasterConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasterConfigurations`.
   */
  create(
    entity: ProductMasterConfigurations<T>
  ): CreateRequestBuilder<ProductMasterConfigurations<T>, T> {
    return new CreateRequestBuilder<ProductMasterConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMasterConfigurations` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductMasterConfigurations.productMasterNumber}.
   * @param productConfigurationId Key property. See {@link ProductMasterConfigurations.productConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `ProductMasterConfigurations` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasterConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<ProductMasterConfigurations<T>, T>(
      this.entityApi,
      {
        ProductMasterNumber: productMasterNumber,
        ProductConfigurationId: productConfigurationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasterConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasterConfigurations`.
   */
  update(
    entity: ProductMasterConfigurations<T>
  ): UpdateRequestBuilder<ProductMasterConfigurations<T>, T> {
    return new UpdateRequestBuilder<ProductMasterConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasterConfigurations`.
   * @param productMasterNumber Key property. See {@link ProductMasterConfigurations.productMasterNumber}.
   * @param productConfigurationId Key property. See {@link ProductMasterConfigurations.productConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterConfigurations`.
   */
  delete(
    productMasterNumber: string,
    productConfigurationId: string
  ): DeleteRequestBuilder<ProductMasterConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasterConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductMasterConfigurations<T>
  ): DeleteRequestBuilder<ProductMasterConfigurations<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productConfigurationId?: string
  ): DeleteRequestBuilder<ProductMasterConfigurations<T>, T> {
    return new DeleteRequestBuilder<ProductMasterConfigurations<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductMasterConfigurations
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductConfigurationId: productConfigurationId!
          }
    );
  }
}
