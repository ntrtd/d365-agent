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
import { BankAccountStatementBiEntities } from './BankAccountStatementBiEntities';

/**
 * Request builder class for operations supported on the {@link BankAccountStatementBiEntities} entity.
 */
export class BankAccountStatementBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankAccountStatementBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BankAccountStatementBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BankAccountStatementBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BankAccountStatementBiEntities<T>, T> {
    return new GetAllRequestBuilder<BankAccountStatementBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankAccountStatementBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankAccountStatementBiEntities`.
   */
  create(
    entity: BankAccountStatementBiEntities<T>
  ): CreateRequestBuilder<BankAccountStatementBiEntities<T>, T> {
    return new CreateRequestBuilder<BankAccountStatementBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankAccountStatementBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankAccountStatementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link BankAccountStatementBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `BankAccountStatementBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BankAccountStatementBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<BankAccountStatementBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankAccountStatementBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankAccountStatementBiEntities`.
   */
  update(
    entity: BankAccountStatementBiEntities<T>
  ): UpdateRequestBuilder<BankAccountStatementBiEntities<T>, T> {
    return new UpdateRequestBuilder<BankAccountStatementBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankAccountStatementBiEntities`.
   * @param dataAreaId Key property. See {@link BankAccountStatementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link BankAccountStatementBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountStatementBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<BankAccountStatementBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankAccountStatementBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountStatementBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BankAccountStatementBiEntities<T>
  ): DeleteRequestBuilder<BankAccountStatementBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<BankAccountStatementBiEntities<T>, T> {
    return new DeleteRequestBuilder<BankAccountStatementBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankAccountStatementBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
