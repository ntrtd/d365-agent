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
import { PurchaseAgreementConfirmationLines } from './PurchaseAgreementConfirmationLines';

/**
 * Request builder class for operations supported on the {@link PurchaseAgreementConfirmationLines} entity.
 */
export class PurchaseAgreementConfirmationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseAgreementConfirmationLines<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseAgreementConfirmationLines` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseAgreementConfirmationLines` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseAgreementConfirmationLines<T>, T> {
    return new GetAllRequestBuilder<PurchaseAgreementConfirmationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseAgreementConfirmationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseAgreementConfirmationLines`.
   */
  create(
    entity: PurchaseAgreementConfirmationLines<T>
  ): CreateRequestBuilder<PurchaseAgreementConfirmationLines<T>, T> {
    return new CreateRequestBuilder<PurchaseAgreementConfirmationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseAgreementConfirmationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseAgreementConfirmationLines.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementConfirmationLines.purchaseAgreementId}.
   * @param confirmationNumber Key property. See {@link PurchaseAgreementConfirmationLines.confirmationNumber}.
   * @param lineNumber Key property. See {@link PurchaseAgreementConfirmationLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseAgreementConfirmationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>,
    confirmationNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PurchaseAgreementConfirmationLines<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseAgreementConfirmationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseAgreementId: purchaseAgreementId,
        ConfirmationNumber: confirmationNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseAgreementConfirmationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseAgreementConfirmationLines`.
   */
  update(
    entity: PurchaseAgreementConfirmationLines<T>
  ): UpdateRequestBuilder<PurchaseAgreementConfirmationLines<T>, T> {
    return new UpdateRequestBuilder<PurchaseAgreementConfirmationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementConfirmationLines`.
   * @param dataAreaId Key property. See {@link PurchaseAgreementConfirmationLines.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementConfirmationLines.purchaseAgreementId}.
   * @param confirmationNumber Key property. See {@link PurchaseAgreementConfirmationLines.confirmationNumber}.
   * @param lineNumber Key property. See {@link PurchaseAgreementConfirmationLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementConfirmationLines`.
   */
  delete(
    dataAreaId: string,
    purchaseAgreementId: string,
    confirmationNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseAgreementConfirmationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementConfirmationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementConfirmationLines` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseAgreementConfirmationLines<T>
  ): DeleteRequestBuilder<PurchaseAgreementConfirmationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseAgreementId?: string,
    confirmationNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseAgreementConfirmationLines<T>, T> {
    return new DeleteRequestBuilder<PurchaseAgreementConfirmationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseAgreementConfirmationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseAgreementId: purchaseAgreementId!,
            ConfirmationNumber: confirmationNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
