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
import { VendSettlementBiEntities } from './VendSettlementBiEntities';

/**
 * Request builder class for operations supported on the {@link VendSettlementBiEntities} entity.
 */
export class VendSettlementBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendSettlementBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendSettlementBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendSettlementBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendSettlementBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendSettlementBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendSettlementBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendSettlementBiEntities`.
   */
  create(
    entity: VendSettlementBiEntities<T>
  ): CreateRequestBuilder<VendSettlementBiEntities<T>, T> {
    return new CreateRequestBuilder<VendSettlementBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendSettlementBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendSettlementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link VendSettlementBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `VendSettlementBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendSettlementBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendSettlementBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendSettlementBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendSettlementBiEntities`.
   */
  update(
    entity: VendSettlementBiEntities<T>
  ): UpdateRequestBuilder<VendSettlementBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendSettlementBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendSettlementBiEntities`.
   * @param dataAreaId Key property. See {@link VendSettlementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link VendSettlementBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `VendSettlementBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<VendSettlementBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendSettlementBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendSettlementBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendSettlementBiEntities<T>
  ): DeleteRequestBuilder<VendSettlementBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<VendSettlementBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendSettlementBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendSettlementBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
