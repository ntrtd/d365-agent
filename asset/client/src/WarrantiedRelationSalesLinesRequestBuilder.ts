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
import { WarrantiedRelationSalesLines } from './WarrantiedRelationSalesLines';
import { WarrantiedRelationOrderType } from './WarrantiedRelationOrderType';

/**
 * Request builder class for operations supported on the {@link WarrantiedRelationSalesLines} entity.
 */
export class WarrantiedRelationSalesLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarrantiedRelationSalesLines<T>, T> {
  /**
   * Returns a request builder for querying all `WarrantiedRelationSalesLines` entities.
   * @returns A request builder for creating requests to retrieve all `WarrantiedRelationSalesLines` entities.
   */
  getAll(): GetAllRequestBuilder<WarrantiedRelationSalesLines<T>, T> {
    return new GetAllRequestBuilder<WarrantiedRelationSalesLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarrantiedRelationSalesLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarrantiedRelationSalesLines`.
   */
  create(
    entity: WarrantiedRelationSalesLines<T>
  ): CreateRequestBuilder<WarrantiedRelationSalesLines<T>, T> {
    return new CreateRequestBuilder<WarrantiedRelationSalesLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarrantiedRelationSalesLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarrantiedRelationSalesLines.dataAreaId}.
   * @param warrantiedOrderType Key property. See {@link WarrantiedRelationSalesLines.warrantiedOrderType}.
   * @param warrantySalesId Key property. See {@link WarrantiedRelationSalesLines.warrantySalesId}.
   * @param warrantySalesLineNumber Key property. See {@link WarrantiedRelationSalesLines.warrantySalesLineNumber}.
   * @param warrantiedSerialNumber Key property. See {@link WarrantiedRelationSalesLines.warrantiedSerialNumber}.
   * @param warrantyOrderType Key property. See {@link WarrantiedRelationSalesLines.warrantyOrderType}.
   * @param warrantiedSalesId Key property. See {@link WarrantiedRelationSalesLines.warrantiedSalesId}.
   * @param warrantiedSalesLineNumber Key property. See {@link WarrantiedRelationSalesLines.warrantiedSalesLineNumber}.
   * @returns A request builder for creating requests to retrieve one `WarrantiedRelationSalesLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warrantiedOrderType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WarrantiedRelationOrderType'
    >,
    warrantySalesId: DeserializedType<T, 'Edm.String'>,
    warrantySalesLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    warrantiedSerialNumber: DeserializedType<T, 'Edm.String'>,
    warrantyOrderType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WarrantiedRelationOrderType'
    >,
    warrantiedSalesId: DeserializedType<T, 'Edm.String'>,
    warrantiedSalesLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<WarrantiedRelationSalesLines<T>, T> {
    return new GetByKeyRequestBuilder<WarrantiedRelationSalesLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WarrantiedOrderType: warrantiedOrderType,
        WarrantySalesId: warrantySalesId,
        WarrantySalesLineNumber: warrantySalesLineNumber,
        WarrantiedSerialNumber: warrantiedSerialNumber,
        WarrantyOrderType: warrantyOrderType,
        WarrantiedSalesId: warrantiedSalesId,
        WarrantiedSalesLineNumber: warrantiedSalesLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarrantiedRelationSalesLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarrantiedRelationSalesLines`.
   */
  update(
    entity: WarrantiedRelationSalesLines<T>
  ): UpdateRequestBuilder<WarrantiedRelationSalesLines<T>, T> {
    return new UpdateRequestBuilder<WarrantiedRelationSalesLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarrantiedRelationSalesLines`.
   * @param dataAreaId Key property. See {@link WarrantiedRelationSalesLines.dataAreaId}.
   * @param warrantiedOrderType Key property. See {@link WarrantiedRelationSalesLines.warrantiedOrderType}.
   * @param warrantySalesId Key property. See {@link WarrantiedRelationSalesLines.warrantySalesId}.
   * @param warrantySalesLineNumber Key property. See {@link WarrantiedRelationSalesLines.warrantySalesLineNumber}.
   * @param warrantiedSerialNumber Key property. See {@link WarrantiedRelationSalesLines.warrantiedSerialNumber}.
   * @param warrantyOrderType Key property. See {@link WarrantiedRelationSalesLines.warrantyOrderType}.
   * @param warrantiedSalesId Key property. See {@link WarrantiedRelationSalesLines.warrantiedSalesId}.
   * @param warrantiedSalesLineNumber Key property. See {@link WarrantiedRelationSalesLines.warrantiedSalesLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WarrantiedRelationSalesLines`.
   */
  delete(
    dataAreaId: string,
    warrantiedOrderType: WarrantiedRelationOrderType,
    warrantySalesId: string,
    warrantySalesLineNumber: BigNumber,
    warrantiedSerialNumber: string,
    warrantyOrderType: WarrantiedRelationOrderType,
    warrantiedSalesId: string,
    warrantiedSalesLineNumber: BigNumber
  ): DeleteRequestBuilder<WarrantiedRelationSalesLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarrantiedRelationSalesLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarrantiedRelationSalesLines` by taking the entity as a parameter.
   */
  delete(
    entity: WarrantiedRelationSalesLines<T>
  ): DeleteRequestBuilder<WarrantiedRelationSalesLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    warrantiedOrderType?: WarrantiedRelationOrderType,
    warrantySalesId?: string,
    warrantySalesLineNumber?: BigNumber,
    warrantiedSerialNumber?: string,
    warrantyOrderType?: WarrantiedRelationOrderType,
    warrantiedSalesId?: string,
    warrantiedSalesLineNumber?: BigNumber
  ): DeleteRequestBuilder<WarrantiedRelationSalesLines<T>, T> {
    return new DeleteRequestBuilder<WarrantiedRelationSalesLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarrantiedRelationSalesLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarrantiedOrderType: warrantiedOrderType!,
            WarrantySalesId: warrantySalesId!,
            WarrantySalesLineNumber: warrantySalesLineNumber!,
            WarrantiedSerialNumber: warrantiedSerialNumber!,
            WarrantyOrderType: warrantyOrderType!,
            WarrantiedSalesId: warrantiedSalesId!,
            WarrantiedSalesLineNumber: warrantiedSalesLineNumber!
          }
    );
  }
}
