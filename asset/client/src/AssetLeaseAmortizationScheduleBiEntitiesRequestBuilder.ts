/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { AssetLeaseAmortizationScheduleBiEntities } from './AssetLeaseAmortizationScheduleBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseAmortizationScheduleBiEntities} entity.
 */
export class AssetLeaseAmortizationScheduleBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseAmortizationScheduleBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseAmortizationScheduleBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseAmortizationScheduleBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetLeaseAmortizationScheduleBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetLeaseAmortizationScheduleBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseAmortizationScheduleBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseAmortizationScheduleBiEntities`.
   */
  create(
    entity: AssetLeaseAmortizationScheduleBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseAmortizationScheduleBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetLeaseAmortizationScheduleBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseAmortizationScheduleBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseAmortizationScheduleBiEntities.dataAreaId}.
   * @param leaseId Key property. See {@link AssetLeaseAmortizationScheduleBiEntities.leaseId}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseAmortizationScheduleBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeaseAmortizationScheduleBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetLeaseAmortizationScheduleBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LeaseId: leaseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseAmortizationScheduleBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseAmortizationScheduleBiEntities`.
   */
  update(
    entity: AssetLeaseAmortizationScheduleBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseAmortizationScheduleBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetLeaseAmortizationScheduleBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseAmortizationScheduleBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseAmortizationScheduleBiEntities.dataAreaId}.
   * @param leaseId Key property. See {@link AssetLeaseAmortizationScheduleBiEntities.leaseId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseAmortizationScheduleBiEntities`.
   */
  delete(
    dataAreaId: string,
    leaseId: string
  ): DeleteRequestBuilder<AssetLeaseAmortizationScheduleBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseAmortizationScheduleBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseAmortizationScheduleBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseAmortizationScheduleBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseAmortizationScheduleBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string
  ): DeleteRequestBuilder<AssetLeaseAmortizationScheduleBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetLeaseAmortizationScheduleBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseAmortizationScheduleBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!
          }
    );
  }
}
