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
import { BeginningBalanceFeeTransactions } from './BeginningBalanceFeeTransactions';

/**
 * Request builder class for operations supported on the {@link BeginningBalanceFeeTransactions} entity.
 */
export class BeginningBalanceFeeTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BeginningBalanceFeeTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `BeginningBalanceFeeTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `BeginningBalanceFeeTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<BeginningBalanceFeeTransactions<T>, T> {
    return new GetAllRequestBuilder<BeginningBalanceFeeTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BeginningBalanceFeeTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BeginningBalanceFeeTransactions`.
   */
  create(
    entity: BeginningBalanceFeeTransactions<T>
  ): CreateRequestBuilder<BeginningBalanceFeeTransactions<T>, T> {
    return new CreateRequestBuilder<BeginningBalanceFeeTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BeginningBalanceFeeTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BeginningBalanceFeeTransactions.dataAreaId}.
   * @param lineNumber Key property. See {@link BeginningBalanceFeeTransactions.lineNumber}.
   * @param journalId Key property. See {@link BeginningBalanceFeeTransactions.journalId}.
   * @returns A request builder for creating requests to retrieve one `BeginningBalanceFeeTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    journalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BeginningBalanceFeeTransactions<T>, T> {
    return new GetByKeyRequestBuilder<BeginningBalanceFeeTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNumber: lineNumber,
        JournalId: journalId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BeginningBalanceFeeTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BeginningBalanceFeeTransactions`.
   */
  update(
    entity: BeginningBalanceFeeTransactions<T>
  ): UpdateRequestBuilder<BeginningBalanceFeeTransactions<T>, T> {
    return new UpdateRequestBuilder<BeginningBalanceFeeTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BeginningBalanceFeeTransactions`.
   * @param dataAreaId Key property. See {@link BeginningBalanceFeeTransactions.dataAreaId}.
   * @param lineNumber Key property. See {@link BeginningBalanceFeeTransactions.lineNumber}.
   * @param journalId Key property. See {@link BeginningBalanceFeeTransactions.journalId}.
   * @returns A request builder for creating requests that delete an entity of type `BeginningBalanceFeeTransactions`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    journalId: string
  ): DeleteRequestBuilder<BeginningBalanceFeeTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BeginningBalanceFeeTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BeginningBalanceFeeTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: BeginningBalanceFeeTransactions<T>
  ): DeleteRequestBuilder<BeginningBalanceFeeTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    journalId?: string
  ): DeleteRequestBuilder<BeginningBalanceFeeTransactions<T>, T> {
    return new DeleteRequestBuilder<BeginningBalanceFeeTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BeginningBalanceFeeTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            JournalId: journalId!
          }
    );
  }
}
