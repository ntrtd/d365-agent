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
import { RetailTillLayoutStores } from './RetailTillLayoutStores';

/**
 * Request builder class for operations supported on the {@link RetailTillLayoutStores} entity.
 */
export class RetailTillLayoutStoresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTillLayoutStores<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTillLayoutStores` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTillLayoutStores` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTillLayoutStores<T>, T> {
    return new GetAllRequestBuilder<RetailTillLayoutStores<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTillLayoutStores` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTillLayoutStores`.
   */
  create(
    entity: RetailTillLayoutStores<T>
  ): CreateRequestBuilder<RetailTillLayoutStores<T>, T> {
    return new CreateRequestBuilder<RetailTillLayoutStores<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTillLayoutStores` entity based on its keys.
   * @param layoutId Key property. See {@link RetailTillLayoutStores.layoutId}.
   * @param omOperatingUnitNumber Key property. See {@link RetailTillLayoutStores.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTillLayoutStores` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTillLayoutStores<T>, T> {
    return new GetByKeyRequestBuilder<RetailTillLayoutStores<T>, T>(
      this.entityApi,
      {
        LayoutId: layoutId,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTillLayoutStores`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTillLayoutStores`.
   */
  update(
    entity: RetailTillLayoutStores<T>
  ): UpdateRequestBuilder<RetailTillLayoutStores<T>, T> {
    return new UpdateRequestBuilder<RetailTillLayoutStores<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutStores`.
   * @param layoutId Key property. See {@link RetailTillLayoutStores.layoutId}.
   * @param omOperatingUnitNumber Key property. See {@link RetailTillLayoutStores.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutStores`.
   */
  delete(
    layoutId: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTillLayoutStores<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutStores`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutStores` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTillLayoutStores<T>
  ): DeleteRequestBuilder<RetailTillLayoutStores<T>, T>;
  delete(
    layoutIdOrEntity: any,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTillLayoutStores<T>, T> {
    return new DeleteRequestBuilder<RetailTillLayoutStores<T>, T>(
      this.entityApi,
      layoutIdOrEntity instanceof RetailTillLayoutStores
        ? layoutIdOrEntity
        : {
            LayoutId: layoutIdOrEntity!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}
