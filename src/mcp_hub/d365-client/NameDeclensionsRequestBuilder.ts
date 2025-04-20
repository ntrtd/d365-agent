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
import { NameDeclensions } from './NameDeclensions';

/**
 * Request builder class for operations supported on the {@link NameDeclensions} entity.
 */
export class NameDeclensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NameDeclensions<T>, T> {
  /**
   * Returns a request builder for querying all `NameDeclensions` entities.
   * @returns A request builder for creating requests to retrieve all `NameDeclensions` entities.
   */
  getAll(): GetAllRequestBuilder<NameDeclensions<T>, T> {
    return new GetAllRequestBuilder<NameDeclensions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NameDeclensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NameDeclensions`.
   */
  create(
    entity: NameDeclensions<T>
  ): CreateRequestBuilder<NameDeclensions<T>, T> {
    return new CreateRequestBuilder<NameDeclensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `NameDeclensions` entity based on its keys.
   * @param dataAreaId Key property. See {@link NameDeclensions.dataAreaId}.
   * @param currencyCode Key property. See {@link NameDeclensions.currencyCode}.
   * @param languageId Key property. See {@link NameDeclensions.languageId}.
   * @returns A request builder for creating requests to retrieve one `NameDeclensions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    currencyCode: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NameDeclensions<T>, T> {
    return new GetByKeyRequestBuilder<NameDeclensions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CurrencyCode: currencyCode,
      LanguageId: languageId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `NameDeclensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NameDeclensions`.
   */
  update(
    entity: NameDeclensions<T>
  ): UpdateRequestBuilder<NameDeclensions<T>, T> {
    return new UpdateRequestBuilder<NameDeclensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NameDeclensions`.
   * @param dataAreaId Key property. See {@link NameDeclensions.dataAreaId}.
   * @param currencyCode Key property. See {@link NameDeclensions.currencyCode}.
   * @param languageId Key property. See {@link NameDeclensions.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `NameDeclensions`.
   */
  delete(
    dataAreaId: string,
    currencyCode: string,
    languageId: string
  ): DeleteRequestBuilder<NameDeclensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NameDeclensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NameDeclensions` by taking the entity as a parameter.
   */
  delete(
    entity: NameDeclensions<T>
  ): DeleteRequestBuilder<NameDeclensions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    currencyCode?: string,
    languageId?: string
  ): DeleteRequestBuilder<NameDeclensions<T>, T> {
    return new DeleteRequestBuilder<NameDeclensions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof NameDeclensions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CurrencyCode: currencyCode!,
            LanguageId: languageId!
          }
    );
  }
}
