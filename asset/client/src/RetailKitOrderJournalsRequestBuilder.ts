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
import { RetailKitOrderJournals } from './RetailKitOrderJournals';

/**
 * Request builder class for operations supported on the {@link RetailKitOrderJournals} entity.
 */
export class RetailKitOrderJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailKitOrderJournals<T>, T> {
  /**
   * Returns a request builder for querying all `RetailKitOrderJournals` entities.
   * @returns A request builder for creating requests to retrieve all `RetailKitOrderJournals` entities.
   */
  getAll(): GetAllRequestBuilder<RetailKitOrderJournals<T>, T> {
    return new GetAllRequestBuilder<RetailKitOrderJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailKitOrderJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailKitOrderJournals`.
   */
  create(
    entity: RetailKitOrderJournals<T>
  ): CreateRequestBuilder<RetailKitOrderJournals<T>, T> {
    return new CreateRequestBuilder<RetailKitOrderJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailKitOrderJournals` entity based on its keys.
   * @param kitProductNumber Key property. See {@link RetailKitOrderJournals.kitProductNumber}.
   * @param kitConfigId Key property. See {@link RetailKitOrderJournals.kitConfigId}.
   * @param name Key property. See {@link RetailKitOrderJournals.name}.
   * @returns A request builder for creating requests to retrieve one `RetailKitOrderJournals` entity based on its keys.
   */
  getByKey(
    kitProductNumber: DeserializedType<T, 'Edm.String'>,
    kitConfigId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailKitOrderJournals<T>, T> {
    return new GetByKeyRequestBuilder<RetailKitOrderJournals<T>, T>(
      this.entityApi,
      {
        KitProductNumber: kitProductNumber,
        KitConfigId: kitConfigId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailKitOrderJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailKitOrderJournals`.
   */
  update(
    entity: RetailKitOrderJournals<T>
  ): UpdateRequestBuilder<RetailKitOrderJournals<T>, T> {
    return new UpdateRequestBuilder<RetailKitOrderJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailKitOrderJournals`.
   * @param kitProductNumber Key property. See {@link RetailKitOrderJournals.kitProductNumber}.
   * @param kitConfigId Key property. See {@link RetailKitOrderJournals.kitConfigId}.
   * @param name Key property. See {@link RetailKitOrderJournals.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitOrderJournals`.
   */
  delete(
    kitProductNumber: string,
    kitConfigId: string,
    name: string
  ): DeleteRequestBuilder<RetailKitOrderJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailKitOrderJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitOrderJournals` by taking the entity as a parameter.
   */
  delete(
    entity: RetailKitOrderJournals<T>
  ): DeleteRequestBuilder<RetailKitOrderJournals<T>, T>;
  delete(
    kitProductNumberOrEntity: any,
    kitConfigId?: string,
    name?: string
  ): DeleteRequestBuilder<RetailKitOrderJournals<T>, T> {
    return new DeleteRequestBuilder<RetailKitOrderJournals<T>, T>(
      this.entityApi,
      kitProductNumberOrEntity instanceof RetailKitOrderJournals
        ? kitProductNumberOrEntity
        : {
            KitProductNumber: kitProductNumberOrEntity!,
            KitConfigId: kitConfigId!,
            Name: name!
          }
    );
  }
}
