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
import { InvoiceLegalEntities } from './InvoiceLegalEntities';

/**
 * Request builder class for operations supported on the {@link InvoiceLegalEntities} entity.
 */
export class InvoiceLegalEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InvoiceLegalEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InvoiceLegalEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InvoiceLegalEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InvoiceLegalEntities<T>, T> {
    return new GetAllRequestBuilder<InvoiceLegalEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InvoiceLegalEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InvoiceLegalEntities`.
   */
  create(
    entity: InvoiceLegalEntities<T>
  ): CreateRequestBuilder<InvoiceLegalEntities<T>, T> {
    return new CreateRequestBuilder<InvoiceLegalEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InvoiceLegalEntities` entity based on its keys.
   * @param selected Key property. See {@link InvoiceLegalEntities.selected}.
   * @returns A request builder for creating requests to retrieve one `InvoiceLegalEntities` entity based on its keys.
   */
  getByKey(
    selected: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InvoiceLegalEntities<T>, T> {
    return new GetByKeyRequestBuilder<InvoiceLegalEntities<T>, T>(
      this.entityApi,
      { Selected: selected }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InvoiceLegalEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InvoiceLegalEntities`.
   */
  update(
    entity: InvoiceLegalEntities<T>
  ): UpdateRequestBuilder<InvoiceLegalEntities<T>, T> {
    return new UpdateRequestBuilder<InvoiceLegalEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InvoiceLegalEntities`.
   * @param selected Key property. See {@link InvoiceLegalEntities.selected}.
   * @returns A request builder for creating requests that delete an entity of type `InvoiceLegalEntities`.
   */
  delete(selected: BigNumber): DeleteRequestBuilder<InvoiceLegalEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InvoiceLegalEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InvoiceLegalEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InvoiceLegalEntities<T>
  ): DeleteRequestBuilder<InvoiceLegalEntities<T>, T>;
  delete(
    selectedOrEntity: any
  ): DeleteRequestBuilder<InvoiceLegalEntities<T>, T> {
    return new DeleteRequestBuilder<InvoiceLegalEntities<T>, T>(
      this.entityApi,
      selectedOrEntity instanceof InvoiceLegalEntities
        ? selectedOrEntity
        : { Selected: selectedOrEntity! }
    );
  }
}
