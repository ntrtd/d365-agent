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
import { ClmIntegrationPurchaseAgreementLines } from './ClmIntegrationPurchaseAgreementLines';

/**
 * Request builder class for operations supported on the {@link ClmIntegrationPurchaseAgreementLines} entity.
 */
export class ClmIntegrationPurchaseAgreementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T> {
  /**
   * Returns a request builder for querying all `ClmIntegrationPurchaseAgreementLines` entities.
   * @returns A request builder for creating requests to retrieve all `ClmIntegrationPurchaseAgreementLines` entities.
   */
  getAll(): GetAllRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T> {
    return new GetAllRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ClmIntegrationPurchaseAgreementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClmIntegrationPurchaseAgreementLines`.
   */
  create(
    entity: ClmIntegrationPurchaseAgreementLines<T>
  ): CreateRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T> {
    return new CreateRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClmIntegrationPurchaseAgreementLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ClmIntegrationPurchaseAgreementLines.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link ClmIntegrationPurchaseAgreementLines.purchaseAgreementId}.
   * @param lineNumber Key property. See {@link ClmIntegrationPurchaseAgreementLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ClmIntegrationPurchaseAgreementLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T> {
    return new GetByKeyRequestBuilder<
      ClmIntegrationPurchaseAgreementLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      PurchaseAgreementId: purchaseAgreementId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ClmIntegrationPurchaseAgreementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClmIntegrationPurchaseAgreementLines`.
   */
  update(
    entity: ClmIntegrationPurchaseAgreementLines<T>
  ): UpdateRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T> {
    return new UpdateRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationPurchaseAgreementLines`.
   * @param dataAreaId Key property. See {@link ClmIntegrationPurchaseAgreementLines.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link ClmIntegrationPurchaseAgreementLines.purchaseAgreementId}.
   * @param lineNumber Key property. See {@link ClmIntegrationPurchaseAgreementLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationPurchaseAgreementLines`.
   */
  delete(
    dataAreaId: string,
    purchaseAgreementId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationPurchaseAgreementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationPurchaseAgreementLines` by taking the entity as a parameter.
   */
  delete(
    entity: ClmIntegrationPurchaseAgreementLines<T>
  ): DeleteRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseAgreementId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T> {
    return new DeleteRequestBuilder<ClmIntegrationPurchaseAgreementLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ClmIntegrationPurchaseAgreementLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseAgreementId: purchaseAgreementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
