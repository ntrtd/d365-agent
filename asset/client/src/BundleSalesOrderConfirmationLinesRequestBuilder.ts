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
import { BundleSalesOrderConfirmationLines } from './BundleSalesOrderConfirmationLines';

/**
 * Request builder class for operations supported on the {@link BundleSalesOrderConfirmationLines} entity.
 */
export class BundleSalesOrderConfirmationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BundleSalesOrderConfirmationLines<T>, T> {
  /**
   * Returns a request builder for querying all `BundleSalesOrderConfirmationLines` entities.
   * @returns A request builder for creating requests to retrieve all `BundleSalesOrderConfirmationLines` entities.
   */
  getAll(): GetAllRequestBuilder<BundleSalesOrderConfirmationLines<T>, T> {
    return new GetAllRequestBuilder<BundleSalesOrderConfirmationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BundleSalesOrderConfirmationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BundleSalesOrderConfirmationLines`.
   */
  create(
    entity: BundleSalesOrderConfirmationLines<T>
  ): CreateRequestBuilder<BundleSalesOrderConfirmationLines<T>, T> {
    return new CreateRequestBuilder<BundleSalesOrderConfirmationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BundleSalesOrderConfirmationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BundleSalesOrderConfirmationLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link BundleSalesOrderConfirmationLines.salesOrderNumber}.
   * @param confirmationDate Key property. See {@link BundleSalesOrderConfirmationLines.confirmationDate}.
   * @param confirmationNumber Key property. See {@link BundleSalesOrderConfirmationLines.confirmationNumber}.
   * @param salesOrderLineInventoryLotId Key property. See {@link BundleSalesOrderConfirmationLines.salesOrderLineInventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `BundleSalesOrderConfirmationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    confirmationNumber: DeserializedType<T, 'Edm.String'>,
    salesOrderLineInventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BundleSalesOrderConfirmationLines<T>, T> {
    return new GetByKeyRequestBuilder<BundleSalesOrderConfirmationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber,
        ConfirmationDate: confirmationDate,
        ConfirmationNumber: confirmationNumber,
        SalesOrderLineInventoryLotId: salesOrderLineInventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BundleSalesOrderConfirmationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BundleSalesOrderConfirmationLines`.
   */
  update(
    entity: BundleSalesOrderConfirmationLines<T>
  ): UpdateRequestBuilder<BundleSalesOrderConfirmationLines<T>, T> {
    return new UpdateRequestBuilder<BundleSalesOrderConfirmationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BundleSalesOrderConfirmationLines`.
   * @param dataAreaId Key property. See {@link BundleSalesOrderConfirmationLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link BundleSalesOrderConfirmationLines.salesOrderNumber}.
   * @param confirmationDate Key property. See {@link BundleSalesOrderConfirmationLines.confirmationDate}.
   * @param confirmationNumber Key property. See {@link BundleSalesOrderConfirmationLines.confirmationNumber}.
   * @param salesOrderLineInventoryLotId Key property. See {@link BundleSalesOrderConfirmationLines.salesOrderLineInventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `BundleSalesOrderConfirmationLines`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    confirmationDate: Moment,
    confirmationNumber: string,
    salesOrderLineInventoryLotId: string
  ): DeleteRequestBuilder<BundleSalesOrderConfirmationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BundleSalesOrderConfirmationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BundleSalesOrderConfirmationLines` by taking the entity as a parameter.
   */
  delete(
    entity: BundleSalesOrderConfirmationLines<T>
  ): DeleteRequestBuilder<BundleSalesOrderConfirmationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    confirmationDate?: Moment,
    confirmationNumber?: string,
    salesOrderLineInventoryLotId?: string
  ): DeleteRequestBuilder<BundleSalesOrderConfirmationLines<T>, T> {
    return new DeleteRequestBuilder<BundleSalesOrderConfirmationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BundleSalesOrderConfirmationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            ConfirmationDate: confirmationDate!,
            ConfirmationNumber: confirmationNumber!,
            SalesOrderLineInventoryLotId: salesOrderLineInventoryLotId!
          }
    );
  }
}
