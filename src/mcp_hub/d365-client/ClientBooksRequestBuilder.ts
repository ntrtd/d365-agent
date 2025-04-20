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
import { ClientBooks } from './ClientBooks';

/**
 * Request builder class for operations supported on the {@link ClientBooks} entity.
 */
export class ClientBooksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClientBooks<T>, T> {
  /**
   * Returns a request builder for querying all `ClientBooks` entities.
   * @returns A request builder for creating requests to retrieve all `ClientBooks` entities.
   */
  getAll(): GetAllRequestBuilder<ClientBooks<T>, T> {
    return new GetAllRequestBuilder<ClientBooks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ClientBooks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClientBooks`.
   */
  create(entity: ClientBooks<T>): CreateRequestBuilder<ClientBooks<T>, T> {
    return new CreateRequestBuilder<ClientBooks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ClientBooks` entity based on its keys.
   * @param dataAreaId Key property. See {@link ClientBooks.dataAreaId}.
   * @param id Key property. See {@link ClientBooks.id}.
   * @returns A request builder for creating requests to retrieve one `ClientBooks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ClientBooks<T>, T> {
    return new GetByKeyRequestBuilder<ClientBooks<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ClientBooks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClientBooks`.
   */
  update(entity: ClientBooks<T>): UpdateRequestBuilder<ClientBooks<T>, T> {
    return new UpdateRequestBuilder<ClientBooks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ClientBooks`.
   * @param dataAreaId Key property. See {@link ClientBooks.dataAreaId}.
   * @param id Key property. See {@link ClientBooks.id}.
   * @returns A request builder for creating requests that delete an entity of type `ClientBooks`.
   */
  delete(
    dataAreaId: string,
    id: string
  ): DeleteRequestBuilder<ClientBooks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClientBooks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClientBooks` by taking the entity as a parameter.
   */
  delete(entity: ClientBooks<T>): DeleteRequestBuilder<ClientBooks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: string
  ): DeleteRequestBuilder<ClientBooks<T>, T> {
    return new DeleteRequestBuilder<ClientBooks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ClientBooks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Id: id!
          }
    );
  }
}
