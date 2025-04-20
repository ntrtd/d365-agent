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
import { BudgetTransactionHeaderBiEntities } from './BudgetTransactionHeaderBiEntities';

/**
 * Request builder class for operations supported on the {@link BudgetTransactionHeaderBiEntities} entity.
 */
export class BudgetTransactionHeaderBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetTransactionHeaderBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetTransactionHeaderBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetTransactionHeaderBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T> {
    return new GetAllRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetTransactionHeaderBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetTransactionHeaderBiEntities`.
   */
  create(
    entity: BudgetTransactionHeaderBiEntities<T>
  ): CreateRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T> {
    return new CreateRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetTransactionHeaderBiEntities` entity based on its keys.
   * @param transactionNumber Key property. See {@link BudgetTransactionHeaderBiEntities.transactionNumber}.
   * @param primaryLedger Key property. See {@link BudgetTransactionHeaderBiEntities.primaryLedger}.
   * @returns A request builder for creating requests to retrieve one `BudgetTransactionHeaderBiEntities` entity based on its keys.
   */
  getByKey(
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    primaryLedger: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T>(
      this.entityApi,
      {
        TransactionNumber: transactionNumber,
        PrimaryLedger: primaryLedger
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetTransactionHeaderBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetTransactionHeaderBiEntities`.
   */
  update(
    entity: BudgetTransactionHeaderBiEntities<T>
  ): UpdateRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T> {
    return new UpdateRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetTransactionHeaderBiEntities`.
   * @param transactionNumber Key property. See {@link BudgetTransactionHeaderBiEntities.transactionNumber}.
   * @param primaryLedger Key property. See {@link BudgetTransactionHeaderBiEntities.primaryLedger}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetTransactionHeaderBiEntities`.
   */
  delete(
    transactionNumber: string,
    primaryLedger: BigNumber
  ): DeleteRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetTransactionHeaderBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetTransactionHeaderBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetTransactionHeaderBiEntities<T>
  ): DeleteRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T>;
  delete(
    transactionNumberOrEntity: any,
    primaryLedger?: BigNumber
  ): DeleteRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T> {
    return new DeleteRequestBuilder<BudgetTransactionHeaderBiEntities<T>, T>(
      this.entityApi,
      transactionNumberOrEntity instanceof BudgetTransactionHeaderBiEntities
        ? transactionNumberOrEntity
        : {
            TransactionNumber: transactionNumberOrEntity!,
            PrimaryLedger: primaryLedger!
          }
    );
  }
}
