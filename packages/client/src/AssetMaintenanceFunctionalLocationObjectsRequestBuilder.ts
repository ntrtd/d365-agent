/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AssetMaintenanceFunctionalLocationObjects } from './AssetMaintenanceFunctionalLocationObjects';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationObjects} entity.
 */
export class AssetMaintenanceFunctionalLocationObjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFunctionalLocationObjects<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationObjects` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationObjects` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationObjects<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationObjects<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationObjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationObjects`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationObjects<T>
  ): CreateRequestBuilder<AssetMaintenanceFunctionalLocationObjects<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationObjects<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationObjects` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationObjects.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceFunctionalLocationObjects.maintenanceAssetId}.
   * @param validFrom Key property. See {@link AssetMaintenanceFunctionalLocationObjects.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceFunctionalLocationObjects.validTo}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationObjects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetMaintenanceFunctionalLocationObjects<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationObjects<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetId: maintenanceAssetId,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationObjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationObjects`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationObjects<T>
  ): UpdateRequestBuilder<AssetMaintenanceFunctionalLocationObjects<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationObjects<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationObjects`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationObjects.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceFunctionalLocationObjects.maintenanceAssetId}.
   * @param validFrom Key property. See {@link AssetMaintenanceFunctionalLocationObjects.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceFunctionalLocationObjects.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationObjects`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationObjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationObjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationObjects` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationObjects<T>
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationObjects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationObjects<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationObjects<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFunctionalLocationObjects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
