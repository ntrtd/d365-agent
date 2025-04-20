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
import { AssetMaintenanceWorkOrderJobChecklistHeadersV2 } from './AssetMaintenanceWorkOrderJobChecklistHeadersV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderJobChecklistHeadersV2} entity.
 */
export class AssetMaintenanceWorkOrderJobChecklistHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderJobChecklistHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderJobChecklistHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderJobChecklistHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderJobChecklistHeadersV2`.
   */
  create(
    entity: AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>
  ): CreateRequestBuilder<
    AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderJobChecklistHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderJobChecklistHeadersV2.dataAreaId}.
   * @param maintenanceWorkOrderId Key property. See {@link AssetMaintenanceWorkOrderJobChecklistHeadersV2.maintenanceWorkOrderId}.
   * @param maintenanceWorkOrderJobLineNumber Key property. See {@link AssetMaintenanceWorkOrderJobChecklistHeadersV2.maintenanceWorkOrderJobLineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderJobChecklistHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceWorkOrderId: DeserializedType<T, 'Edm.String'>,
    maintenanceWorkOrderJobLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceWorkOrderId: maintenanceWorkOrderId,
      MaintenanceWorkOrderJobLineNumber: maintenanceWorkOrderJobLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderJobChecklistHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderJobChecklistHeadersV2`.
   */
  update(
    entity: AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderJobChecklistHeadersV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderJobChecklistHeadersV2.dataAreaId}.
   * @param maintenanceWorkOrderId Key property. See {@link AssetMaintenanceWorkOrderJobChecklistHeadersV2.maintenanceWorkOrderId}.
   * @param maintenanceWorkOrderJobLineNumber Key property. See {@link AssetMaintenanceWorkOrderJobChecklistHeadersV2.maintenanceWorkOrderJobLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderJobChecklistHeadersV2`.
   */
  delete(
    dataAreaId: string,
    maintenanceWorkOrderId: string,
    maintenanceWorkOrderJobLineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderJobChecklistHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderJobChecklistHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceWorkOrderId?: string,
    maintenanceWorkOrderJobLineNumber?: BigNumber
  ): DeleteRequestBuilder<
    AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceWorkOrderJobChecklistHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceWorkOrderId: maintenanceWorkOrderId!,
            MaintenanceWorkOrderJobLineNumber:
              maintenanceWorkOrderJobLineNumber!
          }
    );
  }
}
