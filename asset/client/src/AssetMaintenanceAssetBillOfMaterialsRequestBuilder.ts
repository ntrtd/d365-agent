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
import { AssetMaintenanceAssetBillOfMaterials } from './AssetMaintenanceAssetBillOfMaterials';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetBillOfMaterials} entity.
 */
export class AssetMaintenanceAssetBillOfMaterialsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetBillOfMaterials` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetBillOfMaterials` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetBillOfMaterials` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetBillOfMaterials`.
   */
  create(
    entity: AssetMaintenanceAssetBillOfMaterials<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetBillOfMaterials` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetBillOfMaterials.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetBillOfMaterials.maintenanceAssetId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceAssetBillOfMaterials.lineNumber}.
   * @param validFrom Key property. See {@link AssetMaintenanceAssetBillOfMaterials.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceAssetBillOfMaterials.validTo}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetBillOfMaterials` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetBillOfMaterials<T>,
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
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetBillOfMaterials`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetBillOfMaterials`.
   */
  update(
    entity: AssetMaintenanceAssetBillOfMaterials<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetBillOfMaterials`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetBillOfMaterials.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetBillOfMaterials.maintenanceAssetId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceAssetBillOfMaterials.lineNumber}.
   * @param validFrom Key property. See {@link AssetMaintenanceAssetBillOfMaterials.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceAssetBillOfMaterials.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetBillOfMaterials`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string,
    lineNumber: BigNumber,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetBillOfMaterials`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetBillOfMaterials` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetBillOfMaterials<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string,
    lineNumber?: BigNumber,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetBillOfMaterials<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetBillOfMaterials
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
