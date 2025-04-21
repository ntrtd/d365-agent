/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { BudgetPlansActivity } from './BudgetPlansActivity';
import { BudgetClass } from './BudgetClass';

/**
 * Request builder class for operations supported on the {@link BudgetPlansActivity} entity.
 */
export class BudgetPlansActivityRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlansActivity<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlansActivity` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlansActivity` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlansActivity<T>, T> {
    return new GetAllRequestBuilder<BudgetPlansActivity<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlansActivity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlansActivity`.
   */
  create(
    entity: BudgetPlansActivity<T>
  ): CreateRequestBuilder<BudgetPlansActivity<T>, T> {
    return new CreateRequestBuilder<BudgetPlansActivity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlansActivity` entity based on its keys.
   * @param budgetClass Key property. See {@link BudgetPlansActivity.budgetClass}.
   * @param mainAccountRecId Key property. See {@link BudgetPlansActivity.mainAccountRecId}.
   * @param ledgerDimension Key property. See {@link BudgetPlansActivity.ledgerDimension}.
   * @param effectiveDate Key property. See {@link BudgetPlansActivity.effectiveDate}.
   * @param scenario Key property. See {@link BudgetPlansActivity.scenario}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlansActivity` entity based on its keys.
   */
  getByKey(
    budgetClass: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetClass'
    >,
    mainAccountRecId: DeserializedType<T, 'Edm.Int64'>,
    ledgerDimension: DeserializedType<T, 'Edm.Int64'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    scenario: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlansActivity<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlansActivity<T>, T>(
      this.entityApi,
      {
        BudgetClass: budgetClass,
        MainAccountRecId: mainAccountRecId,
        LedgerDimension: ledgerDimension,
        EffectiveDate: effectiveDate,
        Scenario: scenario
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlansActivity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlansActivity`.
   */
  update(
    entity: BudgetPlansActivity<T>
  ): UpdateRequestBuilder<BudgetPlansActivity<T>, T> {
    return new UpdateRequestBuilder<BudgetPlansActivity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlansActivity`.
   * @param budgetClass Key property. See {@link BudgetPlansActivity.budgetClass}.
   * @param mainAccountRecId Key property. See {@link BudgetPlansActivity.mainAccountRecId}.
   * @param ledgerDimension Key property. See {@link BudgetPlansActivity.ledgerDimension}.
   * @param effectiveDate Key property. See {@link BudgetPlansActivity.effectiveDate}.
   * @param scenario Key property. See {@link BudgetPlansActivity.scenario}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlansActivity`.
   */
  delete(
    budgetClass: BudgetClass,
    mainAccountRecId: BigNumber,
    ledgerDimension: BigNumber,
    effectiveDate: Moment,
    scenario: string
  ): DeleteRequestBuilder<BudgetPlansActivity<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlansActivity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlansActivity` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlansActivity<T>
  ): DeleteRequestBuilder<BudgetPlansActivity<T>, T>;
  delete(
    budgetClassOrEntity: any,
    mainAccountRecId?: BigNumber,
    ledgerDimension?: BigNumber,
    effectiveDate?: Moment,
    scenario?: string
  ): DeleteRequestBuilder<BudgetPlansActivity<T>, T> {
    return new DeleteRequestBuilder<BudgetPlansActivity<T>, T>(
      this.entityApi,
      budgetClassOrEntity instanceof BudgetPlansActivity
        ? budgetClassOrEntity
        : {
            BudgetClass: budgetClassOrEntity!,
            MainAccountRecId: mainAccountRecId!,
            LedgerDimension: ledgerDimension!,
            EffectiveDate: effectiveDate!,
            Scenario: scenario!
          }
    );
  }
}
