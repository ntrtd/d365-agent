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
import { AssetMaintenanceFaultSymptoms } from './AssetMaintenanceFaultSymptoms';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFaultSymptoms} entity.
 */
export class AssetMaintenanceFaultSymptomsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFaultSymptoms<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFaultSymptoms` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFaultSymptoms` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFaultSymptoms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFaultSymptoms`.
   */
  create(
    entity: AssetMaintenanceFaultSymptoms<T>
  ): CreateRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFaultSymptoms` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFaultSymptoms.dataAreaId}.
   * @param faultSymptomId Key property. See {@link AssetMaintenanceFaultSymptoms.faultSymptomId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFaultSymptoms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faultSymptomId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FaultSymptomId: faultSymptomId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFaultSymptoms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFaultSymptoms`.
   */
  update(
    entity: AssetMaintenanceFaultSymptoms<T>
  ): UpdateRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFaultSymptoms`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFaultSymptoms.dataAreaId}.
   * @param faultSymptomId Key property. See {@link AssetMaintenanceFaultSymptoms.faultSymptomId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFaultSymptoms`.
   */
  delete(
    dataAreaId: string,
    faultSymptomId: string
  ): DeleteRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFaultSymptoms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFaultSymptoms` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFaultSymptoms<T>
  ): DeleteRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faultSymptomId?: string
  ): DeleteRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceFaultSymptoms<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFaultSymptoms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FaultSymptomId: faultSymptomId!
          }
    );
  }
}
