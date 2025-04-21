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
import { TrvLogisticsAddressCountryRegionTranslations } from './TrvLogisticsAddressCountryRegionTranslations';

/**
 * Request builder class for operations supported on the {@link TrvLogisticsAddressCountryRegionTranslations} entity.
 */
export class TrvLogisticsAddressCountryRegionTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvLogisticsAddressCountryRegionTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `TrvLogisticsAddressCountryRegionTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `TrvLogisticsAddressCountryRegionTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<
    TrvLogisticsAddressCountryRegionTranslations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TrvLogisticsAddressCountryRegionTranslations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TrvLogisticsAddressCountryRegionTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvLogisticsAddressCountryRegionTranslations`.
   */
  create(
    entity: TrvLogisticsAddressCountryRegionTranslations<T>
  ): CreateRequestBuilder<TrvLogisticsAddressCountryRegionTranslations<T>, T> {
    return new CreateRequestBuilder<
      TrvLogisticsAddressCountryRegionTranslations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TrvLogisticsAddressCountryRegionTranslations` entity based on its keys.
   * @param countryRegionId Key property. See {@link TrvLogisticsAddressCountryRegionTranslations.countryRegionId}.
   * @param languageId Key property. See {@link TrvLogisticsAddressCountryRegionTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `TrvLogisticsAddressCountryRegionTranslations` entity based on its keys.
   */
  getByKey(
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    TrvLogisticsAddressCountryRegionTranslations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TrvLogisticsAddressCountryRegionTranslations<T>,
      T
    >(this.entityApi, {
      CountryRegionId: countryRegionId,
      LanguageId: languageId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TrvLogisticsAddressCountryRegionTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvLogisticsAddressCountryRegionTranslations`.
   */
  update(
    entity: TrvLogisticsAddressCountryRegionTranslations<T>
  ): UpdateRequestBuilder<TrvLogisticsAddressCountryRegionTranslations<T>, T> {
    return new UpdateRequestBuilder<
      TrvLogisticsAddressCountryRegionTranslations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvLogisticsAddressCountryRegionTranslations`.
   * @param countryRegionId Key property. See {@link TrvLogisticsAddressCountryRegionTranslations.countryRegionId}.
   * @param languageId Key property. See {@link TrvLogisticsAddressCountryRegionTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `TrvLogisticsAddressCountryRegionTranslations`.
   */
  delete(
    countryRegionId: string,
    languageId: string
  ): DeleteRequestBuilder<TrvLogisticsAddressCountryRegionTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvLogisticsAddressCountryRegionTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvLogisticsAddressCountryRegionTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: TrvLogisticsAddressCountryRegionTranslations<T>
  ): DeleteRequestBuilder<TrvLogisticsAddressCountryRegionTranslations<T>, T>;
  delete(
    countryRegionIdOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<TrvLogisticsAddressCountryRegionTranslations<T>, T> {
    return new DeleteRequestBuilder<
      TrvLogisticsAddressCountryRegionTranslations<T>,
      T
    >(
      this.entityApi,
      countryRegionIdOrEntity instanceof
      TrvLogisticsAddressCountryRegionTranslations
        ? countryRegionIdOrEntity
        : {
            CountryRegionId: countryRegionIdOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
