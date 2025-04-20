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
import { PurchaseAgreementLinesV2 } from './PurchaseAgreementLinesV2';

/**
 * Request builder class for operations supported on the {@link PurchaseAgreementLinesV2} entity.
 */
export class PurchaseAgreementLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseAgreementLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseAgreementLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseAgreementLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseAgreementLinesV2<T>, T> {
    return new GetAllRequestBuilder<PurchaseAgreementLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseAgreementLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseAgreementLinesV2`.
   */
  create(
    entity: PurchaseAgreementLinesV2<T>
  ): CreateRequestBuilder<PurchaseAgreementLinesV2<T>, T> {
    return new CreateRequestBuilder<PurchaseAgreementLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseAgreementLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseAgreementLinesV2.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementLinesV2.purchaseAgreementId}.
   * @param lineNumber Key property. See {@link PurchaseAgreementLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseAgreementLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PurchaseAgreementLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseAgreementLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseAgreementId: purchaseAgreementId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseAgreementLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseAgreementLinesV2`.
   */
  update(
    entity: PurchaseAgreementLinesV2<T>
  ): UpdateRequestBuilder<PurchaseAgreementLinesV2<T>, T> {
    return new UpdateRequestBuilder<PurchaseAgreementLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementLinesV2`.
   * @param dataAreaId Key property. See {@link PurchaseAgreementLinesV2.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementLinesV2.purchaseAgreementId}.
   * @param lineNumber Key property. See {@link PurchaseAgreementLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementLinesV2`.
   */
  delete(
    dataAreaId: string,
    purchaseAgreementId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseAgreementLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseAgreementLinesV2<T>
  ): DeleteRequestBuilder<PurchaseAgreementLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseAgreementId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseAgreementLinesV2<T>, T> {
    return new DeleteRequestBuilder<PurchaseAgreementLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseAgreementLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseAgreementId: purchaseAgreementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
