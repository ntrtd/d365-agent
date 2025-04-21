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
import { SalesOrderConfirmationHeaders } from './SalesOrderConfirmationHeaders';

/**
 * Request builder class for operations supported on the {@link SalesOrderConfirmationHeaders} entity.
 */
export class SalesOrderConfirmationHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderConfirmationHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderConfirmationHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderConfirmationHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderConfirmationHeaders<T>, T> {
    return new GetAllRequestBuilder<SalesOrderConfirmationHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderConfirmationHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderConfirmationHeaders`.
   */
  create(
    entity: SalesOrderConfirmationHeaders<T>
  ): CreateRequestBuilder<SalesOrderConfirmationHeaders<T>, T> {
    return new CreateRequestBuilder<SalesOrderConfirmationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderConfirmationHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderConfirmationHeaders.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderConfirmationHeaders.salesOrderNumber}.
   * @param confirmationDate Key property. See {@link SalesOrderConfirmationHeaders.confirmationDate}.
   * @param confirmationNumber Key property. See {@link SalesOrderConfirmationHeaders.confirmationNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderConfirmationHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    confirmationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderConfirmationHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderConfirmationHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber,
        ConfirmationDate: confirmationDate,
        ConfirmationNumber: confirmationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderConfirmationHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderConfirmationHeaders`.
   */
  update(
    entity: SalesOrderConfirmationHeaders<T>
  ): UpdateRequestBuilder<SalesOrderConfirmationHeaders<T>, T> {
    return new UpdateRequestBuilder<SalesOrderConfirmationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderConfirmationHeaders`.
   * @param dataAreaId Key property. See {@link SalesOrderConfirmationHeaders.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderConfirmationHeaders.salesOrderNumber}.
   * @param confirmationDate Key property. See {@link SalesOrderConfirmationHeaders.confirmationDate}.
   * @param confirmationNumber Key property. See {@link SalesOrderConfirmationHeaders.confirmationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderConfirmationHeaders`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    confirmationDate: Moment,
    confirmationNumber: string
  ): DeleteRequestBuilder<SalesOrderConfirmationHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderConfirmationHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderConfirmationHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderConfirmationHeaders<T>
  ): DeleteRequestBuilder<SalesOrderConfirmationHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    confirmationDate?: Moment,
    confirmationNumber?: string
  ): DeleteRequestBuilder<SalesOrderConfirmationHeaders<T>, T> {
    return new DeleteRequestBuilder<SalesOrderConfirmationHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderConfirmationHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            ConfirmationDate: confirmationDate!,
            ConfirmationNumber: confirmationNumber!
          }
    );
  }
}
