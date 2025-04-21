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
import { LedgerTransSettlementAccounts } from './LedgerTransSettlementAccounts';

/**
 * Request builder class for operations supported on the {@link LedgerTransSettlementAccounts} entity.
 */
export class LedgerTransSettlementAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerTransSettlementAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerTransSettlementAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerTransSettlementAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerTransSettlementAccounts<T>, T> {
    return new GetAllRequestBuilder<LedgerTransSettlementAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerTransSettlementAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerTransSettlementAccounts`.
   */
  create(
    entity: LedgerTransSettlementAccounts<T>
  ): CreateRequestBuilder<LedgerTransSettlementAccounts<T>, T> {
    return new CreateRequestBuilder<LedgerTransSettlementAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerTransSettlementAccounts` entity based on its keys.
   * @param mainAccountId Key property. See {@link LedgerTransSettlementAccounts.mainAccountId}.
   * @param chartOfAccounts Key property. See {@link LedgerTransSettlementAccounts.chartOfAccounts}.
   * @returns A request builder for creating requests to retrieve one `LedgerTransSettlementAccounts` entity based on its keys.
   */
  getByKey(
    mainAccountId: DeserializedType<T, 'Edm.String'>,
    chartOfAccounts: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerTransSettlementAccounts<T>, T> {
    return new GetByKeyRequestBuilder<LedgerTransSettlementAccounts<T>, T>(
      this.entityApi,
      {
        MainAccountId: mainAccountId,
        ChartOfAccounts: chartOfAccounts
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerTransSettlementAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerTransSettlementAccounts`.
   */
  update(
    entity: LedgerTransSettlementAccounts<T>
  ): UpdateRequestBuilder<LedgerTransSettlementAccounts<T>, T> {
    return new UpdateRequestBuilder<LedgerTransSettlementAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerTransSettlementAccounts`.
   * @param mainAccountId Key property. See {@link LedgerTransSettlementAccounts.mainAccountId}.
   * @param chartOfAccounts Key property. See {@link LedgerTransSettlementAccounts.chartOfAccounts}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransSettlementAccounts`.
   */
  delete(
    mainAccountId: string,
    chartOfAccounts: string
  ): DeleteRequestBuilder<LedgerTransSettlementAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerTransSettlementAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransSettlementAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerTransSettlementAccounts<T>
  ): DeleteRequestBuilder<LedgerTransSettlementAccounts<T>, T>;
  delete(
    mainAccountIdOrEntity: any,
    chartOfAccounts?: string
  ): DeleteRequestBuilder<LedgerTransSettlementAccounts<T>, T> {
    return new DeleteRequestBuilder<LedgerTransSettlementAccounts<T>, T>(
      this.entityApi,
      mainAccountIdOrEntity instanceof LedgerTransSettlementAccounts
        ? mainAccountIdOrEntity
        : {
            MainAccountId: mainAccountIdOrEntity!,
            ChartOfAccounts: chartOfAccounts!
          }
    );
  }
}
