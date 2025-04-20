/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { AllocationForMainAccounts } from './AllocationForMainAccounts';

/**
 * Request builder class for operations supported on the {@link AllocationForMainAccounts} entity.
 */
export class AllocationForMainAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AllocationForMainAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `AllocationForMainAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `AllocationForMainAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<AllocationForMainAccounts<T>, T> {
    return new GetAllRequestBuilder<AllocationForMainAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AllocationForMainAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AllocationForMainAccounts`.
   */
  create(
    entity: AllocationForMainAccounts<T>
  ): CreateRequestBuilder<AllocationForMainAccounts<T>, T> {
    return new CreateRequestBuilder<AllocationForMainAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AllocationForMainAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AllocationForMainAccounts.dataAreaId}.
   * @param mainAccountId Key property. See {@link AllocationForMainAccounts.mainAccountId}.
   * @param lineNumber Key property. See {@link AllocationForMainAccounts.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AllocationForMainAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    mainAccountId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AllocationForMainAccounts<T>, T> {
    return new GetByKeyRequestBuilder<AllocationForMainAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MainAccountId: mainAccountId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AllocationForMainAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AllocationForMainAccounts`.
   */
  update(
    entity: AllocationForMainAccounts<T>
  ): UpdateRequestBuilder<AllocationForMainAccounts<T>, T> {
    return new UpdateRequestBuilder<AllocationForMainAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AllocationForMainAccounts`.
   * @param dataAreaId Key property. See {@link AllocationForMainAccounts.dataAreaId}.
   * @param mainAccountId Key property. See {@link AllocationForMainAccounts.mainAccountId}.
   * @param lineNumber Key property. See {@link AllocationForMainAccounts.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AllocationForMainAccounts`.
   */
  delete(
    dataAreaId: string,
    mainAccountId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AllocationForMainAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AllocationForMainAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AllocationForMainAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: AllocationForMainAccounts<T>
  ): DeleteRequestBuilder<AllocationForMainAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    mainAccountId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AllocationForMainAccounts<T>, T> {
    return new DeleteRequestBuilder<AllocationForMainAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AllocationForMainAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MainAccountId: mainAccountId!,
            LineNumber: lineNumber!
          }
    );
  }
}
