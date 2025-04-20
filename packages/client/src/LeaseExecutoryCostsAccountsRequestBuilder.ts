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
import { LeaseExecutoryCostsAccounts } from './LeaseExecutoryCostsAccounts';

/**
 * Request builder class for operations supported on the {@link LeaseExecutoryCostsAccounts} entity.
 */
export class LeaseExecutoryCostsAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseExecutoryCostsAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseExecutoryCostsAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseExecutoryCostsAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseExecutoryCostsAccounts<T>, T> {
    return new GetAllRequestBuilder<LeaseExecutoryCostsAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseExecutoryCostsAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseExecutoryCostsAccounts`.
   */
  create(
    entity: LeaseExecutoryCostsAccounts<T>
  ): CreateRequestBuilder<LeaseExecutoryCostsAccounts<T>, T> {
    return new CreateRequestBuilder<LeaseExecutoryCostsAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseExecutoryCostsAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseExecutoryCostsAccounts.dataAreaId}.
   * @param recordCounter Key property. See {@link LeaseExecutoryCostsAccounts.recordCounter}.
   * @returns A request builder for creating requests to retrieve one `LeaseExecutoryCostsAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordCounter: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<LeaseExecutoryCostsAccounts<T>, T> {
    return new GetByKeyRequestBuilder<LeaseExecutoryCostsAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordCounter: recordCounter
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseExecutoryCostsAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseExecutoryCostsAccounts`.
   */
  update(
    entity: LeaseExecutoryCostsAccounts<T>
  ): UpdateRequestBuilder<LeaseExecutoryCostsAccounts<T>, T> {
    return new UpdateRequestBuilder<LeaseExecutoryCostsAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseExecutoryCostsAccounts`.
   * @param dataAreaId Key property. See {@link LeaseExecutoryCostsAccounts.dataAreaId}.
   * @param recordCounter Key property. See {@link LeaseExecutoryCostsAccounts.recordCounter}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExecutoryCostsAccounts`.
   */
  delete(
    dataAreaId: string,
    recordCounter: number
  ): DeleteRequestBuilder<LeaseExecutoryCostsAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseExecutoryCostsAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExecutoryCostsAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseExecutoryCostsAccounts<T>
  ): DeleteRequestBuilder<LeaseExecutoryCostsAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordCounter?: number
  ): DeleteRequestBuilder<LeaseExecutoryCostsAccounts<T>, T> {
    return new DeleteRequestBuilder<LeaseExecutoryCostsAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseExecutoryCostsAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordCounter: recordCounter!
          }
    );
  }
}
