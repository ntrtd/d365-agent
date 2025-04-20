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
import { ButtonGridProductSearchDataSets } from './ButtonGridProductSearchDataSets';

/**
 * Request builder class for operations supported on the {@link ButtonGridProductSearchDataSets} entity.
 */
export class ButtonGridProductSearchDataSetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ButtonGridProductSearchDataSets<T>, T> {
  /**
   * Returns a request builder for querying all `ButtonGridProductSearchDataSets` entities.
   * @returns A request builder for creating requests to retrieve all `ButtonGridProductSearchDataSets` entities.
   */
  getAll(): GetAllRequestBuilder<ButtonGridProductSearchDataSets<T>, T> {
    return new GetAllRequestBuilder<ButtonGridProductSearchDataSets<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ButtonGridProductSearchDataSets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ButtonGridProductSearchDataSets`.
   */
  create(
    entity: ButtonGridProductSearchDataSets<T>
  ): CreateRequestBuilder<ButtonGridProductSearchDataSets<T>, T> {
    return new CreateRequestBuilder<ButtonGridProductSearchDataSets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ButtonGridProductSearchDataSets` entity based on its keys.
   * @param dataAreaId Key property. See {@link ButtonGridProductSearchDataSets.dataAreaId}.
   * @param itemId Key property. See {@link ButtonGridProductSearchDataSets.itemId}.
   * @param languageId Key property. See {@link ButtonGridProductSearchDataSets.languageId}.
   * @returns A request builder for creating requests to retrieve one `ButtonGridProductSearchDataSets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ButtonGridProductSearchDataSets<T>, T> {
    return new GetByKeyRequestBuilder<ButtonGridProductSearchDataSets<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ButtonGridProductSearchDataSets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ButtonGridProductSearchDataSets`.
   */
  update(
    entity: ButtonGridProductSearchDataSets<T>
  ): UpdateRequestBuilder<ButtonGridProductSearchDataSets<T>, T> {
    return new UpdateRequestBuilder<ButtonGridProductSearchDataSets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ButtonGridProductSearchDataSets`.
   * @param dataAreaId Key property. See {@link ButtonGridProductSearchDataSets.dataAreaId}.
   * @param itemId Key property. See {@link ButtonGridProductSearchDataSets.itemId}.
   * @param languageId Key property. See {@link ButtonGridProductSearchDataSets.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ButtonGridProductSearchDataSets`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    languageId: string
  ): DeleteRequestBuilder<ButtonGridProductSearchDataSets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ButtonGridProductSearchDataSets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ButtonGridProductSearchDataSets` by taking the entity as a parameter.
   */
  delete(
    entity: ButtonGridProductSearchDataSets<T>
  ): DeleteRequestBuilder<ButtonGridProductSearchDataSets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    languageId?: string
  ): DeleteRequestBuilder<ButtonGridProductSearchDataSets<T>, T> {
    return new DeleteRequestBuilder<ButtonGridProductSearchDataSets<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ButtonGridProductSearchDataSets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            LanguageId: languageId!
          }
    );
  }
}
