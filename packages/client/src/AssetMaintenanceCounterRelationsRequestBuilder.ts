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
import { AssetMaintenanceCounterRelations } from './AssetMaintenanceCounterRelations';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceCounterRelations} entity.
 */
export class AssetMaintenanceCounterRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceCounterRelations<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceCounterRelations` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceCounterRelations` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceCounterRelations<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceCounterRelations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceCounterRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceCounterRelations`.
   */
  create(
    entity: AssetMaintenanceCounterRelations<T>
  ): CreateRequestBuilder<AssetMaintenanceCounterRelations<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceCounterRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceCounterRelations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceCounterRelations.dataAreaId}.
   * @param counterId Key property. See {@link AssetMaintenanceCounterRelations.counterId}.
   * @param relatedCounterId Key property. See {@link AssetMaintenanceCounterRelations.relatedCounterId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceCounterRelations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    counterId: DeserializedType<T, 'Edm.String'>,
    relatedCounterId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceCounterRelations<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceCounterRelations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CounterId: counterId,
        RelatedCounterId: relatedCounterId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceCounterRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceCounterRelations`.
   */
  update(
    entity: AssetMaintenanceCounterRelations<T>
  ): UpdateRequestBuilder<AssetMaintenanceCounterRelations<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceCounterRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceCounterRelations`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceCounterRelations.dataAreaId}.
   * @param counterId Key property. See {@link AssetMaintenanceCounterRelations.counterId}.
   * @param relatedCounterId Key property. See {@link AssetMaintenanceCounterRelations.relatedCounterId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceCounterRelations`.
   */
  delete(
    dataAreaId: string,
    counterId: string,
    relatedCounterId: string
  ): DeleteRequestBuilder<AssetMaintenanceCounterRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceCounterRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceCounterRelations` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceCounterRelations<T>
  ): DeleteRequestBuilder<AssetMaintenanceCounterRelations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    counterId?: string,
    relatedCounterId?: string
  ): DeleteRequestBuilder<AssetMaintenanceCounterRelations<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceCounterRelations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceCounterRelations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CounterId: counterId!,
            RelatedCounterId: relatedCounterId!
          }
    );
  }
}
