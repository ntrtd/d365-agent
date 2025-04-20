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
import { TableBlockReasons } from './TableBlockReasons';
import { CredManReason } from './CredManReason';

/**
 * Request builder class for operations supported on the {@link TableBlockReasons} entity.
 */
export class TableBlockReasonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TableBlockReasons<T>, T> {
  /**
   * Returns a request builder for querying all `TableBlockReasons` entities.
   * @returns A request builder for creating requests to retrieve all `TableBlockReasons` entities.
   */
  getAll(): GetAllRequestBuilder<TableBlockReasons<T>, T> {
    return new GetAllRequestBuilder<TableBlockReasons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TableBlockReasons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TableBlockReasons`.
   */
  create(
    entity: TableBlockReasons<T>
  ): CreateRequestBuilder<TableBlockReasons<T>, T> {
    return new CreateRequestBuilder<TableBlockReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TableBlockReasons` entity based on its keys.
   * @param credManId Key property. See {@link TableBlockReasons.credManId}.
   * @param company Key property. See {@link TableBlockReasons.company}.
   * @param reason Key property. See {@link TableBlockReasons.reason}.
   * @returns A request builder for creating requests to retrieve one `TableBlockReasons` entity based on its keys.
   */
  getByKey(
    credManId: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>,
    reason: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.CredManReason'>
  ): GetByKeyRequestBuilder<TableBlockReasons<T>, T> {
    return new GetByKeyRequestBuilder<TableBlockReasons<T>, T>(this.entityApi, {
      CredManId: credManId,
      Company: company,
      Reason: reason
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TableBlockReasons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TableBlockReasons`.
   */
  update(
    entity: TableBlockReasons<T>
  ): UpdateRequestBuilder<TableBlockReasons<T>, T> {
    return new UpdateRequestBuilder<TableBlockReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TableBlockReasons`.
   * @param credManId Key property. See {@link TableBlockReasons.credManId}.
   * @param company Key property. See {@link TableBlockReasons.company}.
   * @param reason Key property. See {@link TableBlockReasons.reason}.
   * @returns A request builder for creating requests that delete an entity of type `TableBlockReasons`.
   */
  delete(
    credManId: string,
    company: string,
    reason: CredManReason
  ): DeleteRequestBuilder<TableBlockReasons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TableBlockReasons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TableBlockReasons` by taking the entity as a parameter.
   */
  delete(
    entity: TableBlockReasons<T>
  ): DeleteRequestBuilder<TableBlockReasons<T>, T>;
  delete(
    credManIdOrEntity: any,
    company?: string,
    reason?: CredManReason
  ): DeleteRequestBuilder<TableBlockReasons<T>, T> {
    return new DeleteRequestBuilder<TableBlockReasons<T>, T>(
      this.entityApi,
      credManIdOrEntity instanceof TableBlockReasons
        ? credManIdOrEntity
        : {
            CredManId: credManIdOrEntity!,
            Company: company!,
            Reason: reason!
          }
    );
  }
}
