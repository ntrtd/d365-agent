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
import { SalesOrderConfirmationLines } from './SalesOrderConfirmationLines';

/**
 * Request builder class for operations supported on the {@link SalesOrderConfirmationLines} entity.
 */
export class SalesOrderConfirmationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderConfirmationLines<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderConfirmationLines` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderConfirmationLines` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderConfirmationLines<T>, T> {
    return new GetAllRequestBuilder<SalesOrderConfirmationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderConfirmationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderConfirmationLines`.
   */
  create(
    entity: SalesOrderConfirmationLines<T>
  ): CreateRequestBuilder<SalesOrderConfirmationLines<T>, T> {
    return new CreateRequestBuilder<SalesOrderConfirmationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderConfirmationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderConfirmationLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderConfirmationLines.salesOrderNumber}.
   * @param confirmationDate Key property. See {@link SalesOrderConfirmationLines.confirmationDate}.
   * @param confirmationNumber Key property. See {@link SalesOrderConfirmationLines.confirmationNumber}.
   * @param lineNumber Key property. See {@link SalesOrderConfirmationLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderConfirmationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    confirmationNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SalesOrderConfirmationLines<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderConfirmationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber,
        ConfirmationDate: confirmationDate,
        ConfirmationNumber: confirmationNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderConfirmationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderConfirmationLines`.
   */
  update(
    entity: SalesOrderConfirmationLines<T>
  ): UpdateRequestBuilder<SalesOrderConfirmationLines<T>, T> {
    return new UpdateRequestBuilder<SalesOrderConfirmationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderConfirmationLines`.
   * @param dataAreaId Key property. See {@link SalesOrderConfirmationLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderConfirmationLines.salesOrderNumber}.
   * @param confirmationDate Key property. See {@link SalesOrderConfirmationLines.confirmationDate}.
   * @param confirmationNumber Key property. See {@link SalesOrderConfirmationLines.confirmationNumber}.
   * @param lineNumber Key property. See {@link SalesOrderConfirmationLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderConfirmationLines`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    confirmationDate: Moment,
    confirmationNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<SalesOrderConfirmationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderConfirmationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderConfirmationLines` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderConfirmationLines<T>
  ): DeleteRequestBuilder<SalesOrderConfirmationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    confirmationDate?: Moment,
    confirmationNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<SalesOrderConfirmationLines<T>, T> {
    return new DeleteRequestBuilder<SalesOrderConfirmationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderConfirmationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            ConfirmationDate: confirmationDate!,
            ConfirmationNumber: confirmationNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
