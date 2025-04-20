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
import { McrSalesLineBiEntities } from './McrSalesLineBiEntities';

/**
 * Request builder class for operations supported on the {@link McrSalesLineBiEntities} entity.
 */
export class McrSalesLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<McrSalesLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `McrSalesLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `McrSalesLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<McrSalesLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<McrSalesLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `McrSalesLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `McrSalesLineBiEntities`.
   */
  create(
    entity: McrSalesLineBiEntities<T>
  ): CreateRequestBuilder<McrSalesLineBiEntities<T>, T> {
    return new CreateRequestBuilder<McrSalesLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `McrSalesLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link McrSalesLineBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link McrSalesLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `McrSalesLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<McrSalesLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<McrSalesLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `McrSalesLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `McrSalesLineBiEntities`.
   */
  update(
    entity: McrSalesLineBiEntities<T>
  ): UpdateRequestBuilder<McrSalesLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<McrSalesLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `McrSalesLineBiEntities`.
   * @param dataAreaId Key property. See {@link McrSalesLineBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link McrSalesLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `McrSalesLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<McrSalesLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `McrSalesLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `McrSalesLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: McrSalesLineBiEntities<T>
  ): DeleteRequestBuilder<McrSalesLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<McrSalesLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<McrSalesLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof McrSalesLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
