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
import { PurchaseOrderConfirmationHeaders } from './PurchaseOrderConfirmationHeaders';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderConfirmationHeaders} entity.
 */
export class PurchaseOrderConfirmationHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderConfirmationHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderConfirmationHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderConfirmationHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderConfirmationHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderConfirmationHeaders`.
   */
  create(
    entity: PurchaseOrderConfirmationHeaders<T>
  ): CreateRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderConfirmationHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderConfirmationHeaders.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderConfirmationHeaders.purchaseOrderNumber}.
   * @param confirmationNumber Key property. See {@link PurchaseOrderConfirmationHeaders.confirmationNumber}.
   * @param confirmationDate Key property. See {@link PurchaseOrderConfirmationHeaders.confirmationDate}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderConfirmationHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    confirmationNumber: DeserializedType<T, 'Edm.String'>,
    confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber,
        ConfirmationNumber: confirmationNumber,
        ConfirmationDate: confirmationDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderConfirmationHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderConfirmationHeaders`.
   */
  update(
    entity: PurchaseOrderConfirmationHeaders<T>
  ): UpdateRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderConfirmationHeaders`.
   * @param dataAreaId Key property. See {@link PurchaseOrderConfirmationHeaders.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderConfirmationHeaders.purchaseOrderNumber}.
   * @param confirmationNumber Key property. See {@link PurchaseOrderConfirmationHeaders.confirmationNumber}.
   * @param confirmationDate Key property. See {@link PurchaseOrderConfirmationHeaders.confirmationDate}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderConfirmationHeaders`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string,
    confirmationNumber: string,
    confirmationDate: Moment
  ): DeleteRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderConfirmationHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderConfirmationHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderConfirmationHeaders<T>
  ): DeleteRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string,
    confirmationNumber?: string,
    confirmationDate?: Moment
  ): DeleteRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderConfirmationHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderConfirmationHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            ConfirmationNumber: confirmationNumber!,
            ConfirmationDate: confirmationDate!
          }
    );
  }
}
