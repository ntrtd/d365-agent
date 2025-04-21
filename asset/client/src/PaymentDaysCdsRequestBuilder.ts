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
import { PaymentDaysCds } from './PaymentDaysCds';

/**
 * Request builder class for operations supported on the {@link PaymentDaysCds} entity.
 */
export class PaymentDaysCdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentDaysCds<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentDaysCds` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentDaysCds` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentDaysCds<T>, T> {
    return new GetAllRequestBuilder<PaymentDaysCds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentDaysCds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentDaysCds`.
   */
  create(
    entity: PaymentDaysCds<T>
  ): CreateRequestBuilder<PaymentDaysCds<T>, T> {
    return new CreateRequestBuilder<PaymentDaysCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentDaysCds` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentDaysCds.dataAreaId}.
   * @param name Key property. See {@link PaymentDaysCds.name}.
   * @returns A request builder for creating requests to retrieve one `PaymentDaysCds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentDaysCds<T>, T> {
    return new GetByKeyRequestBuilder<PaymentDaysCds<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentDaysCds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentDaysCds`.
   */
  update(
    entity: PaymentDaysCds<T>
  ): UpdateRequestBuilder<PaymentDaysCds<T>, T> {
    return new UpdateRequestBuilder<PaymentDaysCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentDaysCds`.
   * @param dataAreaId Key property. See {@link PaymentDaysCds.dataAreaId}.
   * @param name Key property. See {@link PaymentDaysCds.name}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentDaysCds`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<PaymentDaysCds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentDaysCds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentDaysCds` by taking the entity as a parameter.
   */
  delete(entity: PaymentDaysCds<T>): DeleteRequestBuilder<PaymentDaysCds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<PaymentDaysCds<T>, T> {
    return new DeleteRequestBuilder<PaymentDaysCds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentDaysCds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
