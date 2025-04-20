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
import { TransactionPostingDefinitionGeneralLedgers } from './TransactionPostingDefinitionGeneralLedgers';
import { LedgerOpenCloseTransType } from './LedgerOpenCloseTransType';
import { FundClassValueAll } from './FundClassValueAll';

/**
 * Request builder class for operations supported on the {@link TransactionPostingDefinitionGeneralLedgers} entity.
 */
export class TransactionPostingDefinitionGeneralLedgersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionPostingDefinitionGeneralLedgers<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionPostingDefinitionGeneralLedgers` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionPostingDefinitionGeneralLedgers` entities.
   */
  getAll(): GetAllRequestBuilder<
    TransactionPostingDefinitionGeneralLedgers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TransactionPostingDefinitionGeneralLedgers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransactionPostingDefinitionGeneralLedgers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionPostingDefinitionGeneralLedgers`.
   */
  create(
    entity: TransactionPostingDefinitionGeneralLedgers<T>
  ): CreateRequestBuilder<TransactionPostingDefinitionGeneralLedgers<T>, T> {
    return new CreateRequestBuilder<
      TransactionPostingDefinitionGeneralLedgers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TransactionPostingDefinitionGeneralLedgers` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionGeneralLedgers.dataAreaId}.
   * @param ledgerTransactionType Key property. See {@link TransactionPostingDefinitionGeneralLedgers.ledgerTransactionType}.
   * @param fundClass Key property. See {@link TransactionPostingDefinitionGeneralLedgers.fundClass}.
   * @returns A request builder for creating requests to retrieve one `TransactionPostingDefinitionGeneralLedgers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ledgerTransactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerOpenCloseTransType'
    >,
    fundClass: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.FundClassValueAll'
    >
  ): GetByKeyRequestBuilder<TransactionPostingDefinitionGeneralLedgers<T>, T> {
    return new GetByKeyRequestBuilder<
      TransactionPostingDefinitionGeneralLedgers<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LedgerTransactionType: ledgerTransactionType,
      FundClass: fundClass
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionPostingDefinitionGeneralLedgers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionPostingDefinitionGeneralLedgers`.
   */
  update(
    entity: TransactionPostingDefinitionGeneralLedgers<T>
  ): UpdateRequestBuilder<TransactionPostingDefinitionGeneralLedgers<T>, T> {
    return new UpdateRequestBuilder<
      TransactionPostingDefinitionGeneralLedgers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionGeneralLedgers`.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionGeneralLedgers.dataAreaId}.
   * @param ledgerTransactionType Key property. See {@link TransactionPostingDefinitionGeneralLedgers.ledgerTransactionType}.
   * @param fundClass Key property. See {@link TransactionPostingDefinitionGeneralLedgers.fundClass}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionGeneralLedgers`.
   */
  delete(
    dataAreaId: string,
    ledgerTransactionType: LedgerOpenCloseTransType,
    fundClass: FundClassValueAll
  ): DeleteRequestBuilder<TransactionPostingDefinitionGeneralLedgers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionGeneralLedgers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionGeneralLedgers` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionPostingDefinitionGeneralLedgers<T>
  ): DeleteRequestBuilder<TransactionPostingDefinitionGeneralLedgers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ledgerTransactionType?: LedgerOpenCloseTransType,
    fundClass?: FundClassValueAll
  ): DeleteRequestBuilder<TransactionPostingDefinitionGeneralLedgers<T>, T> {
    return new DeleteRequestBuilder<
      TransactionPostingDefinitionGeneralLedgers<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionPostingDefinitionGeneralLedgers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LedgerTransactionType: ledgerTransactionType!,
            FundClass: fundClass!
          }
    );
  }
}
