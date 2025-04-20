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
import { RetailEodStatementEventLogBiEntities } from './RetailEodStatementEventLogBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodStatementEventLogBiEntities} entity.
 */
export class RetailEodStatementEventLogBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEodStatementEventLogBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEodStatementEventLogBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodStatementEventLogBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailEodStatementEventLogBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodStatementEventLogBiEntities`.
   */
  create(
    entity: RetailEodStatementEventLogBiEntities<T>
  ): CreateRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEodStatementEventLogBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodStatementEventLogBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailEodStatementEventLogBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `RetailEodStatementEventLogBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailEodStatementEventLogBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodStatementEventLogBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodStatementEventLogBiEntities`.
   */
  update(
    entity: RetailEodStatementEventLogBiEntities<T>
  ): UpdateRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodStatementEventLogBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodStatementEventLogBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailEodStatementEventLogBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodStatementEventLogBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodStatementEventLogBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodStatementEventLogBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodStatementEventLogBiEntities<T>
  ): DeleteRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailEodStatementEventLogBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailEodStatementEventLogBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
