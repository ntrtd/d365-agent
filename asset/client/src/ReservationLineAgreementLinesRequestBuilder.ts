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
import { ReservationLineAgreementLines } from './ReservationLineAgreementLines';

/**
 * Request builder class for operations supported on the {@link ReservationLineAgreementLines} entity.
 */
export class ReservationLineAgreementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReservationLineAgreementLines<T>, T> {
  /**
   * Returns a request builder for querying all `ReservationLineAgreementLines` entities.
   * @returns A request builder for creating requests to retrieve all `ReservationLineAgreementLines` entities.
   */
  getAll(): GetAllRequestBuilder<ReservationLineAgreementLines<T>, T> {
    return new GetAllRequestBuilder<ReservationLineAgreementLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReservationLineAgreementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReservationLineAgreementLines`.
   */
  create(
    entity: ReservationLineAgreementLines<T>
  ): CreateRequestBuilder<ReservationLineAgreementLines<T>, T> {
    return new CreateRequestBuilder<ReservationLineAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReservationLineAgreementLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReservationLineAgreementLines.dataAreaId}.
   * @param purchaseNumberSequence Key property. See {@link ReservationLineAgreementLines.purchaseNumberSequence}.
   * @param agreementLineNumber Key property. See {@link ReservationLineAgreementLines.agreementLineNumber}.
   * @param budgetReservationDocumentNumber Key property. See {@link ReservationLineAgreementLines.budgetReservationDocumentNumber}.
   * @param budgetReservationLineNumber Key property. See {@link ReservationLineAgreementLines.budgetReservationLineNumber}.
   * @returns A request builder for creating requests to retrieve one `ReservationLineAgreementLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseNumberSequence: DeserializedType<T, 'Edm.String'>,
    agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    budgetReservationDocumentNumber: DeserializedType<T, 'Edm.String'>,
    budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ReservationLineAgreementLines<T>, T> {
    return new GetByKeyRequestBuilder<ReservationLineAgreementLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseNumberSequence: purchaseNumberSequence,
        AgreementLineNumber: agreementLineNumber,
        BudgetReservationDocumentNumber: budgetReservationDocumentNumber,
        BudgetReservationLineNumber: budgetReservationLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReservationLineAgreementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReservationLineAgreementLines`.
   */
  update(
    entity: ReservationLineAgreementLines<T>
  ): UpdateRequestBuilder<ReservationLineAgreementLines<T>, T> {
    return new UpdateRequestBuilder<ReservationLineAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReservationLineAgreementLines`.
   * @param dataAreaId Key property. See {@link ReservationLineAgreementLines.dataAreaId}.
   * @param purchaseNumberSequence Key property. See {@link ReservationLineAgreementLines.purchaseNumberSequence}.
   * @param agreementLineNumber Key property. See {@link ReservationLineAgreementLines.agreementLineNumber}.
   * @param budgetReservationDocumentNumber Key property. See {@link ReservationLineAgreementLines.budgetReservationDocumentNumber}.
   * @param budgetReservationLineNumber Key property. See {@link ReservationLineAgreementLines.budgetReservationLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReservationLineAgreementLines`.
   */
  delete(
    dataAreaId: string,
    purchaseNumberSequence: string,
    agreementLineNumber: BigNumber,
    budgetReservationDocumentNumber: string,
    budgetReservationLineNumber: number
  ): DeleteRequestBuilder<ReservationLineAgreementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReservationLineAgreementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReservationLineAgreementLines` by taking the entity as a parameter.
   */
  delete(
    entity: ReservationLineAgreementLines<T>
  ): DeleteRequestBuilder<ReservationLineAgreementLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseNumberSequence?: string,
    agreementLineNumber?: BigNumber,
    budgetReservationDocumentNumber?: string,
    budgetReservationLineNumber?: number
  ): DeleteRequestBuilder<ReservationLineAgreementLines<T>, T> {
    return new DeleteRequestBuilder<ReservationLineAgreementLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReservationLineAgreementLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseNumberSequence: purchaseNumberSequence!,
            AgreementLineNumber: agreementLineNumber!,
            BudgetReservationDocumentNumber: budgetReservationDocumentNumber!,
            BudgetReservationLineNumber: budgetReservationLineNumber!
          }
    );
  }
}
