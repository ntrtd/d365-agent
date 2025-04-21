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
import { RetailCreditMemos } from './RetailCreditMemos';

/**
 * Request builder class for operations supported on the {@link RetailCreditMemos} entity.
 */
export class RetailCreditMemosRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCreditMemos<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCreditMemos` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCreditMemos` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCreditMemos<T>, T> {
    return new GetAllRequestBuilder<RetailCreditMemos<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailCreditMemos` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCreditMemos`.
   */
  create(
    entity: RetailCreditMemos<T>
  ): CreateRequestBuilder<RetailCreditMemos<T>, T> {
    return new CreateRequestBuilder<RetailCreditMemos<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCreditMemos` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailCreditMemos.dataAreaId}.
   * @param entryId Key property. See {@link RetailCreditMemos.entryId}.
   * @returns A request builder for creating requests to retrieve one `RetailCreditMemos` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    entryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCreditMemos<T>, T> {
    return new GetByKeyRequestBuilder<RetailCreditMemos<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      EntryId: entryId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCreditMemos`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCreditMemos`.
   */
  update(
    entity: RetailCreditMemos<T>
  ): UpdateRequestBuilder<RetailCreditMemos<T>, T> {
    return new UpdateRequestBuilder<RetailCreditMemos<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCreditMemos`.
   * @param dataAreaId Key property. See {@link RetailCreditMemos.dataAreaId}.
   * @param entryId Key property. See {@link RetailCreditMemos.entryId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCreditMemos`.
   */
  delete(
    dataAreaId: string,
    entryId: string
  ): DeleteRequestBuilder<RetailCreditMemos<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCreditMemos`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCreditMemos` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCreditMemos<T>
  ): DeleteRequestBuilder<RetailCreditMemos<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    entryId?: string
  ): DeleteRequestBuilder<RetailCreditMemos<T>, T> {
    return new DeleteRequestBuilder<RetailCreditMemos<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailCreditMemos
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EntryId: entryId!
          }
    );
  }
}
