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
import { CustSettlementBiEntities } from './CustSettlementBiEntities';

/**
 * Request builder class for operations supported on the {@link CustSettlementBiEntities} entity.
 */
export class CustSettlementBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustSettlementBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustSettlementBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustSettlementBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustSettlementBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustSettlementBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustSettlementBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustSettlementBiEntities`.
   */
  create(
    entity: CustSettlementBiEntities<T>
  ): CreateRequestBuilder<CustSettlementBiEntities<T>, T> {
    return new CreateRequestBuilder<CustSettlementBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustSettlementBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustSettlementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link CustSettlementBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `CustSettlementBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CustSettlementBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustSettlementBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustSettlementBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustSettlementBiEntities`.
   */
  update(
    entity: CustSettlementBiEntities<T>
  ): UpdateRequestBuilder<CustSettlementBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustSettlementBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustSettlementBiEntities`.
   * @param dataAreaId Key property. See {@link CustSettlementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link CustSettlementBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `CustSettlementBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<CustSettlementBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustSettlementBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustSettlementBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustSettlementBiEntities<T>
  ): DeleteRequestBuilder<CustSettlementBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<CustSettlementBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustSettlementBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustSettlementBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
