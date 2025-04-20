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
import { PurchaseAgreementLineFulfillment } from './PurchaseAgreementLineFulfillment';

/**
 * Request builder class for operations supported on the {@link PurchaseAgreementLineFulfillment} entity.
 */
export class PurchaseAgreementLineFulfillmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseAgreementLineFulfillment<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseAgreementLineFulfillment` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseAgreementLineFulfillment` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseAgreementLineFulfillment<T>, T> {
    return new GetAllRequestBuilder<PurchaseAgreementLineFulfillment<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseAgreementLineFulfillment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseAgreementLineFulfillment`.
   */
  create(
    entity: PurchaseAgreementLineFulfillment<T>
  ): CreateRequestBuilder<PurchaseAgreementLineFulfillment<T>, T> {
    return new CreateRequestBuilder<PurchaseAgreementLineFulfillment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseAgreementLineFulfillment` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseAgreementLineFulfillment.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementLineFulfillment.purchaseAgreementId}.
   * @param lineNumber Key property. See {@link PurchaseAgreementLineFulfillment.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseAgreementLineFulfillment` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PurchaseAgreementLineFulfillment<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseAgreementLineFulfillment<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseAgreementId: purchaseAgreementId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseAgreementLineFulfillment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseAgreementLineFulfillment`.
   */
  update(
    entity: PurchaseAgreementLineFulfillment<T>
  ): UpdateRequestBuilder<PurchaseAgreementLineFulfillment<T>, T> {
    return new UpdateRequestBuilder<PurchaseAgreementLineFulfillment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementLineFulfillment`.
   * @param dataAreaId Key property. See {@link PurchaseAgreementLineFulfillment.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementLineFulfillment.purchaseAgreementId}.
   * @param lineNumber Key property. See {@link PurchaseAgreementLineFulfillment.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementLineFulfillment`.
   */
  delete(
    dataAreaId: string,
    purchaseAgreementId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseAgreementLineFulfillment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementLineFulfillment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementLineFulfillment` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseAgreementLineFulfillment<T>
  ): DeleteRequestBuilder<PurchaseAgreementLineFulfillment<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseAgreementId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseAgreementLineFulfillment<T>, T> {
    return new DeleteRequestBuilder<PurchaseAgreementLineFulfillment<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseAgreementLineFulfillment
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseAgreementId: purchaseAgreementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
