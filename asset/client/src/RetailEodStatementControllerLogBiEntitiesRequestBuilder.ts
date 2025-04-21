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
import { RetailEodStatementControllerLogBiEntities } from './RetailEodStatementControllerLogBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodStatementControllerLogBiEntities} entity.
 */
export class RetailEodStatementControllerLogBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEodStatementControllerLogBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEodStatementControllerLogBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodStatementControllerLogBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodStatementControllerLogBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodStatementControllerLogBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodStatementControllerLogBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodStatementControllerLogBiEntities`.
   */
  create(
    entity: RetailEodStatementControllerLogBiEntities<T>
  ): CreateRequestBuilder<RetailEodStatementControllerLogBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailEodStatementControllerLogBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodStatementControllerLogBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodStatementControllerLogBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailEodStatementControllerLogBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `RetailEodStatementControllerLogBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailEodStatementControllerLogBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailEodStatementControllerLogBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodStatementControllerLogBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodStatementControllerLogBiEntities`.
   */
  update(
    entity: RetailEodStatementControllerLogBiEntities<T>
  ): UpdateRequestBuilder<RetailEodStatementControllerLogBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailEodStatementControllerLogBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodStatementControllerLogBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodStatementControllerLogBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailEodStatementControllerLogBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodStatementControllerLogBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<RetailEodStatementControllerLogBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodStatementControllerLogBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodStatementControllerLogBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodStatementControllerLogBiEntities<T>
  ): DeleteRequestBuilder<RetailEodStatementControllerLogBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<RetailEodStatementControllerLogBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailEodStatementControllerLogBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailEodStatementControllerLogBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
