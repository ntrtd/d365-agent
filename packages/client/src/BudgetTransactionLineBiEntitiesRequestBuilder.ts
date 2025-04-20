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
import { BudgetTransactionLineBiEntities } from './BudgetTransactionLineBiEntities';

/**
 * Request builder class for operations supported on the {@link BudgetTransactionLineBiEntities} entity.
 */
export class BudgetTransactionLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetTransactionLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetTransactionLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetTransactionLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetTransactionLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<BudgetTransactionLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetTransactionLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetTransactionLineBiEntities`.
   */
  create(
    entity: BudgetTransactionLineBiEntities<T>
  ): CreateRequestBuilder<BudgetTransactionLineBiEntities<T>, T> {
    return new CreateRequestBuilder<BudgetTransactionLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetTransactionLineBiEntities` entity based on its keys.
   * @param budgetTransactionHeader Key property. See {@link BudgetTransactionLineBiEntities.budgetTransactionHeader}.
   * @param lineNumber Key property. See {@link BudgetTransactionLineBiEntities.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `BudgetTransactionLineBiEntities` entity based on its keys.
   */
  getByKey(
    budgetTransactionHeader: DeserializedType<T, 'Edm.Int64'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BudgetTransactionLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<BudgetTransactionLineBiEntities<T>, T>(
      this.entityApi,
      {
        BudgetTransactionHeader: budgetTransactionHeader,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetTransactionLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetTransactionLineBiEntities`.
   */
  update(
    entity: BudgetTransactionLineBiEntities<T>
  ): UpdateRequestBuilder<BudgetTransactionLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<BudgetTransactionLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetTransactionLineBiEntities`.
   * @param budgetTransactionHeader Key property. See {@link BudgetTransactionLineBiEntities.budgetTransactionHeader}.
   * @param lineNumber Key property. See {@link BudgetTransactionLineBiEntities.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetTransactionLineBiEntities`.
   */
  delete(
    budgetTransactionHeader: BigNumber,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<BudgetTransactionLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetTransactionLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetTransactionLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetTransactionLineBiEntities<T>
  ): DeleteRequestBuilder<BudgetTransactionLineBiEntities<T>, T>;
  delete(
    budgetTransactionHeaderOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<BudgetTransactionLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<BudgetTransactionLineBiEntities<T>, T>(
      this.entityApi,
      budgetTransactionHeaderOrEntity instanceof BudgetTransactionLineBiEntities
        ? budgetTransactionHeaderOrEntity
        : {
            BudgetTransactionHeader: budgetTransactionHeaderOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
