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
import { AssetMaintenanceWarrantyLines } from './AssetMaintenanceWarrantyLines';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWarrantyLines} entity.
 */
export class AssetMaintenanceWarrantyLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWarrantyLines<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWarrantyLines` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWarrantyLines` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWarrantyLines<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWarrantyLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWarrantyLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWarrantyLines`.
   */
  create(
    entity: AssetMaintenanceWarrantyLines<T>
  ): CreateRequestBuilder<AssetMaintenanceWarrantyLines<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWarrantyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWarrantyLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWarrantyLines.dataAreaId}.
   * @param warrantyId Key property. See {@link AssetMaintenanceWarrantyLines.warrantyId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceWarrantyLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWarrantyLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warrantyId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWarrantyLines<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWarrantyLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WarrantyId: warrantyId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWarrantyLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWarrantyLines`.
   */
  update(
    entity: AssetMaintenanceWarrantyLines<T>
  ): UpdateRequestBuilder<AssetMaintenanceWarrantyLines<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWarrantyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWarrantyLines`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWarrantyLines.dataAreaId}.
   * @param warrantyId Key property. See {@link AssetMaintenanceWarrantyLines.warrantyId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceWarrantyLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWarrantyLines`.
   */
  delete(
    dataAreaId: string,
    warrantyId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWarrantyLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWarrantyLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWarrantyLines` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWarrantyLines<T>
  ): DeleteRequestBuilder<AssetMaintenanceWarrantyLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    warrantyId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWarrantyLines<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWarrantyLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWarrantyLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarrantyId: warrantyId!,
            LineNumber: lineNumber!
          }
    );
  }
}
