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
import { PaymentCalendars } from './PaymentCalendars';

/**
 * Request builder class for operations supported on the {@link PaymentCalendars} entity.
 */
export class PaymentCalendarsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentCalendars<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentCalendars` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentCalendars` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentCalendars<T>, T> {
    return new GetAllRequestBuilder<PaymentCalendars<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentCalendars` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentCalendars`.
   */
  create(
    entity: PaymentCalendars<T>
  ): CreateRequestBuilder<PaymentCalendars<T>, T> {
    return new CreateRequestBuilder<PaymentCalendars<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentCalendars` entity based on its keys.
   * @param name Key property. See {@link PaymentCalendars.name}.
   * @returns A request builder for creating requests to retrieve one `PaymentCalendars` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentCalendars<T>, T> {
    return new GetByKeyRequestBuilder<PaymentCalendars<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentCalendars`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentCalendars`.
   */
  update(
    entity: PaymentCalendars<T>
  ): UpdateRequestBuilder<PaymentCalendars<T>, T> {
    return new UpdateRequestBuilder<PaymentCalendars<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentCalendars`.
   * @param name Key property. See {@link PaymentCalendars.name}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentCalendars`.
   */
  delete(name: string): DeleteRequestBuilder<PaymentCalendars<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentCalendars`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentCalendars` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentCalendars<T>
  ): DeleteRequestBuilder<PaymentCalendars<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<PaymentCalendars<T>, T> {
    return new DeleteRequestBuilder<PaymentCalendars<T>, T>(
      this.entityApi,
      nameOrEntity instanceof PaymentCalendars
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
