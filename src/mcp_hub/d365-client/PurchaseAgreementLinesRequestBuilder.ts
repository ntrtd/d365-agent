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
import { PurchaseAgreementLines } from './PurchaseAgreementLines';

/**
 * Request builder class for operations supported on the {@link PurchaseAgreementLines} entity.
 */
export class PurchaseAgreementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseAgreementLines<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseAgreementLines` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseAgreementLines` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseAgreementLines<T>, T> {
    return new GetAllRequestBuilder<PurchaseAgreementLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseAgreementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseAgreementLines`.
   */
  create(
    entity: PurchaseAgreementLines<T>
  ): CreateRequestBuilder<PurchaseAgreementLines<T>, T> {
    return new CreateRequestBuilder<PurchaseAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseAgreementLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseAgreementLines.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementLines.purchaseAgreementId}.
   * @param lineNumber Key property. See {@link PurchaseAgreementLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseAgreementLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PurchaseAgreementLines<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseAgreementLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseAgreementId: purchaseAgreementId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseAgreementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseAgreementLines`.
   */
  update(
    entity: PurchaseAgreementLines<T>
  ): UpdateRequestBuilder<PurchaseAgreementLines<T>, T> {
    return new UpdateRequestBuilder<PurchaseAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementLines`.
   * @param dataAreaId Key property. See {@link PurchaseAgreementLines.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementLines.purchaseAgreementId}.
   * @param lineNumber Key property. See {@link PurchaseAgreementLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementLines`.
   */
  delete(
    dataAreaId: string,
    purchaseAgreementId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseAgreementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementLines` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseAgreementLines<T>
  ): DeleteRequestBuilder<PurchaseAgreementLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseAgreementId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseAgreementLines<T>, T> {
    return new DeleteRequestBuilder<PurchaseAgreementLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseAgreementLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseAgreementId: purchaseAgreementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
