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
import { JournalNames } from './JournalNames';

/**
 * Request builder class for operations supported on the {@link JournalNames} entity.
 */
export class JournalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalNames<T>, T> {
  /**
   * Returns a request builder for querying all `JournalNames` entities.
   * @returns A request builder for creating requests to retrieve all `JournalNames` entities.
   */
  getAll(): GetAllRequestBuilder<JournalNames<T>, T> {
    return new GetAllRequestBuilder<JournalNames<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JournalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalNames`.
   */
  create(entity: JournalNames<T>): CreateRequestBuilder<JournalNames<T>, T> {
    return new CreateRequestBuilder<JournalNames<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `JournalNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link JournalNames.dataAreaId}.
   * @param name Key property. See {@link JournalNames.name}.
   * @returns A request builder for creating requests to retrieve one `JournalNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JournalNames<T>, T> {
    return new GetByKeyRequestBuilder<JournalNames<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JournalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalNames`.
   */
  update(entity: JournalNames<T>): UpdateRequestBuilder<JournalNames<T>, T> {
    return new UpdateRequestBuilder<JournalNames<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalNames`.
   * @param dataAreaId Key property. See {@link JournalNames.dataAreaId}.
   * @param name Key property. See {@link JournalNames.name}.
   * @returns A request builder for creating requests that delete an entity of type `JournalNames`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<JournalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalNames` by taking the entity as a parameter.
   */
  delete(entity: JournalNames<T>): DeleteRequestBuilder<JournalNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<JournalNames<T>, T> {
    return new DeleteRequestBuilder<JournalNames<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JournalNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
