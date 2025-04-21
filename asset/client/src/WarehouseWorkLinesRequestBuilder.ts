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
import { WarehouseWorkLines } from './WarehouseWorkLines';

/**
 * Request builder class for operations supported on the {@link WarehouseWorkLines} entity.
 */
export class WarehouseWorkLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseWorkLines<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseWorkLines` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseWorkLines` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseWorkLines<T>, T> {
    return new GetAllRequestBuilder<WarehouseWorkLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseWorkLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseWorkLines`.
   */
  create(
    entity: WarehouseWorkLines<T>
  ): CreateRequestBuilder<WarehouseWorkLines<T>, T> {
    return new CreateRequestBuilder<WarehouseWorkLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseWorkLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseWorkLines.dataAreaId}.
   * @param warehouseWorkId Key property. See {@link WarehouseWorkLines.warehouseWorkId}.
   * @param workLineNumber Key property. See {@link WarehouseWorkLines.workLineNumber}.
   * @returns A request builder for creating requests to retrieve one `WarehouseWorkLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warehouseWorkId: DeserializedType<T, 'Edm.String'>,
    workLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<WarehouseWorkLines<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseWorkLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WarehouseWorkId: warehouseWorkId,
        WorkLineNumber: workLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseWorkLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseWorkLines`.
   */
  update(
    entity: WarehouseWorkLines<T>
  ): UpdateRequestBuilder<WarehouseWorkLines<T>, T> {
    return new UpdateRequestBuilder<WarehouseWorkLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkLines`.
   * @param dataAreaId Key property. See {@link WarehouseWorkLines.dataAreaId}.
   * @param warehouseWorkId Key property. See {@link WarehouseWorkLines.warehouseWorkId}.
   * @param workLineNumber Key property. See {@link WarehouseWorkLines.workLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkLines`.
   */
  delete(
    dataAreaId: string,
    warehouseWorkId: string,
    workLineNumber: BigNumber
  ): DeleteRequestBuilder<WarehouseWorkLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkLines` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseWorkLines<T>
  ): DeleteRequestBuilder<WarehouseWorkLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    warehouseWorkId?: string,
    workLineNumber?: BigNumber
  ): DeleteRequestBuilder<WarehouseWorkLines<T>, T> {
    return new DeleteRequestBuilder<WarehouseWorkLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseWorkLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarehouseWorkId: warehouseWorkId!,
            WorkLineNumber: workLineNumber!
          }
    );
  }
}
