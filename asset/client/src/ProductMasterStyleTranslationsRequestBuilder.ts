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
import { ProductMasterStyleTranslations } from './ProductMasterStyleTranslations';

/**
 * Request builder class for operations supported on the {@link ProductMasterStyleTranslations} entity.
 */
export class ProductMasterStyleTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasterStyleTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasterStyleTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasterStyleTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasterStyleTranslations<T>, T> {
    return new GetAllRequestBuilder<ProductMasterStyleTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductMasterStyleTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasterStyleTranslations`.
   */
  create(
    entity: ProductMasterStyleTranslations<T>
  ): CreateRequestBuilder<ProductMasterStyleTranslations<T>, T> {
    return new CreateRequestBuilder<ProductMasterStyleTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMasterStyleTranslations` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductMasterStyleTranslations.productMasterNumber}.
   * @param productMasterStyleId Key property. See {@link ProductMasterStyleTranslations.productMasterStyleId}.
   * @param languageId Key property. See {@link ProductMasterStyleTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `ProductMasterStyleTranslations` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productMasterStyleId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasterStyleTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ProductMasterStyleTranslations<T>, T>(
      this.entityApi,
      {
        ProductMasterNumber: productMasterNumber,
        ProductMasterStyleId: productMasterStyleId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasterStyleTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasterStyleTranslations`.
   */
  update(
    entity: ProductMasterStyleTranslations<T>
  ): UpdateRequestBuilder<ProductMasterStyleTranslations<T>, T> {
    return new UpdateRequestBuilder<ProductMasterStyleTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasterStyleTranslations`.
   * @param productMasterNumber Key property. See {@link ProductMasterStyleTranslations.productMasterNumber}.
   * @param productMasterStyleId Key property. See {@link ProductMasterStyleTranslations.productMasterStyleId}.
   * @param languageId Key property. See {@link ProductMasterStyleTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterStyleTranslations`.
   */
  delete(
    productMasterNumber: string,
    productMasterStyleId: string,
    languageId: string
  ): DeleteRequestBuilder<ProductMasterStyleTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasterStyleTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterStyleTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductMasterStyleTranslations<T>
  ): DeleteRequestBuilder<ProductMasterStyleTranslations<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productMasterStyleId?: string,
    languageId?: string
  ): DeleteRequestBuilder<ProductMasterStyleTranslations<T>, T> {
    return new DeleteRequestBuilder<ProductMasterStyleTranslations<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductMasterStyleTranslations
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductMasterStyleId: productMasterStyleId!,
            LanguageId: languageId!
          }
    );
  }
}
