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
import { PurchaseAgreementLinesForAi } from './PurchaseAgreementLinesForAi';

/**
 * Request builder class for operations supported on the {@link PurchaseAgreementLinesForAi} entity.
 */
export class PurchaseAgreementLinesForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseAgreementLinesForAi<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseAgreementLinesForAi` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseAgreementLinesForAi` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseAgreementLinesForAi<T>, T> {
    return new GetAllRequestBuilder<PurchaseAgreementLinesForAi<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseAgreementLinesForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseAgreementLinesForAi`.
   */
  create(
    entity: PurchaseAgreementLinesForAi<T>
  ): CreateRequestBuilder<PurchaseAgreementLinesForAi<T>, T> {
    return new CreateRequestBuilder<PurchaseAgreementLinesForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseAgreementLinesForAi` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseAgreementLinesForAi.dataAreaId}.
   * @param lineNumber Key property. See {@link PurchaseAgreementLinesForAi.lineNumber}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementLinesForAi.purchaseAgreementId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseAgreementLinesForAi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseAgreementLinesForAi<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseAgreementLinesForAi<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNumber: lineNumber,
        PurchaseAgreementId: purchaseAgreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseAgreementLinesForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseAgreementLinesForAi`.
   */
  update(
    entity: PurchaseAgreementLinesForAi<T>
  ): UpdateRequestBuilder<PurchaseAgreementLinesForAi<T>, T> {
    return new UpdateRequestBuilder<PurchaseAgreementLinesForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementLinesForAi`.
   * @param dataAreaId Key property. See {@link PurchaseAgreementLinesForAi.dataAreaId}.
   * @param lineNumber Key property. See {@link PurchaseAgreementLinesForAi.lineNumber}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementLinesForAi.purchaseAgreementId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementLinesForAi`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    purchaseAgreementId: string
  ): DeleteRequestBuilder<PurchaseAgreementLinesForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementLinesForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementLinesForAi` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseAgreementLinesForAi<T>
  ): DeleteRequestBuilder<PurchaseAgreementLinesForAi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    purchaseAgreementId?: string
  ): DeleteRequestBuilder<PurchaseAgreementLinesForAi<T>, T> {
    return new DeleteRequestBuilder<PurchaseAgreementLinesForAi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseAgreementLinesForAi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            PurchaseAgreementId: purchaseAgreementId!
          }
    );
  }
}
