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
import { ElectronicPaymentTypes } from './ElectronicPaymentTypes';

/**
 * Request builder class for operations supported on the {@link ElectronicPaymentTypes} entity.
 */
export class ElectronicPaymentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicPaymentTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicPaymentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicPaymentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicPaymentTypes<T>, T> {
    return new GetAllRequestBuilder<ElectronicPaymentTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ElectronicPaymentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicPaymentTypes`.
   */
  create(
    entity: ElectronicPaymentTypes<T>
  ): CreateRequestBuilder<ElectronicPaymentTypes<T>, T> {
    return new CreateRequestBuilder<ElectronicPaymentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ElectronicPaymentTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicPaymentTypes.dataAreaId}.
   * @param paymentType Key property. See {@link ElectronicPaymentTypes.paymentType}.
   * @returns A request builder for creating requests to retrieve one `ElectronicPaymentTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ElectronicPaymentTypes<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicPaymentTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PaymentType: paymentType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicPaymentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicPaymentTypes`.
   */
  update(
    entity: ElectronicPaymentTypes<T>
  ): UpdateRequestBuilder<ElectronicPaymentTypes<T>, T> {
    return new UpdateRequestBuilder<ElectronicPaymentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentTypes`.
   * @param dataAreaId Key property. See {@link ElectronicPaymentTypes.dataAreaId}.
   * @param paymentType Key property. See {@link ElectronicPaymentTypes.paymentType}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentTypes`.
   */
  delete(
    dataAreaId: string,
    paymentType: string
  ): DeleteRequestBuilder<ElectronicPaymentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicPaymentTypes<T>
  ): DeleteRequestBuilder<ElectronicPaymentTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentType?: string
  ): DeleteRequestBuilder<ElectronicPaymentTypes<T>, T> {
    return new DeleteRequestBuilder<ElectronicPaymentTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicPaymentTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentType: paymentType!
          }
    );
  }
}
