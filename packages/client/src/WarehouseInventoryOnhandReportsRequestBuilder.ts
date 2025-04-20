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
import { WarehouseInventoryOnhandReports } from './WarehouseInventoryOnhandReports';

/**
 * Request builder class for operations supported on the {@link WarehouseInventoryOnhandReports} entity.
 */
export class WarehouseInventoryOnhandReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseInventoryOnhandReports<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseInventoryOnhandReports` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseInventoryOnhandReports` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseInventoryOnhandReports<T>, T> {
    return new GetAllRequestBuilder<WarehouseInventoryOnhandReports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseInventoryOnhandReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseInventoryOnhandReports`.
   */
  create(
    entity: WarehouseInventoryOnhandReports<T>
  ): CreateRequestBuilder<WarehouseInventoryOnhandReports<T>, T> {
    return new CreateRequestBuilder<WarehouseInventoryOnhandReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseInventoryOnhandReports` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseInventoryOnhandReports.dataAreaId}.
   * @param reportNumber Key property. See {@link WarehouseInventoryOnhandReports.reportNumber}.
   * @returns A request builder for creating requests to retrieve one `WarehouseInventoryOnhandReports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reportNumber: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<WarehouseInventoryOnhandReports<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseInventoryOnhandReports<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReportNumber: reportNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseInventoryOnhandReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseInventoryOnhandReports`.
   */
  update(
    entity: WarehouseInventoryOnhandReports<T>
  ): UpdateRequestBuilder<WarehouseInventoryOnhandReports<T>, T> {
    return new UpdateRequestBuilder<WarehouseInventoryOnhandReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryOnhandReports`.
   * @param dataAreaId Key property. See {@link WarehouseInventoryOnhandReports.dataAreaId}.
   * @param reportNumber Key property. See {@link WarehouseInventoryOnhandReports.reportNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryOnhandReports`.
   */
  delete(
    dataAreaId: string,
    reportNumber: string
  ): DeleteRequestBuilder<WarehouseInventoryOnhandReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryOnhandReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryOnhandReports` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseInventoryOnhandReports<T>
  ): DeleteRequestBuilder<WarehouseInventoryOnhandReports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reportNumber?: string
  ): DeleteRequestBuilder<WarehouseInventoryOnhandReports<T>, T> {
    return new DeleteRequestBuilder<WarehouseInventoryOnhandReports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseInventoryOnhandReports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReportNumber: reportNumber!
          }
    );
  }
}
