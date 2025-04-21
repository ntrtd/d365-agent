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
import { RetailDesignerTillLayoutZoneReferences } from './RetailDesignerTillLayoutZoneReferences';

/**
 * Request builder class for operations supported on the {@link RetailDesignerTillLayoutZoneReferences} entity.
 */
export class RetailDesignerTillLayoutZoneReferencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDesignerTillLayoutZoneReferences<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDesignerTillLayoutZoneReferences` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDesignerTillLayoutZoneReferences` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDesignerTillLayoutZoneReferences<T>, T> {
    return new GetAllRequestBuilder<
      RetailDesignerTillLayoutZoneReferences<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailDesignerTillLayoutZoneReferences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDesignerTillLayoutZoneReferences`.
   */
  create(
    entity: RetailDesignerTillLayoutZoneReferences<T>
  ): CreateRequestBuilder<RetailDesignerTillLayoutZoneReferences<T>, T> {
    return new CreateRequestBuilder<
      RetailDesignerTillLayoutZoneReferences<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailDesignerTillLayoutZoneReferences` entity based on its keys.
   * @param layoutId Key property. See {@link RetailDesignerTillLayoutZoneReferences.layoutId}.
   * @param zone Key property. See {@link RetailDesignerTillLayoutZoneReferences.zone}.
   * @returns A request builder for creating requests to retrieve one `RetailDesignerTillLayoutZoneReferences` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>,
    zone: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailDesignerTillLayoutZoneReferences<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailDesignerTillLayoutZoneReferences<T>,
      T
    >(this.entityApi, {
      LayoutId: layoutId,
      Zone: zone
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDesignerTillLayoutZoneReferences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDesignerTillLayoutZoneReferences`.
   */
  update(
    entity: RetailDesignerTillLayoutZoneReferences<T>
  ): UpdateRequestBuilder<RetailDesignerTillLayoutZoneReferences<T>, T> {
    return new UpdateRequestBuilder<
      RetailDesignerTillLayoutZoneReferences<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDesignerTillLayoutZoneReferences`.
   * @param layoutId Key property. See {@link RetailDesignerTillLayoutZoneReferences.layoutId}.
   * @param zone Key property. See {@link RetailDesignerTillLayoutZoneReferences.zone}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDesignerTillLayoutZoneReferences`.
   */
  delete(
    layoutId: string,
    zone: BigNumber
  ): DeleteRequestBuilder<RetailDesignerTillLayoutZoneReferences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDesignerTillLayoutZoneReferences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDesignerTillLayoutZoneReferences` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDesignerTillLayoutZoneReferences<T>
  ): DeleteRequestBuilder<RetailDesignerTillLayoutZoneReferences<T>, T>;
  delete(
    layoutIdOrEntity: any,
    zone?: BigNumber
  ): DeleteRequestBuilder<RetailDesignerTillLayoutZoneReferences<T>, T> {
    return new DeleteRequestBuilder<
      RetailDesignerTillLayoutZoneReferences<T>,
      T
    >(
      this.entityApi,
      layoutIdOrEntity instanceof RetailDesignerTillLayoutZoneReferences
        ? layoutIdOrEntity
        : {
            LayoutId: layoutIdOrEntity!,
            Zone: zone!
          }
    );
  }
}
