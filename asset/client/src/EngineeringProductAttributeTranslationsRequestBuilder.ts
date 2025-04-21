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
import { EngineeringProductAttributeTranslations } from './EngineeringProductAttributeTranslations';

/**
 * Request builder class for operations supported on the {@link EngineeringProductAttributeTranslations} entity.
 */
export class EngineeringProductAttributeTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringProductAttributeTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringProductAttributeTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringProductAttributeTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringProductAttributeTranslations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringProductAttributeTranslations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringProductAttributeTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringProductAttributeTranslations`.
   */
  create(
    entity: EngineeringProductAttributeTranslations<T>
  ): CreateRequestBuilder<EngineeringProductAttributeTranslations<T>, T> {
    return new CreateRequestBuilder<
      EngineeringProductAttributeTranslations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringProductAttributeTranslations` entity based on its keys.
   * @param engineeringProductAttributeName Key property. See {@link EngineeringProductAttributeTranslations.engineeringProductAttributeName}.
   * @param languageId Key property. See {@link EngineeringProductAttributeTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringProductAttributeTranslations` entity based on its keys.
   */
  getByKey(
    engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringProductAttributeTranslations<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringProductAttributeTranslations<T>,
      T
    >(this.entityApi, {
      EngineeringProductAttributeName: engineeringProductAttributeName,
      LanguageId: languageId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringProductAttributeTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringProductAttributeTranslations`.
   */
  update(
    entity: EngineeringProductAttributeTranslations<T>
  ): UpdateRequestBuilder<EngineeringProductAttributeTranslations<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringProductAttributeTranslations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductAttributeTranslations`.
   * @param engineeringProductAttributeName Key property. See {@link EngineeringProductAttributeTranslations.engineeringProductAttributeName}.
   * @param languageId Key property. See {@link EngineeringProductAttributeTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductAttributeTranslations`.
   */
  delete(
    engineeringProductAttributeName: string,
    languageId: string
  ): DeleteRequestBuilder<EngineeringProductAttributeTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductAttributeTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductAttributeTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringProductAttributeTranslations<T>
  ): DeleteRequestBuilder<EngineeringProductAttributeTranslations<T>, T>;
  delete(
    engineeringProductAttributeNameOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<EngineeringProductAttributeTranslations<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringProductAttributeTranslations<T>,
      T
    >(
      this.entityApi,
      engineeringProductAttributeNameOrEntity instanceof
      EngineeringProductAttributeTranslations
        ? engineeringProductAttributeNameOrEntity
        : {
            EngineeringProductAttributeName:
              engineeringProductAttributeNameOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
