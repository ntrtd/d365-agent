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
import { AssetMaintenancePlans } from './AssetMaintenancePlans';

/**
 * Request builder class for operations supported on the {@link AssetMaintenancePlans} entity.
 */
export class AssetMaintenancePlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenancePlans<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenancePlans` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenancePlans` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenancePlans<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenancePlans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenancePlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenancePlans`.
   */
  create(
    entity: AssetMaintenancePlans<T>
  ): CreateRequestBuilder<AssetMaintenancePlans<T>, T> {
    return new CreateRequestBuilder<AssetMaintenancePlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenancePlans` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenancePlans.dataAreaId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenancePlans.maintenancePlanId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenancePlans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenancePlanId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenancePlans<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenancePlans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenancePlanId: maintenancePlanId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenancePlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenancePlans`.
   */
  update(
    entity: AssetMaintenancePlans<T>
  ): UpdateRequestBuilder<AssetMaintenancePlans<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenancePlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenancePlans`.
   * @param dataAreaId Key property. See {@link AssetMaintenancePlans.dataAreaId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenancePlans.maintenancePlanId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenancePlans`.
   */
  delete(
    dataAreaId: string,
    maintenancePlanId: string
  ): DeleteRequestBuilder<AssetMaintenancePlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenancePlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenancePlans` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenancePlans<T>
  ): DeleteRequestBuilder<AssetMaintenancePlans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenancePlanId?: string
  ): DeleteRequestBuilder<AssetMaintenancePlans<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenancePlans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenancePlans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenancePlanId: maintenancePlanId!
          }
    );
  }
}
