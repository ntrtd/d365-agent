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
import { BankStmtIsoCashBalanceBiEntities } from './BankStmtIsoCashBalanceBiEntities';

/**
 * Request builder class for operations supported on the {@link BankStmtIsoCashBalanceBiEntities} entity.
 */
export class BankStmtIsoCashBalanceBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BankStmtIsoCashBalanceBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BankStmtIsoCashBalanceBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T> {
    return new GetAllRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankStmtIsoCashBalanceBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankStmtIsoCashBalanceBiEntities`.
   */
  create(
    entity: BankStmtIsoCashBalanceBiEntities<T>
  ): CreateRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T> {
    return new CreateRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankStmtIsoCashBalanceBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankStmtIsoCashBalanceBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link BankStmtIsoCashBalanceBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `BankStmtIsoCashBalanceBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankStmtIsoCashBalanceBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankStmtIsoCashBalanceBiEntities`.
   */
  update(
    entity: BankStmtIsoCashBalanceBiEntities<T>
  ): UpdateRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T> {
    return new UpdateRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankStmtIsoCashBalanceBiEntities`.
   * @param dataAreaId Key property. See {@link BankStmtIsoCashBalanceBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link BankStmtIsoCashBalanceBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `BankStmtIsoCashBalanceBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankStmtIsoCashBalanceBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankStmtIsoCashBalanceBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BankStmtIsoCashBalanceBiEntities<T>
  ): DeleteRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T> {
    return new DeleteRequestBuilder<BankStmtIsoCashBalanceBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankStmtIsoCashBalanceBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
