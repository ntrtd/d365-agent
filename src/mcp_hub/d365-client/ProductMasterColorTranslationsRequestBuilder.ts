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
import { ProductMasterColorTranslations } from './ProductMasterColorTranslations';

/**
 * Request builder class for operations supported on the {@link ProductMasterColorTranslations} entity.
 */
export class ProductMasterColorTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasterColorTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasterColorTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasterColorTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasterColorTranslations<T>, T> {
    return new GetAllRequestBuilder<ProductMasterColorTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductMasterColorTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasterColorTranslations`.
   */
  create(
    entity: ProductMasterColorTranslations<T>
  ): CreateRequestBuilder<ProductMasterColorTranslations<T>, T> {
    return new CreateRequestBuilder<ProductMasterColorTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMasterColorTranslations` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductMasterColorTranslations.productMasterNumber}.
   * @param productMasterColorId Key property. See {@link ProductMasterColorTranslations.productMasterColorId}.
   * @param languageId Key property. See {@link ProductMasterColorTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `ProductMasterColorTranslations` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productMasterColorId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasterColorTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ProductMasterColorTranslations<T>, T>(
      this.entityApi,
      {
        ProductMasterNumber: productMasterNumber,
        ProductMasterColorId: productMasterColorId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasterColorTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasterColorTranslations`.
   */
  update(
    entity: ProductMasterColorTranslations<T>
  ): UpdateRequestBuilder<ProductMasterColorTranslations<T>, T> {
    return new UpdateRequestBuilder<ProductMasterColorTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasterColorTranslations`.
   * @param productMasterNumber Key property. See {@link ProductMasterColorTranslations.productMasterNumber}.
   * @param productMasterColorId Key property. See {@link ProductMasterColorTranslations.productMasterColorId}.
   * @param languageId Key property. See {@link ProductMasterColorTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterColorTranslations`.
   */
  delete(
    productMasterNumber: string,
    productMasterColorId: string,
    languageId: string
  ): DeleteRequestBuilder<ProductMasterColorTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasterColorTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterColorTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductMasterColorTranslations<T>
  ): DeleteRequestBuilder<ProductMasterColorTranslations<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productMasterColorId?: string,
    languageId?: string
  ): DeleteRequestBuilder<ProductMasterColorTranslations<T>, T> {
    return new DeleteRequestBuilder<ProductMasterColorTranslations<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductMasterColorTranslations
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductMasterColorId: productMasterColorId!,
            LanguageId: languageId!
          }
    );
  }
}
