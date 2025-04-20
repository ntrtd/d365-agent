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
import { AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses } from './AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses} entity.
 */
export class AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses.dataAreaId}.
   * @param functionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses.functionalLocationTypeId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses.maintenancePlanId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationTypeId: DeserializedType<T, 'Edm.String'>,
    maintenancePlanId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationTypeId: functionalLocationTypeId,
      MaintenancePlanId: maintenancePlanId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses.dataAreaId}.
   * @param functionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses.functionalLocationTypeId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses.maintenancePlanId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses`.
   */
  delete(
    dataAreaId: string,
    functionalLocationTypeId: string,
    maintenancePlanId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationTypeId?: string,
    maintenancePlanId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationTypeId: functionalLocationTypeId!,
            MaintenancePlanId: maintenancePlanId!
          }
    );
  }
}
