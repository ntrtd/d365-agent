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
import { AddressCountryRegionTranslations } from './AddressCountryRegionTranslations';

/**
 * Request builder class for operations supported on the {@link AddressCountryRegionTranslations} entity.
 */
export class AddressCountryRegionTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressCountryRegionTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `AddressCountryRegionTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `AddressCountryRegionTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<AddressCountryRegionTranslations<T>, T> {
    return new GetAllRequestBuilder<AddressCountryRegionTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AddressCountryRegionTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressCountryRegionTranslations`.
   */
  create(
    entity: AddressCountryRegionTranslations<T>
  ): CreateRequestBuilder<AddressCountryRegionTranslations<T>, T> {
    return new CreateRequestBuilder<AddressCountryRegionTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressCountryRegionTranslations` entity based on its keys.
   * @param countryRegionId Key property. See {@link AddressCountryRegionTranslations.countryRegionId}.
   * @param languageId Key property. See {@link AddressCountryRegionTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `AddressCountryRegionTranslations` entity based on its keys.
   */
  getByKey(
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressCountryRegionTranslations<T>, T> {
    return new GetByKeyRequestBuilder<AddressCountryRegionTranslations<T>, T>(
      this.entityApi,
      {
        CountryRegionId: countryRegionId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressCountryRegionTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressCountryRegionTranslations`.
   */
  update(
    entity: AddressCountryRegionTranslations<T>
  ): UpdateRequestBuilder<AddressCountryRegionTranslations<T>, T> {
    return new UpdateRequestBuilder<AddressCountryRegionTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressCountryRegionTranslations`.
   * @param countryRegionId Key property. See {@link AddressCountryRegionTranslations.countryRegionId}.
   * @param languageId Key property. See {@link AddressCountryRegionTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `AddressCountryRegionTranslations`.
   */
  delete(
    countryRegionId: string,
    languageId: string
  ): DeleteRequestBuilder<AddressCountryRegionTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressCountryRegionTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressCountryRegionTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: AddressCountryRegionTranslations<T>
  ): DeleteRequestBuilder<AddressCountryRegionTranslations<T>, T>;
  delete(
    countryRegionIdOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<AddressCountryRegionTranslations<T>, T> {
    return new DeleteRequestBuilder<AddressCountryRegionTranslations<T>, T>(
      this.entityApi,
      countryRegionIdOrEntity instanceof AddressCountryRegionTranslations
        ? countryRegionIdOrEntity
        : {
            CountryRegionId: countryRegionIdOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
