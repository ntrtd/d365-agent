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
import { BudgetActivities } from './BudgetActivities';
import { BudgetTransactionType } from './BudgetTransactionType';

/**
 * Request builder class for operations supported on the {@link BudgetActivities} entity.
 */
export class BudgetActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetActivities<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetActivities` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetActivities` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetActivities<T>, T> {
    return new GetAllRequestBuilder<BudgetActivities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetActivities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetActivities`.
   */
  create(
    entity: BudgetActivities<T>
  ): CreateRequestBuilder<BudgetActivities<T>, T> {
    return new CreateRequestBuilder<BudgetActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetActivities` entity based on its keys.
   * @param budgetTransactionType Key property. See {@link BudgetActivities.budgetTransactionType}.
   * @param budgetCodeName Key property. See {@link BudgetActivities.budgetCodeName}.
   * @param modelId Key property. See {@link BudgetActivities.modelId}.
   * @param ledgerGregorianDateId Key property. See {@link BudgetActivities.ledgerGregorianDateId}.
   * @param mainAccountRecId Key property. See {@link BudgetActivities.mainAccountRecId}.
   * @param ledgerRecId Key property. See {@link BudgetActivities.ledgerRecId}.
   * @param ledgerDimension Key property. See {@link BudgetActivities.ledgerDimension}.
   * @returns A request builder for creating requests to retrieve one `BudgetActivities` entity based on its keys.
   */
  getByKey(
    budgetTransactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetTransactionType'
    >,
    budgetCodeName: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    ledgerGregorianDateId: DeserializedType<T, 'Edm.String'>,
    mainAccountRecId: DeserializedType<T, 'Edm.Int64'>,
    ledgerRecId: DeserializedType<T, 'Edm.Int64'>,
    ledgerDimension: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BudgetActivities<T>, T> {
    return new GetByKeyRequestBuilder<BudgetActivities<T>, T>(this.entityApi, {
      BudgetTransactionType: budgetTransactionType,
      BudgetCodeName: budgetCodeName,
      ModelId: modelId,
      LedgerGregorianDateId: ledgerGregorianDateId,
      MainAccountRecId: mainAccountRecId,
      LedgerRecId: ledgerRecId,
      LedgerDimension: ledgerDimension
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetActivities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetActivities`.
   */
  update(
    entity: BudgetActivities<T>
  ): UpdateRequestBuilder<BudgetActivities<T>, T> {
    return new UpdateRequestBuilder<BudgetActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetActivities`.
   * @param budgetTransactionType Key property. See {@link BudgetActivities.budgetTransactionType}.
   * @param budgetCodeName Key property. See {@link BudgetActivities.budgetCodeName}.
   * @param modelId Key property. See {@link BudgetActivities.modelId}.
   * @param ledgerGregorianDateId Key property. See {@link BudgetActivities.ledgerGregorianDateId}.
   * @param mainAccountRecId Key property. See {@link BudgetActivities.mainAccountRecId}.
   * @param ledgerRecId Key property. See {@link BudgetActivities.ledgerRecId}.
   * @param ledgerDimension Key property. See {@link BudgetActivities.ledgerDimension}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetActivities`.
   */
  delete(
    budgetTransactionType: BudgetTransactionType,
    budgetCodeName: string,
    modelId: string,
    ledgerGregorianDateId: string,
    mainAccountRecId: BigNumber,
    ledgerRecId: BigNumber,
    ledgerDimension: BigNumber
  ): DeleteRequestBuilder<BudgetActivities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetActivities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetActivities` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetActivities<T>
  ): DeleteRequestBuilder<BudgetActivities<T>, T>;
  delete(
    budgetTransactionTypeOrEntity: any,
    budgetCodeName?: string,
    modelId?: string,
    ledgerGregorianDateId?: string,
    mainAccountRecId?: BigNumber,
    ledgerRecId?: BigNumber,
    ledgerDimension?: BigNumber
  ): DeleteRequestBuilder<BudgetActivities<T>, T> {
    return new DeleteRequestBuilder<BudgetActivities<T>, T>(
      this.entityApi,
      budgetTransactionTypeOrEntity instanceof BudgetActivities
        ? budgetTransactionTypeOrEntity
        : {
            BudgetTransactionType: budgetTransactionTypeOrEntity!,
            BudgetCodeName: budgetCodeName!,
            ModelId: modelId!,
            LedgerGregorianDateId: ledgerGregorianDateId!,
            MainAccountRecId: mainAccountRecId!,
            LedgerRecId: ledgerRecId!,
            LedgerDimension: ledgerDimension!
          }
    );
  }
}
