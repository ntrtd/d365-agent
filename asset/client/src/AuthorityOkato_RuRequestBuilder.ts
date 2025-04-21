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
import { AuthorityOkato_Ru } from './AuthorityOkato_Ru';

/**
 * Request builder class for operations supported on the {@link AuthorityOkato_Ru} entity.
 */
export class AuthorityOkato_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AuthorityOkato_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `AuthorityOkato_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `AuthorityOkato_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<AuthorityOkato_Ru<T>, T> {
    return new GetAllRequestBuilder<AuthorityOkato_Ru<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AuthorityOkato_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AuthorityOkato_Ru`.
   */
  create(
    entity: AuthorityOkato_Ru<T>
  ): CreateRequestBuilder<AuthorityOkato_Ru<T>, T> {
    return new CreateRequestBuilder<AuthorityOkato_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AuthorityOkato_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link AuthorityOkato_Ru.dataAreaId}.
   * @param okato Key property. See {@link AuthorityOkato_Ru.okato}.
   * @returns A request builder for creating requests to retrieve one `AuthorityOkato_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    okato: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AuthorityOkato_Ru<T>, T> {
    return new GetByKeyRequestBuilder<AuthorityOkato_Ru<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      OKATO: okato
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AuthorityOkato_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AuthorityOkato_Ru`.
   */
  update(
    entity: AuthorityOkato_Ru<T>
  ): UpdateRequestBuilder<AuthorityOkato_Ru<T>, T> {
    return new UpdateRequestBuilder<AuthorityOkato_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AuthorityOkato_Ru`.
   * @param dataAreaId Key property. See {@link AuthorityOkato_Ru.dataAreaId}.
   * @param okato Key property. See {@link AuthorityOkato_Ru.okato}.
   * @returns A request builder for creating requests that delete an entity of type `AuthorityOkato_Ru`.
   */
  delete(
    dataAreaId: string,
    okato: string
  ): DeleteRequestBuilder<AuthorityOkato_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AuthorityOkato_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AuthorityOkato_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: AuthorityOkato_Ru<T>
  ): DeleteRequestBuilder<AuthorityOkato_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    okato?: string
  ): DeleteRequestBuilder<AuthorityOkato_Ru<T>, T> {
    return new DeleteRequestBuilder<AuthorityOkato_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AuthorityOkato_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OKATO: okato!
          }
    );
  }
}
