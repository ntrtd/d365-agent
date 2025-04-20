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
import { ProductTranslations } from './ProductTranslations';

/**
 * Request builder class for operations supported on the {@link ProductTranslations} entity.
 */
export class ProductTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductTranslations<T>, T> {
    return new GetAllRequestBuilder<ProductTranslations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductTranslations`.
   */
  create(
    entity: ProductTranslations<T>
  ): CreateRequestBuilder<ProductTranslations<T>, T> {
    return new CreateRequestBuilder<ProductTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductTranslations` entity based on its keys.
   * @param productNumber Key property. See {@link ProductTranslations.productNumber}.
   * @param languageId Key property. See {@link ProductTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `ProductTranslations` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ProductTranslations<T>, T>(
      this.entityApi,
      {
        ProductNumber: productNumber,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductTranslations`.
   */
  update(
    entity: ProductTranslations<T>
  ): UpdateRequestBuilder<ProductTranslations<T>, T> {
    return new UpdateRequestBuilder<ProductTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductTranslations`.
   * @param productNumber Key property. See {@link ProductTranslations.productNumber}.
   * @param languageId Key property. See {@link ProductTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductTranslations`.
   */
  delete(
    productNumber: string,
    languageId: string
  ): DeleteRequestBuilder<ProductTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductTranslations<T>
  ): DeleteRequestBuilder<ProductTranslations<T>, T>;
  delete(
    productNumberOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<ProductTranslations<T>, T> {
    return new DeleteRequestBuilder<ProductTranslations<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof ProductTranslations
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
