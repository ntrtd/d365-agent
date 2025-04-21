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
import { DimensionAttributeTranslations } from './DimensionAttributeTranslations';

/**
 * Request builder class for operations supported on the {@link DimensionAttributeTranslations} entity.
 */
export class DimensionAttributeTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionAttributeTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionAttributeTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionAttributeTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionAttributeTranslations<T>, T> {
    return new GetAllRequestBuilder<DimensionAttributeTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimensionAttributeTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionAttributeTranslations`.
   */
  create(
    entity: DimensionAttributeTranslations<T>
  ): CreateRequestBuilder<DimensionAttributeTranslations<T>, T> {
    return new CreateRequestBuilder<DimensionAttributeTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionAttributeTranslations` entity based on its keys.
   * @param financialDimension Key property. See {@link DimensionAttributeTranslations.financialDimension}.
   * @param languageCode Key property. See {@link DimensionAttributeTranslations.languageCode}.
   * @returns A request builder for creating requests to retrieve one `DimensionAttributeTranslations` entity based on its keys.
   */
  getByKey(
    financialDimension: DeserializedType<T, 'Edm.String'>,
    languageCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimensionAttributeTranslations<T>, T> {
    return new GetByKeyRequestBuilder<DimensionAttributeTranslations<T>, T>(
      this.entityApi,
      {
        FinancialDimension: financialDimension,
        LanguageCode: languageCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionAttributeTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionAttributeTranslations`.
   */
  update(
    entity: DimensionAttributeTranslations<T>
  ): UpdateRequestBuilder<DimensionAttributeTranslations<T>, T> {
    return new UpdateRequestBuilder<DimensionAttributeTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionAttributeTranslations`.
   * @param financialDimension Key property. See {@link DimensionAttributeTranslations.financialDimension}.
   * @param languageCode Key property. See {@link DimensionAttributeTranslations.languageCode}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionAttributeTranslations`.
   */
  delete(
    financialDimension: string,
    languageCode: string
  ): DeleteRequestBuilder<DimensionAttributeTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionAttributeTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionAttributeTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionAttributeTranslations<T>
  ): DeleteRequestBuilder<DimensionAttributeTranslations<T>, T>;
  delete(
    financialDimensionOrEntity: any,
    languageCode?: string
  ): DeleteRequestBuilder<DimensionAttributeTranslations<T>, T> {
    return new DeleteRequestBuilder<DimensionAttributeTranslations<T>, T>(
      this.entityApi,
      financialDimensionOrEntity instanceof DimensionAttributeTranslations
        ? financialDimensionOrEntity
        : {
            FinancialDimension: financialDimensionOrEntity!,
            LanguageCode: languageCode!
          }
    );
  }
}
