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
import { SubledgerJournalAccountEntryDistributionBiEntities } from './SubledgerJournalAccountEntryDistributionBiEntities';

/**
 * Request builder class for operations supported on the {@link SubledgerJournalAccountEntryDistributionBiEntities} entity.
 */
export class SubledgerJournalAccountEntryDistributionBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  SubledgerJournalAccountEntryDistributionBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `SubledgerJournalAccountEntryDistributionBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SubledgerJournalAccountEntryDistributionBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    SubledgerJournalAccountEntryDistributionBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SubledgerJournalAccountEntryDistributionBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubledgerJournalAccountEntryDistributionBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubledgerJournalAccountEntryDistributionBiEntities`.
   */
  create(
    entity: SubledgerJournalAccountEntryDistributionBiEntities<T>
  ): CreateRequestBuilder<
    SubledgerJournalAccountEntryDistributionBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      SubledgerJournalAccountEntryDistributionBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubledgerJournalAccountEntryDistributionBiEntities` entity based on its keys.
   * @param accountingDistribution Key property. See {@link SubledgerJournalAccountEntryDistributionBiEntities.accountingDistribution}.
   * @param subledgerJournalAccountEntry Key property. See {@link SubledgerJournalAccountEntryDistributionBiEntities.subledgerJournalAccountEntry}.
   * @returns A request builder for creating requests to retrieve one `SubledgerJournalAccountEntryDistributionBiEntities` entity based on its keys.
   */
  getByKey(
    accountingDistribution: DeserializedType<T, 'Edm.Int64'>,
    subledgerJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    SubledgerJournalAccountEntryDistributionBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      SubledgerJournalAccountEntryDistributionBiEntities<T>,
      T
    >(this.entityApi, {
      AccountingDistribution: accountingDistribution,
      SubledgerJournalAccountEntry: subledgerJournalAccountEntry
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubledgerJournalAccountEntryDistributionBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubledgerJournalAccountEntryDistributionBiEntities`.
   */
  update(
    entity: SubledgerJournalAccountEntryDistributionBiEntities<T>
  ): UpdateRequestBuilder<
    SubledgerJournalAccountEntryDistributionBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      SubledgerJournalAccountEntryDistributionBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubledgerJournalAccountEntryDistributionBiEntities`.
   * @param accountingDistribution Key property. See {@link SubledgerJournalAccountEntryDistributionBiEntities.accountingDistribution}.
   * @param subledgerJournalAccountEntry Key property. See {@link SubledgerJournalAccountEntryDistributionBiEntities.subledgerJournalAccountEntry}.
   * @returns A request builder for creating requests that delete an entity of type `SubledgerJournalAccountEntryDistributionBiEntities`.
   */
  delete(
    accountingDistribution: BigNumber,
    subledgerJournalAccountEntry: BigNumber
  ): DeleteRequestBuilder<
    SubledgerJournalAccountEntryDistributionBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `SubledgerJournalAccountEntryDistributionBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubledgerJournalAccountEntryDistributionBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SubledgerJournalAccountEntryDistributionBiEntities<T>
  ): DeleteRequestBuilder<
    SubledgerJournalAccountEntryDistributionBiEntities<T>,
    T
  >;
  delete(
    accountingDistributionOrEntity: any,
    subledgerJournalAccountEntry?: BigNumber
  ): DeleteRequestBuilder<
    SubledgerJournalAccountEntryDistributionBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      SubledgerJournalAccountEntryDistributionBiEntities<T>,
      T
    >(
      this.entityApi,
      accountingDistributionOrEntity instanceof
      SubledgerJournalAccountEntryDistributionBiEntities
        ? accountingDistributionOrEntity
        : {
            AccountingDistribution: accountingDistributionOrEntity!,
            SubledgerJournalAccountEntry: subledgerJournalAccountEntry!
          }
    );
  }
}
