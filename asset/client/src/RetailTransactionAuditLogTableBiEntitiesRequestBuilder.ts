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
import { RetailTransactionAuditLogTableBiEntities } from './RetailTransactionAuditLogTableBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditLogTableBiEntities} entity.
 */
export class RetailTransactionAuditLogTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditLogTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditLogTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditLogTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionAuditLogTableBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionAuditLogTableBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditLogTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditLogTableBiEntities`.
   */
  create(
    entity: RetailTransactionAuditLogTableBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionAuditLogTableBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAuditLogTableBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditLogTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditLogTableBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailTransactionAuditLogTableBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditLogTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailTransactionAuditLogTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionAuditLogTableBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAuditLogTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditLogTableBiEntities`.
   */
  update(
    entity: RetailTransactionAuditLogTableBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionAuditLogTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAuditLogTableBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditLogTableBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditLogTableBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailTransactionAuditLogTableBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditLogTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditLogTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditLogTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditLogTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditLogTableBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionAuditLogTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditLogTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAuditLogTableBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditLogTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
