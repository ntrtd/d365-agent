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
import { StandardMainAccounts } from './StandardMainAccounts';

/**
 * Request builder class for operations supported on the {@link StandardMainAccounts} entity.
 */
export class StandardMainAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StandardMainAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `StandardMainAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `StandardMainAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<StandardMainAccounts<T>, T> {
    return new GetAllRequestBuilder<StandardMainAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StandardMainAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StandardMainAccounts`.
   */
  create(
    entity: StandardMainAccounts<T>
  ): CreateRequestBuilder<StandardMainAccounts<T>, T> {
    return new CreateRequestBuilder<StandardMainAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StandardMainAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link StandardMainAccounts.dataAreaId}.
   * @param standardAccount Key property. See {@link StandardMainAccounts.standardAccount}.
   * @returns A request builder for creating requests to retrieve one `StandardMainAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    standardAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StandardMainAccounts<T>, T> {
    return new GetByKeyRequestBuilder<StandardMainAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StandardAccount: standardAccount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `StandardMainAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StandardMainAccounts`.
   */
  update(
    entity: StandardMainAccounts<T>
  ): UpdateRequestBuilder<StandardMainAccounts<T>, T> {
    return new UpdateRequestBuilder<StandardMainAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StandardMainAccounts`.
   * @param dataAreaId Key property. See {@link StandardMainAccounts.dataAreaId}.
   * @param standardAccount Key property. See {@link StandardMainAccounts.standardAccount}.
   * @returns A request builder for creating requests that delete an entity of type `StandardMainAccounts`.
   */
  delete(
    dataAreaId: string,
    standardAccount: string
  ): DeleteRequestBuilder<StandardMainAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StandardMainAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StandardMainAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: StandardMainAccounts<T>
  ): DeleteRequestBuilder<StandardMainAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    standardAccount?: string
  ): DeleteRequestBuilder<StandardMainAccounts<T>, T> {
    return new DeleteRequestBuilder<StandardMainAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StandardMainAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StandardAccount: standardAccount!
          }
    );
  }
}
