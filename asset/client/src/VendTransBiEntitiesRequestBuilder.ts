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
import { VendTransBiEntities } from './VendTransBiEntities';

/**
 * Request builder class for operations supported on the {@link VendTransBiEntities} entity.
 */
export class VendTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendTransBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendTransBiEntities`.
   */
  create(
    entity: VendTransBiEntities<T>
  ): CreateRequestBuilder<VendTransBiEntities<T>, T> {
    return new CreateRequestBuilder<VendTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link VendTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `VendTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendTransBiEntities`.
   */
  update(
    entity: VendTransBiEntities<T>
  ): UpdateRequestBuilder<VendTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendTransBiEntities`.
   * @param dataAreaId Key property. See {@link VendTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link VendTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `VendTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<VendTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendTransBiEntities<T>
  ): DeleteRequestBuilder<VendTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<VendTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
