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
import { UnitOfMeasureTranslations } from './UnitOfMeasureTranslations';

/**
 * Request builder class for operations supported on the {@link UnitOfMeasureTranslations} entity.
 */
export class UnitOfMeasureTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UnitOfMeasureTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `UnitOfMeasureTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `UnitOfMeasureTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<UnitOfMeasureTranslations<T>, T> {
    return new GetAllRequestBuilder<UnitOfMeasureTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UnitOfMeasureTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UnitOfMeasureTranslations`.
   */
  create(
    entity: UnitOfMeasureTranslations<T>
  ): CreateRequestBuilder<UnitOfMeasureTranslations<T>, T> {
    return new CreateRequestBuilder<UnitOfMeasureTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UnitOfMeasureTranslations` entity based on its keys.
   * @param unitSymbol Key property. See {@link UnitOfMeasureTranslations.unitSymbol}.
   * @param languageId Key property. See {@link UnitOfMeasureTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `UnitOfMeasureTranslations` entity based on its keys.
   */
  getByKey(
    unitSymbol: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UnitOfMeasureTranslations<T>, T> {
    return new GetByKeyRequestBuilder<UnitOfMeasureTranslations<T>, T>(
      this.entityApi,
      {
        UnitSymbol: unitSymbol,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UnitOfMeasureTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UnitOfMeasureTranslations`.
   */
  update(
    entity: UnitOfMeasureTranslations<T>
  ): UpdateRequestBuilder<UnitOfMeasureTranslations<T>, T> {
    return new UpdateRequestBuilder<UnitOfMeasureTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasureTranslations`.
   * @param unitSymbol Key property. See {@link UnitOfMeasureTranslations.unitSymbol}.
   * @param languageId Key property. See {@link UnitOfMeasureTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasureTranslations`.
   */
  delete(
    unitSymbol: string,
    languageId: string
  ): DeleteRequestBuilder<UnitOfMeasureTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasureTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasureTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: UnitOfMeasureTranslations<T>
  ): DeleteRequestBuilder<UnitOfMeasureTranslations<T>, T>;
  delete(
    unitSymbolOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<UnitOfMeasureTranslations<T>, T> {
    return new DeleteRequestBuilder<UnitOfMeasureTranslations<T>, T>(
      this.entityApi,
      unitSymbolOrEntity instanceof UnitOfMeasureTranslations
        ? unitSymbolOrEntity
        : {
            UnitSymbol: unitSymbolOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
