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
import { SalesOrderTransTaxInformations } from './SalesOrderTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link SalesOrderTransTaxInformations} entity.
 */
export class SalesOrderTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<SalesOrderTransTaxInformations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderTransTaxInformations`.
   */
  create(
    entity: SalesOrderTransTaxInformations<T>
  ): CreateRequestBuilder<SalesOrderTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<SalesOrderTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderTransTaxInformations.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderTransTaxInformations.salesOrderNumber}.
   * @param salesOrderLineInventoryLotId Key property. See {@link SalesOrderTransTaxInformations.salesOrderLineInventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    salesOrderLineInventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderTransTaxInformations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber,
        SalesOrderLineInventoryLotId: salesOrderLineInventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderTransTaxInformations`.
   */
  update(
    entity: SalesOrderTransTaxInformations<T>
  ): UpdateRequestBuilder<SalesOrderTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<SalesOrderTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderTransTaxInformations`.
   * @param dataAreaId Key property. See {@link SalesOrderTransTaxInformations.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderTransTaxInformations.salesOrderNumber}.
   * @param salesOrderLineInventoryLotId Key property. See {@link SalesOrderTransTaxInformations.salesOrderLineInventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    salesOrderLineInventoryLotId: string
  ): DeleteRequestBuilder<SalesOrderTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderTransTaxInformations<T>
  ): DeleteRequestBuilder<SalesOrderTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    salesOrderLineInventoryLotId?: string
  ): DeleteRequestBuilder<SalesOrderTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<SalesOrderTransTaxInformations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            SalesOrderLineInventoryLotId: salesOrderLineInventoryLotId!
          }
    );
  }
}
