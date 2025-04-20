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
import { LiquidityDependencies } from './LiquidityDependencies';
import { TransBudget } from './TransBudget';
import { LedgerPostingType } from './LedgerPostingType';

/**
 * Request builder class for operations supported on the {@link LiquidityDependencies} entity.
 */
export class LiquidityDependenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LiquidityDependencies<T>, T> {
  /**
   * Returns a request builder for querying all `LiquidityDependencies` entities.
   * @returns A request builder for creating requests to retrieve all `LiquidityDependencies` entities.
   */
  getAll(): GetAllRequestBuilder<LiquidityDependencies<T>, T> {
    return new GetAllRequestBuilder<LiquidityDependencies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LiquidityDependencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LiquidityDependencies`.
   */
  create(
    entity: LiquidityDependencies<T>
  ): CreateRequestBuilder<LiquidityDependencies<T>, T> {
    return new CreateRequestBuilder<LiquidityDependencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LiquidityDependencies` entity based on its keys.
   * @param chartOfAccountsName Key property. See {@link LiquidityDependencies.chartOfAccountsName}.
   * @param transactionOrBudget Key property. See {@link LiquidityDependencies.transactionOrBudget}.
   * @param fromMainAccountId Key property. See {@link LiquidityDependencies.fromMainAccountId}.
   * @param toMainAccountId Key property. See {@link LiquidityDependencies.toMainAccountId}.
   * @param termsOfPayment Key property. See {@link LiquidityDependencies.termsOfPayment}.
   * @param postingType Key property. See {@link LiquidityDependencies.postingType}.
   * @returns A request builder for creating requests to retrieve one `LiquidityDependencies` entity based on its keys.
   */
  getByKey(
    chartOfAccountsName: DeserializedType<T, 'Edm.String'>,
    transactionOrBudget: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TransBudget'
    >,
    fromMainAccountId: DeserializedType<T, 'Edm.String'>,
    toMainAccountId: DeserializedType<T, 'Edm.String'>,
    termsOfPayment: DeserializedType<T, 'Edm.String'>,
    postingType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerPostingType'
    >
  ): GetByKeyRequestBuilder<LiquidityDependencies<T>, T> {
    return new GetByKeyRequestBuilder<LiquidityDependencies<T>, T>(
      this.entityApi,
      {
        ChartOfAccountsName: chartOfAccountsName,
        TransactionOrBudget: transactionOrBudget,
        FromMainAccountId: fromMainAccountId,
        ToMainAccountId: toMainAccountId,
        TermsOfPayment: termsOfPayment,
        PostingType: postingType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LiquidityDependencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LiquidityDependencies`.
   */
  update(
    entity: LiquidityDependencies<T>
  ): UpdateRequestBuilder<LiquidityDependencies<T>, T> {
    return new UpdateRequestBuilder<LiquidityDependencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LiquidityDependencies`.
   * @param chartOfAccountsName Key property. See {@link LiquidityDependencies.chartOfAccountsName}.
   * @param transactionOrBudget Key property. See {@link LiquidityDependencies.transactionOrBudget}.
   * @param fromMainAccountId Key property. See {@link LiquidityDependencies.fromMainAccountId}.
   * @param toMainAccountId Key property. See {@link LiquidityDependencies.toMainAccountId}.
   * @param termsOfPayment Key property. See {@link LiquidityDependencies.termsOfPayment}.
   * @param postingType Key property. See {@link LiquidityDependencies.postingType}.
   * @returns A request builder for creating requests that delete an entity of type `LiquidityDependencies`.
   */
  delete(
    chartOfAccountsName: string,
    transactionOrBudget: TransBudget,
    fromMainAccountId: string,
    toMainAccountId: string,
    termsOfPayment: string,
    postingType: LedgerPostingType
  ): DeleteRequestBuilder<LiquidityDependencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LiquidityDependencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LiquidityDependencies` by taking the entity as a parameter.
   */
  delete(
    entity: LiquidityDependencies<T>
  ): DeleteRequestBuilder<LiquidityDependencies<T>, T>;
  delete(
    chartOfAccountsNameOrEntity: any,
    transactionOrBudget?: TransBudget,
    fromMainAccountId?: string,
    toMainAccountId?: string,
    termsOfPayment?: string,
    postingType?: LedgerPostingType
  ): DeleteRequestBuilder<LiquidityDependencies<T>, T> {
    return new DeleteRequestBuilder<LiquidityDependencies<T>, T>(
      this.entityApi,
      chartOfAccountsNameOrEntity instanceof LiquidityDependencies
        ? chartOfAccountsNameOrEntity
        : {
            ChartOfAccountsName: chartOfAccountsNameOrEntity!,
            TransactionOrBudget: transactionOrBudget!,
            FromMainAccountId: fromMainAccountId!,
            ToMainAccountId: toMainAccountId!,
            TermsOfPayment: termsOfPayment!,
            PostingType: postingType!
          }
    );
  }
}
