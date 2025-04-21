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
import { LeasePostingAccounts } from './LeasePostingAccounts';

/**
 * Request builder class for operations supported on the {@link LeasePostingAccounts} entity.
 */
export class LeasePostingAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeasePostingAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `LeasePostingAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `LeasePostingAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<LeasePostingAccounts<T>, T> {
    return new GetAllRequestBuilder<LeasePostingAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeasePostingAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeasePostingAccounts`.
   */
  create(
    entity: LeasePostingAccounts<T>
  ): CreateRequestBuilder<LeasePostingAccounts<T>, T> {
    return new CreateRequestBuilder<LeasePostingAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeasePostingAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeasePostingAccounts.dataAreaId}.
   * @param lineNum Key property. See {@link LeasePostingAccounts.lineNum}.
   * @returns A request builder for creating requests to retrieve one `LeasePostingAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<LeasePostingAccounts<T>, T> {
    return new GetByKeyRequestBuilder<LeasePostingAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeasePostingAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeasePostingAccounts`.
   */
  update(
    entity: LeasePostingAccounts<T>
  ): UpdateRequestBuilder<LeasePostingAccounts<T>, T> {
    return new UpdateRequestBuilder<LeasePostingAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeasePostingAccounts`.
   * @param dataAreaId Key property. See {@link LeasePostingAccounts.dataAreaId}.
   * @param lineNum Key property. See {@link LeasePostingAccounts.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `LeasePostingAccounts`.
   */
  delete(
    dataAreaId: string,
    lineNum: number
  ): DeleteRequestBuilder<LeasePostingAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeasePostingAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeasePostingAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: LeasePostingAccounts<T>
  ): DeleteRequestBuilder<LeasePostingAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNum?: number
  ): DeleteRequestBuilder<LeasePostingAccounts<T>, T> {
    return new DeleteRequestBuilder<LeasePostingAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeasePostingAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNum: lineNum!
          }
    );
  }
}
