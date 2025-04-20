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
import { PaymentInstructions } from './PaymentInstructions';

/**
 * Request builder class for operations supported on the {@link PaymentInstructions} entity.
 */
export class PaymentInstructionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentInstructions<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentInstructions` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInstructions` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInstructions<T>, T> {
    return new GetAllRequestBuilder<PaymentInstructions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentInstructions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInstructions`.
   */
  create(
    entity: PaymentInstructions<T>
  ): CreateRequestBuilder<PaymentInstructions<T>, T> {
    return new CreateRequestBuilder<PaymentInstructions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentInstructions` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentInstructions.dataAreaId}.
   * @param paymentInstructionCode Key property. See {@link PaymentInstructions.paymentInstructionCode}.
   * @returns A request builder for creating requests to retrieve one `PaymentInstructions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentInstructionCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentInstructions<T>, T> {
    return new GetByKeyRequestBuilder<PaymentInstructions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PaymentInstructionCode: paymentInstructionCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInstructions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInstructions`.
   */
  update(
    entity: PaymentInstructions<T>
  ): UpdateRequestBuilder<PaymentInstructions<T>, T> {
    return new UpdateRequestBuilder<PaymentInstructions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInstructions`.
   * @param dataAreaId Key property. See {@link PaymentInstructions.dataAreaId}.
   * @param paymentInstructionCode Key property. See {@link PaymentInstructions.paymentInstructionCode}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInstructions`.
   */
  delete(
    dataAreaId: string,
    paymentInstructionCode: string
  ): DeleteRequestBuilder<PaymentInstructions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInstructions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInstructions` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentInstructions<T>
  ): DeleteRequestBuilder<PaymentInstructions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentInstructionCode?: string
  ): DeleteRequestBuilder<PaymentInstructions<T>, T> {
    return new DeleteRequestBuilder<PaymentInstructions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentInstructions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentInstructionCode: paymentInstructionCode!
          }
    );
  }
}
