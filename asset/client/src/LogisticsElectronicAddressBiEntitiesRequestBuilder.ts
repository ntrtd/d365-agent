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
import { LogisticsElectronicAddressBiEntities } from './LogisticsElectronicAddressBiEntities';

/**
 * Request builder class for operations supported on the {@link LogisticsElectronicAddressBiEntities} entity.
 */
export class LogisticsElectronicAddressBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LogisticsElectronicAddressBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LogisticsElectronicAddressBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LogisticsElectronicAddressBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T> {
    return new GetAllRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LogisticsElectronicAddressBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LogisticsElectronicAddressBiEntities`.
   */
  create(
    entity: LogisticsElectronicAddressBiEntities<T>
  ): CreateRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T> {
    return new CreateRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LogisticsElectronicAddressBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link LogisticsElectronicAddressBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `LogisticsElectronicAddressBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      LogisticsElectronicAddressBiEntities<T>,
      T
    >(this.entityApi, { SourceKey: sourceKey });
  }

  /**
   * Returns a request builder for updating an entity of type `LogisticsElectronicAddressBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LogisticsElectronicAddressBiEntities`.
   */
  update(
    entity: LogisticsElectronicAddressBiEntities<T>
  ): UpdateRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T> {
    return new UpdateRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LogisticsElectronicAddressBiEntities`.
   * @param sourceKey Key property. See {@link LogisticsElectronicAddressBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `LogisticsElectronicAddressBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LogisticsElectronicAddressBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LogisticsElectronicAddressBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LogisticsElectronicAddressBiEntities<T>
  ): DeleteRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T> {
    return new DeleteRequestBuilder<LogisticsElectronicAddressBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof LogisticsElectronicAddressBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
