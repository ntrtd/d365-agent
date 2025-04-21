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
import { FiscalLifoJournalNames } from './FiscalLifoJournalNames';

/**
 * Request builder class for operations supported on the {@link FiscalLifoJournalNames} entity.
 */
export class FiscalLifoJournalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalLifoJournalNames<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalLifoJournalNames` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalLifoJournalNames` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalLifoJournalNames<T>, T> {
    return new GetAllRequestBuilder<FiscalLifoJournalNames<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalLifoJournalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalLifoJournalNames`.
   */
  create(
    entity: FiscalLifoJournalNames<T>
  ): CreateRequestBuilder<FiscalLifoJournalNames<T>, T> {
    return new CreateRequestBuilder<FiscalLifoJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalLifoJournalNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalLifoJournalNames.dataAreaId}.
   * @param name Key property. See {@link FiscalLifoJournalNames.name}.
   * @returns A request builder for creating requests to retrieve one `FiscalLifoJournalNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalLifoJournalNames<T>, T> {
    return new GetByKeyRequestBuilder<FiscalLifoJournalNames<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalLifoJournalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalLifoJournalNames`.
   */
  update(
    entity: FiscalLifoJournalNames<T>
  ): UpdateRequestBuilder<FiscalLifoJournalNames<T>, T> {
    return new UpdateRequestBuilder<FiscalLifoJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalLifoJournalNames`.
   * @param dataAreaId Key property. See {@link FiscalLifoJournalNames.dataAreaId}.
   * @param name Key property. See {@link FiscalLifoJournalNames.name}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalLifoJournalNames`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<FiscalLifoJournalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalLifoJournalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalLifoJournalNames` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalLifoJournalNames<T>
  ): DeleteRequestBuilder<FiscalLifoJournalNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<FiscalLifoJournalNames<T>, T> {
    return new DeleteRequestBuilder<FiscalLifoJournalNames<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalLifoJournalNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
