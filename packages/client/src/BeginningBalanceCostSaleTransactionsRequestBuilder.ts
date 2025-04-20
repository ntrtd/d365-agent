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
import { BeginningBalanceCostSaleTransactions } from './BeginningBalanceCostSaleTransactions';

/**
 * Request builder class for operations supported on the {@link BeginningBalanceCostSaleTransactions} entity.
 */
export class BeginningBalanceCostSaleTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BeginningBalanceCostSaleTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `BeginningBalanceCostSaleTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `BeginningBalanceCostSaleTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T> {
    return new GetAllRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BeginningBalanceCostSaleTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BeginningBalanceCostSaleTransactions`.
   */
  create(
    entity: BeginningBalanceCostSaleTransactions<T>
  ): CreateRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T> {
    return new CreateRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BeginningBalanceCostSaleTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BeginningBalanceCostSaleTransactions.dataAreaId}.
   * @param lineNumber Key property. See {@link BeginningBalanceCostSaleTransactions.lineNumber}.
   * @param journalId Key property. See {@link BeginningBalanceCostSaleTransactions.journalId}.
   * @returns A request builder for creating requests to retrieve one `BeginningBalanceCostSaleTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    journalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T> {
    return new GetByKeyRequestBuilder<
      BeginningBalanceCostSaleTransactions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LineNumber: lineNumber,
      JournalId: journalId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BeginningBalanceCostSaleTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BeginningBalanceCostSaleTransactions`.
   */
  update(
    entity: BeginningBalanceCostSaleTransactions<T>
  ): UpdateRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T> {
    return new UpdateRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BeginningBalanceCostSaleTransactions`.
   * @param dataAreaId Key property. See {@link BeginningBalanceCostSaleTransactions.dataAreaId}.
   * @param lineNumber Key property. See {@link BeginningBalanceCostSaleTransactions.lineNumber}.
   * @param journalId Key property. See {@link BeginningBalanceCostSaleTransactions.journalId}.
   * @returns A request builder for creating requests that delete an entity of type `BeginningBalanceCostSaleTransactions`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    journalId: string
  ): DeleteRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BeginningBalanceCostSaleTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BeginningBalanceCostSaleTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: BeginningBalanceCostSaleTransactions<T>
  ): DeleteRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    journalId?: string
  ): DeleteRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T> {
    return new DeleteRequestBuilder<BeginningBalanceCostSaleTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BeginningBalanceCostSaleTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            JournalId: journalId!
          }
    );
  }
}
