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
import { PayIntV1Workers } from './PayIntV1Workers';

/**
 * Request builder class for operations supported on the {@link PayIntV1Workers} entity.
 */
export class PayIntV1WorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1Workers<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1Workers` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1Workers` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1Workers<T>, T> {
    return new GetAllRequestBuilder<PayIntV1Workers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1Workers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1Workers`.
   */
  create(
    entity: PayIntV1Workers<T>
  ): CreateRequestBuilder<PayIntV1Workers<T>, T> {
    return new CreateRequestBuilder<PayIntV1Workers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1Workers` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1Workers.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1Workers` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1Workers<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1Workers<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1Workers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1Workers`.
   */
  update(
    entity: PayIntV1Workers<T>
  ): UpdateRequestBuilder<PayIntV1Workers<T>, T> {
    return new UpdateRequestBuilder<PayIntV1Workers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1Workers`.
   * @param personnelNumber Key property. See {@link PayIntV1Workers.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1Workers`.
   */
  delete(personnelNumber: string): DeleteRequestBuilder<PayIntV1Workers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1Workers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1Workers` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1Workers<T>
  ): DeleteRequestBuilder<PayIntV1Workers<T>, T>;
  delete(
    personnelNumberOrEntity: any
  ): DeleteRequestBuilder<PayIntV1Workers<T>, T> {
    return new DeleteRequestBuilder<PayIntV1Workers<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1Workers
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
