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
import { LanguageCodes } from './LanguageCodes';

/**
 * Request builder class for operations supported on the {@link LanguageCodes} entity.
 */
export class LanguageCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LanguageCodes<T>, T> {
  /**
   * Returns a request builder for querying all `LanguageCodes` entities.
   * @returns A request builder for creating requests to retrieve all `LanguageCodes` entities.
   */
  getAll(): GetAllRequestBuilder<LanguageCodes<T>, T> {
    return new GetAllRequestBuilder<LanguageCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LanguageCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LanguageCodes`.
   */
  create(entity: LanguageCodes<T>): CreateRequestBuilder<LanguageCodes<T>, T> {
    return new CreateRequestBuilder<LanguageCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LanguageCodes` entity based on its keys.
   * @param languageCodeId Key property. See {@link LanguageCodes.languageCodeId}.
   * @returns A request builder for creating requests to retrieve one `LanguageCodes` entity based on its keys.
   */
  getByKey(
    languageCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LanguageCodes<T>, T> {
    return new GetByKeyRequestBuilder<LanguageCodes<T>, T>(this.entityApi, {
      LanguageCodeId: languageCodeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LanguageCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LanguageCodes`.
   */
  update(entity: LanguageCodes<T>): UpdateRequestBuilder<LanguageCodes<T>, T> {
    return new UpdateRequestBuilder<LanguageCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LanguageCodes`.
   * @param languageCodeId Key property. See {@link LanguageCodes.languageCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `LanguageCodes`.
   */
  delete(languageCodeId: string): DeleteRequestBuilder<LanguageCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LanguageCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LanguageCodes` by taking the entity as a parameter.
   */
  delete(entity: LanguageCodes<T>): DeleteRequestBuilder<LanguageCodes<T>, T>;
  delete(
    languageCodeIdOrEntity: any
  ): DeleteRequestBuilder<LanguageCodes<T>, T> {
    return new DeleteRequestBuilder<LanguageCodes<T>, T>(
      this.entityApi,
      languageCodeIdOrEntity instanceof LanguageCodes
        ? languageCodeIdOrEntity
        : { LanguageCodeId: languageCodeIdOrEntity! }
    );
  }
}
