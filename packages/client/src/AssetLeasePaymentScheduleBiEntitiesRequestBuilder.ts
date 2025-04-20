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
import { AssetLeasePaymentScheduleBiEntities } from './AssetLeasePaymentScheduleBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeasePaymentScheduleBiEntities} entity.
 */
export class AssetLeasePaymentScheduleBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeasePaymentScheduleBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeasePaymentScheduleBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeasePaymentScheduleBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeasePaymentScheduleBiEntities`.
   */
  create(
    entity: AssetLeasePaymentScheduleBiEntities<T>
  ): CreateRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeasePaymentScheduleBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeasePaymentScheduleBiEntities.dataAreaId}.
   * @param leaseId Key property. See {@link AssetLeasePaymentScheduleBiEntities.leaseId}.
   * @returns A request builder for creating requests to retrieve one `AssetLeasePaymentScheduleBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetLeasePaymentScheduleBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LeaseId: leaseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeasePaymentScheduleBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeasePaymentScheduleBiEntities`.
   */
  update(
    entity: AssetLeasePaymentScheduleBiEntities<T>
  ): UpdateRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeasePaymentScheduleBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeasePaymentScheduleBiEntities.dataAreaId}.
   * @param leaseId Key property. See {@link AssetLeasePaymentScheduleBiEntities.leaseId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeasePaymentScheduleBiEntities`.
   */
  delete(
    dataAreaId: string,
    leaseId: string
  ): DeleteRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeasePaymentScheduleBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeasePaymentScheduleBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeasePaymentScheduleBiEntities<T>
  ): DeleteRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string
  ): DeleteRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetLeasePaymentScheduleBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeasePaymentScheduleBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!
          }
    );
  }
}
