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
import { RetailRecoLists } from './RetailRecoLists';

/**
 * Request builder class for operations supported on the {@link RetailRecoLists} entity.
 */
export class RetailRecoListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailRecoLists<T>, T> {
  /**
   * Returns a request builder for querying all `RetailRecoLists` entities.
   * @returns A request builder for creating requests to retrieve all `RetailRecoLists` entities.
   */
  getAll(): GetAllRequestBuilder<RetailRecoLists<T>, T> {
    return new GetAllRequestBuilder<RetailRecoLists<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailRecoLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailRecoLists`.
   */
  create(
    entity: RetailRecoLists<T>
  ): CreateRequestBuilder<RetailRecoLists<T>, T> {
    return new CreateRequestBuilder<RetailRecoLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailRecoLists` entity based on its keys.
   * @param listId Key property. See {@link RetailRecoLists.listId}.
   * @returns A request builder for creating requests to retrieve one `RetailRecoLists` entity based on its keys.
   */
  getByKey(
    listId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailRecoLists<T>, T> {
    return new GetByKeyRequestBuilder<RetailRecoLists<T>, T>(this.entityApi, {
      ListId: listId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailRecoLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailRecoLists`.
   */
  update(
    entity: RetailRecoLists<T>
  ): UpdateRequestBuilder<RetailRecoLists<T>, T> {
    return new UpdateRequestBuilder<RetailRecoLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailRecoLists`.
   * @param listId Key property. See {@link RetailRecoLists.listId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailRecoLists`.
   */
  delete(listId: string): DeleteRequestBuilder<RetailRecoLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailRecoLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailRecoLists` by taking the entity as a parameter.
   */
  delete(
    entity: RetailRecoLists<T>
  ): DeleteRequestBuilder<RetailRecoLists<T>, T>;
  delete(listIdOrEntity: any): DeleteRequestBuilder<RetailRecoLists<T>, T> {
    return new DeleteRequestBuilder<RetailRecoLists<T>, T>(
      this.entityApi,
      listIdOrEntity instanceof RetailRecoLists
        ? listIdOrEntity
        : { ListId: listIdOrEntity! }
    );
  }
}
