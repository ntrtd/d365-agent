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
import { PaymentSchedules } from './PaymentSchedules';

/**
 * Request builder class for operations supported on the {@link PaymentSchedules} entity.
 */
export class PaymentSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentSchedules<T>, T> {
    return new GetAllRequestBuilder<PaymentSchedules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentSchedules`.
   */
  create(
    entity: PaymentSchedules<T>
  ): CreateRequestBuilder<PaymentSchedules<T>, T> {
    return new CreateRequestBuilder<PaymentSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentSchedules.dataAreaId}.
   * @param name Key property. See {@link PaymentSchedules.name}.
   * @returns A request builder for creating requests to retrieve one `PaymentSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentSchedules<T>, T> {
    return new GetByKeyRequestBuilder<PaymentSchedules<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentSchedules`.
   */
  update(
    entity: PaymentSchedules<T>
  ): UpdateRequestBuilder<PaymentSchedules<T>, T> {
    return new UpdateRequestBuilder<PaymentSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentSchedules`.
   * @param dataAreaId Key property. See {@link PaymentSchedules.dataAreaId}.
   * @param name Key property. See {@link PaymentSchedules.name}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentSchedules`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<PaymentSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentSchedules<T>
  ): DeleteRequestBuilder<PaymentSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<PaymentSchedules<T>, T> {
    return new DeleteRequestBuilder<PaymentSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
