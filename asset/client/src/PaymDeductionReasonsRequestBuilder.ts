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
import { PaymDeductionReasons } from './PaymDeductionReasons';

/**
 * Request builder class for operations supported on the {@link PaymDeductionReasons} entity.
 */
export class PaymDeductionReasonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymDeductionReasons<T>, T> {
  /**
   * Returns a request builder for querying all `PaymDeductionReasons` entities.
   * @returns A request builder for creating requests to retrieve all `PaymDeductionReasons` entities.
   */
  getAll(): GetAllRequestBuilder<PaymDeductionReasons<T>, T> {
    return new GetAllRequestBuilder<PaymDeductionReasons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymDeductionReasons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymDeductionReasons`.
   */
  create(
    entity: PaymDeductionReasons<T>
  ): CreateRequestBuilder<PaymDeductionReasons<T>, T> {
    return new CreateRequestBuilder<PaymDeductionReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymDeductionReasons` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymDeductionReasons.dataAreaId}.
   * @param claimReasonId Key property. See {@link PaymDeductionReasons.claimReasonId}.
   * @returns A request builder for creating requests to retrieve one `PaymDeductionReasons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    claimReasonId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymDeductionReasons<T>, T> {
    return new GetByKeyRequestBuilder<PaymDeductionReasons<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ClaimReasonId: claimReasonId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymDeductionReasons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymDeductionReasons`.
   */
  update(
    entity: PaymDeductionReasons<T>
  ): UpdateRequestBuilder<PaymDeductionReasons<T>, T> {
    return new UpdateRequestBuilder<PaymDeductionReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymDeductionReasons`.
   * @param dataAreaId Key property. See {@link PaymDeductionReasons.dataAreaId}.
   * @param claimReasonId Key property. See {@link PaymDeductionReasons.claimReasonId}.
   * @returns A request builder for creating requests that delete an entity of type `PaymDeductionReasons`.
   */
  delete(
    dataAreaId: string,
    claimReasonId: string
  ): DeleteRequestBuilder<PaymDeductionReasons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymDeductionReasons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymDeductionReasons` by taking the entity as a parameter.
   */
  delete(
    entity: PaymDeductionReasons<T>
  ): DeleteRequestBuilder<PaymDeductionReasons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    claimReasonId?: string
  ): DeleteRequestBuilder<PaymDeductionReasons<T>, T> {
    return new DeleteRequestBuilder<PaymDeductionReasons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymDeductionReasons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ClaimReasonId: claimReasonId!
          }
    );
  }
}
