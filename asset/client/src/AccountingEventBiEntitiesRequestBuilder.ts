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
import { AccountingEventBiEntities } from './AccountingEventBiEntities';

/**
 * Request builder class for operations supported on the {@link AccountingEventBiEntities} entity.
 */
export class AccountingEventBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccountingEventBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AccountingEventBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AccountingEventBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AccountingEventBiEntities<T>, T> {
    return new GetAllRequestBuilder<AccountingEventBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AccountingEventBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountingEventBiEntities`.
   */
  create(
    entity: AccountingEventBiEntities<T>
  ): CreateRequestBuilder<AccountingEventBiEntities<T>, T> {
    return new CreateRequestBuilder<AccountingEventBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccountingEventBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link AccountingEventBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `AccountingEventBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AccountingEventBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AccountingEventBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccountingEventBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountingEventBiEntities`.
   */
  update(
    entity: AccountingEventBiEntities<T>
  ): UpdateRequestBuilder<AccountingEventBiEntities<T>, T> {
    return new UpdateRequestBuilder<AccountingEventBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountingEventBiEntities`.
   * @param sourceKey Key property. See {@link AccountingEventBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `AccountingEventBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<AccountingEventBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccountingEventBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountingEventBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AccountingEventBiEntities<T>
  ): DeleteRequestBuilder<AccountingEventBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<AccountingEventBiEntities<T>, T> {
    return new DeleteRequestBuilder<AccountingEventBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof AccountingEventBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
