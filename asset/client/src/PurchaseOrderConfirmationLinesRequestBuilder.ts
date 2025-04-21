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
import { PurchaseOrderConfirmationLines } from './PurchaseOrderConfirmationLines';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderConfirmationLines} entity.
 */
export class PurchaseOrderConfirmationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderConfirmationLines<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderConfirmationLines` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderConfirmationLines` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderConfirmationLines<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderConfirmationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderConfirmationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderConfirmationLines`.
   */
  create(
    entity: PurchaseOrderConfirmationLines<T>
  ): CreateRequestBuilder<PurchaseOrderConfirmationLines<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderConfirmationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderConfirmationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderConfirmationLines.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderConfirmationLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderConfirmationLines.lineNumber}.
   * @param confirmationNumber Key property. See {@link PurchaseOrderConfirmationLines.confirmationNumber}.
   * @param confirmationDate Key property. See {@link PurchaseOrderConfirmationLines.confirmationDate}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderConfirmationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>,
    confirmationNumber: DeserializedType<T, 'Edm.String'>,
    confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PurchaseOrderConfirmationLines<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderConfirmationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber,
        LineNumber: lineNumber,
        ConfirmationNumber: confirmationNumber,
        ConfirmationDate: confirmationDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderConfirmationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderConfirmationLines`.
   */
  update(
    entity: PurchaseOrderConfirmationLines<T>
  ): UpdateRequestBuilder<PurchaseOrderConfirmationLines<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderConfirmationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderConfirmationLines`.
   * @param dataAreaId Key property. See {@link PurchaseOrderConfirmationLines.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderConfirmationLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderConfirmationLines.lineNumber}.
   * @param confirmationNumber Key property. See {@link PurchaseOrderConfirmationLines.confirmationNumber}.
   * @param confirmationDate Key property. See {@link PurchaseOrderConfirmationLines.confirmationDate}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderConfirmationLines`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string,
    lineNumber: BigNumber,
    confirmationNumber: string,
    confirmationDate: Moment
  ): DeleteRequestBuilder<PurchaseOrderConfirmationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderConfirmationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderConfirmationLines` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderConfirmationLines<T>
  ): DeleteRequestBuilder<PurchaseOrderConfirmationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string,
    lineNumber?: BigNumber,
    confirmationNumber?: string,
    confirmationDate?: Moment
  ): DeleteRequestBuilder<PurchaseOrderConfirmationLines<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderConfirmationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderConfirmationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            LineNumber: lineNumber!,
            ConfirmationNumber: confirmationNumber!,
            ConfirmationDate: confirmationDate!
          }
    );
  }
}
