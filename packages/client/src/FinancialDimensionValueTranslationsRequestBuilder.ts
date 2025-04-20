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
import { FinancialDimensionValueTranslations } from './FinancialDimensionValueTranslations';

/**
 * Request builder class for operations supported on the {@link FinancialDimensionValueTranslations} entity.
 */
export class FinancialDimensionValueTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FinancialDimensionValueTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `FinancialDimensionValueTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `FinancialDimensionValueTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<FinancialDimensionValueTranslations<T>, T> {
    return new GetAllRequestBuilder<FinancialDimensionValueTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FinancialDimensionValueTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FinancialDimensionValueTranslations`.
   */
  create(
    entity: FinancialDimensionValueTranslations<T>
  ): CreateRequestBuilder<FinancialDimensionValueTranslations<T>, T> {
    return new CreateRequestBuilder<FinancialDimensionValueTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FinancialDimensionValueTranslations` entity based on its keys.
   * @param financialDimension Key property. See {@link FinancialDimensionValueTranslations.financialDimension}.
   * @param languageCode Key property. See {@link FinancialDimensionValueTranslations.languageCode}.
   * @param financialDimensionValue Key property. See {@link FinancialDimensionValueTranslations.financialDimensionValue}.
   * @returns A request builder for creating requests to retrieve one `FinancialDimensionValueTranslations` entity based on its keys.
   */
  getByKey(
    financialDimension: DeserializedType<T, 'Edm.String'>,
    languageCode: DeserializedType<T, 'Edm.String'>,
    financialDimensionValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FinancialDimensionValueTranslations<T>, T> {
    return new GetByKeyRequestBuilder<
      FinancialDimensionValueTranslations<T>,
      T
    >(this.entityApi, {
      FinancialDimension: financialDimension,
      LanguageCode: languageCode,
      FinancialDimensionValue: financialDimensionValue
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FinancialDimensionValueTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FinancialDimensionValueTranslations`.
   */
  update(
    entity: FinancialDimensionValueTranslations<T>
  ): UpdateRequestBuilder<FinancialDimensionValueTranslations<T>, T> {
    return new UpdateRequestBuilder<FinancialDimensionValueTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FinancialDimensionValueTranslations`.
   * @param financialDimension Key property. See {@link FinancialDimensionValueTranslations.financialDimension}.
   * @param languageCode Key property. See {@link FinancialDimensionValueTranslations.languageCode}.
   * @param financialDimensionValue Key property. See {@link FinancialDimensionValueTranslations.financialDimensionValue}.
   * @returns A request builder for creating requests that delete an entity of type `FinancialDimensionValueTranslations`.
   */
  delete(
    financialDimension: string,
    languageCode: string,
    financialDimensionValue: string
  ): DeleteRequestBuilder<FinancialDimensionValueTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FinancialDimensionValueTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FinancialDimensionValueTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: FinancialDimensionValueTranslations<T>
  ): DeleteRequestBuilder<FinancialDimensionValueTranslations<T>, T>;
  delete(
    financialDimensionOrEntity: any,
    languageCode?: string,
    financialDimensionValue?: string
  ): DeleteRequestBuilder<FinancialDimensionValueTranslations<T>, T> {
    return new DeleteRequestBuilder<FinancialDimensionValueTranslations<T>, T>(
      this.entityApi,
      financialDimensionOrEntity instanceof FinancialDimensionValueTranslations
        ? financialDimensionOrEntity
        : {
            FinancialDimension: financialDimensionOrEntity!,
            LanguageCode: languageCode!,
            FinancialDimensionValue: financialDimensionValue!
          }
    );
  }
}
