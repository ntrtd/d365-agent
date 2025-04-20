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
import { MainAccountBiEntities } from './MainAccountBiEntities';

/**
 * Request builder class for operations supported on the {@link MainAccountBiEntities} entity.
 */
export class MainAccountBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MainAccountBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `MainAccountBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `MainAccountBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<MainAccountBiEntities<T>, T> {
    return new GetAllRequestBuilder<MainAccountBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MainAccountBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MainAccountBiEntities`.
   */
  create(
    entity: MainAccountBiEntities<T>
  ): CreateRequestBuilder<MainAccountBiEntities<T>, T> {
    return new CreateRequestBuilder<MainAccountBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MainAccountBiEntities` entity based on its keys.
   * @param mainAccountId Key property. See {@link MainAccountBiEntities.mainAccountId}.
   * @param ledgerChartOfAccounts Key property. See {@link MainAccountBiEntities.ledgerChartOfAccounts}.
   * @returns A request builder for creating requests to retrieve one `MainAccountBiEntities` entity based on its keys.
   */
  getByKey(
    mainAccountId: DeserializedType<T, 'Edm.String'>,
    ledgerChartOfAccounts: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<MainAccountBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<MainAccountBiEntities<T>, T>(
      this.entityApi,
      {
        MainAccountId: mainAccountId,
        LedgerChartOfAccounts: ledgerChartOfAccounts
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MainAccountBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MainAccountBiEntities`.
   */
  update(
    entity: MainAccountBiEntities<T>
  ): UpdateRequestBuilder<MainAccountBiEntities<T>, T> {
    return new UpdateRequestBuilder<MainAccountBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MainAccountBiEntities`.
   * @param mainAccountId Key property. See {@link MainAccountBiEntities.mainAccountId}.
   * @param ledgerChartOfAccounts Key property. See {@link MainAccountBiEntities.ledgerChartOfAccounts}.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountBiEntities`.
   */
  delete(
    mainAccountId: string,
    ledgerChartOfAccounts: BigNumber
  ): DeleteRequestBuilder<MainAccountBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MainAccountBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: MainAccountBiEntities<T>
  ): DeleteRequestBuilder<MainAccountBiEntities<T>, T>;
  delete(
    mainAccountIdOrEntity: any,
    ledgerChartOfAccounts?: BigNumber
  ): DeleteRequestBuilder<MainAccountBiEntities<T>, T> {
    return new DeleteRequestBuilder<MainAccountBiEntities<T>, T>(
      this.entityApi,
      mainAccountIdOrEntity instanceof MainAccountBiEntities
        ? mainAccountIdOrEntity
        : {
            MainAccountId: mainAccountIdOrEntity!,
            LedgerChartOfAccounts: ledgerChartOfAccounts!
          }
    );
  }
}
