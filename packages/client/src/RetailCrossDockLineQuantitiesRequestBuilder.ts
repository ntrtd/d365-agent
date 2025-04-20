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
import { RetailCrossDockLineQuantities } from './RetailCrossDockLineQuantities';

/**
 * Request builder class for operations supported on the {@link RetailCrossDockLineQuantities} entity.
 */
export class RetailCrossDockLineQuantitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCrossDockLineQuantities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCrossDockLineQuantities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCrossDockLineQuantities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCrossDockLineQuantities<T>, T> {
    return new GetAllRequestBuilder<RetailCrossDockLineQuantities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailCrossDockLineQuantities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCrossDockLineQuantities`.
   */
  create(
    entity: RetailCrossDockLineQuantities<T>
  ): CreateRequestBuilder<RetailCrossDockLineQuantities<T>, T> {
    return new CreateRequestBuilder<RetailCrossDockLineQuantities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCrossDockLineQuantities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailCrossDockLineQuantities.dataAreaId}.
   * @param crossDockId Key property. See {@link RetailCrossDockLineQuantities.crossDockId}.
   * @param lineNumber Key property. See {@link RetailCrossDockLineQuantities.lineNumber}.
   * @param warehouse Key property. See {@link RetailCrossDockLineQuantities.warehouse}.
   * @param warehouseCompany Key property. See {@link RetailCrossDockLineQuantities.warehouseCompany}.
   * @returns A request builder for creating requests to retrieve one `RetailCrossDockLineQuantities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    crossDockId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    warehouse: DeserializedType<T, 'Edm.String'>,
    warehouseCompany: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCrossDockLineQuantities<T>, T> {
    return new GetByKeyRequestBuilder<RetailCrossDockLineQuantities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CrossDockId: crossDockId,
        LineNumber: lineNumber,
        Warehouse: warehouse,
        WarehouseCompany: warehouseCompany
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCrossDockLineQuantities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCrossDockLineQuantities`.
   */
  update(
    entity: RetailCrossDockLineQuantities<T>
  ): UpdateRequestBuilder<RetailCrossDockLineQuantities<T>, T> {
    return new UpdateRequestBuilder<RetailCrossDockLineQuantities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCrossDockLineQuantities`.
   * @param dataAreaId Key property. See {@link RetailCrossDockLineQuantities.dataAreaId}.
   * @param crossDockId Key property. See {@link RetailCrossDockLineQuantities.crossDockId}.
   * @param lineNumber Key property. See {@link RetailCrossDockLineQuantities.lineNumber}.
   * @param warehouse Key property. See {@link RetailCrossDockLineQuantities.warehouse}.
   * @param warehouseCompany Key property. See {@link RetailCrossDockLineQuantities.warehouseCompany}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCrossDockLineQuantities`.
   */
  delete(
    dataAreaId: string,
    crossDockId: string,
    lineNumber: BigNumber,
    warehouse: string,
    warehouseCompany: string
  ): DeleteRequestBuilder<RetailCrossDockLineQuantities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCrossDockLineQuantities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCrossDockLineQuantities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCrossDockLineQuantities<T>
  ): DeleteRequestBuilder<RetailCrossDockLineQuantities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    crossDockId?: string,
    lineNumber?: BigNumber,
    warehouse?: string,
    warehouseCompany?: string
  ): DeleteRequestBuilder<RetailCrossDockLineQuantities<T>, T> {
    return new DeleteRequestBuilder<RetailCrossDockLineQuantities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailCrossDockLineQuantities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CrossDockId: crossDockId!,
            LineNumber: lineNumber!,
            Warehouse: warehouse!,
            WarehouseCompany: warehouseCompany!
          }
    );
  }
}
