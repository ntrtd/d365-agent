/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { RetailReceiptMasks } from './RetailReceiptMasks';
import { RetailReceiptTransaction } from './RetailReceiptTransaction';

/**
 * Request builder class for operations supported on the {@link RetailReceiptMasks} entity.
 */
export class RetailReceiptMasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailReceiptMasks<T>, T> {
  /**
   * Returns a request builder for querying all `RetailReceiptMasks` entities.
   * @returns A request builder for creating requests to retrieve all `RetailReceiptMasks` entities.
   */
  getAll(): GetAllRequestBuilder<RetailReceiptMasks<T>, T> {
    return new GetAllRequestBuilder<RetailReceiptMasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailReceiptMasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailReceiptMasks`.
   */
  create(
    entity: RetailReceiptMasks<T>
  ): CreateRequestBuilder<RetailReceiptMasks<T>, T> {
    return new CreateRequestBuilder<RetailReceiptMasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailReceiptMasks` entity based on its keys.
   * @param functionalityProfileId Key property. See {@link RetailReceiptMasks.functionalityProfileId}.
   * @param receiptTransactionType Key property. See {@link RetailReceiptMasks.receiptTransactionType}.
   * @returns A request builder for creating requests to retrieve one `RetailReceiptMasks` entity based on its keys.
   */
  getByKey(
    functionalityProfileId: DeserializedType<T, 'Edm.String'>,
    receiptTransactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailReceiptTransaction'
    >
  ): GetByKeyRequestBuilder<RetailReceiptMasks<T>, T> {
    return new GetByKeyRequestBuilder<RetailReceiptMasks<T>, T>(
      this.entityApi,
      {
        FunctionalityProfileId: functionalityProfileId,
        ReceiptTransactionType: receiptTransactionType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailReceiptMasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailReceiptMasks`.
   */
  update(
    entity: RetailReceiptMasks<T>
  ): UpdateRequestBuilder<RetailReceiptMasks<T>, T> {
    return new UpdateRequestBuilder<RetailReceiptMasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailReceiptMasks`.
   * @param functionalityProfileId Key property. See {@link RetailReceiptMasks.functionalityProfileId}.
   * @param receiptTransactionType Key property. See {@link RetailReceiptMasks.receiptTransactionType}.
   * @returns A request builder for creating requests that delete an entity of type `RetailReceiptMasks`.
   */
  delete(
    functionalityProfileId: string,
    receiptTransactionType: RetailReceiptTransaction
  ): DeleteRequestBuilder<RetailReceiptMasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailReceiptMasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailReceiptMasks` by taking the entity as a parameter.
   */
  delete(
    entity: RetailReceiptMasks<T>
  ): DeleteRequestBuilder<RetailReceiptMasks<T>, T>;
  delete(
    functionalityProfileIdOrEntity: any,
    receiptTransactionType?: RetailReceiptTransaction
  ): DeleteRequestBuilder<RetailReceiptMasks<T>, T> {
    return new DeleteRequestBuilder<RetailReceiptMasks<T>, T>(
      this.entityApi,
      functionalityProfileIdOrEntity instanceof RetailReceiptMasks
        ? functionalityProfileIdOrEntity
        : {
            FunctionalityProfileId: functionalityProfileIdOrEntity!,
            ReceiptTransactionType: receiptTransactionType!
          }
    );
  }
}
