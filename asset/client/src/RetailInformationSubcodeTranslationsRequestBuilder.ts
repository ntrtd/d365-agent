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
import { RetailInformationSubcodeTranslations } from './RetailInformationSubcodeTranslations';

/**
 * Request builder class for operations supported on the {@link RetailInformationSubcodeTranslations} entity.
 */
export class RetailInformationSubcodeTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInformationSubcodeTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInformationSubcodeTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInformationSubcodeTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInformationSubcodeTranslations<T>, T> {
    return new GetAllRequestBuilder<RetailInformationSubcodeTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInformationSubcodeTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInformationSubcodeTranslations`.
   */
  create(
    entity: RetailInformationSubcodeTranslations<T>
  ): CreateRequestBuilder<RetailInformationSubcodeTranslations<T>, T> {
    return new CreateRequestBuilder<RetailInformationSubcodeTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInformationSubcodeTranslations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInformationSubcodeTranslations.dataAreaId}.
   * @param infocodeId Key property. See {@link RetailInformationSubcodeTranslations.infocodeId}.
   * @param subcodeId Key property. See {@link RetailInformationSubcodeTranslations.subcodeId}.
   * @param languageId Key property. See {@link RetailInformationSubcodeTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `RetailInformationSubcodeTranslations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    infocodeId: DeserializedType<T, 'Edm.String'>,
    subcodeId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInformationSubcodeTranslations<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailInformationSubcodeTranslations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InfocodeId: infocodeId,
      SubcodeId: subcodeId,
      LanguageId: languageId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInformationSubcodeTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInformationSubcodeTranslations`.
   */
  update(
    entity: RetailInformationSubcodeTranslations<T>
  ): UpdateRequestBuilder<RetailInformationSubcodeTranslations<T>, T> {
    return new UpdateRequestBuilder<RetailInformationSubcodeTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInformationSubcodeTranslations`.
   * @param dataAreaId Key property. See {@link RetailInformationSubcodeTranslations.dataAreaId}.
   * @param infocodeId Key property. See {@link RetailInformationSubcodeTranslations.infocodeId}.
   * @param subcodeId Key property. See {@link RetailInformationSubcodeTranslations.subcodeId}.
   * @param languageId Key property. See {@link RetailInformationSubcodeTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInformationSubcodeTranslations`.
   */
  delete(
    dataAreaId: string,
    infocodeId: string,
    subcodeId: string,
    languageId: string
  ): DeleteRequestBuilder<RetailInformationSubcodeTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInformationSubcodeTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInformationSubcodeTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInformationSubcodeTranslations<T>
  ): DeleteRequestBuilder<RetailInformationSubcodeTranslations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    infocodeId?: string,
    subcodeId?: string,
    languageId?: string
  ): DeleteRequestBuilder<RetailInformationSubcodeTranslations<T>, T> {
    return new DeleteRequestBuilder<RetailInformationSubcodeTranslations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInformationSubcodeTranslations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InfocodeId: infocodeId!,
            SubcodeId: subcodeId!,
            LanguageId: languageId!
          }
    );
  }
}
