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
import { AssetMaintenanceWorkOrderParentProjectsV2 } from './AssetMaintenanceWorkOrderParentProjectsV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderParentProjectsV2} entity.
 */
export class AssetMaintenanceWorkOrderParentProjectsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderParentProjectsV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderParentProjectsV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderParentProjectsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderParentProjectsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderParentProjectsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderParentProjectsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderParentProjectsV2`.
   */
  create(
    entity: AssetMaintenanceWorkOrderParentProjectsV2<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderParentProjectsV2<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderParentProjectsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderParentProjectsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.dataAreaId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.workOrderTypeId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.maintenanceAssetTypeId}.
   * @param customerAccountNumber Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.customerAccountNumber}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.maintenanceAssetId}.
   * @param validFromDateTime Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.validFromDateTime}.
   * @param validToDateTime Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.validToDateTime}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderParentProjectsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderTypeId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    validFromDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validToDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderParentProjectsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderParentProjectsV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderTypeId: workOrderTypeId,
      FunctionalLocationId: functionalLocationId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      CustomerAccountNumber: customerAccountNumber,
      MaintenanceAssetId: maintenanceAssetId,
      ValidFromDateTime: validFromDateTime,
      ValidToDateTime: validToDateTime
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderParentProjectsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderParentProjectsV2`.
   */
  update(
    entity: AssetMaintenanceWorkOrderParentProjectsV2<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderParentProjectsV2<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderParentProjectsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderParentProjectsV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.dataAreaId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.workOrderTypeId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.maintenanceAssetTypeId}.
   * @param customerAccountNumber Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.customerAccountNumber}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.maintenanceAssetId}.
   * @param validFromDateTime Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.validFromDateTime}.
   * @param validToDateTime Key property. See {@link AssetMaintenanceWorkOrderParentProjectsV2.validToDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderParentProjectsV2`.
   */
  delete(
    dataAreaId: string,
    workOrderTypeId: string,
    functionalLocationId: string,
    maintenanceAssetTypeId: string,
    customerAccountNumber: string,
    maintenanceAssetId: string,
    validFromDateTime: Moment,
    validToDateTime: Moment
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderParentProjectsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderParentProjectsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderParentProjectsV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderParentProjectsV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderParentProjectsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderTypeId?: string,
    functionalLocationId?: string,
    maintenanceAssetTypeId?: string,
    customerAccountNumber?: string,
    maintenanceAssetId?: string,
    validFromDateTime?: Moment,
    validToDateTime?: Moment
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderParentProjectsV2<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderParentProjectsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderParentProjectsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderTypeId: workOrderTypeId!,
            FunctionalLocationId: functionalLocationId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            CustomerAccountNumber: customerAccountNumber!,
            MaintenanceAssetId: maintenanceAssetId!,
            ValidFromDateTime: validFromDateTime!,
            ValidToDateTime: validToDateTime!
          }
    );
  }
}
