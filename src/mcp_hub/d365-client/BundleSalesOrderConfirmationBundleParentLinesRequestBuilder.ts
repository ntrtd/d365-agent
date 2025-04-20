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
import { BundleSalesOrderConfirmationBundleParentLines } from './BundleSalesOrderConfirmationBundleParentLines';

/**
 * Request builder class for operations supported on the {@link BundleSalesOrderConfirmationBundleParentLines} entity.
 */
export class BundleSalesOrderConfirmationBundleParentLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BundleSalesOrderConfirmationBundleParentLines<T>, T> {
  /**
   * Returns a request builder for querying all `BundleSalesOrderConfirmationBundleParentLines` entities.
   * @returns A request builder for creating requests to retrieve all `BundleSalesOrderConfirmationBundleParentLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    BundleSalesOrderConfirmationBundleParentLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BundleSalesOrderConfirmationBundleParentLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BundleSalesOrderConfirmationBundleParentLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BundleSalesOrderConfirmationBundleParentLines`.
   */
  create(
    entity: BundleSalesOrderConfirmationBundleParentLines<T>
  ): CreateRequestBuilder<BundleSalesOrderConfirmationBundleParentLines<T>, T> {
    return new CreateRequestBuilder<
      BundleSalesOrderConfirmationBundleParentLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BundleSalesOrderConfirmationBundleParentLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BundleSalesOrderConfirmationBundleParentLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link BundleSalesOrderConfirmationBundleParentLines.salesOrderNumber}.
   * @param confirmationDate Key property. See {@link BundleSalesOrderConfirmationBundleParentLines.confirmationDate}.
   * @param confirmationNumber Key property. See {@link BundleSalesOrderConfirmationBundleParentLines.confirmationNumber}.
   * @param salesOrderLineInventoryLotId Key property. See {@link BundleSalesOrderConfirmationBundleParentLines.salesOrderLineInventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `BundleSalesOrderConfirmationBundleParentLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    confirmationNumber: DeserializedType<T, 'Edm.String'>,
    salesOrderLineInventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    BundleSalesOrderConfirmationBundleParentLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      BundleSalesOrderConfirmationBundleParentLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesOrderNumber: salesOrderNumber,
      ConfirmationDate: confirmationDate,
      ConfirmationNumber: confirmationNumber,
      SalesOrderLineInventoryLotId: salesOrderLineInventoryLotId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BundleSalesOrderConfirmationBundleParentLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BundleSalesOrderConfirmationBundleParentLines`.
   */
  update(
    entity: BundleSalesOrderConfirmationBundleParentLines<T>
  ): UpdateRequestBuilder<BundleSalesOrderConfirmationBundleParentLines<T>, T> {
    return new UpdateRequestBuilder<
      BundleSalesOrderConfirmationBundleParentLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BundleSalesOrderConfirmationBundleParentLines`.
   * @param dataAreaId Key property. See {@link BundleSalesOrderConfirmationBundleParentLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link BundleSalesOrderConfirmationBundleParentLines.salesOrderNumber}.
   * @param confirmationDate Key property. See {@link BundleSalesOrderConfirmationBundleParentLines.confirmationDate}.
   * @param confirmationNumber Key property. See {@link BundleSalesOrderConfirmationBundleParentLines.confirmationNumber}.
   * @param salesOrderLineInventoryLotId Key property. See {@link BundleSalesOrderConfirmationBundleParentLines.salesOrderLineInventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `BundleSalesOrderConfirmationBundleParentLines`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    confirmationDate: Moment,
    confirmationNumber: string,
    salesOrderLineInventoryLotId: string
  ): DeleteRequestBuilder<BundleSalesOrderConfirmationBundleParentLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BundleSalesOrderConfirmationBundleParentLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BundleSalesOrderConfirmationBundleParentLines` by taking the entity as a parameter.
   */
  delete(
    entity: BundleSalesOrderConfirmationBundleParentLines<T>
  ): DeleteRequestBuilder<BundleSalesOrderConfirmationBundleParentLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    confirmationDate?: Moment,
    confirmationNumber?: string,
    salesOrderLineInventoryLotId?: string
  ): DeleteRequestBuilder<BundleSalesOrderConfirmationBundleParentLines<T>, T> {
    return new DeleteRequestBuilder<
      BundleSalesOrderConfirmationBundleParentLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      BundleSalesOrderConfirmationBundleParentLines
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
