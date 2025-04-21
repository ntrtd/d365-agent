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
import { AssetMaintenanceFaultCauses } from './AssetMaintenanceFaultCauses';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFaultCauses} entity.
 */
export class AssetMaintenanceFaultCausesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFaultCauses<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFaultCauses` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFaultCauses` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceFaultCauses<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceFaultCauses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFaultCauses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFaultCauses`.
   */
  create(
    entity: AssetMaintenanceFaultCauses<T>
  ): CreateRequestBuilder<AssetMaintenanceFaultCauses<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceFaultCauses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFaultCauses` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFaultCauses.dataAreaId}.
   * @param faultCauseId Key property. See {@link AssetMaintenanceFaultCauses.faultCauseId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFaultCauses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faultCauseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceFaultCauses<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceFaultCauses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FaultCauseId: faultCauseId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFaultCauses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFaultCauses`.
   */
  update(
    entity: AssetMaintenanceFaultCauses<T>
  ): UpdateRequestBuilder<AssetMaintenanceFaultCauses<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceFaultCauses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFaultCauses`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFaultCauses.dataAreaId}.
   * @param faultCauseId Key property. See {@link AssetMaintenanceFaultCauses.faultCauseId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFaultCauses`.
   */
  delete(
    dataAreaId: string,
    faultCauseId: string
  ): DeleteRequestBuilder<AssetMaintenanceFaultCauses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFaultCauses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFaultCauses` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFaultCauses<T>
  ): DeleteRequestBuilder<AssetMaintenanceFaultCauses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faultCauseId?: string
  ): DeleteRequestBuilder<AssetMaintenanceFaultCauses<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceFaultCauses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFaultCauses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FaultCauseId: faultCauseId!
          }
    );
  }
}
