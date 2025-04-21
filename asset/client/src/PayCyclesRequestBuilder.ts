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
import { PayCycles } from './PayCycles';

/**
 * Request builder class for operations supported on the {@link PayCycles} entity.
 */
export class PayCyclesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayCycles<T>, T> {
  /**
   * Returns a request builder for querying all `PayCycles` entities.
   * @returns A request builder for creating requests to retrieve all `PayCycles` entities.
   */
  getAll(): GetAllRequestBuilder<PayCycles<T>, T> {
    return new GetAllRequestBuilder<PayCycles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayCycles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayCycles`.
   */
  create(entity: PayCycles<T>): CreateRequestBuilder<PayCycles<T>, T> {
    return new CreateRequestBuilder<PayCycles<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PayCycles` entity based on its keys.
   * @param payCycleId Key property. See {@link PayCycles.payCycleId}.
   * @returns A request builder for creating requests to retrieve one `PayCycles` entity based on its keys.
   */
  getByKey(
    payCycleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayCycles<T>, T> {
    return new GetByKeyRequestBuilder<PayCycles<T>, T>(this.entityApi, {
      PayCycleId: payCycleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayCycles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayCycles`.
   */
  update(entity: PayCycles<T>): UpdateRequestBuilder<PayCycles<T>, T> {
    return new UpdateRequestBuilder<PayCycles<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayCycles`.
   * @param payCycleId Key property. See {@link PayCycles.payCycleId}.
   * @returns A request builder for creating requests that delete an entity of type `PayCycles`.
   */
  delete(payCycleId: string): DeleteRequestBuilder<PayCycles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayCycles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayCycles` by taking the entity as a parameter.
   */
  delete(entity: PayCycles<T>): DeleteRequestBuilder<PayCycles<T>, T>;
  delete(payCycleIdOrEntity: any): DeleteRequestBuilder<PayCycles<T>, T> {
    return new DeleteRequestBuilder<PayCycles<T>, T>(
      this.entityApi,
      payCycleIdOrEntity instanceof PayCycles
        ? payCycleIdOrEntity
        : { PayCycleId: payCycleIdOrEntity! }
    );
  }
}
