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
import { ProductMasterSizeTranslations } from './ProductMasterSizeTranslations';

/**
 * Request builder class for operations supported on the {@link ProductMasterSizeTranslations} entity.
 */
export class ProductMasterSizeTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasterSizeTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasterSizeTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasterSizeTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasterSizeTranslations<T>, T> {
    return new GetAllRequestBuilder<ProductMasterSizeTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductMasterSizeTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasterSizeTranslations`.
   */
  create(
    entity: ProductMasterSizeTranslations<T>
  ): CreateRequestBuilder<ProductMasterSizeTranslations<T>, T> {
    return new CreateRequestBuilder<ProductMasterSizeTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMasterSizeTranslations` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductMasterSizeTranslations.productMasterNumber}.
   * @param productMasterSizeId Key property. See {@link ProductMasterSizeTranslations.productMasterSizeId}.
   * @param languageId Key property. See {@link ProductMasterSizeTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `ProductMasterSizeTranslations` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productMasterSizeId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasterSizeTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ProductMasterSizeTranslations<T>, T>(
      this.entityApi,
      {
        ProductMasterNumber: productMasterNumber,
        ProductMasterSizeId: productMasterSizeId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasterSizeTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasterSizeTranslations`.
   */
  update(
    entity: ProductMasterSizeTranslations<T>
  ): UpdateRequestBuilder<ProductMasterSizeTranslations<T>, T> {
    return new UpdateRequestBuilder<ProductMasterSizeTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasterSizeTranslations`.
   * @param productMasterNumber Key property. See {@link ProductMasterSizeTranslations.productMasterNumber}.
   * @param productMasterSizeId Key property. See {@link ProductMasterSizeTranslations.productMasterSizeId}.
   * @param languageId Key property. See {@link ProductMasterSizeTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterSizeTranslations`.
   */
  delete(
    productMasterNumber: string,
    productMasterSizeId: string,
    languageId: string
  ): DeleteRequestBuilder<ProductMasterSizeTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasterSizeTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterSizeTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductMasterSizeTranslations<T>
  ): DeleteRequestBuilder<ProductMasterSizeTranslations<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productMasterSizeId?: string,
    languageId?: string
  ): DeleteRequestBuilder<ProductMasterSizeTranslations<T>, T> {
    return new DeleteRequestBuilder<ProductMasterSizeTranslations<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductMasterSizeTranslations
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductMasterSizeId: productMasterSizeId!,
            LanguageId: languageId!
          }
    );
  }
}
