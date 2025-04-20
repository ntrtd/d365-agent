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
import { BankStmtIsoAccountStatementBiEntities } from './BankStmtIsoAccountStatementBiEntities';

/**
 * Request builder class for operations supported on the {@link BankStmtIsoAccountStatementBiEntities} entity.
 */
export class BankStmtIsoAccountStatementBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankStmtIsoAccountStatementBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BankStmtIsoAccountStatementBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BankStmtIsoAccountStatementBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BankStmtIsoAccountStatementBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      BankStmtIsoAccountStatementBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankStmtIsoAccountStatementBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankStmtIsoAccountStatementBiEntities`.
   */
  create(
    entity: BankStmtIsoAccountStatementBiEntities<T>
  ): CreateRequestBuilder<BankStmtIsoAccountStatementBiEntities<T>, T> {
    return new CreateRequestBuilder<
      BankStmtIsoAccountStatementBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BankStmtIsoAccountStatementBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankStmtIsoAccountStatementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link BankStmtIsoAccountStatementBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `BankStmtIsoAccountStatementBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BankStmtIsoAccountStatementBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      BankStmtIsoAccountStatementBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BankStmtIsoAccountStatementBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankStmtIsoAccountStatementBiEntities`.
   */
  update(
    entity: BankStmtIsoAccountStatementBiEntities<T>
  ): UpdateRequestBuilder<BankStmtIsoAccountStatementBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      BankStmtIsoAccountStatementBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BankStmtIsoAccountStatementBiEntities`.
   * @param dataAreaId Key property. See {@link BankStmtIsoAccountStatementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link BankStmtIsoAccountStatementBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `BankStmtIsoAccountStatementBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<BankStmtIsoAccountStatementBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankStmtIsoAccountStatementBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankStmtIsoAccountStatementBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BankStmtIsoAccountStatementBiEntities<T>
  ): DeleteRequestBuilder<BankStmtIsoAccountStatementBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<BankStmtIsoAccountStatementBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      BankStmtIsoAccountStatementBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankStmtIsoAccountStatementBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
