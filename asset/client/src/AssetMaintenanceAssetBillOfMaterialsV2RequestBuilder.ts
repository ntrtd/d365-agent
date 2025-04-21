/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AssetMaintenanceAssetBillOfMaterialsV2 } from './AssetMaintenanceAssetBillOfMaterialsV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetBillOfMaterialsV2} entity.
 */
export class AssetMaintenanceAssetBillOfMaterialsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetBillOfMaterialsV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetBillOfMaterialsV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetBillOfMaterialsV2` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetBillOfMaterialsV2<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetBillOfMaterialsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetBillOfMaterialsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetBillOfMaterialsV2`.
   */
  create(
    entity: AssetMaintenanceAssetBillOfMaterialsV2<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetBillOfMaterialsV2<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetBillOfMaterialsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetBillOfMaterialsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetBillOfMaterialsV2.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetBillOfMaterialsV2.maintenanceAssetId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceAssetBillOfMaterialsV2.lineNumber}.
   * @param validFrom Key property. See {@link AssetMaintenanceAssetBillOfMaterialsV2.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceAssetBillOfMaterialsV2.validTo}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetBillOfMaterialsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetBillOfMaterialsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetBillOfMaterialsV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetId: maintenanceAssetId,
      LineNumber: lineNumber,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetBillOfMaterialsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetBillOfMaterialsV2`.
   */
  update(
    entity: AssetMaintenanceAssetBillOfMaterialsV2<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetBillOfMaterialsV2<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetBillOfMaterialsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetBillOfMaterialsV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetBillOfMaterialsV2.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetBillOfMaterialsV2.maintenanceAssetId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceAssetBillOfMaterialsV2.lineNumber}.
   * @param validFrom Key property. See {@link AssetMaintenanceAssetBillOfMaterialsV2.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceAssetBillOfMaterialsV2.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetBillOfMaterialsV2`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string,
    lineNumber: BigNumber,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<AssetMaintenanceAssetBillOfMaterialsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetBillOfMaterialsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetBillOfMaterialsV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetBillOfMaterialsV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetBillOfMaterialsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string,
    lineNumber?: BigNumber,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<AssetMaintenanceAssetBillOfMaterialsV2<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetBillOfMaterialsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetBillOfMaterialsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!,
            LineNumber: lineNumber!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
