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
import { BeginningBalanceOnAccTransactions } from './BeginningBalanceOnAccTransactions';

/**
 * Request builder class for operations supported on the {@link BeginningBalanceOnAccTransactions} entity.
 */
export class BeginningBalanceOnAccTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BeginningBalanceOnAccTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `BeginningBalanceOnAccTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `BeginningBalanceOnAccTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<BeginningBalanceOnAccTransactions<T>, T> {
    return new GetAllRequestBuilder<BeginningBalanceOnAccTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BeginningBalanceOnAccTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BeginningBalanceOnAccTransactions`.
   */
  create(
    entity: BeginningBalanceOnAccTransactions<T>
  ): CreateRequestBuilder<BeginningBalanceOnAccTransactions<T>, T> {
    return new CreateRequestBuilder<BeginningBalanceOnAccTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BeginningBalanceOnAccTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BeginningBalanceOnAccTransactions.dataAreaId}.
   * @param journalId Key property. See {@link BeginningBalanceOnAccTransactions.journalId}.
   * @param lineNumber Key property. See {@link BeginningBalanceOnAccTransactions.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `BeginningBalanceOnAccTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BeginningBalanceOnAccTransactions<T>, T> {
    return new GetByKeyRequestBuilder<BeginningBalanceOnAccTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalId: journalId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BeginningBalanceOnAccTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BeginningBalanceOnAccTransactions`.
   */
  update(
    entity: BeginningBalanceOnAccTransactions<T>
  ): UpdateRequestBuilder<BeginningBalanceOnAccTransactions<T>, T> {
    return new UpdateRequestBuilder<BeginningBalanceOnAccTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BeginningBalanceOnAccTransactions`.
   * @param dataAreaId Key property. See {@link BeginningBalanceOnAccTransactions.dataAreaId}.
   * @param journalId Key property. See {@link BeginningBalanceOnAccTransactions.journalId}.
   * @param lineNumber Key property. See {@link BeginningBalanceOnAccTransactions.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BeginningBalanceOnAccTransactions`.
   */
  delete(
    dataAreaId: string,
    journalId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<BeginningBalanceOnAccTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BeginningBalanceOnAccTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BeginningBalanceOnAccTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: BeginningBalanceOnAccTransactions<T>
  ): DeleteRequestBuilder<BeginningBalanceOnAccTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<BeginningBalanceOnAccTransactions<T>, T> {
    return new DeleteRequestBuilder<BeginningBalanceOnAccTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BeginningBalanceOnAccTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalId: journalId!,
            LineNumber: lineNumber!
          }
    );
  }
}
